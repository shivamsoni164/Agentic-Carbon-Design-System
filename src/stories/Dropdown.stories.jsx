import { Dropdown, MultiSelect, ComboBox } from '@carbon/react';

const regions = ['EU West', 'EU North', 'US East', 'US West', 'AP South', 'AP Northeast'];
const roles = [
  { id: 'admin', label: 'Admin — full access' },
  { id: 'editor', label: 'Editor — can edit content' },
  { id: 'viewer', label: 'Viewer — read only' },
  { id: 'billing', label: 'Billing — invoices only' },
];

export default {
  title: 'Carbon / Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Carbon has three selection components: Dropdown (pick one from a list), MultiSelect (pick many), and ComboBox (pick one with type-to-filter). Use Dropdown when the list is short and fixed. Use ComboBox when the list is long or the user benefits from filtering. Use MultiSelect when multiple selections are valid.',
      },
    },
  },
};

// ─── Dropdown ─────────────────────────────────────────────────────────────────
export const SingleDropdown = {
  name: 'Dropdown (select one)',
  parameters: {
    docs: {
      description: {
        story:
          'Standard single-select Dropdown. Always provide a titleText label above and a helperText below if the choice needs clarification. The label prop is the placeholder shown before selection.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Dropdown
        id="region-select"
        titleText="Region"
        label="Select a region"
        helperText="Data will be stored in this region"
        items={regions}
        itemToString={(item) => item || ''}
      />
      <Dropdown
        id="role-select"
        titleText="User role"
        label="Select a role"
        items={roles}
        itemToString={(item) => item?.label || ''}
      />
    </div>
  ),
};

// ─── All States ────────────────────────────────────────────────────────────────
export const DropdownStates = {
  name: 'All states',
  parameters: {
    docs: {
      description: {
        story:
          'Default, disabled, and invalid states. The invalid state shows an error message below — use this when a selection is required and the user has not yet made one.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Dropdown
        id="dd-default"
        titleText="Default"
        label="Select option"
        items={regions}
        itemToString={(item) => item || ''}
      />
      <Dropdown
        id="dd-disabled"
        titleText="Disabled"
        label="Not available"
        items={regions}
        itemToString={(item) => item || ''}
        disabled
      />
      <Dropdown
        id="dd-invalid"
        titleText="Invalid"
        label="Select option"
        items={regions}
        itemToString={(item) => item || ''}
        invalid
        invalidText="Please select a region to continue"
      />
    </div>
  ),
};

// ─── MultiSelect ──────────────────────────────────────────────────────────────
export const MultiSelectDropdown = {
  name: 'MultiSelect (select many)',
  parameters: {
    docs: {
      description: {
        story:
          'MultiSelect allows selecting multiple items. A tag count badge appears on the trigger showing how many items are selected. Use when the user can validly choose more than one option — e.g. assigning multiple tags, regions, or permissions.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <MultiSelect
        id="region-multi"
        titleText="Regions"
        label="Select regions"
        helperText="Select all regions you want to enable"
        items={regions}
        itemToString={(item) => item || ''}
      />
      <MultiSelect
        id="role-multi"
        titleText="Permissions"
        label="Select permissions"
        items={['Read', 'Write', 'Delete', 'Admin', 'Billing']}
        itemToString={(item) => item || ''}
      />
    </div>
  ),
};

// ─── ComboBox ─────────────────────────────────────────────────────────────────
export const ComboBoxDropdown = {
  name: 'ComboBox (type to filter)',
  parameters: {
    docs: {
      description: {
        story:
          'ComboBox adds type-ahead filtering to a Dropdown. Use it when the list has 10+ items or when the user knows what they are looking for. The user can type to narrow the options before selecting.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <ComboBox
        id="country-combo"
        titleText="Country"
        placeholder="Type to filter countries"
        helperText="Start typing to narrow the list"
        items={[
          'Afghanistan', 'Australia', 'Austria', 'Belgium', 'Brazil',
          'Canada', 'China', 'Denmark', 'Egypt', 'Finland',
          'France', 'Germany', 'India', 'Ireland', 'Italy',
          'Japan', 'Mexico', 'Netherlands', 'New Zealand', 'Norway',
          'Poland', 'Portugal', 'Spain', 'Sweden', 'United Kingdom',
          'United States',
        ]}
        itemToString={(item) => item || ''}
      />
      <ComboBox
        id="timezone-combo"
        titleText="Timezone"
        placeholder="Search timezones…"
        items={['UTC', 'UTC+1 (CET)', 'UTC+2 (EET)', 'UTC+5:30 (IST)', 'UTC+8 (CST)', 'UTC+9 (JST)', 'UTC-5 (EST)', 'UTC-8 (PST)']}
        itemToString={(item) => item || ''}
      />
    </div>
  ),
};
