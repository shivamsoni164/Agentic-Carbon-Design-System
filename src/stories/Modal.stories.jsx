import { useState } from 'react';
import { Modal, Button, TextInput, InlineNotification } from '@carbon/react';

export default {
  title: 'Carbon / Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Modals focus attention on a single task or message. Use them sparingly — only for critical actions that require the user\'s full attention. Carbon has three modal variants: default (confirmations and forms), danger (destructive actions), and passive (read-only content).',
      },
    },
  },
};

// ─── Default / Confirmation ────────────────────────────────────────────────────
export const DefaultModal = {
  name: 'Default (confirmation)',
  parameters: {
    docs: {
      description: {
        story:
          'Default modal with primary and secondary actions. Use for confirmations that are reversible.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => setOpen(false)}
          modalHeading="Publish changes"
          modalLabel="Content management"
          primaryButtonText="Publish"
          secondaryButtonText="Cancel"
        >
          <p style={{ marginBottom: '1rem' }}>
            You are about to publish 3 changes to the live environment. This will be visible to all users immediately.
          </p>
          <InlineNotification
            kind="info"
            title="Heads up:"
            subtitle="Publishing cannot be undone without creating a rollback."
            lowContrast
          />
        </Modal>
      </>
    );
  },
};

// ─── Danger Modal ─────────────────────────────────────────────────────────────
export const DangerModal = {
  name: 'Danger (destructive action)',
  parameters: {
    docs: {
      description: {
        story:
          'Danger modals use a red primary button to signal irreversible, destructive actions. Always explain clearly what will be deleted and whether it can be recovered.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button kind="danger" onClick={() => setOpen(true)}>Delete account</Button>
        <Modal
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => setOpen(false)}
          danger
          modalHeading="Delete this account?"
          modalLabel="Danger zone"
          primaryButtonText="Delete permanently"
          secondaryButtonText="Cancel"
        >
          <p>
            This will permanently delete <strong>aria@acme.com</strong> and all associated data. This action cannot be undone.
          </p>
        </Modal>
      </>
    );
  },
};

// ─── Form Modal ───────────────────────────────────────────────────────────────
export const FormModal = {
  name: 'Modal with form',
  parameters: {
    docs: {
      description: {
        story:
          'Modals can contain short forms — typically 2–3 fields. For longer forms, use a full page instead. Fields inside a modal follow the same Carbon TextInput rules.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Invite user</Button>
        <Modal
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => setOpen(false)}
          modalHeading="Invite a team member"
          modalLabel="Team management"
          primaryButtonText="Send invite"
          secondaryButtonText="Cancel"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <TextInput
              id="invite-name"
              labelText="Full name"
              placeholder="e.g. Aria Johnson"
            />
            <TextInput
              id="invite-email"
              labelText="Email address"
              placeholder="aria@company.com"
              helperText="An invite will be sent to this address"
            />
          </div>
        </Modal>
      </>
    );
  },
};

// ─── Passive Modal ────────────────────────────────────────────────────────────
export const PassiveModal = {
  name: 'Passive (read-only)',
  parameters: {
    docs: {
      description: {
        story:
          'Passive modals have no primary action — only a close button. Use for displaying detailed information or help content without asking the user to act.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button kind="ghost">View details</Button>
        <Modal
          open={open}
          onRequestClose={() => setOpen(false)}
          passiveModal
          modalHeading="About this workspace"
        >
          <p>Created on 12 January 2024. Workspace ID: ws_8f3k92j. Region: EU West. All data is stored in compliance with GDPR.</p>
        </Modal>
      </>
    );
  },
};
