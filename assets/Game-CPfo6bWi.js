import{u as d,j as e,r as m,S as u}from"./index-BVT5ioZx.js";import f from"./Header-BQWWIiJB.js";import{N as p}from"./News-BDEhSNH5.js";import h from"./Footer-BCUzNWhV.js";import{R as x}from"./Retroceso-BOizlB2Q.js";import{I as j}from"./InputSearch-BKnkMR8E.js";import"./Input-D90aUtGg.js";function N({title:t,desc:s,id:a}){const o=d(),n=()=>{o(`/Tournament/View/${a}`)};return e.jsx("li",{className:"gm-list g-10 br-6 pointer",onClick:n,children:e.jsxs("label",{className:"f-col relative g-5 no-select",children:[e.jsx("h2",{className:"ps-3 pointer hm-font-h2",children:t||"Game Name"}),e.jsx("p",{className:"hm-font-p",children:s||"Description"})]})})}function y(){const t=window.location.pathname.split("/"),s=t[t.length-1].replace(/-/g," "),[a,o]=m.useState([{title:"Tournament Name",desc:"Tournaments of Dota 2",id:1},{title:"Tournament Name",desc:"Tournaments of Dota 2",id:2},{title:"Tournament Name",desc:"Tournaments of Dota 2",id:3},{title:"Tournament Bootcamp",desc:"Tournaments of Dota 2",id:4},{title:"Tournament ESL",desc:"Tournaments of League of Legends",id:5},{title:"Tournament Epilog",desc:"Tournaments of Chess",id:6}]),[n,c]=m.useState(""),i=u(a,n);return e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsxs("div",{className:"f-row w-100 f-justify-center",children:[e.jsx(x,{text:"Back"}),e.jsxs("main",{className:"game-main w-80 f-col mt-40",children:[e.jsx("h2",{className:"a-fnt-3 text-left ms-5",children:s}),e.jsxs("div",{className:"f-row g-80 mt-40 ms-5",children:[e.jsxs("div",{className:"f-col w-70 g-25",children:[e.jsx("span",{className:"d-flex gm-src pb-3",children:e.jsx(j,{text:"Search Game",funct:c})}),e.jsxs("ul",{className:"hm-crdzone f-col g-20 w-95 m-auto",children:[i.map((r,l)=>e.jsx(N,{title:r.title,desc:r.desc,id:r.id},l)),e.jsx("span",{className:"btn btn-primary w-100 text-center pointer py-15 mt-15",children:"Ver mas"})]})]}),e.jsx(p,{})]})]})]}),e.jsx(h,{})]})}export{y as default};