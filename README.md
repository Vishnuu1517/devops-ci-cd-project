# DevOps CI/CD Project

A lightweight web application that demonstrates the main stages of a CI/CD pipeline through an interactive dashboard. The project is designed as a simple visual introduction to continuous integration, continuous deployment, and pipeline monitoring.

## Features

- Home page introducing the CI/CD workflow
- Interactive pipeline dashboard
- Simulated pipeline execution with status updates
- Build log display for checkout, dependency installation, testing, and deployment
- GitHub Actions workflow location in `.github/workflows/`

## Project Structure

- `index.html` - project landing page
- `dashboard.html` - pipeline dashboard
- `dashboard.js` - simulated pipeline behavior
- `style.css` - application styles
- `app.js` - project entry script
- `package.json` - project metadata and test command

## Run Locally

No server or dependency installation is required for the current static demo. Open `index.html` in a browser, then select **Open Dashboard**.

The project test command can be run with:

```bash
npm test
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

## Note

The pipeline shown in the dashboard is a front-end simulation for learning and demonstration purposes. It does not perform a real build or deployment.
