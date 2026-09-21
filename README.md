# DevOps CI/CD Project

An automated CI/CD pipeline for a static web application. GitHub Actions builds and tests the project on every push to `main`, then deploys the generated website to GitHub Pages.

## Features

- Home page introducing the CI/CD workflow
- Interactive pipeline dashboard
- Simulated pipeline execution with status updates
- Build log display for checkout, dependency installation, testing, and deployment
- GitHub Actions workflow that builds, tests, and deploys the site

## Project Structure

- `index.html` - project landing page
- `dashboard.html` - pipeline dashboard
- `dashboard.js` - simulated pipeline behavior
- `style.css` - application styles
- `app.js` - project entry script
- `package.json` - project metadata and build/test commands
- `scripts/build.js` - prepares the deployable `dist` folder
- `scripts/test.js` - validates required project files

## Run Locally

No runtime server or dependency installation is required for local preview. Open `index.html` in a browser, then select **Open Dashboard**.

The project test command can be run with:

```bash
npm test
npm run build
```

## GitHub

This project is hosted at:

https://github.com/Vishnuu1517/devops-ci-cd-project

To publish future changes:

```bash
git add .
git commit -m "Describe your changes"
git push
```

## Deployment

The workflow in `.github/workflows/ci-cd.yml` runs on every push to `main`. It installs dependencies, runs tests, builds the site into `dist`, and deploys that folder to GitHub Pages. In the repository settings, set **Pages** to use **GitHub Actions** as the source for the first deployment.
