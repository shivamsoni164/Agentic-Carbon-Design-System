# Carbon Design System — Agent Context

This file is referenced by Cursor's AI when generating new components.
Keep it updated as new components or patterns are added.

---

## What makes Carbon "Carbon"

1. **Flat and square** — no shadows, no rounded corners (except tags). Borders define structure.
2. **Dense** — compact spacing, high information density. Not airy or card-heavy.
3. **Token-driven** — every colour, every spacing value comes from the design token system. Nothing is arbitrary.
4. **IBM Plex only** — the typeface is part of the brand. Never mix fonts.
5. **Purposeful colour** — colour signals meaning (blue = interactive, red = error, green = success). Not decoration.

---

## Component decision guide

| If you need to... | Use this |
|---|---|
| Trigger an action | Button |
| Collect text input | TextInput or PasswordInput |
| Show system feedback | InlineNotification (in-page) or ToastNotification (overlay) |
| Ask for confirmation | Modal |
| Display tabular data | DataTable with TableContainer |
| Label a status | Tag (pick the right colour type) |
| Group form fields | FormGroup + Stack |
| Show loading state | InlineLoading (inline) or Loading (full page) |
| Navigate hierarchy | Breadcrumb |
| Show/hide content | Accordion |
| Toggle a setting | Toggle |
| Select from options | Dropdown or Select |

---

## Patterns to follow

### Status colours (always use Tag, never plain text)
```jsx
const statusColour = {
  Active:    'green',
  Inactive:  'gray',
  Pending:   'blue',
  In review: 'purple',
  Blocked:   'red',
  Warning:   'warm-gray',
  Deprecated:'cool-gray',
};
<Tag type={statusColour[status]}>{status}</Tag>
```

### Form layout (always Stack, never manual margins)
```jsx
<Form>
  <Stack gap={7}>
    <TextInput id="x" labelText="Label" />
    <PasswordInput id="y" labelText="Password" />
    <Button type="submit">Submit</Button>
  </Stack>
</Form>
```

### Page header pattern
```jsx
<div style={{ padding: '32px 32px 24px', borderBottom: '1px solid #e0e0e0' }}>
  <p style={{ fontSize: '12px', color: '#525252', marginBottom: '4px' }}>Section label</p>
  <h1 style={{ fontSize: '20px', fontWeight: 400 }}>Page title</h1>
</div>
```

### DataTable with status
Always use the render prop pattern. Status cells use Tag, not coloured text.
See DataTable.stories.jsx for the full pattern.

---

## What the agent should NOT do
- Do not use Tailwind, Bootstrap, MUI, shadcn, or any other UI library
- Do not use arbitrary hex values — reference the token list in .cursorrules
- Do not add border-radius to buttons, inputs, tables, or containers
- Do not place labels beside inputs (always above)
- Do not use two Primary buttons in the same view
- Do not use Modal for non-critical or frequent actions
- Do not invent new components when a Carbon one already exists
