# 🚀 nali-v1 Demo

Welcome to the **nali-v1** demo! This showcases the powerful features of our markdown viewer with interactive elements.

## 📋 Code Block Examples

### Basic Code Block
```bash
echo "Hello, World!"
```

### Python Example
```python
def greet(name):
    print(f"Hello, {name}!")
    
greet("nali-v1 user")
```

### JavaScript Example
```javascript
// Simple function demonstration
function showMessage() {
    console.log("Welcome to nali-v1!");
    alert("Demo loaded successfully!");
}

showMessage();
```

## 🎯 Interactive Elements

### Text Input Box
<div class="text-box">
<label for="demo-input">Your Name:</label>
<input type="text" id="demo-input" placeholder="Enter your name...">
<button onclick="greetUser()">Greet Me!</button>
</div>

### Color Picker
<div class="color-box">
<label for="color-picker">Choose a theme color:</label>
<input type="color" id="color-picker" value="#87ceeb">
</div>

### Task List
- [x] Code blocks with syntax highlighting
- [x] Copy-to-clipboard functionality  
- [x] Interactive text boxes
- [ ] Custom themes
- [ ] Export functionality

## 🔧 System Commands

### Git Operations
```bash
git add .
git commit -m "Add nali-v1 demo"
git push origin main
```

### File Operations
```bash
# List files with details
ls -la

# Create new markdown file
touch new-note.md

# View file content
cat demo.md
```

## 📊 Sample Data

### JSON Example
```json
{
  "project": "nali-v1",
  "version": "1.0.0",
  "features": [
    "markdown viewing",
    "code copy buttons",
    "interactive elements",
    "dark theme"
  ]
}
```

### CSV Data
```csv
Name,Age,Role
Alice,28,Developer
Bob,32,Designer
Charlie,25,Writer
```

## 🎨 Custom Styling

This demo shows how nali-v1 handles:
- **Code highlighting** with proper syntax
- **Copy buttons** for easy code sharing
- **Interactive forms** for user input
- **Task lists** for progress tracking
- **Multiple languages** support

---

*Demo created for nali-v1 showcase*  
*All features working beautifully!* 🎉

<script>
function greetUser() {
    const name = document.getElementById('demo-input').value || 'Friend';
    alert(`Hello, ${name}! Welcome to nali-v1! 🚀`);
}

// Color picker functionality
document.getElementById('color-picker').addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--theme-color', e.target.value);
});
</script>

<style>
.text-box, .color-box {
    background: #1a1a1a;
    padding: 15px;
    border-radius: 8px;
    margin: 10px 0;
    border: 1px solid #333;
}

.text-box input, .color-box input {
    background: #2a2a2a;
    border: 1px solid #444;
    color: #e8e8e8;
    padding: 8px;
    border-radius: 4px;
    margin: 0 10px;
}

.text-box button {
    background: #87ceeb;
    color: #0f0f0f;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
}

.text-box button:hover {
    background: #a6dbf5;
}

:root {
    --theme-color: #87ceeb;
}
</style>
