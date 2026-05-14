import { useState } from 'react';
import {
  Loading,
  InlineLoading,
  SkeletonText,
  SkeletonPlaceholder,
  DataTableSkeleton,
  Button,
} from '@carbon/react';

export default {
  title: 'Carbon / Loading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Loading states are especially important in agentic UIs — when an agent is working, the interface must communicate that clearly. Carbon has three tools: Loading (full-page spinner), InlineLoading (inline status that transitions through active → finished → error), and Skeleton (placeholder shapes that represent content structure while data loads).',
      },
    },
  },
};

// ─── Full Page Loading ─────────────────────────────────────────────────────────
export const FullPageLoading = {
  name: 'Loading (full page)',
  parameters: {
    docs: {
      description: {
        story:
          'Use the full Loading spinner when the entire page or a major section is being processed — for example, when an agent is generating a full layout or submitting a long-running task. It optionally overlays the page with a dark background.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'center' }}>
        <Loading description="Processing…" withOverlay={false} small={false} />
        <p style={{ fontSize: '12px', color: '#525252', marginTop: '12px' }}>Default (large)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Loading description="Processing…" withOverlay={false} small />
        <p style={{ fontSize: '12px', color: '#525252', marginTop: '12px' }}>Small</p>
      </div>
    </div>
  ),
};

// ─── Inline Loading ────────────────────────────────────────────────────────────
export const InlineLoadingStates = {
  name: 'InlineLoading — all states',
  parameters: {
    docs: {
      description: {
        story:
          'InlineLoading shows status inline next to the action that triggered it — ideal for agent-generated results, form submissions, and API calls. It transitions through three states: active (spinner), finished (checkmark), and error (X). Always show all three states so users understand the full cycle.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <InlineLoading status="active" description="Agent is generating your component…" />
      <InlineLoading status="finished" description="Component generated successfully" />
      <InlineLoading status="error" description="Generation failed — try again" />
    </div>
  ),
};

// ─── Interactive InlineLoading ─────────────────────────────────────────────────
export const InteractiveInlineLoading = {
  name: 'InlineLoading — interactive demo',
  parameters: {
    docs: {
      description: {
        story:
          'This shows how InlineLoading replaces a Button while a task runs. Click Generate to see the agent working state — this is the exact pattern to use in an agentic UI.',
      },
    },
  },
  render: () => {
    const [status, setStatus] = useState('inactive');

    const handleGenerate = () => {
      setStatus('active');
      setTimeout(() => setStatus('finished'), 2500);
      setTimeout(() => setStatus('inactive'), 4000);
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {status === 'inactive' ? (
          <Button kind="primary" onClick={handleGenerate}>
            Generate component
          </Button>
        ) : (
          <InlineLoading
            status={status}
            description={
              status === 'active' ? 'Agent generating…'
              : status === 'finished' ? 'Component ready'
              : 'Something went wrong'
            }
          />
        )}
      </div>
    );
  },
};

// ─── Skeleton Text ────────────────────────────────────────────────────────────
export const SkeletonTextStory = {
  name: 'Skeleton — text',
  parameters: {
    docs: {
      description: {
        story:
          'SkeletonText shows animated placeholder lines while text content loads. Use it to represent headings, paragraphs, and labels. The width prop controls line width — vary widths to make it look like real text, not a uniform block.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px' }}>Heading + paragraph</p>
        <SkeletonText heading style={{ marginBottom: '8px' }} />
        <SkeletonText paragraph lineCount={3} />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px' }}>Label + short text</p>
        <SkeletonText width="40%" style={{ marginBottom: '4px' }} />
        <SkeletonText width="70%" />
      </div>
    </div>
  ),
};

// ─── Skeleton Placeholder ─────────────────────────────────────────────────────
export const SkeletonPlaceholderStory = {
  name: 'Skeleton — placeholder (image/card)',
  parameters: {
    docs: {
      description: {
        story:
          'SkeletonPlaceholder is a grey rectangle that represents an image, card, or any non-text block while it loads. Combine with SkeletonText for a realistic card skeleton.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', maxWidth: '600px' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ flex: 1, background: '#ffffff', padding: '16px', border: '1px solid #e0e0e0' }}>
          <SkeletonPlaceholder style={{ width: '100%', height: '120px', marginBottom: '12px' }} />
          <SkeletonText heading width="60%" style={{ marginBottom: '6px' }} />
          <SkeletonText paragraph lineCount={2} />
        </div>
      ))}
    </div>
  ),
};

// ─── DataTable Skeleton ───────────────────────────────────────────────────────
export const DataTableSkeletonStory = {
  name: 'Skeleton — DataTable',
  parameters: {
    docs: {
      description: {
        story:
          'DataTableSkeleton is the correct skeleton to show while table data is loading — for example, while an agent is fetching data to populate the table. Always match the column count to the real table.',
      },
    },
  },
  render: () => (
    <DataTableSkeleton
      columnCount={5}
      rowCount={6}
      headers={['Name', 'Role', 'Email', 'Status', 'Joined']}
      showHeader
      showToolbar
    />
  ),
};
