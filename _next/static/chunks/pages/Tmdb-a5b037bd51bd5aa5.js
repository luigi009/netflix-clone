(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{1903:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tmdb",function(){return r(3648)}])},3648:function(e,t,r){"use strict";r.r(t),r.d(t,{API_KEY:function(){return o},basicFetch:function(){return u},getHomeList:function(){return p},getMovieInfo:function(){return v},featuredMovieSimilar:function(){return d}});var n=r(8520),a=r.n(n),c=r(5893);function i(e,t,r,n,a,c,i){try{var s=e[c](i),o=s.value}catch(u){return void r(u)}s.done?t(o):Promise.resolve(o).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function s(e){i(c,n,a,s,o,"next",e)}function o(e){i(c,n,a,s,o,"throw",e)}s(void 0)}))}}var o="48573f16a89b6336dd846c1202ddf5ba",u=s(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fetch("".concat("https://api.themoviedb.org/3").concat(t)).then((function(e){return e.json()})),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)}))),p=s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/discover/tv?with_network=213&api_key=".concat(o));case 2:return e.t0=e.sent,e.t1={slug:"Originals",title:"Originals",items:e.t0},e.next=6,u("/trending/all/week?api_key=".concat(o));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recommended",items:e.t2},e.next=10,u("/movie/top_rated?api_key=".concat(o));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Top Rated",items:e.t4},e.next=14,u("/discover/movie?with_genres=28&api_key=".concat(o));case 14:return e.t6=e.sent,e.t7={slug:"Action",title:"Action",items:e.t6},e.next=18,u("/discover/movie?with_genres=35&api_key=".concat(o));case 18:return e.t8=e.sent,e.t9={slug:"Comedy",title:"Comedy",items:e.t8},e.next=22,u("/discover/movie?with_genres=27&api_key=".concat(o));case 22:return e.t10=e.sent,e.t11={slug:"Horror",title:"Horror",items:e.t10},e.next=26,u("/discover/movie?with_genres=10749&api_key=".concat(o));case 26:return e.t12=e.sent,e.t13={slug:"Romance",title:"Romance",items:e.t12},e.next=30,u("/discover/movie?with_genres=99&api_key=".concat(o));case 30:return e.t14=e.sent,e.t15={slug:"Documentary",title:"Documentary",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)}))),v=s(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=r,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,u("/movie/".concat(t,"?api_key=").concat(o));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,u("/tv/".concat(t,"?api_key=").concat(o));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)}))),d=s(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},e.t0=t,e.next="originals"===e.t0?4:"trending"===e.t0?8:"toprated"===e.t0?12:"action"===e.t0?16:"comedy"===e.t0?20:"horror"===e.t0?24:"romance"===e.t0?28:"documentary"===e.t0?32:36;break;case 4:return e.next=6,u("/discover/tv?with_network=213&api_key=".concat(o));case 6:return r=e.sent,e.abrupt("break",38);case 8:return e.next=10,u("/trending/all/week?api_key=".concat(o));case 10:return r=e.sent,e.abrupt("break",38);case 12:return e.next=14,u("/movie/top_rated?api_key=".concat(o));case 14:return r=e.sent,e.abrupt("break",38);case 16:return e.next=18,u("/discover/movie?with_genres=28&api_key=".concat(o));case 18:return r=e.sent,e.abrupt("break",38);case 20:return e.next=22,u("/discover/movie?with_genres=35&api_key=".concat(o));case 22:return r=e.sent,e.abrupt("break",38);case 24:return e.next=26,u("/discover/movie?with_genres=27&api_key=".concat(o));case 26:return r=e.sent,e.abrupt("break",38);case 28:return e.next=30,u("/discover/movie?with_genres=10749&api_key=".concat(o));case 30:return r=e.sent,e.abrupt("break",38);case 32:return e.next=34,u("/discover/movie?with_genres=99&api_key=".concat(o));case 34:return r=e.sent,e.abrupt("break",38);case 36:return r=null,e.abrupt("break",38);case 38:return e.abrupt("return",r);case 39:case"end":return e.stop()}}),e)})));t.default=function(){return(0,c.jsx)(c.Fragment,{})}}},function(e){e.O(0,[774,888,179],(function(){return t=1903,e(e.s=t);var t}));var t=e.O();_N_E=t}]);