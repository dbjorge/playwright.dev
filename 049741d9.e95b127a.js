(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{392:function(e,a,t){"use strict";function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}a.a=function(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}},393:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),i=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,d=b["".concat(r,".").concat(u)]||b[u]||g[u]||o;return t?i.a.createElement(d,c(c({ref:a},s),{},{components:t})):i.a.createElement(d,c({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},394:function(e,a,t){"use strict";var n=t(0),i=t(395);a.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,a,t){"use strict";var n=t(0),i=Object(n.createContext)(void 0);a.a=i},396:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=t(394),r=t(392),c=t(55),l=t.n(c),s=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,b=e.values,g=e.groupId,u=e.className,d=Object(o.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(n.useState)(c),j=O[0],w=O[1],h=n.Children.toArray(e.children);if(null!=g){var v=m[g];null!=v&&v!==j&&b.some((function(e){return e.value===v}))&&w(v)}var N=function(e){w(e),null!=g&&f(g,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var a=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===a,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(y,e.target,e)},onFocus:function(){return N(a)},onClick:function(){N(a)}},t)}))),a?Object(n.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==j})}))))}},397:function(e,a,t){"use strict";var n=t(3),i=t(0),o=t.n(i);a.a=function(e){var a=e.children,t=e.hidden,i=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:i}),a)}},75:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(7),o=(t(0),t(393)),r=(t(396),t(397),{id:"navigations",title:"Navigations"}),c={unversionedId:"navigations",id:"version-1.9.0/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.9.0/navigations.mdx",slug:"/navigations",permalink:"/docs/1.9.0/navigations",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Multi-page scenarios",permalink:"/docs/1.9.0/multi-pages"},next:{title:"Network",permalink:"/docs/1.9.0/network"}},l=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],s={toc:l};function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),Object(o.b)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),Object(o.b)("p",null,"Playwright splits the process of showing a new document in a page into ",Object(o.b)("strong",{parentName:"p"},"navigation")," and ",Object(o.b)("strong",{parentName:"p"},"loading"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",Object(o.b)("strong",{parentName:"p"},"loading")," the document."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageurl"}),"page.url()")," is set to the new url"),Object(o.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageondomcontentloaded"}),"page.on('domcontentloaded')")," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageonload"}),"page.on('load')")," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),Object(o.b)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),Object(o.b)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),Object(o.b)("h3",{id:"auto-wait"},"Auto-wait"),Object(o.b)("p",null,"Navigating to a URL auto-waits for the page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",Object(o.b)("inlineCode",{parentName:"p"},"load"),", ",Object(o.b)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate the page\nawait page.goto('https://example.com');\n")),Object(o.b)("h3",{id:"custom-wait"},"Custom wait"),Object(o.b)("p",null,"Override the default behavior to wait until a specific event, like ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate and wait until network is idle\nawait page.goto('https://example.com', { waitUntil: 'networkidle' });\n")),Object(o.b)("h3",{id:"wait-for-element"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Navigate and wait for element\nawait page.goto('https://example.com');\nawait page.waitForSelector('text=Example Domain');\n\n// Navigate and click element\n// Click will auto-wait for the element\nawait page.goto('https://example.com');\nawait page.click('text=Example Domain');\n")),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagegotourl-options"}),"page.goto(url[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagereloadoptions"}),"page.reload([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagegobackoptions"}),"page.goBack([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagegoforwardoptions"}),"page.goForward([options])"))),Object(o.b)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),Object(o.b)("p",null,"In the scenarios below, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," initiates a navigation and then waits for the navigation to complete."),Object(o.b)("h3",{id:"auto-wait-1"},"Auto-wait"),Object(o.b)("p",null,"By default, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click will auto-wait for navigation to complete\nawait page.click('text=Login');\n\n// Fill will auto-wait for element on navigated page\nawait page.fill('#username', 'John Doe');\n")),Object(o.b)("h3",{id:"custom-wait-1"},"Custom wait"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitforloadstatestate-options"}),"page.waitForLoadState([state, options])")," to wait for a loading event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button'); // Click triggers navigation\nawait page.waitForLoadState('networkidle'); // This resolves after 'networkidle'\n")),Object(o.b)("h3",{id:"wait-for-element-1"},"Wait for element"),Object(o.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"),". Alternatively, page interactions like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")," auto-wait for elements."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click will auto-wait for the element and trigger navigation\nawait page.click('text=Login');\n// Wait for the element\nawait page.waitForSelector('#username');\n\n// Click triggers navigation\nawait page.click('text=Login');\n// Fill will auto-wait for element\nawait page.fill('#username', 'John Doe');\n")),Object(o.b)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),Object(o.b)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitfornavigationoptions"}),"page.waitForNavigation([options])"),". For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigation is triggered from a ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(o.b)("li",{parentName:"ul"},"Page waits for network requests before navigation")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  page.waitForNavigation(), // Waits for the next navigation\n  page.click('a'), // Triggers a navigation after a timeout\n]);\n")),Object(o.b)("h3",{id:"multiple-navigations"},"Multiple navigations"),Object(o.b)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitfornavigationoptions"}),"page.waitForNavigation([options])")," to a specific url. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Client-side redirects issued after the ",Object(o.b)("inlineCode",{parentName:"li"},"load")," event"),Object(o.b)("li",{parentName:"ul"},"Multiple pushes to history state")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for a navigation.\nawait Promise.all([\n  page.waitForNavigation({ url: '**/login' }),\n  page.click('a'), // Triggers a navigation with a script redirect\n]);\n")),Object(o.b)("h3",{id:"loading-a-popup"},"Loading a popup"),Object(o.b)("p",null,"When popup is opened, explicitly calling ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitforloadstatestate-options"}),"page.waitForLoadState([state, options])")," ensures that popup is loaded to the desired state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ popup ] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('a[target=\"_blank\"]'),  // Opens popup\n]);\nawait popup.waitForLoadState('load');\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitforloadstatestate-options"}),"page.waitForLoadState([state, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitfornavigationoptions"}),"page.waitForNavigation([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitforfunctionpagefunction-arg-options"}),"page.waitForFunction(pageFunction[, arg, options])"))),Object(o.b)("h2",{id:"advanced-patterns"},"Advanced patterns"),Object(o.b)("p",null,"For pages that have complicated loading patterns, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pagewaitforfunctionpagefunction-arg-options"}),"page.waitForFunction(pageFunction[, arg, options])")," is a powerful and extensible approach to define a custom wait criteria."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page#pagewaitforfunctionpagefunction-arg-options"}),"page.waitForFunction(pageFunction[, arg, options])"))))}p.isMDXComponent=!0}}]);