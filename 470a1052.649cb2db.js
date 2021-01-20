(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{225:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(666)),c=(t(670),t(671),{id:"class-webkitbrowser",title:"WebKitBrowser"}),s={unversionedId:"api/class-webkitbrowser",id:"version-1.8.0/api/class-webkitbrowser",isDocsHomePage:!1,title:"WebKitBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.8.0/api/class-webkitbrowser.mdx",slug:"/api/class-webkitbrowser",permalink:"/docs/api/class-webkitbrowser",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"Video",permalink:"/docs/api/class-video"},next:{title:"WebSocket",permalink:"/docs/api/class-websocket"}},i=[],b={toc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"extends: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser",title:"Browser"}),"Browser"))),Object(a.b)("p",null,"WebKit browser instance does not expose WebKit-specific features."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browserondisconnected"}),"browser.on('disconnected')")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browserclose"}),"browser.close()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-browser#browserversion"}),"browser.version()"))))}l.isMDXComponent=!0},666:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return w}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var r=o.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,w=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?o.a.createElement(w,s(s({ref:r},b),{},{components:t})):o.a.createElement(w,s({ref:r},b))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var b=2;b<a;b++)c[b]=t[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},667:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}r.a=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}},668:function(e,r,t){"use strict";var n=t(0),o=t(669);r.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},669:function(e,r,t){"use strict";var n=t(0),o=Object(n.createContext)(void 0);r.a=o},670:function(e,r,t){"use strict";t(0),t(668),t(667),t(55)},671:function(e,r,t){"use strict";t(3),t(0)}}]);