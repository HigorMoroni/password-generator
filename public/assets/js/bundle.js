!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=4)}([function(n,e,r){var t=r(1),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function c(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function u(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,e),references:1}),t.push(l)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function v(n,e){var r,t,o;if(e.singleton){var i=h++;r=m||(m=s(e)),t=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=s(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=u(n,e),s=0;s<r.length;s++){var l=c(r[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(n,e,r){(e=r(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),e.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 800px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\ninput {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\ninput:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nbutton {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n}\n\ni.fa-copy {\n  display: none;\n}\n\ni.fa-copy:hover {\n  fill: yellow;\n}",""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(n,e,r){"use strict";r.r(e);var t=function(n,e){return Math.floor(Math.random()*(e-n)+n)},o="'\"!@#$%¨&*()_+-=´[]{}~^:;.,/?°ºª§£¢¬|",i=[function(){return String.fromCharCode(t(65,91))},function(){return String.fromCharCode(t(97,123))},function(){return String.fromCharCode(t(48,58))},function(){return o[t(0,o.length)]}];var a=document.querySelector(".senha-gerada span"),c=document.querySelector(".qtd-caracteres"),u=document.querySelector(".chk-maiusculas"),s=document.querySelector(".chk-minusculas"),l=document.querySelector(".chk-numeros"),d=document.querySelector(".chk-simbolos"),f=document.querySelector(".gerar-senha"),p=document.querySelector("i.fa-copy");r(0);f.addEventListener("click",(function(){if(Number(c.value)>30)return a.innerHTML="Quantidade máxima permitida: 30",void(p.style.display="none");if(Number(c.value)<1)return a.innerHTML="Quantidade mínima permitida: 1",void(p.style.display="none");var n=function(n,e,r,o,a){if(!(e||r||o||a))return!1;var c=[];for(n=Number(n);c.length<n;){var u=t(0,5),s=!!arguments[u+1];s&&c.push(i[u]())}return c.join("")}(c.value,u.checked,s.checked,l.checked,d.checked);n?(a.innerHTML=n,p.style.display="inline"):(a.innerHTML="Nenhuma opção selecionada",p.style.display="none")})),p.addEventListener("click",(function(){a.select(),document.execCommand("copy"),alert("Senha copiada para a área de transferência!")}))}]);
//# sourceMappingURL=bundle.js.map