(this.webpackJsonpcatstagram=this.webpackJsonpcatstagram||[]).push([[0],{62:function(e,t,c){},63:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(47),s=c.n(r),i=c(19),j=(c(62),c(63),c(83)),o=c(54),l=c(7),u=c(17),b=c.n(u),d=c(25),h=c(12),O=(c(66),"ff8829d2-9293-40b0-96b8-60c98e828e80"),x=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,n,a,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r.length>1&&void 0!==r[1]?r[1]:6,"number"===typeof t){e.next=3;break}throw new Error("getCatBreeds \ud568\uc218\uc758 currentPage \ud30c\ub77c\ubbf8\ud130\ub294 number \ud615\uc2dd\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.");case 3:if("number"===typeof c){e.next=5;break}throw new Error("getCatBreeds \ud568\uc218\uc758 limit \ud30c\ub77c\ubbf8\ud130\ub294 number \ud615\uc2dd\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.");case 5:return e.next=7,fetch("https://api.thecatapi.com/v1/breeds?page=".concat(t,"&limit=").concat(c),{headers:{"x-api-key":O}});case 7:return n=e.sent,a=n.json(),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t){e.next=2;break}throw new Error("catId \ud30c\ub77c\ubbf8\ud130\ub294 string \ud615\uc2dd\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.");case 2:return e.next=4,fetch("https://api.thecatapi.com/v1/images/search?breed_id=".concat(t),{headers:{"x-api-key":O}});case 4:return c=e.sent,n=c.json(),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=c(50),m=c(52),v=c(2),g=function(e){var t=e.addFavorite,c=e.id;return Object(v.jsxs)("div",{className:"QuickButton",children:[Object(v.jsx)("button",{children:Object(v.jsx)(f.a,{className:"heart",onClick:t})}),Object(v.jsx)(i.b,{to:"/detail/".concat(c),children:Object(v.jsx)(m.a,{className:"view"})})]})};function y(e,t){var c=Object(n.useState)((function(){try{var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)}catch(n){return console.error(n),t}})),a=Object(h.a)(c,2),r=a[0],s=a[1];return[r,function(t){try{localStorage.setItem(e,JSON.stringify(t)),s(t)}catch(c){console.error(c)}}]}var N=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(h.a)(r,2),i=s[0],j=s[1],o=Object(n.useState)(!1),l=Object(h.a)(o,2),u=(l[0],l[1]),O=y("favorites",[]),p=Object(h.a)(O,2),f=p[0],m=p[1];if(Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,x(c);case 3:t=e.sent,j(i.concat(t)),u(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),!i)return null;var N=function(e){m(f.concat(e))};return Object(v.jsxs)("div",{className:"CatWrap",children:[Object(v.jsx)("ul",{className:"Cats",children:i.map((function(e,t){return Object(v.jsxs)("li",{className:"Cat",children:[Object(v.jsx)("span",{className:"Thumb",children:Object(v.jsx)("img",{className:"Image",src:e.image?e.image.url:"https://http.cat/404"})}),Object(v.jsx)(g,{addFavorite:N,id:e.id})]},t)}))}),Object(v.jsx)("button",{onClick:function(){a(c+1)},children:"\ub354\ubcf4\uae30"})]})},S=function(){return Object(v.jsx)("main",{children:Object(v.jsx)(N,{})})},C=function(){var e=localStorage.getItem("favorites");return Object(v.jsxs)("main",{children:[Object(v.jsx)("h1",{children:"Favorite Page"}),"favorites : ",e]})},k=(c(72),function(){var e=localStorage.getItem("usercat");return Object(v.jsxs)("main",{children:[Object(v.jsx)("h1",{children:"My Page"}),"\ub0b4\uac00 \ub4f1\ub85d\ud55c \uace0\uc591\uc774 \ubaa9\ub85d : ",e,Object(v.jsx)(i.b,{className:"regBtn",to:"/catreg",children:"+"})]})}),w=function(){var e=y("usercat",[]),t=Object(h.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(""),r=Object(h.a)(a,2),s=r[0],i=r[1],j=Object(n.useState)("\ud488\uc8851"),o=Object(h.a)(j,2),u=o[0],b=o[1],d=Object(n.useState)(""),O=Object(h.a)(d,2),x=O[0],p=O[1],f=Object(n.useState)(""),m=Object(h.a)(f,2),g=m[0],N=m[1],S=Object(n.useState)("\uad6d\uac001"),C=Object(h.a)(S,2),k=C[0],w=C[1],I=Object(n.useState)(""),B=Object(h.a)(I,2),F=B[0],D=B[1],E=Object(n.useState)("\uc7a5\ubaa8"),P=Object(h.a)(E,2),T=P[0],J=P[1],M=Object(l.f)();return Object(v.jsxs)("main",{children:[Object(v.jsx)("h1",{children:"Cat Register"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(s),console.log(u),console.log(x),console.log(g),console.log(k),console.log(F),console.log(T),c({catName:s,breed:u,url:x,desc:g,country:k,lifespan:F,hair:T}),alert("\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),M.push("/mypage")},children:["\uc774\ub984 : ",Object(v.jsx)("input",{type:"text",id:"name",value:s,onChange:function(e){return i(e.target.value)},placeholder:"\uc774\ub984"}),Object(v.jsx)("br",{}),"\ud488\uc885 : ",Object(v.jsxs)("select",{id:"breed",value:u,onChange:function(e){return b(e.target.value)},children:[Object(v.jsx)("option",{value:"\ud488\uc8851",children:"\ud488\uc8851"}),Object(v.jsx)("option",{value:"\ud488\uc8852",children:"\ud488\uc8852"}),Object(v.jsx)("option",{value:"\ud488\uc8853",children:"\ud488\uc8853"}),Object(v.jsx)("option",{value:"\ud488\uc8854",children:"\ud488\uc8854"})]}),Object(v.jsx)("br",{}),"\uc774\ubbf8\uc9c0 url : ",Object(v.jsx)("input",{type:"text",id:"url",value:x,onChange:function(e){return p(e.target.value)},placeholder:"\uc774\ubbf8\uc9c0 url"}),Object(v.jsx)("br",{}),"\uc124\uba85 : ",Object(v.jsx)("input",{type:"text",id:"desc",value:g,onChange:function(e){return N(e.target.value)},placeholder:"\uc124\uba85"}),Object(v.jsx)("br",{}),"\uad6d\uac00 : ",Object(v.jsxs)("select",{value:k,onChange:function(e){return w(e.target.value)},children:[Object(v.jsx)("option",{value:"\uad6d\uac001",children:"\uad6d\uac001"}),Object(v.jsx)("option",{value:"\uad6d\uac002",children:"\uad6d\uac002"}),Object(v.jsx)("option",{value:"\uad6d\uac003",children:"\uad6d\uac003"}),Object(v.jsx)("option",{value:"\uad6d\uac004",children:"\uad6d\uac004"})]}),Object(v.jsx)("br",{}),"\uc608\uc0c1\uc218\uba85 : ",Object(v.jsx)("input",{type:"number",id:"lifespan",value:F,onChange:function(e){return D(e.target.value)}}),"\ub144",Object(v.jsx)("br",{}),"affectionate level: ",Object(v.jsxs)("select",{children:[Object(v.jsx)("option",{value:"1",children:"1"}),Object(v.jsx)("option",{value:"2",children:"2"}),Object(v.jsx)("option",{value:"3",children:"3"}),Object(v.jsx)("option",{value:"4",children:"4"})]}),Object(v.jsx)("br",{}),"\ud138\uae38\uc774 :",Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"radio",value:"\uc7a5\ubaa8",name:"hair",checked:"\uc7a5\ubaa8"===T,onChange:function(e){return J(e.target.value)}})," \uc7a5\ubaa8"]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"radio",value:"\ub2e8\ubaa8",name:"hair",checked:"\ub2e8\ubaa8"===T,onChange:function(e){return J(e.target.value)}})," \ub2e8\ubaa8"]}),Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"radio",value:"\uc774\uc911\ubaa8",name:"hair",checked:"\uc774\uc911\ubaa8"===T,onChange:function(e){return J(e.target.value)}})," \uc774\uc911\ubaa8"]}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"submit",children:"\ud655\uc778"})]})]})},I=(c(73),c(36)),B=c.n(I),F=function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){function t(){return(t=Object(d.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e.id);case 2:c=t.sent,r(c),console.log(c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(v.jsx)("div",{className:"CatDetail",children:a.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"Thumb",children:Object(v.jsx)("img",{className:"Image",src:e.url?e.url:"https://http.cat/404"})}),Object(v.jsxs)("div",{className:"Info",children:[Object(v.jsxs)("div",{children:["name : ",e.breeds[0].name]}),Object(v.jsxs)("div",{children:["origin : ",e.breeds[0].origin]}),Object(v.jsxs)("div",{className:"ability",children:[Object(v.jsx)("span",{children:"energy level : "}),Object(v.jsx)(B.a,{className:"star",rating:e.breeds[0].energy_level,starDimension:"20px",starSpacing:"2px"})]}),Object(v.jsxs)("div",{className:"ability",children:[Object(v.jsx)("span",{children:"child friendly : "}),Object(v.jsx)(B.a,{className:"star",rating:e.breeds[0].child_friendly,starDimension:"20px",starSpacing:"2px"})]}),Object(v.jsxs)("div",{className:"ability",children:[Object(v.jsx)("span",{children:"dog friendly : "}),Object(v.jsx)(B.a,{className:"star",rating:e.breeds[0].dog_friendly,starDimension:"20px",starSpacing:"2px"})]})]})]},t)}))})},D=c(53),E=function(e){var t=e.match.params.catid,c=Object(l.f)();return Object(v.jsxs)("main",{children:[Object(v.jsx)("button",{className:"backBtn",onClick:function(){return c.goBack()},children:Object(v.jsx)(D.a,{})}),Object(v.jsx)(F,{id:t})]})};j.a({dsn:"https://2a7ed4343cb44cef98b3d1a79551843d@o947482.ingest.sentry.io/5896861",integrations:[new o.a.BrowserTracing],tracesSampleRate:.1});var P=function(){return Object(v.jsx)("div",{className:"Header",children:Object(v.jsxs)("ul",{className:"Nav",children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/favorite",children:"Favorite"})}),Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/Mypage",children:"Mypage"})})]})})};var T=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("main",{children:[Object(v.jsx)(P,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(v.jsx)(l.a,{exact:!0,path:"/favorite",component:C}),Object(v.jsx)(l.a,{exact:!0,path:"/mypage",component:k}),Object(v.jsx)(l.a,{exact:!0,path:"/catreg",component:w}),Object(v.jsx)(l.a,{exact:!0,path:"/detail/:catid",component:E})]})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(i.a,{children:Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(T,{})})}),document.getElementById("root")),J()}},[[78,1,2]]]);
//# sourceMappingURL=main.ad3f0ac4.chunk.js.map