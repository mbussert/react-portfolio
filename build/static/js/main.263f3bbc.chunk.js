(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a(52)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/html5-logo.9f2e1637.svg"},function(e,t,a){e.exports=a.p+"static/media/css-logo.79afcf47.svg"},function(e,t,a){e.exports=a.p+"static/media/js-logo.9c8b1450.svg"},function(e,t,a){e.exports=a.p+"static/media/reactjs-logo.70384772.svg"},function(e,t,a){e.exports=a.p+"static/media/nodejs-logo.5c376133.svg"},function(e,t,a){e.exports=a.p+"static/media/bootstrap-logo.d42cdb53.svg"},function(e,t,a){e.exports=a.p+"static/media/github-logo.aff33068.svg"},function(e,t,a){e.exports=a.p+"static/media/tailwind-logo.760a3ee4.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql-logo.78d3a4b1.svg"},function(e,t,a){e.exports=a.p+"static/media/mongodb-logo.554c7d4b.svg"},function(e,t,a){e.exports=a.p+"static/media/expressjs-logo.9de32921.svg"},function(e,t,a){e.exports=a.p+"static/media/sass-logo.705dcdcf.svg"},function(e,t,a){e.exports=a.p+"static/media/empdir.bfbded94.png"},function(e,t,a){e.exports=a.p+"static/media/budgettracker.37ebf316.png"},function(e,t,a){e.exports=a.p+"static/media/giftez.c5058126.png"},function(e,t,a){e.exports=a.p+"static/media/techblog.a89839c6.png"},function(e,t,a){e.exports=a.p+"static/media/insure.592087c1.png"},function(e,t,a){e.exports=a.p+"static/media/fitnesstracker.c6dfaaa9.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),i=a(21),n=a.n(i),s=a(5),o=a(8),c=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,m);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(s.a,Object.assign({},r,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},v=a(11),u=a(3),h=a.n(u),p=a(17),b=l.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),i=Object(v.a)(a,2),n=i[0],s=i[1],o=Object(r.useState)([]),c=Object(v.a)(o,2),m=c[0],d=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){b(),h()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(r.useEffect)((function(){b(),h()}),[n]),l.a.createElement(l.a.Fragment,null,e.children())}));b.propTypes={children:h.a.func.isRequired};var f=b,E=a(13),g=a(1),N=a.n(g),w=a(7),y=["className","src","width","height","alt"],O=function(e){var t=e.className,a=e.src,i=e.width,n=e.height,s=e.alt,o=Object(c.a)(e,y),m=Object(r.useState)(!1),d=Object(v.a)(m,2),u=d[0],h=d[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,r=document.createElement("img");u||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:i,height:n,alt:s,onLoad:function(){h(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var x=O,j=["className"],k=function(e){var t=e.className,a=Object(c.a)(e,j),r=N()("brand",t);return l.a.createElement("div",Object.assign({},a,{className:r}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(w.a,{to:"#home",onClick:function(){return window.location.replace("/#home")}},"MB")))},D=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,i=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,D),d=Object(r.useState)(!1),u=Object(v.a)(d,2),h=u[0],p=u[1],b=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){return h&&E(),document.addEventListener("keydown",y),document.addEventListener("click",O),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",O),g()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)};var y=function(e){h&&27===e.keyCode&&g()},O=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&g()},x=N()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:x}),l.a.createElement("div",{className:"container",id:"home"},l.a.createElement("div",{className:N()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(k,null),!i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?g:E},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:N()("header-nav",h&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(w.a,{to:"#home",onClick:function(){g(),window.location.replace("/#home")}},"Home")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"#experience",onClick:function(){g(),window.location.replace("/#experience")}},"Experience")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"#portfolio",onClick:function(){g(),window.location.replace("/#portfolio")}},"Portfolio"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(w.a,{to:"#contact",className:"button button-primary button-wide-mobile button-sm",onClick:function(){g(),window.location.replace("/#contact")}},"Contact")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var S=C,L=["className"],M=function(e){var t=e.className,a=Object(c.a)(e,L),r=N()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:r}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(w.a,{to:"#home",onClick:function(){return window.location.replace("/#home")}},"Home")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"#contact",onClick:function(){return window.location.replace("/#contact")}},"Contact")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"/MichaelBussert-Resume.pdf"},"Resume")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"#portfolio",onClick:function(){return window.location.replace("/#portfolio")}},"Portfolio"))))},B=["className"],P=function(e){var t=e.className,a=Object(c.a)(e,B),r=N()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:r}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/mbussert",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"GitHub"),l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/mbussert",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})," "))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/michaelbussert/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"LinkedIn"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})," ")))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:mbussert@gmail.com"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Email"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})," "))))))},T=["className","topOuterDivider","topDivider"],A=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,i=Object(c.a)(e,T),n=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},i,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:N()("site-footer-inner",r&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(k,null),l.a.createElement(P,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(M,null),l.a.createElement("div",{className:"footer-copyright"},"Made with \u2764")))))};A.defaultProps={topOuterDivider:!1,topDivider:!1};var H=A,z=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(H,null))},_=a(4),R={types:{topOuterDivider:h.a.bool,bottomOuterDivider:h.a.bool,topDivider:h.a.bool,bottomDivider:h.a.bool,hasBgColor:h.a.bool,invertColor:h.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},F={types:Object(_.a)({},R.types),defaults:Object(_.a)({},R.defaults)},I={types:Object(_.a)(Object(_.a)({},R.types),{},{invertMobile:h.a.bool,invertDesktop:h.a.bool,alignTop:h.a.bool,imageFill:h.a.bool}),defaults:Object(_.a)(Object(_.a)({},R.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},G={types:Object(_.a)(Object(_.a)({},R.types),{},{pushLeft:h.a.bool}),defaults:Object(_.a)(Object(_.a)({},R.defaults),{},{pushLeft:!1})},W=["className"],q=function(e){var t=e.className,a=Object(c.a)(e,W),r=N()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:r}))},J=["className","tag","color","size","loading","wide","wideMobile","disabled"],Q=function(e){var t=e.className,a=e.tag,r=e.color,i=e.size,n=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,J),v=N()("button",r&&"button-".concat(r),i&&"button-".concat(i),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),u=a;return l.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};Q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Z=Q,U=["className","children","handleClose","show","closeHidden","video","videoTag"],K=function(e){var t=e.className,a=e.children,i=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,U);Object(r.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",h),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",h)}})),Object(r.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&i(e)},h=function(e){e.stopPropagation()},p=N()("modal",n&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",Object.assign({},d,{className:p,onClick:i}),l.a.createElement("div",{className:"modal-inner",onClick:h},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:i}),l.a.createElement("div",{className:"modal-content"},a)))))};K.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var V=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],$=Object(_.a)({},F.defaults),X=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,V),u=Object(r.useState)(!1),h=Object(v.a)(u,2),p=(h[0],h[1],N()("hero section center-content",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t)),b=N()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},d,{className:p}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:b},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Michael Bussert"),l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom text-color-primary","data-reveal-delay":"200"},"Web Developer"),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"I help clients deliver their brands, products, and ideas to the world. I can also make a mean mac & cheese."),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(q,null,l.a.createElement(Z,{tag:"a",color:"primary",wideMobile:!0,href:"#portfolio",onClick:function(){return window.location.replace("/#portfolio")}},"See My Work"),l.a.createElement(Z,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/mbussert",target:"_blank",rel:"noopener noreferrer"},"View Github")),l.a.createElement("div",{className:"m-0 mt-32 reveal-from-bottom ","data-reveal-delay":"500"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",className:"arrow-color"},l.a.createElement("path",{d:"M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-17 1h4v-8h2v8h4l-5 6-5-6z"})))))))))};X.defaultProps=$;var Y=X,ee=["className","data","children","tag"],te=function(e){var t=e.className,a=e.data,r=e.children,i=e.tag,n=Object(c.a)(e,ee),s=N()("section-header",t),o=i;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},n,{className:s}),l.a.createElement("div",{className:"container-xs"},r,a.title&&l.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};te.defaultProps={children:null,tag:"h2"};var ae=te,re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],le=Object(_.a)({},G.defaults),ie=function(e){var t=e.className,r=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,re),u=N()("features-tiles section",r&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=N()("features-tiles-inner section-inner pt-5",n&&"has-top-divider",s&&"has-bottom-divider"),p=N()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},v,{className:u}),l.a.createElement("div",{className:"container has-top-divider reveal-from-bottom",id:"experience"},l.a.createElement("div",{className:h},l.a.createElement(ae,{data:{title:"Technologies Used",paragraph:""},className:"reveal-from-bottom center-content","data-reveal-delay":"150"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(33),alt:"HTML 5",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"HTML 5")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(34),alt:"CSS 3",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"CSS 3")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(35),alt:"JavaScript",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"JavaScript")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(36),alt:"React",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"React")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(37),alt:"Node JS",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"Node.js")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(38),alt:"Bootstrap",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"Bootstrap")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"150"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(39),alt:"GitHub",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"GitHub")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(40),alt:"Tailwind",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"Tailwind")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(41),alt:"MySQL",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"MySQL")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"150"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(42),alt:"MongoDB",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"MongoDB")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{className:"svg-white",src:a(43),alt:"Express JS",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"Express.js")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(x,{src:a(44),alt:"Sass CSS",width:80,height:80}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-4"},"Sass"))))))))};ie.defaultProps=le;var ne=ie,se=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],oe=Object(_.a)({},I.defaults),ce=function(e){var t=e.className,r=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,h=e.imageFill,p=Object(c.a)(e,se),b=N()("features-split section",r&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=N()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=N()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return l.a.createElement("section",Object.assign({},p,{className:b}),l.a.createElement("div",{className:"container",id:"portfolio"},l.a.createElement("div",{className:f},l.a.createElement(ae,{data:{title:"Portfolio",paragraph:""},className:"center-content reveal-from-bottom"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"React.js Powered"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Employee Directory"),l.a.createElement("p",{className:"m-0"},"A simple and easy-to-use employee directory application built with React and Material-UI. Each column of data is sortable (asc & desc), searchable, and can also be filtered and hidden to allow the user to narrow their results. The application makes an API call, parses the response and automatically builds out the table. A user is able to view 25, 50, or 100 employees per page."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://mbussert.github.io/react-employee-directory/",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("span",null," | "),l.a.createElement("a",{href:"https://github.com/mbussert/react-employee-directory",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(45),alt:"Employee Directory",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Progressive Web Application & MongoDB"),l.a.createElement("h3",{className:"mt-0 mb-12"},"PWA Budget Tracker"),l.a.createElement("p",{className:"m-0"},"Allows users a fast and easy way to track their money. Includes offline functionality so that the application is useable without data or an internet connection. As a progressive web application (PWA), a user can install this application on their smart phone or tablet and even use it offline. Enter either credits or debits to your personal budget and track purchases with ease. When the app detects an internet connection, it will automatically push all entered data to the database."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://enigmatic-scrubland-28964.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("span",null," | "),l.a.createElement("a",{href:"https://github.com/mbussert/budget-tracker",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(46),alt:"Budget Tracker",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"MySQL | Handlebars | Tailwind CSS | Express | Axios"),l.a.createElement("h3",{className:"mt-0 mb-12"},"GiftEZ"),l.a.createElement("p",{className:"m-0"},"GiftEZ helps users create personalized wishlists and gives them the option to email them to their friends and family. The user can name their Wishlist fun names to make it more inviting, but still includes a direct link the to the specific item they want to share. Once a user registers an account, they are able to search through the GiftEZ app for any products listed on Amazon.com by using the Rainforest API. Darkmode theme persists throughout the website based on the user\u2019s preferences or system setting."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://giftez.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("span",null," | "),l.a.createElement("a",{href:"https://github.com/mbussert/giftez",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(47),alt:"GiftEZ",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Content Management System"),l.a.createElement("h3",{className:"mt-0 mb-12"},"The Tech Blog - CMS"),l.a.createElement("p",{className:"m-0"},"A content management system (CMS) style blog platform that allows users to create accounts, post, comment, edit, and delete their own posts. Built using HTML, CSS, Bootstrap v5, jQuery, Handlebars.js, Express.js, Node.js, Sequelize, MySQL, and Express-Session."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://afternoon-spire-21362.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("span",null," | "),l.a.createElement("a",{href:"https://github.com/mbussert/tech-blog",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(48),alt:"The Tech Blog",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"FrontendMentor.io / Practice"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Insure Landing Page"),l.a.createElement("p",{className:"m-0"},"A landing page developed for Insure as part of the FrontendMentor.io challenge. Created using only HTML, CSS (Grid & Flexbox)."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://github.com/mbussert/insure-landing-page",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(49),alt:"GiftEZ",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"MongoDB & Mongoose Backend"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Fitness Tracker"),l.a.createElement("p",{className:"m-0"},"An app to view create and track daily workouts. A user can log multiple exercises in a workout on a given day and also track the name, type, weight, sets, reps, and duration of exercise. A user creates a new workout or continues an already existing workout by adding an exercise. All workouts are tracked and displayed on the user dashboard."),l.a.createElement("div",{className:"text-color-primary fw-600 tt-u mt-8"},l.a.createElement("a",{href:"https://agile-waters-85580.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Demo"),l.a.createElement("span",null," | "),l.a.createElement("a",{href:"https://github.com/mbussert/workout-tracker",target:"_blank",rel:"noopener noreferrer"},"Repository"))),l.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(x,{src:a(50),alt:"Fitness Tracker",width:528,height:396})))))))};ce.defaultProps=oe;var me=ce,de=["className","children","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ve=Object(_.a)({children:null},F.defaults),ue=function(e){var t=e.className,a=e.children,r=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=Object(c.a)(e,de),v=N()("section",r&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),u=N()("section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},d,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:u},a)))};ue.defaultProps=ve;var he=["className","children","labelHidden","id"],pe=function(e){var t=e.className,a=e.children,r=e.labelHidden,i=e.id,n=Object(c.a)(e,he),s=N()("form-label",r&&"screen-reader",t);return l.a.createElement("label",Object.assign({},n,{className:s,htmlFor:i}),a)};pe.defaultProps={children:null,labelHidden:!1,id:null};var be=pe,fe=["children","className","status"],Ee=function(e){var t=e.children,a=e.className,r=e.status,i=Object(c.a)(e,fe),n=N()("form-hint",r&&"text-color-".concat(r),a);return l.a.createElement("div",Object.assign({},i,{className:n}),t)};Ee.defaultProps={children:null,status:!1};var ge=Ee,Ne=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],we=function(e){var t=e.className,a=e.children,r=e.label,i=e.labelHidden,n=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(c.a)(e,Ne),g=N()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),w=N()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),y="textarea"===n?"textarea":"input";return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement(be,{labelHidden:i,id:E.id},r),l.a.createElement("div",{className:g},l.a.createElement(y,Object.assign({},E,{type:"textarea"!==n?n:null,className:w,name:s,disabled:m,value:d,placeholder:p,rows:"textarea"===n?b:null})),a),f&&l.a.createElement(ge,{status:o},f))};we.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ye=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Oe=Object(_.a)(Object(_.a)({},F.defaults),{},{split:!1}),xe=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,i=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,ye),v=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=N()("cta-inner section-inner",i&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:v}),l.a.createElement("div",{className:"container",id:"contact"},l.a.createElement("div",{className:u},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"Interested in working together?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(Z,{tag:"a",className:"",color:"high-contrast",wideMobile:!0,href:"mailto:mbussert@gmail.com"},"Let\u2019s Chat!")))))};xe.defaultProps=Oe;var je=xe,ke=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y,{className:"illustration-section-01"}),l.a.createElement(ne,null),l.a.createElement(me,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(je,{split:!0}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/react-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var De=function(){var e=Object(r.useRef)(),t=Object(s.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),l.a.createElement(f,{ref:e,children:function(){return l.a.createElement(s.c,null,l.a.createElement(d,{exact:!0,path:"/",component:ke,layout:z}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);var Ce=Object(o.a)();n.a.render(l.a.createElement(s.b,{history:Ce},l.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[23,1,2]]]);
//# sourceMappingURL=main.263f3bbc.chunk.js.map