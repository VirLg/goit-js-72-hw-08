var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function v(e,t,n){var o,r,i,u,a,f,c=0,v=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,a=setTimeout(O,t),v?g(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function O(){var e=d();if(j(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-f);return p?s(n,i-(e-c)):n}(e))}function h(e){return a=void 0,y&&o?g(e):(o=r=void 0,u)}function T(){var e=d(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return S(f);if(p)return a=setTimeout(O,t),g(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=b(t)||0,m(n)&&(v=!!n.leading,i=(p="maxWait"in n)?l(b(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},T.flush=function(){return void 0===a?u:h(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=m(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=o.test(e);return a||r.test(e)?i(e.slice(2),a?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),y=document.querySelector("textarea"),g=document.querySelector("input");document.querySelector("button");let S={},j={};p.addEventListener("input",(function(e){new FormData(p).forEach(((e,t)=>{var n;S[t]=e,localStorage.setItem("feedback-form-state",JSON.stringify(S)),j=null!==(n=localStorage.getItem("feedback-form-state"))&&void 0!==n?n:{},j=JSON.parse(j),S={...j}}))}));let O=localStorage.getItem("feedback-form-state");var h;O=null!==(h=JSON.parse(O))&&void 0!==h?h:{},Object.entries(O).forEach((([e,t],n,o)=>{var r,i;y.value=null!==(r=O.message)&&void 0!==r?r:"",g.value=null!==(i=O.email)&&void 0!==i?i:""})),p.addEventListener("submit",(function(e){e.preventDefault(),""!==g.value&&""!==y.value?(console.log(O),console.log(S),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):alert("Заповніть поля форми")}));
//# sourceMappingURL=03-feedback.1ccb43e5.js.map