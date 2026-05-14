import { useState } from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  InlineNotification,
  Stack,
  Tile,
} from '@carbon/react';

export default {
  title: 'Carbon / Form',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Forms in Carbon use the Form, FormGroup, and Stack components to create consistent spacing and grouping. Each field has a label above it (never beside it), helper text below, and an error state using invalidText. This story shows a complete, production-ready login form.',
      },
    },
  },
};

// ─── Login Form ───────────────────────────────────────────────────────────────
export const LoginForm = {
  name: 'Login form (complete)',
  parameters: {
    docs: {
      description: {
        story:
          'A complete login form using Carbon TextInput, PasswordInput, Checkbox, and Button. This is the correct Carbon pattern: Stack component controls vertical rhythm, all fields are stacked vertically, label is always above the input.',
      },
    },
  },
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError(true);
        setSubmitted(false);
      } else {
        setError(false);
        setSubmitted(true);
      }
    };

    return (
      <div style={{ maxWidth: '400px' }}>
        <Tile>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '20px', fontWeight: 400, marginBottom: '4px' }}>
              Sign in
            </p>
            <p style={{ fontSize: '14px', color: '#525252' }}>
              IBM Carbon Design System · Demo
            </p>
          </div>

          {submitted && (
            <InlineNotification
              kind="success"
              title="Signed in successfully"
              subtitle={`Welcome back, ${email}`}
              lowContrast
              style={{ marginBottom: '24px' }}
            />
          )}

          <Form onSubmit={handleSubmit}>
            <Stack gap={7}>
              <TextInput
                id="login-email"
                type="email"
                labelText="Email address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                invalid={error && !email}
                invalidText="Email address is required"
              />

              <PasswordInput
                id="login-password"
                labelText="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                invalid={error && !password}
                invalidText="Password is required"
                helperText="Must be at least 8 characters"
              />

              <Checkbox
                id="login-remember"
                labelText="Keep me signed in"
                checked={remember}
                onChange={(_, { checked }) => setRemember(checked)}
              />

              <Button type="submit" kind="primary" style={{ width: '100%', maxWidth: '100%' }}>
                Sign in
              </Button>

              <Button kind="ghost" style={{ width: '100%', maxWidth: '100%' }}>
                Forgot password?
              </Button>
            </Stack>
          </Form>
        </Tile>
      </div>
    );
  },
};

// ─── Settings Form ────────────────────────────────────────────────────────────
export const SettingsForm = {
  name: 'Settings form',
  parameters: {
    docs: {
      description: {
        story:
          'A multi-group settings form using FormGroup to cluster related fields. Each FormGroup has a legend. Stack controls spacing between groups.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '560px' }}>
      <Form>
        <Stack gap={8}>
          <FormGroup legendText="Personal information">
            <Stack gap={6}>
              <TextInput id="settings-firstname" labelText="First name" placeholder="Aria" />
              <TextInput id="settings-lastname" labelText="Last name" placeholder="Johnson" />
              <TextInput
                id="settings-email"
                type="email"
                labelText="Email address"
                placeholder="aria@acme.com"
                helperText="This is used for notifications and sign in"
              />
            </Stack>
          </FormGroup>

          <FormGroup legendText="Preferences">
            <Stack gap={5}>
              <Checkbox id="pref-notify-email" labelText="Email me about activity" defaultChecked />
              <Checkbox id="pref-notify-updates" labelText="Send product updates" />
              <Checkbox id="pref-notify-tips" labelText="Send tips and tutorials" defaultChecked />
            </Stack>
          </FormGroup>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button kind="primary">Save changes</Button>
            <Button kind="secondary">Cancel</Button>
          </div>
        </Stack>
      </Form>
    </div>
  ),
};
