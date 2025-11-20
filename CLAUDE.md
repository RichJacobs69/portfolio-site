# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website showcasing professional background, projects, and writing. Built with Next.js 16, React 19, and styled with Tailwind CSS v4.

## Common Development Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm start            # Run production build
npm run lint         # Run ESLint
```

**Development workflow:**
- Dev server auto-reloads on file changes with Turbopack
- Build outputs to `.next/` directory
- Type checking runs as part of build process

## Architecture & Structure

### Directory Layout

```
portfolio-site/
├── app/                        # Next.js App Router (file-based routing)
│   ├── layout.tsx             # Root layout with navigation, footer, Amplitude tracking
│   ├── page.tsx               # Homepage (hero, about, experience, skills, projects)
│   ├── cv/
│   │   └── page.tsx           # CV page
│   └── writing/
│       ├── page.tsx           # Writing index/list page
│       └── [slug]/
│           └── page.tsx       # Individual blog post (dynamic route)
├── lib/
│   ├── markdown.ts            # Markdown parsing and rendering utilities
│   └── writingData.ts         # Blog post metadata and frontmatter handling
├── content/
│   └── writing/               # MDX blog post markdown files
├── public/                    # Static assets (images, favicon, etc.)
├── globals.css                # Tailwind utilities and custom styles
├── next.config.ts             # Next.js configuration with Turbopack
├── tsconfig.json              # TypeScript configuration (strict mode, path aliases)
├── postcss.config.mjs         # PostCSS configuration (Tailwind)
├── eslint.config.mjs          # ESLint rules
└── package.json               # Dependencies and scripts
```

### Key Architectural Patterns

**File-Based Routing:**
- URL paths auto-generated from file structure under `app/`
- Dynamic routes use bracket syntax: `[slug]` becomes route parameter
- Blog posts automatically mapped: `content/writing/my-post.md` → `/writing/my-post`

**Server vs Client Components:**
- `layout.tsx` - Server component, handles data loading for page metadata
- Amplitude tracking - Client-side component initialized in layout
- Page components - Server components with client-side interactive elements as needed

**Content Strategy:**
- Blog posts stored as Markdown files in `content/writing/`
- Gray-matter extracts YAML frontmatter (title, date, etc.)
- Remark converts Markdown to HTML
- `lib/writingData.ts` handles reading and parsing logic

**Styling Architecture:**
- Utility-first Tailwind CSS v4
- Custom CSS variables for dark mode theming
- @tailwindcss/typography for prose styling
- Responsive grid layouts (mobile-first approach)
- Smooth animations with Tailwind delay utilities

### Component Architecture

**Root Layout (`app/layout.tsx`):**
- Navigation header (sticky, blur effect)
- Footer with contact links (hash-anchored)
- Amplitude analytics initialization
- Global styles and metadata

**Homepage (`app/page.tsx`):**
- Hero section with gradient text
- About section
- Experience/timeline section
- Skills section (grid layout)
- Projects section
- Call-to-action

**Blog System (`app/writing/`):**
- Index page lists all published posts
- Dynamic `[slug]` page renders individual posts
- Frontmatter parsed for metadata (title, date, description)
- Markdown rendered with typography styles

## Adding New Blog Posts

1. **Create new markdown file:**
   ```bash
   # Create file in content/writing/[post-slug].md
   content/writing/my-new-post.md
   ```

2. **Add frontmatter (YAML):**
   ```yaml
   ---
   title: "Post Title"
   date: "2024-01-15"
   description: "Brief description for preview"
   ---
   ```

3. **Write content in Markdown below frontmatter**

4. **Automatic URL generation:**
   - File: `content/writing/my-new-post.md`
   - URL: `http://localhost:3000/writing/my-new-post`

5. **Blog list auto-updates** - no manual registration needed, metadata parsed on each request

**Markdown rendering:**
- Markdown converted to HTML via remark
- Styled with @tailwindcss/typography prose classes
- Code blocks syntax highlighted (remark plugins can be added)

## Tech Stack

- **Framework:** Next.js 16.0.0 with App Router
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS v4 + @tailwindcss/typography
- **Markdown:** Gray-matter (frontmatter parsing), Remark (conversion to HTML)
- **Analytics:** Amplitude (client-side event tracking)
- **Language:** TypeScript 5 (strict mode)
- **Linting:** ESLint v9 with Next.js config
- **Build Tool:** Turbopack (in dev mode)

## Important Implementation Details

### Amplitude Analytics

- Initialized as client-side component in root layout
- Requires `AMPLITUDE_API_KEY` environment variable
- Tracks page views and user interactions
- Browser-based (no server-side tracking)

### Dark Mode

- Implemented via CSS variables + Tailwind dark class
- No runtime toggle currently - uses system preference or hardcoded theme
- Custom color scheme: indigo/purple accents with dark background

### Type Safety

- TypeScript strict mode enabled
- Path aliases configured: `@/*` maps to root directory
- React and Node type definitions included
- Type checking runs during `npm run build`

### Performance Considerations

- Server components for metadata fetching (no client-side data loading)
- Static site generation where possible (markdown content)
- Turbopack for faster dev builds
- No CSS-in-JS runtime overhead (Tailwind pure CSS)

## Environment Configuration

**Required environment variables:**
- `AMPLITUDE_API_KEY` - For analytics tracking (optional if analytics disabled)

Create `.env.local` or `.env` in the project root if needed.

## Dependencies Summary

```json
{
  "dependencies": {
    "@amplitude/analytics-browser": "^2.30.0",
    "@tailwindcss/typography": "^0.5.19",
    "gray-matter": "^4.0.3",
    "next": "16.0.0",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```
