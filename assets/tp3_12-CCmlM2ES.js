import{j as e,c as t,R as r}from"./client-C9r4PM53.js";import{G as n}from"./iconBase-DoFgGIQ4.js";function d(s){return n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10h16"},child:[]},{tag:"path",attr:{d:"M4 14h16"},child:[]},{tag:"path",attr:{d:"M9 18l3 3l3 -3"},child:[]},{tag:"path",attr:{d:"M9 6l3 -3l3 3"},child:[]}]})(s)}const a=()=>e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"menu-icon",children:e.jsx(d,{style:{fontSize:"40px"},id:"icon"})}),e.jsx("nav",{className:"menu",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Home"}),e.jsx("li",{children:"Trending"}),e.jsx("li",{children:"Subscriptions"}),e.jsx("li",{children:"Library"})]})})]}),c=()=>e.jsx("div",{className:"video-player",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/MJbE3uWN9vE?si=9k0WmTiwv0gOZQXz&start=55",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),o=()=>e.jsxs("div",{className:"video-details",children:[e.jsx("h2",{children:"Baka Mitai"}),e.jsx("p",{children:"by Yakuza Series"}),e.jsx("p",{className:"description",children:"This is the description of the video. It provides an overview of the video's content."})]}),l=()=>e.jsxs("div",{className:"video-menu",children:[e.jsx("button",{children:"Like"}),e.jsx("button",{children:"Share"}),e.jsx("button",{children:"Save"}),e.jsx("button",{children:"Report"})]}),h=()=>{const s=[{id:1,title:"Related Video 1",author:"Author 1"},{id:2,title:"Related Video 2",author:"Author 2"},{id:3,title:"Related Video 3",author:"Author 3"}];return e.jsx("div",{className:"related-videos",children:s.map(i=>e.jsxs("div",{className:"related-video-item",children:[e.jsx("img",{src:"https://via.placeholder.com/200",alt:"thumbnail"}),e.jsxs("div",{children:[e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.author})]})]},i.id))})},m=()=>{const s=[{id:1,name:"User 1",date:"2024-09-01",comment:"Great video!"},{id:2,name:"User 2",date:"2024-09-01",comment:"Very informative."}];return e.jsxs("div",{className:"comments-section",children:[e.jsx("h3",{children:"Comments"}),s.map(i=>e.jsxs("div",{className:"comment-item",children:[e.jsxs("p",{children:[e.jsx("strong",{children:i.name})," (",i.date,")"]}),e.jsx("p",{children:i.comment})]},i.id))]})},x=()=>e.jsxs("div",{className:"ad-section",children:[e.jsx("p",{children:"Advertisement"}),e.jsx("img",{src:"https://via.placeholder.com/200",alt:"advertisement"})]}),j=()=>e.jsxs("div",{className:"app",children:[e.jsx(a,{}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"video-section",children:[e.jsx(c,{}),e.jsx(o,{}),e.jsx(l,{})]}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(m,{})]})]});t.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(j,{})}));
