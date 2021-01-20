(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(666)),s=(n(670),n(671),{id:"class-cdpsession",title:"CDPSession"}),c={unversionedId:"api/class-cdpsession",id:"version-1.8.0/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.8.0/api/class-cdpsession.mdx",slug:"/api/class-cdpsession",permalink:"/docs/api/class-cdpsession",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"BrowserType",permalink:"/docs/api/class-browsertype"},next:{title:"ChromiumBrowser",permalink:"/docs/api/class-chromiumbrowser"}},i=[{value:"cdpSession.detach()",id:"cdpsessiondetach",children:[]},{value:"cdpSession.send(method, params)",id:"cdpsessionsendmethod-params",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter",title:"EventEmitter"}),"EventEmitter"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"protocol methods can be called with ",Object(o.b)("inlineCode",{parentName:"li"},"session.send")," method."),Object(o.b)("li",{parentName:"ul"},"protocol events can be subscribed to with ",Object(o.b)("inlineCode",{parentName:"li"},"session.on")," method.")),Object(o.b)("p",null,"Useful links:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol Viewer"),"."),Object(o.b)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"}),"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const client = await page.context().newCDPSession(page);\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-cdpsession#cdpsessiondetach"}),"cdpSession.detach()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-cdpsession#cdpsessionsendmethod-params"}),"cdpSession.send(method[, params])"))),Object(o.b)("h2",{id:"cdpsessiondetach"},"cdpSession.detach()"),Object(o.b)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),Object(o.b)("h2",{id:"cdpsessionsendmethod-params"},"cdpSession.send(method","[, params]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> protocol method name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Optional method parameters"),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>")))}p.isMDXComponent=!0},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},667:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},668:function(e,t,n){"use strict";var r=n(0),a=n(669);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},669:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},670:function(e,t,n){"use strict";n(0),n(668),n(667),n(55)},671:function(e,t,n){"use strict";n(3),n(0)}}]);