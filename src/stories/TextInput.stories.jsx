import { TextInput, PasswordInput } from '@carbon/react';

export default {
  title: 'Carbon / TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text inputs let users enter free-form text. Always pair with a visible label above. Use helper text below for guidance and invalid text for errors.',
      },
    },
    layout: 'padded',
  },
};

// ─── Default ──────────────────────────────────────────────────────────────────
export const Default = {
  args: {
    id: 'text-input-1',
    labelText: 'Email address',
    placeholder: 'Enter your email',
    helperText: "We'll use this to contact you",
  },
};

// ─── All States ────────────────────────────────────────────────────────────────
export const AllStates = {
  name: 'All states',
  parameters: {
    docs: {
      description: {
        story:
          'Default, disabled, read-only, and invalid. Agents need to know all four states exist to handle every UI scenario correctly.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <TextInput
        id="state-default"
        labelText="Default"
        placeholder="Enter value"
        helperText="Helper text for guidance"
      />
      <TextInput
        id="state-disabled"
        labelText="Disabled"
        placeholder="Not editable"
        disabled
        helperText="This field is currently unavailable"
      />
      <TextInput
        id="state-readonly"
        labelText="Read only"
        value="Read only value"
        readOnly
        helperText="This value cannot be changed"
      />
      <TextInput
        id="state-invalid"
        labelText="Invalid"
        value="bad@"
        invalid
        invalidText="Enter a valid email address"
      />
    </div>
  ),
};

// ─── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <TextInput id="size-sm" labelText="Small (sm)" placeholder="Small input" size="sm" />
      <TextInput id="size-md" labelText="Medium (md) — default" placeholder="Medium input" size="md" />
      <TextInput id="size-lg" labelText="Large (lg)" placeholder="Large input" size="lg" />
    </div>
  ),
};

// ─── Password ─────────────────────────────────────────────────────────────────
export const Password = {
  parameters: {
    docs: {
      description: {
        story:
          'PasswordInput includes a show/hide toggle. Use for any sensitive text field — never use a plain TextInput for passwords.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <PasswordInput
        id="password-1"
        labelText="Password"
        placeholder="Enter password"
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
};
