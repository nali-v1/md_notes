# Neovim Notes 🖥️
Here's a new "Everyday Usage Commands" section for your `nvim.md` file with the most practical commands for daily editing:

---

## 🚀 Everyday Usage Commands

### 🔄 **Basic Navigation**
```vim
h j k l              " Left, Down, Up, Right
w b                  " Next/previous word
0 $                  " Start/end of line
gg G                 " First/last line of file
Ctrl+d Ctrl+u        " Scroll down/up half page
Ctrl+f Ctrl+b        " Scroll forward/backward full page
```

### 📝 **Editing & Text Manipulation**
```vim
i I a A              " Insert at cursor/line start/after cursor/line end
o O                  " Insert new line below/above
x                    " Delete character under cursor
dd                   " Delete current line
yy                   " Yank (copy) current line
p P                  " Paste after/before cursor
u Ctrl+r             " Undo/Redo
```

### 🎯 **Selection & Visual Mode**
```vim
v                    " Enter visual mode (character selection)
V                    " Enter visual line mode
Ctrl+v               " Enter visual block mode
```

### 🔥 **Code Block Operations**
```vim
vi{                  " Select inside {} block
va{                  " Select around {} block (including braces)
vi(                  " Select inside () block  
vi[                  " Select inside [] block
vi"                  " Select inside quotes
vit                  " Select inside HTML/XML tag
```

### ✂️ **Cutting & Deleting Code Blocks**
```vim
di{                  " Delete inside {} block (keep braces)
da{                  " Delete around {} block (remove braces too)
di(                  " Delete inside () block
di[                  " Delete inside [] block
di"                  " Delete inside quotes
dit                  " Delete inside HTML/XML tag
```

### 📋 **Yanking (Copying) Code Blocks**
```vim
yi{                  " Yank inside {} block
ya{                  " Yank around {} block (with braces)
yi(                  " Yank inside () block
yi[                  " Yank inside [] block
yi"                  " Yank inside quotes
yit                  " Yank inside HTML/XML tag
```

### 🔧 **Changing/Replacing Code Blocks**
```vim
ci{                  " Change inside {} block (delete and enter insert mode)
ca{                  " Change around {} block
ci(                  " Change inside () block
ci[                  " Change inside [] block
ci"                  " Change inside quotes
cit                  " Change inside HTML/XML tag
```

### 🔍 **Search & Replace**
```vim
/pattern             " Search forward for pattern
?pattern             " Search backward for pattern
n N                  " Next/previous search result
:%s/old/new/g        " Replace all occurrences in file
:s/old/new/g         " Replace in current line
```

### 📁 **File & Buffer Management**
```vim
:e filename          " Edit file
:w                   " Save file
:q                   " Quit
:wq                  " Save and quit
:bn :bp              " Next/previous buffer
:bd                  " Delete buffer
:ls                  " List all buffers
```

### 🪟 **Window Management**
```vim
:sp filename         " Split window horizontally
:vsp filename        " Split window vertically
Ctrl+w h j k l       " Move between windows
Ctrl+w =             " Equalize window sizes
Ctrl+w _             " Maximize current window height
Ctrl+w |             " Maximize current window width
```

### ⚡ **Quick Movements**
```vim
* #                  " Search for word under cursor forward/backward
gd                   " Go to local definition
gf                   " Go to file under cursor
Ctrl+]               " Go to tag definition
Ctrl+o Ctrl+i        " Jump back/forward in jump list
```

### 🎨 **Indentation & Formatting**
```vim
>> <<                " Indent/outdent line
==                   " Auto-indent current line
gg=G                 " Auto-indent entire file
>i{                  " Indent inside {} block
>a{                  " Indent around {} block
```

### 💡 **Pro Tips**
```vim
.                    " Repeat last change
; ,                  " Repeat last f/t/F/T movement
Ctrl+a Ctrl+x        " Increment/decrement number under cursor
~                    " Toggle case of character
g~iw                 " Toggle case of current word
```

These commands cover 90% of daily Neovim usage and will dramatically speed up your editing workflow!

## Essential Commands

### navigation
Jump back/forward:`Ctrl]-o` / `Ctrl-i`
Jump to definition: `Ctrl-]` then `Ctrl-t` to return
Go to definition: `gd` (local) or `gD` (global)
Center screen: `zz` (cursor center), `zt` (top), `zb` (bottom)

### File & Window Management
File explorer: `:Ex` (normal), `:Sex` (split), `:Vex` (vertical)
Buffer management: `:bd` close, `:bn` next, `:bp` previous, `:ls` list
Window splits: `Ctrl-w s` (horizontal), `Ctrl-w v` (vertical)
Window navigation: `Ctrl-w h/j/k/l` to move between windows

### Editing Power Moves
Change inside: `ci"` (quotes), `ci(` (parentheses), `ciw` (word), `cip` (paragraph)
Delete operations: `dt"` (delete to quote), `df"` (delete including quote)
Line operations: `yy` copy line, `dd` delete line, `p` paste
Undo/Redo: `u` undo, `Ctrl-r` redo

### Search & Visual Mode
Search: `/pattern` forward, `?pattern` backward, `n`/`N` next/previous
Word search: `*` forward, `#` backward
Replace: `:%s/old/new/g` (all), `:%s/old/new/gc` (with confirm)
Visual modes: `v` (character), `V` (line), `Ctrl-v` (block)

## My Current Setup

### Core Configuration
Line numbers: relative numbers for easy navigation
Tabs & indentation: 4-space tabs with smart indentation
Undo persistence: unlimited undo history across sessions
Visual enhancements: true color support, no wrap by default

### Key Mappings
Leader key: Space bar for custom commands
Telescope: `<leader>ff` find files, `<leader>fg` live grep
Quality of life: Centered scrolling, preserved cursor position
LSP integration: `K` hover, `gd` definition, `gr` references

### Auto-Commands
Yank highlighting: Visual feedback when copying text
Format on save: Automatic code formatting via LSP
Session management: Auto-save/restore editing sessions

## Essential Plugins

### Core Productivity
Telescope: Fuzzy finding for files, grep, and buffers
Nvim-tree: File explorer with visual tree structure
Lualine: Clean, informative status line
Treesitter: Advanced syntax highlighting and parsing

### LSP & Completion
Mason: Language Server Protocol manager
Nvim-cmp: Intelligent code completion engine
LSP-zero: Simplified LSP configuration
Null-ls: Code formatting and diagnostics

### Quality of Life
Which-key: Interactive keybinding hints and discovery
Comment.nvim: Easy code commenting (toggle, visual mode)
Gitsigns: Git integration in the gutter
Undotree: Visual undo history navigation

### Appearance
Tokyo Night: Beautiful, easy-on-the-eyes color scheme
Catppuccin: Softer, pastel-inspired theme option
Devicons: File type icons throughout the interface

## Daily Workflows

### Project Navigation
 Open project with `nvim .` or direct path
 [Find](2025-11-10_find.md) files quickly with Telescope (`<leader>ff`)
 Search content across project (`<leader>fg`)
 Switch between open buffers (`<leader>fb`)
 Use file explorer for structure overview (`:NvimTreeToggle`)

### Code Editing Session
 Work with multiple files using splits (`Ctrl-w v/s`)
 Leverage LSP features: hover info, go to definition
 Navigate between recent files and buffers
 Automatic formatting on saveIntegrated
 Integrated Git operations for version control

### Git Integration
Stage changes: `<leader>hs` stage hunk
View history: `<leader>hb` blame line, `<leader>hd` show diff
Git commands: `:Gstatus`, `:Gcommit`, `:Gpush` directly in Neovim

### Session Management
Save workspace state with `:SaveSession name`
Restore exactly where you left off with `:RestoreSession name`
Search and manage multiple project sessions

## Pro Tips & Best Practices

### Learning Strategy
Practice 15 minutes daily with `vimtutor`
Focus on mastering one new command each day
Use which-key to discover available mappings
Create custom mappings for your most frequent actions

### Configuration Management
Keep configuration modular and well-organized
Use separate files for different concerns (keymaps, plugins, options)
Version control your Neovim configuration
Document your custom mappings and workflows

### Plugin Philosophy
Start minimal and add plugins as needs arise
Prefer well-maintained, active projects
Regularly audit and remove unused plugins
Balance features with performance impact

### Performance Optimization
Disable LSP for very large files with `:LspStop`
Temporarily disable syntax highlighting in huge file
Monitor system health with `:checkhealth`
Use `:messages` to debug issues and errors

### Troubleshooting

Check `:messages` for error information Use `:scriptnames` to see loaded configuration files Verify key mappings with `:verbose imap <key>` Monitor LSP status with `:LspInfo`


*"The power of Neovim is not in memorizing every command, but in knowing enough to be dangerous and having the resources to learn the rest."* 🚀

*Last updated: 2024-11-07*
