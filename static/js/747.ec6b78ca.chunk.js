"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[747],{747:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,o,u=t(861),a=t(439),c=t(757),s=t.n(c),f=t(87),p=t(168),l=t(444),d=l.ZP.input(r||(r=(0,p.Z)(["\n  width: 300px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid grey;\n  outline: none;\n  padding: 5px;\n  font-size: 16px;\n"]))),h=l.ZP.form(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 20px;\n  padding-left: 20px;\n  padding-top: 20px;\n"]))),x=l.ZP.button(o||(o=(0,p.Z)(["\n  width: 100px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid #fff;\n  padding: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  margin-left: 20px;\n"]))),g=t(184),m=function(n){var e,t=n.onSubmit,r=(0,f.lr)(),i=(0,a.Z)(r,2),o=i[0],u=i[1],c=null!==(e=o.get("query"))&&void 0!==e?e:"";return(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),t(c)},children:[(0,g.jsx)(d,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(n){return u({query:n.currentTarget.value})}}),(0,g.jsx)(x,{type:"submit",children:"Search"})]})},v=t(791),b=t(689),j=function(){var n=(0,v.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,v.useState)([]),o=(0,a.Z)(i,2),c=o[0],p=o[1],l=(0,b.TH)();(0,v.useEffect)((function(){r(l.search.split("=")[1])}),[l]),(0,v.useEffect)((function(){if(t){var n=function(){var n=(0,u.Z)(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("41ab92c3df4691a01a2e362c5f7f74c0","&language=en-US&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.next=5,e.json();case 5:r=n.sent,console.log(r),p(r.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[t]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{onSubmit:function(n){r(n)}}),c.length>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h1",{children:["Search results for ",t]}),(0,g.jsx)("ul",{children:c.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(f.rU,{to:"".concat(n.id),state:{from:l},children:n.title||n.name})},n.id)}))})]})]})}},861:function(n,e,t){function r(n,e,t,r,i,o,u){try{var a=n[o](u),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var u=n.apply(e,t);function a(n){r(u,i,o,a,c,"next",n)}function c(n){r(u,i,o,a,c,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=747.ec6b78ca.chunk.js.map