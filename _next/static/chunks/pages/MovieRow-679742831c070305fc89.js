_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{DUKm:function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),o=i("cpVT"),r=i("q1tI"),a=i("Uelz"),s=i.n(a),c=i("bo4g"),l=i.n(c);t.default=function(e){var t=e.title,i=e.results,a=e.resultsNumber,c=Object(r.useState)(0),d=c[0],u=c[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"movieRow mt-7",children:[Object(n.jsx)("h2",{className:"ml-7 mb-1 font-bold text-2xl max-w-lg tracking-wide",children:t}),Object(n.jsxs)("div",{className:"movieRow--left",children:[Object(n.jsx)("div",{onClick:function(){var e=d+Math.round(window.innerWidth/2);e>0&&(e=0),u(e)},className:"movieRow--left z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 left-0",children:Object(n.jsx)(s.a,Object(o.a)({style:{width:"50px",height:"50px"}},"style",{fontSize:50}))}),Object(n.jsx)("div",{onClick:function(){var e=d-Math.round(window.innerWidth/2),t=250*a;window.innerWidth-t>e&&(e=window.innerWidth-t-60),u(e)},className:"movieRow--right z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 right-0",children:Object(n.jsx)(l.a,Object(o.a)({style:{width:"50px",height:"50px"}},"style",{fontSize:50}))})]}),Object(n.jsx)("div",{className:"movieRow--listarea overflow-x-hidden pl-7",children:Object(n.jsx)("div",{className:"movieRow--list",style:{marginLeft:d,width:250*a},children:a>0&&i.map((function(e,t){return Object(n.jsx)("div",{className:"movieRow--item inline-block w-[250px]",children:Object(n.jsx)("img",{className:"w-auto cursor-pointer transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1]",src:"/netflix-clone"+"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})})}},GbTI:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MovieRow",function(){return i("DUKm")}])},Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},Uelz:function(e,t,i){"use strict";var n=i("TqRt"),o=i("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(i("q1tI")),a=(0,n(i("8/g6")).default)(r.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");t.default=a},bo4g:function(e,t,i){"use strict";var n=i("TqRt"),o=i("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(i("q1tI")),a=(0,n(i("8/g6")).default)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=a},cpVT:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return n}))}},[["GbTI",0,1,4]]]);