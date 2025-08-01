# Switching Models Demo

Welcome to the GitHub Copilot model switching demo! Here you'll learn how to leverage different AI models for various coding tasks and understand how to optimize your Copilot experience by choosing the right model for the right job.

## What You'll Learn
By the end of this demo, you will:
- [ ] Understand different AI models available in GitHub Copilot
- [ ] Know how to monitor your premium request usage
- [ ] Be able to switch models in chat conversations
- [ ] Know how to change models for code completions

**Estimated Time:** 15-20 minutes
**Prerequisites:** Completed [Engineering Practices Demo](./engineering-practices.md)

### Understanding Model Types
GitHub Copilot offers different models optimized for different tasks:
- **GPT-4o**: Best for complex reasoning and detailed explanations
- **GPT-4o mini**: Faster responses, good for quick questions
- **Claude 3.5 Sonnet**: Excellent for code analysis and refactoring
- **o1-preview**: Advanced reasoning for complex problem-solving
- **o1-mini**: Faster reasoning model for simpler tasks

**💡 Note:** Available models may vary based on your subscription level and region.

---

## 📊 Step 1: Monitor Your Premium Request Usage

**Why this matters:** Premium models have usage limits. Understanding your consumption helps you use them strategically for the most important tasks.

### Instructions:
1. **Open VS Code** and ensure GitHub Copilot is active
2. **Access Command Palette:** Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
3. **Find the viewer:** Type "Copilot" and look for **"GitHub Copilot: Show Premium Request Viewer"**
4. **Open the viewer:** Select the command to open the premium request viewer

### What You'll See:
- **Current Usage:** How many premium requests you've used today/this month
- **Request Limits:** Your total allowance based on subscription
- **Model Breakdown:** Which models you've used and how often
- **Reset Timeline:** When your usage counter resets

**🔍 Things to Notice:**
- Different models consume requests at different rates
- Some models are "free" (standard completions) vs "premium" (advanced models)
- Usage is tracked separately for chat vs code completions

**💡 Pro Tip:** Check this regularly to avoid hitting limits during important coding sessions!

---

## 💬 Step 2: Switch Models in Chat Conversations

**Why this matters:** Different models excel at different types of questions. Switching models mid-conversation can give you better results for specific tasks.

### Method 1: Using the Model Selector

1. **Open Copilot Chat:** Click the Copilot chat icon in the sidebar or use `Ctrl+Alt+I`
2. **Find the model selector:** Look for a dropdown menu near the chat input (usually shows current model like "GPT-4o")
3. **Click to expand:** Click on the current model name to see available options
4. **Choose a model:** Select from the available models:
   - **GPT-4o** - For complex analysis and detailed explanations
   - **GPT-4o mini** - For quick questions and faster responses
   - **Claude 3.5 Sonnet** - For code review and refactoring suggestions
   - **o1-preview** - For complex problem-solving and architecture decisions

### Method 2: Using Model Commands

You can also switch models using chat commands:

```
@github switch to gpt-4o
```
or
```
@github use claude-3.5-sonnet
```

### Practice Exercise:

Try asking the same question with different models to see the difference:

**Question to ask:**
```
Explain the benefits of using TypeScript interfaces vs types in our React components, and show me an example of when to use each.
```

**Try this with:**
1. **GPT-4o mini** (for a quick overview)
2. **GPT-4o** (for detailed analysis)
3. **Claude 3.5 Sonnet** (for code-focused insights)

**🔍 Compare:** Notice differences in response length, code examples, and explanation depth.

---

## ⚡ Step 3: Switch Models for Code Completions

**Why this matters:** Code completion models affect the quality and speed of inline suggestions. Different models work better for different programming languages and complexity levels.

### Method 1: VS Code Settings

1. **Open Settings:** Press `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (Mac)
2. **Search for Copilot:** Type "github copilot" in the search bar
3. **Find model settings:** Look for **"Github Copilot: Advanced"** section
4. **Locate completion model:** Find **"Github Copilot › Advanced: Completion Model"**
5. **Select model:** Choose from available options:
   - **Default** - Automatically selects the best model
   - **GPT-4o** - Higher quality but uses premium requests
   - **Codex** - Optimized for code completion speed

### Method 2: Command Palette

1. **Open Command Palette:** Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. **Search for model:** Type "Copilot: Set Completion Model"
3. **Select command:** Choose **"GitHub Copilot: Set Completion Model"**
4. **Pick model:** Select your preferred model from the dropdown

### Method 3: Status Bar (if available)

1. **Check status bar:** Look at the bottom of VS Code for Copilot status
2. **Click Copilot icon:** If available, click to access quick settings
3. **Change model:** Select completion model from the menu

### Testing Different Models:

Try generating code with different models to see the difference:

**Test Prompt:** Create this comment in a new TypeScript file:
```typescript
// Create a function that fetches user data from an API and handles errors gracefully
```

**Compare models by:**
- **Speed** - How quickly suggestions appear
- **Quality** - How well the code matches your intent
- **Context awareness** - How well it understands your project structure

---

## 🎯 Advanced Tips and Best Practices

### When to Use Each Model:

#### GPT-4o
**Best for:**
- Complex architecture discussions
- Detailed code explanations
- Multi-step problem solving
- Code reviews and optimization suggestions

**Example use case:**
```
Design a scalable authentication system for our Next.js app with TypeScript, including JWT handling, refresh tokens, and proper error handling.
```

#### GPT-4o mini
**Best for:**
- Quick syntax questions
- Simple code explanations
- Fast iterations
- Basic debugging help

**Example use case:**
```
How do I add a loading state to this React component?
```

#### Claude 3.5 Sonnet
**Best for:**
- Code refactoring suggestions
- Performance optimization
- Code analysis and review
- Complex algorithm implementation

**Example use case:**
```
Analyze this component for performance issues and suggest improvements
```

#### o1-preview/o1-mini
**Best for:**
- Complex logical problems
- Algorithm design
- System architecture
- Mathematical computations

**Example use case:**
```
Design an efficient algorithm for real-time image processing in our photo gallery
```

### Strategic Model Usage:

1. **Start with mini models** for quick questions
2. **Escalate to premium models** for complex problems
3. **Use specialized models** for their strengths
4. **Monitor usage** to avoid hitting limits

---

## 🔧 Troubleshooting

### Common Issues

**Issue:** Model selector not visible in chat
- **Solution:** Update your GitHub Copilot extension to the latest version
- **Check:** Ensure you have access to multiple models (subscription dependent)

**Issue:** Premium models not available
- **Solution:** Verify your subscription includes premium model access
- **Alternative:** Contact your organization admin if using Copilot Business

**Issue:** Code completion model changes not taking effect
- **Solution:** Restart VS Code after changing completion model settings
- **Try:** Disable and re-enable the Copilot extension

**Issue:** Running out of premium requests quickly
- **Solution:** Use mini models for simple questions, save premium models for complex tasks
- **Strategy:** Check usage regularly and plan your model usage

### Model Performance Tips

- **Warm up models** with context about your project
- **Be specific** in your prompts for better results
- **Use appropriate models** for the task complexity
- **Combine models** - start with mini, escalate to premium if needed

---

## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Opened and explored the Premium Request Viewer
- [ ] Successfully switched models in chat conversation
- [ ] Changed the code completion model in settings
- [ ] Tested the same question with different chat models
- [ ] Compared code completion quality across models
- [ ] Understood when to use each model type

## 🚀 What's Next?

Excellent work! You now understand how to strategically use different AI models in GitHub Copilot.

**Key Takeaways:**
- Different models have different strengths and costs
- Monitor your premium usage to avoid hitting limits
- Match the model to the complexity of your task
- Chat and completion models can be set independently

**Best Practices to Remember:**
- Use mini models for quick questions
- Save premium models for complex problems
- Switch models based on the task at hand
- Monitor usage regularly

**Continue Learning:**
- Experiment with different models on your daily tasks
- Build a mental model of which models work best for different scenarios
- Share effective model strategies with your team
- Keep track of which models give you the best results for different types of problems

**Questions?** Ask your trainer or check the [GitHub Copilot model documentation](https://docs.github.com/en/copilot).

---

**🎉 Congratulations!** You've completed all the core GitHub Copilot demos. You're now ready to use AI effectively in your development workflow!

**Demo Series Complete:**
- ✅ [Features Demo](./features-demo.md)
- ✅ [Engineering Practices Demo](./engineering-practices.md) 
- ✅ **Switching Models Demo** (Current)