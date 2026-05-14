import { Grid, Column, Tile } from '@carbon/react';

// Helper to visualise columns
const ColBox = ({ children, color = '#d0e2ff' }) => (
  <div style={{
    background: color,
    border: '1px solid #a6c8ff',
    padding: '12px 8px',
    fontSize: '12px',
    fontFamily: 'IBM Plex Mono, monospace',
    color: '#0043ce',
    textAlign: 'center',
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
);

export default {
  title: 'Carbon / Grid',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Carbon uses a 16-column CSS Grid. The Grid component creates the column container and Column defines how many columns each item spans. Use the sm, md, lg, xlg, and max props to control responsive behaviour. Breakpoints: sm = 320px (4 cols), md = 672px (8 cols), lg = 1056px (16 cols), xlg = 1312px (16 cols), max = 1584px (16 cols). The agent must always think in these column spans — never use arbitrary widths.',
      },
    },
  },
};

// ─── Basic column spans ───────────────────────────────────────────────────────
export const BasicSpans = {
  name: '16-column spans',
  parameters: {
    docs: {
      description: {
        story:
          'The 16-column grid is the foundation of every Carbon layout. Column spans must add up to 16 at each breakpoint. Common patterns: 16 (full), 8+8 (two halves), 4+4+4+4 (four quarters), 4+12 (sidebar + content).',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Grid>
        <Column lg={16}><ColBox>lg=16 (full width)</ColBox></Column>
      </Grid>
      <Grid>
        <Column lg={8}><ColBox>lg=8</ColBox></Column>
        <Column lg={8}><ColBox>lg=8</ColBox></Column>
      </Grid>
      <Grid>
        <Column lg={4}><ColBox>lg=4</ColBox></Column>
        <Column lg={4}><ColBox>lg=4</ColBox></Column>
        <Column lg={4}><ColBox>lg=4</ColBox></Column>
        <Column lg={4}><ColBox>lg=4</ColBox></Column>
      </Grid>
      <Grid>
        <Column lg={4}><ColBox color="#defbe6">lg=4 (sidebar)</ColBox></Column>
        <Column lg={12}><ColBox color="#fff1f1">lg=12 (content)</ColBox></Column>
      </Grid>
      <Grid>
        <Column lg={3}><ColBox>lg=3</ColBox></Column>
        <Column lg={3}><ColBox>lg=3</ColBox></Column>
        <Column lg={3}><ColBox>lg=3</ColBox></Column>
        <Column lg={7}><ColBox color="#e8daff">lg=7</ColBox></Column>
      </Grid>
    </div>
  ),
};

// ─── Responsive columns ───────────────────────────────────────────────────────
export const ResponsiveColumns = {
  name: 'Responsive columns',
  parameters: {
    docs: {
      description: {
        story:
          'Pass multiple breakpoint props to a Column to control how it reflows. This example stacks to full width on small screens, shows two columns on medium, and three on large. Resize the browser to see it in action.',
      },
    },
  },
  render: () => (
    <Grid>
      {['Card 1', 'Card 2', 'Card 3'].map((label, i) => (
        <Column key={i} sm={4} md={4} lg={5}>
          <ColBox>{label} · sm=4, md=4, lg=5</ColBox>
        </Column>
      ))}
    </Grid>
  ),
};

// ─── Gutter modes ─────────────────────────────────────────────────────────────
export const GutterModes = {
  name: 'Gutter modes',
  parameters: {
    docs: {
      description: {
        story:
          'Carbon has three gutter modes. Wide (default) = 32px gutter — use for standard page layouts. Narrow = 16px gutter — use for denser layouts. Condensed = 1px gutter — use for tightly packed data grids or image galleries.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px', fontFamily: 'IBM Plex Mono, monospace' }}>
          Wide (default) — 32px gutter
        </p>
        <Grid>
          <Column lg={8}><ColBox>col 1</ColBox></Column>
          <Column lg={8}><ColBox>col 2</ColBox></Column>
        </Grid>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px', fontFamily: 'IBM Plex Mono, monospace' }}>
          Narrow — 16px gutter
        </p>
        <Grid narrow>
          <Column lg={8}><ColBox color="#defbe6">col 1</ColBox></Column>
          <Column lg={8}><ColBox color="#defbe6">col 2</ColBox></Column>
        </Grid>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px', fontFamily: 'IBM Plex Mono, monospace' }}>
          Condensed — 1px gutter
        </p>
        <Grid condensed>
          <Column lg={8}><ColBox color="#fff1f1">col 1</ColBox></Column>
          <Column lg={8}><ColBox color="#fff1f1">col 2</ColBox></Column>
        </Grid>
      </div>
    </div>
  ),
};

// ─── Real layout pattern ──────────────────────────────────────────────────────
export const DashboardLayout = {
  name: 'Real layout — dashboard',
  parameters: {
    docs: {
      description: {
        story:
          'A realistic dashboard layout using the Carbon grid: a full-width header row, three metric tiles, and a 12+4 split for a main content area and a sidebar. This is the kind of layout an agent should be able to reproduce from a wireframe.',
      },
    },
  },
  render: () => (
    <Grid style={{ rowGap: '16px' }}>
      {/* Page header */}
      <Column lg={16}>
        <div style={{ padding: '24px 16px 16px', borderBottom: '1px solid #e0e0e0', marginBottom: '8px' }}>
          <p style={{ fontSize: '12px', color: '#525252', marginBottom: '4px' }}>Workspace</p>
          <h1 style={{ fontSize: '20px', fontWeight: 400 }}>Dashboard</h1>
        </div>
      </Column>

      {/* Metric tiles */}
      {[
        { label: 'Total users', value: '1,284' },
        { label: 'Active today', value: '342' },
        { label: 'Pending invites', value: '17' },
        { label: 'Issues open', value: '5' },
      ].map(({ label, value }) => (
        <Column key={label} sm={2} md={2} lg={4}>
          <Tile>
            <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px' }}>{label}</p>
            <p style={{ fontSize: '32px', fontWeight: 300 }}>{value}</p>
          </Tile>
        </Column>
      ))}

      {/* Main + sidebar */}
      <Column sm={4} md={6} lg={12}>
        <Tile style={{ minHeight: '180px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Main content area</p>
          <p style={{ fontSize: '14px', color: '#525252' }}>DataTable, charts, or other primary content goes here. lg=12 of 16 columns.</p>
        </Tile>
      </Column>
      <Column sm={4} md={2} lg={4}>
        <Tile style={{ minHeight: '180px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Sidebar</p>
          <p style={{ fontSize: '14px', color: '#525252' }}>Filters, quick actions, or context. lg=4 of 16 columns.</p>
        </Tile>
      </Column>
    </Grid>
  ),
};
