import{j as e}from"./jsx-runtime-Z5uAzocK.js";import"./index-CHDYt3vu.js";import{T as r}from"./Tag-BtM1FssI.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./Text-Bz0BEAZn.js";import"./index-BAFCNEcv.js";import"./bucket-19-3H2KHUhu.js";import"./bucket-3-Dkle887D.js";const B={title:"Carbon / Tag",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Tags are used to label, classify, or organise items. They are non-interactive by default. Carbon tags come in 11 colour types — each carries a semantic meaning. Never use arbitrary colours for tags: use the type prop and let the design system handle the colour."}}},argTypes:{type:{control:"select",options:["red","magenta","purple","blue","cyan","teal","green","gray","cool-gray","warm-gray","high-contrast","outline"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{type:"blue",size:"md",children:"Tag label"}},t={name:"All colour types",parameters:{docs:{description:{story:"Use colour to communicate meaning consistently across your product. For status: green = active/success, red = error/critical, blue = informational, yellow/warm-gray = warning. Never pick colours arbitrarily."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{type:"red",children:"Red"}),e.jsx(r,{type:"magenta",children:"Magenta"}),e.jsx(r,{type:"purple",children:"Purple"}),e.jsx(r,{type:"blue",children:"Blue"}),e.jsx(r,{type:"cyan",children:"Cyan"}),e.jsx(r,{type:"teal",children:"Teal"}),e.jsx(r,{type:"green",children:"Green"}),e.jsx(r,{type:"gray",children:"Gray"}),e.jsx(r,{type:"cool-gray",children:"Cool gray"}),e.jsx(r,{type:"warm-gray",children:"Warm gray"}),e.jsx(r,{type:"high-contrast",children:"High contrast"}),e.jsx(r,{type:"outline",children:"Outline"})]})},s={name:"Status pattern (recommended usage)",parameters:{docs:{description:{story:"This is the recommended pattern for mapping status values to tag colours. Define a lookup object in your code — do not hardcode colours in JSX."}}},render:()=>{const x=[{label:"Active",type:"green"},{label:"Pending",type:"blue"},{label:"In review",type:"purple"},{label:"Blocked",type:"red"},{label:"Archived",type:"gray"},{label:"Deprecated",type:"warm-gray"}];return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:x.map(({label:o,type:j})=>e.jsx(r,{type:j,children:o},o))})}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{type:"blue",size:"sm",children:"Small"}),e.jsx(r,{type:"blue",size:"md",children:"Medium"}),e.jsx(r,{type:"blue",size:"lg",children:"Large"})]})};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'blue',
    size: 'md',
    children: 'Tag label'
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'All colour types',
  parameters: {
    docs: {
      description: {
        story: 'Use colour to communicate meaning consistently across your product. For status: green = active/success, red = error/critical, blue = informational, yellow/warm-gray = warning. Never pick colours arbitrarily.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Tag type="red">Red</Tag>
      <Tag type="magenta">Magenta</Tag>
      <Tag type="purple">Purple</Tag>
      <Tag type="blue">Blue</Tag>
      <Tag type="cyan">Cyan</Tag>
      <Tag type="teal">Teal</Tag>
      <Tag type="green">Green</Tag>
      <Tag type="gray">Gray</Tag>
      <Tag type="cool-gray">Cool gray</Tag>
      <Tag type="warm-gray">Warm gray</Tag>
      <Tag type="high-contrast">High contrast</Tag>
      <Tag type="outline">Outline</Tag>
    </div>
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,u,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Status pattern (recommended usage)',
  parameters: {
    docs: {
      description: {
        story: 'This is the recommended pattern for mapping status values to tag colours. Define a lookup object in your code — do not hardcode colours in JSX.'
      }
    }
  },
  render: () => {
    const statuses = [{
      label: 'Active',
      type: 'green'
    }, {
      label: 'Pending',
      type: 'blue'
    }, {
      label: 'In review',
      type: 'purple'
    }, {
      label: 'Blocked',
      type: 'red'
    }, {
      label: 'Archived',
      type: 'gray'
    }, {
      label: 'Deprecated',
      type: 'warm-gray'
    }];
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {statuses.map(({
        label,
        type
      }) => <Tag key={label} type={type}>{label}</Tag>)}
      </div>;
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var T,h,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Tag type="blue" size="sm">Small</Tag>
      <Tag type="blue" size="md">Medium</Tag>
      <Tag type="blue" size="lg">Large</Tag>
    </div>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const D=["Playground","AllColourTypes","StatusPattern","Sizes"];export{t as AllColourTypes,a as Playground,n as Sizes,s as StatusPattern,D as __namedExportsOrder,B as default};
