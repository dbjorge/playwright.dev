(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(393)),o=(r(396),r(397),{id:"class-video",title:"Video"}),c={unversionedId:"api/class-video",id:"version-1.11.0/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.11.0/api/class-video.mdx",slug:"/api/class-video",permalink:"/docs/api/class-video",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Touchscreen",permalink:"/docs/api/class-touchscreen"},next:{title:"WebSocket",permalink:"/docs/api/class-websocket"}},l=[{value:"video.delete()",id:"videodelete",children:[]},{value:"video.path()",id:"videopath",children:[]},{value:"video.saveAs(path)",id:"videosaveaspath",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When browser context is created with the ",Object(i.b)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(await page.video().path());\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-video#videodelete"}),"video.delete()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-video#videopath"}),"video.path()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-video#videosaveaspath"}),"video.saveAs(path)"))),Object(i.b)("h2",{id:"videodelete"},"video.delete()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(i.b)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),Object(i.b)("h2",{id:"videopath"},"video.path()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">>")),Object(i.b)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),Object(i.b)("h2",{id:"videosaveaspath"},"video.saveAs(path)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Path where the video should be saved."),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(i.b)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}u.isMDXComponent=!0},392:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return v}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,v=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?n.a.createElement(v,c(c({ref:t},s),{},{components:r})):n.a.createElement(v,c({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";var a=r(0),n=r(395);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},396:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(394),o=r(392),c=r(55),l=r.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,v=Object(i.a)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,m=Object(a.useState)(c),O=m[0],j=m[1],y=a.Children.toArray(e.children);if(null!=p){var g=f[p];null!=g&&g!==O&&d.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=p&&h(p,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":r},b)},d.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},397:function(e,t,r){"use strict";var a=r(3),n=r(0),i=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:n}),t)}}}]);