# Carbon Agentic Design System — Setup Guide

A Storybook component library built on IBM Carbon Design System.
No API key needed. Runs fully locally.

---

## What's inside

| Story file | Components covered |
|---|---|
| `Button.stories.jsx` | All 5 variants, 5 sizes, icon buttons, disabled states |
| `TextInput.stories.jsx` | Default, all 4 states, sizes, password input |
| `Notification.stories.jsx` | Inline, Toast, Actionable — all 4 kinds |
| `DataTable.stories.jsx` | Basic table, toolbar + search, status tags |
| `Modal.stories.jsx` | Default, danger, form modal, passive |
| `Tag.stories.jsx` | All 12 colour types, status pattern, sizes |
| `Form.stories.jsx` | Complete login form, settings form with groups |

---

## Prerequisites

- Node.js 18 or higher — check by running `node -v` in your terminal
- npm (comes with Node.js)

---

## Step 1 — Create the project folder

Open Cursor. Open the terminal inside Cursor (`Ctrl + backtick` on Windows, `Cmd + backtick` on Mac).

```bash
mkdir carbon-agentic-ds
cd carbon-agentic-ds
```

---

## Step 2 — Copy all project files

Paste ALL the files you downloaded into this folder.
The structure should look like this:

```
carbon-agentic-ds/
├── package.json
├── vite.config.js
├── .storybook/
│   ├── main.js
│   └── preview.js
└── src/
    └── stories/
        ├── Button.stories.jsx
        ├── TextInput.stories.jsx
        ├── Notification.stories.jsx
        ├── DataTable.stories.jsx
        ├── Modal.stories.jsx
        ├── Tag.stories.jsx
        └── Form.stories.jsx
```

---

## Step 3 — Install dependencies

In the Cursor terminal, run:

```bash
npm install
```

This downloads Carbon React, Carbon icons, and Storybook. Takes 2–3 minutes on first run.

---

## Step 4 — Start Storybook

```bash
npm run storybook
```

Storybook will open automatically at **http://localhost:6006**

---

## How to use in your workshop

1. Run `npm run storybook` before the session
2. Leave it open in a browser tab — it stays live as long as the terminal is running
3. Navigate components using the left sidebar
4. Use the **Controls** panel (bottom of screen) to adjust props live
5. Use the **Docs** tab on each component to show the explanation

### Good demo order for a workshop
1. Start with **Button** → show all variants, change kind with Controls
2. Move to **TextInput** → show error state, show how label always sits above
3. Show **Tag** → explain semantic colours, show StatusPattern story
4. Show **Form** → demonstrate the complete login form, submit it
5. Show **DataTable** → type in the search bar to filter live
6. Close with **Modal** → show danger modal, explain when to use each type

---

## Connecting to an AI agent (next step)

Once you're comfortable with the stories, you can point an AI agent (Claude Code, Cursor's AI) at this library by referencing the Storybook URL in your prompt:

```
Using the Carbon design system components shown at http://localhost:6006,
build me a user profile settings page.
```

The agent will read the component structure and generate code that matches
your exact design system — no Figma MCP, no API key for the design system.

---

## Troubleshooting

**`npm install` fails** → Make sure Node.js 18+ is installed: `node -v`

**Port 6006 already in use** → Run `npm run storybook -- --port 6007`

**Storybook doesn't open automatically** → Open your browser and go to `http://localhost:6006`

**Icons not showing** → This is sometimes a peer dependency issue. Run:
```bash
npm install @carbon/icons-react
```
