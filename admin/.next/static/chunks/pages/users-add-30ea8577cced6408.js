(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{9144:function(n,e,r){"use strict";var t=r(63366),i=r(87462),o=r(67294),a=r(95408),u=r(98700),c=r(39707),l=r(59766),s=r(81719),d=r(78884),f=r(85893);const m=["component","direction","spacing","divider","children"];function p(n,e){const r=o.Children.toArray(n).filter(Boolean);return r.reduce(((n,t,i)=>(n.push(t),i<r.length-1&&n.push(o.cloneElement(e,{key:`separator-${i}`})),n)),[])}const g=(0,s.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>[e.root]})((({ownerState:n,theme:e})=>{let r=(0,i.Z)({display:"flex",flexDirection:"column"},(0,a.k9)({theme:e},(0,a.P$)({values:n.direction,breakpoints:e.breakpoints.values}),(n=>({flexDirection:n}))));if(n.spacing){const t=(0,u.hB)(e),i=Object.keys(e.breakpoints.values).reduce(((e,r)=>(("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e)),{}),o=(0,a.P$)({values:n.direction,base:i}),c=(0,a.P$)({values:n.spacing,base:i});"object"===typeof o&&Object.keys(o).forEach(((n,e,r)=>{if(!o[n]){const t=e>0?o[r[e-1]]:"column";o[n]=t}}));const s=(e,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=r?o[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,u.NA)(t,e)}};var i};r=(0,l.Z)(r,(0,a.k9)({theme:e},c,s))}return r=(0,a.dt)(e.breakpoints,r),r})),v=o.forwardRef((function(n,e){const r=(0,d.Z)({props:n,name:"MuiStack"}),o=(0,c.Z)(r),{component:a="div",direction:u="column",spacing:l=0,divider:s,children:v}=o,$=(0,t.Z)(o,m),b={direction:u,spacing:l};return(0,f.jsx)(g,(0,i.Z)({as:a,ownerState:b,ref:e},$,{children:s?p(v,s):v}))}));e.Z=v},91495:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users-add",function(){return r(81716)}])},60949:function(n,e,r){"use strict";r.d(e,{AX:function(){return p},AZ:function(){return v},IG:function(){return d},Q7:function(){return f},qK:function(){return m},u7:function(){return g}});var t=r(7297),i=r(17283);function o(){var n=(0,t.Z)(["\n  mutation CreateProduct(\n    $nombre: String\n    $marca: String\n    $precio: String\n    $categorias: String\n    $descripcion: String\n    $disponibilidad: String\n  ) {\n    createProduct(\n      nombre: $nombre\n      marca: $marca\n      precio: $precio\n      categorias: $categorias\n      descripcion: $descripcion\n      disponibilidad: $disponibilidad\n    ) {\n      nombre\n    }\n  }\n"]);return o=function(){return n},n}function a(){var n=(0,t.Z)(["\n  mutation UpdateProduct(\n    $id: String\n    $nombre: String\n    $precio: String\n    $marca: String\n    $categorias: String\n    $descripcion: String\n    $disponibilidad: String\n  ) {\n    updateProduct(\n      id: $id\n      nombre: $nombre\n      precio: $precio\n      marca: $marca\n      categorias: $categorias\n      descripcion: $descripcion\n      disponibilidad: $disponibilidad\n    ) {\n      successful\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,t.Z)(["\n  mutation CreateUser(\n    $nombre: String\n    $usuario: String\n    $pass: String\n    $email: String\n    $telefono: String\n    $tipo: String\n  ) {\n    createUser(\n      nombre: $nombre\n      usuario: $usuario\n      pass: $pass\n      email: $email\n      telefono: $telefono\n      tipo: $tipo\n    ) {\n      token\n    }\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,t.Z)(["\n  mutation UpdateUser(\n    $id: String\n    $nombre: String\n    $usuario: String\n    $tipo: String\n    $telefono: String\n    $email: String\n  ) {\n    updateUser(\n      id: $id\n      nombre: $nombre\n      usuario: $usuario\n      tipo: $tipo\n      telefono: $telefono\n      email: $email\n    ) {\n      successful\n    }\n  }\n"]);return c=function(){return n},n}function l(){var n=(0,t.Z)(["\n  mutation DeleteProduct($id: ID) {\n    deleteProduct(id: $id) {\n      id\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=(0,t.Z)(["\n  mutation DeleteUser($id: ID){\n    deleteUser(id: $id){\n      id\n    }\n  }\n"]);return s=function(){return n},n}var d=(0,i.Ps)(o()),f=(0,i.Ps)(a()),m=(0,i.Ps)(u()),p=(0,i.Ps)(c()),g=(0,i.Ps)(l()),v=(0,i.Ps)(s())},81716:function(n,e,r){"use strict";r.r(e);var t=r(70603),i=r(85893),o=r(67294),a=r(75084),u=r(9144),c=r(61953),l=r(67836),s=r(58316),d=r(52014),f=r(55343),m=r(37961),p=r(35909),g=r(9008),v=r.n(g),$=r(60949),b=r(50319);function h(){var n=(0,o.useState)(""),e=n[0],r=n[1],p=(0,o.useState)(""),g=p[0],h=p[1],x=(0,o.useState)(""),S=x[0],Z=x[1],j=(0,o.useState)("Usuario"),y=j[0],_=j[1],k=(0,o.useState)(),w=k[0],P=k[1],C=(0,t.Z)((0,b.D)($.qK),2),U=C[0],A=C[1],E=(A.data,A.loading,A.error);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v(),{children:(0,i.jsx)("title",{children:"Usuarios - A\xf1adir Usuario"})}),(0,i.jsxs)(c.Z,{component:"form",sx:{"& .MuiTextField-root":{m:6,width:"40ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(n){n.preventDefault(),U({variables:{nombre:e,usuario:w,pass:"refa",email:g,telefono:S,tipo:y}}),E&&console.log(E),n.target.reset()},children:[(0,i.jsx)("h1",{style:{marginLeft:50,marginTop:20},children:"A\xf1adir Usuario"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{id:"outlined-textarea",label:"Nombre",placeholder:"Nombre",multiline:!0,onChange:function(n){r(n.target.value)}}),(0,i.jsx)(l.Z,{id:"outlined-textarea",label:"Usuario",placeholder:"Usuario",multiline:!0,onChange:function(n){P(n.target.value)}}),(0,i.jsx)(l.Z,{id:"outlined-textarea",label:"E-mail",placeholder:"usuario@correo.com",onChange:function(n){h(n.target.value)}}),(0,i.jsx)(l.Z,{id:"outlined-textarea",label:"Tel\xe9fono",placeholder:"xxx-xxx-xxxx",multiline:!0,onChange:function(n){Z(n.target.value)}}),(0,i.jsx)(c.Z,{sx:{minWidth:120},children:(0,i.jsxs)(f.Z,{children:[(0,i.jsx)(s.Z,{id:"demo-simple-select-label",sx:{marginLeft:6},children:"Tipo"}),(0,i.jsxs)(m.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:y,label:"Tipo",onChange:function(n){_(n.target.value)},sx:{marginLeft:6},children:[(0,i.jsx)(d.Z,{value:"Usuario",children:"Usuario"}),(0,i.jsx)(d.Z,{value:"Administrador",children:"Administrador"})]})]})})]}),(0,i.jsxs)(u.Z,{direction:"row",spacing:50,m:6,children:[(0,i.jsx)(a.Z,{variant:"outlined",href:"products",children:"Cancelar"}),(0,i.jsx)(a.Z,{variant:"contained",type:"submit",children:"A\xf1adir"})]})]})]})}h.getLayout=function(n){return(0,i.jsx)(p.c,{children:n})},e.default=h},50319:function(n,e,r){"use strict";r.d(e,{D:function(){return s}});var t=r(70655),i=r(67294),o=r(14012),a=r(82152),u=r(14692),c=r(30990),l=r(66252);function s(n,e){var r=(0,l.x)(null===e||void 0===e?void 0:e.client);(0,u.Vp)(n,u.n_.Mutation);var s=(0,i.useState)({called:!1,loading:!1,client:r}),d=s[0],f=s[1],m=(0,i.useRef)({result:d,mutationId:0,isMounted:!0,client:r,mutation:n,options:e});Object.assign(m.current,{client:r,options:e,mutation:n});var p=(0,i.useCallback)((function(n){void 0===n&&(n={});var e=m.current,r=e.client,i=e.options,u=e.mutation,l=(0,t.__assign)((0,t.__assign)({},i),{mutation:u});m.current.result.loading||l.ignoreResults||!m.current.isMounted||f(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var s=++m.current.mutationId,d=(0,o.J)(l,n);return r.mutate(d).then((function(e){var t,i,o,u=e.data,l=e.errors,p=l&&l.length>0?new c.c({graphQLErrors:l}):void 0;if(s===m.current.mutationId&&!d.ignoreResults){var g={called:!0,loading:!1,data:u,error:p,client:r};m.current.isMounted&&!(0,a.D)(m.current.result,g)&&f(m.current.result=g)}return null===(i=null===(t=m.current.options)||void 0===t?void 0:t.onCompleted)||void 0===i||i.call(t,e.data,d),null===(o=n.onCompleted)||void 0===o||o.call(n,e.data,d),e})).catch((function(e){var t,i,o,u;if(s===m.current.mutationId&&m.current.isMounted){var c={loading:!1,error:e,data:void 0,called:!0,client:r};(0,a.D)(m.current.result,c)||f(m.current.result=c)}if((null===(t=m.current.options)||void 0===t?void 0:t.onError)||d.onError)return null===(o=null===(i=m.current.options)||void 0===i?void 0:i.onError)||void 0===o||o.call(i,e,d),null===(u=n.onError)||void 0===u||u.call(n,e,d),{data:void 0,errors:e};throw e}))}),[]),g=(0,i.useCallback)((function(){m.current.isMounted&&f({called:!1,loading:!1,client:r})}),[]);return(0,i.useEffect)((function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}}),[]),[p,(0,t.__assign)({reset:g},d)]}},70603:function(n,e,r){"use strict";function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"===typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return i}})}},function(n){n.O(0,[448,583,383,836,878,275,909,774,888,179],(function(){return e=91495,n(n.s=e);var e}));var e=n.O();_N_E=e}]);