(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(209)),o=a(212),i=a(213),l={id:"pom",title:"Page Object Models"},s={unversionedId:"pom",id:"version-1.8.0/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-1.8.0/pom.mdx",slug:"/pom",permalink:"/python/docs/pom",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Network",permalink:"/python/docs/network"},next:{title:"Verification",permalink:"/python/docs/verification"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[]}]}],p={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#implementation"}),"Implementation"))),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),Object(c.b)("p",null,"Page objects ",Object(c.b)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),Object(c.b)("p",null,"Page objects ",Object(c.b)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("p",null,"Page object models wrap over a Playwright ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"),"."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n\n    def navigate(self):\n        self.page.goto("https://bing.com")\n\n    def search(self, text):\n        self.page.fill(\'[aria-label="Enter your search term"]\', text)\n        self.page.press(\'[aria-label="Enter your search term"]\', "Enter")\n'))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# models/search.py\nclass SearchPage:\n    def __init__(self, page):\n        self.page = page\n\n    async def navigate(self):\n        await self.page.goto("https://bing.com")\n\n    async def search(self, text):\n        await self.page.fill(\'[aria-label="Enter your search term"]\', text)\n        await self.page.press(\'[aria-label="Enter your search term"]\', "Enter")\n')))),Object(c.b)("p",null,"Page objects can then be used inside a test."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = browser.new_page()\nsearch_page = SearchPage(page)\nsearch_page.navigate()\nsearch_page.search("search query")\n'))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# test_search.py\nfrom models.search import SearchPage\n\n# in the test\npage = await browser.new_page()\nsearch_page = SearchPage(page)\nawait search_page.navigate()\nawait search_page.search("search query")\n')))),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"))))}b.isMDXComponent=!0},208:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),f=n,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||c;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(210),o=a(208),i=a(55),l=a.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,m=Object(c.a)(),d=m.tabGroupChoices,g=m.setTabGroupChoices,y=Object(n.useState)(i),h=y[0],O=y[1],j=n.Children.toArray(e.children);if(null!=b){var v=d[b];null!=v&&v!==h&&p.some((function(e){return e.value===v}))&&O(v)}var w=function(e){O(e),null!=b&&g(b,e)},P=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},213:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);