# TRACK

A modern personal finance tracking web app focused on clarity, structure, and a strong visual experience.

TRACK helps users understand their financial life through a clean onboarding flow, guided product storytelling, and a dashboard foundation for managing money-related workflows.

## Why This Project Exists

Most finance apps are either:
- too complex for beginners, or
- too minimal to feel useful long-term.

TRACK is designed to sit in the middle:
- beginner-friendly user experience,
- professional UI quality,
- scalable architecture for future finance features.

## What The App Currently Includes

- Public marketing experience:
  - Landing page (`/`)
  - Features page (`/features`)
  - Security page (`/security`)
- Authentication UI:
  - Sign up page (`/usersignup`)
  - Login page (`/userlogin`)
- Dashboard shell:
  - Sidebar + top nav layout (`/dashboard`)
  - Placeholder blocks ready for analytics widgets and financial modules
- Interactive frontend behaviors:
  - Motion-based hero animations
  - Mobile navigation menu
  - Collapsible dashboard sidebar (managed with Zustand)

## How It Works (Beginner-Friendly Flow)

1. User lands on the homepage and explores the product value proposition.
2. User can visit `Features` and `Security` pages to understand benefits and trust signals.
3. User clicks `Sign Up` or `Login`.
4. Form UI collects input and currently routes to the dashboard screen.
5. Inside dashboard, user sees the app shell that will host finance tools like transactions, budgets, and overview analytics.

Note: Current auth and financial data logic are UI-level only (no persisted backend integration yet).

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- UI: React 19 + Tailwind CSS 4
- Components: shadcn-style primitives
- Icons: lucide-react
- Animations: motion
- State Management: Zustand
- Server dependency present: Express (server file currently empty)

## Project Structure

```txt
app/
  (root)/                # Public pages + navbar layout
  dashboard/             # Authenticated-area layout shell
  userlogin/             # Login route wrapper
  usersignup/            # Signup route wrapper
components/
  login-form.tsx
  signup-form.tsx
  ui/                    # Reusable UI primitives
config/
  fonts.ts
  store.ts               # Zustand sidebar toggle store
src/
  hero.tsx
  navbar.tsx
  sidebar.tsx
  dbnavbar.tsx
pages/
  login.tsx
  signup.tsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Open in browser

Visit: `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Recruiter-Friendly Highlights

- Built with modern web stack (Next.js 16 + React 19 + TypeScript)
- Demonstrates strong UI composition and reusable component architecture
- Includes responsive navigation and motion-first interaction design
- Uses centralized global state (Zustand) for layout behavior
- Organized route and layout strategy using the App Router

## Current Limitations (Transparent Status)

- Authentication is currently UI-only (no real account creation/session handling)
- Dashboard content is scaffolded, not connected to real finance data
- Express server exists in dependencies but backend implementation is not active

## Suggested Next Steps

- Add real authentication (JWT/session + secure password flow)
- Connect persistent data storage for transactions and budgets
- Implement charts and financial summaries in dashboard widgets
- Add form validation and error handling for auth flows
- Introduce tests (unit/integration/e2e) for reliability

## License

No license has been specified yet. Add one (for example, MIT) before public distribution.


