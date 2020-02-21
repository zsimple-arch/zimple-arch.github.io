(this["webpackJsonpsimple-react"]=this["webpackJsonpsimple-react"]||[]).push([[10],{50:function(e,a,r){"use strict";r.r(a);var t=r(164),o=r(0),n=r.n(o),l=r(706),c=r(691),i=r(660),s=r.n(i),d=r(659),m=r.n(d),p=r(714),b=r(322),u=r(323),f=r(321),g=r(309),h=r(310),j=r(324),O=r(72),x=r(57),E=r(86),v=r.n(E),C={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}},F=Object(c.a)(C);function N(e){var a,r=F(),t=e.className,o=e.children,l=e.plain,c=e.carousel,i=Object(x.a)(e,["className","children","plain","carousel"]),s=v()((a={},Object(O.a)(a,r.card,!0),Object(O.a)(a,r.cardPlain,l),Object(O.a)(a,r.cardCarousel,c),Object(O.a)(a,t,void 0!==t),a));return n.a.createElement("div",Object.assign({className:s},i),o)}var w={cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}},A=Object(c.a)(w);function H(e){var a,r=A(),t=e.className,o=e.children,l=Object(x.a)(e,["className","children"]),c=v()((a={},Object(O.a)(a,r.cardBody,!0),Object(O.a)(a,t,void 0!==t),a));return n.a.createElement("div",Object.assign({className:c},l),o)}var y=r(107),P={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:y.p,successCardHeader:y.m,dangerCardHeader:y.c,infoCardHeader:y.h,primaryCardHeader:y.j},S=Object(c.a)(P);function k(e){var a,r=S(),t=e.className,o=e.children,l=e.color,c=e.plain,i=Object(x.a)(e,["className","children","color","plain"]),s=v()((a={},Object(O.a)(a,r.cardHeader,!0),Object(O.a)(a,r[l+"CardHeader"],l),Object(O.a)(a,r.cardHeaderPlain,c),Object(O.a)(a,t,void 0!==t),a));return n.a.createElement("div",Object.assign({className:s},i),o)}var R={cardFooter:{display:"flex",alignItems:"center",backgroundColor:"transparent",padding:"0.9375rem 1.875rem"}},T=Object(c.a)(R);function W(e){var a,r=T(),t=e.className,o=e.children,l=Object(x.a)(e,["className","children"]),c=v()((a={},Object(O.a)(a,r.cardFooter,!0),Object(O.a)(a,t,void 0!==t),a));return n.a.createElement("div",Object.assign({className:c},l),o)}var I=r(705),z=r(712),B=r(713),D=r(105),L={disabled:{"&:before":{borderColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:y.k}},underlineError:{"&:after":{borderColor:y.d}},underlineSuccess:{"&:after":{borderColor:y.n}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderColor:"#FFFFFF"},"&:after":{borderColor:"#FFFFFF"}},labelRoot:Object(D.a)({},y.e,{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:y.d+" !important"},labelRootSuccess:{color:y.n+" !important"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:"#495057"}},input:{color:"#495057",height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:"#AAAAAA"}},whiteInput:{"&,&::placeholder":{color:"#FFFFFF",opacity:"1"}}},$=Object(c.a)(L);function J(e){var a,r,t,o,l=$(),c=e.formControlProps,i=e.labelText,s=e.id,d=e.labelProps,m=e.inputProps,p=e.error,b=e.white,u=e.inputRootCustomClasses,f=e.success,g=v()((a={},Object(O.a)(a," "+l.labelRootError,p),Object(O.a)(a," "+l.labelRootSuccess,f&&!p),a)),h=v()((r={},Object(O.a)(r,l.underlineError,p),Object(O.a)(r,l.underlineSuccess,f&&!p),Object(O.a)(r,l.underline,!0),Object(O.a)(r,l.whiteUnderline,b),r)),j=v()(Object(O.a)({},u,void 0!==u)),x=v()((t={},Object(O.a)(t,l.input,!0),Object(O.a)(t,l.whiteInput,b),t));return o=void 0!==c?v()(c.className,l.formControl):l.formControl,n.a.createElement(I.a,Object.assign({},c,{className:o}),void 0!==i?n.a.createElement(z.a,Object.assign({className:l.labelRoot+" "+g,htmlFor:s},d),i):null,n.a.createElement(B.a,Object.assign({classes:{input:x,root:j,disabled:l.disabled,underline:h},id:s},m)))}var U=r(658),G=r.n(U),_=r(319);r.d(a,"default",(function(){return K}));var q=Object(c.a)(_.b);function K(e){var a=n.a.useState("cardHidden"),r=Object(t.a)(a,2),o=r[0],c=r[1];setTimeout((function(){c("")}),700);var i=q(),d=Object.assign({},e);return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,Object.assign({brand:"Simple",rightLinks:n.a.createElement(f.a,null),fixed:!0,color:"transparent",changeColorOnScroll:{height:400,color:"white"}},d)),n.a.createElement("div",{className:i.pageHeader,style:{backgroundImage:"url("+G.a+")",backgroundSize:"cover",backgroundPosition:"top center"}},n.a.createElement("div",{className:i.container},n.a.createElement(h.a,{justify:"center"},n.a.createElement(g.a,{xs:12,sm:12,md:4},n.a.createElement(N,{className:i[o]},n.a.createElement("form",{className:i.form},n.a.createElement(k,{color:"primary",className:i.cardHeader},n.a.createElement("h4",null,"Login")),n.a.createElement("p",{className:i.divider},"Or Be Classical"),n.a.createElement(H,null,n.a.createElement(J,{labelText:"First Name...",id:"first",formControlProps:{fullWidth:!0},inputProps:{type:"text",endAdornment:n.a.createElement(p.a,{position:"end"},n.a.createElement(m.a,{className:i.inputIconsColor}))}}),n.a.createElement(J,{labelText:"Email...",id:"email",formControlProps:{fullWidth:!0},inputProps:{type:"email",endAdornment:n.a.createElement(p.a,{position:"end"},n.a.createElement(s.a,{className:i.inputIconsColor}))}}),n.a.createElement(J,{labelText:"Password",id:"pass",formControlProps:{fullWidth:!0},inputProps:{type:"password",endAdornment:n.a.createElement(p.a,{position:"end"},n.a.createElement(l.a,{className:i.inputIconsColor},"lock_outline")),autoComplete:"off"}})),n.a.createElement(W,{className:i.cardFooter},n.a.createElement(j.a,{simple:!0,color:"primary",size:"lg"},"Get started"))))))),n.a.createElement(b.a,{whiteFont:!0})))}},658:function(e,a,r){e.exports=r.p+"static/media/bg7.b08234a2.jpg"}}]);
//# sourceMappingURL=10.c0ad261d.chunk.js.map