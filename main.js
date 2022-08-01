(()=>{var e={144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),s=n.n(o),i=n(349),c=s()(a());c.i(i.Z),c.push([e.id,'body{margin:0px;padding:0px;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}',""]);const d=c},349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,".nav-wrapper{\n    display: flex;\n    width: 100vw;\n    justify-content: space-evenly;\n    align-content: center;\n    box-shadow: 0px 2px 32px -2px rgba(0,0,0,0.8);\n}\n\n.nav-wrapper > .logo{\n    width: 20%;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    cursor: pointer;\n}\n\n.nav-wrapper > .nav-button-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.nav-wrapper > .nav-button-wrapper >.nav-button{\n    font-size: 2em;\n    font-weight: 600;\n    border-bottom: 2px solid transparent;\n    cursor: pointer;\n    transition: 0.3s ease-in-out;\n}\n\n.nav-wrapper > .nav-button-wrapper > .nav-button:hover{\n    border-bottom: 2px solid black;\n}",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},545:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(379),a=n.n(r),o=n(795),s=n.n(o),i=n(569),c=n.n(i),d=n(565),u=n.n(d),p=n(216),l=n.n(p),v=n(589),f=n.n(v),m=n(144),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),a()(m.Z,h);const b=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],u=o[d]||0,p="".concat(d," ").concat(u);o[d]=u+1;var l=n(p),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(v);else{var f=a(v,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=r(e,a),d=0;d<o.length;d++){var u=n(o[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(545),document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.add("nav-wrapper");const t=document.createElement("img");t.setAttribute("src","../src/microfood.svg"),t.classList.add("logo");const n=document.createElement("div");n.classList.add("nav-button-wrapper");const r=document.createElement("div");r.classList.add("nav-button-wrapper");const a=document.createElement("div");a.classList.add("nav-button"),a.innerText="Menu";const o=document.createElement("div");return o.classList.add("nav-button"),o.innerText="About",e.appendChild(t),e.appendChild(n),e.appendChild(r),n.appendChild(a),r.appendChild(o),e}())})();