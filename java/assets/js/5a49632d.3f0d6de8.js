(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2054],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(944),l=r(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),h=d.tabGroupChoices,v=d.setTabGroupChoices,k=(0,n.useState)(u),g=k[0],y=k[1],b=n.Children.toArray(e.children),w=[];if(null!=m){var N=h[m];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,r=w.indexOf(t),n=p[r].value;y(n),null!=m&&(v(m,n),setTimeout((function(){var e,r,n,a,l,i,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,l=e.right,i=window,s=i.innerHeight,c=i.innerWidth,r>=0&&l<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case c:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case s:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},90:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i=(r(1395),r(8215),{id:"test-parallel",title:"Parallelism and sharding"}),o={unversionedId:"test-parallel",id:"version-1.12.0/test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel by default, using multiple worker processes.",source:"@site/versioned_docs/version-1.12.0/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/java/docs/test-parallel",version:"1.12.0",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"}},s=[{value:"Workers",id:"workers",children:[]},{value:"Shards",id:"shards",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test runs tests in parallel by default, using multiple worker processes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#workers"},"Workers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shards"},"Shards"))),(0,l.kt)("h2",{id:"workers"},"Workers"),(0,l.kt)("p",null,"Each worker process creates a new environment to run tests. By default, Playwright Test reuses the worker as much as it can to make testing faster."),(0,l.kt)("p",null,"Should any test fail, Playwright will discard entire worker process along with the browsers used and will start a new one. That way failing tests can't affect healthy ones."),(0,l.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/test-cli"},"command line")," or in the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/test-configuration"},"configuration file"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run in parallel by default"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Disable parallelization"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Control the number of workers"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the configuration file"))),(0,l.kt)("p",null,"Each worker process is assigned a unique sequential index that is accessible through the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/test-advanced#workerinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"workerInfo"))," object. Since each worker is a process, there also is a process-wide environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," that has the same value."),(0,l.kt)("h2",{id:"shards"},"Shards"),(0,l.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,l.kt)("p",null,"That way your test suite completes 3 times faster."))}u.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);