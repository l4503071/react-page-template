(this["webpackJsonpperformance-optimization"]=this["webpackJsonpperformance-optimization"]||[]).push([[3],{11:function(t,e,n){"use strict";var r=n(51),o=n.n(r).a.create();o.interceptors.response.use((function(t){return t.data})),e.a=o},35:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return p}));var r=n(12),o=n.n(r),i=n(25),a=n(11);function c(t){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.get(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(o.a.mark((function t(e){var n,r,i,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.split("/").pop().split("?")[0],t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.blob();case 6:i=t.sent,a=URL.createObjectURL(i),(c=document.createElement("a")).href=a,c.download=n,c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(a);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){var t="IntersectionObserver";return t in window&&"".concat(t,"Entry")in window}function p(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),i=e.getHours(),a=e.getMinutes(),c=e.getSeconds();return"".concat(n,"-").concat(r,"-").concat(o," ").concat(i,":").concat(a,":").concat(c)}},46:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n(32),o=n(7),i=n(11),a=Object(o.b)({name:"home",initialState:{cardList:[],filter:""},reducers:{setCardList:function(t,e){var n,o,i,a,c,u=null===e||void 0===e||null===(n=e.payload)||void 0===n||null===(o=n.list)||void 0===o||null===(i=o.map)||void 0===i?void 0:i.call(o,(function(t){return{url:t.url.replace("http://","https://")+"/"+t.color.slice(1),creator:t.creator,labels:t.labels}}));(null===(a=e.payload)||void 0===a?void 0:a.append)?(c=t.cardList).push.apply(c,Object(r.a)(u)):t.cardList=u},setFilter:function(t,e){var n;t.filter=null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.filter}}});e.a=a.reducer;var c=a.actions.setFilter,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.append,n=void 0!==e&&e;return function(t){i.a.get("/getCardList").then((function(e){0===(null===e||void 0===e?void 0:e.code)&&t(a.actions.setCardList({list:null===e||void 0===e?void 0:e.data,append:n}))}))}}},49:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s}));var r=n(3),o=n(7),i=[{key:"test_1",name:"\u6d4b\u8bd5\u7528\u4f8b 1",desc:"\u56de\u8c03\u51fd\u6570\u4e2d\u629b\u51fa \u540c\u6b65 \u5f02\u5e38\u3002",code:'function App() {\n  function onClick() {\n    throw new Error("test_1");\n  };\n  return (\n    <div onClick={onClick}>click</div>\n  );\n}\n',startLine:3,endLine:3,errorInfo:{},errorResult:{}},{key:"test_2",name:"\u6d4b\u8bd5\u7528\u4f8b 2",desc:"\u56de\u8c03\u51fd\u6570\u4e2d\u629b\u51fa \u5f02\u6b65 \u5f02\u5e38\u3002",code:'function App() {\n  function onClick() {\n    new Promise(() => {\n      throw new Error("test_2");\n    })\n  };\n  return (\n    <div onClick={onClick}>click</div>\n  );\n}\n',startLine:4,endLine:4,errorInfo:{},errorResult:{}}],a=Object(o.b)({name:"sourcemap",initialState:{tabConfigList:i},reducers:{editConfigList:function(t,e){var n,o=null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.key;if(o){var i=t.tabConfigList.map((function(t){var n;return t.key!==o?t:Object(r.a)(Object(r.a)({},t),null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.props)}));return Object(r.a)(Object(r.a)({},t),{},{tabConfigList:i})}},editConfigListErrorInfo:function(t,e){var n,o=null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.key;if(o){var i=t.tabConfigList.map((function(t){var n;return t.key!==o?t:Object(r.a)(Object(r.a)({},t),{},{errorInfo:Object(r.a)(Object(r.a)({},t.errorInfo),null===e||void 0===e||null===(n=e.payload)||void 0===n?void 0:n.props)})}));return Object(r.a)(Object(r.a)({},t),{},{tabConfigList:i})}}}}),c=(e.a=a.reducer,a.actions),u=c.editConfigList,s=c.editConfigListErrorInfo},64:function(t,e,n){},82:function(t,e,n){},84:function(t,e,n){},86:function(t,e,n){var r={"./home.js":87,"./menu.js":88};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=86},87:function(t,e,n){"use strict";n.r(e);var r=n(8);n.n(r).a.mock(/getCardList/,"get",{code:0,"data|20":[{creator:"@cname","labels|0-3":["@word"],url:r.Random.image("200x200"),color:"@color"}]})},88:function(t,e,n){"use strict";n.r(e);var r=n(8);n.n(r).a.mock(/getMenuList/,"get",(function(){return{code:0,data:[{name:"\u9996\u9875",path:"/"},{name:"sourceMap",path:"/sourcemap"}]}}))},89:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n.n(r),i=n(0),a=n.n(i),c=n(10),u=n(2),s=n(3),l=n(1);function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(i.lazy)(t);function r(t){return Object(l.jsx)(i.Suspense,{fallback:e,children:Object(l.jsx)(n,Object(s.a)({},t))})}return r}var p=[{path:"/",exact:!0,component:d((function(){return Promise.all([n.e(0),n.e(9),n.e(7)]).then(n.bind(null,799))}))},{path:"/sourcemap",exact:!0,component:d((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,800))}))}];function f(){return Object(l.jsx)(u.c,{children:p.map((function(t){return Object(l.jsx)(u.a,{path:t.path,exact:t.exact,children:Object(l.jsx)(t.component,{})},t.path)}))})}var v=n(14);n(64);function b(){console.log("render header");var t=Object(c.c)((function(t){return t.common.menuList}));return Object(l.jsx)("div",{className:"menu",children:t.map((function(t){return Object(l.jsx)(v.b,{to:t.path,className:"menu__item",children:t.name},t.path)}))})}var h=n(11),m=n(7),j=Object(m.b)({name:"common",initialState:{menuList:[]},reducers:{setMenuList:function(t,e){var n,r;t.menuList=null!==(n=null===e||void 0===e||null===(r=e.payload)||void 0===r?void 0:r.list)&&void 0!==n?n:[]}}}),O=j.reducer,g=j.actions.setMenuList;n(82);function y(){console.log("render layout");var t=Object(c.b)();return Object(i.useEffect)((function(){h.a.get("/getMenuList").then((function(e){0===(null===e||void 0===e?void 0:e.code)&&t(g({list:null===e||void 0===e?void 0:e.data}))}))}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:"app__page",children:Object(l.jsx)(f,{})})]})}var L=n(46),k=n(49),x={common:O,home:L.a,sourcemap:k.a},C=Object(m.a)({reducer:x}),w=n(28),E=n(29),A=n(30),_=n(31),I=function(t){Object(A.a)(n,t);var e=Object(_.a)(n);function n(t){var r;return Object(w.a)(this,n),(r=e.call(this,t)).state={hasError:!1},r}return Object(E.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log("componentDidCatch",t,e)}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"something is wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(a.a.PureComponent);n(83),n(84),n(85);var M=n(8),R=n.n(M),N=n(86),D=[];N.keys().forEach((function(t){D[t]=N(t)})),console.log("%cmock \u6587\u4ef6","color: green",D),R.a.setup({timeout:"500-1000"});var S=n(35),U="data-before-y",F="data-appeared",P="data-disappeared",z={root:null,rootMargin:"0px",threshold:0},J=null;function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new CustomEvent(t,{cancelable:!0,bubbles:!1,detail:e})}function H(t){return"true"===t}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;Object(S.a)()&&(J=new IntersectionObserver(Y,t))}function Y(t){t.forEach((function(t){var e,n=t.intersectionRatio,r=t.target,o=t.boundingClientRect,i=null!==(e=o.y)&&void 0!==e?e:o.top,a=Number(r.getAttribute(U));null===r.getAttribute(U)&&(a=i);var c=i>a?"up":"down";if(n>0){var u=r.getAttribute("data-appear-once"),s=r.getAttribute(F);if(H(u)&&H(s))return;r.dispatchEvent(B("appear",{direction:c})),r.setAttribute(F,!0)}else if(0===n){var l=r.getAttribute("data-disappear-once"),d=r.getAttribute(P);if(H(l)&&H(d))return;r.dispatchEvent(B("disappear",{direction:c})),r.setAttribute(P,!0)}r.setAttribute(U,i)}))}var q=window.Node;!function(){var t=q.prototype.addEventListener;T(),q.prototype.addEventListener=function(e,n,r){var o;"appear"===e&&(o=this,J?J.observe(o):T()),t.call(this,e,n,r)}}(),o.a.render(Object(l.jsx)(I,{children:Object(l.jsx)(c.a,{store:C,children:Object(l.jsx)(v.a,{children:Object(l.jsx)(y,{})})})}),document.getElementById("root"))}},[[89,4,6]]]);