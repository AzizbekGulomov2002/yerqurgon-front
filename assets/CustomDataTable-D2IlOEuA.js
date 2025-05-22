import{p as w,u as m,r as l,j as a,ax as S,o as z,cA as T}from"./index-TTKrRBsV.js";import{C as v}from"./CardTitle-WCnvc5ze.js";import{C as y,F}from"./Table-DaguqWZh.js";const E=w(F)`
  .ant-table {
    .ant-table-thead {
      .ant-table-cell {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.07px;
      }
    }
    .ant-table-tbody {
      .ant-table-cell {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.07px;
      }
    }

    .ant-table-title {
      padding: 10px 10px;
    }
  }

  .ant-table-pagination {
    margin: 30px 0 !important;
  }
`,P=({columns:s,data:g,pagination:i,loading:f,onChange:k,title:d,...b})=>{const{t:o}=m(),p=s.filter(e=>e.key!=="id"&&e.key!=="index"&&e.key!=="operation"),[n,x]=l.useState(s);l.useEffect(()=>{const e=s.filter(t=>!t.hidden||t.key==="id"||t.key!=="index"&&t.key==="operation");x(e)},[s]);const h=e=>{const t=s.map(r=>({...r,hidden:!e.includes(r.key)&&r.key!=="id"&&r.key!=="index"&&r.key!=="operation"})).filter(r=>!r.hidden);x(t)},[c,u]=l.useState(i);l.useEffect(()=>{u(i)},[i]);const j=e=>(c.current-1)*c.pageSize+e+1;return a.jsx(S,{direction:"vertical",size:"large",style:{width:"100%",margin:0},children:a.jsx(a.Fragment,{children:a.jsx(E,{locale:{filterReset:o("Tozalash")},bordered:!0,style:{maxWidth:"100%"},scroll:{x:!0},columns:n==null?void 0:n.map(e=>e.key==="id"?{...e,render:(t,r,C)=>j(C)}:e),rowKey:e=>e.id,dataSource:g,pagination:i?{current:i.current,pageSize:i.pageSize,total:i.total,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`}:!1,loading:f,onChange:k,title:()=>a.jsx(a.Fragment,{children:a.jsxs(z,{align:"center",justify:d?"space-between":"end",children:[d&&a.jsx(v,{title:d}),a.jsx(T,{mode:"multiple",showSearch:!1,placeholder:o("Ustunlarni tanlang"),onChange:h,style:{width:"180px"},dropdownRender:e=>a.jsx("div",{style:{padding:"5px",cursor:"pointer"},children:a.jsx(y.Group,{value:n.map(t=>t.key),onChange:t=>{h(t)},children:p.map(t=>a.jsx("div",{style:{width:"100%",margin:"3px 0"},children:a.jsx(y,{value:t.key,style:{lineHeight:"25px"},children:t.title},t.key)}))})}),children:p.map(e=>a.jsx(Option,{value:e.key,children:e.title},e.key))})]})}),...b})})})};export{P as C};
