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

## Website Structure

This is a single-page website with the following sections:

### Main Layout
- **`layouts/index.html`** — Main page template that assembles all sections

### Page Sections (in order)
1. **Hero Section** — Logo, tagline, description, and Instagram CTA button
2. **About Section** — Mission, vision, values, local sourcing info, and feature cards
   - Located in: `layouts/partials/about.html`
3. **Products Section** — Grid of product cards displaying items from `data/products.yaml`
4. **Contact Section** — Contact information, hours, delivery area, and contact form
   - Located in: `layouts/partials/contact.html`

### Partials
- **`layouts/partials/head.html`** — HTML head with meta tags, stylesheets, favicon
- **`layouts/partials/header.html`** — Site header with logo and navigation
- **`layouts/partials/footer.html`** — Footer with links, social media, copyright

### Data Files
- **`data/products.yaml`** — Product categories and items (croissants, danishes, etc.)
- **`data/instagram.yaml`** — Instagram profile URL and post URLs (currently unused)

### Static Assets
- **`static/css/site.css`** — All site styles (colors, typography, responsive design)
- **`static/images/`** — Logo files and other images
  - `logo-main.png` — Hero section logo
  - `logo-header.png` — Header logo
  - `logo-footer.png` — Footer logo
  - `favicon.png` / `favicon.jpg` — Site favicon

### Configuration
- **`config.toml`** — Site configuration, base URL, and parameters
  - `[params]` section contains: tagline, Instagram URL, email, brand colors

## Customization

### Content
- **`config.toml`** → Update `title`, `tagline`, `email`, `instagram` URL under `[params]`
- **`data/products.yaml`** → Edit product categories, items, descriptions, prices
- **`layouts/partials/about.html`** → Modify mission, vision, values, and sourcing text
- **`layouts/partials/contact.html`** → Update operating hours and delivery area

### Visual
- **`static/css/site.css`** → Customize colors (CSS variables at top), spacing, typography
- **`static/images/logo*.png`** → Replace logo files (main, header, footer)
- **`static/images/favicon.*`** → Update favicon files

### Layout
- **`layouts/index.html`** → Reorder or add/remove sections
- **`layouts/partials/*.html`** → Modify individual section templates

## Notes

- No external theme; all layouts are custom in `layouts/`
- No JavaScript build step; pure HTML/CSS
- Fully responsive design for desktop, tablet, and mobile
- Accessibility: semantic HTML, high-contrast buttons, large tap targets
- Instagram links are external links (no feed integration)
