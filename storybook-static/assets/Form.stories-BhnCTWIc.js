import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{R as X,r as d}from"./index-pP6CS22B.js";import{u as Y,a as Z,c as N,i as O,P as s,d as ee}from"./index-CHDYt3vu.js";import{B as S}from"./Button-jHoG2r1m.js";import{T as te}from"./Text-Bz0BEAZn.js";import{n as se}from"./wrapFocus-CCxUIF9V.js";import{h as ae,T as k}from"./TextInput-D2jz3Rnv.js";import{u as re}from"./FormContext-BDGx7mKn.js";import{A as ie}from"./index-BAFCNEcv.js";import{W as oe,b as ne}from"./bucket-20-CWYgd7H-.js";import{T as le,F as z,a as W}from"./Tile-DQNe2zeb.js";import{I as de}from"./Notification-CfBM_EEg.js";import{P as ce}from"./PasswordInput-CJSVd10H.js";import{S as v}from"./Stack-DHS3t88T.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";import"./bucket-19-3H2KHUhu.js";import"./events-CA4jvATf.js";import"./bucket-0-ZZNfNWGE.js";import"./bucket-1-DR6THvDi.js";import"./bucket-3-Dkle887D.js";const c=X.forwardRef(({className:i,decorator:m,helperText:o,id:n,labelText:T,onChange:x=se,onClick:p,indeterminate:b=!1,invalid:w,invalidText:u,hideLabel:j,readOnly:a,title:C="",warn:D,warnText:E,disabled:$,slug:F,...M},h)=>{const t=Y(),l=re({id:n,readOnly:a,disabled:$??!1,invalid:w??!1,invalidText:u,warn:D??!1,warnText:E}),I=l.warn,H=!l.invalid&&!l.warn,J=Z(),P=ae(o),K=P?`checkbox-helper-text-${J}`:void 0,U=P&&e.jsx("div",{id:K,className:`${t}--form__helper-text`,children:o}),Q=N(`${t}--form-item`,`${t}--checkbox-wrapper`,i,{[`${t}--checkbox-wrapper--readonly`]:a,[`${t}--checkbox-wrapper--invalid`]:l.invalid,[`${t}--checkbox-wrapper--warning`]:I,[`${t}--checkbox-wrapper--slug`]:F,[`${t}--checkbox-wrapper--decorator`]:m}),V=N(`${t}--checkbox-label-text`,{[`${t}--visually-hidden`]:j}),g=F??m,B=O(g,ie)?d.cloneElement(g,{size:g.props.kind==="inline"?"md":"mini"}):g;return e.jsxs("div",{className:Q,children:[e.jsx("input",{...M,disabled:$,type:"checkbox","data-invalid":l.invalid?!0:void 0,onChange:r=>{!a&&x&&x(r,{checked:r.target.checked,id:n})},className:`${t}--checkbox`,id:n,ref:r=>{r&&(r.indeterminate=b??!1),typeof h=="function"?h(r):h&&"current"in h&&(h.current=r)},"aria-readonly":a,onClick:r=>{a&&r.preventDefault(),p&&p(r)}}),e.jsx("label",{htmlFor:n,className:`${t}--checkbox-label`,title:C,children:e.jsxs(te,{as:"div",className:V,children:[T,F?B:m?e.jsx("div",{className:`${t}--checkbox-wrapper-inner--decorator`,children:B}):""]})}),e.jsxs("div",{className:`${t}--checkbox__validation-msg`,children:[l.invalid&&e.jsxs(e.Fragment,{children:[e.jsx(oe,{className:`${t}--checkbox__invalid-icon`}),e.jsx("div",{className:`${t}--form-requirement`,children:u})]}),I&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{className:`${t}--checkbox__invalid-icon ${t}--checkbox__invalid-icon--warning`}),e.jsx("div",{className:`${t}--form-requirement`,children:E})]})]}),H&&U]})});c.propTypes={checked:s.bool,className:s.string,decorator:s.node,defaultChecked:s.bool,disabled:s.bool,helperText:s.node,hideLabel:s.bool,id:s.string.isRequired,indeterminate:s.bool,invalid:s.bool,invalidText:s.node,labelText:s.node.isRequired,onChange:s.func,readOnly:s.bool,slug:ee(s.node,"The `slug` prop has been deprecated and will be removed in the next major version. Use the decorator prop instead."),title:s.string,warn:s.bool,warnText:s.node};c.displayName="Checkbox";const Be={title:"Carbon / Form",tags:["autodocs"],parameters:{docs:{description:{component:"Forms in Carbon use the Form, FormGroup, and Stack components to create consistent spacing and grouping. Each field has a label above it (never beside it), helper text below, and an error state using invalidText. This story shows a complete, production-ready login form."}}}},f={name:"Login form (complete)",parameters:{docs:{description:{story:"A complete login form using Carbon TextInput, PasswordInput, Checkbox, and Button. This is the correct Carbon pattern: Stack component controls vertical rhythm, all fields are stacked vertically, label is always above the input."}}},render:()=>{const[i,m]=d.useState(""),[o,n]=d.useState(""),[T,x]=d.useState(!1),[p,b]=d.useState(!1),[w,u]=d.useState(!1),j=a=>{a.preventDefault(),!i||!o?(b(!0),u(!1)):(b(!1),u(!0))};return e.jsx("div",{style:{maxWidth:"400px"},children:e.jsxs(le,{children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("p",{style:{fontSize:"20px",fontWeight:400,marginBottom:"4px"},children:"Sign in"}),e.jsx("p",{style:{fontSize:"14px",color:"#525252"},children:"IBM Carbon Design System · Demo"})]}),w&&e.jsx(de,{kind:"success",title:"Signed in successfully",subtitle:`Welcome back, ${i}`,lowContrast:!0,style:{marginBottom:"24px"}}),e.jsx(z,{onSubmit:j,children:e.jsxs(v,{gap:7,children:[e.jsx(k,{id:"login-email",type:"email",labelText:"Email address",placeholder:"you@company.com",value:i,onChange:a=>m(a.target.value),invalid:p&&!i,invalidText:"Email address is required"}),e.jsx(ce,{id:"login-password",labelText:"Password",placeholder:"Enter your password",value:o,onChange:a=>n(a.target.value),invalid:p&&!o,invalidText:"Password is required",helperText:"Must be at least 8 characters"}),e.jsx(c,{id:"login-remember",labelText:"Keep me signed in",checked:T,onChange:(a,{checked:C})=>x(C)}),e.jsx(S,{type:"submit",kind:"primary",style:{width:"100%",maxWidth:"100%"},children:"Sign in"}),e.jsx(S,{kind:"ghost",style:{width:"100%",maxWidth:"100%"},children:"Forgot password?"})]})})]})})}},y={name:"Settings form",parameters:{docs:{description:{story:"A multi-group settings form using FormGroup to cluster related fields. Each FormGroup has a legend. Stack controls spacing between groups."}}},render:()=>e.jsx("div",{style:{maxWidth:"560px"},children:e.jsx(z,{children:e.jsxs(v,{gap:8,children:[e.jsx(W,{legendText:"Personal information",children:e.jsxs(v,{gap:6,children:[e.jsx(k,{id:"settings-firstname",labelText:"First name",placeholder:"Aria"}),e.jsx(k,{id:"settings-lastname",labelText:"Last name",placeholder:"Johnson"}),e.jsx(k,{id:"settings-email",type:"email",labelText:"Email address",placeholder:"aria@acme.com",helperText:"This is used for notifications and sign in"})]})}),e.jsx(W,{legendText:"Preferences",children:e.jsxs(v,{gap:5,children:[e.jsx(c,{id:"pref-notify-email",labelText:"Email me about activity",defaultChecked:!0}),e.jsx(c,{id:"pref-notify-updates",labelText:"Send product updates"}),e.jsx(c,{id:"pref-notify-tips",labelText:"Send tips and tutorials",defaultChecked:!0})]})}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(S,{kind:"primary",children:"Save changes"}),e.jsx(S,{kind:"secondary",children:"Cancel"})]})]})})})};var _,G,A;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Login form (complete)',
  parameters: {
    docs: {
      description: {
        story: 'A complete login form using Carbon TextInput, PasswordInput, Checkbox, and Button. This is the correct Carbon pattern: Stack component controls vertical rhythm, all fields are stacked vertically, label is always above the input.'
      }
    }
  },
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = e => {
      e.preventDefault();
      if (!email || !password) {
        setError(true);
        setSubmitted(false);
      } else {
        setError(false);
        setSubmitted(true);
      }
    };
    return <div style={{
      maxWidth: '400px'
    }}>
        <Tile>
          <div style={{
          marginBottom: '32px'
        }}>
            <p style={{
            fontSize: '20px',
            fontWeight: 400,
            marginBottom: '4px'
          }}>
              Sign in
            </p>
            <p style={{
            fontSize: '14px',
            color: '#525252'
          }}>
              IBM Carbon Design System · Demo
            </p>
          </div>

          {submitted && <InlineNotification kind="success" title="Signed in successfully" subtitle={\`Welcome back, \${email}\`} lowContrast style={{
          marginBottom: '24px'
        }} />}

          <Form onSubmit={handleSubmit}>
            <Stack gap={7}>
              <TextInput id="login-email" type="email" labelText="Email address" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} invalid={error && !email} invalidText="Email address is required" />

              <PasswordInput id="login-password" labelText="Password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} invalid={error && !password} invalidText="Password is required" helperText="Must be at least 8 characters" />

              <Checkbox id="login-remember" labelText="Keep me signed in" checked={remember} onChange={(_, {
              checked
            }) => setRemember(checked)} />

              <Button type="submit" kind="primary" style={{
              width: '100%',
              maxWidth: '100%'
            }}>
                Sign in
              </Button>

              <Button kind="ghost" style={{
              width: '100%',
              maxWidth: '100%'
            }}>
                Forgot password?
              </Button>
            </Stack>
          </Form>
        </Tile>
      </div>;
  }
}`,...(A=(G=f.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var L,R,q;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Settings form',
  parameters: {
    docs: {
      description: {
        story: 'A multi-group settings form using FormGroup to cluster related fields. Each FormGroup has a legend. Stack controls spacing between groups.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '560px'
  }}>
      <Form>
        <Stack gap={8}>
          <FormGroup legendText="Personal information">
            <Stack gap={6}>
              <TextInput id="settings-firstname" labelText="First name" placeholder="Aria" />
              <TextInput id="settings-lastname" labelText="Last name" placeholder="Johnson" />
              <TextInput id="settings-email" type="email" labelText="Email address" placeholder="aria@acme.com" helperText="This is used for notifications and sign in" />
            </Stack>
          </FormGroup>

          <FormGroup legendText="Preferences">
            <Stack gap={5}>
              <Checkbox id="pref-notify-email" labelText="Email me about activity" defaultChecked />
              <Checkbox id="pref-notify-updates" labelText="Send product updates" />
              <Checkbox id="pref-notify-tips" labelText="Send tips and tutorials" defaultChecked />
            </Stack>
          </FormGroup>

          <div style={{
          display: 'flex',
          gap: '16px'
        }}>
            <Button kind="primary">Save changes</Button>
            <Button kind="secondary">Cancel</Button>
          </div>
        </Stack>
      </Form>
    </div>
}`,...(q=(R=y.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Ne=["LoginForm","SettingsForm"];export{f as LoginForm,y as SettingsForm,Ne as __namedExportsOrder,Be as default};
