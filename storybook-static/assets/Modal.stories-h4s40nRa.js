import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as i}from"./index-pP6CS22B.js";import"./index-CHDYt3vu.js";import{B as l}from"./Button-jHoG2r1m.js";import{M as d}from"./Modal-BYxjzMzn.js";import{I as C}from"./Notification-CfBM_EEg.js";import{T as c}from"./TextInput-D2jz3Rnv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./Text-Bz0BEAZn.js";import"./wrapFocus-CCxUIF9V.js";import"./index-BAFCNEcv.js";import"./bucket-19-3H2KHUhu.js";import"./events-CA4jvATf.js";import"./bucket-3-Dkle887D.js";import"./requiredIfGivenPropIsTruthy-BzEHF6R8.js";import"./bucket-20-CWYgd7H-.js";import"./FormContext-BDGx7mKn.js";const J={title:"Carbon / Modal",tags:["autodocs"],parameters:{docs:{description:{component:"Modals focus attention on a single task or message. Use them sparingly — only for critical actions that require the user's full attention. Carbon has three modal variants: default (confirmations and forms), danger (destructive actions), and passive (read-only content)."}}}},o={name:"Default (confirmation)",parameters:{docs:{description:{story:"Default modal with primary and secondary actions. Use for confirmations that are reversible."}}},render:()=>{const[a,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(d,{open:a,onRequestClose:()=>t(!1),onRequestSubmit:()=>t(!1),modalHeading:"Publish changes",modalLabel:"Content management",primaryButtonText:"Publish",secondaryButtonText:"Cancel",children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"You are about to publish 3 changes to the live environment. This will be visible to all users immediately."}),e.jsx(C,{kind:"info",title:"Heads up:",subtitle:"Publishing cannot be undone without creating a rollback.",lowContrast:!0})]})]})}},n={name:"Danger (destructive action)",parameters:{docs:{description:{story:"Danger modals use a red primary button to signal irreversible, destructive actions. Always explain clearly what will be deleted and whether it can be recovered."}}},render:()=>{const[a,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{kind:"danger",onClick:()=>t(!0),children:"Delete account"}),e.jsx(d,{open:a,onRequestClose:()=>t(!1),onRequestSubmit:()=>t(!1),danger:!0,modalHeading:"Delete this account?",modalLabel:"Danger zone",primaryButtonText:"Delete permanently",secondaryButtonText:"Cancel",children:e.jsxs("p",{children:["This will permanently delete ",e.jsx("strong",{children:"aria@acme.com"})," and all associated data. This action cannot be undone."]})})]})}},s={name:"Modal with form",parameters:{docs:{description:{story:"Modals can contain short forms — typically 2–3 fields. For longer forms, use a full page instead. Fields inside a modal follow the same Carbon TextInput rules."}}},render:()=>{const[a,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Invite user"}),e.jsx(d,{open:a,onRequestClose:()=>t(!1),onRequestSubmit:()=>t(!1),modalHeading:"Invite a team member",modalLabel:"Team management",primaryButtonText:"Send invite",secondaryButtonText:"Cancel",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(c,{id:"invite-name",labelText:"Full name",placeholder:"e.g. Aria Johnson"}),e.jsx(c,{id:"invite-email",labelText:"Email address",placeholder:"aria@company.com",helperText:"An invite will be sent to this address"})]})})]})}},r={name:"Passive (read-only)",parameters:{docs:{description:{story:"Passive modals have no primary action — only a close button. Use for displaying detailed information or help content without asking the user to act."}}},render:()=>{const[a,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{kind:"ghost",children:"View details"}),e.jsx(d,{open:a,onRequestClose:()=>t(!1),passiveModal:!0,modalHeading:"About this workspace",children:e.jsx("p",{children:"Created on 12 January 2024. Workspace ID: ws_8f3k92j. Region: EU West. All data is stored in compliance with GDPR."})})]})}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default (confirmation)',
  parameters: {
    docs: {
      description: {
        story: 'Default modal with primary and secondary actions. Use for confirmations that are reversible.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} modalHeading="Publish changes" modalLabel="Content management" primaryButtonText="Publish" secondaryButtonText="Cancel">
          <p style={{
          marginBottom: '1rem'
        }}>
            You are about to publish 3 changes to the live environment. This will be visible to all users immediately.
          </p>
          <InlineNotification kind="info" title="Heads up:" subtitle="Publishing cannot be undone without creating a rollback." lowContrast />
        </Modal>
      </>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Danger (destructive action)',
  parameters: {
    docs: {
      description: {
        story: 'Danger modals use a red primary button to signal irreversible, destructive actions. Always explain clearly what will be deleted and whether it can be recovered.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button kind="danger" onClick={() => setOpen(true)}>Delete account</Button>
        <Modal open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} danger modalHeading="Delete this account?" modalLabel="Danger zone" primaryButtonText="Delete permanently" secondaryButtonText="Cancel">
          <p>
            This will permanently delete <strong>aria@acme.com</strong> and all associated data. This action cannot be undone.
          </p>
        </Modal>
      </>;
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Modal with form',
  parameters: {
    docs: {
      description: {
        story: 'Modals can contain short forms — typically 2–3 fields. For longer forms, use a full page instead. Fields inside a modal follow the same Carbon TextInput rules.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Invite user</Button>
        <Modal open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} modalHeading="Invite a team member" modalLabel="Team management" primaryButtonText="Send invite" secondaryButtonText="Cancel">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
            <TextInput id="invite-name" labelText="Full name" placeholder="e.g. Aria Johnson" />
            <TextInput id="invite-email" labelText="Email address" placeholder="aria@company.com" helperText="An invite will be sent to this address" />
          </div>
        </Modal>
      </>;
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,w,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Passive (read-only)',
  parameters: {
    docs: {
      description: {
        story: 'Passive modals have no primary action — only a close button. Use for displaying detailed information or help content without asking the user to act.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button kind="ghost">View details</Button>
        <Modal open={open} onRequestClose={() => setOpen(false)} passiveModal modalHeading="About this workspace">
          <p>Created on 12 January 2024. Workspace ID: ws_8f3k92j. Region: EU West. All data is stored in compliance with GDPR.</p>
        </Modal>
      </>;
  }
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const W=["DefaultModal","DangerModal","FormModal","PassiveModal"];export{n as DangerModal,o as DefaultModal,s as FormModal,r as PassiveModal,W as __namedExportsOrder,J as default};
