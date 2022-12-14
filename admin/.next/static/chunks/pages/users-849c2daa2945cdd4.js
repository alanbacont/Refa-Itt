(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{7476:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return r(62378)}])},49424:function(n,e,r){"use strict";r.d(e,{JN:function(){return u},SX:function(){return d},e3:function(){return l},vu:function(){return h}});var i=r(7297),t=r(17283);function s(){var n=(0,i.Z)(["\n  query {\n    getAllProducts {\n      id\n      nombre\n      descripcion\n      disponibilidad\n      categorias\n    }\n  }\n"]);return s=function(){return n},n}function c(){var n=(0,i.Z)(["\n  query GetProduct($id: ID) {\n    getProduct(id: $id) {\n      nombre\n      marca\n      precio\n      descripcion\n      imagenes\n      categorias\n      disponibilidad\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=(0,i.Z)(["\n  query {\n    getAllUsers {\n      nombre\n      email\n      usuario\n      telefono\n      tipo\n      id\n      createdAt\n    }\n  }\n"]);return o=function(){return n},n}function a(){var n=(0,i.Z)(["\n  query GetUser($id: ID) {\n    getUser(id: $id) {\n      nombre\n      usuario\n      email\n      tipo\n      telefono\n    }\n  }\n"]);return a=function(){return n},n}var l=(0,t.Ps)(s()),d=(0,t.Ps)(c()),u=(0,t.Ps)(o()),h=(0,t.Ps)(a())},84747:function(n,e,r){"use strict";var i=r(85893);(0,r(54235).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},97169:function(n,e,r){"use strict";r.d(e,{o:function(){return t}});var i=r(85893),t=(0,r(54235).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},2248:function(n,e,r){"use strict";var i=r(85893);(0,r(54235).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},62378:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return L}});var i=r(85893),t=r(9008),s=r.n(t),c=r(61953),o=r(36336),a=r(26042),l=r(69396),d=r(99534),u=r(67294),h=r(51964),x=r.n(h),f=r(45697),j=r.n(f),Z=r(49837),p=r(90244),m=r(93978),v=r(69417),g=r(5605),w=r(31362),P=r(39807),y=r(44731),b=r(29630),_=r(20271),C=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.replace(/\s+/," ").split(" ").slice(0,2).map((function(n){return n&&n[0].toUpperCase()})).join("")},R=r(77957),k=r(41664),U=r.n(k),z=function(n){var e=n.customers,r=(0,d.Z)(n,["customers"]),t=(0,u.useState)([]),s=t[0],o=t[1],h=(0,u.useState)(10),f=h[0],j=h[1],k=(0,u.useState)(0),z=k[0],E=k[1],N=(0,u.useState)();N[0],N[1];return(0,i.jsxs)(Z.Z,(0,l.Z)((0,a.Z)({},r),{children:[(0,i.jsx)(x(),{children:(0,i.jsx)(c.Z,{sx:{minWidth:1050},children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(m.Z,{children:(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(g.Z,{padding:"checkbox",children:(0,i.jsx)(w.Z,{checked:s.length===e.length,color:"primary",indeterminate:s.length>0&&s.length<e.length,onChange:function(n){var r;r=n.target.checked?e.map((function(n){return n.id})):[],o(r)}})}),(0,i.jsx)(g.Z,{children:"Nombre"}),(0,i.jsx)(g.Z,{children:"Usuario"}),(0,i.jsx)(g.Z,{children:"Email"}),(0,i.jsx)(g.Z,{children:"Tipo"}),(0,i.jsx)(g.Z,{children:"Telefono de registro"}),(0,i.jsx)(g.Z,{children:"Editar"})]})}),(0,i.jsx)(P.Z,{children:e.slice(0,f).map((function(n){return(0,i.jsxs)(v.Z,{hover:!0,selected:-1!==s.indexOf(n.id),children:[(0,i.jsx)(g.Z,{padding:"checkbox",children:(0,i.jsx)(w.Z,{checked:-1!==s.indexOf(n.id),onChange:function(e){return function(n,e){var r=s.indexOf(e),i=[];-1===r?i=i.concat(s,e):0===r?i=i.concat(s.slice(1)):r===s.length-1?i=i.concat(s.slice(0,-1)):r>0&&(i=i.concat(s.slice(0,r),s.slice(r+1))),o(i)}(0,n.id)},value:"true"})}),(0,i.jsx)(g.Z,{children:(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(y.Z,{sx:{mr:2},children:C(n.nombre)}),(0,i.jsx)(b.Z,{color:"textPrimary",variant:"body1",children:n.nombre})]})}),(0,i.jsx)(g.Z,{children:n.usuario}),(0,i.jsx)(g.Z,{children:n.email}),(0,i.jsx)(g.Z,{children:n.tipo}),(0,i.jsx)(g.Z,{children:n.telefono}),(0,i.jsx)(g.Z,{children:(0,i.jsx)(U(),{href:{pathname:"/users-update",query:{id:n.id}},children:(0,i.jsx)(R.Z,{})})})]},n.id)}))})]})})}),(0,i.jsx)(_.Z,{component:"div",count:e.length,onPageChange:function(n,e){E(e)},onRowsPerPageChange:function(n){j(n.target.value)},page:z,rowsPerPage:f,rowsPerPageOptions:[5,10,25]})]}))};z.propTypes={customers:j().array.isRequired};var E=r(75084),N=r(91359),S=r(67836),A=r(9041),q=r(81645),O=r(97169),I=(r(2248),r(84747),function(n){return(0,i.jsxs)(c.Z,(0,l.Z)((0,a.Z)({},n),{children:[(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,i.jsx)(b.Z,{sx:{m:1},variant:"h4",children:"Usuarios"}),(0,i.jsx)(c.Z,{sx:{m:1},children:(0,i.jsx)(E.Z,{color:"primary",variant:"contained",href:"/users-add",children:"A\xf1adir usuarios"})})]}),(0,i.jsx)(c.Z,{sx:{mt:3},children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(N.Z,{children:(0,i.jsx)(c.Z,{sx:{maxWidth:500},children:(0,i.jsx)(S.Z,{fullWidth:!0,InputProps:{startAdornment:(0,i.jsx)(A.Z,{position:"start",children:(0,i.jsx)(q.Z,{color:"action",fontSize:"small",children:(0,i.jsx)(O.o,{})})})},placeholder:"Buscar usuario",variant:"outlined"})})})})})]}))}),M=r(35909),T=r(37887),W=r(49424);function B(){var n=(0,T.a)(W.JN),e=(n.error,n.loading,n.data),r=(0,u.useState)([]),t=r[0],a=r[1];return(0,u.useEffect)((function(){e&&a(e.getAllUsers)}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:"Usuarios - Refaccionaria Ruiz"})}),(0,i.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsxs)(o.Z,{maxWidth:!1,children:[(0,i.jsx)(I,{}),(0,i.jsx)(c.Z,{sx:{mt:3},children:(0,i.jsx)(z,{customers:t})})]})})]})}B.getLayout=function(n){return(0,i.jsx)(M.c,{children:n})};var L=B}},function(n){n.O(0,[448,583,383,836,878,275,173,551,492,909,774,888,179],(function(){return e=7476,n(n.s=e);var e}));var e=n.O();_N_E=e}]);