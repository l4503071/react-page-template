(this["webpackJsonpperformance-optimization"]=this["webpackJsonpperformance-optimization"]||[]).push([[3],{29:function(e,t,n){"use strict";var r=n(43),o=n.n(r).a.create();o.interceptors.response.use((function(e){return e.data})),t.a=o},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));var r=n(7),o=Object(r.b)({name:"home",initialState:{cardList:[],filter:""},reducers:{setCardList:function(e,t){var n,r;e.cardList=null!==(n=null===t||void 0===t||null===(r=t.payload)||void 0===r?void 0:r.list)&&void 0!==n?n:[]},setFilter:function(e,t){var n;e.filter=null===t||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.filter}}});t.a=o.reducer;var c=o.actions,i=c.setCardList,a=c.setFilter},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(6),o=n(7),c=[{key:"test_1",name:"\u6d4b\u8bd5\u7528\u4f8b 1",desc:"\u56de\u8c03\u51fd\u6570\u4e2d\u629b\u51fa\u5f02\u5e38\u3002",code:'function App() {\n  function onClick() {\n    throw new Error("test_1");\n  };\n  return (\n    <div onClick={onClick}>click</div>\n  );\n}\n',startLine:3,endLine:3,errorInfo:{},errorResult:{}}],i=Object(o.b)({name:"sourcemap",initialState:{tabConfigList:c},reducers:{editConfigList:function(e,t){var n,o=null===t||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.key;if(o){var c=e.tabConfigList.map((function(e){var n;return e.key!==o?e:Object(r.a)(Object(r.a)({},e),null===t||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.props)}));return Object(r.a)(Object(r.a)({},e),{},{tabConfigList:c})}}}}),a=(t.a=i.reducer,i.actions.editConfigList)},55:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){var r={"./home.js":78,"./menu.js":79};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id=77},78:function(e,t,n){"use strict";n.r(t);var r=n(8);n.n(r).a.mock(/getCardList/,"get",{code:0,"data|5-20":[{name:"@province",image:r.Random.image("200x200"),color:"@color","count|0-100":0}]})},79:function(e,t,n){"use strict";n.r(t);var r=n(8);n.n(r).a.mock(/getMenuList/,"get",(function(){return{code:0,data:[{name:"\u9996\u9875",path:"/"},{name:"sourceMap",path:"/sourcemap"}]}}))},80:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n.n(r),c=n(0),i=n.n(c),a=n(10),u=n(2),s=n(6),l=n(1);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(c.lazy)(e);function r(e){return Object(l.jsx)(c.Suspense,{fallback:t,children:Object(l.jsx)(n,Object(s.a)({},e))})}return r}var f=[{path:"/",exact:!0,component:d((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,767))}))},{path:"/sourcemap",exact:!0,component:d((function(){return Promise.all([n.e(0),n.e(5),n.e(8)]).then(n.bind(null,768))}))}];function m(){return Object(l.jsx)(u.c,{children:f.map((function(e){return Object(l.jsx)(u.a,{path:e.path,exact:e.exact,children:Object(l.jsx)(e.component,{})},e.path)}))})}var v=n(12);n(55);function p(){console.log("render header");var e=Object(a.c)((function(e){return e.common.menuList}));return Object(l.jsx)("div",{className:"menu",children:e.map((function(e){return Object(l.jsx)(v.b,{to:e.path,className:"menu__item",children:e.name},e.path)}))})}var j=n(29),b=n(7),h=Object(b.b)({name:"common",initialState:{menuList:[]},reducers:{setMenuList:function(e,t){var n,r;e.menuList=null!==(n=null===t||void 0===t||null===(r=t.payload)||void 0===r?void 0:r.list)&&void 0!==n?n:[]}}}),O=h.reducer,g=h.actions.setMenuList;n(73);function x(){console.log("render layout");var e=Object(a.b)();return Object(c.useEffect)((function(){j.a.get("/getMenuList").then((function(t){0===(null===t||void 0===t?void 0:t.code)&&e(g({list:null===t||void 0===t?void 0:t.data}))}))}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(p,{}),Object(l.jsx)("div",{className:"app__page",children:Object(l.jsx)(m,{})})]})}var L=n(39),k=n(41),y={common:O,home:L.a,sourcemap:k.a},C=Object(b.a)({reducer:y}),E=n(23),_=n(24),w=n(25),M=n(26),N=function(e){Object(w.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(_.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch",e,t)}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"something is wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(i.a.PureComponent);n(74),n(75),n(76);var D=n(8),S=n.n(D),F=n(77),z=[];F.keys().forEach((function(e){z[e]=F(e)})),console.log("%cmock \u6587\u4ef6","color: green",z),S.a.setup({timeout:"500-1000"}),o.a.render(Object(l.jsx)(N,{children:Object(l.jsx)(a.a,{store:C,children:Object(l.jsx)(v.a,{basename:"/react-page-template",children:Object(l.jsx)(x,{})})})}),document.getElementById("root"))}},[[80,4,6]]]);