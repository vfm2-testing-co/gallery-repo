# Demos

Welcome to this repository! Your probably wondering what it is and how it works. We will be working with this repository for the duration of this training, so its important to find out what its doing now!

Lets start off by learning the different modes.

## Features: Learn about the project

Mode: Ask

For this first demo, lets learn about the different features available in Ask mode. Specifically, chat participants, chat variables, and slash commands.

**STEP ONE:** What features are available to you?

Prompt

```
/help
```

**STEP TWO:** Learn about the project

__Prompt one__
```
@workspace Give me a summary of the project and give an overview of the most impactful files. 
```

- Select the first page in the "Most Impactful Files" and highlight the first section. 

__Prompt two__
```
@workspace /explain 
```

Not only can copilot help with learning on the project, can also help with planning an ideas!

__Prompt three__
```
Tell me about the improvements that can be made in this repo.
```

**STEP THREE:** Update code with code completions.

1. Go to /src/app/layout.tsx 
2. Go to line 51
3. Press `enter` once
4. enter in the prompt below

Prompt
```
{/* Create a footer for this section. It should contain the logo and copyright information. */}
```

Don't worry about the functionality at this time. We will get to that in a future section and will build it up.

**STEP FOUR:** Review and commit

Time to review. If you do not want to use your premium requests, no problem! Your trainer will demo this part for you and you can skip this and move on to the next part. 

Review 

1. Highlight the code that was just created. 
2. Right click and select "Copilot"
3. Select "Review and Comment"
4. Review the comments and discard or accept. 

Commit comments

1. Go to "Source Control" on the left hand side
2. Hover and select "Generate Commit Message with Copilot"
3. Add, commit and push changes to the main branch