import { useState } from 'react';
import {
  Button,
  Column,
  ComboBox,
  DataTable,
  Grid,
  Header,
  HeaderContainer,
  HeaderName,
  InlineNotification,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
  TextInput,
} from '@carbon/react';
import { TrashCan, Search } from '@carbon/icons-react';

// ─── Tokens ────────────────────────────────────────────────────────────────────
const t = {
  bg:           '#f4f4f4',
  layer01:      '#ffffff',
  layer02:      '#e8e8e8',
  borderSubtle: '#e0e0e0',
  textPrimary:  '#161616',
  textSecondary:'#525252',
  interactive:  '#0f62fe',
  sp03: '8px',
  sp04: '16px',
  sp05: '24px',
  sp06: '32px',
};

// ─── SideNav data ──────────────────────────────────────────────────────────────
const SIDENAV_ITEMS = [
  { label: 'Loan Listing' },
  { label: 'Tasks / Pipeline' },
  { label: 'Virtual Account' },
  { label: 'Reports' },
  {
    label: 'Fee Collection',
    expanded: true,
    children: [
      { label: 'Fees' },
      { label: 'Collections' },
      { label: 'Deposits', active: true },
    ],
  },
  { label: 'Master Data Approval' },
  { label: 'Bureau Report' },
  { label: 'Loan Approval Request' },
];

// ─── Table data ────────────────────────────────────────────────────────────────
const tableHeaders = [
  { key: 'loanAppNumber',   header: 'Loan App Number'   },
  { key: 'collectionId',    header: 'Collection ID'      },
  { key: 'chargeName',      header: 'Charge Name'        },
  { key: 'amountCollected', header: 'Amount Collected'   },
  { key: 'instrumentType',  header: 'Instrument Type'    },
  { key: 'feeDate',         header: 'Fee Date'           },
  { key: 'updatedOn',       header: 'Updated On'         },
  { key: 'status',          header: 'Status'             },
  { key: 'action',          header: 'Action'             },
];

const tableRows = [
  {
    id: '1',
    loanAppNumber:   'LA-2024-00123',
    collectionId:    'COL-4891',
    chargeName:      'Processing Fee',
    amountCollected: '₹12,500',
    instrumentType:  'NEFT',
    feeDate:         '10-May-2025',
    updatedOn:       '11-May-2025',
    status:          'Completed',
    action:          '',
  },
  {
    id: '2',
    loanAppNumber:   'LA-2024-00456',
    collectionId:    'COL-4892',
    chargeName:      'Insurance Premium',
    amountCollected: '₹8,750',
    instrumentType:  'UPI',
    feeDate:         '10-May-2025',
    updatedOn:       '11-May-2025',
    status:          'Pending',
    action:          '',
  },
  {
    id: '3',
    loanAppNumber:   'LA-2024-00789',
    collectionId:    'COL-4893',
    chargeName:      'Late Payment Fee',
    amountCollected: '₹2,200',
    instrumentType:  'Cash',
    feeDate:         '09-May-2025',
    updatedOn:       '10-May-2025',
    status:          'Completed',
    action:          '',
  },
  {
    id: '4',
    loanAppNumber:   'LA-2024-01012',
    collectionId:    'COL-4894',
    chargeName:      'Documentation Fee',
    amountCollected: '₹5,000',
    instrumentType:  'Card',
    feeDate:         '08-May-2025',
    updatedOn:       '09-May-2025',
    status:          'In Review',
    action:          '',
  },
  {
    id: '5',
    loanAppNumber:   'LA-2024-01345',
    collectionId:    'COL-4895',
    chargeName:      'Stamp Duty',
    amountCollected: '₹3,600',
    instrumentType:  'RTGS',
    feeDate:         '07-May-2025',
    updatedOn:       '08-May-2025',
    status:          'Pending',
    action:          '',
  },
];

const statusKind = {
  Completed: 'green',
  Pending:   'blue',
  'In Review': 'purple',
};

const bankAccounts = [
  { id: 'sbi-003425',   label: 'SBI — 003425'   },
  { id: 'hdfc-007891',  label: 'HDFC — 007891'  },
  { id: 'icici-004512', label: 'ICICI — 004512' },
  { id: 'axis-009234',  label: 'Axis — 009234'  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function LoanDataSideNav() {
  return (
    <SideNav aria-label="Loan Data navigation" isPersistent>
      {/* Section header */}
      <div
        style={{
          padding: '20px 16px 8px',
          borderBottom: `1px solid ${t.borderSubtle}`,
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: t.textPrimary,
            textTransform: 'uppercase',
            letterSpacing: '0.32px',
            marginBottom: '12px',
          }}
        >
          Loan Data
        </p>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              color: t.textSecondary,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <input
            placeholder="Search..."
            aria-label="Search navigation"
            style={{
              width: '100%',
              height: '32px',
              paddingLeft: '32px',
              paddingRight: '8px',
              border: `1px solid ${t.borderSubtle}`,
              backgroundColor: t.layer01,
              fontSize: '14px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              color: t.textPrimary,
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>

      <SideNavItems>
        {SIDENAV_ITEMS.map((item) =>
          item.children ? (
            <SideNavMenu key={item.label} title={item.label} defaultExpanded={item.expanded}>
              {item.children.map((child) => (
                <SideNavMenuItem key={child.label} href="#" isActive={child.active}>
                  {child.label}
                </SideNavMenuItem>
              ))}
            </SideNavMenu>
          ) : (
            <SideNavLink key={item.label} href="#">
              {item.label}
            </SideNavLink>
          )
        )}
      </SideNavItems>
    </SideNav>
  );
}

function MakeADepositPage() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <div
      style={{
        marginLeft: '256px',
        marginTop: '48px',
        minHeight: 'calc(100vh - 48px)',
        backgroundColor: t.bg,
      }}
    >
      {/* Page header */}
      <div
        style={{
          padding: `${t.sp06} ${t.sp06} ${t.sp05}`,
          borderBottom: `1px solid ${t.borderSubtle}`,
          backgroundColor: t.layer01,
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
          Make a Deposit
        </h1>
      </div>

      {/* Page body */}
      <div style={{ padding: t.sp06 }}>

        {/* Form row */}
        <div
          style={{
            backgroundColor: t.layer01,
            padding: t.sp05,
            marginBottom: t.sp05,
            borderBottom: `1px solid ${t.borderSubtle}`,
          }}
        >
          <Grid fullWidth narrow>
            <Column sm={4} md={4} lg={5}>
              <ComboBox
                id="sahayya-bank-account"
                titleText={
                  <span>
                    Sahayya Bank Account{' '}
                    <span style={{ color: '#da1e28' }}>*</span>
                  </span>
                }
                placeholder="Select account"
                items={bankAccounts}
                itemToString={(item) => (item ? item.label : '')}
                selectedItem={selectedAccount}
                onChange={({ selectedItem }) => setSelectedAccount(selectedItem)}
              />
            </Column>
            <Column sm={4} md={2} lg={5}>
              <TextInput
                id="account-branch"
                labelText="Account Branch"
                placeholder="e.g. Koramangala"
              />
            </Column>
            <Column sm={4} md={2} lg={6}>
              <TextInput
                id="bank-account-number"
                labelText="Bank Account Number"
                placeholder="e.g. 003425001234"
              />
            </Column>
          </Grid>
        </div>

        {/* Warning notification */}
        <div style={{ marginBottom: t.sp05 }}>
          <InlineNotification
            kind="warning"
            title="Sahayya Bank Account can't be changed"
            subtitle="until all entries are removed from the table."
            hideCloseButton
          />
        </div>

        {/* Collections toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: t.sp03,
            marginBottom: t.sp04,
          }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: t.textPrimary,
              fontFamily: 'IBM Plex Sans, sans-serif',
              margin: 0,
            }}
          >
            Number of Collections:{' '}
            <span style={{ fontWeight: 400 }}>{tableRows.length}</span>
          </p>

          <div style={{ display: 'flex', gap: t.sp03 }}>
            <Button kind="ghost" renderIcon={TrashCan}>
              Remove All Entries
            </Button>
            <Button kind="primary" renderIcon={Search}>
              Search Collections
            </Button>
          </div>
        </div>

        {/* DataTable */}
        <DataTable rows={tableRows} headers={tableHeaders}>
          {({
            rows,
            headers,
            getTableProps,
            getHeaderProps,
            getRowProps,
          }) => (
            <TableContainer>
              <Table {...getTableProps()} size="md">
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => {
                        if (cell.info.header === 'status') {
                          return (
                            <TableCell key={cell.id}>
                              <Tag type={statusKind[cell.value] || 'gray'} size="sm">
                                {cell.value}
                              </Tag>
                            </TableCell>
                          );
                        }
                        if (cell.info.header === 'action') {
                          return (
                            <TableCell key={cell.id}>
                              <Button
                                kind="ghost"
                                size="sm"
                                hasIconOnly
                                renderIcon={TrashCan}
                                iconDescription="Remove entry"
                                tooltipPosition="left"
                              />
                            </TableCell>
                          );
                        }
                        return <TableCell key={cell.id}>{cell.value}</TableCell>;
                      })}
                    </TableRow>
                  ))}

                  {/* Total summary row */}
                  <TableRow
                    style={{
                      backgroundColor: t.layer02,
                      borderTop: `2px solid ${t.borderSubtle}`,
                    }}
                  >
                    <TableCell
                      colSpan={3}
                      style={{
                        fontWeight: 600,
                        fontSize: '14px',
                        color: t.textPrimary,
                      }}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: 600,
                        fontSize: '14px',
                        color: t.textPrimary,
                      }}
                    >
                      ₹32,050
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    </div>
  );
}

// ─── Story export ──────────────────────────────────────────────────────────────
export default {
  title: 'Carbon / Make a Deposit',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-page "Make a Deposit" screen. Combines a persistent SideNav (Loan Data), a bank account form, an InlineNotification warning, and a DataTable of collections with a total summary row. Status values use Tag; the single primary action is "Search Collections".',
      },
    },
  },
};

export const MakeADeposit = {
  name: 'Make a Deposit',
  parameters: {
    docs: {
      description: {
        story:
          'Complete deposit entry screen: persistent side navigation, three-field bank account form, warning notification about account lock, collection count toolbar with Remove All and Search actions, and a DataTable with status tags and a trash-icon action per row, capped by a total amount summary row.',
      },
    },
  },
  render: () => (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: t.bg }}>
      <HeaderContainer
        render={() => (
          <>
            <Header aria-label="Sahayya — Loan Data">
              <SkipToContent />
              <HeaderName href="#" prefix="Sahayya">
                Loan Data
              </HeaderName>
            </Header>

            <LoanDataSideNav />
          </>
        )}
      />

      <MakeADepositPage />
    </div>
  ),
};
