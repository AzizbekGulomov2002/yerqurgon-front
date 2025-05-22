import{p as a,l as w,u as S,K as T,M as $,j as e,o as n,N as v,O as x,S as C,B as I,U as h,V as P,W as z,X as q}from"./index-TTKrRBsV.js";import{C as B,a as F}from"./CustomPhoneInput-Dyz5Xq3R.js";import{c as A,a as p,u as N,F as i,C as u,o as R}from"./index.esm-Dv3jW_V-.js";import{C as g}from"./index-Chkbatr3.js";import{R as E,C as o}from"./row-Bxwr5CQq.js";import"./index-CRizbU4B.js";import"./index-DNWE43hh.js";import"./Skeleton-Bgqqq5sk.js";import"./index-CB8Qoy1w.js";import"./PlusOutlined-Ba-GwlE8.js";const K=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: ${t=>t.theme.colors.backgroundBaseDefault};

  .ant-card {
    max-width: 400px;
  }

  .logo-box {
    color: ${t=>t.theme.colors.primaryColor};
  }
`;a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > h1 {
    margin: 0;
    padding: 0;
    color: ${t=>t.theme.colors.textBasePrimary};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.24px;
  }
  & > span {
    color: ${t=>t.theme.colors.textBaseSecondary};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.216px;
  }
`;a(g)`
  display: flex;
  width: 416px;
  padding: ${t=>t.theme.spacing.spacing32};
  border-radius: ${t=>t.theme.radius.radius2xl};
  border: 1px solid ${t=>t.theme.colors.borderActionNormal};
  background-color: ${t=>t.theme.colors.backgroundSurfaceDefault};
  box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
`;a(Text)`
  position: absolute;
  bottom: 30px;
  color: ${t=>t.theme.colors.textBaseTertiary};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;
`;const{Title:V,Text:l}=P,J=()=>{const t=w(),{t:r}=S(),{setAccessToken:j}=T(),f=A().shape({username:p().required(r("Telefon raqam kiritilishi kerak !")),password:p().required(r("Parol kiritilishi kerak !"))}),{mutateAsync:y,isPending:c}=$({mutationKey:["login"],mutationFn:z,onSuccess:s=>{j(q.get(s,"data.token")),t("/")},onError:s=>{console.log(s)}}),{handleSubmit:b,control:d,formState:{errors:m}}=N({defaultValues:{username:"",password:""},resolver:R(f)}),k=s=>{y(s)};return e.jsx(K,{children:e.jsx(g,{children:e.jsxs(E,{gutter:[0,24],children:[e.jsx(o,{span:24,children:e.jsx(n,{align:"center",justify:"center",children:e.jsx("img",{onClick:()=>t("/"),src:v,style:{width:"100px",cursor:"pointer"},alt:""})})}),e.jsx(o,{span:24,children:e.jsxs(n,{align:"center",justify:"center",vertical:!0,children:[e.jsx(V,{level:2,children:r("Kirish")}),e.jsx(l,{children:r("Iltimos, tizimga kirish uchun hisob ma'lumotlarini kiriting.")})]})}),e.jsx(o,{span:24,children:e.jsx(i,{layout:"vertical",className:"login-form",name:"login-form",size:"large",onFinish:b(k),children:e.jsxs(n,{justify:"center",vertical:!0,gap:"15px",children:[e.jsx(i.Item,{label:r("Telefon raqam"),...x(m,"username"),required:!0,children:e.jsx(u,{name:"username",control:d,render:({field:s})=>e.jsx(B,{...s})})}),e.jsx(i.Item,{label:r("Parol"),...x(m,"password"),required:!0,children:e.jsx(u,{name:"password",control:d,render:({field:s})=>e.jsx(F,{...s,placeholder:r("Parolni kiriting"),prefix:e.jsx(C,{})})})}),e.jsx(i.Item,{children:e.jsx(I,{style:{width:"100%"},type:"primary",htmlType:"submit",loading:c,disabled:c,children:r("Tizimga kirish")})}),e.jsx(i.Item,{children:e.jsx(n,{align:"center",justify:"center",children:e.jsx(l,{children:e.jsx(h,{to:"/auth/reset-password",children:r("Parolni unutdingizmi ?")})})})}),e.jsx(i.Item,{children:e.jsx(n,{align:"center",justify:"center",children:e.jsxs(l,{children:[e.jsxs("span",{style:{marginRight:"5px"},children:[r("Akkauntingiz bo'lmasa"),":"]}),e.jsx(h,{to:"/auth/sign-up",children:r("Ro'yxatdan o'ting")})]})})})]})})})]})})})};export{J as default};
