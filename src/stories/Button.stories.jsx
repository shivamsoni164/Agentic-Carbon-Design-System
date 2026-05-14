import { Button } from '@carbon/react';
import { Add, TrashCan, Download } from '@carbon/icons-react';

export default {
  title: 'Carbon / Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are used to trigger actions. Carbon has five button variants and three sizes. Always use Primary for the single most important action on a page. Never use more than one Primary button per context.',
      },
    },
  },
  argTypes: {
    kind: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Button size',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────
export const Playground = {
  args: {
    kind: 'primary',
    size: 'md',
    disabled: false,
    children: 'Button label',
  },
};

// ─── All Variants ──────────────────────────────────────────────────────────────
export const AllVariants = {
  name: 'All variants',
  parameters: {
    docs: {
      description: {
        story:
          'Primary = main action. Secondary = alternative. Tertiary = low emphasis. Danger = destructive. Ghost = minimal footprint.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
      <Button kind="danger">Danger</Button>
      <Button kind="ghost">Ghost</Button>
    </div>
  ),
};

// ─── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'sm = 32px, md = 40px (default), lg = 48px, xl = 64px, 2xl = 80px.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2XL</Button>
    </div>
  ),
};

// ─── With Icon ─────────────────────────────────────────────────────────────────
export const WithIcon = {
  name: 'With icon',
  parameters: {
    docs: {
      description: {
        story:
          'Use renderIcon to append a Carbon icon. Always use icons from @carbon/icons-react to stay on-system.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button renderIcon={Add} kind="primary">Add item</Button>
      <Button renderIcon={Download} kind="secondary">Download</Button>
      <Button renderIcon={TrashCan} kind="danger">Delete</Button>
    </div>
  ),
};

// ─── Icon Only ─────────────────────────────────────────────────────────────────
export const IconOnly = {
  name: 'Icon only',
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only buttons must include iconDescription for accessibility. Used in toolbars and tight spaces.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button hasIconOnly renderIcon={Add} iconDescription="Add item" kind="primary" />
      <Button hasIconOnly renderIcon={Download} iconDescription="Download" kind="secondary" />
      <Button hasIconOnly renderIcon={TrashCan} iconDescription="Delete" kind="danger" />
    </div>
  ),
};

// ─── Disabled ─────────────────────────────────────────────────────────────────
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled buttons are unresponsive and visually muted. Use sparingly — prefer hiding actions over disabling them where possible.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button kind="primary" disabled>Primary disabled</Button>
      <Button kind="secondary" disabled>Secondary disabled</Button>
      <Button kind="danger" disabled>Danger disabled</Button>
    </div>
  ),
};
