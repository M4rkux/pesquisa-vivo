!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n(1);var r=n(3),o=Array.from(document.querySelectorAll("input")),i=document.querySelector(".btn-submit"),c=document.querySelector("#email"),a=document.querySelector("#telefone"),u=document.querySelector("#cpf"),l=document.querySelector("form");function d(){var e=o.every(function(e){return s(e)});return e&&(e=e&&(c.value&&s(c)||a.value&&s(a)&&u.value&&s(u))),e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.checkValidity();return t&&function(e,t){e.classList.toggle("success",t),e.classList.toggle("error",!t)}(e,n),n}i.disabled=!l.checkValidity(),o.forEach(function(e){e.addEventListener("change",function(){s(this,!0),i.disabled=!d()}),e.addEventListener("keyup",function(){this.getAttribute("mask")&&(this.value=function(e,t){var n=e.replace(/\D/g,"");switch(t){case"cpf":var r=n.substring(0,11);return r.length<=6?r.replace(/(\d{3})(\d{1,3})/,"$1.$2"):r.length<=9?r.replace(/(\d{3})(\d{3})(\d{1,3})/,"$1.$2.$3"):r.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,"$1.$2.$3-$4");case"telefone":var o=n.substring(0,11);return o.length<=2?o.replace(/(\d{1,2})/,"($1"):o.length<=7?o.replace(/(\d{2})(\d{1,5})/,"($1)$2"):o.length<=10?o.replace(/(\d{2})(\d{4})(\d{1,4})/,"($1)$2-$3"):o.replace(/(\d{2})(\d{5})(\d{4})/,"($1)$2-$3")}}(this.value,this.getAttribute("mask"))),s(this,!0),i.disabled=!d()})}),l.addEventListener("submit",function(e){e.preventDefault(),i.disabled=!0,i.classList.add("loading");var t={};o.forEach(function(e){e.disabled=!0,t[e.name]=e.value}),r.SurveyService.create(t).then(function(e){if(e.ok){var t=document.createElement("div");t.classList.add("confirmation"),t.innerHTML='\n    <img class="checked" src="/pesquisa-vivo/imgs/checked.svg" />\n    <h4 class="subtitle">Tudo certo</h4>\n    <span>A VIVO agradece a sua participação.</span>\n',l.parentNode.appendChild(t),l.parentNode.removeChild(l)}else i.disabled=!1,i.classList.remove("loading"),o.map(function(e){e.disabled=!1})})})},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.SurveyService=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"create",value:function(e){return window.fetch("https://formcarry.com/s/6N2Chqopqjz/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}}]),e}()}]);