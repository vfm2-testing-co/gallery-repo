# Photo Gallery & Portfolio

A professional photo gallery and portfolio application built with Next.js 15, TypeScript, and Tailwind CSS. This project is designed for **demoing GitHub Copilot features** in a real-world, component-driven Next.js application. The included demos showcase how Copilot can assist with code generation, refactoring, UI building, and more.

## Demos

- All demo guides and examples are in the [`demos/`](demos/) folder.
- For more information about each demo, refer to the [README](demos/README.md) file in the `demos/` directory.
- To get started, check out the first demo [`features-demo.md`](demos/features-demo.md) for a walkthrough of gallery features and Copilot capabilities.

### Creating a New Demo

If you want to contribute and create a new demo, follow these steps:

1. Open GitHub Copilot Chat.
2. Type the prompt `/create-copilot-demo' with an explanation of your demo idea
3. Copilot will generate a new demo file in the `demos/` directory.
4. Fill in remaining sections with detailed instructions, examples, and expected results.

## Getting Started

### Technical Requirements

- **Node.js** v18 or newer
- **npm** (or yarn, pnpm, bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vfm2-testing-co/gallery-repo.git
   cd gallery-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js 15 App Router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions and helpers
demos/                   # Demo guides and templates
```
