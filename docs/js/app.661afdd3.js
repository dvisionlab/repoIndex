(function(t){function e(e){for(var n,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},i=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"104a61b6"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var s=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/repoIndex/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},1:function(t,e){},cd49:function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",{attrs:{color:"secondary"}},[r("div",{attrs:{id:"app","data-app":"","app-data":"true",light:""}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)])],1)},i=[],a=r("2877"),c={},u=Object(a["a"])(c,o,i,!1,null,null,null),s=u.exports,l=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0",staticStyle:{"background-color":"black"},attrs:{"fill-height":""}},[r("v-card",{staticClass:"mt-4",staticStyle:{width:"100%"}},[r("v-toolbar",{attrs:{color:"primary"}},[r("v-app-bar-nav-icon"),r("v-toolbar-title",[t._v("DVLab Shortcuts")]),r("v-spacer"),r("img",{attrs:{src:"https://www.dvisionlab.com/images/logo_dv.png"}}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),r("v-card",{staticClass:"mx-auto my-4",attrs:{width:"700"}},[r("v-list",{attrs:{color:"secondary"}},[r("v-list-group",{attrs:{value:!0,"prepend-icon":"mdi-application-brackets"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-title",{staticClass:"text-h6"},[t._v("Repos")])]},proxy:!0}])},t._l(t.items,(function(e,n){return r("v-list-group",{key:e.id,attrs:{"no-action":"","sub-group":"","prepend-icon":e.icon},on:{change:function(r){return t.save(e.active,n)}},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6",domProps:{textContent:t._s(e.group)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(r){t.$set(e,"active",r)},expression:"item.active"}},t._l(e.repos,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-title",{staticClass:"text-overline"},[t._v(t._s(e.name))]),r("v-list-item-subtitle",[t._v(" last push: "+t._s(t.formatDate(new Date(e.pushed_at)))+" ")]),r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary lighten-3"},domProps:{textContent:t._s("mdi-github")},on:{click:function(r){return t.openLink(e.html_url,!1)}}})],1),r("v-list-item-icon",[r("v-icon",{attrs:{color:"primary lighten-3"},domProps:{textContent:t._s("mdi-microsoft-visual-studio-code")},on:{click:function(r){return t.openLink(e.html_url,!0)}}})],1)],1)})),1)})),1),r("v-divider"),r("v-list-item",{attrs:{href:"https://github.com/pulls?q=is%3Aopen+is%3Apr+archived%3Afalse+user%3Advisionlab",target:"_blank"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-source-pull")])],1),r("v-list-item-title",{staticClass:"text-h6"},[t._v("Pending Pull Requests")])],1)],1)],1)],1)],1)},d=[],v=r("9ab4"),f=r("9355"),m=r("f22c"),h=function(t){if(g("repoIndex")||y("repoIndex",{}),Array.isArray(t)){var e=t.map((function(t){return{id:t.id,active:t.active}}));y("repoIndex",e)}},b=function(t){var e=g("repoIndex");return e&&(t=t.map((function(t){var r=e.find((function(e){return e.id==t.id}));return t.active=!!r&&r.active,t}))),t},g=function(t){var e=localStorage.getItem(t),r=e?JSON.parse(e):null;return r},y=function(t,e){localStorage.setItem("repoIndex",JSON.stringify(e))};function _(){return Object(v["a"])(this,void 0,void 0,(function(){var t,e,r,n,o,i,a,c,u,s,l;return Object(v["b"])(this,(function(p){switch(p.label){case 0:return t="dvisionlab",e=localStorage.getItem("githubKey"),e?(r=Object(m["a"])(e),[4,r()]):[3,2];case 1:p.sent(),p.label=2;case 2:return n=new f["a"]({userAgent:"prova/v1",auth:e}),[4,n.rest.repos.listForOrg({org:t,sort:"pushed",direction:"desc",per_page:100})];case 3:for(s in o=p.sent(),i=o.data.map((function(t){return t.icon="mdi-open-in-new",t.group=t.private?"Private Projects":"Open Source Libraries",t})),a=i.reduce((function(t,e,r,n,o){return void 0===o&&(o=e.group),(t[o]||(t[o]=[])).push(e),t}),{}),console.log("grouped",a),c=0,u=[],a)l={id:++c,group:s,repos:a[s],active:!1,icon:a[s][0].private?"mdi-folder-key":"mdi-account-group"},u.push(l);return[2,u]}}))}))}var w=n["default"].extend({data:function(){return{items:[]}},methods:{openLink:function(t,e){console.log("open",t),e&&(t=t.replace(".com",".dev")),window.open(t,"_blank")},formatDate:function(t){var e={year:"numeric",month:"numeric",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},r=new Intl.DateTimeFormat("it-IT",e).format(t);return r},save:function(t,e){var r=[];this.items.forEach((function(t){var e={id:0,group:"",repos:[],active:!1,icon:""},n=Object.assign(e,t);r.push(n)})),r[e].active=!r[e].active,h(r)}},beforeMount:function(){return Object(v["a"])(this,void 0,void 0,(function(){var t;return Object(v["b"])(this,(function(e){switch(e.label){case 0:return[4,_()];case 1:return t=e.sent(),this.items=b(t),[2]}}))}))}}),k=w,x=Object(a["a"])(k,p,d,!1,null,null,null),O=x.exports;n["default"].use(l["a"]);var j=[{path:"/",name:"List",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],S=new l["a"]({mode:"history",base:"/repoIndex/",routes:j}),P=S,C=r("2f62");n["default"].use(C["a"]);var I=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=r("ce5b"),L=r.n(A),T=(r("bf40"),r("5363"),r("fcf4"));n["default"].use(L.a);var E=new L.a({theme:{dark:!0,themes:{light:{primary:T["a"].purple,secondary:T["a"].grey.darken1,accent:T["a"].shades.black,error:T["a"].red.accent3},dark:{primary:T["a"].blue.lighten1,secondary:T["a"].grey.darken3,accent:T["a"].shades.black,error:T["a"].red.accent3}}}});n["default"].config.productionTip=!1,new n["default"]({router:P,store:I,vuetify:E,render:function(t){return t(s)}}).$mount("#app")}});
//# sourceMappingURL=app.661afdd3.js.map