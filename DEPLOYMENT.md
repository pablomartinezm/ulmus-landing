# Deployment Guide

This guide explains how to deploy your ulmus-landing project to GitHub Pages.

## Prerequisites

1. **GitHub Repository**: Make sure your project is pushed to a GitHub repository
2. **Node.js**: Ensure you have Node.js installed (version 16 or higher)
3. **Git**: Make sure Git is configured with your GitHub credentials

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

**Setup:**
1. Push your code to GitHub
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically run on every push to main

### Method 2: Manual Deployment

You can deploy manually using either the deployment script or npm commands.

#### Using the deployment script:
```bash
./deploy.sh
```

#### Using npm commands:
```bash
# Install dependencies (if not already installed)
npm install

# Deploy to GitHub Pages
npm run deploy
```

## Configuration

### Important Configuration Notes:

1. **Base Path**: The `vite.config.js` is configured with `base: '/ulmus-landing/'`. 
   - Replace `ulmus-landing` with your actual repository name
   - If your repository name is different, update this in `vite.config.js`

2. **Repository Settings**: 
   - Your GitHub repository must be public (for free GitHub Pages)
   - Or you need GitHub Pro/Team for private repository Pages

### Updating the Base Path

If your repository name is different from "ulmus-landing", update the base path in `vite.config.js`:

```javascript
export default defineConfig({
  // ... other config
  base: '/your-repository-name/', // Replace with your actual repo name
  // ... rest of config
});
```

## Accessing Your Deployed Site

After successful deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/ulmus-landing/
```

Replace `YOUR_USERNAME` with your GitHub username and `ulmus-landing` with your repository name.

## Troubleshooting

### Common Issues:

1. **404 Error**: Check that the base path in `vite.config.js` matches your repository name
2. **Assets not loading**: Ensure the base path is correctly configured
3. **Deployment fails**: Check that GitHub Pages is enabled in your repository settings
4. **Old version showing**: GitHub Pages can take a few minutes to update; clear your browser cache

### Checking Deployment Status:

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. Check the status of your deployment workflow

## Local Development

For local development, use:
```bash
npm run dev
```

To preview the production build locally:
```bash
npm run build
npm run preview
```

## Build Output

The build process creates a `dist` folder with the production-ready files. This folder is automatically deployed to GitHub Pages.
