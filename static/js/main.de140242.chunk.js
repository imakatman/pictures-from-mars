(window["webpackJsonppictures-from-mars"]=window["webpackJsonppictures-from-mars"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),s=t.n(r),l=(t(9),t(1));t(10),t(11);var o=function(e){var a,t=e.photos,r=e.turnOffSlideshow,s=Object(n.useState)(0),o=Object(l.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)({img_src:"",earth_date:"",sol:"",camera:{full_name:""}}),f=Object(l.a)(u,2),p=f[0],d=f[1],v=Object(n.useState)(!1),h=Object(l.a)(v,2),E=h[0],w=h[1];function b(e,a){d(e)}return Object(n.useEffect)((function(){b(t[0]),m(i++),w(!0)}),[]),Object(n.useEffect)((function(){E&&t.length>0&&0===i&&(a=setInterval((function(){i<=t.length&&(b(t[i]),m(i++))}),2500))}),[t,E]),i===t.length?(m(0),clearInterval(a),r()):c.a.createElement("div",{className:"row slideshow-container"},c.a.createElement("div",{className:"col s7 image-wrapper valign-wrapper"},p&&c.a.createElement("div",{className:"slideshow-image",style:{backgroundImage:"url(".concat(p.img_src,")")}})),c.a.createElement("div",{className:"col s5 fieldCollection-container"},c.a.createElement("div",{className:"fieldCollection-wrapper valign-wrapper"},c.a.createElement("div",{className:"field-wrapper"},c.a.createElement("p",{className:"field"},"Earth Date"),c.a.createElement("p",{className:"value"},p?p.earth_date:"")),c.a.createElement("div",{className:"field-wrapper"},c.a.createElement("p",{className:"field"},"Sol Date"),c.a.createElement("p",{className:"value"},p?p.sol:"")),c.a.createElement("div",{className:"field-wrapper"},c.a.createElement("p",{className:"field"},"Location"),c.a.createElement("p",{className:"value"},"Mars")),c.a.createElement("div",{className:"field-wrapper"},c.a.createElement("p",{className:"field"},"Rover"),c.a.createElement("p",{className:"value"},"Curiosity")),c.a.createElement("div",{className:"field-wrapper"},c.a.createElement("p",{className:"field"},"Camera"),c.a.createElement("p",{className:"value"},p?p.camera.full_name:"")))))},i="https://api.nasa.gov/mars-photos/api/v1/rovers/",m="8m8bkcVYqxE5j0vQL2wk1bpiBGibgaqCrOvwZVyU";var u=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),f=u[0],p=u[1],d=Object(n.useState)(),v=Object(l.a)(d,2),h=v[0],E=v[1];return Object(n.useEffect)((function(){fetch("".concat(i,"?api_key=").concat(m)).then((function(e){return e.json()})).then((function(e){var a=e.rovers[0].max_sol;return r(a)})).catch((function(e){return e.message}))}),[]),Object(n.useEffect)((function(){t&&fetch("".concat(i,"/curiosity/photos?api_key=").concat(m,"&sol=").concat(t)).then((function(e){return e.json()})).then((function(e){var a=e.photos.filter((function(e){return"MAST"!==e.camera.name}));p(a),E(!0)})).catch((function(e){return e.message}))}),[t]),Object(n.useEffect)((function(){if(!1===h){var e=Number(t)-1;r(e)}}),[h]),c.a.createElement("div",{className:"container valign-wrapper"},c.a.createElement("div",{className:"row App-slideshow-container"},h&&c.a.createElement(o,{photos:f,turnOffSlideshow:function(){return E(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.de140242.chunk.js.map