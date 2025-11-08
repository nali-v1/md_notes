#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting GitHub Pages Sync...${NC}"

# Navigate to the repository
cd ~/nali-v1/github-ready

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Show current status
echo -e "${YELLOW}📊 Current status:${NC}"
git status --short

# Add all changes
echo -e "${YELLOW}📦 Adding changes...${NC}"
git add .

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}📝 No changes to commit${NC}"
else
    # Commit changes
    echo -e "${YELLOW}💾 Committing changes...${NC}"
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Push to GitHub with force if needed
echo -e "${YELLOW}📤 Pushing to GitHub...${NC}"
if git push origin main 2>&1 | grep -q "non-fast-forward"; then
    echo -e "${YELLOW}⚠️  Remote has changes, forcing push...${NC}"
    git push origin main --force
else
    git push origin main
fi

# Check if push was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Sync completed successfully!${NC}"
    echo -e "${GREEN}🌐 Your site will update at: https://nali-v1.github.io/md_notes/${NC}"
    echo -e "${YELLOW}⏰ Please allow 1-2 minutes for GitHub Pages to rebuild.${NC}"
else
    echo -e "${RED}❌ Sync failed! Check the error above.${NC}"
    exit 1
fi
