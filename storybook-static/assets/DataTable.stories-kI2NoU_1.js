import{j as e}from"./jsx-runtime-Z5uAzocK.js";import"./index-CHDYt3vu.js";import{B as m,D as B}from"./Button-jHoG2r1m.js";import{D as g,T as j,a as v,b as x,c as l,d as k,e as C,f as D,g as I,h as S,i as P}from"./DataTable-LWD4888a.js";import{T as A}from"./Tag-BtM1FssI.js";import{A as E}from"./bucket-0-ZZNfNWGE.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./events-CA4jvATf.js";import"./index-BAFCNEcv.js";import"./bucket-19-3H2KHUhu.js";import"./wrapFocus-CCxUIF9V.js";import"./Text-Bz0BEAZn.js";import"./requiredIfGivenPropIsTruthy-BzEHF6R8.js";import"./bucket-3-Dkle887D.js";import"./bucket-1-DR6THvDi.js";import"./FormContext-BDGx7mKn.js";import"./bucket-20-CWYgd7H-.js";const ee={title:"Carbon / DataTable",tags:["autodocs"],parameters:{docs:{description:{component:"DataTable is Carbon's primary component for displaying structured data. It composes from sub-components: TableContainer, TableToolbar, Table, TableHead, TableBody. Always use Tag for status values — never plain text or custom coloured cells."}},layout:"padded"}},R=[{key:"name",header:"User"},{key:"role",header:"Role"},{key:"email",header:"Email"},{key:"status",header:"Status"},{key:"joined",header:"Joined"}],H=[{id:"1",name:"Aria Johnson",role:"Admin",email:"aria@acme.com",status:"Active",joined:"12 Jan 2024"},{id:"2",name:"Ben Carter",role:"Editor",email:"ben@acme.com",status:"Invited",joined:"03 Mar 2024"},{id:"3",name:"Carla Kim",role:"Viewer",email:"carla@acme.com",status:"Active",joined:"19 Apr 2024"},{id:"4",name:"David Osei",role:"Editor",email:"david@acme.com",status:"Suspended",joined:"07 Feb 2024"},{id:"5",name:"Elena Rossi",role:"Admin",email:"elena@acme.com",status:"Active",joined:"22 May 2024"}],f={Active:"green",Invited:"blue",Suspended:"red"},s={name:"Basic table",parameters:{docs:{description:{story:"The simplest DataTable — no toolbar, no selection. Notice status values use Tag components: green = Active, blue = Invited, red = Suspended."}}},render:()=>e.jsx(g,{rows:H,headers:R,children:({rows:n,headers:i,getTableProps:d,getHeaderProps:c,getRowProps:b})=>e.jsx(j,{title:"Team members",description:"All users in your workspace",children:e.jsxs(v,{...d(),children:[e.jsx(x,{children:e.jsx(l,{children:i.map(r=>e.jsx(k,{...c({header:r}),children:r.header},r.key))})}),e.jsx(C,{children:n.map(r=>e.jsx(l,{...b({row:r}),children:r.cells.map(a=>e.jsx(D,{children:a.info.header==="status"?e.jsx(A,{type:f[a.value]||"gray",size:"sm",children:a.value}):a.value},a.id))},r.id))})]})})})},t={name:"With toolbar",parameters:{docs:{description:{story:"Add TableToolbar with search and action buttons above the table. Search filters inline. This is the most common DataTable pattern in enterprise dashboards."}}},render:()=>e.jsx(g,{rows:H,headers:R,children:({rows:n,headers:i,getTableProps:d,getHeaderProps:c,getRowProps:b,onInputChange:r})=>e.jsxs(j,{title:"Team members",description:"Manage workspace access",children:[e.jsx(I,{children:e.jsxs(S,{children:[e.jsx(P,{onChange:r,placeholder:"Search users…"}),e.jsx(m,{renderIcon:B,kind:"ghost",iconDescription:"Download",hasIconOnly:!0}),e.jsx(m,{renderIcon:E,kind:"primary",children:"Add user"})]})}),e.jsxs(v,{...d(),children:[e.jsx(x,{children:e.jsx(l,{children:i.map(a=>e.jsx(k,{...c({header:a}),children:a.header},a.key))})}),e.jsx(C,{children:n.map(a=>e.jsx(l,{...b({row:a}),children:a.cells.map(o=>e.jsx(D,{children:o.info.header==="status"?e.jsx(A,{type:f[o.value]||"gray",size:"sm",children:o.value}):o.value},o.id))},a.id))})]})]})})};var p,T,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Basic table',
  parameters: {
    docs: {
      description: {
        story: 'The simplest DataTable — no toolbar, no selection. Notice status values use Tag components: green = Active, blue = Invited, red = Suspended.'
      }
    }
  },
  render: () => <DataTable rows={rows} headers={headers}>
      {({
      rows: tableRows,
      headers: tableHeaders,
      getTableProps,
      getHeaderProps,
      getRowProps
    }) => <TableContainer title="Team members" description="All users in your workspace">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {tableHeaders.map(header => <TableHeader key={header.key} {...getHeaderProps({
              header
            })}>
                    {header.header}
                  </TableHeader>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map(row => <TableRow key={row.id} {...getRowProps({
            row
          })}>
                  {row.cells.map(cell => <TableCell key={cell.id}>
                      {cell.info.header === 'status' ? <Tag type={statusKind[cell.value] || 'gray'} size="sm">
                          {cell.value}
                        </Tag> : cell.value}
                    </TableCell>)}
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>}
    </DataTable>
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,y,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With toolbar',
  parameters: {
    docs: {
      description: {
        story: 'Add TableToolbar with search and action buttons above the table. Search filters inline. This is the most common DataTable pattern in enterprise dashboards.'
      }
    }
  },
  render: () => <DataTable rows={rows} headers={headers}>
      {({
      rows: tableRows,
      headers: tableHeaders,
      getTableProps,
      getHeaderProps,
      getRowProps,
      onInputChange
    }) => <TableContainer title="Team members" description="Manage workspace access">
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
                {tableHeaders.map(header => <TableHeader key={header.key} {...getHeaderProps({
              header
            })}>
                    {header.header}
                  </TableHeader>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map(row => <TableRow key={row.id} {...getRowProps({
            row
          })}>
                  {row.cells.map(cell => <TableCell key={cell.id}>
                      {cell.info.header === 'status' ? <Tag type={statusKind[cell.value] || 'gray'} size="sm">
                          {cell.value}
                        </Tag> : cell.value}
                    </TableCell>)}
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>}
    </DataTable>
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const ae=["BasicTable","WithToolbar"];export{s as BasicTable,t as WithToolbar,ae as __namedExportsOrder,ee as default};
