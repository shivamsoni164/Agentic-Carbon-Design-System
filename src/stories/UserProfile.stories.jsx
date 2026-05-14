import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  InlineNotification,
  Modal,
  Stack,
  Tag,
  TextInput,
  Tile,
  Toggle,
} from '@carbon/react';
import { TrashCan } from '@carbon/icons-react';

const tokens = {
  background: '#f4f4f4',
  layer01: '#ffffff',
  borderSubtle: '#e0e0e0',
  textPrimary: '#161616',
  textSecondary: '#525252',
};

function UserProfilePage({
  userName = 'Aria Johnson',
  userRole = 'Product designer',
  initialName = 'Aria Johnson',
  initialEmail = 'aria@acme.com',
  initialNotifications = true,
  showSaveSuccess = false,
  emailInvalid = false,
}) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: tokens.background,
        minHeight: '480px',
        padding: '32px',
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: '672px', margin: '0 auto' }}>
        <Tile style={{ padding: 0, overflow: 'hidden' }}>
          <header
            style={{
              padding: '32px 32px 24px',
              borderBottom: `1px solid ${tokens.borderSubtle}`,
              backgroundColor: tokens.layer01,
            }}
          >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: tokens.textSecondary,
                marginBottom: '8px',
                lineHeight: '16px',
              }}
            >
              Account
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <h1
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: tokens.textPrimary,
                  margin: 0,
                  lineHeight: '28px',
                }}
              >
                {userName}
              </h1>
              <Tag type="blue">{userRole}</Tag>
            </div>
          </header>

          <div style={{ padding: '32px', backgroundColor: tokens.layer01 }}>
            <Stack gap={8}>
              {showSaveSuccess && (
                <InlineNotification
                  kind="success"
                  title="Profile updated"
                  subtitle="Your settings were saved successfully."
                  lowContrast
                />
              )}

              <Form>
                <Stack gap={7}>
                  <FormGroup legendText="Profile settings">
                    <Stack gap={6}>
                      <TextInput
                        id="profile-display-name"
                        labelText="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        helperText="Shown on your profile and in comments."
                      />
                      <TextInput
                        id="profile-email"
                        type="email"
                        labelText="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        invalid={emailInvalid}
                        invalidText="Enter a valid email address."
                        helperText="Used for sign-in and notifications."
                      />
                      <Toggle
                        id="profile-notifications"
                        labelText="Email notifications"
                        labelA="Off"
                        labelB="On"
                        toggled={notifications}
                        onToggle={() => setNotifications((v) => !v)}
                      />
                    </Stack>
                  </FormGroup>

                  <Button kind="primary" type="button">
                    Save changes
                  </Button>
                </Stack>
              </Form>

              <div
                style={{
                  borderTop: `1px solid ${tokens.borderSubtle}`,
                  paddingTop: '24px',
                }}
              >
                <Stack gap={5}>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: tokens.textPrimary,
                      margin: 0,
                      lineHeight: '24px',
                    }}
                  >
                    Danger zone
                  </p>
                  <InlineNotification
                    kind="warning"
                    title="Delete account"
                    subtitle="Permanently remove your account and all associated data. This cannot be undone."
                    lowContrast
                  />
                  <div>
                    <Button
                      kind="danger--tertiary"
                      renderIcon={TrashCan}
                      onClick={() => setDeleteOpen(true)}
                    >
                      Delete account
                    </Button>
                  </div>
                </Stack>
              </div>
            </Stack>
          </div>
        </Tile>

        <Modal
          open={deleteOpen}
          onRequestClose={() => setDeleteOpen(false)}
          onRequestSubmit={() => setDeleteOpen(false)}
          danger
          modalHeading="Delete this account?"
          modalLabel="Danger zone"
          primaryButtonText="Delete permanently"
          secondaryButtonText="Cancel"
        >
          <p style={{ color: tokens.textPrimary, fontSize: '14px', lineHeight: '20px' }}>
            This will permanently delete <strong>{email}</strong> and all associated data. This
            action cannot be undone.
          </p>
        </Modal>
      </div>
    </div>
  );
}

export default {
  title: 'Carbon / UserProfile',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A user profile layout with a page-style header, editable profile fields, notification preference as a toggle, and a danger zone for account deletion confirmed in a modal. Uses Carbon layout primitives and design tokens only.',
      },
    },
  },
  argTypes: {
    userName: { control: 'text' },
    userRole: { control: 'text' },
    initialName: { control: 'text' },
    initialEmail: { control: 'text' },
    initialNotifications: { control: 'boolean' },
    showSaveSuccess: { control: 'boolean' },
    emailInvalid: { control: 'boolean' },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    userName: 'Aria Johnson',
    userRole: 'Product designer',
    initialName: 'Aria Johnson',
    initialEmail: 'aria@acme.com',
    initialNotifications: true,
    showSaveSuccess: false,
    emailInvalid: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Adjust header copy, form defaults, and feedback states using Storybook controls.',
      },
    },
  },
  render: (args) => <UserProfilePage {...args} />,
};

export const AllStates = {
  name: 'All states',
  parameters: {
    docs: {
      description: {
        story:
          'Common UI states side by side: success after save, invalid email, and notifications disabled.',
      },
    },
  },
  render: () => (
    <Stack gap={8}>
      <UserProfilePage
        userName="Sam Rivera"
        userRole="Engineer"
        initialName="Sam Rivera"
        initialEmail="sam@acme.com"
        initialNotifications={false}
        showSaveSuccess
        emailInvalid={false}
      />
      <UserProfilePage
        userName="Morgan Lee"
        userRole="Administrator"
        initialName="Morgan"
        initialEmail="not-an-email"
        initialNotifications
        showSaveSuccess={false}
        emailInvalid
      />
    </Stack>
  ),
};

export const AccountSettings = {
  name: 'Account settings (usage)',
  parameters: {
    docs: {
      description: {
        story:
          'Typical account settings view: read-only identity in the header, editable profile form with a single primary save action, and a destructive path isolated in the danger zone with modal confirmation.',
      },
    },
  },
  render: () => (
    <UserProfilePage
      userName="Aria Johnson"
      userRole="Product designer"
      initialName="Aria Johnson"
      initialEmail="aria@acme.com"
      initialNotifications
    />
  ),
};
