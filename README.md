# Pangasinan Heritage Digital Showcase

**Activity 2 — Static Site Generation, GitHub Repository, GitHub Pages, and Lighthouse Audit**

## Project Information

- **Project Title:** The Pangasinan Heritage Digital Showcase
- **Student Name:** Mark Daris C. Cabico
- **Selected Framework:** Next.js 14 + React 18 + TypeScript
- **Architecture:** Atomic Design + Next.js App Router
- **Rendering:** Static Site Generation (SSG) / static export
- **Deployment:** GitHub Pages
- **Repository:** `pangasinan-heritage-showcase`
- **Live Website:** `https://<github-username>.github.io/pangasinan-heritage-showcase/`

> Replace `<github-username>` with the GitHub username used for submission after deployment.

## Activity 2 Requirements Implemented

### Deliverable 2.1 — Static Site Generation

- Next.js static export is enabled with `output: "export"`.
- `generateStaticParams()` generates the three heritage detail pages at build time.
- Activity 1.1 Atomic Design components are reused.
- The interface remains mobile-first and responsive.
- Images are unoptimized static SVG assets suitable for static hosting.
- GitHub Pages project `basePath` support is configured for `/pangasinan-heritage-showcase`.
- Trailing slashes are enabled for reliable static-host routing.

### Deliverable 2.2 — GitHub Repository and GitHub Pages

The project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

1. Installs dependencies with `npm install`.
2. Builds the static site with `npm run build`.
3. Uploads the generated `out/` folder as a Pages artifact.
4. Deploys the artifact to GitHub Pages.

### Deliverable 2.3 — Lighthouse Audit

Run Lighthouse on the live GitHub Pages URL and record the final scores below.

| Category | Target | Final Score |
|---|---:|---:|
| Performance | ≥ 80 | ______ |
| Accessibility | ≥ 85 | ______ |
| Best Practices | ≥ 85 | ______ |
| SEO | ≥ 90 | ______ |

## Local Development

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Static Build

```bash
npm run build
```

The generated static website is placed in the `out/` directory.

## GitHub Pages Setup

1. Create a **public** GitHub repository named `pangasinan-heritage-showcase`.
2. Push the complete contents of this `source-code` folder to the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. Wait for the **Deploy Next.js to GitHub Pages** workflow to finish.
7. Open the published Pages URL.

## Lighthouse Procedure

1. Open the published GitHub Pages website in Google Chrome.
2. Right-click and select **Inspect**.
3. Open the **Lighthouse** tab.
4. Select **Performance**, **Accessibility**, **Best Practices**, and **SEO**.
5. Run the audit.
6. Save a screenshot or PDF of the results.
7. Submit the results through Google Classroom.

## Submission Checklist

- [ ] Public GitHub Repository Link
- [ ] GitHub Pages Live Website Link
- [ ] Lighthouse screenshot/PDF
- [ ] Performance score ≥ 80
- [ ] Accessibility score ≥ 85
- [ ] Best Practices score ≥ 85
- [ ] SEO score ≥ 90

## Atomic Design Components

### Atoms
- Button
- Typography
- Color Tokens
- Icon
- Image

### Molecules
- Heritage Card
- Search Form
- Navigation Item

### Organisms
- Heritage Grid
- Header Navigation
