# Markdown Garden 🌱

A beautiful, self-hosted markdown documentation viewer with modern design and syntax highlighting. Perfect for personal knowledge bases, project documentation, or digital gardens.

## ✨ Features

- **Beautiful Design**: Clean dark theme with GNOME Terminal Purple code blocks
- **Fast & Lightweight**: Pure HTML/CSS/JS - no build process required
- **Instant Search**: Real-time filtering through all documents
- **Responsive**: Works perfectly on desktop and mobile
- **Syntax Highlighting**: Powered by Highlight.js with copy-to-clipboard
- **Random Discovery**: Explore your knowledge base randomly
- **GitHub Ready**: Perfect for GitHub Pages deployment

## 🚀 Quick Start

### Local Development
```bash
git clone https://github.com/nali-v1/md_notes.git
cd md_notes

# Serve with any local server
python -m http.server 8000
# or: npx serve .
# or: php -S localhost:8000

md_notes/
├── index.html          # Main landing page with document list
├── viewer.html         # Markdown document viewer
├── style.css           # Complete styling
├── script.js           # Utility functions
├── docs/               # Your markdown documents
│   ├── index.md        # Welcome/documentation
│   ├── nvim.md         # Neovim configuration guide
│   └── LICENSE.md      # Project license
└── images/             # Project images


