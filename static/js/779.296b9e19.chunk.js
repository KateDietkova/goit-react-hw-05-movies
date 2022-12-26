"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,c,u,o=r(5861),i=r(9439),s=r(7757),p=r.n(s),f=r(2791),l=r(7689),d=r(171),v=r(1370),h=r(168),x=r(6444),g=x.ZP.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),m=x.ZP.li(a||(a=(0,h.Z)(["\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 20px 0px,\n    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,\n    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;\n  padding: 20px;\n  border-radius: 5px;\n"]))),w=x.ZP.p(c||(c=(0,h.Z)(["\n  font-weight: 700;\n  margin-bottom: 10px;\n"]))),Z=x.ZP.p(u||(u=(0,h.Z)(["\n  text-align: justify;\n"]))),k=r(184),b=function(){var n=(0,f.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,l.UO)().movieId,c=(0,f.useState)(!1),u=(0,i.Z)(c,2),s=u[0],h=u[1];if((0,f.useEffect)((function(){h(!0);var n=function(){var n=(0,o.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.kh)(a);case 3:t=n.sent,e(t),h(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),h(!1),console.log("Error in Reviews",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),r)return(0,k.jsxs)(k.Fragment,{children:[!s&&r.length>0&&(0,k.jsx)(g,{children:r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,k.jsxs)(m,{children:[(0,k.jsxs)(w,{children:["Author: ",r]}),(0,k.jsx)(Z,{children:e})]},t)}))}),s&&(0,k.jsx)(v.a,{}),0===r.length&&!s&&(0,k.jsx)("div",{children:"We didn't find any reviews :( "})]})}},171:function(n,t,r){r.d(t,{JZ:function(){return v},KZ:function(){return h},_3:function(){return l},cI:function(){return p},kP:function(){return d},kT:function(){return s},kh:function(){return f},qt:function(){return x},ts:function(){return i}});var e=r(5861),a=r(7757),c=r.n(a),u=r(2388),o="579a7483bae7d6a5a25eb4c1ddded2cf";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error in getFilmById",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error in getFilmByKeyword",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 3:return r=n.sent,e=r.data.cast,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error in getFilmCast",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log("Error in getFilmReviews",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();function l(n){if(n)return n.split("-")[0]}function d(n){return n?"".concat("https://image.tmdb.org/t/p/w500","/").concat(n):"https://www.jsconsulting.kz/assets/img/noImg.jpg"}function v(n){if(n)return n.map((function(n){return n.name})).join(", ")}function h(n){return parseFloat(n.toFixed(1))}function x(n){if(n){var t=h(n);return"".concat(t/10*100,"%")}}}}]);
//# sourceMappingURL=779.296b9e19.chunk.js.map