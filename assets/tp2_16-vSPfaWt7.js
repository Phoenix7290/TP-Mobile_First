import{j as e,c as r,R as t}from"./client-C9r4PM53.js";const d=()=>e.jsx("header",{className:"header",children:e.jsx("nav",{className:"menu",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Home"}),e.jsx("li",{children:"Trending"}),e.jsx("li",{children:"Subscriptions"}),e.jsx("li",{children:"Library"})]})})}),n=()=>e.jsx("div",{className:"video-player",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/MJbE3uWN9vE?si=9k0WmTiwv0gOZQXz&start=55",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),c=()=>e.jsxs("div",{className:"video-details",children:[e.jsx("h2",{children:"Baka Mitai"}),e.jsx("p",{children:"by Yakuza Series"}),e.jsx("p",{className:"description",children:"This is the description of the video. It provides an overview of the video's content."})]}),a=()=>e.jsxs("div",{className:"video-menu",children:[e.jsx("button",{children:"Like"}),e.jsx("button",{children:"Share"}),e.jsx("button",{children:"Save"}),e.jsx("button",{children:"Report"})]}),l=()=>{const i=[{id:1,title:"Related Video 1",author:"Author 1"},{id:2,title:"Related Video 2",author:"Author 2"},{id:3,title:"Related Video 3",author:"Author 3"}];return e.jsx("div",{className:"related-videos",children:i.map(s=>e.jsxs("div",{className:"related-video-item",children:[e.jsx("img",{src:"https://via.placeholder.com/200",alt:"thumbnail"}),e.jsxs("div",{children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.author})]})]},s.id))})},o=()=>{const i=[{id:1,name:"User 1",date:"2024-09-01",comment:"Great video!"},{id:2,name:"User 2",date:"2024-09-01",comment:"Very informative."}];return e.jsxs("div",{className:"comments-section",children:[e.jsx("h3",{children:"Comments"}),i.map(s=>e.jsxs("div",{className:"comment-item",children:[e.jsxs("p",{children:[e.jsx("strong",{children:s.name})," (",s.date,")"]}),e.jsx("p",{children:s.comment})]},s.id))]})},h=()=>e.jsxs("div",{className:"ad-section",children:[e.jsx("p",{children:"Advertisement"}),e.jsx("img",{src:"https://via.placeholder.com/200",alt:"advertisement"})]}),m=()=>e.jsxs("div",{className:"app",children:[e.jsx(d,{}),e.jsxs("div",{className:"main-content",children:[e.jsxs("div",{className:"video-section",children:[e.jsx(n,{}),e.jsx(c,{}),e.jsx(a,{})]}),e.jsx(h,{}),e.jsx(l,{}),e.jsx(o,{})]})]});r.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(m,{})}));
