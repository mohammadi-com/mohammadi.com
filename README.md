# mohammadi.com

Personal website for Mohammad Mohammadi.

The site is intentionally static: Astro, TypeScript, system fonts, and no backend runtime. It is designed to deploy as plain files behind Nginx on the Ubuntu server that serves `mohammadi.com`.

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
npm run deploy
```

Defaults:

- Host: `username@example.com`
- Domain: `mohammadi.com`
- Remote root: `/var/www/mohammadi.com`

Override with environment variables:

```bash
DEPLOY_HOST=username@example.com REMOTE_ROOT=/var/www/mohammadi.com npm run deploy
```
