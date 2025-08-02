---
mode: 'agent'
description: 'Implement new gallery features following project architecture'
tools: ['changes', 'codebase', 'editFiles', 'search']
---

# Implement Gallery Feature

## Context
Add new functionality to the Photo Gallery & Portfolio application following established patterns and architecture.

## Project Architecture
- Component-driven design with TypeScript
- Mock data pattern for development
- Responsive grid layouts with Tailwind CSS
- Framer Motion for animations
- State management with React hooks

## Implementation Guidelines

### Component Structure
1. **Create feature components** in appropriate directories
2. **Use established UI components** like SectionContainer, SectionTitle, FeatureCard
3. **Follow TypeScript patterns** with proper interfaces
4. **Implement responsive design** with Tailwind CSS grid system

### State Management
- Use React hooks for local state
- Keep state close to where it's used
- Follow immutability patterns
- Use mock data from `src/lib/` directory

### Styling Conventions
```tsx
// Container pattern
"container mx-auto px-4"

// Grid pattern
"grid md:grid-cols-3 gap-6"

// Dark mode support
"text-slate-900 dark:text-white"
"bg-white dark:bg-slate-800"
```

### Animation Integration
- Use Framer Motion for interactive elements
- Follow existing animation patterns
- Keep animations subtle and purposeful

## Success Criteria
- Feature integrates seamlessly with existing design
- Components are reusable and well-typed
- Responsive design works across devices
- Dark mode is properly supported
- Code follows project conventions

Analyze the existing codebase and implement the feature following these patterns.