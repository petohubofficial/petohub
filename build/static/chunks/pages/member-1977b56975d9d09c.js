(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{81798:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/member",function(){return n(76026)}])},36881:function(e,r,n){"use strict";n.d(r,{A:function(){return i}});var t=n(85893),s=n(39187),a=n(11163),o=n(67294),i=function(e){var r=e.children,n=(0,s.a)(),i=(0,a.useRouter)(),u=(0,o.useState)(!1),l=u[0],d=u[1];return(0,o.useEffect)((function(){i.isReady&&(n.isAuthenticated?i.push("/"):d(!0))}),[i.isReady]),l?(0,t.jsx)(t.Fragment,{children:r}):null}},39187:function(e,r,n){"use strict";n.d(r,{a:function(){return a}});var t=n(67294),s=n(22754),a=function(){return(0,t.useContext)(s.Vo)}},76026:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return E}});var t,s=n(85893),a=n(36822),o=n(36881),i=n(45697),u=n(52186),l=n(62651),d=n(73509),c=n(94669),h=n(15861),m=n(40099),x=n(83321),f=n(98456),p=n(57333),g=n(18972),j=n(66242),y=n(44267),Z=n(27948),v=n(82175),b=n(39187),C=n(41664),w=n(11163),P=n(67294),B=n(74931),S=n(78414);!function(e){e.PRODUCT="Product",e.DIRECTORY="Directory",e.SERVICE="Service"}(t||(t={}));var T=n(74231),q=JSON.parse('["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]');function R(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){R(e,r,n[r])}))}return e}var W=function(e){var r=e.next,n=(0,P.useState)(!1),t=n[0],o=n[1],d=(0,P.useState)(!1),c=d[0],f=d[1],p=(0,v.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:T.Ry({name:T.Z_().required("Required"),email:T.Z_().email("Invalid email address").required("Required"),password:T.Z_().required("Required"),confirmPassword:T.Z_().required("Required").oneOf([T.iH("password")],"Passwords must match")}),onSubmit:function(e){return r(e)}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.Z,{component:"form",onSubmit:p.handleSubmit,width:"100%",children:[(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Personal Name"}),(0,s.jsx)(m.Z,{autoFocus:!0,fullWidth:!0,size:"small",placeholder:"Your name",name:"name",type:"text",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.name,error:Boolean(p.touched.name&&p.errors.name),helperText:p.touched.name&&p.errors.name})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Email"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"example@company.com",name:"email",type:"email",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.email,error:Boolean(p.touched.email&&p.errors.email),helperText:p.touched.email&&p.errors.email})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Password"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"password",type:t?"text":"password",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.password,error:Boolean(p.touched.password&&p.errors.password),helperText:p.touched.password&&p.errors.password,InputProps:{endAdornment:t?(0,s.jsx)(i.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return o(!1)}}):(0,s.jsx)(u.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return o(!0)}})}})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Confirm Password"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"********",name:"confirmPassword",type:c?"text":"password",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.confirmPassword,error:Boolean(p.touched.confirmPassword&&p.errors.confirmPassword),helperText:p.touched.confirmPassword&&p.errors.confirmPassword,InputProps:{endAdornment:c?(0,s.jsx)(i.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return f(!1)}}):(0,s.jsx)(u.Z,{color:"action",sx:{cursor:"pointer"},onClick:function(){return f(!0)}})}})]}),(0,s.jsx)(x.Z,{sx:{mt:3},fullWidth:!0,variant:"contained",type:"submit",endIcon:(0,s.jsx)(l.Z,{}),children:"Next"})]}),(0,s.jsx)(a.Z,{sx:{mt:3},width:"100%",children:(0,s.jsxs)(h.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:["Already have an account?",(0,s.jsx)(C.default,{href:"/login",passHref:!0,children:(0,s.jsx)(h.Z,{component:"a",fontWeight:"bold",fontSize:14,color:"primary.main",sx:{ml:1},children:"Login"})})]})})]})},z=function(e){var r,n,o=e.next,i=e.prev,u=e.submitting,l=(0,S.NL)(),c=l.data,j=l.isLoading,y=(0,v.TA)({initialValues:{storeName:"",category:[],number:"",address:"",state:"Delhi",pincode:"",role:"Client"},validationSchema:T.Ry({storeName:T.Z_().required("Required"),category:T.IX().min(1,"Required").required("Required"),number:T.Z_().required("Required"),address:T.Z_().required("Required"),state:T.Z_().required("Required"),pincode:T.Z_().required("Required")}),onSubmit:function(e){return o(e)}});return(0,s.jsxs)(a.Z,{component:"form",noValidate:!0,onSubmit:y.handleSubmit,width:"100%",children:[(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Name"}),(0,s.jsx)(m.Z,{autoFocus:!0,fullWidth:!0,size:"small",placeholder:"Your business name",name:"storeName",type:"text",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.storeName,error:Boolean(y.touched.storeName&&y.errors.storeName),helperText:y.touched.storeName&&y.errors.storeName})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Business Categorisation"}),j?(0,s.jsxs)(a.Z,{display:"flex",gap:2,children:[(0,s.jsx)(f.Z,{size:20}),(0,s.jsx)(h.Z,{children:"Loading categories..."})]}):(0,s.jsx)(p.Z,{multiple:!0,id:"categories",options:(null===(n=null===c||void 0===c||null===(r=c.categories)||void 0===r?void 0:r.filter((function(e){return e.type===t.PRODUCT})))||void 0===n?void 0:n.map((function(e){return e.name})))||[],onChange:function(e,r){y.setFieldValue("category",r)},value:y.values.category,filterSelectedOptions:!0,renderInput:function(e){return(0,s.jsx)(m.Z,N({},e,{placeholder:"Categories",size:"small",onBlur:y.handleBlur,error:Boolean(y.touched.category&&y.errors.category),helperText:y.touched.category&&y.errors.category}))}})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Phone Number"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"9876543210",name:"number",type:"text",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.number,error:Boolean(y.touched.number&&y.errors.number),helperText:y.touched.number&&y.errors.number})]}),(0,s.jsxs)(a.Z,{sx:{mt:3},children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Your Address"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"Flat no. - Block - Locality",name:"address",type:"text",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.address,error:Boolean(y.touched.address&&y.errors.address),helperText:y.touched.address&&y.errors.address})]}),(0,s.jsxs)(a.Z,{sx:{mt:2},display:"flex",gap:2,flexDirection:{xs:"column",sm:"row"},children:[(0,s.jsxs)(a.Z,{width:"100%",children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"State"}),(0,s.jsx)(m.Z,{fullWidth:!0,select:!0,size:"small",name:"state",type:"text",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.state,error:Boolean(y.touched.state&&y.errors.state),helperText:y.touched.state&&y.errors.state,children:q.map((function(e){return(0,s.jsx)(g.Z,{value:e,children:e},e)}))})]}),(0,s.jsxs)(a.Z,{width:"100%",children:[(0,s.jsx)(h.Z,{fontSize:15,fontWeight:600,sx:{my:1},children:"Pincode"}),(0,s.jsx)(m.Z,{fullWidth:!0,size:"small",placeholder:"1100XX",name:"pincode",type:"text",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.pincode,error:Boolean(y.touched.pincode&&y.errors.pincode),helperText:y.touched.pincode&&y.errors.pincode})]})]}),(0,s.jsxs)(a.Z,{sx:{mt:2},display:"flex",gap:2,flexDirection:{xs:"column",sm:"row"},children:[(0,s.jsx)(x.Z,{fullWidth:!0,onClick:i,startIcon:(0,s.jsx)(d.Z,{}),children:"Previous"}),(0,s.jsx)(x.Z,{fullWidth:!0,variant:"contained",type:"submit",disabled:u,children:"Signup"})]})]})},O=function(){var e=(0,P.useState)(!1),r=e[0],n=e[1],t=(0,P.useState)(1),o=t[0],i=t[1],u=(0,P.useState)({}),l=u[0],d=u[1],m=(0,b.a)().register,f=(0,w.useRouter)();return(0,s.jsx)(j.Z,{sx:{width:500,boxShadow:12,my:1},children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(a.Z,{sx:{mb:2},children:(0,s.jsx)(C.default,{href:"/",passHref:!0,children:(0,s.jsx)(x.Z,{startIcon:(0,s.jsx)(c.Z,{}),children:"Back to site"})})}),(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(a.Z,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,s.jsx)(h.Z,{variant:"h5",textAlign:"center",children:"Welcome to Petohub"}),(0,s.jsx)(h.Z,{variant:"body2",textAlign:"center",color:"text.secondary",children:"Become a member by signing up below."})]}),1===o?(0,s.jsx)(W,{next:function(e){i(2),d((function(r){return N({},r,e)}))}}):(0,s.jsx)(z,{next:function(e){var r=N({},l,e);n(!0),m(r).then((function(e){n(!1),e.success&&(B.ZP.success(e.data),f.push("/"))}))},prev:function(){return i(1)},submitting:r})]})})]})})},_=n(9008),A=function(){return(0,s.jsxs)(a.Z,{width:"100%",display:"flex",justifyContent:"center",children:[(0,s.jsxs)(_.default,{children:[(0,s.jsx)("title",{children:"Petohub | Member"}),(0,s.jsx)("meta",{name:"description",content:"Register to become a part of petohub's community"})]}),(0,s.jsx)(O,{})]})};A.getLayout=function(e){return(0,s.jsx)(o.A,{children:e})};var E=A},78414:function(e,r,n){"use strict";n.d(r,{NL:function(){return o},Eh:function(){return i},C$:function(){return u}});var t,s=n(99850);!function(e){e.CATEGORIES="categories",e.PETS="pets",e.BRANDS="brands",e.PRODUCTS="products"}(t||(t={}));var a=s.h.enhanceEndpoints({addTagTypes:Object.values(t)}).injectEndpoints({endpoints:function(e){return{getCategories:e.query({query:function(){return"category"},providesTags:[t.CATEGORIES]}),getPets:e.query({query:function(){return"pet"},providesTags:[t.PETS]}),getBrands:e.query({query:function(){return"brand"},providesTags:[t.BRANDS]}),getProducts:e.query({query:function(e){return{url:"products",params:e}}})}}}),o=a.useGetCategoriesQuery,i=a.useGetPetsQuery,u=(a.useGetBrandsQuery,a.useGetProductsQuery)}},function(e){e.O(0,[206,99,662,248,725,774,888,179],(function(){return r=81798,e(e.s=r);var r}));var r=e.O();_N_E=r}]);