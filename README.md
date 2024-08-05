This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Overview of project system design:
1. Frontend
1.1. pages and Components
app/page.js: The main page where tasks are displayed and managed.

Components:
TaskForm: Component for adding new tasks.
TaskList: Component to list all tasks.
TaskItem: Component to display individual tasks with options to edit, mark as done, and expand details.
pages/api/tasks.js: API route for handling CRUD operations with tasks.
1.2. State Management
React State: To manage the state of tasks, including adding, editing, and marking tasks as done.
1.3. Styling
Tailwind CSS: For consistent and responsive styling across components.
2. Backend (API)
2.1. API Routes
app/api/tasks/route.js: This file will contain handlers for CRUD operations and interact with the tasks.json file.
2.2. Data Storage
tasks.json: A JSON file stored on the server to persist task data.
3.1. CORS Handling
Set appropriate CORS headers in API responses to allow frontend access.

