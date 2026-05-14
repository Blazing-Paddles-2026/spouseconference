# Round Rock Fire Foundation — 1884 Fund Website

A multi-page static website for the Round Rock Fire Foundation's 1884 Fund campaign.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Main landing page with mission, fund info, events, and donation CTAs |
| **History** | `/#/history` | Full timeline of the Round Rock Fire Department (1846–Today) |
| **Press Room** | `/#/press-room` | Media coverage, press releases, and contact info |
| **1884 Fund** | `/#/fund-1884` | Detailed information about the emergency relief fund |
| **Fire Foundation Night** | `/#/events/fire-foundation-night` | Event page for the May 29 Express game |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

### Option A: GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Push this code to the `main` branch
3. Go to **Settings > Pages** in your GitHub repo
4. Under **Build and deployment**, select **GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` will build and deploy automatically
6. Your site will be live at `https://yourusername.github.io/repo-name/`

### Option B: Manual Deploy

```bash
npm run build
git add dist -f
git commit -m "Deploy to gh-pages"
git subtree push --prefix dist origin gh-pages
```

### Custom Domain

To use `1884.roundrockfirefoundation.org`:

1. In your GitHub repo, go to **Settings > Pages**
2. Under **Custom domain**, enter `1884.roundrockfirefoundation.org`
3. Add a CNAME record in your DNS pointing `1884.roundrockfirefoundation.org` to `yourusername.github.io`
4. GitHub will automatically create an SSL certificate

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- HashRouter (for static hosting compatibility)
- All photos are authentic Round Rock Fire Department historical photographs

## Source Files

All historical data sourced from the official **Round Rock Volunteer Fire Department History Presentation** provided by the City of Round Rock.
