# Mohammadi.com

This is the source code for my personal website, built with [Astro](https://astro.build) and deployed on a small Ubuntu/Nginx server.

## About

I'm Mohammad Mohammadi. This website hosts my personal blog and information about my work.

## Project Structure

```text
├── public/               # Static assets (images, favicon)
├── src/
│   ├── assets/           # Icons and images used in components
│   ├── components/       # Reusable UI components
│   ├── content/          # Content collections
│   │   ├── pages/        # Durable pages in Markdown format
│   │   └── posts/        # Blog posts in Markdown format
│   ├── layouts/          # Page layouts and templates
│   ├── pages/            # Routes and pages
│   ├── styles/           # Global styles and CSS
│   └── utils/            # Utility functions
├── astro.config.ts       # Astro configuration
├── package.json          # Project dependencies and scripts
└── LICENSE               # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally, before deploying |
| `npm run lint`    | Run ESLint                                  |

## Deployment

The deployment script builds locally, uploads `dist/` to the server over SSH, switches the current release symlink, and reloads Nginx.

```bash
DEPLOY_HOST=username@example.com npm run deploy
```

The deployment host is intentionally not stored in this public repository.

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: Licensed under the [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to [Sat Naing](https://github.com/satnaing) for creating the excellent [AstroPaper theme](https://astro-paper.pages.dev/) that served as the foundation for this website. Their thoughtful design and clean architecture made it a joy to build upon.
