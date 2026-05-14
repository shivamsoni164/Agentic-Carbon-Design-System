import{j as e}from"./jsx-runtime-Z5uAzocK.js";import"./index-CHDYt3vu.js";import{B as r,D as w}from"./Button-jHoG2r1m.js";import{A as z}from"./bucket-0-ZZNfNWGE.js";import{T as S}from"./bucket-19-3H2KHUhu.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const E={title:"Carbon / Button",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Buttons are used to trigger actions. Carbon has five button variants and three sizes. Always use Primary for the single most important action on a page. Never use more than one Primary button per context."}}},argTypes:{kind:{control:"select",options:["primary","secondary","tertiary","danger","ghost"],description:"Button variant"},size:{control:"select",options:["sm","md","lg","xl","2xl"],description:"Button size"},disabled:{control:"boolean"},children:{control:"text"}}},n={args:{kind:"primary",size:"md",disabled:!1,children:"Button label"}},s={name:"All variants",parameters:{docs:{description:{story:"Primary = main action. Secondary = alternative. Tertiary = low emphasis. Danger = destructive. Ghost = minimal footprint."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{kind:"primary",children:"Primary"}),e.jsx(r,{kind:"secondary",children:"Secondary"}),e.jsx(r,{kind:"tertiary",children:"Tertiary"}),e.jsx(r,{kind:"danger",children:"Danger"}),e.jsx(r,{kind:"ghost",children:"Ghost"})]})},a={parameters:{docs:{description:{story:"sm = 32px, md = 40px (default), lg = 48px, xl = 64px, 2xl = 80px."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{size:"xl",children:"Extra Large"}),e.jsx(r,{size:"2xl",children:"2XL"})]})},t={name:"With icon",parameters:{docs:{description:{story:"Use renderIcon to append a Carbon icon. Always use icons from @carbon/icons-react to stay on-system."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{renderIcon:z,kind:"primary",children:"Add item"}),e.jsx(r,{renderIcon:w,kind:"secondary",children:"Download"}),e.jsx(r,{renderIcon:S,kind:"danger",children:"Delete"})]})},o={name:"Icon only",parameters:{docs:{description:{story:"Icon-only buttons must include iconDescription for accessibility. Used in toolbars and tight spaces."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(r,{hasIconOnly:!0,renderIcon:z,iconDescription:"Add item",kind:"primary"}),e.jsx(r,{hasIconOnly:!0,renderIcon:w,iconDescription:"Download",kind:"secondary"}),e.jsx(r,{hasIconOnly:!0,renderIcon:S,iconDescription:"Delete",kind:"danger"})]})},i={parameters:{docs:{description:{story:"Disabled buttons are unresponsive and visually muted. Use sparingly — prefer hiding actions over disabling them where possible."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{kind:"primary",disabled:!0,children:"Primary disabled"}),e.jsx(r,{kind:"secondary",disabled:!0,children:"Secondary disabled"}),e.jsx(r,{kind:"danger",disabled:!0,children:"Danger disabled"})]})};var d,c,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    disabled: false,
    children: 'Button label'
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'All variants',
  parameters: {
    docs: {
      description: {
        story: 'Primary = main action. Secondary = alternative. Tertiary = low emphasis. Danger = destructive. Ghost = minimal footprint.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
      <Button kind="danger">Danger</Button>
      <Button kind="ghost">Ghost</Button>
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,x,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'sm = 32px, md = 40px (default), lg = 48px, xl = 64px, 2xl = 80px.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2XL</Button>
    </div>
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,B,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With icon',
  parameters: {
    docs: {
      description: {
        story: 'Use renderIcon to append a Carbon icon. Always use icons from @carbon/icons-react to stay on-system.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button renderIcon={Add} kind="primary">Add item</Button>
      <Button renderIcon={Download} kind="secondary">Download</Button>
      <Button renderIcon={TrashCan} kind="danger">Delete</Button>
    </div>
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,I,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Icon only',
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must include iconDescription for accessibility. Used in toolbars and tight spaces.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Button hasIconOnly renderIcon={Add} iconDescription="Add item" kind="primary" />
      <Button hasIconOnly renderIcon={Download} iconDescription="Download" kind="secondary" />
      <Button hasIconOnly renderIcon={TrashCan} iconDescription="Delete" kind="danger" />
    </div>
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var v,D,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons are unresponsive and visually muted. Use sparingly — prefer hiding actions over disabling them where possible.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button kind="primary" disabled>Primary disabled</Button>
      <Button kind="secondary" disabled>Secondary disabled</Button>
      <Button kind="danger" disabled>Danger disabled</Button>
    </div>
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const G=["Playground","AllVariants","Sizes","WithIcon","IconOnly","Disabled"];export{s as AllVariants,i as Disabled,o as IconOnly,n as Playground,a as Sizes,t as WithIcon,G as __namedExportsOrder,E as default};
