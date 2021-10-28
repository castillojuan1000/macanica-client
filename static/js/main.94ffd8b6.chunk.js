(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{208:function(e,t,n){},209:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),i=n.n(r),o=(n(208),n(40)),s=(n(209),n(12)),l=n(351),j=n(358),u=n(352),d=n(6),m=n(27),b=n.n(m),h=n(357),x=n(370),O=n(368),p=n(2);function g(e){var t=e.handleValueChange,n=e.name,a=e.lastName,c=e.phoneNumber;return Object(p.jsxs)(O.a,{maxWidth:"md",sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(p.jsx)("h1",{children:"Buscar Clientes: "}),Object(p.jsxs)(x.a,{component:"form",sx:{display:"flex",justifyContent:"center","& > :not(style)":{m:2,mb:6,mt:0,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(p.jsx)(h.a,{id:"outlined-name",label:"Nombre",name:"name",value:n,onChange:t}),Object(p.jsx)(h.a,{id:"outlined-name",label:"Apellido",value:a,name:"lastName",onChange:t}),Object(p.jsx)(h.a,{id:"outlined-name",label:"Telefono",name:"telefono",value:c,type:"tel",onChange:t})]})]})}var f=n(32),v=n(376),C=n(378),w=n(339),N=n(132),S=n(375),y=n(379),I=n(356),k=n(374),P=n(371),F=n(372),D=n(134),T=n.n(D),W=n(136),L=n.n(W),E=n(135),A=n.n(E),M=n(133),q=n.n(M),B=n(5),J=n(377),U=n(373),R=n(381),V=n(383),z=n(382),G=n(107),Q=n.n(G),$=n(336),H=a.forwardRef((function(e,t){return Object(p.jsx)($.a,Object(o.a)({direction:"up",ref:t},e))}));function K(e){var t=e.customer,n=a.useState(!1),c=Object(s.a)(n,2),r=c[0],i=c[1],o=function(e){e.stopPropagation(),i(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(F.a,{"aria-label":"delete",color:"error",onClick:function(e){e.stopPropagation(),i(!0)},children:Object(p.jsx)(Q.a,{})}),Object(p.jsxs)(R.a,{open:r,TransitionComponent:H,keepMounted:!0,onClose:o,"aria-describedby":"alert-dialog-slide-description",children:[Object(p.jsx)(z.a,{children:"Estas Seguro Que Deseas Eleminar Este Cliente?"}),Object(p.jsxs)(V.a,{children:[Object(p.jsx)(U.a,{onClick:o,variant:"outlined",color:"success",children:"Cancelar"}),Object(p.jsx)(U.a,{onClick:function(e){e.stopPropagation();var n=t.ID,a="https://mecanica-service.herokuapp.com/delete/customer/".concat(n);b.a.delete(a).then((function(e){JSON.parse(window.localStorage.getItem("customer")).ID===n&&window.localStorage.setItem("customer",JSON.stringify({})),window.location="macanica-client/#/search"})).catch((function(e){console.error("There was an error!",e)})),i(!1)},variant:"outlined",color:"error",children:"Eleminar"})]})]})]})}var X=n(161),Y=n.n(X),Z=n(337),_=Object(Z.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),"& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}}}}));function ee(e){var t=e.customer,n=t.FirstName,c=t.LastName,r=t.Phone,i=_(),o=Object(a.useState)(!1),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(a.useState)(n),m=Object(s.a)(d,2),x=m[0],O=m[1],g=Object(a.useState)(c),f=Object(s.a)(g,2),v=f[0],C=f[1],w=Object(a.useState)(r),N=Object(s.a)(w,2),S=N[0],y=N[1],I=function(e){e.stopPropagation(),O(n),C(c),y(r),u(!1)},k=function(e){e.preventDefault();var n=t.ID,a={FirstName:x,LastName:v,Phone:S},c="https://mecanica-service.herokuapp.com/update/customer/".concat(n);console.log(a),b.a.put(c,a,{headers:{"Content-Type":"application/json"}}).then((function(e){return window.location="macanica-client/#/search"})).catch((function(e){return console.log("error client side",e)})),u(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(F.a,{"aria-label":"edit",color:"warning",onClick:function(e){e.stopPropagation(),e.preventDefault(),u(!0)},children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(R.a,{open:j,onClose:I,onClick:function(e){e.stopPropagation()},children:Object(p.jsxs)("form",{className:i.root,onSubmit:k,children:[Object(p.jsx)(h.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:x,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)(h.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:v,onChange:function(e){return C(e.target.value)}}),Object(p.jsx)(h.a,{required:!0,fullWidth:!0,type:"tel",inputProps:{maxLength:10},id:"phone",label:"Phone Number",name:"phone",autoComplete:"phone",value:S,onChange:function(e){return y(e.target.value)}}),Object(p.jsxs)(V.a,{children:[Object(p.jsx)(U.a,{onClick:I,variant:"outlined",color:"success",children:"Cancelar"}),Object(p.jsx)(U.a,{onClick:k,variant:"outlined",color:"warning",type:"submit",children:"Editar"})]})]})})]})}var te=Object(B.a)(w.a)((function(e){var t,n=e.theme;return t={},Object(d.a)(t,"&.".concat(N.a.head),{backgroundColor:n.palette.common.black,color:n.palette.common.white}),Object(d.a)(t,"&.".concat(N.a.body),{fontSize:14}),t})),ne=Object(B.a)(k.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover}}}));function ae(e){var t=Object(f.a)(),n=e.count,a=e.page,c=e.rowsPerPage,r=e.onPageChange;return Object(p.jsxs)(x.a,{sx:{flexShrink:0,ml:2.5},children:[Object(p.jsx)(F.a,{onClick:function(e){r(e,0)},disabled:0===a,"aria-label":"first page",children:"rtl"===t.direction?Object(p.jsx)(q.a,{}):Object(p.jsx)(T.a,{})}),Object(p.jsx)(F.a,{onClick:function(e){r(e,a-1)},disabled:0===a,"aria-label":"previous page",children:"rtl"===t.direction?Object(p.jsx)(A.a,{}):Object(p.jsx)(L.a,{})}),Object(p.jsx)(F.a,{onClick:function(e){r(e,a+1)},disabled:a>=Math.ceil(n/c)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(p.jsx)(L.a,{}):Object(p.jsx)(A.a,{})}),Object(p.jsx)(F.a,{onClick:function(e){r(e,Math.max(0,Math.ceil(n/c)-1))},disabled:a>=Math.ceil(n/c)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(p.jsx)(T.a,{}):Object(p.jsx)(q.a,{})})]})}function ce(e){var t=e.customers,n=e.showCustomer,c=a.useState(0),r=Object(s.a)(c,2),i=r[0],o=r[1],l=a.useState(10),j=Object(s.a)(l,2),u=j[0],d=j[1],m=i>0?Math.max(0,(1+i)*u-t.length):0;return Object(p.jsx)(S.a,{component:P.a,children:Object(p.jsxs)(v.a,{sx:{minWidth:500},"aria-label":"custom pagination table",children:[Object(p.jsx)(J.a,{children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(te,{children:"Nombre"}),Object(p.jsx)(te,{align:"right",children:"Telefono"}),Object(p.jsx)(te,{align:"right",children:"Editar"}),Object(p.jsx)(te,{align:"right",children:"Eleminar"})]})}),Object(p.jsxs)(C.a,{children:[(u>0?t.slice(i*u,i*u+u):t).map((function(e,t){var a=e.Phone,c=e.FirstName,r=e.LastName,i=a.slice(0,3)+"-"+a.slice(3,6)+"-"+a.slice(6),o=c.charAt(0).toUpperCase()+c.slice(1).trim(),s=r.charAt(0).toUpperCase()+r.slice(1).trim();return Object(p.jsxs)(ne,{onClick:function(){return n(e)},children:[Object(p.jsx)(te,{component:"th",scope:"row",children:Object(p.jsxs)("strong",{children:[o," ",s]})}),Object(p.jsx)(te,{style:{width:160},align:"right",children:Object(p.jsx)("strong",{children:i})}),Object(p.jsx)(te,{style:{width:160},align:"right",children:Object(p.jsx)(ee,{customer:e})}),Object(p.jsx)(te,{style:{width:160},align:"right",children:Object(p.jsx)(K,{customer:e})})]},t)})),m>0&&Object(p.jsx)(k.a,{style:{height:53*m},children:Object(p.jsx)(w.a,{colSpan:6})})]}),Object(p.jsx)(y.a,{children:Object(p.jsx)(k.a,{children:Object(p.jsx)(I.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:t.length,rowsPerPage:u,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:function(e,t){o(t)},onRowsPerPageChange:function(e){d(parseInt(e.target.value,10)),o(0)},ActionsComponent:ae})})})]})})}var re=n(162),ie=n.n(re);function oe(e){var t=e.showCustomer,n=Object(a.useState)([]),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(r),j=Object(s.a)(l,2),u=j[0],m=j[1],h=Object(a.useState)({name:"",lastName:"",phoneNumber:""}),x=Object(s.a)(h,2),f=x[0],v=x[1],C=Object(a.useState)({debouncedName:"",debouncedLastName:"",debouncedPhoneNumber:""}),w=Object(s.a)(C,2),N=w[0],S=w[1];Object(a.useEffect)((function(){b.a.get("https://mecanica-service.herokuapp.com/customers").then((function(e){i(e.data)})).catch((function(e){console.error("There was an error!",e)}))}),[]),Object(a.useEffect)((function(){var e=r;N.debouncedName.length>0&&(e=e.filter((function(e){return e.FirstName===N.debouncedName}))),N.debouncedLastName.length>0&&(e=e.filter((function(e){return e.LastName===N.debouncedLastName}))),N.debouncedPhoneNumber.length>0&&(e=e.filter((function(e){return e.Phone===N.debouncedPhoneNumber}))),e=e.sort((function(e,t){return e.FirstName<t.FirstName?-1:e.FirstName>t.FirstName?1:0})),m(e)}),[N.debouncedName,N.debouncedLastName,N.debouncedPhoneNumber,r]);var y=Object(a.useCallback)(ie.a.debounce((function(e,t,n){"name"===t?S(Object(o.a)(Object(o.a)({},n),{},{debouncedName:e})):"lastName"===t?S(Object(o.a)(Object(o.a)({},n),{},{debouncedLastName:e})):"telefono"===t&&S(Object(o.a)(Object(o.a)({},n),{},{debouncedPhoneNumber:e}))}),500),[]);return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(g,{name:f.name,lastName:f.lastName,phoneNumbere:f.phoneNumber,handleValueChange:function(e){v(Object(o.a)(Object(o.a)({},f),{},Object(d.a)({},e.target.name,e.target.value))),y(e.target.value,e.target.name,N)}}),Object(p.jsx)(O.a,{maxWidth:"md",children:Object(p.jsx)(ce,{customers:u,showCustomer:t})})]})}var se=n(346),le=n(343),je=n(353),ue=n(345),de=n(354),me=n(344),be=n(341),he=n(169),xe=n(340),Oe=n(360),pe=n(369),ge=Object(he.a)();function fe(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(p.jsx)(xe.a,{theme:ge,children:Object(p.jsxs)(be.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(le.a,{}),Object(p.jsxs)(de.a,{sx:{marginTop:100,display:"flex",flexDirection:"column",alignItems:"center",height:"100vh"},children:[Object(p.jsx)(me.a,{component:"h1",variant:"h5",children:"A\xf1adir Cliente"}),Object(p.jsx)(de.a,{sx:{mt:3},children:Object(p.jsxs)("form",{onSubmit:function(e){l(!0),c(!1),e.preventDefault();var t=new FormData(e.currentTarget),n={firstName:t.get("firstName").toLocaleLowerCase().trim(),lastName:t.get("lastName").toLocaleLowerCase().trim(),phone:t.get("phone").trim()};t.get("phone").match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)?b.a.post("https://mecanica-service.herokuapp.com/create/customer",n).then((function(e){e.data.hasOwnProperty("Severity")?c(!0):(window.localStorage.setItem("customer",JSON.stringify(e.data)),window.location="macanica-client/#/profile")})).catch((function(e){console.error("There was an error!",e)})):l(!1)},children:[Object(p.jsxs)(ue.a,{container:!0,spacing:2,children:[Object(p.jsx)(ue.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(je.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(p.jsx)(ue.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(je.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(p.jsxs)(ue.a,{item:!0,xs:12,children:[Object(p.jsx)(je.a,{required:!0,fullWidth:!0,type:"tel",inputProps:{maxLength:10},id:"phone",label:"Phone Number",name:"phone",autoComplete:"phone"}),n&&Object(p.jsxs)(Oe.a,{severity:"error",style:{marginTop:10},children:[Object(p.jsx)(pe.a,{children:"Error"}),Object(p.jsx)("strong",{children:"Numero Duplicado!"})]}),!o&&Object(p.jsxs)(Oe.a,{severity:"error",style:{marginTop:10},children:[Object(p.jsx)(pe.a,{children:"Error"}),Object(p.jsx)("strong",{children:"Numero De Telefono No Es Valido!"})]})]})]}),Object(p.jsx)(se.a,{style:{marginTop:20,marginBottom:20,color:"white",background:"#3F51B5"},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:3},children:"A\xf1adir"})]})})]})]})})}var ve=n(364),Ce=n(365),we=n(348),Ne=n(179),Se=n(347),ye=n(163),Ie=n.n(ye);function ke(e){var t=e.customer,n=t.FirstName,c=t.LastName,r=t.Phone,i=r.slice(0,3)+"-"+r.slice(3,6)+"-"+r.slice(6),o=n.charAt(0).toUpperCase()+n.slice(1).trim(),s=c.charAt(0).toUpperCase()+c.slice(1).trim(),l=n.charAt(0).toUpperCase(),j=c.charAt(0).toUpperCase();return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(Se.a,{}),Object(p.jsx)(O.a,{maxWidth:"md",sx:{marginTop:3},children:Object(p.jsx)(x.a,{sx:{flexGrow:1},children:Object(p.jsxs)(ve.a,{container:!0,spacing:2,children:[Object(p.jsxs)(ve.a,{item:!0,sm:6,md:6,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(p.jsxs)(Ce.a,{sx:{bgcolor:we.a[500],marginRight:1,width:50,height:50},children:[l,j]}),Object(p.jsx)(a.Fragment,{children:Object(p.jsxs)(Ne.a,{variant:"h5",gutterBottom:!0,component:"div",children:[o," ",s]})})]}),Object(p.jsxs)(ve.a,{item:!0,sm:6,md:6,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(p.jsx)(Ie.a,{sx:{color:we.a[500],marginRight:1,fontSize:45}}),Object(p.jsx)(Ne.a,{variant:"h5",gutterBottom:!0,component:"div",children:i})]})]})})})]})}function Pe(e){var t=e.customer,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),u=j[0],d=j[1],m=Object(a.useState)(""),g=Object(s.a)(m,2),f=g[0],v=g[1],C=Object(a.useState)(""),w=Object(s.a)(C,2),N=w[0],S=w[1];return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(Se.a,{}),Object(p.jsx)(O.a,{maxWidth:"md",sx:{marginTop:5},children:Object(p.jsx)(x.a,{sx:{width:"100%"},children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={Make:i.trim(),Modelo:u.trim(),Color:f.trim(),VinNumber:N.trim(),CustomerId:t.ID};b.a.post("https://mecanica-service.herokuapp.com/create/car",n).then((function(e){window.location="macanica-client/#/profile",o(""),d(""),v(""),S("")})).catch((function(e){console.error("There was an error adding a car!",e)}))},children:Object(p.jsxs)(ve.a,{container:!0,rowSpacing:3,columnSpacing:{xs:2,sm:2,md:3},justifyContent:"center",alignItems:"center",children:[Object(p.jsx)(ve.a,{container:!0,item:!0,xs:12,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(Ne.a,{variant:"h4",gutterBottom:!0,component:"div",sx:{color:we.a[500]},children:"A\xf1adir vehiculo:"})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Marca",autoComplete:"marca",value:i,onChange:function(e){o(e.target.value)}})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Modelo",autoComplete:"modelo",value:u,onChange:function(e){return d(e.target.value)}})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Color",autoComplete:"color",value:f,onChange:function(e){return v(e.target.value)}})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Vin Number",autoComplete:"vinNumber",inputProps:{maxLength:17},value:N,onChange:function(e){return S(e.target.value)}})}),Object(p.jsxs)(ve.a,{item:!0,xs:4,container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(p.jsx)(U.a,{onClick:function(e){o(""),d(""),v(""),S("")},variant:"outlined",color:"error",children:"Cancelar"}),Object(p.jsx)(U.a,{variant:"outlined",color:"success",type:"submit",children:"A\xf1adir"})]})]})})})})]})}var Fe=n(362),De=n(388),Te=n(387),We=n(166),Le=n.n(We);function Ee(e){var t=e.car,n=(e.expanded,e.panelId,Object(a.useState)("")),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),u=j[0],d=j[1],m=t.ID;return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(Se.a,{}),Object(p.jsx)(O.a,{maxWidth:"md",sx:{marginTop:1},children:Object(p.jsx)(x.a,{sx:{width:"100%"},children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={Comment:i.trim(),Miles:u.trim(),CarId:m};b.a.post("https://mecanica-service.herokuapp.com/create/service",t).then((function(e){window.location="macanica-client/#/profile"})).catch((function(e){console.error("There was an error adding a service to the car",e)})),o(""),d("")},children:Object(p.jsxs)(ve.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:1,md:1},justifyContent:"center",alignItems:"center",children:[Object(p.jsx)(ve.a,{container:!0,item:!0,xs:12,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(Ne.a,{variant:"h6",gutterBottom:!0,component:"div",sx:{color:we.a[500]},children:"A\xf1adir Servicio:"})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,multiline:!0,maxRows:4,id:"outlined-required",label:"Comentarios",value:i,onChange:function(e){o(e.target.value)}})}),Object(p.jsx)(ve.a,{item:!0,xs:6,container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(h.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Miles",value:u,onChange:function(e){return d(e.target.value)}})}),Object(p.jsxs)(ve.a,{item:!0,xs:4,container:!0,justifyContent:"space-around",alignItems:"center",children:[Object(p.jsx)(U.a,{onClick:function(e){o(""),d("")},variant:"outlined",color:"error",children:"Cancelar"}),Object(p.jsx)(U.a,{variant:"outlined",color:"success",type:"submit",children:"A\xf1adir"})]})]})})})})]})}var Ae=n(167),Me=n.n(Ae),qe=n(73),Be=n(390),Je=n(391),Ue=n(392),Re=n(394),Ve=n(350),ze=n(393),Ge=n(349);function Qe(e){var t=e.service,n=new Date(t.CreatedAt);return n=n.toDateString(),Object(p.jsx)(a.Fragment,{children:Object(p.jsxs)(Je.a,{children:[Object(p.jsx)(Ge.a,{color:"text.secondary",children:n}),Object(p.jsxs)(Ue.a,{children:[Object(p.jsx)(ze.a,{variant:"outlined",color:"primary"}),Object(p.jsx)(Re.a,{})]}),Object(p.jsxs)(Ve.a,{children:[Object(p.jsx)("div",{children:t.Comment}),Object(p.jsxs)("div",{children:["Miles: ",t.Miles]})]})]})})}function $e(e){var t=e.services;return Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(Be.a,{position:"right",sx:{marginTop:5},children:t.map((function(e){return Object(p.jsx)(Qe,{service:e},e.ID)}))})})}function He(e){var t=e.car,n=e.expanded,c=e.handlePanel,r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1],j=JSON.parse(window.localStorage.getItem("localStorageExtended")),u=t.ID;Object(a.useEffect)((function(){var e="https://mecanica-service.herokuapp.com/car/".concat(u);b.a.get(e).then((function(e){l(e.data.Services)})).catch((function(e){return console.error("There was an error fetching cars and its services",e)}))}),[u]);return Object(p.jsx)(a.Fragment,{children:Object(p.jsxs)(Fe.a,{expanded:j==="panel".concat(t.ID),onChange:c("panel".concat(t.ID)),children:[Object(p.jsxs)(Te.a,{expandIcon:Object(p.jsx)(Le.a,{sx:{color:qe.a[600],marginRight:1}}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(p.jsx)(Me.a,{sx:{color:we.a[500],marginRight:1}}),Object(p.jsxs)(Ne.a,{sx:{width:"25%",flexShrink:0},children:[Ke(t.Make)," ",Ke(t.Modelo)]}),Object(p.jsx)(Ne.a,{lang:"en",sx:{width:"25%",flexShrink:0},children:Ke(t.Color)}),Object(p.jsx)(Ne.a,{sx:{width:"25%",flexShrink:0},children:Xe(t.VinNumber)}),Object(p.jsx)("div",{sx:{width:"25%",flexShrink:0},children:Object(p.jsx)(F.a,{"aria-label":"delete",color:"error",onClick:function(e){e.stopPropagation();var t="https://mecanica-service.herokuapp.com/delete/car/".concat(u);b.a.delete(t).then((function(e){return window.location="macanica-client/#/profile"})).catch((function(e){console.error("There was an error!",e)}))},children:Object(p.jsx)(Q.a,{})})})]}),Object(p.jsxs)(De.a,{children:[Object(p.jsx)(Ee,{car:t,expanded:n,panelId:"panel".concat(t.ID)}),Object(p.jsx)($e,{services:o})]})]},t.ID)})}function Ke(e){return e.charAt(0).toUpperCase()+e.slice(1).trim()}function Xe(e){return e.split("").map((function(e){return+e?e:e.toUpperCase()})).join("")}function Ye(e){var t=e.cars,n=c.a.useState(JSON.parse(window.localStorage.getItem("localStorageExtended"))),r=Object(s.a)(n,2),i=r[0],o=r[1],l=function(e){return function(t,n){o(!!n&&e);var a=!!n&&e;window.localStorage.setItem("localStorageExtended",JSON.stringify(a))}};return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(Se.a,{}),Object(p.jsx)(O.a,{maxWidth:"md",sx:{marginTop:15,marginBottom:5},children:t.map((function(e){return Object(p.jsx)(He,{car:e,expanded:i,handlePanel:l},e.ID)}))})]})}function Ze(e){var t=e.customer,n=Object(a.useState)([]),c=Object(s.a)(n,2),r=c[0],i=c[1],o=t.ID;return Object(a.useEffect)((function(){var e="https://mecanica-service.herokuapp.com/customer/".concat(o);b.a.get(e).then((function(e){return i(e.data.Cars)}))}),[o]),Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(ke,{customer:t}),Object(p.jsx)(Pe,{customer:t}),Object(p.jsx)(Ye,{cars:r})]})}var _e=n(380);function et(e){var t=e.selectCustomer,n=Object(p.jsx)(U.a,{variant:"outlined",color:"success",onClick:function(){return t()},sx:{marginTop:1},children:"Seleccionar Cliente"});return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(Se.a,{}),Object(p.jsx)(O.a,{maxWidth:"sm",children:Object(p.jsx)(_e.a,{message:"Selecciona Un Cliente Antes De Continuar En Esta Pagina",action:n,sx:{marginTop:5,boxShadow:3,borderRadius:4,p:4,minWidth:300,fontSize:18}})})]})}function tt(e){var t=e.customer,n=e.selectCustomer,c=JSON.parse(window.localStorage.getItem("customer"))||t;return Object(p.jsxs)(a.Fragment,{children:[!Object.keys(c).length>0&&Object(p.jsx)(et,{selectCustomer:n}),Object.keys(c).length>0&&Object(p.jsx)(Ze,{customer:c})]})}function nt(e){var t=e.match,n=e.history,r=t.params.page,i=Object(a.useState)({}),o=Object(s.a)(i,2),d=o[0],m=o[1],b={0:"create",1:"search",2:"profile"},h=c.a.useState({create:0,search:1,profile:2}[r]),x=Object(s.a)(h,2),O=x[0],g=x[1];return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(l.a,{position:"static",children:Object(p.jsxs)(j.a,{value:O,onChange:function(e,t){n.push("/".concat(b[t])),g(t)},centered:!0,children:[Object(p.jsx)(u.a,{label:"A\xf1adir Cliente"}),Object(p.jsx)(u.a,{label:"Buscar Cliente"}),Object(p.jsx)(u.a,{label:"Perfil Del Cliente"})]})}),0===O&&Object(p.jsx)(fe,{}),1===O&&Object(p.jsx)(oe,{showCustomer:function(e){m(e),g(2),n.push("macanica-client/#/profile"),window.localStorage.setItem("customer",JSON.stringify(e))}}),2===O&&Object(p.jsx)(tt,{customer:d,selectCustomer:function(){g(1)}})]})}var at=n(24);var ct=function(){return Object(p.jsxs)(at.d,{children:[Object(p.jsx)(at.a,{exact:!0,from:"/",to:"/create"}),Object(p.jsx)(at.b,{exact:!0,path:"/:page?",render:function(e){return Object(p.jsx)(nt,Object(o.a)({},e))}})]})},rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,395)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},it=n(127);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsxs)(it.a,{children:[Object(p.jsx)(le.a,{}),Object(p.jsx)(ct,{})]})}),document.getElementById("root")),rt()}},[[239,1,2]]]);
//# sourceMappingURL=main.94ffd8b6.chunk.js.map