var S=Object.defineProperty,M=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(r,t,n)=>t in r?S(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,v=(r,t)=>{for(var n in t||(t={}))B.call(t,n)&&y(r,n,t[n]);if(f)for(var n of f(t))I.call(t,n)&&y(r,n,t[n]);return r},x=(r,t)=>M(r,R(t));import{a as A,j as F,r as d,s as l,c as O,b as j,M as T,W as z,d as L,e as $,R as P,f as V}from"./vendor.a0c368be.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};W();var k="/dtmoney/assets/income.ebd5fd7c.svg",N="/dtmoney/assets/outcome.25f97a81.svg",q="/dtmoney/assets/favicon.bb7e6e60.svg";const w=A.create({baseURL:"/api"}),e=F.exports.jsx,o=F.exports.jsxs,E=d.exports.createContext({});function G({children:r}){const[t,n]=d.exports.useState([]);d.exports.useEffect(()=>{w.get("transactions").then(a=>n(a.data.transactions))},[]);async function s(a){const i=await w.post("/transactions",x(v({},a),{createdAt:new Date})),{transaction:c}=i.data;n([...t,c])}return e(E.Provider,{value:{transactions:t,createTransaction:s},children:r})}function p(){return d.exports.useContext(E)}const H=l.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;function J(){const{transactions:r}=p(),t=r.reduce((n,s)=>(s.type==="deposit"?(n.deposits+=s.amount,n.total+=s.amount):(n.withdraws+=s.amount,n.total-=s.amount),n),{deposits:0,withdraws:0,total:0});return o(H,{children:[o("div",{children:[o("header",{children:[e("p",{children:"Entradas"}),e("img",{src:k,alt:"Entradas"})]}),e("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.deposits)})]}),o("div",{children:[o("header",{children:[e("p",{children:"Sa\xEDdas"}),e("img",{src:N,alt:"Saidas"})]}),o("strong",{children:["-",new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.withdraws)]})]}),o("div",{className:"highlight-background",children:[o("header",{children:[e("p",{children:"Total"}),e("img",{src:q,alt:"Total"})]}),e("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.total)})]})]})}const K=l.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;function U(){const{transactions:r}=p();return e(K,{children:o("table",{children:[e("thead",{children:o("tr",{children:[e("th",{children:"T\xEDtulo"}),e("th",{children:"Valor"}),e("th",{children:"Categoria"}),e("th",{children:"Data"})]})}),e("tbody",{children:r.map(t=>o("tr",{children:[e("td",{children:t.title}),e("td",{className:t.type,children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.amount)}),e("td",{children:t.category}),e("td",{children:new Intl.DateTimeFormat("pt-BR").format(new Date(t.createdAt))})]},t.id))})]})})}const Q=l.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;function X(){return o(Q,{id:"dashboard",children:[e(J,{}),e(U,{})]})}var Y="/dtmoney/assets/logo.6c4298f6.svg";const Z=l.header`
  background: var(--blue);
`,_=l.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;function ee({onOpenNewTransactionModal:r}){return e(Z,{children:o(_,{children:[e("img",{src:Y,alt:"dt money"}),e("button",{type:"button",onClick:r,children:"Nova transa\xE7\xE3o"})]})})}var te="/dtmoney/assets/close.dc711ae6.svg";const re=l.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`,ne=l.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,ae={green:"#33CC95",red:"#E52E4D"},C=l.button`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${r=>r.isActive?O(.9,ae[r.activeColor]):"transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${j(.1,"#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;function oe({isOpen:r,onRequestClose:t}){const{createTransaction:n}=p(),[s,a]=d.exports.useState(""),[i,c]=d.exports.useState(0),[g,b]=d.exports.useState(""),[u,h]=d.exports.useState("deposit");async function D(m){m.preventDefault(),await n({title:s,amount:i,category:g,type:u}),a(""),c(0),b(""),h("deposit"),t()}return o(T,{isOpen:r,onRequestClose:t,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[e("button",{type:"button",onClick:t,className:"react-modal-close",children:e("img",{src:te,alt:"Fechar modal"})}),o(re,{onSubmit:D,children:[e("h2",{children:"Cadastrar transa\xE7\xE3o"}),e("input",{placeholder:"T\xEDtulo",value:s,onChange:m=>a(m.target.value)}),e("input",{type:"number",placeholder:"Valor",value:i,onChange:m=>c(Number(m.target.value))}),o(ne,{children:[o(C,{type:"button",onClick:()=>h("deposit"),isActive:u==="deposit",activeColor:"green",children:[e("img",{src:k,alt:"Entrada"}),e("span",{children:"Entrada"})]}),o(C,{type:"button",onClick:()=>h("withdraw"),isActive:u==="withdraw",activeColor:"red",children:[e("img",{src:N,alt:"Sa\xEDda"}),e("span",{children:"Sa\xEDda"})]})]}),e("input",{placeholder:"Categoria",value:g,onChange:m=>b(m.target.value)}),e("button",{type:"submit",children:"Cadastrar"})]})]})}const ie=z`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;function se(){const[r,t]=d.exports.useState(!1);return o(G,{children:[e(ee,{onOpenNewTransactionModal:()=>t(!0)}),e(X,{}),e(oe,{isOpen:r,onRequestClose:()=>t(!1)}),e(ie,{})]})}function de(){L({models:{transaction:$},seeds(r){r.db.loadData({transactions:[{id:1,title:"Freelance de website",type:"deposit",category:"Dev",amount:6e3,createdAt:new Date("2021-02-12 09:00:00")},{id:2,title:"Aluguel",type:"withdraw",category:"Casa",amount:1100,createdAt:new Date("2021-02-14 11:00:00")}]})},routes(){this.namespace="api",this.get("/transactions",()=>this.schema.all("transaction")),this.post("/transactions",(r,t)=>{const n=JSON.parse(t.requestBody);return r.create("transaction",n)})}})}de();T.setAppElement("#root");P.render(e(V.StrictMode,{children:e(se,{})}),document.getElementById("root"));
