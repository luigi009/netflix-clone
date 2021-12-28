(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4721:function(e,t,i){"use strict";var n=i(4119);t.Z=void 0;var o=n(i(4938)),l=i(5893),r=(0,o.default)((0,l.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=r},5817:function(e,t,i){"use strict";var n=i(4119);t.Z=void 0;var o=n(i(4938)),l=i(5893),r=(0,o.default)((0,l.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.Z=r},2761:function(e,t,i){"use strict";var n=i(4119);t.Z=void 0;var o=n(i(4938)),l=i(5893),r=(0,o.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=r},76:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return i(2993)}])},722:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(7294),l=i(655),r=i(4721),s=i(1163),a=i(9046);t.default=function(e){var t=e.genres,i=e.backdropPath,d=e.originalName,c=e.numberOfSeasons,u=e.overview,v=e.featureId,f=e.movie,m=e.title,h=e.featureSimilarMovies,x=(0,s.useRouter)(),p=(0,o.useState)(!1),g=p[0],b=p[1],j=[];for(var w in t)j.push(t[w].name);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",{className:"featured h-[80vh] bg-cover bg-center",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(i,")")},children:(0,n.jsx)("div",{className:"featured--vertical w-[inherit] h-[inherit]",style:{background:"linear-gradient(to top, #111 10%, transparent 90%)"},children:(0,n.jsxs)("div",{className:"featured--horizontal flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]",style:{background:"linear-gradient(to right, rgb(17 17 17 / 38%) 30%, transparent 70%)"},children:[(0,n.jsx)("div",{className:"featured--name text-4xl font-bold",children:d}),(0,n.jsx)("div",{className:"featured--year mr-4 inline-block text-4xl max-w-[40%] font-bold",style:{textShadow:"2px 2px 4px rgb(0 0 0 / 45%)"},children:m}),c?(0,n.jsx)("div",{className:"featured--info text-lg font-bold mt-4",children:(0,n.jsx)("div",{className:"featured-seasons inline-block mr-4",children:"".concat(c,1!==c?" Temporadas":" Temporada")})}):null,(0,n.jsx)("div",{className:"font-medium featured--description mt-4 sm:mr-3 sm:text-lg text-[#fff] sm:max-w-[40%]",style:{textShadow:"2px 2px 4px rgb(0 0 0 / 45%)"},children:function(e,t){var i=void 0===e?"":e;return i.length>t&&(i=i.substring(0,t)+"..."),i}(u,200)}),(0,n.jsxs)("div",{className:"featured--buttons mt-4",children:[(0,n.jsxs)("a",{onClick:function(){x.push({pathname:"/Movie/[MovieInfoTv]/[tvMovieInfo]",query:{MovieInfoTv:m,tvMovieInfo:v}})},className:"cursor-pointer featured--watchbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-white text-black opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out",children:[(0,n.jsx)(l.Z,{style:{fontSize:"35px"}}),"Play"]}),(0,n.jsxs)("a",{onClick:function(){b(!0)},className:"cursor-pointer featured--mylistbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-[#6d6d6e] text-white opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out",children:[(0,n.jsx)(r.Z,{style:{color:"#fff",fontSize:"35px",paddingBottom:"6px"}}),"More Info"]})]})]})})}),(0,n.jsx)(a.default,{item:f,handleClickOpen:g,close:function(){b(!1)},anotherMovies:h,anotherMoviesNumber:null===h||void 0===h?void 0:h.length})]})}},5512:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var n=i(5893),o=(i(7294),i(8633)),l=i(2761),r=i(5817);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,o=!1,l=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(a){o=!0,l=a}finally{try{n||null==s.return||s.return()}finally{if(o)throw l}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){var t=e.black,i=(e.searchCategory,e.setSearchCategory),a=e.searchMovie,d=e.setSearchMovie,c=s((0,o.kP)(),2),u=c[0];c[1];return(0,n.jsx)("div",{id:"header",children:(0,n.jsxs)("header",{className:"".concat(t?"black":""," z-50"),style:{backgroundImage:"linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))"},children:[(0,n.jsx)("a",{className:"h-[30px]",href:"/",children:(0,n.jsx)("svg",{style:{width:"112px",height:"30px"},height:"677",viewBox:".238 .034 919.406 248.488",width:"2500",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z",fill:"#e50914"})})}),(0,n.jsx)("div",{className:"fixed left-[200px] font-bold text-lg",children:(0,n.jsx)("a",{href:"/",onClick:function(){i("")},children:"Home"})}),(0,n.jsx)("div",{className:"fixed left-[300px] font-bold text-lg",children:(0,n.jsx)("a",{className:"cursor-pointer",onClick:function(){i("Action"),d("")},children:"Action"})}),(0,n.jsx)("div",{className:"fixed left-[400px] font-bold text-lg",children:(0,n.jsx)("a",{className:"cursor-pointer",onClick:function(){i("Originals"),d("")},children:"Originals"})}),(0,n.jsx)("div",{className:"fixed left-[500px] font-bold text-lg",children:(0,n.jsx)("a",{className:"cursor-pointer",onClick:function(){i("Recommended"),d("")},children:"Recommended"})}),(0,n.jsxs)("div",{className:"flex justify-between w-4/12",children:[(0,n.jsxs)("div",{className:"font-bold bg-[#000] text-lg border-2 border-[#fff] p-1",children:[(0,n.jsx)(l.Z,{className:"bg-[#000] mx-1",style:{color:"#fff"}}),(0,n.jsx)("input",{className:"text-gray-700 bg-[#000] focus:outline-none",placeholder:"search movie...",value:a,onChange:function(e){d(e.target.value),i("")}})]}),(0,n.jsx)("div",{className:"flex justify-center items-center cursor-pointer",children:(0,n.jsx)(r.Z,{})}),u?(0,n.jsx)("button",{onClick:function(){return(0,o.w7)()},className:"items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded",children:"Sign out"}):(0,n.jsx)("button",{onClick:function(){return(0,o.zB)("google")},className:"items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded",children:"Sign In"})]})]})})}},2988:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(7294),l=i(4723);t.default=function(e){var t=e.title,i=e.results,r=e.resultsNumber,s=e.searchCategory,a=e.searchMovie,d=(0,o.useState)(i||[]),c=d[0],u=d[1];return(0,o.useEffect)((function(){!function(){if(null===a||void 0===a?void 0:a.length){var e=(null===i||void 0===i?void 0:i.length)&&(null===i||void 0===i?void 0:i.filter((function(e){var t,i,n,o=(null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.toLowerCase())||(null===e||void 0===e||null===(i=e.original_title)||void 0===i?void 0:i.toLowerCase())||(null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.toLowerCase());return(null===o||void 0===o?void 0:o.includes(a.toLowerCase()))?e:""})));u(e)}else u(i)}()}),[s,a]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"movieRow--list--result flex flex-row",children:r&&(null===c||void 0===c?void 0:c.map((function(e,o){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.default,{index:o,category:t,searchMovie:a,item:e,poster:null===e||void 0===e?void 0:e.poster_path,anotherMovies:i,anotherMoviesNumber:r,setSearchResult:setSearchResult})})})))})})}},4723:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(7294),l=i(1163),r=i(3018),s=i(6540),a=i(7834),d=i(8025),c=i(5503),u=i(9449),v=i(9046);t.default=function(e){var t=e.item,i=e.poster,f=e.index,m=e.anotherMovies,h=e.anotherMoviesNumber,x=e.category,p=e.searchMovie,g=(0,o.useState)(!1),b=g[0],j=g[1],w=(0,l.useRouter)(),y=new Date((null===t||void 0===t?void 0:t.first_air_date)||(null===t||void 0===t?void 0:t.release_date));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onMouseLeave:function(){(null===p||void 0===p?void 0:p.length)?function(){var e=document.getElementById("".concat(x,"-").concat(f,"-movie-info-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)));e&&(e.classList.remove("block"),e.classList.add("hidden"),e.classList.remove("z-[1000]"))}():function(){var e=document.getElementById("".concat(x,"-").concat(f,"-movie-info-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)));e&&(e.classList.remove("block"),e.classList.add("hidden"))}()},id:"".concat(x,"-").concat(f,"-movie-card-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)),className:"movieRow--item--result inline-block w-[250px] transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1]",children:(0,n.jsxs)("div",{id:"movie-img-".concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)),children:[(0,n.jsx)("a",{onMouseOver:function(){(null===p||void 0===p?void 0:p.length)?function(){var e=document.getElementById("".concat(x,"-").concat(f,"-movie-info-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)));e&&(e.classList.remove("hidden"),e.classList.add("block"),e.classList.add("z-[1000]"))}():function(){var e=document.getElementById("".concat(x,"-").concat(f,"-movie-info-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)));e&&(e.classList.remove("hidden"),e.classList.add("block"))}()},onClick:function(){w.push({pathname:"/Movie/[MovieInfoTv]/[tvMovieInfo]",query:{MovieInfoTv:(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name),tvMovieInfo:null===t||void 0===t?void 0:t.id}})},children:(0,n.jsx)("img",{className:"w-auto cursor-pointer",src:"/netflix-clone"+"https://image.tmdb.org/t/p/w500".concat(i),alt:null===t||void 0===t?void 0:t.original_title})}),(0,n.jsxs)("div",{className:"hidden absolute w-full bg-black pt-3 pb-3 pl-0.5 pr-0.5",id:"".concat(x,"-").concat(f,"-movie-info-").concat((null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)),children:[(0,n.jsxs)("div",{className:"flex justify-evenly",children:[(0,n.jsx)(r.Z,{onClick:function(){w.push({pathname:"/Movie/[MovieInfoTv]/[tvMovieInfo]",query:{MovieInfoTv:(null===t||void 0===t?void 0:t.original_title)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name),tvMovieInfo:null===t||void 0===t?void 0:t.id}})},className:"inline-block cursor-pointer",style:{fontSize:"40px"}}),(0,n.jsx)(u.Z,{title:(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen",children:"Add to My List"})}),placement:"top",arrow:!0,children:(0,n.jsx)(s.Z,{className:"inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900",style:{fontSize:"35px"}})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen",children:"I like this"})}),placement:"top",arrow:!0,children:(0,n.jsx)(a.Z,{className:"inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1",style:{fontSize:"35px"}})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen",children:"Not for me"})}),placement:"top",arrow:!0,children:(0,n.jsx)(d.Z,{className:"inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1",style:{fontSize:"35px"}})}),(0,n.jsx)(u.Z,{title:(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen",children:"More info"})}),placement:"top",arrow:!0,children:(0,n.jsx)(c.Z,{onClick:function(){j(!0)},className:"inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1",style:{fontSize:"35px"}})})]}),(0,n.jsxs)("div",{className:"featured--info text-lg font-bold mt-4",children:[(0,n.jsxs)("div",{className:"featured--points inline-block pl-1 mr-4 text-[#46d369]",children:[null===t||void 0===t?void 0:t.vote_average," ",(null===t||void 0===t?void 0:t.vote_average)>1?"Points":"Point"]}),(0,n.jsx)("div",{className:"featured--year mr-4 inline-block ",children:y.getFullYear()}),(0,n.jsx)("div",{className:"inline-block bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90",children:(null===t||void 0===t?void 0:t.adult)?18:16}),(0,n.jsx)("div",{className:"inline-block pl-1 pr-1 rounded-sm border-2 bg-black bg-opacity-50 opacity-80",children:"HD"})]})]})]})}),(0,n.jsx)(v.default,{item:t,handleClickOpen:b,close:function(){j(!1)},anotherMovies:m,anotherMoviesNumber:h})]})}},2993:function(e,t,i){"use strict";i.r(t);var n=i(8520),o=i.n(n),l=i(5893),r=i(7294),s=i(3648),a=i(7656),d=i(2988),c=i(722),u=i(5512),v=i(8042),f=i(8121);function m(e,t,i,n,o,l,r){try{var s=e[l](r),a=s.value}catch(d){return void i(d)}s.done?t(a):Promise.resolve(a).then(n,o)}function h(e){return function(){var t=this,i=arguments;return new Promise((function(n,o){var l=e.apply(t,i);function r(e){m(l,n,o,r,s,"next",e)}function s(e){m(l,n,o,r,s,"throw",e)}r(void 0)}))}}function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.default=function(){var e=function(){for(var e=0;e<(null===B||void 0===B?void 0:B.length);e++){var t;return null===(t=B[e])||void 0===t?void 0:t.length}},t=(0,r.useState)([]),i=(t[0],t[1]),n=(0,r.useState)(null),m=n[0],p=n[1],g=(0,r.useState)(!1),b=g[0],j=g[1],w=(0,r.useState)(!1),y=w[0],N=w[1],k=(0,r.useState)(null),M=k[0],S=k[1],_=(0,r.useState)(""),C=_[0],z=_[1],I=(0,r.useState)(""),L=I[0],Z=I[1],E=(0,r.useState)([]),R=E[0],T=E[1],O=(0,r.useState)(0),P=O[0],A=O[1],F="undefined"!==typeof document&&document.querySelectorAll(".movieRow--item--result"),B=[];B.push(F.length&&F),console.log("test ===>",e()),(0,r.useEffect)((function(){h(o().mark((function e(){var t,n,l,r,a,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,(0,s.getHomeList)();case 3:return t=e.sent,i(t),n=t.filter((function(e){return"Action"===e.slug})),l=Math.floor(Math.random()*(n[0].items.results.length-1)),r=n[0].items.results[l],e.next=10,(0,s.getMovieInfo)(r.id,"movie");case 10:return a=e.sent,p(a),e.next=14,(0,s.featuredMovieSimilar)("action");case 14:d=e.sent,S(d),N(!1);case 17:case"end":return e.stop()}}),e)})))()}),[]),(0,r.useEffect)((function(){var e=function(){window.scrollY>10?j(!0):j(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),(0,r.useEffect)((function(){h(o().mark((function e(){var t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,(0,s.getHomeList)();case 3:t=e.sent,N(!1),(null===C||void 0===C?void 0:C.length)?(i=(null===t||void 0===t?void 0:t.length)&&(null===t||void 0===t?void 0:t.filter((function(e){return e.title.toLowerCase().includes(C.toLowerCase())?e:""}))),T(i)):T(t);case 6:case"end":return e.stop()}}),e)})))()}),[C,L]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"page",children:[(0,l.jsx)(u.default,{black:b,searchCategory:C,setSearchCategory:z,searchMovie:L,setSearchMovie:Z}),m&&!L.length?(0,l.jsx)(c.default,{movie:m,title:null===m||void 0===m?void 0:m.title,featureId:null===m||void 0===m?void 0:m.id,overview:null===m||void 0===m?void 0:m.overview,numberOfSeasons:null===m||void 0===m?void 0:m.number_of_seasons,voteAverage:null===m||void 0===m?void 0:m.vote_average,originalName:null===m||void 0===m?void 0:m.original_name,backdropPath:null===m||void 0===m?void 0:m.backdrop_path,genres:null===m||void 0===m?void 0:m.genres,date:null===m||void 0===m?void 0:m.release_date,featureSimilarMovies:null===M||void 0===M?void 0:M.results}):null,(null===L||void 0===L?void 0:L.length)?(0,l.jsxs)("div",{className:"mt-20",children:[(0,l.jsx)("h2",{className:"ml-7 mb-1 font-bold text-2xl max-w-lg tracking-wide",children:"Results"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"movieRow--left",children:[(0,l.jsx)("div",{onClick:function(){var e=P+Math.round(window.innerWidth/2);e>0&&(e=0),A(e)},className:"movieRow--left z-[99] transition duration-[0.5s] ease-in-out cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 left-0",children:(0,l.jsx)(v.Z,x({style:{width:"50px",height:"50px"}},"style",{fontSize:50}))}),(0,l.jsx)("div",{onClick:function(){var t=P-Math.round(window.innerWidth/2),i=250*e();window.innerWidth-i>t&&(t=window.innerWidth-i-60),A(t)},className:"movieRow--right z-[99] transition duration-[0.5s] ease-in-out cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 right-0",children:(0,l.jsx)(f.Z,x({style:{width:"50px",height:"50px"}},"style",{fontSize:50}))})]}),(0,l.jsx)("div",{style:{marginLeft:P,width:250*e()},children:(0,l.jsx)("section",{className:"lists mt-[50px] flex flex-row",children:null===R||void 0===R?void 0:R.map((function(e,t){var i,n;return(0,l.jsx)(d.default,{searchCategory:C,searchMovie:L,title:null===e||void 0===e?void 0:e.title,resultsNumber:null===e||void 0===e||null===(i=e.items)||void 0===i?void 0:i.results.length,results:null===e||void 0===e||null===(n=e.items)||void 0===n?void 0:n.results,items:null===e||void 0===e?void 0:e.items},t)}))})})]})]}):(0,l.jsx)("section",{className:"lists mt-[-250px]",children:null===R||void 0===R?void 0:R.map((function(e,t){var i,n;return(0,l.jsx)(a.default,{searchCategory:C,searchMovie:L,title:null===e||void 0===e?void 0:e.title,resultsNumber:null===e||void 0===e||null===(i=e.items)||void 0===i?void 0:i.results.length,results:null===e||void 0===e||null===(n=e.items)||void 0===n?void 0:n.results,items:null===e||void 0===e?void 0:e.items},t)}))}),y&&(0,l.jsx)("div",{className:"loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center",children:(0,l.jsx)("img",{src:"/netflix-clonehttps://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif",alt:"Carregando"})}),(0,l.jsxs)("footer",{className:"mt-7 mb-7 text-center",children:["Feito por Luigi Fanaro",(0,l.jsx)("br",{}),"Direitos de imagem para Netflix",(0,l.jsx)("br",{}),"Os dados foram utilizados do site Themoviedb.org"]})]})})}}},function(e){e.O(0,[507,259,924,553,590,46,656,774,888,179],(function(){return t=76,e(e.s=t);var t}));var t=e.O();_N_E=t}]);