# React Quest MVP Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task if continuing with delegated development.

**Goal:** Build a browser-only MVP for React Quest, a Korean React learning app based on ko.react.dev with lesson navigation, quizzes, code practice, and local progress tracking.

**Architecture:** Use a Vite + React + TypeScript SPA. Keep MVP content as static TypeScript data, persist progress in localStorage, and use Sandpack for interactive React code practice. Avoid backend/auth until a later phase.

**Tech Stack:** React 19, TypeScript, Vite, React Router, Sandpack, Vitest, React Testing Library, localStorage.

---

## Scope

MVP includes:
- Home page with product positioning, progress, and next quest.
- Course map grouped by official React Learn sections.
- Lesson detail page with objectives, explanation, official docs links, quizzes, and practice link.
- Practice page with starter code, preview, hints, solution, reset, and completion.
- Static content for 10 beginner lessons.
- localStorage progress persistence.

MVP excludes:
- Login, server DB, payments, study groups, advanced code grading, Next.js, React Server Components, cloud sync.

---

## Tasks

### Task 1: Scaffold and install dependencies

**Objective:** Create a safe new Vite React TypeScript app in `workforce/react-quest`.

**Files:**
- Create project root: `/home/ptec07/.hermes/hermes-agent/workforce/react-quest`
- Modify: `package.json`

**Steps:**
1. Verify target path does not exist.
2. Run `npm create vite@latest react-quest -- --template react-ts`.
3. Install runtime dependencies: `react-router-dom`, `@codesandbox/sandpack-react`.
4. Install test dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`.
5. Add `test` script.

### Task 2: Add test setup and write failing behavior tests

**Objective:** Define the expected MVP behavior before implementation.

**Files:**
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`
- Modify: `vite.config.ts`
- Modify: `package.json`

**Behavior tests:**
- Home renders React Quest branding and official-docs positioning.
- Course map link navigates to `/quest` and shows MVP lessons.
- Lesson page for `state-usestate` shows objectives, official docs, quizzes, and practice CTA.
- Quiz interaction displays correct explanation and stores progress.
- Practice page reveals hints and marks an exercise complete in localStorage.

### Task 3: Implement static content model

**Objective:** Add typed static lesson, quiz, and exercise data.

**Files:**
- Create: `src/features/lessons/types.ts`
- Create: `src/content/lessons.ts`
- Create: `src/content/quizzes.ts`
- Create: `src/content/exercises.ts`

**Verification:** Tests can import and navigate to lesson data by slug.

### Task 4: Implement progress utilities

**Objective:** Persist learning progress in browser localStorage.

**Files:**
- Create: `src/features/progress/progress.ts`
- Create: `src/features/progress/useProgress.ts`

**Expected behavior:**
- Safely parse malformed localStorage.
- Toggle lesson/exercise/quiz completion.
- Track `lastOpenedLessonId`.
- Calculate completion percentage.

### Task 5: Implement routes and pages

**Objective:** Replace Vite starter page with React Quest app routes.

**Files:**
- Modify: `src/App.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/CourseMapPage.tsx`
- Create: `src/pages/LessonPage.tsx`
- Create: `src/pages/PracticePage.tsx`
- Create: `src/pages/NotFoundPage.tsx`

**Routes:**
- `/`
- `/quest`
- `/quest/:lessonSlug`
- `/quest/:lessonSlug/practice`

### Task 6: Implement UI components

**Objective:** Add reusable UI for lesson cards, quiz cards, official links, and practice controls.

**Files:**
- Create: `src/components/AppShell.tsx`
- Create: `src/components/LessonCard.tsx`
- Create: `src/components/QuizCard.tsx`
- Create: `src/components/PracticePanel.tsx`
- Create: `src/components/ProgressBar.tsx`

### Task 7: Style the MVP

**Objective:** Provide a polished beginner-friendly React Quest visual system.

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css` or remove if unused

**Style goals:**
- Bright, clean learning UI.
- Quest cards, progress bars, concept cards.
- Responsive layout.

### Task 8: Verify and document

**Objective:** Prove the MVP works and document how to run it.

**Files:**
- Modify: `README.md`

**Commands:**
- `npm test -- --run`
- `npm run build`

**Acceptance criteria:**
- Tests pass.
- Build passes.
- Home/course/lesson/practice flows work.
- Progress survives reload via localStorage.
