(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{1903:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tmdb",function(){return r(3648)}])},3648:function(t,e,r){"use strict";r.r(e),r.d(e,{API_KEY:function(){return o},basicFetch:function(){return s},getHomeList:function(){return p},getMovieInfo:function(){return v},featuredMovieSimilar:function(){return f}});var n=r(4051),a=r.n(n),c=r(5893);function i(t,e,r,n,a,c,i){try{var u=t[c](i),o=u.value}catch(s){return void r(s)}u.done?e(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var c=t.apply(e,r);function u(t){i(c,n,a,u,o,"next",t)}function o(t){i(c,n,a,u,o,"throw",t)}u(void 0)}))}}var o="48573f16a89b6336dd846c1202ddf5ba",s=function(){var t=u(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=fetch("".concat("https://api.themoviedb.org/3").concat(e)).then((function(t){return t.json()})),t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/discover/tv?with_network=213&api_key=".concat(o));case 2:return t.t0=t.sent,t.t1={slug:"Originals",title:"Originals",items:t.t0},t.next=6,s("/trending/all/week?api_key=".concat(o));case 6:return t.t2=t.sent,t.t3={slug:"trending",title:"Recommended",items:t.t2},t.next=10,s("/movie/top_rated?api_key=".concat(o));case 10:return t.t4=t.sent,t.t5={slug:"toprated",title:"Top Rated",items:t.t4},t.next=14,s("/discover/movie?with_genres=28&api_key=".concat(o));case 14:return t.t6=t.sent,t.t7={slug:"Action",title:"Action",items:t.t6},t.next=18,s("/discover/movie?with_genres=35&api_key=".concat(o));case 18:return t.t8=t.sent,t.t9={slug:"Comedy",title:"Comedy",items:t.t8},t.next=22,s("/discover/movie?with_genres=27&api_key=".concat(o));case 22:return t.t10=t.sent,t.t11={slug:"Horror",title:"Horror",items:t.t10},t.next=26,s("/discover/movie?with_genres=10749&api_key=".concat(o));case 26:return t.t12=t.sent,t.t13={slug:"Romance",title:"Romance",items:t.t12},t.next=30,s("/discover/movie?with_genres=99&api_key=".concat(o));case 30:return t.t14=t.sent,t.t15={slug:"Documentary",title:"Documentary",items:t.t14},t.abrupt("return",[t.t1,t.t3,t.t5,t.t7,t.t9,t.t11,t.t13,t.t15]);case 33:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=u(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={},!e){t.next=15;break}t.t0=r,t.next="movie"===t.t0?5:"tv"===t.t0?9:13;break;case 5:return t.next=7,s("/movie/".concat(e,"?api_key=").concat(o));case 7:return n=t.sent,t.abrupt("break",15);case 9:return t.next=11,s("/tv/".concat(e,"?api_key=").concat(o));case 11:return n=t.sent,t.abrupt("break",15);case 13:return n=null,t.abrupt("break",15);case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=u(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={},t.t0=e,t.next="originals"===t.t0?4:"trending"===t.t0?8:"toprated"===t.t0?12:"action"===t.t0?16:"comedy"===t.t0?20:"horror"===t.t0?24:"romance"===t.t0?28:"documentary"===t.t0?32:36;break;case 4:return t.next=6,s("/discover/tv?with_network=213&api_key=".concat(o));case 6:return r=t.sent,t.abrupt("break",38);case 8:return t.next=10,s("/trending/all/week?api_key=".concat(o));case 10:return r=t.sent,t.abrupt("break",38);case 12:return t.next=14,s("/movie/top_rated?api_key=".concat(o));case 14:return r=t.sent,t.abrupt("break",38);case 16:return t.next=18,s("/discover/movie?with_genres=28&api_key=".concat(o));case 18:return r=t.sent,t.abrupt("break",38);case 20:return t.next=22,s("/discover/movie?with_genres=35&api_key=".concat(o));case 22:return r=t.sent,t.abrupt("break",38);case 24:return t.next=26,s("/discover/movie?with_genres=27&api_key=".concat(o));case 26:return r=t.sent,t.abrupt("break",38);case 28:return t.next=30,s("/discover/movie?with_genres=10749&api_key=".concat(o));case 30:return r=t.sent,t.abrupt("break",38);case 32:return t.next=34,s("/discover/movie?with_genres=99&api_key=".concat(o));case 34:return r=t.sent,t.abrupt("break",38);case 36:return r=null,t.abrupt("break",38);case 38:return t.abrupt("return",r);case 39:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=function(){return(0,c.jsx)(c.Fragment,{})}}},function(t){t.O(0,[774,888,179],(function(){return e=1903,t(t.s=e);var e}));var e=t.O();_N_E=e}]);