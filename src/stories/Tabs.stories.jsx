import { Tabs, TabList, Tab, TabPanels, TabPanel, Tag, DataTable,
  Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableContainer } from '@carbon/react';

export default {
  title: 'Carbon / Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabs organise related content into sections within the same page. Carbon has two styles: line tabs (default, lightweight) and contained tabs (filled, higher emphasis). Use tabs when the user needs to switch between views without leaving the page. Do not use tabs for sequential steps — use a progress indicator instead.',
      },
    },
  },
};

// ─── Line Tabs (default) ──────────────────────────────────────────────────────
export const LineTabs = {
  name: 'Line tabs (default)',
  parameters: {
    docs: {
      description: {
        story:
          'Line tabs are the default Carbon tab style. Use them within page content where tabs sit alongside other elements. The active tab has a blue underline indicator.',
      },
    },
  },
  render: () => (
    <Tabs>
      <TabList aria-label="Content sections">
        <Tab>Overview</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
        <Tab disabled>Billing</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px', color: '#525252', marginBottom: '8px' }}>Overview panel</p>
            <p style={{ fontSize: '14px' }}>This is the Overview tab content. Summary information and key metrics would live here.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px', color: '#525252', marginBottom: '8px' }}>Activity panel</p>
            <p style={{ fontSize: '14px' }}>Recent activity, events, and audit log entries would appear here.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px', color: '#525252', marginBottom: '8px' }}>Settings panel</p>
            <p style={{ fontSize: '14px' }}>Configuration options and preferences would live here.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>Billing content</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// ─── Contained Tabs ───────────────────────────────────────────────────────────
export const ContainedTabs = {
  name: 'Contained tabs',
  parameters: {
    docs: {
      description: {
        story:
          'Contained tabs have a filled background on the active tab. Use them at the top of a full page section where tabs are the primary navigation mechanism — for example, a product detail page or a settings area.',
      },
    },
  },
  render: () => (
    <Tabs>
      <TabList aria-label="Product sections" contained>
        <Tab>Details</Tab>
        <Tab>Reviews</Tab>
        <Tab>Related</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px' }}>Product details and specifications appear here.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px' }}>Customer reviews and ratings appear here.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div style={{ padding: '24px 0' }}>
            <p style={{ fontSize: '14px' }}>Related products and suggestions appear here.</p>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ),
};

// ─── Tabs with real content ────────────────────────────────────────────────────
export const TabsWithTable = {
  name: 'Tabs with real content',
  parameters: {
    docs: {
      description: {
        story:
          'A realistic pattern: tabs that switch between different data views of the same resource. Each tab panel can contain any Carbon component — here a DataTable and a summary view.',
      },
    },
  },
  render: () => {
    const headers = [
      { key: 'name', header: 'Name' },
      { key: 'status', header: 'Status' },
      { key: 'updated', header: 'Last updated' },
    ];
    const rows = [
      { id: '1', name: 'API Gateway', status: 'Active', updated: '2 mins ago' },
      { id: '2', name: 'Auth Service', status: 'Active', updated: '1 hr ago' },
      { id: '3', name: 'Worker Queue', status: 'Degraded', updated: '5 mins ago' },
    ];
    const statusKind = { Active: 'green', Degraded: 'red', Stopped: 'gray' };

    return (
      <Tabs>
        <TabList aria-label="Service views" contained>
          <Tab>Services</Tab>
          <Tab>Summary</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div style={{ paddingTop: '16px' }}>
              <DataTable rows={rows} headers={headers}>
                {({ rows: tableRows, headers: tableHeaders, getTableProps, getHeaderProps, getRowProps }) => (
                  <TableContainer>
                    <Table {...getTableProps()}>
                      <TableHead>
                        <TableRow>
                          {tableHeaders.map(h => (
                            <TableHeader key={h.key} {...getHeaderProps({ header: h })}>{h.header}</TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {tableRows.map(row => (
                          <TableRow key={row.id} {...getRowProps({ row })}>
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>
                                {cell.info.header === 'status'
                                  ? <Tag type={statusKind[cell.value] || 'gray'} size="sm">{cell.value}</Tag>
                                  : cell.value}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </div>
          </TabPanel>
          <TabPanel>
            <div style={{ padding: '24px 0', display: 'flex', gap: '16px' }}>
              {[
                { label: 'Total services', value: '3', type: 'gray' },
                { label: 'Active', value: '2', type: 'green' },
                { label: 'Degraded', value: '1', type: 'red' },
              ].map(({ label, value, type }) => (
                <div key={label} style={{ background: '#f4f4f4', padding: '16px 24px', flex: 1 }}>
                  <p style={{ fontSize: '12px', color: '#525252', marginBottom: '8px' }}>{label}</p>
                  <p style={{ fontSize: '32px', fontWeight: 300 }}>{value}</p>
                </div>
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  },
};
