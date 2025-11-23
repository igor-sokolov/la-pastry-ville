/**
 * Instagram Posts Fetcher
 * Fetches latest Instagram posts from a profile and optionally filters by hashtag.
 * 
 * Note: Instagram's public API is limited. This uses a combination of approaches:
 * 1. Fetches posts from Instagram's public profile page
 * 2. Filters by hashtag if specified
 * 3. Falls back to manual posts from data/instagram.yaml if fetching fails
 */

(function() {
  'use strict';

  const INSTAGRAM_USERNAME = 'lapastryville'; // Will be set from config
  const HASHTAG_FILTER = null; // Will be set from config, e.g., 'lapastryville'
  const MAX_POSTS = 12;

  /**
   * Extract Instagram username from URL
   */
  function getUsernameFromUrl(url) {
    const match = url.match(/instagram\.com\/([^\/\?]+)/);
    return match ? match[1] : null;
  }

  /**
   * Fetch Instagram posts using Instagram's oEmbed API
   * This is a simpler approach that works with public posts
   */
  async function fetchInstagramPosts(username, hashtagFilter = null, maxPosts = 12) {
    const posts = [];
    
    // Note: Instagram doesn't provide a simple public API for fetching profile posts
    // For production, you should use:
    // 1. Instagram Basic Display API (requires OAuth)
    // 2. Instagram Graph API (requires Facebook app)
    // 3. A build-time script that updates data/instagram.yaml
    
    // For now, we'll use a service or fallback to manual posts
    // This is a placeholder that would need to be replaced with actual API calls
    
    try {
      // Option 1: Use a proxy service (you'd need to set this up)
      // const response = await fetch(`/api/instagram/${username}?hashtag=${hashtagFilter || ''}`);
      // const data = await response.json();
      // return data.posts.slice(0, maxPosts);
      
      // Option 2: For now, return empty and let the manual posts from YAML show
      console.log('Instagram auto-fetch requires API setup. Using manual posts from data/instagram.yaml');
      return [];
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      return [];
    }
  }

  /**
   * Filter posts by hashtag
   */
  function filterPostsByHashtag(posts, hashtag) {
    if (!hashtag) return posts;
    
    return posts.filter(post => {
      // This would need to fetch post data to check hashtags
      // For now, we'll rely on server-side filtering
      return true;
    });
  }

  /**
   * Initialize Instagram embeds
   */
  function initInstagramEmbeds() {
    // Instagram's embed.js should already be loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Load embed script if not already loaded
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = function() {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.head.appendChild(script);
    }
  }

  /**
   * Main initialization
   */
  async function init() {
    const instagramSection = document.getElementById('instagram-posts');
    if (!instagramSection) return;

    // Get config from data attributes or use defaults
    const username = instagramSection.dataset.username || INSTAGRAM_USERNAME;
    const hashtagFilter = instagramSection.dataset.hashtag || HASHTAG_FILTER;
    const maxPosts = parseInt(instagramSection.dataset.maxPosts || MAX_POSTS);

    // Try to fetch posts (this will be empty until API is set up)
    const fetchedPosts = await fetchInstagramPosts(username, hashtagFilter, maxPosts);

    // If we got posts, update the DOM
    if (fetchedPosts.length > 0) {
      const grid = instagramSection.querySelector('.ig-grid');
      if (grid) {
        grid.innerHTML = '';
        fetchedPosts.forEach(postUrl => {
          const blockquote = document.createElement('blockquote');
          blockquote.className = 'instagram-media';
          blockquote.setAttribute('data-instgrm-permalink', postUrl);
          blockquote.setAttribute('data-instgrm-version', '14');
          grid.appendChild(blockquote);
        });
        
        // Re-process embeds
        initInstagramEmbeds();
      }
    } else {
      // Use existing posts from Hugo template (manual posts from YAML)
      initInstagramEmbeds();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

