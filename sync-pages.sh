#!/bin/bash
echo "🚀 Deploying to GitHub Pages..."
cd ~/nali-v1-01/md-notes/prod

if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/nali-v1/md_notes.git
fi

git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git branch -M main
git push -u origin main --force
echo "✅ Live at: https://nali-v1.github.io/md_notes/"
