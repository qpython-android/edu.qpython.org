# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + TypeScript single-page application for QPython+ course navigation, built with Vite.

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router 6 (routing)
- Zustand (state management - available if needed)
- Lucide React (icons)

## Development

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm run build   # Build for production (outputs to dist/)
npm run preview # Preview production build
```

## Architecture

```
src/
├── components/      # Reusable UI components
├── context/         # React context (LanguageContext)
├── i18n/            # Translation files (translations.json)
├── lib/             # Utilities (cn helper)
├── pages/           # Route pages (CoursesPage)
├── types/           # TypeScript types
├── App.tsx          # Root component with routes
├── main.tsx         # Entry point
public/
├── assets/          # Images
├── data/
│   └── courses.json # Course data (edit this to add courses)
```

## Key Files

- `public/data/courses.json` - Course data file. Edit this to add/modify courses.
- `src/i18n/translations.json` - UI translations (zh/en)
- `src/context/LanguageContext.tsx` - Language switching logic
- `src/pages/CoursesPage.tsx` - Main courses listing page

## Adding Courses

Edit `public/data/courses.json`:

```json
{
  "courses": [
    {
      "id": "unique-id",
      "title": "Course Title",
      "description": "Course description",
      "image": "/assets/course-image.png",
      "url": "https://example.com",
      "tags": ["python", "beginner"],
      "difficulty": "beginner"
    }
  ]
}
```

## Notes

- Language auto-detects from browser (`navigator.language`)
- Courses open in new tab via standard `<a>` (no app-specific navigation)
- Images go in `public/assets/`
