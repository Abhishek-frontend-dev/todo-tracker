# Copilot Instructions for Todo Task Manager

## Project Overview

This is a jQuery-based single-page Todo Task Manager. The app allows users to add tasks, attach comments, mark tasks as completed, and delete or edit tasks. All UI logic is handled in `script.js`, with HTML in `index.html` and CSS in `src/input.css` and `src/output.css`.

## Key Files and Structure

- `index.html`: Main HTML structure. Task list is rendered inside the `#todo-con` container.
- `script.js`: All DOM manipulation, event handling, and UI logic. No backend or persistent storage.
- `src/input.css`, `src/output.css`: Custom styles for UI components.
- SVG icons: Used for task actions (edit, delete, comment, complete) and stored as inline SVG or image files.

## Core Patterns and Conventions

- **Event Delegation:** All dynamic task actions (comment toggle, mark completed, delete) use delegated jQuery events on `#todo-con`.
- **Task Rendering:** Tasks are appended as HTML blocks to `#todo-con`. Each task includes:
  - Task text
  - Comment toggle (with SVG icon)
  - Status indicator (`data-status` attribute)
  - Action icons (edit, delete, mark completed)
- **Comment Toggle:** The comment icon swaps SVGs and toggles visibility of the comment box. Only the SVG inside `.toggle-svg` is replaced, not the parent structure.
- **Status Management:** Task status is tracked via the `data-status` attribute on `.todos`. Marking as completed changes color and status; toggling reverts.
- **Delete Action:** Clicking the delete icon removes the parent task container from the DOM.

## Developer Workflow

- No build step required; open `index.html` in a browser to run.
- All changes are live; no hot-reload or bundler.
- No tests or backend integration.

## Project-Specific Advice for AI Agents

- Always use delegated event handlers for dynamic elements (see `script.js` for examples).
- When updating icons, only replace the SVG inside `.toggle-svg` to preserve clickability and structure.
- Use the `data-status` attribute for task state; do not rely on CSS classes alone.
- When adding new features, follow the pattern of appending HTML to `#todo-con` and wiring up delegated events.
- For UI changes, update both the DOM and relevant inline styles for immediate feedback.

## Example: Marking a Task as Completed

```javascript
$("#todo-con").on("click", ".mark-completed", function () {
  const todoComplte = $(this).closest(".todos");
  const status = todoComplte.data("status");
  if (status === "pending") {
    todoComplte.data("status", "completed");
    $(this).css("fill", "green");
    todoComplte.css("color", "green");
  } else {
    todoComplte.data("status", "pending");
    $(this).css("fill", "black");
    todoComplte.css("color", "red");
  }
});
```

## Integration Points

- No external APIs or backend; all logic is client-side.
- SVGs and images are loaded from local files or inline.

---

If any section is unclear or missing, please provide feedback so this guide can be improved for future AI agents.
