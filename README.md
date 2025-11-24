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
- **data/products.yaml** → edit menu items and descriptions.
- **static/images/logo*.png** → replace if you ever update the logos.
- **static/css/site.css** → tweak colors/spacing.

## Deployment — GitHub Pages

This repo includes a workflow `.github/workflows/hugo.yml` that builds the site and deploys to GitHub Pages on pushes to `main`.

Steps:
1. Push this project to `github.com/igor-sokolov/la-pastry-ville`.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main`. The workflow will publish from `public/` to Pages.

If your Pages URL differs, update `baseURL` in `config.toml` accordingly.

## Notes

- No external theme; layouts are inside `layouts/`. No JS build step.
- Fully responsive design for desktop, tablet, and mobile devices.
- Accessibility: semantic headings, high-contrast buttons, large tap targets.
- Instagram links are simple external links (no feed integration).
