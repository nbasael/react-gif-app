(this["webpackJsonpcurso-gif-app"]=this["webpackJsonpcurso-gif-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=(n(15),n(2)),u=n(9),s=n(0),o=function(t){var e=t.setCategoria,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(s.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),o(""))}(t)},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){return function(t){o(t.target.value)}(t)},placeholder:"Ingrese algo para su busqueda"})})},j=n(10),d=n(6),f=n.n(d),l=n(8),p=function(){var t=Object(l.a)(f.a.mark((function t(e){var n,r,a,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=iMhjCfo1rTM1RyItpGV8MjIHnTz2SEzH&q="+e+"&limit=20",t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},h=function(t){var e=t.categoria,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{children:[" ",e," "]}),c&&Object(s.jsx)("p",{children:"Cargando data"}),Object(s.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(s.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategoria:a}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(h,{categoria:t},t)}))})]})};c.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4ac8b3fd.chunk.js.map