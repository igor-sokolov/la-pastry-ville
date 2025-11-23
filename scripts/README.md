# Instagram Posts Fetcher

This script automatically fetches the latest Instagram posts from your profile and optionally filters them by hashtag.

## Setup

### Option 1: Python Script (Recommended for build automation)

1. Install dependencies:
```bash
pip3 install requests beautifulsoup4 pyyaml
```

2. Run the script:
```bash
python3 scripts/fetch-instagram.py
```

3. The script will:
   - Read your Instagram username from `config.toml`
   - Optionally filter by hashtag if `instagram_hashtag` is set in config
   - Update `data/instagram.yaml` with the latest posts

### Option 2: Manual Setup

If the script doesn't work (Instagram's structure changes frequently), you can manually add posts to `data/instagram.yaml`:

```yaml
profile: "https://www.instagram.com/lapastryville/"
posts:
  - "https://www.instagram.com/p/XXXXXXXXX/"
  - "https://www.instagram.com/p/YYYYYYYYY/"
```

### Option 3: Instagram API (For Production)

For a more reliable solution, set up Instagram's Basic Display API:

1. Go to https://developers.facebook.com/apps/
2. Create a new app
3. Add Instagram Basic Display product
4. Get your access token
5. Update the script to use the API

## Configuration

In `config.toml`, you can set:

```toml
[params]
  instagram = "https://www.instagram.com/lapastryville/"
  instagram_hashtag = "lapastryville"  # Optional: filter by hashtag
  instagram_max_posts = 12             # Maximum posts to display
```

## Automation

You can add this to your build process or GitHub Actions workflow to automatically fetch posts before building:

```yaml
# In .github/workflows/hugo.yml, add before hugo build:
- name: Fetch Instagram posts
  run: |
    pip install requests beautifulsoup4 pyyaml
    python3 scripts/fetch-instagram.py
```

## Troubleshooting

- **No posts found**: Instagram may have changed their page structure. Try the manual method or use Instagram's official API.
- **Rate limiting**: Instagram may rate limit requests. Consider caching results or using the official API.
- **Private profile**: The script only works with public profiles.

