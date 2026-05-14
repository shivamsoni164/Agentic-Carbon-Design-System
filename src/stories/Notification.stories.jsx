import { InlineNotification, ToastNotification, ActionableNotification } from '@carbon/react';

export default {
  title: 'Carbon / Notification',
  component: InlineNotification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Notifications communicate system status. Carbon has three types: Inline (within page content), Toast (temporary overlay), and Actionable (includes a button). Use the right kind — error, warning, success, or info.',
      },
    },
  },
};

// ─── Inline — All Kinds ────────────────────────────────────────────────────────
export const InlineAllKinds = {
  name: 'Inline — all kinds',
  parameters: {
    docs: {
      description: {
        story:
          'Inline notifications sit within the page flow. Use for persistent messages that relate to specific content. Error and warning require immediate attention; success and info are informational.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <InlineNotification
        kind="error"
        title="Error:"
        subtitle="Your session has expired. Please sign in again."
        lowContrast
      />
      <InlineNotification
        kind="warning"
        title="Warning:"
        subtitle="You have unsaved changes. Leave anyway?"
        lowContrast
      />
      <InlineNotification
        kind="success"
        title="Success:"
        subtitle="Your profile has been updated."
        lowContrast
      />
      <InlineNotification
        kind="info"
        title="Info:"
        subtitle="Scheduled maintenance on Sunday 2–4 AM UTC."
        lowContrast
      />
    </div>
  ),
};

// ─── Toast ─────────────────────────────────────────────────────────────────────
export const Toast = {
  name: 'Toast notifications',
  parameters: {
    docs: {
      description: {
        story:
          'Toast notifications appear in the top-right corner and auto-dismiss. They are non-blocking — use for transient confirmations and low-priority alerts.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '360px' }}>
      <ToastNotification
        kind="success"
        title="File uploaded"
        subtitle="report-q4.pdf was uploaded successfully."
        caption="Just now"
      />
      <ToastNotification
        kind="error"
        title="Upload failed"
        subtitle="File exceeds the 10 MB limit."
        caption="Just now"
      />
      <ToastNotification
        kind="info"
        title="Update available"
        subtitle="Version 3.2.1 is ready to install."
        caption="2 mins ago"
      />
    </div>
  ),
};

// ─── Actionable ───────────────────────────────────────────────────────────────
export const Actionable = {
  name: 'Actionable notification',
  parameters: {
    docs: {
      description: {
        story:
          'Actionable notifications include a button for a direct response. Use when the user needs to take an action related to the notification — e.g., undo, retry, or review.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <ActionableNotification
        kind="warning"
        title="Unsaved changes"
        subtitle="You have 3 unsaved changes."
        actionButtonLabel="Save now"
        lowContrast
        onActionButtonClick={() => alert('Saving...')}
      />
      <ActionableNotification
        kind="error"
        title="Connection lost"
        subtitle="Could not reach the server."
        actionButtonLabel="Retry"
        lowContrast
        onActionButtonClick={() => alert('Retrying...')}
      />
    </div>
  ),
};
