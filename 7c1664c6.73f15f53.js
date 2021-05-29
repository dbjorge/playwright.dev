(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(393)),c=(n(396),n(397),{id:"class-androidsocket",title:"AndroidSocket"}),i={unversionedId:"api/class-androidsocket",id:"api/class-androidsocket",isDocsHomePage:!1,title:"AndroidSocket",description:"AndroidSocket] is a way to communicate with a process launched on the [AndroidDevice]. Use [androidDevice.open(command) to open a socket.",source:"@site/docs/api/class-androidsocket.mdx",slug:"/api/class-androidsocket",permalink:"/docs/next/api/class-androidsocket",version:"current",sidebar:"api",previous:{title:"AndroidInput",permalink:"/docs/next/api/class-androidinput"},next:{title:"AndroidWebView",permalink:"/docs/next/api/class-androidwebview"}},l=[{value:"androidSocket.on(&#39;close&#39;)",id:"androidsocketonclose",children:[]},{value:"androidSocket.on(&#39;data&#39;)",id:"androidsocketondata",children:[]},{value:"androidSocket.close()",id:"androidsocketclose",children:[]},{value:"androidSocket.write(data)",id:"androidsocketwritedata",children:[]}],d={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-androidsocket",title:"AndroidSocket"}),"AndroidSocket")," is a way to communicate with a process launched on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-androiddevice",title:"AndroidDevice"}),"AndroidDevice"),". Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-androiddevice#androiddeviceopencommand"}),"androidDevice.open(command)")," to open a socket."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-androidsocket#androidsocketonclose"}),"androidSocket.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-androidsocket#androidsocketondata"}),"androidSocket.on('data')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-androidsocket#androidsocketclose"}),"androidSocket.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-androidsocket#androidsocketwritedata"}),"androidSocket.write(data)"))),Object(o.b)("h2",{id:"androidsocketonclose"},"androidSocket.on('close')"),Object(o.b)("p",null,"Emitted when the socket is closed."),Object(o.b)("h2",{id:"androidsocketondata"},"androidSocket.on('data')"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">")),Object(o.b)("p",null,"Emitted when data is available to read from the socket."),Object(o.b)("h2",{id:"androidsocketclose"},"androidSocket.close()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(o.b)("p",null,"Closes the socket."),Object(o.b)("h2",{id:"androidsocketwritedata"},"androidSocket.write(data)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> Data to write."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(o.b)("p",null,"Writes some ",Object(o.b)("inlineCode",{parentName:"p"},"data")," to the socket."))}s.isMDXComponent=!0},392:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(c,".").concat(p)]||u[p]||b[p]||o;return n?r.a.createElement(f,i(i({ref:t},d),{},{components:n})):r.a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},394:function(e,t,n){"use strict";var a=n(0),r=n(395);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},396:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(394),c=n(392),i=n(55),l=n.n(i),d=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(o.a)(),m=f.tabGroupChoices,O=f.setTabGroupChoices,j=Object(a.useState)(i),v=j[0],h=j[1],k=a.Children.toArray(e.children);if(null!=b){var y=m[b];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&h(y)}var w=function(e){h(e),null!=b&&O(b,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},397:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);