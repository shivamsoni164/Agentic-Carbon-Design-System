import{j as e}from"./jsx-runtime-Z5uAzocK.js";import"./index-CHDYt3vu.js";import{P as b}from"./PasswordInput-CJSVd10H.js";import{T as a}from"./TextInput-D2jz3Rnv.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./FormContext-BDGx7mKn.js";import"./Text-Bz0BEAZn.js";import"./bucket-20-CWYgd7H-.js";import"./index-BAFCNEcv.js";import"./bucket-19-3H2KHUhu.js";const A={title:"Carbon / TextInput",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Text inputs let users enter free-form text. Always pair with a visible label above. Use helper text below for guidance and invalid text for errors."}},layout:"padded"}},t={args:{id:"text-input-1",labelText:"Email address",placeholder:"Enter your email",helperText:"We'll use this to contact you"}},l={name:"All states",parameters:{docs:{description:{story:"Default, disabled, read-only, and invalid. Agents need to know all four states exist to handle every UI scenario correctly."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"400px"},children:[e.jsx(a,{id:"state-default",labelText:"Default",placeholder:"Enter value",helperText:"Helper text for guidance"}),e.jsx(a,{id:"state-disabled",labelText:"Disabled",placeholder:"Not editable",disabled:!0,helperText:"This field is currently unavailable"}),e.jsx(a,{id:"state-readonly",labelText:"Read only",value:"Read only value",readOnly:!0,helperText:"This value cannot be changed"}),e.jsx(a,{id:"state-invalid",labelText:"Invalid",value:"bad@",invalid:!0,invalidText:"Enter a valid email address"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"400px"},children:[e.jsx(a,{id:"size-sm",labelText:"Small (sm)",placeholder:"Small input",size:"sm"}),e.jsx(a,{id:"size-md",labelText:"Medium (md) — default",placeholder:"Medium input",size:"md"}),e.jsx(a,{id:"size-lg",labelText:"Large (lg)",placeholder:"Large input",size:"lg"})]})},r={parameters:{docs:{description:{story:"PasswordInput includes a show/hide toggle. Use for any sensitive text field — never use a plain TextInput for passwords."}}},render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(b,{id:"password-1",labelText:"Password",placeholder:"Enter password",helperText:"Must be at least 8 characters"})})};var d,i,o;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'text-input-1',
    labelText: 'Email address',
    placeholder: 'Enter your email',
    helperText: "We'll use this to contact you"
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,p,u;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    docs: {
      description: {
        story: 'Default, disabled, read-only, and invalid. Agents need to know all four states exist to handle every UI scenario correctly.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '400px'
  }}>
      <TextInput id="state-default" labelText="Default" placeholder="Enter value" helperText="Helper text for guidance" />
      <TextInput id="state-disabled" labelText="Disabled" placeholder="Not editable" disabled helperText="This field is currently unavailable" />
      <TextInput id="state-readonly" labelText="Read only" value="Read only value" readOnly helperText="This value cannot be changed" />
      <TextInput id="state-invalid" labelText="Invalid" value="bad@" invalid invalidText="Enter a valid email address" />
    </div>
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,x,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '400px'
  }}>
      <TextInput id="size-sm" labelText="Small (sm)" placeholder="Small input" size="sm" />
      <TextInput id="size-md" labelText="Medium (md) — default" placeholder="Medium input" size="md" />
      <TextInput id="size-lg" labelText="Large (lg)" placeholder="Large input" size="lg" />
    </div>
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var h,T,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'PasswordInput includes a show/hide toggle. Use for any sensitive text field — never use a plain TextInput for passwords.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <PasswordInput id="password-1" labelText="Password" placeholder="Enter password" helperText="Must be at least 8 characters" />
    </div>
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const M=["Default","AllStates","Sizes","Password"];export{l as AllStates,t as Default,r as Password,s as Sizes,M as __namedExportsOrder,A as default};
