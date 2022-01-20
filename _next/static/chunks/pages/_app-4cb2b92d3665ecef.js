(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8633:function(e,t,n){"use strict";var r=n(3454);t.kP=w,t.zB=E,t.zt=k;var o,i=n(7294),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(8016)),c=(o=n(5831))&&o.__esModule?o:{default:o};function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,c,"next",e)}function c(e){d(i,r,o,a,c,"throw",e)}a(void 0)}))}}var p={baseUrl:(0,c.default)(r.env.NEXTAUTH_URL||r.env.VERCEL_URL).baseUrl,basePath:(0,c.default)(r.env.NEXTAUTH_URL).basePath,baseUrlServer:(0,c.default)(r.env.NEXTAUTH_URL_INTERNAL||r.env.NEXTAUTH_URL||r.env.VERCEL_URL).baseUrl,basePathServer:(0,c.default)(r.env.NEXTAUTH_URL_INTERNAL||r.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_getSession:()=>{}},h=(0,a.proxyLogger)(a.default,p.basePath),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive(t){"undefined"!==typeof window&&window.addEventListener("storage",function(){var n=v((function*(n){if(n.key===e){var r=JSON.parse(n.newValue);"session"===(null===r||void 0===r?void 0:r.event)&&null!==r&&void 0!==r&&r.data&&t(r)}}));return function(e){return n.apply(this,arguments)}}())},post(t){"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(l(l({},t),{},{timestamp:N()})))}}}();"undefined"===typeof window||p._eventListenersAdded||(p._eventListenersAdded=!0,y.receive((()=>p._getSession({event:"storage"}))),document.addEventListener("visibilitychange",(()=>{!document.hidden&&p._getSession({event:"visibilitychange"})}),!1));var g=(0,i.createContext)();function w(e){var t=(0,i.useContext)(g);return t||function(e){var[t,n]=(0,i.useState)(e),[r,o]=(0,i.useState)(!t);return(0,i.useEffect)((()=>{p._getSession=v((function*(){var{event:e=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=null!==e,r="storage"===e,i=p.clientMaxAge,a=parseInt(p._clientLastSync),c=N(),u=p._clientSession;if(!r&&void 0!==u){if(0===i&&!0!==t)return;if(i>0&&null===u)return;if(i>0&&c<a+i)return}void 0===u&&(p._clientSession=null),p._clientLastSync=N();var s=yield b({triggerEvent:!r});p._clientSession=s,n(s),o(!1)}catch(l){h.error("CLIENT_USE_SESSION_ERROR",l),o(!1)}})),p._getSession()})),[t,r]}(e)}function b(e){return _.apply(this,arguments)}function _(){return(_=v((function*(e){var t,n=yield x("session",e);return(null===(t=null===e||void 0===e?void 0:e.triggerEvent)||void 0===t||t)&&y.post({event:"session",data:{trigger:"getSession"}}),n}))).apply(this,arguments)}function m(e){return T.apply(this,arguments)}function T(){return(T=v((function*(e){var t;return null===(t=yield x("csrf",e))||void 0===t?void 0:t.csrfToken}))).apply(this,arguments)}function O(){return S.apply(this,arguments)}function S(){return(S=v((function*(){return x("providers")}))).apply(this,arguments)}function E(e){return L.apply(this,arguments)}function L(){return(L=v((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{callbackUrl:r=window.location,redirect:o=!0}=t,i=R(),a=yield O();if(e in a){var c="credentials"===a[e].type,u="email"===a[e].type,s=c||u,f=c?"".concat(i,"/callback/").concat(e):"".concat(i,"/signin/").concat(e),d={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(l(l({},t),{},{csrfToken:yield m(),callbackUrl:r,json:!0}))},v="".concat(f,"?").concat(new URLSearchParams(n)),h=yield fetch(v,d),y=yield h.json();if(o||!s){var g,w=null!==(g=y.url)&&void 0!==g?g:r;return window.location=w,void(w.includes("#")&&window.location.reload())}var b=new URL(y.url).searchParams.get("error");return h.ok&&(yield p._getSession({event:"storage"})),{error:b,status:h.status,ok:h.ok,url:b?null:y.url}}window.location="".concat(i,"/signin?callbackUrl=").concat(encodeURIComponent(r))}))).apply(this,arguments)}function P(){return U.apply(this,arguments)}function U(){return(U=v((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{callbackUrl:t=window.location,redirect:n=!0}=e,r=R(),o={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({csrfToken:yield m(),callbackUrl:t,json:!0})},i=yield fetch("".concat(r,"/signout"),o),a=yield i.json();if(y.post({event:"session",data:{trigger:"signout"}}),n){var c,u=null!==(c=a.url)&&void 0!==c?c:t;return window.location=u,void(u.includes("#")&&window.location.reload())}return yield p._getSession({event:"storage"}),a}))).apply(this,arguments)}function j(){var{baseUrl:e,basePath:t,clientMaxAge:n,keepAlive:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&(p.baseUrl=e),t&&(p.basePath=t),n&&(p.clientMaxAge=n),r){if(p.keepAlive=r,"undefined"===typeof window)return;null!==p._clientSyncTimer&&clearTimeout(p._clientSyncTimer),p._clientSyncTimer=setTimeout(v((function*(){p._clientSession&&(yield p._getSession({event:"timer"}))})),1e3*r)}}function k(e){var{children:t,session:n,options:r}=e;return j(r),(0,i.createElement)(g.Provider,{value:w(n)},t)}function x(e){return A.apply(this,arguments)}function A(){return(A=v((function*(e){var{ctx:t,req:n=(null===t||void 0===t?void 0:t.req)}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var r=yield R(),o=n?{headers:{cookie:n.headers.cookie}}:{},i=yield fetch("".concat(r,"/").concat(e),o),a=yield i.json();return Object.keys(a).length>0?a:null}catch(c){return h.error("CLIENT_FETCH_ERROR",e,c),null}}))).apply(this,arguments)}function R(){return"undefined"===typeof window?(r.env.NEXTAUTH_URL||h.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(p.baseUrlServer).concat(p.basePathServer)):p.basePath}function N(){return Math.floor(Date.now()/1e3)}},8016:function(e,t,n){"use strict";var r=n(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.error&&(o.error=e.error);e.warn&&(o.warn=e.warn);e.debug&&(o.debug=e.debug)},t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"===typeof window)return e;var n={},r=function(e){n[e]=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];o[e](n,...i);var c="".concat(t,"/_log"),u=new URLSearchParams({level:e,code:n,message:JSON.stringify(i.map((e=>e instanceof Error?{name:e.name,message:e.message,stack:e.stack}:e)))});return navigator.sendBeacon?navigator.sendBeacon(c,u):fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:u})}};for(var i in e)r(i);return n}catch(a){return o}},t.default=void 0;var o={error(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.error("[next-auth][error][".concat(e.toLowerCase(),"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),...n)},warn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.warn("[next-auth][warn][".concat(e.toLowerCase(),"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()),...n)},debug(e){var t,n;if(null!==(t=r)&&void 0!==r&&null!==(n=t.env)&&void 0!==n&&n._NEXTAUTH_DEBUG){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];console.log("[next-auth][debug][".concat(e.toLowerCase(),"]"),...i)}}};var i=o;t.default=i},5831:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="http://localhost:3000",n="/api/auth";e||(e="".concat(t).concat(n));var r=e.startsWith("http:")?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");var[o,...i]=e.split("/"),a=o?"".concat(r,"://").concat(o):t,c=i.length>0?"/".concat(i.join("/")):n;return{baseUrl:a,basePath:c}}},3454:function(e,t,n){"use strict";e.exports=n.g.process||n(7663)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(3456),n(7465),n(8633));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(o.zt,{session:n.session,children:(0,r.jsx)(t,a({},n))})}},3456:function(){},7465:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!s){var e=a(f);s=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||s||a(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(162);e.exports=o}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);