(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{10303:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(41658)}])},33118:function(e,n,r){"use strict";r.d(n,{a:function(){return l}});var t=r(85893),i=r(39187),o=r(11163),a=r(67294),l=function(e){var n=e.children,r=e.role,l=(0,i.a)(),s=(0,o.useRouter)(),u=(0,a.useState)(!1),c=u[0],d=u[1];return(0,a.useEffect)((function(){var e;s.isReady&&(l.isAuthenticated?r&&l.isAuthenticated&&(null===l||void 0===l||null===(e=l.user)||void 0===e?void 0:e.role)!==r?s.push("/"):d(!0):s.push({pathname:"/login",query:{redirect:s.pathname}}))}),[s.isReady]),c?(0,t.jsx)(t.Fragment,{children:n}):null}},41658:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return V}});var t=r(85893),i=r(27948),o=r(15861),a=r(40044),l=r(45670),s=r(62677),u=r(39373),c=r(23489),d=r(9008),f=r(67294),p=r(33118),h=r(34051),m=r.n(h),x=r(66242),v=r(44267),y=r(36822),b=r(69661),j=r(83321),g=r(40099),S=r(98456),Z=r(95617),w=r(53298),O=r(50122),E=r(78462),I=r(70891),C=r(48885),D=r(59334),R=r(34386),A=r(93946),P=r(55162);function T(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var r=1024,t=n<0?0:n,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(r));return"".concat(parseFloat((e/Math.pow(r,o)).toFixed(t))," ").concat(i[o])}function F(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){F(e,n,r[n])}))}return e}function z(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var B,U=function(e){var n=e.accept,r=(e.disabled,e.files),i=void 0===r?[]:r,a=(e.getFilesFromEvent,e.isUploading),l=e.maxFiles,s=e.maxSize,u=e.minSize,c=(e.noClick,e.noDrag,e.noDragEventsBubbling,e.noKeyboard,e.onDrop),d=(e.onDropAccepted,e.onDropRejected,e.onFileDialogCancel,e.onRemove),f=e.onRemoveAll,p=e.onUpload,h=(e.preventDropOnDocument,z(e,["accept","disabled","files","getFilesFromEvent","isUploading","maxFiles","maxSize","minSize","noClick","noDrag","noDragEventsBubbling","noKeyboard","onDrop","onDropAccepted","onDropRejected","onFileDialogCancel","onRemove","onRemoveAll","onUpload","preventDropOnDocument"])),m=(0,P.uI)({accept:n,maxFiles:l,maxSize:s,minSize:u,onDrop:c}),x=m.getRootProps,v=m.getInputProps,b=m.isDragActive;return(0,t.jsxs)("div",k({},h,{children:[(0,t.jsxs)(y.Z,k({sx:k({alignItems:"center",border:1,borderRadius:1,borderStyle:"dashed",borderColor:"divider",display:"flex",flexWrap:"wrap",justifyContent:"center",outline:"none",p:3},b&&{backgroundColor:"action.active",opacity:.5},{"&:hover":{backgroundColor:"action.hover",cursor:"pointer",opacity:.5}})},x(),{children:[(0,t.jsx)("input",k({},v())),(0,t.jsx)(y.Z,{children:(0,t.jsxs)(o.Z,{variant:"body1",children:["Drop file".concat(l&&1===l?"":"s")," or ",(0,t.jsx)(O.Z,{underline:"always",children:"browse"})," through your machine"]})})]})),i.length>0&&(0,t.jsxs)(y.Z,{sx:{mt:1},children:[(0,t.jsx)(E.Z,{children:i.map((function(e){return(0,t.jsxs)(I.ZP,{sx:{border:1,borderColor:"divider",borderRadius:1,"& + &":{mt:1}},children:[(0,t.jsx)(C.Z,{children:(0,t.jsx)(Z.Z,{fontSize:"small"})}),(0,t.jsx)(D.Z,{primary:e.name,primaryTypographyProps:{color:"textPrimary",variant:"subtitle2"},secondary:T(e.size)}),(0,t.jsx)(R.Z,{title:"Remove",children:(0,t.jsx)(A.Z,{edge:"end",onClick:function(){return d&&d(e)},children:(0,t.jsx)(w.Z,{fontSize:"small"})})})]},e.path)}))}),(0,t.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:[(0,t.jsx)(j.Z,{onClick:f,size:"small",type:"button",children:"Remove All"}),(0,t.jsx)(j.Z,{onClick:p,size:"small",sx:{ml:2},type:"button",variant:"contained",disabled:a,children:a?(0,t.jsx)(S.Z,{size:16}):"Upload"})]})]})]}))},_=r(82175),N=r(39187),M=r(74231);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function G(e,n,r,t,i,o,a){try{var l=e[o](a),s=l.value}catch(u){return void r(u)}l.done?n(s):Promise.resolve(s).then(t,i)}function Y(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){G(o,t,i,a,l,"next",e)}function l(e){G(o,t,i,a,l,"throw",e)}a(void 0)}))}}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(){var e=(0,N.a)(),n=e.user,r=e.updateProfile,i=q(f.useState(!1),2),a=i[0],l=i[1],s=q(f.useState(!1),2),u=s[0],c=s[1],d=q(f.useState([]),2),p=d[0],h=d[1],Z=(0,_.TA)({initialValues:{name:(null===n||void 0===n?void 0:n.name)||""},validationSchema:M.Ry({name:M.Z_().required("Name is required")}),onSubmit:function(){var e=Y(m().mark((function e(n,t){var i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("name",n.name),t.setSubmitting(!0),e.next=5,r(i);case 5:t.setSubmitting(!1);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}),w=function(){var e=Y(m().mark((function e(){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),(n=new FormData).append("profileImage",p[0]),e.next=5,r(n);case 5:c(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,t.jsx)(x.Z,{children:(0,t.jsx)(v.Z,{children:(0,t.jsxs)(y.Z,{display:"flex",gap:3,flexDirection:{xs:"column",md:"row"},children:[(0,t.jsx)(y.Z,{flex:1,children:(0,t.jsx)(o.Z,{variant:"h5",children:"Basic Details"})}),(0,t.jsxs)(y.Z,{flex:1,children:[(0,t.jsxs)(y.Z,{display:"flex",alignItems:"center",sx:{mb:3},children:[(0,t.jsx)(b.Z,{src:null===n||void 0===n?void 0:n.profileImage,sx:{bgcolor:"transparent"}}),(0,t.jsx)(j.Z,{size:"small",color:"primary",onClick:function(){return l(!a)},children:a?"Discard":"Change"})]}),a&&(0,t.jsx)(y.Z,{sx:{mb:3},children:(0,t.jsx)(U,{files:p,maxFiles:1,onDrop:function(e){h(e)},onRemove:function(e){h(p.filter((function(n){return n!==e})))},onRemoveAll:function(){h([])},onUpload:w,isUploading:u})}),(0,t.jsx)("form",{onSubmit:Z.handleSubmit,children:(0,t.jsxs)(y.Z,{display:"flex",alignItems:"start",gap:1,children:[(0,t.jsx)(g.Z,{label:"Name",fullWidth:!0,size:"small",name:"name",value:Z.values.name,onChange:Z.handleChange,onBlur:Z.handleBlur,error:Boolean(Z.touched.name&&Z.errors.name),helperText:Z.touched.name&&Z.errors.name}),(0,t.jsx)(j.Z,{size:"small",color:"primary",type:"submit",disabled:Z.isSubmitting,children:Z.isSubmitting?(0,t.jsx)(S.Z,{size:16}):"Save"})]})})]})]})})})}function W(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function X(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return W(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){e.PROFILE="PROFILE",e.SETTINGS="SETTINGS",e.SECURITY="SECURITY"}(B||(B={}));var $=function(){var e=X(f.useState(B.PROFILE),2),n=e[0],r=e[1];return(0,t.jsxs)(i.Z,{maxWidth:"md",children:[(0,t.jsx)(d.default,{children:(0,t.jsx)("title",{children:"Petohub - Account"})}),(0,t.jsx)(o.Z,{variant:"h3",sx:{my:3},children:"Account"}),(0,t.jsxs)(l.ZP,{value:n,children:[(0,t.jsxs)(s.Z,{onChange:function(e,n){r(n)},"aria-label":"profile-tabs",children:[(0,t.jsx)(a.Z,{label:"Profile",value:B.PROFILE}),(0,t.jsx)(a.Z,{label:"Settings",value:B.SETTINGS}),(0,t.jsx)(a.Z,{label:"Security",value:B.SECURITY})]}),(0,t.jsx)(u.Z,{sx:{px:0},value:B.PROFILE,children:(0,t.jsx)(K,{})}),(0,t.jsx)(u.Z,{sx:{px:0},value:B.SETTINGS,children:"This is the settings screen"}),(0,t.jsx)(u.Z,{sx:{px:0},value:B.SECURITY,children:"This is the security screen"})]})]})};$.getLayout=function(e){return(0,t.jsx)(p.a,{children:(0,t.jsx)(c.A,{children:e})})};var V=$}},function(e){e.O(0,[206,99,300,632,429,386,461,489,774,888,179],(function(){return n=10303,e(e.s=n);var n}));var n=e.O();_N_E=n}]);