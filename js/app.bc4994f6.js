(function(){"use strict";var a={3113:function(a,e,i){var t=i(9242),s=i(3396);function n(a,e,i,t,n,o){const r=(0,s.up)("nav-bar"),c=(0,s.up)("home-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(c)],64)}const o={class:"navbar navbar-expand-sm navbar-dark bg-dark sticky-top"},r={class:"container-fluid mx-lg-5"},c=(0,s.Uk)("Delicious "),l=(0,s._)("span",{class:"text-warning"},"Restaurant",-1),d=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav ms-auto"},p={class:"nav-item px-2"},f={class:"nav-item px-2"},v={class:"nav-item px-2"},b={class:"nav-item px-2"},g={class:"nav-item px-2"};function h(a,e,i,t,n,h){const x=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("div",r,[(0,s.Wm)(x,{class:"navbar-brand dance-font fw-bold",to:"/"},{default:(0,s.w5)((()=>[c,l])),_:1}),d,(0,s._)("div",u,[(0,s._)("ul",m,[(0,s._)("li",p,[(0,s._)("button",{class:"nav-link bg-transparent border border-0",onClick:e[0]||(e[0]=a=>h.scroll("carouselExampleIndicators"))}," Home ")]),(0,s._)("li",f,[(0,s._)("button",{class:"nav-link bg-transparent border border-0",onClick:e[1]||(e[1]=a=>h.scroll("specials"))}," Specials ")]),(0,s._)("li",v,[(0,s._)("button",{class:"nav-link bg-transparent border border-0",onClick:e[2]||(e[2]=a=>h.scroll("menu"))}," Menu ")]),(0,s._)("li",b,[(0,s._)("button",{class:"nav-link bg-transparent border border-0",onClick:e[3]||(e[3]=a=>h.scroll("chefs"))}," Chefs ")]),(0,s._)("li",g,[(0,s._)("button",{class:"nav-link bg-transparent border border-0",onClick:e[4]||(e[4]=a=>h.scroll("contact"))}," Contact ")])])])])])}var x={name:"NavBar",methods:{scroll:function(a){const e=document.getElementById(a);e.scrollIntoView({behavior:"smooth"})}}},w=i(89);const y=(0,w.Z)(x,[["render",h]]);var k=y;function C(a,e,i,t,n,o){const r=(0,s.up)("caro-sal"),c=(0,s.up)("specials-component"),l=(0,s.up)("menu-component"),d=(0,s.up)("cheffs-component"),u=(0,s.up)("contact-component");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(c),(0,s.Wm)(l),(0,s.Wm)(d),(0,s.Wm)(u)],64)}var q=i.p+"img/slider-1.03aa8f38.jpg",j=i.p+"img/slider-2.75fd6921.jpg",_=i.p+"img/slider-3.6fb20c5d.jpg";const E={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"true"},S=(0,s.uE)('<div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="'+q+'" class="img-fluid w-100" alt="..."></div><div class="carousel-item"><img src="'+j+'" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="'+_+'" class="d-block w-100" alt="..."></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',4),M=[S];function L(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",E,M)}var N={name:"CaroSal"};const O=(0,w.Z)(N,[["render",L]]);var D=O;const I={class:"specials p-3 p-md-5",id:"specials"},T=(0,s.uE)('<div class="grid"><div class="row mt-5"><div class="col-md-4 text-center"><i class="fa fa-hand-holding-water fa-4x text-success"></i><p class="h2 dance-font fw-bold my-2">Hand Picked Items</p><p class="lead fst-italic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, accusamus obcaecati velit minima reprehenderit exercitationem in. Labore error, quas quam modi eveniet molestias, eos autem dicta nemo pariatur repudiandae quibusdam. </p></div><div class="col-md-4 text-center"><i class="fa fa-heart fa-4x text-danger"></i><p class="h2 dance-font fw-bold my-2">Made with Love</p><p class="lead fst-italic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, accusamus obcaecati velit minima reprehenderit exercitationem in. Labore error, quas quam modi eveniet molestias, eos autem dicta nemo pariatur repudiandae quibusdam. </p></div><div class="col-md-4 text-center"><i class="fa fa-hand-point-up fa-4x text-warning"></i><p class="h2 dance-font fw-bold my-2">Delicious Food</p><p class="lead fst-italic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, accusamus obcaecati velit minima reprehenderit exercitationem in. Labore error, quas quam modi eveniet molestias, eos autem dicta nemo pariatur repudiandae quibusdam. </p></div></div></div>',1),P=[T];function A(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",I,P)}var W={name:"SpecialsComponent"};const Z=(0,w.Z)(W,[["render",A]]);var H=Z,F=i.p+"media/food-1.792b97dd.mp4",B=i.p+"media/food-2.005c86d1.mp4",Y=i.p+"media/food-3.eab912ac.mp4";const R=(0,s.uE)('<div class="menu-1 p-3 p-md-5 bg-dark" id="menu"><div class="grid"><div class="row align-items-center"><div class="col-md-6 text-white"><p class="h2 dance-font fw-bold"> Avacado<span class="text-warning">MixUp</span></p><p class="lead fst-italic"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt animi autem nobis eligendi accusamus unde nesciunt iste magnam quibusdam non inventore modi corrupti sint assumenda neque, magni tempora dolorum? </p></div><div class="col-md-6"><video controls autoplay class="img-fluid" src="'+F+'"></video></div></div></div></div><div class="menu-2 p-3 p-md-5"><div class="grid"><div class="row align-items-center"><div class="col-md-6"><video controls autoplay class="img-fluid" src="'+B+'"></video></div><div class="col-md-6"><p class="h2 dance-font fw-bold"> Love with<span class="text-warning">Food</span></p><p class="lead fst-italic"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt animi autem nobis eligendi accusamus unde nesciunt iste magnam quibusdam non inventore modi corrupti sint assumenda neque, magni tempora dolorum? </p></div></div></div></div><div class="menu-1 p-3 p-md-5 bg-dark"><div class="grid"><div class="row align-items-center"><div class="col-md-6 text-white"><p class="h2 dance-font fw-bold"> Chicken<span class="text-warning">Fried Melody</span></p><p class="lead fst-italic"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt animi autem nobis eligendi accusamus unde nesciunt iste magnam quibusdam non inventore modi corrupti sint assumenda neque, magni tempora dolorum? </p></div><div class="col-md-6"><video controls autoplay class="img-fluid" src="'+Y+'"></video></div></div></div></div>',3);function U(a,e,i,t,s,n){return R}var V={name:"MenuComponent"};const z=(0,w.Z)(V,[["render",U]]);var G=z,J=i.p+"img/chefs-1.858e75ec.jpg",K=i.p+"img/chefs-2.9a74c31f.jpg",Q=i.p+"img/chefs-3.286838ea.jpg",X=i.p+"img/chefs-4.3cc31ec7.jpg";const $={class:"chefs p-3 p-md-5",id:"chefs"},aa=(0,s.uE)('<div class="grid"><div class="row"><div class="col-md-3"><div class="card shadow-lg"><img src="'+J+'" class="img-fluid" alt=""><div class="card-body"><p class="h4 card-title fw-bold">Michale Niwan</p><p class="dance-font test-muted">Master Chef</p><p class="fst-italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure enim iusto tempore praesentium. Similique molestiae provident magni quia voluptas cumque ipsum cupiditate commodi dolor enim, a inventore, quaerat alias! </p><div class="d-flex justify-content-around"><i class="fab fa-facebook fa-2x text-primary"></i><i class="fab fa-twitter fa-2x text-info"></i><i class="fab fa-youtube fa-2x text-danger"></i><i class="fab fa-instagram fa-2x text-warning"></i></div></div></div></div><div class="col-md-3"><div class="card shadow-lg"><img src="'+K+'" class="img-fluid" alt=""><div class="card-body"><p class="h4 card-title fw-bold">Michale Niwan</p><p class="dance-font test-muted">Master Chef</p><p class="fst-italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure enim iusto tempore praesentium. Similique molestiae provident magni quia voluptas cumque ipsum cupiditate commodi dolor enim, a inventore, quaerat alias! </p><div class="d-flex justify-content-around"><i class="fab fa-facebook fa-2x text-primary"></i><i class="fab fa-twitter fa-2x text-info"></i><i class="fab fa-youtube fa-2x text-danger"></i><i class="fab fa-instagram fa-2x text-warning"></i></div></div></div></div><div class="col-md-3"><div class="card shadow-lg"><img src="'+Q+'" class="img-fluid" alt=""><div class="card-body"><p class="h4 card-title fw-bold">Michale Niwan</p><p class="dance-font test-muted">Master Chef</p><p class="fst-italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure enim iusto tempore praesentium. Similique molestiae provident magni quia voluptas cumque ipsum cupiditate commodi dolor enim, a inventore, quaerat alias! </p><div class="d-flex justify-content-around"><i class="fab fa-facebook fa-2x text-primary"></i><i class="fab fa-twitter fa-2x text-info"></i><i class="fab fa-youtube fa-2x text-danger"></i><i class="fab fa-instagram fa-2x text-warning"></i></div></div></div></div><div class="col-md-3"><div class="card shadow-lg"><img src="'+X+'" class="img-fluid" alt=""><div class="card-body"><p class="h4 card-title fw-bold">Michale Niwan</p><p class="dance-font test-muted">Master Chef</p><p class="fst-italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure enim iusto tempore praesentium. Similique molestiae provident magni quia voluptas cumque ipsum cupiditate commodi dolor enim, a inventore, quaerat alias! </p><div class="d-flex justify-content-around"><i class="fab fa-facebook fa-2x text-primary"></i><i class="fab fa-twitter fa-2x text-info"></i><i class="fab fa-youtube fa-2x text-danger"></i><i class="fab fa-instagram fa-2x text-warning"></i></div></div></div></div></div></div>',1),ea=[aa];function ia(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",$,ea)}var ta={name:"CheffsComponent"};const sa=(0,w.Z)(ta,[["render",ia]]);var na=sa;const oa={class:"p-3 p-md-5 bg-dark",id:"contact"},ra=(0,s.uE)('<div class="grid"><div class="row align-items-center d-flex justify-content-between"><div class="col-md-4 text-white mb-3 mb-md-0"><p>Copyright © 2022</p><small class="dance-font">Delicious Restaurant <br> Hyderabad , Telangana <br> India , 500089</small></div><div class="col-md-4"><form action=""><div class="mb-2"><input type="text" class="form-control" placeholder="Your Name"></div><div class="mb-2"><input type="Email" class="form-control" placeholder="Email"></div><div class="mb-2"><input type="mobile" class="form-control" placeholder="Mobile"></div><div class="mb-2"><textarea rows="3" class="form-control" placeholder="Your Text"></textarea></div><div class="mb-2 d-flex justify-content-end"><input type="submit" class="btn btn-warning" placeholder="Submit"></div></form></div></div></div>',1),ca=[ra];function la(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("footer",oa,ca)}var da={name:"ContactComponent"};const ua=(0,w.Z)(da,[["render",la]]);var ma=ua,pa={components:{CaroSal:D,SpecialsComponent:H,MenuComponent:G,CheffsComponent:na,ContactComponent:ma}};const fa=(0,w.Z)(pa,[["render",C]]);var va=fa,ba={components:{NavBar:k,HomeView:va}};const ga=(0,w.Z)(ba,[["render",n]]);var ha=ga,xa=i(2483);const wa=[{path:"/",name:"home",component:va},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,4335))}],ya=(0,xa.p7)({history:(0,xa.PO)("/"),routes:wa});var ka=ya,Ca=i(65),qa=(0,Ca.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});i(3455);(0,t.ri)(ha).use(qa).use(ka).mount("#app")}},e={};function i(t){var s=e[t];if(void 0!==s)return s.exports;var n=e[t]={exports:{}};return a[t].call(n.exports,n,n.exports,i),n.exports}i.m=a,function(){var a=[];i.O=function(e,t,s,n){if(!t){var o=1/0;for(d=0;d<a.length;d++){t=a[d][0],s=a[d][1],n=a[d][2];for(var r=!0,c=0;c<t.length;c++)(!1&n||o>=n)&&Object.keys(i.O).every((function(a){return i.O[a](t[c])}))?t.splice(c--,1):(r=!1,n<o&&(o=n));if(r){a.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[t,s,n]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.f={},i.e=function(a){return Promise.all(Object.keys(i.f).reduce((function(e,t){return i.f[t](a,e),e}),[]))}}(),function(){i.u=function(a){return"js/about.c1e42ef4.js"}}(),function(){i.miniCssF=function(a){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="bootstrap_project:";i.l=function(t,s,n,o){if(a[t])a[t].push(s);else{var r,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==e+n){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",e+n),r.src=t),a[t]=[s];var m=function(e,i){r.onerror=r.onload=null,clearTimeout(p);var s=a[t];if(delete a[t],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(a){return a(i)})),e)return e(i)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var a={143:0};i.f.j=function(e,t){var s=i.o(a,e)?a[e]:void 0;if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(i,t){s=a[e]=[i,t]}));t.push(s[2]=n);var o=i.p+i.u(e),r=new Error,c=function(t){if(i.o(a,e)&&(s=a[e],0!==s&&(a[e]=void 0),s)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,s[1](r)}};i.l(o,c,"chunk-"+e,e)}},i.O.j=function(e){return 0===a[e]};var e=function(e,t){var s,n,o=t[0],r=t[1],c=t[2],l=0;if(o.some((function(e){return 0!==a[e]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(c)var d=c(i)}for(e&&e(t);l<o.length;l++)n=o[l],i.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return i.O(d)},t=self["webpackChunkbootstrap_project"]=self["webpackChunkbootstrap_project"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(3113)}));t=i.O(t)})();
//# sourceMappingURL=app.bc4994f6.js.map