const __vite__fileDeps=["assets/Input-CvgnfZaJ.js","assets/index-Do8WjxfW.js","assets/index-Xf9fjH8l.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as v,u as N,r,A as R,U as L,j as e,L as a}from"./index-Do8WjxfW.js";const c=lazy(()=>v(()=>import("./Input-CvgnfZaJ.js"),__vite__mapDeps([0,1,2])));function S({m:f}){const l=N(),u=r.useContext(R),p=r.useContext(L),[t,g]=r.useState(f),[d,n]=r.useState(null);r.useEffect(()=>{u.Auth&&l("//")},[]);const h=()=>{t==="Reg"?(g("Log"),l("/Login")):(g("Reg"),l("/Register"))},m=s=>{s.target.nextSibling.type==="text"?s.target.nextSibling.type="password":s.target.nextSibling.type="text"},i=()=>{let s=document.body.querySelectorAll("input[atr]");if(s[0].value===""){n("Ingresa un Usuario");return}if(s[1].value===""){n("Ingresa tu contraseña");return}x(s[0].value,"Admin")},o=()=>{let s=document.body.querySelectorAll("input[atr]");if(s[0].value===""){n("Ingresa un Usuario");return}if(s[1].value===""){n("Ingresa tu contraseña");return}if(s[2].value===""||s[1].value!==s[2].value){n("Las contraseñas no coinciden");return}x(s[0].value,"Admin")},x=(s,j)=>{n(null),u.setAuth(!0),p.setUserData([s,j]),l("/Home")};return e.jsxs("main",{className:"main-LogReg fixed h-100 w-100 relative",children:[e.jsx(a,{className:"mlr-logo ski absolute",to:"//"}),e.jsx("div",{className:"mlr-form absolute",children:e.jsxs("form",{className:"f-col relative g-25",children:[e.jsxs("header",{className:"f-col g-5",children:[e.jsx("h1",{className:"text-center",children:t==="Reg"?"Sign Up":"Sign In"}),e.jsxs("p",{className:"a-fnt-2 text-center",children:["Don’t have an account? ",e.jsx("span",{className:"fnt-link",onClick:h,children:t==="Reg"?"Sign In":"Sign Up"})]})]}),e.jsxs("div",{className:"f-col g-25 mt-10 mlr-js",children:[e.jsx(c,{text:"Username",n:"username",atr:"user",enter:t==="Log"?i:o}),e.jsxs("div",{className:"f-col g-10",children:[e.jsx(c,{t:"password",text:"Password",f:m,atr:"pass1",enter:t==="Log"?i:o}),t==="Reg"?null:e.jsx(a,{to:"ResetPassword",className:"fnt-link f-align-self-end",children:"Forgot password?"})]}),t==="Reg"?e.jsx(c,{t:"password",text:"Repeat Password",f:m,atr:"pass2",enter:t==="Log"?i:o}):null,e.jsxs("footer",{className:"mlr-fot",children:[d?e.jsx("p",{className:"a-fnt-2 text-center fnt-s14",children:d}):null,e.jsx("h5",{className:"w-100 text-center fnt-s15",children:"OR"}),e.jsxs("div",{className:"f-row g-30 mt-25 f-justify-center",children:[e.jsx("span",{className:"ski pointer"}),e.jsx("span",{className:"ski pointer"}),e.jsx("span",{className:"ski pointer"})]})]})]}),e.jsx("span",{className:"mlr-button btn btn-primary pointer mt-15",onClick:t==="Log"?i:o,children:"Continue"}),e.jsxs("ul",{className:"fl-com f-justify-center",children:[e.jsx(a,{children:"HLZ 2024 Copyright"}),e.jsx(a,{children:"Contact"}),e.jsx(a,{children:"Community"}),e.jsx(a,{children:"Terms of Service"})]})]})})]})}export{S as default};
