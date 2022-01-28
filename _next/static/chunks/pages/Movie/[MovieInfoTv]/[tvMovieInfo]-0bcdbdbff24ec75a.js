(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{8059:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Movie/[MovieInfoTv]/[tvMovieInfo]",function(){return r(1253)}])},3025:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r="...";return e.length>t&&(e=e.substring(0,t)+r),e}},8659:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var n=function(e){var t=e,r=[];for(var n in t)r.push(t[n].name);return r.join(", ")||"-"}},5212:function(e,t,r){"use strict";r.d(t,{D:function(){return n}});var n=function(e){return new Date(e).getFullYear()}},1253:function(e,t,r){"use strict";r.r(t);var n=r(4051),i=r.n(n),o=r(5893),a=r(7294),s=r(1163),c=r(9669),u=r.n(c),d=r(3648),l=r(655),f=r(6870),p=r(4603),v=r(3226),m=r(7015),x=r(6235),h=r(8571),b=r(1023),g=(r(1664),r(5212)),y=r(3025),_=r(8659);function k(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}t.default=function(){var e=(0,s.useRouter)(),t=(0,a.useState)({}),r=t[0],n=t[1],c=(0,a.useState)(e.isReady),w=c[0],j=c[1],N=function(){var t,r=(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("https://api.themoviedb.org/3/movie/".concat(e.query.tvMovieInfo,"?api_key=").concat(d.API_KEY)).then((function(e){n(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(e){k(o,n,i,a,s,"next",e)}function s(e){k(o,n,i,a,s,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,a.useEffect)((function(){e.asPath!==e.route&&(N(),j(e.isReady))}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"absolute top-[10px] left-[30px]",children:(0,o.jsx)("a",{onClick:function(){return e.back()},children:(0,o.jsx)(b.Z,{className:"cursor-pointer opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out",style:{fontSize:"35px"}})})}),w?(0,o.jsx)("section",{className:"featured h-screen bg-cover bg-center",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(null===r||void 0===r?void 0:r.backdrop_path,")")},children:(0,o.jsx)("div",{className:"featured--vertical w-[inherit] h-[inherit]",style:{background:"linear-gradient(to top, #111 10%, transparent 90%)"},children:(0,o.jsxs)("div",{className:"featured--horizontal flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]",style:{background:"linear-gradient(to right, rgb(17 17 17 / 81%) 30%, transparent 70%)"},children:[(0,o.jsx)("div",{className:"featured--name text-4xl font-bold max-w-[40%]",style:{textShadow:"2px 2px 4px rgb(0 0 0 / 45%)"},children:null===r||void 0===r?void 0:r.original_title}),(0,o.jsxs)("div",{className:"featured--info text-lg font-bold mt-4",children:[(0,o.jsxs)("div",{className:"featured--points inline-block mr-4 text-[#46d369]",children:[null===r||void 0===r?void 0:r.vote_average," ",(null===r||void 0===r?void 0:r.vote_average)>1?"Points":"Point"]}),(0,o.jsx)("div",{className:"featured--year mr-4 inline-block ",children:(0,g.D)(null===r||void 0===r?void 0:r.release_date)}),(0,o.jsx)("div",{className:"inline-block bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90",children:(null===r||void 0===r?void 0:r.adult)?18:16}),(null===r||void 0===r?void 0:r.number_of_seasons)?(0,o.jsx)("div",{className:"featured-seasons inline-block mr-4 ",children:1===r.number_of_seasons?"".concat(r.number_of_seasons," Season"):"".concat(r.number_of_seasons," Seasons")}):null,(0,o.jsx)("div",{className:"inline-block pl-1 pr-1 rounded-sm border-2 bg-black bg-opacity-50 opacity-80",children:"HD"})]}),(0,o.jsx)("div",{className:"featured--description mt-4 sm:mr-3 sm:text-lg text-[#fff] sm:max-w-[40%] font-medium",style:{textShadow:"2px 2px 4px rgb(0 0 0 / 45%)"},children:(0,y.o)(null===r||void 0===r?void 0:r.overview,200)}),(0,o.jsxs)("div",{className:"text-lg font-normal mt-4",children:[(0,o.jsxs)("div",{className:"featured--genres sm:text-lg text-[#999] max-w-[40%]",children:["Genres: ",(0,_.L)(null===r||void 0===r?void 0:r.genres)]}),(0,o.jsxs)("div",{className:"featured--genres sm:text-lg text-[#999] max-w-[40%]",children:["Creators: ",(0,_.L)(null===r||void 0===r?void 0:r.production_companies)]})]}),(0,o.jsxs)("div",{className:"font-normal mt-6 text-xl",children:[(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(f.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"Rate This Title"]}),(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(l.Z,{style:{margin:"0px 10px",fontSize:"35px"}}),"Play ",(null===r||void 0===r?void 0:r.number_of_seasons)&&"Season 1: Episode 1"]}),(null===r||void 0===r?void 0:r.number_of_seasons)?(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(m.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"Episodes & More"]}):null,(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(v.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"More Like This"]}),(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(p.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"Audio & Subtitles"]}),(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(x.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"Add to My List"]}),(0,o.jsxs)("div",{className:"flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100",children:[(0,o.jsx)(h.Z,{style:{margin:"0px 15px",fontSize:"25px"}}),"Credits & More Info"]})]})]})})}):(0,o.jsx)("div",{className:"loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center",children:(0,o.jsx)("img",{src:"/netflix-clonehttps://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif",alt:"Carregando"})})]})}},3648:function(e,t,r){"use strict";r.r(t),r.d(t,{API_KEY:function(){return c},basicFetch:function(){return u},getHomeList:function(){return d},getMovieInfo:function(){return l},featuredMovieSimilar:function(){return f}});var n=r(4051),i=r.n(n),o=r(5893);function a(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,c,"next",e)}function c(e){a(o,n,i,s,c,"throw",e)}s(void 0)}))}}var c="48573f16a89b6336dd846c1202ddf5ba",u=function(){var e=s(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fetch("".concat("https://api.themoviedb.org/3").concat(t)).then((function(e){return e.json()})),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=s(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/discover/tv?with_network=213&api_key=".concat(c));case 2:return e.t0=e.sent,e.t1={slug:"Originals",title:"Originals",items:e.t0},e.next=6,u("/trending/all/week?api_key=".concat(c));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recommended",items:e.t2},e.next=10,u("/movie/top_rated?api_key=".concat(c));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Top Rated",items:e.t4},e.next=14,u("/discover/movie?with_genres=28&api_key=".concat(c));case 14:return e.t6=e.sent,e.t7={slug:"Action",title:"Action",items:e.t6},e.next=18,u("/discover/movie?with_genres=35&api_key=".concat(c));case 18:return e.t8=e.sent,e.t9={slug:"Comedy",title:"Comedy",items:e.t8},e.next=22,u("/discover/movie?with_genres=27&api_key=".concat(c));case 22:return e.t10=e.sent,e.t11={slug:"Horror",title:"Horror",items:e.t10},e.next=26,u("/discover/movie?with_genres=10749&api_key=".concat(c));case 26:return e.t12=e.sent,e.t13={slug:"Romance",title:"Romance",items:e.t12},e.next=30,u("/discover/movie?with_genres=99&api_key=".concat(c));case 30:return e.t14=e.sent,e.t15={slug:"Documentary",title:"Documentary",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=s(i().mark((function e(t,r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=r,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,u("/movie/".concat(t,"?api_key=").concat(c));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,u("/tv/".concat(t,"?api_key=").concat(c));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=s(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},e.t0=t,e.next="originals"===e.t0?4:"trending"===e.t0?8:"toprated"===e.t0?12:"action"===e.t0?16:"comedy"===e.t0?20:"horror"===e.t0?24:"romance"===e.t0?28:"documentary"===e.t0?32:36;break;case 4:return e.next=6,u("/discover/tv?with_network=213&api_key=".concat(c));case 6:return r=e.sent,e.abrupt("break",38);case 8:return e.next=10,u("/trending/all/week?api_key=".concat(c));case 10:return r=e.sent,e.abrupt("break",38);case 12:return e.next=14,u("/movie/top_rated?api_key=".concat(c));case 14:return r=e.sent,e.abrupt("break",38);case 16:return e.next=18,u("/discover/movie?with_genres=28&api_key=".concat(c));case 18:return r=e.sent,e.abrupt("break",38);case 20:return e.next=22,u("/discover/movie?with_genres=35&api_key=".concat(c));case 22:return r=e.sent,e.abrupt("break",38);case 24:return e.next=26,u("/discover/movie?with_genres=27&api_key=".concat(c));case 26:return r=e.sent,e.abrupt("break",38);case 28:return e.next=30,u("/discover/movie?with_genres=10749&api_key=".concat(c));case 30:return r=e.sent,e.abrupt("break",38);case 32:return e.next=34,u("/discover/movie?with_genres=99&api_key=".concat(c));case 34:return r=e.sent,e.abrupt("break",38);case 36:return r=null,e.abrupt("break",38);case 38:return e.abrupt("return",r);case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(){return(0,o.jsx)(o.Fragment,{})}}},function(e){e.O(0,[772,924,470,774,888,179],(function(){return t=8059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);