(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{81798:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/member",function(){return n(32483)}])},36881:function(e,r,n){"use strict";n.d(r,{A:function(){return i}});var t=n(85893),s=n(39187),a=n(11163),o=n(67294),i=function(e){var r=e.children,n=(0,s.a)(),i=(0,a.useRouter)(),u=(0,o.useState)(!1),l=u[0],d=u[1];return(0,o.useEffect)((function(){i.isReady&&(n.isAuthenticated?i.push("/"):d(!0))}),[i.isReady]),l?(0,t.jsx)(t.Fragment,{children:r}):null}},39187:function(e,r,n){"use strict";n.d(r,{a:function(){return a}});var t=n(67294),s=n(22754),a=function(){return(0,t.useContext)(s.Vo)}},32483:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return E}});var t=n(85893),s=n(36822),a=n(36881),o=n(45697),i=n(52186),u=n(62651),l=n(73509),d=n(94669),c=n(15861),h=n(77931),m=n(83321),x=n(98456),f=n(57333),p=n(18972),g=n(66242),j=n(44267),y=n(27948),Z=n(82175),v=n(39187),b=n(41664),C=n(11163),w=n(67294),P=n(74931),S=n(78414),B=n(38069),T=n(74231),q=JSON.parse('["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]');function R(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){R(e,r,n[r])}))}return e}var W=function(e){var r=e.next,n=(0,w.useState)(!1),a=n[0],l=n[1],d=(0,w.useState)(!1),x=d[0],f=d[1],p=(0,Z.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:T.Ry({name:T.Z_().required("Required"),email:T.Z_().email("Invalid email address").required("Required"),password:T.Z_().required("Required"),confirmPassword:T.Z_().required("Required").oneOf([T.iH("password")],"Passwords must match")}),onSubmit:function(e){return r(e)}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.Z,{component:"form",onSubmit:p.handleSubmit,width:"100%",children:[(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Personal Name"}),(0,t.jsx)(h.Z,{autoFocus:!0,fullWidth:!0,size:"small",placeholder:"Your name",name:"name",type:"text",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.name,error:Boolean(p.touched.name&&p.errors.name),helperText:p.touched.name&&p.errors.name})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Email"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"example@company.com",name:"email",type:"email",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.email,error:Boolean(p.touched.email&&p.errors.email),helperText:p.touched.email&&p.errors.email})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Password"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"password",type:a?"text":"password",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.password,error:Boolean(p.touched.password&&p.errors.password),helperText:p.touched.password&&p.errors.password,InputProps:{endAdornment:a?(0,t.jsx)(o.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return l(!1)}}):(0,t.jsx)(i.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return l(!0)}})}})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Confirm Password"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"confirmPassword",type:x?"text":"password",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.confirmPassword,error:Boolean(p.touched.confirmPassword&&p.errors.confirmPassword),helperText:p.touched.confirmPassword&&p.errors.confirmPassword,InputProps:{endAdornment:x?(0,t.jsx)(o.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return f(!1)}}):(0,t.jsx)(i.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return f(!0)}})}})]}),(0,t.jsx)(m.Z,{sx:{mt:3},fullWidth:!0,variant:"contained",type:"submit",endIcon:(0,t.jsx)(u.Z,{}),children:"Next"})]}),(0,t.jsx)(s.Z,{sx:{mt:3},width:"100%",children:(0,t.jsxs)(c.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["Already have an account?",(0,t.jsx)(b.default,{href:"/login",passHref:!0,children:(0,t.jsx)(c.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{ml:1},children:"Login"})})]})})]})},z=function(e){var r,n,a=e.next,o=e.prev,i=e.submitting,u=(0,S.NL)(),d=u.data,g=u.isLoading,j=(0,Z.TA)({initialValues:{storeName:"",category:[],number:"",address:"",state:"Delhi",pincode:"",role:"Client"},validationSchema:T.Ry({storeName:T.Z_().required("Required"),category:T.IX().min(1,"Required").required("Required"),number:T.Z_().required("Required"),address:T.Z_().required("Required"),state:T.Z_().required("Required"),pincode:T.Z_().required("Required")}),onSubmit:function(e){return a(e)}});return(0,t.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:j.handleSubmit,width:"100%",children:[(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Name"}),(0,t.jsx)(h.Z,{autoFocus:!0,fullWidth:!0,size:"small",placeholder:"Your business name",name:"storeName",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.storeName,error:Boolean(j.touched.storeName&&j.errors.storeName),helperText:j.touched.storeName&&j.errors.storeName})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Categorisation"}),g?(0,t.jsxs)(s.Z,{display:"flex",gap:2,children:[(0,t.jsx)(x.Z,{size:20}),(0,t.jsx)(c.Z,{children:"Loading categories..."})]}):(0,t.jsx)(f.Z,{multiple:!0,id:"categories",options:(null===(n=null===d||void 0===d||null===(r=d.categories)||void 0===r?void 0:r.filter((function(e){return e.type===B.a.PRODUCT})))||void 0===n?void 0:n.map((function(e){return e.name})))||[],onChange:function(e,r){j.setFieldValue("category",r)},value:j.values.category,filterSelectedOptions:!0,renderInput:function(e){return(0,t.jsx)(h.Z,N({},e,{placeholder:"Categories",size:"small",onBlur:j.handleBlur,error:Boolean(j.touched.category&&j.errors.category),helperText:j.touched.category&&j.errors.category}))}})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Phone Number"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"9876543210",name:"number",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.number,error:Boolean(j.touched.number&&j.errors.number),helperText:j.touched.number&&j.errors.number})]}),(0,t.jsxs)(s.Z,{sx:{mt:3},children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Address"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"Flat no. - Block - Locality",name:"address",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.address,error:Boolean(j.touched.address&&j.errors.address),helperText:j.touched.address&&j.errors.address})]}),(0,t.jsxs)(s.Z,{sx:{mt:2},display:"flex",gap:2,flexDirection:{xs:"column",sm:"row"},children:[(0,t.jsxs)(s.Z,{width:"100%",children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"State"}),(0,t.jsx)(h.Z,{fullWidth:!0,select:!0,size:"small",name:"state",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.state,error:Boolean(j.touched.state&&j.errors.state),helperText:j.touched.state&&j.errors.state,children:q.map((function(e){return(0,t.jsx)(p.Z,{value:e,children:e},e)}))})]}),(0,t.jsxs)(s.Z,{width:"100%",children:[(0,t.jsx)(c.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Pincode"}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"small",placeholder:"1100XX",name:"pincode",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.pincode,error:Boolean(j.touched.pincode&&j.errors.pincode),helperText:j.touched.pincode&&j.errors.pincode})]})]}),(0,t.jsxs)(s.Z,{sx:{mt:2},display:"flex",gap:2,flexDirection:{xs:"column",sm:"row"},children:[(0,t.jsx)(m.Z,{fullWidth:!0,onClick:o,startIcon:(0,t.jsx)(l.Z,{}),children:"Previous"}),(0,t.jsx)(m.Z,{fullWidth:!0,variant:"contained",type:"submit",disabled:i,children:i?"Signing up...":"Sign up"})]})]})},O=function(){var e=(0,w.useState)(!1),r=e[0],n=e[1],a=(0,w.useState)(1),o=a[0],i=a[1],u=(0,w.useState)({}),l=u[0],h=u[1],x=(0,v.a)().register,f=(0,C.useRouter)();return(0,t.jsx)(g.Z,{sx:{width:500,boxShadow:12,my:1},children:(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(s.Z,{sx:{mb:2},children:(0,t.jsx)(b.default,{href:"/",passHref:!0,children:(0,t.jsx)(m.Z,{startIcon:(0,t.jsx)(d.Z,{}),children:"Back to site"})})}),(0,t.jsx)(y.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(s.Z,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,t.jsx)(c.Z,{variant:"h5",textAlign:"center",children:"Welcome to Petohub"}),(0,t.jsx)(c.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:"Become a member by signing up below."})]}),1===o?(0,t.jsx)(W,{next:function(e){i(2),h((function(r){return N({},r,e)}))}}):(0,t.jsx)(z,{next:function(e){var r=N({},l,e);n(!0),x(r).then((function(e){n(!1),e.success&&(P.ZP.success(e.data),f.push("/"))}))},prev:function(){return i(1)},submitting:r})]})})]})})},_=n(9008),A=function(){return(0,t.jsxs)(s.Z,{width:"100%",display:"flex",justifyContent:"center",children:[(0,t.jsxs)(_.default,{children:[(0,t.jsx)("title",{children:"Petohub | Member"}),(0,t.jsx)("meta",{name:"description",content:"Register to become a part of petohub's community"})]}),(0,t.jsx)(O,{})]})};A.getLayout=function(e){return(0,t.jsx)(a.A,{children:e})};var E=A},78414:function(e,r,n){"use strict";n.d(r,{NL:function(){return o},Eh:function(){return i},hY:function(){return u},C$:function(){return l}});var t,s=n(89991);!function(e){e.CATEGORIES="categories",e.PETS="pets",e.BRANDS="brands",e.PRODUCTS="products"}(t||(t={}));var a=s.h.enhanceEndpoints({addTagTypes:Object.values(t)}).injectEndpoints({endpoints:function(e){return{getCategories:e.query({query:function(){return"category"},providesTags:[t.CATEGORIES]}),getPets:e.query({query:function(){return"pet"},providesTags:[t.PETS]}),getBrands:e.query({query:function(){return"brand"},providesTags:[t.BRANDS]}),getProducts:e.query({query:function(e){return{url:"products",params:e}}})}}}),o=a.useGetCategoriesQuery,i=a.useGetPetsQuery,u=a.useGetBrandsQuery,l=a.useGetProductsQuery},38069:function(e,r,n){"use strict";var t;n.d(r,{a:function(){return t}}),function(e){e.PRODUCT="Product",e.DIRECTORY="Directory",e.SERVICE="Service"}(t||(t={}))}},function(e){e.O(0,[206,931,662,429,333,485,774,888,179],(function(){return r=81798,e(e.s=r);var r}));var r=e.O();_N_E=r}]);