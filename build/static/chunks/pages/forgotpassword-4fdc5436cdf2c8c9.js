(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{67785:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgotpassword",function(){return t(15449)}])},36881:function(e,n,t){"use strict";t.d(n,{A:function(){return o}});var r=t(85893),i=t(39187),s=t(11163),a=t(67294),o=function(e){var n=e.children,t=(0,i.a)(),o=(0,s.useRouter)(),l=(0,a.useState)(!1),c=l[0],u=l[1];return(0,a.useEffect)((function(){o.isReady&&(t.isAuthenticated?o.push("/"):u(!0))}),[o.isReady]),c?(0,r.jsx)(r.Fragment,{children:n}):null}},39187:function(e,n,t){"use strict";t.d(n,{a:function(){return s}});var r=t(67294),i=t(22754),s=function(){return(0,r.useContext)(i.Vo)}},15449:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),i=t(87357),s=t(94669),a=t(66242),o=t(44267),l=t(83321),c=t(27948),u=t(15861),d=t(85773),h=t(82175),x=t(39187),f=t(41664),m=t(11163),j=t(67294),p=t(74931),Z=t(74231),y=function(){var e=(0,j.useState)(!1),n=e[0],t=e[1],y=(0,x.a)().forgotPassword,v=((0,m.useRouter)(),(0,h.TA)({initialValues:{email:""},validationSchema:Z.Ry({email:Z.Z_().email("Invalid email address").required("Required")}),onSubmit:function(e){t(!0),y(e).then((function(e){t(!1),e.success&&p.ZP.success(e.data)}))}}));return(0,r.jsx)(a.Z,{sx:{width:500,boxShadow:12,my:1},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Z,{sx:{mb:2},children:(0,r.jsx)(f.default,{href:"/",passHref:!0,children:(0,r.jsx)(l.Z,{startIcon:(0,r.jsx)(s.Z,{}),children:"Back to site"})})}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,r.jsx)(u.Z,{variant:"h5",textAlign:"center",children:"Welcome to Petohub"}),(0,r.jsx)(u.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:"Reset your password here"})]}),(0,r.jsxs)(i.Z,{component:"form",onSubmit:v.handleSubmit,width:"100%",children:[(0,r.jsxs)(i.Z,{sx:{mt:3},children:[(0,r.jsx)(u.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Email address"}),(0,r.jsx)(d.Z,{autoFocus:!0,fullWidth:!0,size:"small",placeholder:"example@company.com",name:"email",type:"email",onChange:v.handleChange,onBlur:v.handleBlur,value:v.values.email,error:Boolean(v.touched.email&&v.errors.email),helperText:v.touched.email&&v.errors.email})]}),(0,r.jsx)(l.Z,{sx:{mt:3},disabled:n,fullWidth:!0,variant:"contained",type:"submit",children:"Send email"})]}),(0,r.jsx)(i.Z,{sx:{mt:3},width:"100%",children:(0,r.jsxs)(u.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["Already have an account?",(0,r.jsx)(f.default,{href:"/login",passHref:!0,children:(0,r.jsx)(u.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{ml:1},children:"Login"})})]})})]})})]})})},v=t(36881),g=t(9008),w=function(){return(0,r.jsxs)(i.Z,{width:"100%",display:"flex",justifyContent:"center",children:[(0,r.jsx)(g.default,{children:(0,r.jsx)("title",{children:"Petohub | Forgot password"})}),(0,r.jsx)(y,{})]})};w.getLayout=function(e){return(0,r.jsx)(v.A,{children:e})};var b=w}},function(e){e.O(0,[206,773,243,774,888,179],(function(){return n=67785,e(e.s=n);var n}));var n=e.O();_N_E=n}]);