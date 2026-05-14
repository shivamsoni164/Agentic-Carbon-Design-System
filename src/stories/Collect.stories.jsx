import { useEffect, useState } from 'react';
import {
  Button,
  Column,
  DataTable,
  DatePicker,
  DatePickerInput,
  Grid,
  Modal,
  OverflowMenu,
  OverflowMenuItem,
  Select,
  SelectItem,
  Stack,
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
import { Add, Close, TrashCan } from '@carbon/icons-react';

const tokens = {
  layer01: '#ffffff',
  borderSubtle: '#e0e0e0',
  textPrimary: '#161616',
  textSecondary: '#525252',
  spacing04: '16px',
  spacing05: '24px',
  spacing06: '32px',
};

const docHeaders = [
  { key: 'documentName', header: 'Document name' },
  { key: 'description', header: 'Description' },
  { key: 'fileName', header: 'File name' },
  { key: 'fileType', header: 'File type' },
  { key: 'uploaded', header: 'Uploaded' },
  { key: 'status', header: 'Status' },
  { key: 'action', header: 'Action' },
];

const defaultDocRows = [
  {
    id: '1',
    documentName: 'Deposit Slip',
    description: 'Lorem Ips',
    fileName: 'PIC_123',
    fileType: 'JP',
    uploaded: '23-May-20',
    status: 'Upload complete',
    action: '',
  },
];

const extraDocRow = {
  id: '2',
  documentName: 'Receipt',
  description: 'Payment receipt scan',
  fileName: 'RCPT_884',
  fileType: 'PN',
  uploaded: '24-May-20',
  status: 'Pending',
  action: '',
};

function DocumentNameCell({ name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing04 }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          flexShrink: 0,
          border: `1px solid ${tokens.borderSubtle}`,
          backgroundColor: tokens.layer01,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden
      >
        <Close size={16} style={{ color: tokens.textSecondary }} />
      </div>
      <span style={{ color: tokens.textPrimary }}>{name}</span>
    </div>
  );
}

function ActionCell() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing04 }}>
      <Button kind="ghost" size="sm">
        View
      </Button>
      <OverflowMenu aria-label="Document row actions" flipped size="sm">
        <OverflowMenuItem itemText="Download" />
        <OverflowMenuItem itemText="Remove" isDelete />
      </OverflowMenu>
    </div>
  );
}

function DocumentsTable({ rows }) {
  return (
    <DataTable rows={rows} headers={docHeaders}>
      {({ rows: tableRows, headers: tableHeaders, getTableProps, getHeaderProps, getRowProps }) => (
        <TableContainer>
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
                  {row.cells.map((cell) => {
                    if (cell.info.header === 'documentName') {
                      return (
                        <TableCell key={cell.id}>
                          <DocumentNameCell name={cell.value} />
                        </TableCell>
                      );
                    }
                    if (cell.info.header === 'status') {
                      const kind =
                        cell.value === 'Upload complete'
                          ? 'green'
                          : cell.value === 'Pending'
                            ? 'blue'
                            : 'gray';
                      return (
                        <TableCell key={cell.id}>
                          <Tag type={kind} size="sm">
                            {cell.value}
                          </Tag>
                        </TableCell>
                      );
                    }
                    if (cell.info.header === 'action') {
                      return (
                        <TableCell key={cell.id}>
                          <ActionCell />
                        </TableCell>
                      );
                    }
                    return <TableCell key={cell.id}>{cell.value}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
}

function CollectModalBody({ documentRows, onAddRow, onEraseAll }) {
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');

  return (
    <Stack gap={6}>
      <Select
        id="collect-instrument-type"
        labelText="Instrument type *"
        defaultValue="upi"
        helperText="Choose how the payment was received."
      >
        <SelectItem value="upi" text="UPI" />
        <SelectItem value="card" text="Card" />
        <SelectItem value="cash" text="Cash" />
        <SelectItem value="neft" text="NEFT / RTGS" />
      </Select>

      <Grid fullWidth narrow>
        <Column sm={4} md={4} lg={5}>
          <TextInput
            id="collect-amount"
            labelText="Amount (Rs) *"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Column>
        <Column sm={4} md={4} lg={5}>
          <DatePicker datePickerType="single" dateFormat="d/m/Y">
            <DatePickerInput
              id="collect-date"
              labelText="Date *"
              placeholder="dd/mm/yyyy"
              helperText="Use the calendar or type a date as shown."
            />
          </DatePicker>
        </Column>
        <Column sm={4} md={4} lg={6}>
          <TextInput
            id="collect-transaction-id"
            labelText="Transaction ID *"
            placeholder="Reference from the payer"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </Column>
      </Grid>

      <div
        style={{
          border: `1px solid ${tokens.borderSubtle}`,
          padding: tokens.spacing05,
        }}
      >
        <Stack gap={5}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: tokens.spacing04,
            }}
          >
            <div style={{ flex: '1 1 240px', minWidth: 0 }}>
              <Select
                id="collect-document-type"
                labelText="Document type *"
                defaultValue="proof"
                helperText="Proof attached to this collection."
              >
                <SelectItem value="proof" text="Payment collection proof" />
                <SelectItem value="invoice" text="Invoice" />
                <SelectItem value="other" text="Other" />
              </Select>
            </div>
            <Button
              kind="danger--ghost"
              renderIcon={TrashCan}
              iconDescription="Erase all entries"
              onClick={onEraseAll}
            >
              Erase all entries
            </Button>
          </div>

          <DocumentsTable rows={documentRows} />

          <Button kind="ghost" renderIcon={Add} onClick={onAddRow}>
            Add more
          </Button>
        </Stack>
      </div>
    </Stack>
  );
}

function CollectModal({
  open,
  onRequestClose,
  onRequestSubmit,
  documentRows,
  setDocumentRows,
}) {
  const handleErase = () => {
    setDocumentRows([]);
  };

  const handleAdd = () => {
    setDocumentRows((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        documentName: 'New document',
        description: '—',
        fileName: '—',
        fileType: '—',
        uploaded: '—',
        status: 'Pending',
        action: '',
      },
    ]);
  };

  return (
    <Modal
      open={open}
      onRequestClose={onRequestClose}
      onRequestSubmit={onRequestSubmit}
      modalHeading="Collect"
      size="lg"
      hasScrollingContent
      primaryButtonText="Collect"
      preventCloseOnClickOutside={false}
    >
      <CollectModalBody
        documentRows={documentRows}
        onAddRow={handleAdd}
        onEraseAll={handleErase}
      />
    </Modal>
  );
}

export default {
  title: 'Carbon / Collect',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Payment collection flow: instrument and transaction details, supporting documents in a DataTable with row actions, and a single primary Collect action. Matches enterprise finance patterns using Carbon Modal, Grid, Select, DatePicker, and tags for upload status.',
      },
    },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    startOpen: true,
  },
  argTypes: {
    startOpen: { control: 'boolean', name: 'Modal open' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle whether the Collect modal opens by default for layout review.',
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(args.startOpen);
    const [rows, setRows] = useState(defaultDocRows);

    useEffect(() => {
      setOpen(args.startOpen);
    }, [args.startOpen]);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Collect</Button>
        <CollectModal
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => setOpen(false)}
          documentRows={rows}
          setDocumentRows={setRows}
        />
      </>
    );
  },
};

export const AllStates = {
  name: 'All states',
  parameters: {
    docs: {
      description: {
        story:
          'Multiple document rows with mixed statuses: completed upload uses a green tag; an additional row stays pending in blue.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [rows, setRows] = useState([...defaultDocRows, extraDocRow]);

    return (
      <CollectModal
        open={open}
        onRequestClose={() => setOpen(false)}
        onRequestSubmit={() => setOpen(false)}
        documentRows={rows}
        setDocumentRows={setRows}
      />
    );
  },
};

export const CollectPayment = {
  name: 'Collect payment (usage)',
  parameters: {
    docs: {
      description: {
        story:
          'Typical flow: user opens Collect from a trigger, enters UPI details and proof documents, then confirms with Collect.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState(defaultDocRows);

    return (
      <div style={{ padding: tokens.spacing06 }}>
        <Button onClick={() => setOpen(true)}>Collect payment</Button>
        <CollectModal
          open={open}
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={() => setOpen(false)}
          documentRows={rows}
          setDocumentRows={setRows}
        />
      </div>
    );
  },
};
