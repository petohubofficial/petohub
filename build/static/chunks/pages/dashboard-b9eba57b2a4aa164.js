(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{66242:function(e,r,s){"use strict";s.d(r,{Z:function(){return x}});var n=s(87462),o=s(63366),t=s(67294),a=s(86010),i=s(27192),c=s(40549),u=s(25821),l=s(55113),d=s(28979);function h(e){return(0,d.Z)("MuiCard",e)}(0,s(76087).Z)("MuiCard",["root"]);var f=s(85893);const v=["className","raised"],p=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var x=t.forwardRef((function(e,r){const s=(0,u.Z)({props:e,name:"MuiCard"}),{className:t,raised:c=!1}=s,l=(0,o.Z)(s,v),d=(0,n.Z)({},s,{raised:c}),x=(e=>{const{classes:r}=e;return(0,i.Z)({root:["root"]},h,r)})(d);return(0,f.jsx)(p,(0,n.Z)({className:(0,a.Z)(x.root,t),elevation:c?8:void 0,ref:r,ownerState:d},l))}))},55158:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(12893)}])},33118:function(e,r,s){"use strict";var n=s(85893),o=s(39187),t=s(11163),a=s(67294),i=s(74931);r.Z=function(e){var r=e.children,s=e.roles,c=(0,o.a)(),u=(0,t.useRouter)(),l=(0,a.useState)(!1),d=l[0],h=l[1];return(0,a.useEffect)((function(){if(u.isReady)if(c.isAuthenticated)if(s&&c.isAuthenticated){s.some((function(e){var r;return(null===c||void 0===c||null===(r=c.user)||void 0===r?void 0:r.role)===e}))?h(!0):(i.ZP.error("You do not have the required permissions to access this page"),u.push("/"))}else h(!0);else i.ZP.error("You must be logged in to access this page"),u.push({pathname:"/login",query:{redirect:u.pathname}})}),[u.isReady]),d?(0,n.jsx)(n.Fragment,{children:r}):null}},58207:function(e,r,s){"use strict";s.d(r,{Z:function(){return x}});var n=s(85893),o=s(88169),t=(0,o.Z)((0,n.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard"),a=(0,o.Z)((0,n.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment"),i=(0,o.Z)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd"),c=s(2734),u=s(36822),l=s(15861),d=s(27948),h=s(66242),f=s(41664),v=s(11163),p=function(e){var r=e.href,s=e.label,o=e.icon,t=(0,v.useRouter)().pathname===r,a=(0,c.Z)(),i=t?a.palette.primary.main:a.palette.action.active,d=t?a.palette.primary.main:"transparent",h=a.palette.primary.main;return(0,n.jsx)(f.default,{href:r,passHref:!0,children:(0,n.jsxs)(u.Z,{display:"flex",sx:{p:1,borderLeft:"2px solid",borderColor:d,cursor:"pointer","&:hover":{borderColor:h,"& svg *":{fill:h},"& .MuiTypography-root":{color:h}},"& svg *":{fill:i}},children:[o,(0,n.jsx)(l.Z,{component:"span",fontWeight:500,color:i,children:s})]})})},x=function(e){var r=e.children;return(0,n.jsx)(d.Z,{children:(0,n.jsxs)(u.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},sx:{my:2},gap:2,children:[(0,n.jsxs)(h.Z,{sx:{py:2,height:"100%"},children:[(0,n.jsx)(p,{href:"/dashboard",label:"Dashboard",icon:(0,n.jsx)(t,{})}),(0,n.jsx)(p,{href:"/dashboard/products",label:"Products",icon:(0,n.jsx)(a,{})}),(0,n.jsx)(p,{href:"/dashboard/products/new",label:"Add a new product",icon:(0,n.jsx)(i,{})})]}),(0,n.jsx)(h.Z,{sx:{flex:1},children:r})]})})}},12893:function(e,r,s){"use strict";s.r(r);var n=s(85893),o=s(36822),t=s(15861),a=s(33118),i=s(58207),c=s(76836),u=s(1674),l=function(){return(0,n.jsx)(o.Z,{sx:{p:1},children:(0,n.jsx)(t.Z,{children:"Dashboard will be available soon"})})};l.getLayout=function(e){return(0,n.jsx)(a.Z,{roles:[u.u.CLIENT],children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(i.Z,{children:e})})})},r.default=l}},function(e){e.O(0,[206,931,300,836,774,888,179],(function(){return r=55158,e(e.s=r);var r}));var r=e.O();_N_E=r}]);