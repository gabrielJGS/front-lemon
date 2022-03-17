var z=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(i,o,n)=>o in i?z(i,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[o]=n,E=(i,o)=>{for(var n in o||(o={}))J.call(o,n)&&F(i,n,o[n]);if(A)for(var n of A(o))U.call(o,n)&&F(i,n,o[n]);return i},I=(i,o)=>j(i,G(o));import{j as d,T as P,a as e,L as $,c as K,b as Y,r as c,d as H,C as Q,e as X,B as M,A as Z,f as _,g as ee,G as m,h as L,F as x,I as y,S as C,M as b,i as D,R as ae,k as oe}from"./vendor.2d229446.js";const re=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};re();var te="/backend-lemon/assets/icon.9b85654d.jpg";const ne=[{key:"monofasico",value:"Monof\xE1sico"},{key:"bifasico",value:"Bif\xE1sico"},{key:"trifasico",value:"Trif\xE1sico"}],ie=[{key:"residencial",value:"Residencial"},{key:"industrial",value:"Industrial"},{key:"comercial",value:"Comercial"},{key:"rural",value:"Rural"},{key:"poderPublico",value:"Poder P\xFAblico"}],le=[{key:"azul",value:"Azul"},{key:"branca",value:"Branca"},{key:"verde",value:"Verde"},{key:"convencional",value:"Convencional"}],se=i=>d(P,I(E({variant:"body2",color:"text.secondary",align:"center"},i),{children:["Copyright \xA9 ",e($,{color:"inherit",href:"https://github.com/gabrielJGS",children:"Gabriel Jos\xE9"})," ",new Date().getFullYear(),"."]})),ue=K();function ce(){const i=Y.create({baseURL:"https://lemon-backend-gjs.herokuapp.com"}),[o,n]=c.exports.useState(!1),[p,r]=c.exports.useState(""),[l,h]=c.exports.useState(""),[k,V]=c.exports.useState(""),[T,B]=c.exports.useState(""),[u,g]=c.exports.useState([""]),[S,f]=c.exports.useState(""),[N,v]=c.exports.useState("success"),O=async a=>{if(a.preventDefault(),o)return;if(u.length<3){v("error"),f("Por favor, preencha o valor de ao menos 3 contas de luz");return}n(!0);const t={numeroDoDocumento:p,tipoDeConexao:l,classeDeConsumo:k,modalidadeTarifaria:T,historicoDeConsumo:u.map(s=>parseFloat(s))};await i.post("/elegibilidade",t).then(s=>{s.data.elegivel?(v("success"),f(`Parab\xE9ns, voc\xEA foi aceito para ser um cliente Lemon!
Voc\xEA economizar\xE1 por volta de ${s.data.economiaAnualDeCO2} de CO2 anualmente!`)):(v("error"),f(s.data.razoesDeInelegibilidade.map(w=>w+`
`))),n(!1)}).catch(s=>{v("error"),f(s.message),n(!1)})};let R=(a,t)=>{let s=[...u];s[a]=t.target.value,g(s)},W=()=>{g([...u,""])},q=a=>{let t=[...u];console.log(a),console.log(t),t.splice(a,1),g(t)};return e(H,{theme:ue,children:d(Q,{component:"main",maxWidth:"xs",children:[e(X,{}),d(M,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[e(Z,{alt:"Lemon Energy",src:te}),e(P,{component:"h1",variant:"h5",style:{textAlign:"center"},children:"Sua conta de luz pode redefinir o futuro."}),"Descubra uma nova forma de consumir energia",o?e(_,{color:"success"}):null,S?e(ee,{style:{whiteSpace:"pre-line"},severity:N,children:S}):null,d(M,{component:"form",onSubmit:O,sx:{mt:3},children:[d(m,{container:!0,spacing:2,children:[e(m,{item:!0,xs:12,children:e(L,{name:"numeroDoDocumento",required:!0,fullWidth:!0,id:"numeroDoDocumento",label:"N\xFAmero do CPF/CNPJ",value:p,onChange:a=>{r(a.target.value)},autoFocus:!0})}),e(m,{item:!0,xs:12,children:d(x,{fullWidth:!0,children:[e(y,{id:"inputTipoDeConexao",children:"Tipo de conex\xE3o"}),e(C,{labelId:"inputTipoDeConexao",id:"inputTipoDeConexao",value:l,label:"inputTipoDeConexao",required:!0,onChange:a=>h(a.target.value),children:ne.map(a=>e(b,{value:a.key,children:a.value},a.key))})]})}),e(m,{item:!0,xs:12,children:d(x,{fullWidth:!0,children:[e(y,{id:"inputClasseDeConsumo",children:"Classe de consumo"}),e(C,{labelId:"inputClasseDeConsumo",id:"inputClasseDeConsumo",value:k,label:"inputClasseDeConsumo",required:!0,onChange:a=>V(a.target.value),children:ie.map(a=>e(b,{value:a.key,children:a.value},a.key))})]})}),e(m,{item:!0,xs:12,children:d(x,{fullWidth:!0,children:[e(y,{id:"inputModalidadeTarifaria",children:"Modalidade Tarif\xE1ria"}),e(C,{labelId:"inputModalidadeTarifaria",id:"inputModalidadeTarifaria",value:T,label:"inputModalidadeTarifaria",required:!0,onChange:a=>B(a.target.value),children:le.map(a=>e(b,{value:a.key,children:a.value},a.key))})]})}),u.map((a,t)=>e(m,{item:!0,xs:12,children:e(L,{required:!0,fullWidth:!0,label:t==0?"Valor da tarifa do m\xEAs atual":`Valor da tarifa de ${t} meses atr\xE1s`,name:"value",value:a||"",onChange:s=>R(t,s),InputProps:t+1==u.length&&t<=10?{endAdornment:e(D,{onClick:()=>{t<=10&&W()},variant:"contained",children:"Adicionar"})}:t+2==u.length?{endAdornment:e(D,{color:"error",onClick:()=>{q(t)},variant:"contained",children:"Remover"})}:{endAdornment:null}})},t))]}),e(D,{type:"submit",fullWidth:!0,variant:"contained",color:"success",sx:{mt:3,mb:2},children:"Enviar"})]})]}),e(se,{sx:{mt:5}})]})})}ae.render(e(oe.StrictMode,{children:e(ce,{})}),document.getElementById("root"));
