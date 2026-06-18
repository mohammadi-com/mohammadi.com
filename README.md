# mohammadi.com

Personal website and weblog for Mohammad Mohammadi.

The site is intentionally static: Astro, TypeScript, Markdown content collections, system fonts, and no backend runtime. The homepage is the weblog index; durable profile, project, and contact context lives on `/about/`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

The deployment script builds locally, uploads `dist/` to the server over SSH, switches the current release symlink, and reloads Nginx.

```bash
DEPLOY_HOST=username@example.com npm run deploy
```

The deployment host is intentionally not stored in this public repository. Optional environment variables:

```bash
REMOTE_ROOT=/var/www/mohammadi.com DOMAIN=mohammadi.com WWW_DOMAIN=www.mohammadi.com npm run deploy
```
