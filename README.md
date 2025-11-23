# La Pastry Ville — Hugo site

Minimal, single-page Hugo site for a home/dark bakery focused on croissants and puff pastry.

## Quick start

```bash
# 1) Install Hugo Extended: https://gohugo.io/getting-started/installing/
hugo version

# 2) Run locally
hugo server -D

# 3) Build
hugo --minify
```

## Customize

- **config.toml** → set `email`, `whatsapp`, `preorder_url`, and texts under `[params]`.
- **data/products.yaml** → edit menu items and prices.
- **data/instagram.yaml** → add Instagram post links under `posts:` to auto-embed (no tokens required).
- **static/images/logo.jpg** → replace if you ever update the logo.
- **static/css/site.css** → tweak colors/spacing.

## Instagram Posts

The site can automatically fetch and display the latest Instagram posts from your profile.

### Automatic Fetching (Recommended)

1. Install Python dependencies:
```bash
pip install requests beautifulsoup4 pyyaml
```

2. Run the fetch script:
```bash
python3 scripts/fetch-instagram.py
```

This will automatically:
- Fetch the latest posts from your Instagram profile
- Filter by hashtag if `instagram_hashtag` is set in `config.toml`
- Update `data/instagram.yaml` with the posts

3. Configure in `config.toml`:
```toml
[params]
  instagram = "https://www.instagram.com/lapastryville/"
  instagram_hashtag = "lapastryville"  # Optional: filter posts by hashtag
  instagram_max_posts = 12             # Maximum posts to display
```

### Manual Setup

If automatic fetching doesn't work, you can manually add posts to `data/instagram.yaml`:

```yaml
profile: "https://www.instagram.com/lapastryville/"
posts:
  - "https://www.instagram.com/p/XXXXXXXXX/"
  - "https://www.instagram.com/p/YYYYYYYYY/"
```

**Note:** Instagram's page structure changes frequently, so automatic fetching may not always work. For production, consider using Instagram's official Basic Display API. See `scripts/README.md` for more details.

## Deployment — GitHub Pages

This repo includes a workflow `.github/workflows/hugo.yml` that builds the site and deploys to GitHub Pages on pushes to `main`.

Steps:
1. Push this project to `github.com/igor-sokolov/la-pastry-ville`.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main`. The workflow will publish from `public/` to Pages.

The workflow automatically attempts to fetch Instagram posts before building (if it fails, it uses manual posts from YAML).

If your Pages URL differs, update `baseURL` in `config.toml` accordingly.

## Notes

- Instagram section uses official embeds via `instagram.com/embed.js`. Posts are automatically fetched or can be manually added.
- No external theme; layouts are inside `layouts/`. No JS build step.
- Fully responsive design for desktop, tablet, and mobile devices.
- Accessibility: semantic headings, high-contrast buttons, large tap targets.
