import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Button,
  Tag,
} from '@carbon/react';
import { Download, Add } from '@carbon/icons-react';

export default {
  title: 'Carbon / DataTable',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DataTable is Carbon\'s primary component for displaying structured data. It composes from sub-components: TableContainer, TableToolbar, Table, TableHead, TableBody. Always use Tag for status values — never plain text or custom coloured cells.',
      },
    },
    layout: 'padded',
  },
};

// ─── Shared data ───────────────────────────────────────────────────────────────
const headers = [
  { key: 'name', header: 'User' },
  { key: 'role', header: 'Role' },
  { key: 'email', header: 'Email' },
  { key: 'status', header: 'Status' },
  { key: 'joined', header: 'Joined' },
];

const rows = [
  { id: '1', name: 'Aria Johnson', role: 'Admin', email: 'aria@acme.com', status: 'Active', joined: '12 Jan 2024' },
  { id: '2', name: 'Ben Carter', role: 'Editor', email: 'ben@acme.com', status: 'Invited', joined: '03 Mar 2024' },
  { id: '3', name: 'Carla Kim', role: 'Viewer', email: 'carla@acme.com', status: 'Active', joined: '19 Apr 2024' },
  { id: '4', name: 'David Osei', role: 'Editor', email: 'david@acme.com', status: 'Suspended', joined: '07 Feb 2024' },
  { id: '5', name: 'Elena Rossi', role: 'Admin', email: 'elena@acme.com', status: 'Active', joined: '22 May 2024' },
];

const statusKind = {
  Active: 'green',
  Invited: 'blue',
  Suspended: 'red',
};

// ─── Basic Table ───────────────────────────────────────────────────────────────
export const BasicTable = {
  name: 'Basic table',
  parameters: {
    docs: {
      description: {
        story:
          'The simplest DataTable — no toolbar, no selection. Notice status values use Tag components: green = Active, blue = Invited, red = Suspended.',
      },
    },
  },
  render: () => (
    <DataTable rows={rows} headers={headers}>
      {({ rows: tableRows, headers: tableHeaders, getTableProps, getHeaderProps, getRowProps }) => (
        <TableContainer title="Team members" description="All users in your workspace">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.info.header === 'status' ? (
                        <Tag type={statusKind[cell.value] || 'gray'} size="sm">
                          {cell.value}
                        </Tag>
                      ) : (
                        cell.value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  ),
};

// ─── With Toolbar ─────────────────────────────────────────────────────────────
export const WithToolbar = {
  name: 'With toolbar',
  parameters: {
    docs: {
      description: {
        story:
          'Add TableToolbar with search and action buttons above the table. Search filters inline. This is the most common DataTable pattern in enterprise dashboards.',
      },
    },
  },
  render: () => (
    <DataTable rows={rows} headers={headers}>
      {({ rows: tableRows, headers: tableHeaders, getTableProps, getHeaderProps, getRowProps, onInputChange }) => (
        <TableContainer title="Team members" description="Manage workspace access">
          <TableToolbar>
            <TableToolbarContent>
              <TableToolbarSearch onChange={onInputChange} placeholder="Search users…" />
              <Button renderIcon={Download} kind="ghost" iconDescription="Download" hasIconOnly />
              <Button renderIcon={Add} kind="primary">Add user</Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.info.header === 'status' ? (
                        <Tag type={statusKind[cell.value] || 'gray'} size="sm">
                          {cell.value}
                        </Tag>
                      ) : (
                        cell.value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  ),
};
