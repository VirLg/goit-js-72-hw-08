!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){u.default(e,t,r[t])}))}return e};var l,u=(l=n("hKHmD"))&&l.__esModule?l:{default:l};var c=document.querySelector(".feedback-form"),f=document.querySelector("textarea"),i=document.querySelector("input"),s=(document.querySelector("button"),{});c.addEventListener("submit",(function(e){e.preventDefault();var t=Boolean(f.value),r=Boolean(i.value);if(e.currentTarget===e.target===t&&r){new FormData(c).forEach((function(e,t){s[t]=e,localStorage.setItem("feedback-form-state",JSON.stringify(s))}))}else alert("заповніть будь ласка всі поля форми")})),function(){var e=localStorage.getItem("feedback-form-state");if(!e)return console.log("localStorage empty");f.textContent=Object.values(s),e=JSON.parse(e),f.textContent=e.message,i.value=e.email}();var d=localStorage.getItem("feedback-form-state");response=JSON.parse(d),s=e(a)({},response),console.log(s)}();
//# sourceMappingURL=03-feedback.45be95c1.js.map
