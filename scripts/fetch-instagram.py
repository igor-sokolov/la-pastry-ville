#!/usr/bin/env python3
"""
Fetch latest Instagram posts for La Pastry Ville Hugo site.
This script fetches posts from Instagram and optionally filters by hashtag.
"""

import json
import re
import sys
import yaml
from pathlib import Path
from urllib.parse import urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Error: Required packages not installed.")
    print("Install with: pip install requests beautifulsoup4 pyyaml")
    sys.exit(1)


def extract_instagram_posts_from_profile(username, max_posts=12, hashtag_filter=None):
    """
    Fetch Instagram posts from a public profile.
    
    Note: Instagram's public pages don't have a simple API. This script attempts
    to extract posts from the page structure, but Instagram frequently changes
    their HTML structure. For production, consider using Instagram Basic Display API.
    
    Alternative: Use a service like:
    - RSSHub (https://github.com/DIYgod/RSSHub) - provides Instagram RSS feeds
    - Instagram Basic Display API (official, requires OAuth)
    - Instagram Graph API (requires Facebook app)
    """
    posts = []
    
    # Instagram profile URL
    profile_url = f"https://www.instagram.com/{username}/"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
        }
        response = requests.get(profile_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        html = response.text
        
        # Method 1: Try to find JSON data in script tags
        # Instagram stores post data in window._sharedData or similar
        json_patterns = [
            r'window\._sharedData\s*=\s*({.+?});',
            r'window\.__additionalDataLoaded\s*\([^,]+,\s*({.+?})\)',
        ]
        
        for pattern in json_patterns:
            matches = re.finditer(pattern, html, re.DOTALL)
            for match in matches:
                try:
                    json_str = match.group(1)
                    data = json.loads(json_str)
                    
                    # Navigate the JSON structure (Instagram's structure varies)
                    user_data = (data.get('entry_data', {})
                                .get('ProfilePage', [{}])[0]
                                .get('graphql', {})
                                .get('user', {}))
                    
                    edges = user_data.get('edge_owner_to_timeline_media', {}).get('edges', [])
                    
                    for edge in edges[:max_posts * 2]:  # Get extra to filter
                        if len(posts) >= max_posts:
                            break
                            
                        node = edge.get('node', {})
                        shortcode = node.get('shortcode')
                        
                        if not shortcode:
                            continue
                        
                        post_url = f"https://www.instagram.com/p/{shortcode}/"
                        
                        # Check for hashtag filter if specified
                        if hashtag_filter:
                            caption_edges = node.get('edge_media_to_caption', {}).get('edges', [])
                            if caption_edges:
                                caption = caption_edges[0].get('node', {}).get('text', '')
                                hashtags = re.findall(r'#(\w+)', caption.lower())
                                filter_lower = hashtag_filter.lower().lstrip('#')
                                if filter_lower not in [h.lower() for h in hashtags]:
                                    continue
                        
                        posts.append(post_url)
                    
                    if posts:
                        break
                except (json.JSONDecodeError, KeyError, IndexError, ValueError) as e:
                    continue
        
        # Method 2: Fallback - extract post URLs from HTML links
        if not posts:
            soup = BeautifulSoup(html, 'html.parser')
            links = soup.find_all('a', href=re.compile(r'/p/[^/]+/'))
            seen = set()
            
            for link in links:
                if len(posts) >= max_posts:
                    break
                    
                href = link.get('href', '')
                if href and href.startswith('/p/'):
                    post_url = f"https://www.instagram.com{href.rstrip('/')}/"
                    if post_url not in seen:
                        posts.append(post_url)
                        seen.add(post_url)
        
    except requests.RequestException as e:
        print(f"⚠ Warning: Could not fetch Instagram posts: {e}")
        print("   Instagram may have rate-limited the request or changed their structure.")
        print("   You may need to manually add posts to data/instagram.yaml")
        return []
    except Exception as e:
        print(f"⚠ Warning: Error parsing Instagram data: {e}")
        return []
    
    return posts


def update_instagram_yaml(posts, output_path, username, hashtag_filter=None):
    """Update the Instagram YAML file with fetched posts."""
    data = {
        'profile': f"https://www.instagram.com/{username}/",
        'posts': posts
    }
    
    if hashtag_filter:
        data['hashtag_filter'] = hashtag_filter
    
    with open(output_path, 'w') as f:
        yaml.dump(data, f, default_flow_style=False, sort_keys=False)
    
    print(f"✓ Updated {output_path} with {len(posts)} posts")
    if hashtag_filter:
        print(f"  Filtered by hashtag: #{hashtag_filter}")


def main():
    """Main function."""
    # Get project root (parent of scripts directory)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    data_dir = project_root / 'data'
    output_file = data_dir / 'instagram.yaml'
    
    # Read config to get Instagram username and optional hashtag
    config_file = project_root / 'config.toml'
    username = 'lapastryville'  # default
    hashtag_filter = None
    max_posts = 12
    
    if config_file.exists():
        config_content = config_file.read_text()
        # Extract Instagram URL
        instagram_match = re.search(r'instagram\s*=\s*["\']https://www\.instagram\.com/([^/]+)/', config_content)
        if instagram_match:
            username = instagram_match.group(1)
        
        # Check for hashtag filter in config (we'll add this)
        hashtag_match = re.search(r'instagram_hashtag\s*=\s*["\']([^"\']+)["\']', config_content)
        if hashtag_match:
            hashtag_filter = hashtag_match.group(1).lstrip('#')
    
    print(f"Fetching Instagram posts for @{username}...")
    if hashtag_filter:
        print(f"Filtering by hashtag: #{hashtag_filter}")
    
    posts = extract_instagram_posts_from_profile(username, max_posts, hashtag_filter)
    
    if posts:
        update_instagram_yaml(posts, output_file, username, hashtag_filter)
        print(f"\n✓ Successfully fetched {len(posts)} posts")
    else:
        print("\n⚠ No posts found. This could be because:")
        print("  - The profile is private")
        print("  - Instagram's page structure changed")
        print("  - Network issues")
        print("\nYou can manually add posts to data/instagram.yaml")


if __name__ == '__main__':
    main()

