# Neovim Notes 🖥️
- configurations, workflows, and productivity tips.

## Essential Commands

### Navigation
- **Jump back/forward**: `Ctrl-o` / `Ctrl-i`
- **Jump to definition**: `Ctrl-]` then `Ctrl-t` to return
- **Go to definition**: `gd` (local) or `gD` (global)
- **Center screen**: `zz` (cursor center), `zt` (top), `zb` (bottom)

### File & Window Management
- **File explorer**: `:Ex` (normal), `:Sex` (split), `:Vex` (vertical)
- **Buffer management**: `:bd` close, `:bn` next, `:bp` previous, `:ls` list
- **Window splits**: `Ctrl-w s` (horizontal), `Ctrl-w v` (vertical)
- **Window navigation**: `Ctrl-w h/j/k/l` to move between windows

### Editing Power Moves
- **Change inside**: `ci"` (quotes), `ci(` (parentheses), `ciw` (word), `cip` (paragraph)
- **Delete operations**: `dt"` (delete to quote), `df"` (delete including quote)
- **Line operations**: `yy` copy line, `dd` delete line, `p` paste
- **Undo/Redo**: `u` undo, `Ctrl-r` redo

### Search & Visual Mode
- **Search**: `/pattern` forward, `?pattern` backward, `n`/`N` next/previous
- **Word search**: `*` forward, `#` backward
- **Replace**: `:%s/old/new/g` (all), `:%s/old/new/gc` (with confirm)
- **Visual modes**: `v` (character), `V` (line), `Ctrl-v` (block)

## My Current Setup

### Core Configuration
- **Line numbers**: relative numbers for easy navigation
- **Tabs & indentation**: 4-space tabs with smart indentation
- **Undo persistence**: unlimited undo history across sessions
- **Visual enhancements**: true color support, no wrap by default

### Key Mappings
- **Leader key**: Space bar for custom commands
- **Telescope**: `<leader>ff` find files, `<leader>fg` live grep
- **Quality of life**: Centered scrolling, preserved cursor position
- **LSP integration**: `K` hover, `gd` definition, `gr` references

### Auto-Commands
- **Yank highlighting**: Visual feedback when copying text
- **Format on save**: Automatic code formatting via LSP
- **Session management**: Auto-save/restore editing sessions

## Essential Plugins

### Core Productivity
- **Telescope**: Fuzzy finding for files, grep, and buffers
- **Nvim-tree**: File explorer with visual tree structure
- **Lualine**: Clean, informative status line
- **Treesitter**: Advanced syntax highlighting and parsing

### LSP & Completion
- **Mason**: Language Server Protocol manager
- **Nvim-cmp**: Intelligent code completion engine
- **LSP-zero**: Simplified LSP configuration
- **Null-ls**: Code formatting and diagnostics

### Quality of Life
- **Which-key**: Interactive keybinding hints and discovery
- **Comment.nvim**: Easy code commenting (toggle, visual mode)
- **Gitsigns**: Git integration in the gutter
- **Undotree**: Visual undo history navigation

### Appearance
- **Tokyo Night**: Beautiful, easy-on-the-eyes color scheme
- **Catppuccin**: Softer, pastel-inspired theme option
- **Devicons**: File type icons throughout the interface

## Daily Workflows

### Project Navigation
1. Open project with `nvim .` or direct path
2. Find files quickly with Telescope (`<leader>ff`)
3. Search content across project (`<leader>fg`)
4. Switch between open buffers (`<leader>fb`)
5. Use file explorer for structure overview (`:NvimTreeToggle`)

### Code Editing Session
1. Work with multiple files using splits (`Ctrl-w v/s`)
2. Leverage LSP features: hover info, go to definition
3. Navigate between recent files and buffers
4. Automatic formatting on save
5. Integrated Git operations for version control

### Git Integration
- **Stage changes**: `<leader>hs` stage hunk
- **View history**: `<leader>hb` blame line, `<leader>hd` show diff
- **Git commands**: `:Gstatus`, `:Gcommit`, `:Gpush` directly in Neovim

### Session Management
- Save workspace state with `:SaveSession name`
- Restore exactly where you left off with `:RestoreSession name`
- Search and manage multiple project sessions

## Pro Tips & Best Practices

### Learning Strategy
- Practice 15 minutes daily with `vimtutor`
- Focus on mastering one new command each day
- Use which-key to discover available mappings
- Create custom mappings for your most frequent actions

### Configuration Management
- Keep configuration modular and well-organized
- Use separate files for different concerns (keymaps, plugins, options)
- Version control your Neovim configuration
- Document your custom mappings and workflows

### Plugin Philosophy
- Start minimal and add plugins as needs arise
- Prefer well-maintained, active projects
- Regularly audit and remove unused plugins
- Balance features with performance impact

### Performance Optimization
- Disable LSP for very large files with `:LspStop`
- Temporarily disable syntax highlighting in huge files
- Monitor system health with `:checkhealth`
- Use `:messages` to debug issues and errors

### Troubleshooting
- Check `:messages` for error information
- Use `:scriptnames` to see loaded configuration files
- Verify key mappings with `:verbose imap <key>`
- Monitor LSP status with `:LspInfo`

---

*"The power of Neovim is not in memorizing every command, but in knowing enough to be dangerous and having the resources to learn the rest."* 🚀

*Last updated: 2024-11-07*
