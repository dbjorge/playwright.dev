(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9385],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),w=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,r.useState)(u),v=g[0],k=g[1],b=r.Children.toArray(e.children),x=[];if(null!=m){var N=w[m];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&k(N)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;k(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case s:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:y,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},215:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(1395),n(8215),{id:"emulation",title:"Emulation"}),l={unversionedId:"emulation",id:"version-1.12.0/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.12.0/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/java/docs/emulation",version:"1.12.0",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"version-1.12.0/docs",previous:{title:"Element selectors",permalink:"/java/docs/selectors"},next:{title:"Events",permalink:"/java/docs/events"}},s=[{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-5",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,o.kt)("li",{parentName:"ul"},"locale, timezone"),(0,o.kt)("li",{parentName:"ul"},"color scheme"),(0,o.kt)("li",{parentName:"ul"},"geolocation")),(0,o.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#user-agent"},"User agent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#viewport"},"Viewport")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#locale--timezone"},"Locale & timezone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#permissions"},"Permissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geolocation"},"Geolocation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#color-scheme-and-media"},"Color scheme and media"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"user-agent"},"User agent"),(0,o.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setUserAgent("My user agent"));\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"viewport"},"Viewport"),(0,o.kt)("p",null,"Create a context with custom viewport size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Create context with given viewport\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(1280, 1024));\n\n// Resize viewport for individual page\npage.setViewportSize(1600, 1200);\n\n// Emulate high-DPI\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(2560, 1440)\n  .setDeviceScaleFactor(2);\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-set-viewport-size"},"Page.setViewportSize(width, height)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"locale--timezone"},"Locale & timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Emulate locale and time\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setLocale("de-DE")\n  .setTimezoneId("Europe/Berlin"));\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setPermissions(Arrays.asList("notifications"));\n')),(0,o.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'context.grantPermissions(Arrays.asList("geolocation"));\n')),(0,o.kt)("p",null,"Grant notifications access from a specific domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'context.grantPermissions(Arrays.asList("notifications"),\n  new BrowserContext.GrantPermissionsOptions().setOrigin("https://skype.com"));\n')),(0,o.kt)("p",null,"Revoke all permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"context.clearPermissions();\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-grant-permissions"},"BrowserContext.grantPermissions(permissions[, options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-clear-permissions"},"BrowserContext.clearPermissions()"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"geolocation"},"Geolocation"),(0,o.kt)("p",null,"Create a context with ",(0,o.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setGeolocation(48.858455, 2.294474)\n  .setPermissions(Arrays.asList("geolocation")));\n')),(0,o.kt)("p",null,"Change the location later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"context.setGeolocation(new Geolocation(29.979097, 31.134256));\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browsercontext#browser-context-set-geolocation"},"BrowserContext.setGeolocation(geolocation)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),(0,o.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create context with dark mode\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Create page with dark mode\nPage page = browser.newPage(new Browser.NewPageOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Change color scheme for the page\npage.emulateMedia(new Page.EmulateMediaOptions().setColorScheme(ColorScheme.DARK));\n\n// Change media for page\npage.emulateMedia(new Page.EmulateMediaOptions().setMedia(Media.PRINT));\n')),(0,o.kt)("h3",{id:"api-reference-5"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-browser#browser-new-context"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-emulate-media"},"Page.emulateMedia([options])"))))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);