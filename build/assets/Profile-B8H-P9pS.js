const __vite__fileDeps=["assets/Header-BTriHlUT.js","assets/index-6LCQayM6.js","assets/index-j-6PvB0d.css","assets/Header-DFzZvt8B.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as e,A as r,U as n,j as t,_ as l}from"./index-6LCQayM6.js";const c=e.lazy(()=>l(()=>import("./Header-BTriHlUT.js"),__vite__mapDeps([0,1,2,3])));function x(){const{setAuth:s}=e.useContext(r),{setUserData:a}=e.useContext(n),o=()=>{s(!1),a(""),localStorage.clear("Auth"),localStorage.clear("User")};return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),t.jsx("span",{className:"d-flex btn f-btn-blue py-2 px-5 br-max m-auto mt-80 fnt-s15",onClick:o,children:"Log Out"})]})}export{x as default};