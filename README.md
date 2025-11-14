
# Markdown Garden 🌱

A beautiful, minimalist markdown viewer optimized for GitHub Pages. Perfect for personal knowledge bases, project documentation, or digital gardens.

## ✨ Features

Beautiful Design: Clean dark theme interface with eye-care reading mode
GitHub Pages Optimized: Serves directly from `/docs` folder
Universal Viewer: Single `index.html` handles all markdown files
Fast & Lightweight: Pure HTML/CSS - no JavaScript complexity
Responsive: Works perfectly on desktop, tablet, and mobile
Syntax Highlighting: Beautiful grey theme code blocks with copy functionality
Simple Deployment: One-command sync to GitHub Pages


## 🚀 Quick Start

### 1. Clone & Explore
```bash
git clone https://github.com/nali-v1/md-viewer-prod.git
cd md-viewer-prod/docs

# Open in browser
open index.html
# or serve locally
python -m http.server 8000
```

### 2. View Live site
Visit: https://nali-v1.github.io/md_notes/

## 📝 How to Use

### Adding New Content
 Add markdown file to `/docs` folder
 Update links in `index.md`
 `sync-pages.sh`

### Example: Add New Notes
```bash
cd docs
echo "# My New Notes\n\nContent here..." > new-notes.md
# Update index.md to include link if desired
cd ..
./sync-pages.sh

### Accessing Documents

https://github.com/nali-v1/md_notes

## 🎨 Design Features

Eye-Care Reading: Soft cream background (`#f8f4e9`) for comfortable reading
Optimal Layout: 15% margins with centered content for focus
Professional Code: Grey theme syntax highlighting with copy buttons
Dark Interface: Beautiful dark theme for file browsing
Mobile First: Fully responsive design

## 🔄 Workflow

### Simple Content Updates
```bash
# 1. Edit or add markdown files in /docs
vim docs/new-tutorial.md

# 2. Deploy with one command
./sync-pages.sh

# 3. Live in 1-2 minutes!
```

### The Magic
Single `index.html` renders any markdown file via URL parameter
No build process - pure static files
GitHub Pages serves everything from `/docs`
Instant updates with simple git push

## 📁 File Structure

```
docs/
├── index.html          # Universal viewer (handles all .md files)
├── style.css           # Complete beautiful styling
├── index.md           # Table of contents & navigation
├── nvim.md           # Neovim configuration guide  
├── LICENSE.md         # Project license
├── README.md         # Project documentation
└── images/           # All project images
    └── neofetch-acemagic.png
```

## 🌐 GitHub Pages Setup


 Repository Settings → PagesSource
 Source: Deploy from `main` branch, `/docs` folder
 Custom Domain: Optional (if you have one)
 Auto-deploy: On every push to main

Your site will be available at:
`https://[username].github.io/md_notes/`

## 🛠️ Technical Details

No JavaScript Complexity: Simple URL parameter system
Markdown Processing: Client-side with marked.js CDN
Syntax Highlighting: Highlight.js with custom grey theme
Copy Functionality: One-click code block copying
Progressive Enhancement: Works without JavaScript (basic mode)

## 📝 Content Tips

 Organize Naturally: Add files as you create them
 Meaningful Filenames: `topic-description.md` format
 Cross-Linking: Use relative links between documents
 Regular Updates: The simple workflow encourages frequent updates

## 🔧 Customization

### Modify Styling
Edit `docs/style.css` - all design variables are CSS custom properties:

```css
:root {
    --ui-bg: #0a0a0a;          /* Dark theme background */
    --paper-bg: #f8f4e9;       /* Eye-care reading background */
    --code-bg: #2d2d2d;        /* Code block background */
    /* ... and more */
}
```

### Add Features
The universal `index.html` can be extended while maintaining simplicity.


Live Site: https://nali-v1.github.io/md_notes/  
Repository: https://github.com/nali-v1/md_notes/

*Built with ❤️ for the open source community.*

