"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{35909:function(e,r,n){n.d(r,{c:function(){return re}});var o=n(14924),t=n(85893),s=n(67294),i=n(61953),l=n(81719),a=n(11163),c=n.n(a),d=n(45697),u=n.n(d),h=n(65462),x=function(e){var r=e.children,n=(0,a.useRouter)(),o=(0,h.Eu)().isAuthenticated,t=(0,s.useRef)(!1),i=(0,s.useState)(!1),l=i[0],c=i[1];return(0,s.useEffect)((function(){n.isReady&&(t.current||(t.current=!0,o?c(!0):(console.log("Not authenticated, redirecting"),n.replace({pathname:"/sign-in",query:"/"!==n.asPath?{continueUrl:n.asPath}:void 0}).catch(console.error))))}),[n.isReady]),l?r:null};x.propTypes={children:u().node};var p=n(26042),C=n(69396),f=n(99534),g=n(16829),j=n(85050),v=n(20784),Z=n(80562),m=n(1893),w=n(33821),b=n(44731),y=n(326),S=n(42761),z=n(54235),R=(0,z.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),"Bell"),k=(0,z.Z)((0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.5999 9.99999C19.5999 12.5461 18.5885 14.9879 16.7881 16.7882C14.9878 18.5886 12.546 19.6 9.9999 19.6C7.45382 19.6 5.01203 18.5886 3.21168 16.7882C1.41133 14.9879 0.399902 12.5461 0.399902 9.99999C0.399902 7.45392 1.41133 5.01212 3.21168 3.21177C5.01203 1.41142 7.45382 0.399994 9.9999 0.399994C12.546 0.399994 14.9878 1.41142 16.7881 3.21177C18.5885 5.01212 19.5999 7.45392 19.5999 9.99999ZM12.3999 6.39999C12.3999 7.03651 12.147 7.64696 11.697 8.09705C11.2469 8.54714 10.6364 8.79999 9.9999 8.79999C9.36338 8.79999 8.75293 8.54714 8.30285 8.09705C7.85276 7.64696 7.5999 7.03651 7.5999 6.39999C7.5999 5.76347 7.85276 5.15302 8.30285 4.70294C8.75293 4.25285 9.36338 3.99999 9.9999 3.99999C10.6364 3.99999 11.2469 4.25285 11.697 4.70294C12.147 5.15302 12.3999 5.76347 12.3999 6.39999ZM9.9999 11.2C8.85102 11.1998 7.72623 11.5294 6.7592 12.1497C5.79217 12.77 5.02355 13.6549 4.5447 14.6992C5.21991 15.4847 6.05703 16.1149 6.99864 16.5466C7.94024 16.9782 8.96407 17.2011 9.9999 17.2C11.0357 17.2011 12.0596 16.9782 13.0012 16.5466C13.9428 16.1149 14.7799 15.4847 15.4551 14.6992C14.9762 13.6549 14.2076 12.77 13.2406 12.1497C12.2736 11.5294 11.1488 11.1998 9.9999 11.2Z"})}),"UserCircle"),P=(0,z.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"Users"),M=n(47568),F=n(70655),B=n(43963),T=n(29630),H=n(852),E=n(52014),L=n(21486),V=function(e){var r=e.anchorEl,n=e.onClose,o=e.open,l=(0,f.Z)(e,["anchorEl","onClose","open"]),a=(0,s.useContext)(h.Vo),d=function(){var e=(0,M.Z)((function(){var e;return(0,F.__generator)(this,(function(r){switch(r.label){case 0:if(null===n||void 0===n||n(),!L.P)return[2];if("true"===globalThis.sessionStorage.getItem("skip-auth"))return globalThis.sessionStorage.removeItem("skip-auth"),c().push("/sign-in").catch(console.error),[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,L.I.signOut()];case 2:return r.sent(),a.signOut(),c().push("/sign-in").catch(console.error),[3,4];case 3:return e=r.sent(),console.error(e),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,t.jsxs)(B.ZP,(0,C.Z)((0,p.Z)({anchorEl:r,anchorOrigin:{horizontal:"left",vertical:"bottom"},onClose:n,open:o,PaperProps:{sx:{width:"300px"}}},l),{children:[(0,t.jsxs)(i.Z,{sx:{py:1.5,px:2},children:[(0,t.jsx)(T.Z,{variant:"overline",children:"Administraci\xf3n"}),(0,t.jsx)(T.Z,{color:"text.secondary",variant:"body2",children:"admin"})]}),(0,t.jsx)(H.Z,{disablePadding:!0,sx:{"& > *":{"&:first-of-type":{borderTopColor:"divider",borderTopStyle:"solid",borderTopWidth:"1px"},padding:"12px 16px"}},children:(0,t.jsx)(E.Z,{onClick:d,children:"Cerrar sesi\xf3n"})})]}))};V.propTypes={anchorEl:u().any,onClose:u().func,open:u().bool.isRequired};var I=(0,g.Z)(j.Z)((function(e){var r=e.theme;return{backgroundColor:r.palette.background.paper,boxShadow:r.shadows[3]}})),A=function(e){var r=e.onSidebarOpen,n=(0,f.Z)(e,["onSidebarOpen"]),o=(0,s.useRef)(null),l=(0,s.useState)(!1),a=l[0],c=l[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I,(0,C.Z)((0,p.Z)({sx:{left:{lg:280},width:{lg:"calc(100% - 280px)"}}},n),{children:(0,t.jsxs)(v.Z,{disableGutters:!0,sx:{minHeight:64,left:0,px:2},children:[(0,t.jsx)(Z.Z,{onClick:r,sx:{display:{xs:"inline-flex",lg:"none"}},children:(0,t.jsx)(y.Z,{fontSize:"small"})}),(0,t.jsx)(m.Z,{title:"Search",children:(0,t.jsx)(Z.Z,{sx:{ml:1},children:(0,t.jsx)(S.Z,{fontSize:"small"})})}),(0,t.jsx)(i.Z,{sx:{flexGrow:1}}),(0,t.jsx)(m.Z,{title:"Notificaciones",children:(0,t.jsx)(Z.Z,{sx:{ml:1},children:(0,t.jsx)(w.Z,{badgeContent:4,color:"primary",variant:"dot",children:(0,t.jsx)(R,{fontSize:"small"})})})}),(0,t.jsx)(b.Z,{onClick:function(){return c(!0)},ref:o,sx:{cursor:"pointer",height:40,width:40,ml:1},src:"/static/images/avatars/aaaa.png",children:(0,t.jsx)(k,{fontSize:"small"})})]})})),(0,t.jsx)(V,{anchorEl:o.current,open:a,onClose:function(){return c(!1)}})]})};A.propTypes={onSidebarOpen:u().func};var O=n(41664),_=n.n(O),G=n(61225),N=n(44373),U=n(64631),W=(0,z.Z)((0,t.jsx)("svg",{viewBox:"0 0 20 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.399902 10.2C0.399902 9.88175 0.52633 9.57652 0.751374 9.35148C0.976418 9.12644 1.28164 9.00001 1.5999 9.00001H3.9999C4.31816 9.00001 4.62339 9.12644 4.84843 9.35148C5.07347 9.57652 5.1999 9.88175 5.1999 10.2V16.2C5.1999 16.5183 5.07347 16.8235 4.84843 17.0485C4.62339 17.2736 4.31816 17.4 3.9999 17.4H1.5999C1.28164 17.4 0.976418 17.2736 0.751374 17.0485C0.52633 16.8235 0.399902 16.5183 0.399902 16.2V10.2ZM7.5999 5.40001C7.5999 5.08175 7.72633 4.77652 7.95137 4.55148C8.17642 4.32643 8.48164 4.20001 8.7999 4.20001H11.1999C11.5182 4.20001 11.8234 4.32643 12.0484 4.55148C12.2735 4.77652 12.3999 5.08175 12.3999 5.40001V16.2C12.3999 16.5183 12.2735 16.8235 12.0484 17.0485C11.8234 17.2736 11.5182 17.4 11.1999 17.4H8.7999C8.48164 17.4 8.17642 17.2736 7.95137 17.0485C7.72633 16.8235 7.5999 16.5183 7.5999 16.2V5.40001ZM14.7999 1.80001C14.7999 1.48175 14.9263 1.17652 15.1514 0.951478C15.3764 0.726434 15.6816 0.600006 15.9999 0.600006H18.3999C18.7182 0.600006 19.0234 0.726434 19.2484 0.951478C19.4735 1.17652 19.5999 1.48175 19.5999 1.80001V16.2C19.5999 16.5183 19.4735 16.8235 19.2484 17.0485C19.0234 17.2736 18.7182 17.4 18.3999 17.4H15.9999C15.6816 17.4 15.3764 17.2736 15.1514 17.0485C14.9263 16.8235 14.7999 16.5183 14.7999 16.2V1.80001Z"})}),"ChartBar"),q=(0,z.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 14",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C4.26519 5.66374e-05 4.51951 0.105451 4.707 0.293L7.707 3.293C7.88916 3.4816 7.98995 3.7342 7.98767 3.9964C7.9854 4.2586 7.88023 4.50941 7.69482 4.69482C7.50941 4.88023 7.2586 4.9854 6.9964 4.98767C6.7342 4.98995 6.4816 4.88916 6.293 4.707L4 2.414L1.707 4.707C1.5184 4.88916 1.2658 4.98995 1.0036 4.98767C0.741402 4.9854 0.49059 4.88023 0.305182 4.69482C0.119773 4.50941 0.0146042 4.2586 0.0123258 3.9964C0.0100473 3.7342 0.110842 3.4816 0.293 3.293L3.293 0.293C3.48049 0.105451 3.73481 5.66374e-05 4 0ZM0.293 9.293C0.480528 9.10553 0.734836 9.00021 1 9.00021C1.26516 9.00021 1.51947 9.10553 1.707 9.293L4 11.586L6.293 9.293C6.4816 9.11084 6.7342 9.01005 6.9964 9.01233C7.2586 9.0146 7.50941 9.11977 7.69482 9.30518C7.88023 9.49059 7.9854 9.7414 7.98767 10.0036C7.98995 10.2658 7.88916 10.5184 7.707 10.707L4.707 13.707C4.51947 13.8945 4.26516 13.9998 4 13.9998C3.73484 13.9998 3.48053 13.8945 3.293 13.707L0.293 10.707C0.105529 10.5195 0.000213623 10.2652 0.000213623 10C0.000213623 9.73484 0.105529 9.48053 0.293 9.293Z"})}),"ChartSquareBar"),D=(0,z.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"})}),"ShoppingBag"),J=n(43265),K=n(75084),Q=function(e){var r=e.href,n=e.icon,o=e.title,s=(0,f.Z)(e,["href","icon","title"]),l=(0,a.useRouter)(),c=!!r&&l.pathname===r;return(0,t.jsx)(J.ZP,(0,C.Z)((0,p.Z)({disableGutters:!0,sx:{display:"flex",mb:.5,py:0,px:2}},s),{children:(0,t.jsx)(_(),{href:r,passHref:!0,children:(0,t.jsx)(K.Z,{component:"a",startIcon:n,disableRipple:!0,sx:{backgroundColor:c&&"rgba(255,255,255, 0.08)",borderRadius:1,color:c?"secondary.main":"neutral.300",fontWeight:c&&"fontWeightBold",justifyContent:"flex-start",px:3,textAlign:"left",textTransform:"none",width:"100%","& .MuiButton-startIcon":{color:c?"secondary.main":"neutral.400"},"&:hover":{backgroundColor:"rgba(255,255,255, 0.08)"}},children:(0,t.jsx)(i.Z,{sx:{flexGrow:1},children:o})})})}))};Q.propTypes={href:u().string,icon:u().node,title:u().string};var X=n(1645),Y=[{href:"/",icon:(0,t.jsx)(W,{fontSize:"small"}),title:"Resumen"},{href:"/users",icon:(0,t.jsx)(P,{fontSize:"small"}),title:"Usuarios"},{href:"/products",icon:(0,t.jsx)(D,{fontSize:"small"}),title:"Productos"},{href:"/orders",icon:(0,t.jsx)(X.Z,{fontSize:"small"}),title:"Pedidos"}],$=function(e){var r=e.open,n=e.onClose,o=(0,a.useRouter)(),l=(0,G.Z)((function(e){return e.breakpoints.up("lg")}),{defaultMatches:!0,noSsr:!1});(0,s.useEffect)((function(){o.isReady&&r&&(null===n||void 0===n||n())}),[o.asPath]);var c=(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(i.Z,{sx:{p:3},children:(0,t.jsx)(_(),{href:"/",passHref:!0,children:(0,t.jsx)("a",{})})}),(0,t.jsx)(i.Z,{sx:{px:2},children:(0,t.jsxs)(i.Z,{sx:{alignItems:"center",backgroundColor:"rgba(255, 255, 255, 0.04)",cursor:"pointer",display:"flex",justifyContent:"space-between",px:3,py:"11px",borderRadius:1},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(T.Z,{color:"inherit",variant:"subtitle1",children:"Refaccionaria Ruiz"}),(0,t.jsx)(T.Z,{color:"neutral.400",variant:"body2",children:"Siempre disponibles"})]}),(0,t.jsx)(q,{sx:{color:"neutral.500",width:14,height:14}})]})})]}),(0,t.jsx)(N.Z,{sx:{borderColor:"#2D3748",my:3}}),(0,t.jsx)(i.Z,{sx:{flexGrow:1},children:Y.map((function(e){return(0,t.jsx)(Q,{icon:e.icon,href:e.href,title:e.title},e.title)}))})]})});return l?(0,t.jsx)(U.ZP,{anchor:"left",open:!0,PaperProps:{sx:{backgroundColor:"neutral.900",color:"#FFFFFF",width:280}},variant:"permanent",children:c}):(0,t.jsx)(U.ZP,{anchor:"left",onClose:n,open:r,PaperProps:{sx:{backgroundColor:"neutral.900",color:"#FFFFFF",width:280}},sx:{zIndex:function(e){return e.zIndex.appBar+100}},variant:"temporary",children:c})};$.propTypes={onClose:u().func,open:u().bool};var ee=(0,l.ZP)("div")((function(e){var r=e.theme;return(0,o.Z)({display:"flex",flex:"1 1 auto",maxWidth:"100%",paddingTop:64},r.breakpoints.up("lg"),{paddingLeft:280})})),re=function(e){var r=e.children,n=(0,s.useState)(!0),o=n[0],l=n[1];return(0,t.jsxs)(x,{children:[(0,t.jsx)(ee,{children:(0,t.jsx)(i.Z,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",width:"100%"},children:r})}),(0,t.jsx)(A,{onSidebarOpen:function(){return l(!0)}}),(0,t.jsx)($,{onClose:function(){return l(!1)},open:o})]})}}}]);