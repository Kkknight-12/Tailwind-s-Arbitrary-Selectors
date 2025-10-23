# 🎨 Tailwind Arbitrary Selectors - Interactive Visual Guide

A beautiful, interactive demo showcasing **12 essential patterns** for Tailwind's arbitrary selector syntax `[&_selector]`. Perfect for learning how to style third-party HTML, markdown content, and library components.

![Tailwind Version](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)
![Next.js](https://img.shields.io/badge/Next.js-14.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)

## ✨ Features

- **12 Complete Patterns** - All essential arbitrary selector patterns with live examples
- **Interactive Demos** - Toggle selectors on/off to see real-time effects
- **Visual Explanations** - Color-coded elements showing exactly what gets selected
- **HTML Structure Examples** - Code snippets showing the exact DOM structure
- **Symbol Guide** - Clear explanations of `&`, `_`, `>`, `+`, `~` and more
- **Real-World Use Cases** - Practical examples for markdown, libraries, and CMS content
- **Responsive Design** - Beautiful gradients, animations, and mobile-friendly layout

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit **http://localhost:3000** to see the interactive demo.

## 📦 What's Included

### The 12 Essential Patterns

1. **`[&_element]`** - Descendant Selector ⭐ (Most common - 80% of use cases)
2. **`[&>element]`** - Direct Child Selector
3. **`[&>div>p]`** - Nested Path Selector
4. **`[&_[class="name"]]`** or **`[&_.classname]`** - Class Targeting (both syntaxes)
5. **`[&_[attribute="value"]]`** - Attribute Targeting
6. **`[&>p[class="special"]]`** - Combined Selector
7. **`[&+element]`** - Adjacent Sibling Selector
8. **`[.parent_&]`** - Parent Selector (Advanced)
9. **`[&~element]`** - General Sibling Selector
10. **`[&_element:hover]`** - Hover State Selector 🎨
11. **`[&_element:first-child]`** - First/Last Child Selector
12. **`[&_element:not(.class)]`** - Not Selector (Negation) 🚫

### Interactive Components

- **Toggle Demos** - Enable/disable selectors in real-time (Patterns 1 & 2)
- **Hover Effects** - Interactive paragraphs with gradient backgrounds (Pattern 10)
- **Before/After Comparisons** - Visual side-by-side comparisons
- **Code Examples** - Syntax-highlighted HTML structure for each pattern

## 🎓 What You'll Learn

Each pattern includes:

- ✅ **Visual Demo** - Color-coded elements showing what gets selected
- ✅ **Clear Explanation** - What the pattern does and when to use it
- ✅ **HTML Structure** - Code examples with annotations
- ✅ **Target & Styling** - Explicit "what" and "why" for each selector
- ✅ **Real-World Use Cases** - Practical applications (markdown, React libraries, CMS content)
- ✅ **Best Practices** - When to use (and NOT use) each pattern

## 🛠️ Tech Stack

- **Next.js 14.1** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS 3.4** - Utility-first CSS with arbitrary selectors
- **Custom Components** - Reusable DemoBlock, VisualBox, InteractiveDemo components
- **Custom Animations** - Fade-in, slide, and pulse-glow effects

## 📂 Project Structure

```
arbitrarySelectors/
├── app/
│   ├── page.tsx              # Main demo page with all 12 patterns
│   └── globals.css           # Custom animations (fade-in, pulse-glow)
├── components/
│   ├── DemoBlock.tsx         # Pattern container with gradient badges
│   ├── VisualBox.tsx         # Color-coded selection indicators
│   ├── InteractiveDemo.tsx   # Toggle buttons for live demos
│   ├── BeforeAfter.tsx       # Split-screen comparisons
│   └── CodeExample.tsx       # HTML structure code blocks
├── lib/
│   └── utils.ts              # cn() helper for className merging
└── README.md                 # You are here
```

## 🎯 Use Cases

### Perfect for styling:

- **Markdown/MDX content** - Blog posts, documentation
- **Third-party libraries** - ReactSelect, DatePicker, Rich Text Editors
- **CMS/API content** - Injected HTML you can't modify
- **Email templates** - Dynamic content
- **Syntax highlighting** - Code blocks (Shiki, Prism)

### Example - Styling Markdown:

```jsx
<article className="
  [&_h1]:text-4xl [&_h1]:font-bold
  [&_p]:text-gray-700 [&_p]:leading-relaxed
  [&_a]:text-blue-600 [&_a:hover]:underline
  [&_code]:bg-gray-800 [&_code]:text-green-400
  [&_img]:rounded-lg [&_img]:shadow-lg
">
  {/* Your markdown content */}
</article>
```

## 🌐 Deploy to Vercel

Deploy your own copy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tailwind-arbitrary-selectors)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📖 Symbol Reference

| Symbol | Meaning | Example |
|--------|---------|---------|
| `&` | "this element" (with className) | `[&_p]` = from this element, select p |
| `_` | space (descendant at any depth) | `[&_p]` = any descendant p |
| `>` | direct child only (one level) | `[&>p]` = only direct child p |
| `+` | adjacent sibling (next element) | `[&+p]` = the next p sibling |
| `~` | general sibling (all following) | `[&~p]` = all following p siblings |
| `:hover` | pseudo-class | `[&_a:hover]` = links on hover |
| `:not()` | negation | `[&_p:not(.excluded)]` = p without class |

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new patterns or examples
- Improve documentation
- Enhance visual design

## 📄 License

MIT License - feel free to use this project for learning or teaching Tailwind!

## 🔗 Resources

- **[Tailwind CSS Docs](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants)** - Official documentation
- **[GitHub Issues](https://github.com/yourusername/tailwind-arbitrary-selectors/issues)** - Report bugs or request features

---

**Built with ❤️ to help developers master Tailwind's most powerful (and under-used) feature**

Star ⭐ this repo if you found it helpful!
