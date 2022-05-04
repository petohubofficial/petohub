(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{66242:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(87462),a=t(63366),s=t(67294),o=t(86010),i=t(27192),c=t(40549),l=t(25821),d=t(55113),u=t(28979);function h(e){return(0,u.Z)("MuiCard",e)}(0,t(76087).Z)("MuiCard",["root"]);var p=t(85893);const f=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var m=s.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCard"}),{className:s,raised:c=!1}=t,d=(0,a.Z)(t,f),u=(0,n.Z)({},t,{raised:c}),m=(e=>{const{classes:r}=e;return(0,i.Z)({root:["root"]},h,r)})(u);return(0,p.jsx)(v,(0,n.Z)({className:(0,o.Z)(m.root,s),elevation:c?8:void 0,ref:r,ownerState:u},d))}))},98456:function(e,r,t){"use strict";t.d(r,{Z:function(){return H}});var n=t(63366),a=t(87462),s=t(67294),o=t(86010),i=t(27192),c=t(70917),l=t(98216),d=t(25821),u=t(40549),h=t(28979);function p(e){return(0,h.Z)("MuiCircularProgress",e)}(0,t(76087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=t(85893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let m,x,Z,y,g=e=>e;const b=44,k=(0,c.F4)(m||(m=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,c.F4)(x||(x=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(Z||(Z=g`
      animation: ${0} 1.4s linear infinite;
    `),k))),S=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(y||(y=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)));var H=s.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:c="primary",disableShrink:u=!1,size:h=40,style:m,thickness:x=3.6,value:Z=0,variant:y="indeterminate"}=t,g=(0,n.Z)(t,v),k=(0,a.Z)({},t,{color:c,disableShrink:u,size:h,thickness:x,value:Z,variant:y}),j=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,s={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,a&&"circleDisableShrink"]};return(0,i.Z)(s,p,r)})(k),H={},M={},P={};if("determinate"===y){const e=2*Math.PI*((b-x)/2);H.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(Z),H.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,f.jsx)(w,(0,a.Z)({className:(0,o.Z)(j.root,s),style:(0,a.Z)({width:h,height:h},M,m),ownerState:k,ref:r,role:"progressbar"},P,g,{children:(0,f.jsx)(S,{className:j.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,f.jsx)(C,{className:j.circle,style:H,ownerState:k,cx:b,cy:b,r:(b-x)/2,fill:"none",strokeWidth:x})})}))}))},7906:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var n=t(63366),a=t(87462),s=t(67294),o=t(86010),i=t(27192),c=t(31618),l=t(25821),d=t(40549),u=t(28979);function h(e){return(0,u.Z)("MuiTable",e)}(0,t(76087).Z)("MuiTable",["root","stickyHeader"]);var p=t(85893);const f=["className","component","padding","size","stickyHeader"],v=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.stickyHeader&&r.stickyHeader]}})((({theme:e,ownerState:r})=>(0,a.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,a.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"}))),m="table";var x=s.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiTable"}),{className:d,component:u=m,padding:x="normal",size:Z="medium",stickyHeader:y=!1}=t,g=(0,n.Z)(t,f),b=(0,a.Z)({},t,{component:u,padding:x,size:Z,stickyHeader:y}),k=(e=>{const{classes:r,stickyHeader:t}=e,n={root:["root",t&&"stickyHeader"]};return(0,i.Z)(n,h,r)})(b),j=s.useMemo((()=>({padding:x,size:Z,stickyHeader:y})),[x,Z,y]);return(0,p.jsx)(c.Z.Provider,{value:j,children:(0,p.jsx)(v,(0,a.Z)({as:u,role:u===m?null:"table",ref:r,className:(0,o.Z)(k.root,d),ownerState:b},g))})}))},31618:function(e,r,t){"use strict";const n=t(67294).createContext();r.Z=n},3602:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products",function(){return t(73853)}])},33118:function(e,r,t){"use strict";t.d(r,{a:function(){return i}});var n=t(85893),a=t(39187),s=t(11163),o=t(67294),i=function(e){var r=e.children,t=e.role,i=(0,a.a)(),c=(0,s.useRouter)(),l=(0,o.useState)(!1),d=l[0],u=l[1];return(0,o.useEffect)((function(){var e;c.isReady&&(i.isAuthenticated?t&&i.isAuthenticated&&(null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.role)!==t?c.push("/"):u(!0):c.push({pathname:"/login",query:{redirect:c.pathname}}))}),[c.isReady]),d?(0,n.jsx)(n.Fragment,{children:r}):null}},58207:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(85893),a=t(88169),s=(0,a.Z)((0,n.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard"),o=(0,a.Z)((0,n.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment"),i=(0,a.Z)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd"),c=t(2734),l=t(36822),d=t(15861),u=t(27948),h=t(66242),p=t(41664),f=t(11163),v=function(e){var r=e.href,t=e.label,a=e.icon,s=(0,f.useRouter)().pathname===r,o=(0,c.Z)(),i=s?o.palette.primary.main:o.palette.action.active,u=s?o.palette.primary.main:"transparent",h=o.palette.primary.main;return(0,n.jsx)(p.default,{href:r,passHref:!0,children:(0,n.jsxs)(l.Z,{display:"flex",sx:{p:1,borderLeft:"2px solid",borderColor:u,cursor:"pointer","&:hover":{borderColor:h,"& svg *":{fill:h},"& .MuiTypography-root":{color:h}},"& svg *":{fill:i}},children:[a,(0,n.jsx)(d.Z,{component:"span",fontWeight:500,color:i,children:t})]})})},m=function(e){var r=e.children;return(0,n.jsx)(u.Z,{children:(0,n.jsxs)(l.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},sx:{my:2},gap:2,children:[(0,n.jsxs)(h.Z,{sx:{py:2,height:"100%"},children:[(0,n.jsx)(v,{href:"/dashboard",label:"Dashboard",icon:(0,n.jsx)(s,{})}),(0,n.jsx)(v,{href:"/dashboard/products",label:"Products",icon:(0,n.jsx)(o,{})}),(0,n.jsx)(v,{href:"/dashboard/products/new",label:"Add a new product",icon:(0,n.jsx)(i,{})})]}),(0,n.jsx)(h.Z,{sx:{flex:1},children:r})]})})}},73853:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n,a=t(85893),s=t(36822),o=t(98456),i=t(15861),c=t(7906),l=t(33118),d=t(58207),u=t(76836),h=t(41664),p=t(99850);!function(e){e.PRODUCTS="client/products"}(n||(n={}));var f=p.h.enhanceEndpoints({addTagTypes:Object.values(n)}).injectEndpoints({endpoints:function(e){return{getClientProducts:e.query({query:function(e){return{url:"client/products",params:e}},providesTags:[n.PRODUCTS]})}}}).useGetClientProductsQuery,v=t(1674),m=function(){var e,r,t=f({page:1,limit:10}),n=t.data;return t.isFetching?(0,a.jsx)(s.Z,{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(o.Z,{})}):0===(null===n||void 0===n||null===(e=n.data)||void 0===e||null===(r=e.results)||void 0===r?void 0:r.length)?(0,a.jsxs)(s.Z,{sx:{p:1},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[(0,a.jsx)(i.Z,{color:"textSecondary",children:"No products found!"}),(0,a.jsxs)(i.Z,{children:["You can start adding products by clicking"," ",(0,a.jsx)(h.default,{href:"/dashboard/products/new",passHref:!0,children:(0,a.jsx)(i.Z,{component:"span",variant:"link",children:"here"})})]})]}):(0,a.jsx)(s.Z,{children:(0,a.jsx)(c.Z,{})})};m.getLayout=function(e){return(0,a.jsx)(l.a,{role:v.u.CLIENT,children:(0,a.jsx)(u.Z,{children:(0,a.jsx)(d.Z,{children:e})})})};var x=m}},function(e){e.O(0,[206,99,300,836,774,888,179],(function(){return r=3602,e(e.s=r);var r}));var r=e.O();_N_E=r}]);