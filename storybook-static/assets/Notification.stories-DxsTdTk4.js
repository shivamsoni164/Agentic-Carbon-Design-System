import{j as t}from"./jsx-runtime-Z5uAzocK.js";import"./index-CHDYt3vu.js";import{I as e,A as s,T as a}from"./Notification-CfBM_EEg.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./Text-Bz0BEAZn.js";import"./wrapFocus-CCxUIF9V.js";import"./Button-jHoG2r1m.js";import"./bucket-3-Dkle887D.js";import"./bucket-20-CWYgd7H-.js";const N={title:"Carbon / Notification",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Notifications communicate system status. Carbon has three types: Inline (within page content), Toast (temporary overlay), and Actionable (includes a button). Use the right kind — error, warning, success, or info."}}}},i={name:"Inline — all kinds",parameters:{docs:{description:{story:"Inline notifications sit within the page flow. Use for persistent messages that relate to specific content. Error and warning require immediate attention; success and info are informational."}}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[t.jsx(e,{kind:"error",title:"Error:",subtitle:"Your session has expired. Please sign in again.",lowContrast:!0}),t.jsx(e,{kind:"warning",title:"Warning:",subtitle:"You have unsaved changes. Leave anyway?",lowContrast:!0}),t.jsx(e,{kind:"success",title:"Success:",subtitle:"Your profile has been updated.",lowContrast:!0}),t.jsx(e,{kind:"info",title:"Info:",subtitle:"Scheduled maintenance on Sunday 2–4 AM UTC.",lowContrast:!0})]})},n={name:"Toast notifications",parameters:{docs:{description:{story:"Toast notifications appear in the top-right corner and auto-dismiss. They are non-blocking — use for transient confirmations and low-priority alerts."}}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"360px"},children:[t.jsx(a,{kind:"success",title:"File uploaded",subtitle:"report-q4.pdf was uploaded successfully.",caption:"Just now"}),t.jsx(a,{kind:"error",title:"Upload failed",subtitle:"File exceeds the 10 MB limit.",caption:"Just now"}),t.jsx(a,{kind:"info",title:"Update available",subtitle:"Version 3.2.1 is ready to install.",caption:"2 mins ago"})]})},o={name:"Actionable notification",parameters:{docs:{description:{story:"Actionable notifications include a button for a direct response. Use when the user needs to take an action related to the notification — e.g., undo, retry, or review."}}},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[t.jsx(s,{kind:"warning",title:"Unsaved changes",subtitle:"You have 3 unsaved changes.",actionButtonLabel:"Save now",lowContrast:!0,onActionButtonClick:()=>alert("Saving...")}),t.jsx(s,{kind:"error",title:"Connection lost",subtitle:"Could not reach the server.",actionButtonLabel:"Retry",lowContrast:!0,onActionButtonClick:()=>alert("Retrying...")})]})};var r,l,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Inline — all kinds',
  parameters: {
    docs: {
      description: {
        story: 'Inline notifications sit within the page flow. Use for persistent messages that relate to specific content. Error and warning require immediate attention; success and info are informational.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <InlineNotification kind="error" title="Error:" subtitle="Your session has expired. Please sign in again." lowContrast />
      <InlineNotification kind="warning" title="Warning:" subtitle="You have unsaved changes. Leave anyway?" lowContrast />
      <InlineNotification kind="success" title="Success:" subtitle="Your profile has been updated." lowContrast />
      <InlineNotification kind="info" title="Info:" subtitle="Scheduled maintenance on Sunday 2–4 AM UTC." lowContrast />
    </div>
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Toast notifications',
  parameters: {
    docs: {
      description: {
        story: 'Toast notifications appear in the top-right corner and auto-dismiss. They are non-blocking — use for transient confirmations and low-priority alerts.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '360px'
  }}>
      <ToastNotification kind="success" title="File uploaded" subtitle="report-q4.pdf was uploaded successfully." caption="Just now" />
      <ToastNotification kind="error" title="Upload failed" subtitle="File exceeds the 10 MB limit." caption="Just now" />
      <ToastNotification kind="info" title="Update available" subtitle="Version 3.2.1 is ready to install." caption="2 mins ago" />
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Actionable notification',
  parameters: {
    docs: {
      description: {
        story: 'Actionable notifications include a button for a direct response. Use when the user needs to take an action related to the notification — e.g., undo, retry, or review.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <ActionableNotification kind="warning" title="Unsaved changes" subtitle="You have 3 unsaved changes." actionButtonLabel="Save now" lowContrast onActionButtonClick={() => alert('Saving...')} />
      <ActionableNotification kind="error" title="Connection lost" subtitle="Could not reach the server." actionButtonLabel="Retry" lowContrast onActionButtonClick={() => alert('Retrying...')} />
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const j=["InlineAllKinds","Toast","Actionable"];export{o as Actionable,i as InlineAllKinds,n as Toast,j as __namedExportsOrder,N as default};
