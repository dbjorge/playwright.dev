(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),l=t(7),r=(t(0),t(209)),c=t(212),s=t(213),o={id:"handles",title:"Handles"},i={unversionedId:"handles",id:"handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/docs/handles.mdx",slug:"/handles",permalink:"/python/docs/next/handles",version:"current"},p=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],b={toc:p};function d(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),Object(r.b)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),Object(r.b)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),Object(r.b)("h3",{id:"api-reference"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),Object(r.b)("p",null,"Here is the easiest way to obtain a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n")))),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"ul_element_handle = page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n"))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"ul_element_handle = await page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n")))),Object(r.b)("h2",{id:"element-handles"},"Element Handles"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," rather than using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),Object(r.b)("p",null,"When ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-options"}),"page.wait_for_selector(selector, **options)")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-frame#framewait_for_selectorselector-options"}),"frame.wait_for_selector(selector, **options)")," methods. These APIs wait for the element to be attached and visible."),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n")))),Object(r.b)("h2",{id:"handles-as-parameters"},"Handles as parameters"),Object(r.b)("p",null,"Handles can be passed into the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluateexpression-options"}),"page.evaluate(expression, **options)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n')))),Object(r.b)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),Object(r.b)("p",null,"Handles can be acquired using the page methods such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-options"}),"page.evaluate_handle(expression, **options)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagequery_selector_allselector"}),"page.query_selector_all(selector)")," or their frame counterparts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-frame#frameevaluate_handleexpression-options"}),"frame.evaluate_handle(expression, **options)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-frame#framequery_selectorselector"}),"frame.query_selector(selector)")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-frame#framequery_selector_allselector"}),"frame.query_selector_all(selector)"),". Once created, handles will retain object from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-jshandle#js_handledispose"}),"js_handle.dispose()")," method."),Object(r.b)("h3",{id:"api-reference-1"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlebounding_box"}),"element_handle.bounding_box()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleget_attributename"}),"element_handle.get_attribute(name)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleinner_text"}),"element_handle.inner_text()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleinner_html"}),"element_handle.inner_html()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handletext_content"}),"element_handle.text_content()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleevaluateexpression-options"}),"js_handle.evaluate(expression, **options)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-options"}),"page.evaluate_handle(expression, **options)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagequery_selector_allselector"}),"page.query_selector_all(selector)"))))}d.isMDXComponent=!0},208:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},209:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),p=function(e){var a=l.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=p(e.components);return l.a.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},h=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=p(t),h=n,u=b["".concat(c,".").concat(h)]||b[h]||d[h]||r;return t?l.a.createElement(u,s(s({ref:a},i),{},{components:t})):l.a.createElement(u,s({ref:a},i))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<r;i++)c[i]=t[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},210:function(e,a,t){"use strict";var n=t(0),l=t(211);a.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,a,t){"use strict";var n=t(0),l=Object(n.createContext)(void 0);a.a=l},212:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(210),c=t(208),s=t(55),o=t.n(s),i=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,b=e.values,d=e.groupId,h=e.className,u=Object(r.a)(),m=u.tabGroupChoices,y=u.setTabGroupChoices,j=Object(n.useState)(s),f=j[0],O=j[1],g=n.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&O(v)}var _=function(e){O(e),null!=d&&y(d,e)},x=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},h)},b.map((function(e){var a=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case i:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e)},onFocus:function(){return _(a)},onClick:function(){_(a)}},t)}))),a?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},213:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l);a.a=function(e){var a=e.children,t=e.hidden,l=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:l}),a)}}}]);