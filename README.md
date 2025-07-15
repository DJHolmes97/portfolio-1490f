# Daniel Holmes Portfolio

A modern, interactive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4, featuring dynamic content management through Contentful CMS and engaging UI interactions.

## Overview

This portfolio showcases a clean, professional design with:

- **Responsive Design**: Optimized for desktop and mobile viewing
- **Interactive Elements**: Mouse-following gradient backgrounds and smooth scrolling
- **Dynamic Content**: Projects, experience, and education data managed through Contentful
- **Modern UI**: Clean typography, consistent spacing, and intuitive navigation
- **Performance Optimized**: Built with Next.js App Router and optimized fonts

## Architecture

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Homepage with portfolio sections
│   └── projects/          # Projects listing page
├── components/            # Reusable React components
│   ├── AboutSection/      # About section with Contentful integration
│   ├── ExperienceSection/ # Work experience timeline
│   ├── ProjectSection/    # Projects showcase
│   ├── MouseGradient/     # Interactive background gradient
│   ├── Navigation/        # Smooth scrolling navigation
│   └── [other components] # Typography, links, containers, etc.
├── hooks/                 # Custom React hooks
│   └── useActiveSelection.ts # Active section detection for navigation
├── styles/                # Global CSS and design tokens
│   └── globals.css        # CSS custom properties and Tailwind integration
├── utils/                 # Utility functions
│   └── contentfulClient.ts # Contentful CMS client configuration
└── public/                # Static assets
    └── Daniel_Holmes_CV.pdf # Resume download
```

### Key Features

- **Modular Component Architecture**: Reusable, typed React components
- **Custom CSS Properties**: Design token system for consistent theming
- **Contentful Integration**: Dynamic content management for projects and experience
- **Smooth Scrolling Navigation**: Active section detection with viewport-based highlighting
- **Interactive Backgrounds**: Mouse-following gradient effects
- **Font Optimization**: Inter font family with Next.js font optimization
- **TypeScript**: Full type safety across the application

## Technologies Used

### Frontend Framework & Build Tools

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

### Content Management & Data

- **[Contentful](https://www.contentful.com/)** - Headless CMS for dynamic content
- **[@contentful/rich-text-react-renderer](https://github.com/contentful/rich-text)** - Rich text rendering
- **[@contentful/rich-text-types](https://github.com/contentful/rich-text)** - Rich text type definitions

### Icons & Typography

- **[FontAwesome](https://fontawesome.com/)** - Icon library with React components
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern, readable typeface via Google Fonts

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[SVGR](https://react-svgr.com/)** - SVG to React component transformation
- **Path Mapping** - Absolute imports with `@/` prefix

### Package Management

- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Contentful account for CMS content

### Environment Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio-1490f
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment variables**
   Create a `.env.local` file:

```env
SPACE_ID=your_contentful_space_id
API_TOKEN=your_contentful_access_token
```

4. **Run the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build Commands

```bash
# Development with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Development Features

- **Hot Reload**: Instant updates during development with Turbopack
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Component-First**: Modular, reusable component architecture
- **Performance**: Optimized images, fonts, and build output
- **Accessibility**: Semantic HTML and proper contrast ratios

## Deployment

This project is optimized for deployment on modern platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel (Recommended)

The easiest deployment option with automatic builds and optimizations.

### Build Output

The project builds to a static site with server-side rendering capabilities, ensuring fast load times and SEO optimization.

---

Built with ❤️ using modern web technologies.
