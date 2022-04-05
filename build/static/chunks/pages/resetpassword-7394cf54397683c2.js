(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{52186:function(e,r,n){"use strict";var s=n(88169),t=n(85893);r.Z=(0,s.Z)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},45697:function(e,r,n){"use strict";var s=n(88169),t=n(85893);r.Z=(0,s.Z)((0,t.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},12828:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetpassword",function(){return n(25376)}])},36881:function(e,r,n){"use strict";n.d(r,{A:function(){return c}});var s=n(85893),t=n(39187),o=n(11163),i=n(67294),c=function(e){var r=e.children,n=(0,t.a)(),c=(0,o.useRouter)(),a=(0,i.useState)(!1),d=a[0],l=a[1];return(0,i.useEffect)((function(){c.isReady&&(n.isAuthenticated?c.push("/"):l(!0))}),[c.isReady]),d?(0,s.jsx)(s.Fragment,{children:r}):null}},39187:function(e,r,n){"use strict";n.d(r,{a:function(){return o}});var s=n(67294),t=n(22754),o=function(){return(0,s.useContext)(t.Vo)}},25376:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return P}});var s=n(85893),t=n(87357),o=n(36881),i=n(94669),c=n(45697),a=n(52186),d=n(66242),l=n(44267),u=n(83321),h=n(27948),x=n(15861),f=n(85773),m=n(82175),p=n(39187),j=n(41664),w=n(11163),Z=n(67294),y=n(74231),v=function(){var e=(0,Z.useState)(!1),r=e[0],n=e[1],o=(0,Z.useState)(!1),v=o[0],g=o[1],b=(0,Z.useState)(!1),P=b[0],C=b[1],k=(0,Z.useState)(),S=k[0],_=k[1],z=(0,p.a)().resetPassword,A=(0,w.useRouter)(),R=(0,m.TA)({initialValues:{password:"",confirmPassword:""},validationSchema:y.Ry({password:y.Z_().required("Required"),confirmPassword:y.Z_().required("Required").oneOf([y.iH("password")],"Passwords must match")}),onSubmit:function(e,r){var s=A.query.token;n(!0),z(s,e).then((function(e){n(!1),_(e),r.resetForm()}))}});return(0,Z.useEffect)((function(){A.query.token||_({success:!1,error:"Invalid token"})}),[A.query.token]),(0,s.jsx)(d.Z,{sx:{width:500,boxShadow:12,my:1},children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{sx:{mb:2},children:(0,s.jsx)(j.default,{href:"/",passHref:!0,children:(0,s.jsx)(u.Z,{startIcon:(0,s.jsx)(i.Z,{}),children:"Back to site"})})}),(0,s.jsx)(h.Z,{children:(0,s.jsxs)(t.Z,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,s.jsx)(x.Z,{variant:"h5",textAlign:"center",children:"Welcome to Petohub"}),(0,s.jsx)(x.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:"Enter your new password"}),!S&&(0,s.jsxs)(t.Z,{component:"form",onSubmit:R.handleSubmit,width:"100%",children:[(0,s.jsxs)(t.Z,{sx:{mt:3},children:[(0,s.jsx)(x.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Password"}),(0,s.jsx)(f.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"password",type:v?"text":"password",onChange:R.handleChange,onBlur:R.handleBlur,value:R.values.password,error:Boolean(R.touched.password&&R.errors.password),helperText:R.touched.password&&R.errors.password,InputProps:{endAdornment:v?(0,s.jsx)(c.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return g(!1)}}):(0,s.jsx)(a.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return g(!0)}})}})]}),(0,s.jsxs)(t.Z,{sx:{mt:3},children:[(0,s.jsx)(x.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Confirm Password"}),(0,s.jsx)(f.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"confirmPassword",type:P?"text":"password",onChange:R.handleChange,onBlur:R.handleBlur,value:R.values.confirmPassword,error:Boolean(R.touched.confirmPassword&&R.errors.confirmPassword),helperText:R.touched.confirmPassword&&R.errors.confirmPassword,InputProps:{endAdornment:P?(0,s.jsx)(c.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return C(!1)}}):(0,s.jsx)(a.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return C(!0)}})}})]}),(0,s.jsx)(u.Z,{sx:{mt:3},disabled:r,fullWidth:!0,variant:"contained",type:"submit",children:"Reset password"})]}),(0,s.jsxs)(t.Z,{sx:{my:2},children:[r&&(0,s.jsx)(x.Z,{variant:"h6",children:"Resetting your password..."}),S&&!S.success&&(0,s.jsxs)(t.Z,{textAlign:"center",children:[(0,s.jsx)(x.Z,{variant:"h6",color:"error.dark",children:(null===S||void 0===S?void 0:S.error)||"Something went wrong"}),(0,s.jsx)(t.Z,{sx:{mt:1},width:"100%",children:(0,s.jsxs)(x.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["Click",(0,s.jsx)(j.default,{href:"/",passHref:!0,children:(0,s.jsx)(x.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{mx:.5},children:"here"})}),"to go back to the site"]})})]}),S&&S.success&&(0,s.jsxs)(t.Z,{textAlign:"center",children:[(0,s.jsx)(x.Z,{variant:"h6",color:"success.dark",children:null===S||void 0===S?void 0:S.data}),(0,s.jsx)(t.Z,{sx:{mt:1},width:"100%",children:(0,s.jsxs)(x.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["You will need to",(0,s.jsx)(j.default,{href:"/login",passHref:!0,children:(0,s.jsx)(x.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{mx:.5},children:"Login"})}),"again to continue"]})})]})]})]})})]})})},g=n(9008),b=function(){return(0,s.jsxs)(t.Z,{width:"100%",display:"flex",justifyContent:"center",children:[(0,s.jsx)(g.default,{children:(0,s.jsx)("title",{children:"Petohub | Reset Password"})}),(0,s.jsx)(v,{})]})};b.getLayout=function(e){return(0,s.jsx)(o.A,{children:e})};var P=b}},function(e){e.O(0,[206,773,243,774,888,179],(function(){return r=12828,e(e.s=r);var r}));var r=e.O();_N_E=r}]);