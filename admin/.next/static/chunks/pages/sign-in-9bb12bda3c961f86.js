(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{35979:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return n(4726)}])},36788:function(e,i,n){"use strict";n.d(i,{T:function(){return d}});var t=n(26042),r=n(69396),s=n(99534),a=n(7297),l=n(85893),o=n(45697),c=n.n(o);function u(){var e=(0,a.Z)([""]);return u=function(){return e},e}var d=(0,n(81719).ZP)((function(e){var i=e.variant,n=(0,s.Z)(e,["variant"]),a="light"===i?"#C1C4D6":"#5048E5";return(0,l.jsxs)("svg",(0,r.Z)((0,t.Z)({width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg"},n),{children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z",fill:a}),(0,l.jsx)("path",{opacity:"0.7",d:"M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z",fill:a}),(0,l.jsx)("path",{opacity:"0.4",d:"M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z",fill:a})]}))}))(u());d.defaultProps={variant:"primary"},d.propTypes={variant:c().oneOf(["light","primary"])}},4726:function(e,i,n){"use strict";n.r(i);var t=n(47568),r=n(70655),s=n(85893),a=n(67294),l=n(9008),o=n.n(l),c=n(41664),u=n.n(c),d=n(82175),h=n(74231),x=n(61953),m=n(79072),p=n(29630),f=n(75084),C=n(62348),g=n(18661),j=n(67836),v=n(32631),b=n(21486),Z=n(36788),y=n(65462),w=n(11163),k=n.n(w);i.default=function(){var e=(0,a.useState)("email"),i=e[0],n=e[1],l=(0,a.useState)(!1),c=l[0],w=l[1],S=(0,y.Eu)(),_=(0,d.TA)({initialValues:{email:"",submit:null},validationSchema:h.Ry({email:h.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,t.Z)((function(e,i){var n,t;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:if(!b.P)return i.setFieldError("submit","Zalter authentication not enabled"),i.setSubmitting(!1),[2];r.label=1;case 1:return r.trys.push([1,3,,4]),n=window.location.href+"/confirm",[4,b.I.signInWithLink("start",{email:e.email,redirectUri:n})];case 2:return r.sent(),i.setSubmitting(!1),w(!0),[3,4];case 3:return t=r.sent(),console.error(t),i.setFieldError("submit",t.message||"Something went wrong"),i.setSubmitting(!1),[3,4];case 4:return[2]}}))}));return function(i,n){return e.apply(this,arguments)}}()});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("title",{children:"Sign in | Material Kit"})}),(0,s.jsx)(x.Z,{component:"main",sx:{display:"flex",flex:"1 1 auto"},children:(0,s.jsxs)(m.ZP,{container:!0,sx:{flex:"1 1 auto"},children:[(0,s.jsxs)(m.ZP,{item:!0,xs:12,lg:6,sx:{backgroundColor:"neutral.50",display:"flex",flexDirection:"column",position:"relative"},children:[(0,s.jsx)(x.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",p:3},children:(0,s.jsx)(u(),{href:"/",passHref:!0,children:(0,s.jsx)("a",{children:(0,s.jsx)(Z.T,{sx:{height:42,width:42}})})})}),(0,s.jsx)(x.Z,{sx:{flex:"1 1 auto",alignItems:"center",display:"flex",justifyContent:"center"},children:(0,s.jsx)(x.Z,{sx:{maxWidth:500,px:3,py:"100px",width:"100%"},children:c?(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{sx:{mb:1},variant:"h4",children:"Confirm your email"}),(0,s.jsxs)(p.Z,{children:["We emailed a magic link to\xa0",(0,s.jsx)(x.Z,{component:"span",sx:{color:"primary.main"},children:_.values.email}),(0,s.jsx)("br",{}),"Click the link to to log in."]}),(0,s.jsxs)(x.Z,{sx:{alignItems:"center",display:"flex",gap:3,mt:3},children:[(0,s.jsx)(p.Z,{color:"text.secondary",variant:"body2",children:"Wrong email?"}),(0,s.jsx)(f.Z,{color:"inherit",onClick:function(){w(!1)},children:"Use a different email"})]})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{sx:{mb:1},variant:"h4",children:"Welcome"}),(0,s.jsx)(p.Z,{color:"text.secondary",sx:{mb:3},variant:"body2",children:"Sign up on the internal platform"}),(0,s.jsxs)(C.Z,{onChange:function(e,i){n(i)},sx:{mb:3},value:i,children:[(0,s.jsx)(g.Z,{label:"Email",value:"email"}),(0,s.jsx)(g.Z,{label:"Phone Number",value:"phoneNumber"})]}),"email"===i&&(0,s.jsxs)("div",{children:[(0,s.jsx)(j.Z,{error:Boolean(_.touched.email&&_.errors.email),fullWidth:!0,helperText:_.touched.email&&_.errors.email,label:"Email Address",name:"email",onBlur:_.handleBlur,onChange:_.handleChange,type:"email",value:_.values.email,variant:"outlined"}),(0,s.jsx)(v.Z,{sx:{mt:1},children:"Enter a valid email since this is a fully integrated authentication system. Optionally you can skip."}),_.errors.submit&&(0,s.jsx)(p.Z,{color:"error",sx:{mt:2},variant:"body2",children:_.errors.submit}),(0,s.jsx)(f.Z,{fullWidth:!0,size:"large",sx:{mt:3},onClick:function(){return _.handleSubmit()},variant:"contained",children:"Continue"}),(0,s.jsx)(f.Z,{fullWidth:!0,size:"large",sx:{mt:3},onClick:function(){S.signIn({}),globalThis.sessionStorage.setItem("skip-auth","true"),k().push("/").catch(console.error)},children:"Skip authentication"})]}),"phoneNumber"===i&&(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{sx:{mb:1},variant:"h6",children:"Not available in the demo"}),(0,s.jsx)(p.Z,{color:"text.secondary",children:"Zalter Identity does support SMS passcodes, but to prevent unnecessary costs we disabled this feature in the demo."})]})]})})})]}),(0,s.jsx)(m.ZP,{item:!0,xs:12,lg:6,sx:{alignItems:"center",background:"radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",color:"white",display:"flex",justifyContent:"center","& img":{maxWidth:"100%"}},children:(0,s.jsxs)(x.Z,{sx:{p:3},children:[(0,s.jsxs)(p.Z,{align:"center",color:"inherit",sx:{fontSize:"24px",lineHeight:"32px",mb:1},variant:"h1",children:["Authentication sponsored by\xa0",(0,s.jsx)(x.Z,{component:"a",href:"https://zalter.com?ref=devias-mk-react",sx:{color:"#15B79E"},target:"_blank",children:"zalter.com"})]}),(0,s.jsx)(p.Z,{align:"center",sx:{mb:3},variant:"subtitle1",children:"Create secure, seamless user experiences with Zalter Passwordless Authentication."}),(0,s.jsx)("img",{alt:"",src:"/static/images/sign-in-illustration.svg"})]})})]})})]})}}},function(e){e.O(0,[448,583,383,836,72,141,753,774,888,179],(function(){return i=35979,e(e.s=i);var i}));var i=e.O();_N_E=i}]);