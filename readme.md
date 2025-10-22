# React Week 3 — Vite + React + Tailwind Demo

## Objective
Build a responsive React app demonstrating components, state management (hooks), localStorage persistence, API integration (JSONPlaceholder), routing, and Tailwind-based styling (incl. dark mode).

## Quick Start
1. `npm install`
2. `npm run dev`
3. Open http://localhost:5173 (or port shown by Vite)

## Features
- Vite + React 18
- Tailwind CSS configured with dark mode
- Reusable components: Button, Card, Navbar, Footer, Layout
- Task manager with `useState`, `useEffect` and localStorage persistence
- Theme (light/dark) via context and localStorage
- API page fetching posts with pagination & loading/error states
- Responsive design and simple animations via Tailwind

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Environment
- `.env.example` includes `VITE_API_BASE` (default uses jsonplaceholder)

## Notes
- Copy files into the structure and run install.
- If `clsx` is missing for Button, either install it (`npm i clsx`) or change class logic to template strings.
