# Instagram Integration

**Note:** Automatic Instagram feed integration has been removed from the site.

## Current Status

The website currently only includes simple Instagram profile links (in header, footer, and hero sections). There is no automatic fetching or display of Instagram posts.

## Future Integration

If you want to re-introduce Instagram feed functionality in the future, you will need to:

1. Add an Instagram feed section to `layouts/index.html`
2. Add scripts to `layouts/partials/footer.html` for displaying posts
3. Implement a solution for fetching Instagram posts

For production Instagram integration, consider using Instagram's official Basic Display API:
- https://developers.facebook.com/apps/
- Create a new app
- Add Instagram Basic Display product
- Get your access token
