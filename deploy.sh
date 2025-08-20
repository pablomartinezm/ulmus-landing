#!/bin/bash

# GitHub Pages Deployment Script for ulmus-landing
# This script builds the project and deploys it to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages >/dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deployment completed successfully!"
echo "🌍 Your site will be available at: https://YOUR_USERNAME.github.io/ulmus-landing/"
echo "💡 Note: It may take a few minutes for the changes to appear."
