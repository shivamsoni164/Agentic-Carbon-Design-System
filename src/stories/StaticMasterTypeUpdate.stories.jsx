import { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Column,
  Form,
  Grid,
  Header,
  HeaderContainer,
  HeaderName,
  InlineNotification,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Stack,
  TextArea,
  TextInput,
  Tooltip,
} from '@carbon/react';
import { InformationFilled } from '@carbon/icons-react';

// ─── Tokens ────────────────────────────────────────────────────────────────────
const t = {
  bg:            '#f4f4f4',
  layer01:       '#ffffff',
  borderSubtle:  '#e0e0e0',
  textPrimary:   '#161616',
  textSecondary: '#525252',
  supportError:  '#da1e28',
  sp03: '8px',
  sp04: '16px',
  sp05: '24px',
  sp06: '32px',
};

// ─── SideNav structure ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'System Config',       children: [] },
  { label: 'Access Control',      children: [] },
  { label: 'Org. Structure',      children: [] },
  { label: 'Banks',               children: [] },
  { label: 'Locations',           children: [] },
  {
    label: 'Static Master',
    defaultExpanded: true,
    children: [
      { label: 'Static Master Types', active: true },
      { label: 'Static Master Data' },
    ],
  },
  { label: 'Partner Mgmt.',       children: [] },
  { label: 'User Mgmt.',          children: [] },
];

// ─── Helper: label with required asterisk + info tooltip ──────────────────────
function FieldLabel({ text, required, tooltip }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      {text}
      {required && (
        <span style={{ color: t.supportError, marginLeft: '2px' }} aria-hidden>
          *
        </span>
      )}
      {tooltip && (
        <Tooltip align="right" label={tooltip}>
          <button
            type="button"
            aria-label={`More information about ${text}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              padding: '0 2px',
              cursor: 'pointer',
              color: t.textSecondary,
              lineHeight: 0,
            }}
          >
            <InformationFilled size={16} />
          </button>
        </Tooltip>
      )}
    </span>
  );
}

// ─── SideNav ──────────────────────────────────────────────────────────────────
function ConfigSideNav() {
  return (
    <SideNav aria-label="System configuration navigation" isPersistent>
      <SideNavItems>
        {NAV_ITEMS.map((item) => (
          <SideNavMenu
            key={item.label}
            title={item.label}
            defaultExpanded={item.defaultExpanded}
          >
            {item.children.map((child) => (
              <SideNavMenuItem key={child.label} href="#" isActive={child.active}>
                {child.label}
              </SideNavMenuItem>
            ))}
          </SideNavMenu>
        ))}
      </SideNavItems>
    </SideNav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function StaticMasterTypeUpdatePage() {
  const [description, setDescription]     = useState('');
  const [reasonsComments, setReasonsComments] = useState('Sample Description');

  return (
    <div
      style={{
        marginLeft: '256px',
        marginTop: '48px',
        minHeight: 'calc(100vh - 48px)',
        backgroundColor: t.bg,
      }}
    >
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: t.layer01,
          borderBottom: `1px solid ${t.borderSubtle}`,
          padding: `${t.sp05} ${t.sp06}`,
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Master Data</BreadcrumbItem>
          <BreadcrumbItem href="#">Static Master Types</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Static Master Type</BreadcrumbItem>
        </Breadcrumb>

        {/* Title row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: t.sp03,
            marginTop: t.sp04,
          }}
        >
          <h1
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: t.textPrimary,
              fontFamily: 'IBM Plex Sans, sans-serif',
              margin: 0,
            }}
          >
            Static Master Type - Update
          </h1>

          {/* Action buttons — one primary, one secondary, one ghost */}
          <div style={{ display: 'flex', gap: t.sp03, flexShrink: 0 }}>
            <Button kind="ghost">Cancel</Button>
            <Button kind="secondary">Save</Button>
            <Button kind="primary">Send for approval</Button>
          </div>
        </div>
      </div>

      {/* ── Form body ────────────────────────────────────────────────────── */}
      <div style={{ padding: t.sp06 }}>
        <div
          style={{
            backgroundColor: t.layer01,
            padding: t.sp05,
            borderBottom: `1px solid ${t.borderSubtle}`,
          }}
        >
          <Form>
            <Stack gap={7}>

              {/* Row 1: Name | System Code | Is Active */}
              <Grid fullWidth narrow>
                <Column sm={4} md={3} lg={5}>
                  <TextInput
                    id="name"
                    labelText={
                      <FieldLabel
                        text="Name"
                        required
                        tooltip="The display name for this static master type. Shown in all dropdowns referencing this type."
                      />
                    }
                    value="Gender"
                    onChange={() => {}}
                  />
                </Column>

                <Column sm={4} md={3} lg={5}>
                  <TextInput
                    id="system-code"
                    labelText={
                      <FieldLabel
                        text="System Code"
                        required
                        tooltip="The internal code used by the system to reference this master type. Should be uppercase and contain no spaces."
                      />
                    }
                    value="GENDER"
                    onChange={() => {}}
                  />
                </Column>

                <Column sm={4} md={2} lg={4}>
                  <TextInput
                    id="is-active"
                    labelText="Is Active"
                    value="No"
                    disabled
                  />
                </Column>
              </Grid>

              {/* Warning: Is Active is always disabled */}
              <InlineNotification
                kind="warning"
                title="Is Active is always disabled"
                subtitle="from create and maintain screens."
                hideCloseButton
              />

              {/* Description — full width */}
              <Grid fullWidth narrow>
                <Column sm={4} md={8} lg={16}>
                  <TextArea
                    id="description"
                    labelText="Description"
                    placeholder="Enter a description…"
                    rows={4}
                    enableCounter
                    maxCount={200}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Column>
              </Grid>

              {/* Reasons / Comments — full width, required */}
              <Grid fullWidth narrow>
                <Column sm={4} md={8} lg={16}>
                  <TextArea
                    id="reasons-comments"
                    labelText={
                      <FieldLabel text="Reasons / Comments" required />
                    }
                    placeholder="Enter reasons or comments…"
                    rows={4}
                    enableCounter
                    maxCount={200}
                    value={reasonsComments}
                    onChange={(e) => setReasonsComments(e.target.value)}
                  />
                </Column>
              </Grid>

            </Stack>
          </Form>
        </div>
      </div>
    </div>
  );
}

// ─── Story exports ─────────────────────────────────────────────────────────────
export default {
  title: 'Carbon / Static Master Type - Update',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-page "Static Master Type — Update" screen. Combines a persistent SideNav (system config hierarchy), a breadcrumb trail, a three-column form row with info tooltips, an InlineNotification explaining the disabled Is Active field, and two full-width TextAreas with character counters.',
      },
    },
  },
};

export const UpdateForm = {
  name: 'Static Master Type — Update',
  parameters: {
    docs: {
      description: {
        story:
          'Update screen for a Static Master Type record. Name and System Code carry info tooltips. Is Active is always disabled (enforced by an InlineNotification). Description is optional; Reasons / Comments is required. Actions: ghost Cancel, secondary Save, primary Send for approval.',
      },
    },
  },
  render: () => (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: t.bg }}>
      <HeaderContainer
        render={() => (
          <>
            <Header aria-label="System Configuration">
              <SkipToContent />
              <HeaderName href="#" prefix="Sahayya">
                System Config
              </HeaderName>
            </Header>

            <ConfigSideNav />
          </>
        )}
      />

      <StaticMasterTypeUpdatePage />
    </div>
  ),
};
