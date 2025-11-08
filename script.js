// File scanning and search functionality
class MarkdownViewer {
    constructor() {
        this.files = [];
        this.allFiles = [];
        this.init();
    }

    async init() {
        await this.scanFiles();
        this.setupSearch();
        this.displayFiles();
    }

    async scanFiles() {
        try {
            this.showLoading();
            this.files = await this.discoverMarkdownFiles();
            this.allFiles = [...this.files];
            console.log('Found files:', this.files);
            
            if (this.files.length === 0) {
                this.showNoFiles();
            } else {
                this.displayFiles();
            }
        } catch (error) {
            console.error('Error scanning files:', error);
            this.showError('Failed to load files. Using demo files instead.');
            this.loadDemoFiles();
        }
    }

    async discoverMarkdownFiles() {
        console.log('Starting file discovery...');
        
        // Try to get files from docs directory first
        const docsFiles = await this.scanDocsDirectory();
        if (docsFiles.length > 0) {
            console.log(`Found ${docsFiles.length} files in docs/ directory`);
            return docsFiles;
        }
        
        // Fallback to manual discovery
        console.log('No files found in docs/, trying manual discovery...');
        const manualFiles = await this.manualDiscovery();
        if (manualFiles.length > 0) {
            console.log(`Found ${manualFiles.length} files via manual discovery`);
            return manualFiles;
        }
        
        // Final fallback to demo files
        console.log('No files found, loading demo files');
        return this.loadDemoFiles();
    }

    async scanDocsDirectory() {
        try {
            console.log('Scanning docs/ directory...');
            
            // Try to fetch the directory listing
            const response = await fetch('docs/');
            if (!response.ok) {
                console.log('docs/ directory not accessible, trying individual files...');
                return await this.scanIndividualFiles();
            }
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Extract all .md file links from the directory listing
            const links = Array.from(doc.querySelectorAll('a[href$=".md"]'));
            console.log('Found links:', links);
            
            const files = [];
            for (const link of links) {
                const href = link.getAttribute('href');
                if (href && !href.includes('..')) {
                    const filename = href.split('/').pop() || href;
                    const filepath = `docs/${filename}`;
                    
                    // Verify the file exists
                    try {
                        const fileResponse = await fetch(filepath);
                        if (fileResponse.ok) {
                            files.push({
                                name: filename,
                                path: filepath,
                                description: this.generateDescription(filename),
                                date: 'Recently modified'
                            });
                            console.log(`Verified file: ${filepath}`);
                        }
                    } catch (error) {
                        console.log(`File not accessible: ${filepath}`);
                    }
                }
            }
            
            return files;
        } catch (error) {
            console.log('Directory scan failed, trying individual files:', error);
            return await this.scanIndividualFiles();
        }
    }

    async scanIndividualFiles() {
        console.log('Scanning for individual markdown files...');
        
        // Common markdown files to check for
        const commonFiles = [
            'README.md', 'readme.md', 'index.md', 'demo.md', 'aliases.md', 
            'functions.md', 'zshrc.md', 'AceMagic1.md', 'test.md', 'example.md',
            'guide.md', 'tutorial.md', 'notes.md', 'cheatsheet.md'
        ];
        
        const directories = ['docs/', 'notes/', 'markdown/', ''];
        const discoveredFiles = [];
        
        for (const directory of directories) {
            console.log(`Checking directory: ${directory}`);
            
            for (const filename of commonFiles) {
                const filepath = `${directory}${filename}`;
                try {
                    const response = await fetch(filepath);
                    if (response.ok) {
                        discoveredFiles.push({
                            name: filename,
                            path: filepath,
                            description: this.generateDescription(filename),
                            date: 'Recently modified'
                        });
                        console.log(`✓ Found: ${filepath}`);
                    }
                } catch (error) {
                    // File doesn't exist, continue
                }
            }
        }
        
        return discoveredFiles;
    }

    async manualDiscovery() {
        console.log('Trying manual discovery...');
        
        // Try GitHub API if we're on GitHub Pages
        if (window.location.hostname.includes('github.io')) {
            const githubFiles = await this.tryGitHubAPI();
            if (githubFiles.length > 0) {
                return githubFiles;
            }
        }
        
        return [];
    }

    async tryGitHubAPI() {
        try {
            const repoInfo = this.getRepoInfo();
            const apiUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/contents/docs`;
            
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('GitHub API not accessible');
            
            const contents = await response.json();
            return contents
                .filter(item => item.type === 'file' && item.name.endsWith('.md'))
                .map(file => ({
                    name: file.name,
                    path: `docs/${file.name}`,
                    description: this.generateDescription(file.name),
                    date: 'GitHub'
                }));
        } catch (error) {
            console.log('GitHub API failed');
            return [];
        }
    }

    getRepoInfo() {
        const url = window.location.href;
        const githubMatch = url.match(/github\.io\/([^\/]+)/);
        
        return githubMatch ? 
            { owner: githubMatch[1], repo: 'md_notes' } :
            { owner: 'nali-v1', repo: 'md_notes' };
    }

    loadDemoFiles() {
        console.log('Loading demo files as fallback');
        return [
            {
                name: 'demo.md',
                path: 'demo.md',
                description: 'Markdown formatting examples and demo',
                date: 'Today'
            },
            {
                name: 'example.md', 
                path: 'example.md',
                description: 'Sample markdown file with code examples',
                date: 'Today'
            }
        ];
    }

    generateDescription(filename) {
        const descriptions = {
            'readme.md': 'Project documentation and overview',
            'index.md': 'Main index and table of contents', 
            'demo.md': 'Markdown formatting examples and syntax guide',
            'aliases.md': 'Shell aliases and shortcuts',
            'functions.md': 'Custom shell functions and utilities',
            'zshrc.md': 'ZSH configuration and settings',
            'acemagic1.md': 'Ubuntu server setup and configuration',
            'test.md': 'Test file for markdown rendering',
            'example.md': 'Sample markdown file with various elements',
            'guide.md': 'User guide and instructions',
            'tutorial.md': 'Step-by-step tutorial',
            'notes.md': 'Personal notes and documentation',
            'cheatsheet.md': 'Quick reference cheatsheet'
        };
        
        const lowerName = filename.toLowerCase();
        return descriptions[lowerName] || `Markdown documentation: ${filename}`;
    }

    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterFiles(e.target.value);
            });
        }
    }

    filterFiles(query) {
        const filtered = query.trim() ? 
            this.allFiles.filter(file => 
                file.name.toLowerCase().includes(query.toLowerCase()) ||
                file.description.toLowerCase().includes(query.toLowerCase())
            ) : this.allFiles;
        
        this.displayFiles(filtered);
    }

    displayFiles(filesToShow = null) {
        const fileList = document.getElementById('fileList');
        const fileCount = document.getElementById('fileCount');
        const files = filesToShow || this.files;

        if (!fileList) return;

        if (files.length === 0) {
            fileCount.textContent = 'No files found';
            fileList.innerHTML = '<li class="error">No markdown files found</li>';
            return;
        }

        fileCount.textContent = `${files.length} markdown file${files.length !== 1 ? 's' : ''} found`;

        fileList.innerHTML = files.map(file => `
            <li>
                <a href="viewer.html?file=${encodeURIComponent(file.path)}" class="file-link">
                    <span class="file-icon">📄</span>
                    ${this.escapeHtml(file.name)}
                </a>
            </li>
        `).join('');
    }

    escapeHtml(unsafe) {
        return unsafe?.replace(/[&<>"']/g, 
            match => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[match])
        ) || '';
    }

    showLoading() {
        const fileList = document.getElementById('fileList');
        const fileCount = document.getElementById('fileCount');
        
        if (fileCount) fileCount.textContent = 'Scanning for files...';
    }

    showNoFiles() {
        const fileList = document.getElementById('fileList');
        const fileCount = document.getElementById('fileCount');
        
        if (fileCount) fileCount.textContent = 'No markdown files found';
        if (fileList) {
            fileList.innerHTML = '<li class="error">No markdown files found in docs/ directory</li>';
        }
    }

    showError(message) {
        const fileCount = document.getElementById('fileCount');
        const fileList = document.getElementById('fileList');
        
        if (fileCount) fileCount.textContent = 'Error loading files';
        if (fileList) {
            fileList.innerHTML = `<li class="error">${this.escapeHtml(message)}</li>`;
        }
    }
}

// Viewer functionality with proper syntax highlighting
class Viewer {
    constructor() {
        this.currentFile = null;
        this.init();
    }

    init() {
        this.loadFileFromURL();
    }

    loadFileFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const file = urlParams.get('file');
        
        console.log('URL file parameter:', file);
        
        if (file) {
            document.getElementById('currentFile').textContent = file;
            this.loadFile(file);
        } else {
            this.showError('No file specified in URL. Please select a file from the browser.');
        }
    }

    async loadFile(filename) {
        try {
            this.showLoading();
            console.log('Loading file:', filename);
            
            const response = await fetch(filename);
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            
            const markdown = await response.text();
            console.log('File loaded successfully, length:', markdown.length);
            this.renderMarkdown(markdown, filename);
        } catch (error) {
            console.error('Error loading file:', error);
            this.showError(`Failed to load "${filename}". Error: ${error.message}`);
        }
    }

    renderMarkdown(markdown, filename) {
        const contentElement = document.getElementById('markdownContent');
        if (!contentElement) return;

        try {
            // Use marked.js if available, otherwise use enhanced basic converter
            if (typeof marked !== 'undefined') {
                contentElement.innerHTML = marked.parse(markdown, {
                    breaks: true,
                    gfm: true
                });
            } else {
                contentElement.innerHTML = this.enhancedMarkdownToHtml(markdown);
            }
            
            document.title = `${filename} - md_notes`;
            this.initializeSyntaxHighlighting();
        } catch (error) {
            console.error('Error rendering markdown:', error);
            contentElement.innerHTML = this.enhancedMarkdownToHtml(markdown);
            this.initializeSyntaxHighlighting();
        }
    }

    enhancedMarkdownToHtml(markdown) {
        if (!markdown) return '<p>No content</p>';
        
        let html = markdown;

        // Enhanced code block parsing - handle various formats
        html = this.processCodeBlocks(html);
        
        // Process inline code
        html = html.replace(/`([^`]+)`/g, '<code class="inline">$1</code>');

        // Process headers
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

        // Process bold and italic
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Process links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

        // Process blockquotes
        html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

        // Process lists
        html = this.processLists(html);

        // Process paragraphs with proper line handling
        html = this.processParagraphs(html);

        return html;
    }

    processCodeBlocks(html) {
        // Multiple code block patterns to handle different formats
        const codePatterns = [
            // Standard triple backticks with language
            /```(\w+)?\r?\n([\s\S]*?)\r?\n```/g,
            // Triple backticks without trailing newline
            /```(\w+)?\r?\n([\s\S]*?)```/g,
            // Triple backticks on same line
            /```(\w+)?\s*([^`]+)```/g,
            // Fallback for any triple backtick pattern
            /```([\s\S]*?)```/g
        ];

        for (const pattern of codePatterns) {
            html = html.replace(pattern, (match, language, code) => {
                // If only one parameter, it's the code without language
                if (code === undefined) {
                    code = language;
                    language = 'plaintext';
                }
                
                const lang = (language && language.trim()) || 'plaintext';
                const escapedCode = this.escapeHtml(code.trim());
                return `<div class="code-block-wrapper"><pre><code class="language-${lang}">${escapedCode}</code></pre></div>`;
            });
        }

        return html;
    }

    processLists(html) {
        // Process unordered lists
        html = html.replace(/^- (.+)$/gim, '<ul><li>$1</li></ul>');
        html = html.replace(/<\/ul>\s*<ul>/g, '');
        
        // Process ordered lists
        html = html.replace(/^\d+\. (.+)$/gim, '<ol><li>$1</li></ol>');
        html = html.replace(/<\/ol>\s*<ol>/g, '');
        
        return html;
    }

    processParagraphs(html) {
        // Split by double newlines for paragraphs
        const paragraphs = html.split(/\n\s*\n/);
        
        return paragraphs.map(paragraph => {
            paragraph = paragraph.trim();
            if (!paragraph) return '';
            
            // Skip if already HTML tagged
            if (paragraph.startsWith('<') && 
                (paragraph.endsWith('>') || paragraph.includes('</'))) {
                return paragraph;
            }
            
            // Handle single newlines within paragraphs
            return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
        }).join('');
    }

    initializeSyntaxHighlighting() {
        setTimeout(() => {
            if (typeof hljs !== 'undefined') {
                // Highlight all code blocks
                document.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightElement(block);
                });
                console.log('Syntax highlighting applied');
                
                // Setup copy buttons after highlighting
                this.setupCopyButtons();
            } else {
                console.warn('Highlight.js not loaded');
            }
        }, 100);
    }

    setupCopyButtons() {
        document.querySelectorAll('.code-block-wrapper').forEach(wrapper => {
            const pre = wrapper.querySelector('pre');
            if (!pre) return;

            // Remove existing button if any
            const existingBtn = pre.querySelector('.copy-button');
            if (existingBtn) existingBtn.remove();

            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy';
            copyButton.title = 'Copy code to clipboard';
            
            copyButton.addEventListener('click', async () => {
                const code = pre.querySelector('code')?.textContent || '';
                await this.copyToClipboard(code, copyButton);
            });
            
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        });
    }

    async copyToClipboard(text, button) {
        try {
            await navigator.clipboard.writeText(text);
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Failed';
            setTimeout(() => button.textContent = 'Copy', 2000);
        }
    }

    escapeHtml(unsafe) {
        return unsafe?.replace(/[&<>"']/g, 
            match => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[match])
        ) || '';
    }

    showLoading() {
        const content = document.getElementById('markdownContent');
        if (content) {
            content.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading document...</p></div>';
        }
    }

    showError(message) {
        const content = document.getElementById('markdownContent');
        if (content) {
            content.innerHTML = `
                <div class="error">
                    <h3>Error</h3>
                    <p>${this.escapeHtml(message)}</p>
                    <a href="index.html" class="back-link">← Back to files</a>
                </div>
            `;
        }
    }
}

// Initialize app based on current page
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    
    if (document.getElementById('fileList')) {
        console.log('Initializing file browser...');
        new MarkdownViewer();
    } else if (document.getElementById('markdownContent')) {
        console.log('Initializing viewer...');
        new Viewer();
    } else {
        console.log('Unknown page type');
    }
});

// Add marked.js fallback if not loaded
if (typeof marked === 'undefined') {
    console.warn('marked.js not loaded, using enhanced markdown parser');
}
