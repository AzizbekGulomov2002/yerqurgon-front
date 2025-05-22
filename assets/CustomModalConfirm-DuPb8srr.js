import{r as o,ao as p,a8 as x,p as g,u as j,aa as C,j as a,o as z,B as d}from"./index-TTKrRBsV.js";import{M}from"./DeleteFilled-Lrowix85.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},q=function(n,t){return o.createElement(p,x({},n,{ref:t,icon:b}))},v=o.forwardRef(q);const E=g(M)`
  .ant-modal-header {
    .ant-modal-title {
      .anticon {
        color: #faad14;
        font-size: 25px;
      }
    }
  }
  .ant-modal-body {
    padding: 20px 0;
  }
`,y=({trigger:i,title:n,content:t,onOk:l,onCancel:r})=>{const{t:e}=j(),[m,s]=o.useState(!1),h=()=>{s(!0)},f=()=>{l&&(l(),s(!1))},c=()=>{r&&r(),s(!1)},u=C.cloneElement(i,{onClick:h});return a.jsxs(a.Fragment,{children:[u,a.jsx(E,{title:a.jsxs(z,{align:"center",gap:"middle",children:[a.jsx(v,{}),n||e("Tasdiqlash")]}),open:m,onCancel:c,width:450,footer:[a.jsx(d,{onClick:c,children:e("Bekor qilish")},"cancel"),a.jsx(d,{type:"primary",onClick:f,children:e("Tasdiqlash")},"ok")],children:t||e("Siz haqiqatdan ham buni bajarmoqchimsiz ?")})]})};export{y as C};
