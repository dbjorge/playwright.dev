(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[492],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(h,s(s({ref:a},p),{},{components:t})):n.createElement(h,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){"use strict";var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},41395:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(67294),r=t(80944),l=t(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var o=37,c=39;var p=function(e){var a=e.lazy,t=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=(0,r.Z)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,n.useState)(p),k=v[0],y=v[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=f[u];null!=w&&w!==k&&d.some((function(e){return e.value===w}))&&y(w)}var H=function(e){var a=e.currentTarget,t=N.indexOf(a),n=d[t].value;y(n),null!=u&&(g(u,n),setTimeout((function(){var e,t,n,r,l,s,o,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,l=e.right,s=window,o=s.innerHeight,c=s.innerWidth,t>=0&&l<=c&&r<=o&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(i),setTimeout((function(){return a.classList.remove(i)}),2e3))}),150))},j=function(e){var a,t;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case o:var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":k===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:H,onClick:H},t)}))),a?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})}))))}},79443:function(e,a,t){"use strict";var n=(0,t(67294).createContext)(void 0);a.Z=n},80944:function(e,a,t){"use strict";var n=t(67294),r=t(79443);a.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},46756:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o},default:function(){return p}});var n=t(22122),r=t(19756),l=(t(67294),t(3905)),s=(t(41395),t(58215),{id:"handles",title:"Handles"}),i={unversionedId:"handles",id:"version-1.10.0/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.10.0/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/docs/1.10.0/handles",version:"1.10.0",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.10.0/docs",previous:{title:"Extensibility",permalink:"/docs/1.10.0/extensibility"},next:{title:"Input",permalink:"/docs/1.10.0/input"}},o=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],c={toc:o};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,l.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,l.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,l.kt)("p",null,"Here is the easiest way to obtain a ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const jsHandle = await page.evaluateHandle('window');\n//  Use jsHandle for evaluations.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ulElementHandle = await page.waitForSelector('ul');\n//  Use ulElementHandle for actions and evaluation.\n")),(0,l.kt)("h2",{id:"element-handles"},"Element Handles"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pageclickselector-options"},"page.click(selector[, options])")," rather than using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,l.kt)("p",null,"When ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pagewaitforselectorselector-options"},"page.waitForSelector(selector[, options])")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-frame#framewaitforselectorselector-options"},"frame.waitForSelector(selector[, options])")," methods. These APIs wait for the element to be attached and visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nexpect(boundingBox.width).toBe(100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nexpect(classNames.includes('highlighted')).toBeTruthy();\n")),(0,l.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,l.kt)("p",null,"Handles can be passed into the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pageevaluatepagefunction-arg"},"page.evaluate(pageFunction[, arg])")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Create new array in page.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get the length of the array.\nconst length = await page.evaluate(a => a.length, myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.evaluate(arg => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),(0,l.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,l.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pageevaluatehandlepagefunction-arg"},"page.evaluateHandle(pageFunction[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pageselector"},"page.$(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pageselector-1"},"page.$$(selector)")," or their frame counterparts ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-frame#frameevaluatehandlepagefunction-arg"},"frame.evaluateHandle(pageFunction[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-frame#frameselector"},"frame.$(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-frame#frameselector-1"},"frame.$$(selector)"),". Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-jshandle#jshandledispose"},"jsHandle.dispose()")," method."),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleboundingbox"},"elementHandle.boundingBox()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandlegetattributename"},"elementHandle.getAttribute(name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnertext"},"elementHandle.innerText()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandleinnerhtml"},"elementHandle.innerHTML()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-elementhandle#elementhandletextcontent"},"elementHandle.textContent()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-jshandle#jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageevaluatehandlepagefunction-arg"},"page.evaluateHandle(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageselector"},"page.$(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.10.0/api/class-page#pageselector-1"},"page.$$(selector)"))))}p.isMDXComponent=!0},86010:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);