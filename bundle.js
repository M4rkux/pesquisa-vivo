!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){"use strict";t(1);var r=t(3),o=Array.from(document.querySelectorAll("input")),i=document.querySelector(".btn-submit"),c=document.querySelector("form");function a(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.checkValidity();return n&&function(e,n){e.classList.toggle("success",n),e.classList.toggle("error",!n)}(e,t),t}i.disabled=!c.checkValidity(),o.forEach(function(e){e.addEventListener("change",function(){a(this,!0),i.disabled=!o.every(function(e){return a(e)})})}),c.addEventListener("submit",function(e){e.preventDefault(),i.disabled=!0,i.classList.add("loading");var n={};o.forEach(function(e){e.disabled=!0,n[e.name]=e.value}),r.SurveyService.create(n).then(function(e){if(e.ok){var n=document.createElement("div");n.classList.add("confirmation"),n.innerHTML='\n    <img class="checked" src="/pesquisa-vivo/imgs/checked.svg" />\n    <h4 class="subtitle">Tudo certo</h4>\n    <span>A VIVO agradece a sua participação.</span>\n',c.parentNode.appendChild(n),c.parentNode.removeChild(c)}else i.disabled=!1,i.classList.remove("loading"),o.map(function(e){e.disabled=!1})})})},function(e,n,t){},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.SurveyService=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"create",value:function(e){return window.fetch("https://formcarry.com/s/6N2Chqopqjz/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}}]),e}()}]);