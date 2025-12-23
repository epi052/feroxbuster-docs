# feroxbuster Documentation

New documentation site for [feroxbuster](https://github.com/epi052/feroxbuster), built with [Astro Starlight](https://starlight.astro.build/).

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open the site**:
   Navigate to `http://localhost:4321/feroxbuster-docs`.

## Deployment

This site is automatically deployed to GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml) on every push to the `master` branch.

To enable deployment:
1. Ensure the repository settings have **GitHub Actions** selected as the source for Pages.
2. The site will be available at `https://epi052.github.io/feroxbuster-docs/`.

## Architecture

- **Framework**: Astro Starlight
- **Search**: Algolia DocSearch
- **Theme**: Custom "Refined Dark Minimalism" with Outfit and Source Code Pro typography.
- **Content**: MDX/Markdown located in `src/content/docs/`.