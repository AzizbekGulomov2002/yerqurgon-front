import{r as l,ao as d,a8 as p,p as u,u as m,j as e,ap as h}from"./index-TTKrRBsV.js";import{u as x}from"./useQuery-DXHJDm7O.js";import{R as f,C as o}from"./row-Bxwr5CQq.js";import{C as a}from"./index-Chkbatr3.js";import{S as g}from"./Skeleton-Bgqqq5sk.js";import"./index-CB8Qoy1w.js";import"./PlusOutlined-Ba-GwlE8.js";var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"}}]},name:"play-circle",theme:"outlined"},j=function(r,t){return l.createElement(d,p({},r,{ref:t,icon:y}))},b=l.forwardRef(j);const{Meta:n}=a,v=u.div`
  .ant-card {
    .ant-card-cover {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
      }
    }
    .ant-card-body {
      padding: 20px;
      padding-top: 10px;
    }
  }
`,P=()=>{const{t:s}=m(),{data:r,isLoading:t,error:w}=x({queryKey:["guide"],queryFn:h,select:i=>i.data});return e.jsx(v,{children:e.jsxs(f,{gutter:[20,20],children:[e.jsx(o,{xs:24,md:24,children:e.jsx(a,{children:e.jsx(n,{title:"SMART TIZIM",description:s("Ushbu dastur orqali biznesingizni boshqaring !")})})}),r==null?void 0:r.map((i,c)=>e.jsx(o,{xs:24,md:8,children:e.jsx(a,{loading:t,style:{height:"100%"},hoverable:!0,cover:t?e.jsx(g.Node,{active:t,children:e.jsx(b,{style:{fontSize:40,color:"#bfbfbf"}})}):e.jsx("iframe",{width:"560",height:"315",src:i.link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowFullScreen:"true",allow:"fullscreen"}),children:e.jsx(n,{title:i.title,description:i.description})})},c))]})})};export{P as default};
