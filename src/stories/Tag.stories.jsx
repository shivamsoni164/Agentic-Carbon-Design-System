import { Tag } from '@carbon/react';

export default {
  title: 'Carbon / Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tags are used to label, classify, or organise items. They are non-interactive by default. Carbon tags come in 11 colour types — each carries a semantic meaning. Never use arbitrary colours for tags: use the type prop and let the design system handle the colour.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'red', 'magenta', 'purple', 'blue', 'cyan',
        'teal', 'green', 'gray', 'cool-gray', 'warm-gray',
        'high-contrast', 'outline',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

// ─── Playground ───────────────────────────────────────────────────────────────
export const Playground = {
  args: {
    type: 'blue',
    size: 'md',
    children: 'Tag label',
  },
};

// ─── All Colour Types ─────────────────────────────────────────────────────────
export const AllColourTypes = {
  name: 'All colour types',
  parameters: {
    docs: {
      description: {
        story:
          'Use colour to communicate meaning consistently across your product. For status: green = active/success, red = error/critical, blue = informational, yellow/warm-gray = warning. Never pick colours arbitrarily.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag type="red">Red</Tag>
      <Tag type="magenta">Magenta</Tag>
      <Tag type="purple">Purple</Tag>
      <Tag type="blue">Blue</Tag>
      <Tag type="cyan">Cyan</Tag>
      <Tag type="teal">Teal</Tag>
      <Tag type="green">Green</Tag>
      <Tag type="gray">Gray</Tag>
      <Tag type="cool-gray">Cool gray</Tag>
      <Tag type="warm-gray">Warm gray</Tag>
      <Tag type="high-contrast">High contrast</Tag>
      <Tag type="outline">Outline</Tag>
    </div>
  ),
};

// ─── Status Pattern ───────────────────────────────────────────────────────────
export const StatusPattern = {
  name: 'Status pattern (recommended usage)',
  parameters: {
    docs: {
      description: {
        story:
          'This is the recommended pattern for mapping status values to tag colours. Define a lookup object in your code — do not hardcode colours in JSX.',
      },
    },
  },
  render: () => {
    const statuses = [
      { label: 'Active', type: 'green' },
      { label: 'Pending', type: 'blue' },
      { label: 'In review', type: 'purple' },
      { label: 'Blocked', type: 'red' },
      { label: 'Archived', type: 'gray' },
      { label: 'Deprecated', type: 'warm-gray' },
    ];
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {statuses.map(({ label, type }) => (
          <Tag key={label} type={type}>{label}</Tag>
        ))}
      </div>
    );
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tag type="blue" size="sm">Small</Tag>
      <Tag type="blue" size="md">Medium</Tag>
      <Tag type="blue" size="lg">Large</Tag>
    </div>
  ),
};
