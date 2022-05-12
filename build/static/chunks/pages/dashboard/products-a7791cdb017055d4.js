(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{66242:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(87462),s=t(63366),o=t(67294),i=t(86010),a=t(27192),c=t(40549),l=t(25821),d=t(55113),u=t(28979);function h(e){return(0,u.Z)("MuiCard",e)}(0,t(76087).Z)("MuiCard",["root"]);var p=t(85893);const f=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var m=o.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=t,d=(0,s.Z)(t,f),u=(0,n.Z)({},t,{raised:c}),m=(e=>{const{classes:r}=e;return(0,a.Z)({root:["root"]},h,r)})(u);return(0,p.jsx)(v,(0,n.Z)({className:(0,i.Z)(m.root,o),elevation:c?8:void 0,ref:r,ownerState:u},d))}))},98456:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(63366),s=t(87462),o=t(67294),i=t(86010),a=t(27192),c=t(70917),l=t(98216),d=t(25821),u=t(40549),h=t(28979);function p(e){return(0,h.Z)("MuiCircularProgress",e)}(0,t(76087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=t(85893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let m,Z,x,y,g=e=>e;const b=44,k=(0,c.F4)(m||(m=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,c.F4)(Z||(Z=g`
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
`)),S=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,s.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(x||(x=g`
      animation: ${0} 1.4s linear infinite;
    `),k))),w=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,s.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(y||(y=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)));var P=o.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:c="primary",disableShrink:u=!1,size:h=40,style:m,thickness:Z=3.6,value:x=0,variant:y="indeterminate"}=t,g=(0,n.Z)(t,v),k=(0,s.Z)({},t,{color:c,disableShrink:u,size:h,thickness:Z,value:x,variant:y}),j=(e=>{const{classes:r,variant:t,color:n,disableShrink:s}=e,o={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,s&&"circleDisableShrink"]};return(0,a.Z)(o,p,r)})(k),P={},H={},M={};if("determinate"===y){const e=2*Math.PI*((b-Z)/2);P.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(x),P.strokeDashoffset=`${((100-x)/100*e).toFixed(3)}px`,H.transform="rotate(-90deg)"}return(0,f.jsx)(S,(0,s.Z)({className:(0,i.Z)(j.root,o),style:(0,s.Z)({width:h,height:h},H,m),ownerState:k,ref:r,role:"progressbar"},M,g,{children:(0,f.jsx)(w,{className:j.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,f.jsx)(C,{className:j.circle,style:P,ownerState:k,cx:b,cy:b,r:(b-Z)/2,fill:"none",strokeWidth:Z})})}))}))},7906:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var n=t(63366),s=t(87462),o=t(67294),i=t(86010),a=t(27192),c=t(31618),l=t(25821),d=t(40549),u=t(28979);function h(e){return(0,u.Z)("MuiTable",e)}(0,t(76087).Z)("MuiTable",["root","stickyHeader"]);var p=t(85893);const f=["className","component","padding","size","stickyHeader"],v=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.stickyHeader&&r.stickyHeader]}})((({theme:e,ownerState:r})=>(0,s.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,s.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},r.stickyHeader&&{borderCollapse:"separate"}))),m="table";var Z=o.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiTable"}),{className:d,component:u=m,padding:Z="normal",size:x="medium",stickyHeader:y=!1}=t,g=(0,n.Z)(t,f),b=(0,s.Z)({},t,{component:u,padding:Z,size:x,stickyHeader:y}),k=(e=>{const{classes:r,stickyHeader:t}=e,n={root:["root",t&&"stickyHeader"]};return(0,a.Z)(n,h,r)})(b),j=o.useMemo((()=>({padding:Z,size:x,stickyHeader:y})),[Z,x,y]);return(0,p.jsx)(c.Z.Provider,{value:j,children:(0,p.jsx)(v,(0,s.Z)({as:u,role:u===m?null:"table",ref:r,className:(0,i.Z)(k.root,d),ownerState:b},g))})}))},31618:function(e,r,t){"use strict";const n=t(67294).createContext();r.Z=n},3602:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products",function(){return t(11897)}])},33118:function(e,r,t){"use strict";var n=t(85893),s=t(39187),o=t(11163),i=t(67294),a=t(74931);r.Z=function(e){var r=e.children,t=e.roles,c=(0,s.a)(),l=(0,o.useRouter)(),d=(0,i.useState)(!1),u=d[0],h=d[1];return(0,i.useEffect)((function(){if(l.isReady)if(c.isAuthenticated)if(t&&c.isAuthenticated){t.some((function(e){var r;return(null===c||void 0===c||null===(r=c.user)||void 0===r?void 0:r.role)===e}))?h(!0):(a.ZP.error("You do not have the required permissions to access this page"),l.push("/"))}else h(!0);else a.ZP.error("You must be logged in to access this page"),l.push({pathname:"/login",query:{redirect:l.pathname}})}),[l.isReady]),u?(0,n.jsx)(n.Fragment,{children:r}):null}},58207:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(85893),s=t(88169),o=(0,s.Z)((0,n.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard"),i=(0,s.Z)((0,n.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment"),a=(0,s.Z)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd"),c=t(2734),l=t(36822),d=t(15861),u=t(27948),h=t(66242),p=t(41664),f=t(11163),v=function(e){var r=e.href,t=e.label,s=e.icon,o=(0,f.useRouter)().pathname===r,i=(0,c.Z)(),a=o?i.palette.primary.main:i.palette.action.active,u=o?i.palette.primary.main:"transparent",h=i.palette.primary.main;return(0,n.jsx)(p.default,{href:r,passHref:!0,children:(0,n.jsxs)(l.Z,{display:"flex",sx:{p:1,borderLeft:"2px solid",borderColor:u,cursor:"pointer","&:hover":{borderColor:h,"& svg *":{fill:h},"& .MuiTypography-root":{color:h}},"& svg *":{fill:a}},children:[s,(0,n.jsx)(d.Z,{component:"span",fontWeight:500,color:a,children:t})]})})},m=function(e){var r=e.children;return(0,n.jsx)(u.Z,{children:(0,n.jsxs)(l.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},sx:{my:2},gap:2,children:[(0,n.jsxs)(h.Z,{sx:{py:2,height:"100%"},children:[(0,n.jsx)(v,{href:"/dashboard",label:"Dashboard",icon:(0,n.jsx)(o,{})}),(0,n.jsx)(v,{href:"/dashboard/products",label:"Products",icon:(0,n.jsx)(i,{})}),(0,n.jsx)(v,{href:"/dashboard/products/new",label:"Add a new product",icon:(0,n.jsx)(a,{})})]}),(0,n.jsx)(h.Z,{sx:{flex:1},children:r})]})})}},11897:function(e,r,t){"use strict";t.r(r);var n=t(85893),s=t(36822),o=t(98456),i=t(15861),a=t(7906),c=t(33118),l=t(58207),d=t(76836),u=t(41664),h=t(22437),p=t(1674),f=function(){var e,r,t=(0,h.Lk)({page:1,limit:10}),c=t.data;return t.isFetching?(0,n.jsx)(s.Z,{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:(0,n.jsx)(o.Z,{})}):0===(null===c||void 0===c||null===(e=c.data)||void 0===e||null===(r=e.results)||void 0===r?void 0:r.length)?(0,n.jsxs)(s.Z,{sx:{p:1},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[(0,n.jsx)(i.Z,{color:"textSecondary",children:"No products found!"}),(0,n.jsxs)(i.Z,{children:["You can start adding products by clicking"," ",(0,n.jsx)(u.default,{href:"/dashboard/products/new",passHref:!0,children:(0,n.jsx)(i.Z,{component:"span",variant:"link",children:"here"})})]})]}):(0,n.jsx)(s.Z,{children:(0,n.jsx)(a.Z,{})})};f.getLayout=function(e){return(0,n.jsx)(c.Z,{roles:[p.u.CLIENT],children:(0,n.jsx)(d.Z,{children:(0,n.jsx)(l.Z,{children:e})})})},r.default=f},22437:function(e,r,t){"use strict";t.d(r,{Lk:function(){return i},Ni:function(){return a}});var n,s=t(89991);!function(e){e.PRODUCTS="client/product"}(n||(n={}));var o=s.h.enhanceEndpoints({addTagTypes:Object.values(n)}).injectEndpoints({endpoints:function(e){return{getClientProducts:e.query({query:function(e){return{url:"client/product",params:e}},providesTags:[{type:n.PRODUCTS,id:"list"}]}),addClientProduct:e.mutation({query:function(e){return{url:"client/product",method:"POST",body:e}},invalidatesTags:[{type:n.PRODUCTS,id:"list"}]})}}}),i=o.useGetClientProductsQuery,a=o.useAddClientProductMutation}},function(e){e.O(0,[206,931,300,836,774,888,179],(function(){return r=3602,e(e.s=r);var r}));var r=e.O();_N_E=r}]);