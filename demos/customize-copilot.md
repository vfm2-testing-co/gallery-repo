# Customize Copilot Demo

Welcome to the GitHub Copilot customization demo! Here you'll learn how to tailor GitHub Copilot to your specific needs and workflow preferences. This demo covers advanced features that help you optimize your AI-assisted coding experience for maximum productivity.

## What You'll Learn
By the end of this demo, you will:
- [ ] Know how to monitor your premium request usage
- [ ] Switch between AI models in Chat and Code completions (OPTIONAL)
- [ ] Use prompt files for consistent AI interactions
- [ ] Utilize Chat modes for various development tasks
- [ ] Set up custom instructions with MCP servers for personalized AI behavior

**Estimated Time:** 25-30 minutes

---

## 📊 Step 1: Monitor Premium Request

### Option A: Access the Premium Dashboard

In IDE:

1. **Open VS Code** and ensure GitHub Copilot is active
2. **Locate Copilot status:** Look for the GitHub Copilot logo in the bottom-right status bar

### Option B: Access the Premium Dashboard 

In github.com:

1. **Navigate to GitHub:** Go to [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
2. **Sign in:** Ensure you're logged into your GitHub account
3. **View dashboard:** Review your premium request usage percentage and limits

View premium request percentage to understand how many requests you have left.

---

## 🔄 Step 2: Advanced Model Switching (OPTIONAL)

Mode: edit

For this demo, try the same coding task with different models and note the differences.

### Instructions:

1. update your mode to **edit**
2. select the model you want to try out
3. add in the following files:
  - /src/app/gallery/page.tsx
  - /src/lib/mock-photo-data.ts
  - /src/components/GalleryGrid.tsx
4. Stay on the last page: GalleryGrid and highlight lines 26 - 43
5. add in below prompt:

Prompt
```typescript
// Ask each model: "Help me refactor this function for better performance, readability, and add TypeScript improvements"
```

Repeat steps 2-5 for two other models of your choosing.

Which answers did you like the best? which the least? Discuss in your group. 

---

## 📝 Step 3: Use Prompt Files

1. Go to the prompts folder and look through the files. 
  - There are two files to choose from each in varying difficult levels. 
  - Look over the format of each before choosing which one.
2. Choose the file you want to test out
3. Add in the prompt below depending on the prompt file.

**Generate mock data**
Prompt
```
/generate-mock-photo-data 3
```

**Refactor UI component**
Prompt
```
/generate-new-ui for the recent galleries table in the admin page. I want it to be the replacement component for the current table and be reuseable.  Place it in the layout folder.
```

**BONAS CHALLENGE:** Create your own prompt file for unit tests

Ask copilot to generate a new prompt file for unit tests. Use the following steps:

1. Go to GitHub Copilot UI
2. Click on the gear icon in the top right corner
3. Select "Prompt Files"
4. Click the plus icon that says "New prompt file"
5. Select the folder you want to save the file in i.e `.github/prompts/`
6. Name the file 'generate-unit-tests.prompt.md'
7. Create your own custom prompt file with GitHub Copilot:

```markdown
<!-- Add in related files to Ask mode-->
Related files:
- /src/components/ui/FeatureCard.tsx
- /.github/prompts/generate-new-ui.prompt.md
- /.github/prompts/generate-mock-photo-data.prompt.md

<!-- Copy/paste prompt below -->
help me create a prompt files for creating unit test generation for the UI components. 
```

## 🎭 Step 4: Utilize Chat Modes

1. Look over the `Plan.chatmode.md` in the `.github/chatmodes` file to see the expected behavior of the mode
2. Go to GitHub Copilot Chat
3. Update mode to "Plan" mode
4. Add in prompt below and look over the suggestion

```markdown
help me plan out a new page for creating new galleries
```
**DISCUSSION**
Look through response. What other modes would be helpful for this repo?

## 🛠️ Step 5: Custom Instructions with MCP Servers

### Understanding MCP Servers

Model Context Protocol (MCP) servers allow you to extend GitHub Copilot capabilities to external data sources. Custom instructions can help guide Copilot's behavior to align with your project's coding standards and conventions. This is particularly useful for large teams or complex projects where consistency is key.

### Set Up Project-Specific Custom Instructions


### MCP Demo


## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Explored premium request monitoring and identified usage patterns
- [ ] Practiced model switching techniques
- [ ] Used project-specific prompt file
- [ ] Experimented with different chat modes
- [ ] Understood MCP servers or set up custom instruction patterns
- [ ] Applied customizations to improve your development workflow

## 🚀 What's Next?

Excellent work! You've now mastered the advanced customization features of GitHub Copilot.

---

👉 **[Start Copilot Spaces Demo](./copilot-spaces.md)**