(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[368],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(80944),i=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,N=h.setTabGroupChoices,g=(0,n.useState)(c),f=g[0],w=g[1],b=n.Children.toArray(e.children),x=[];if(null!=m){var v=k[m];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&w(v)}var y=function(e){var t=e.currentTarget,a=x.indexOf(t),n=u[a].value;w(n),null!=m&&(N(m,n),setTimeout((function(){var e,a,n,r,i,l,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=x.indexOf(e.target)+1;a=x[n]||x[0];break;case s:var r=x.indexOf(e.target)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},74519:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l=(a(41395),a(58215),{id:"release-notes",title:"Release notes"}),o={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.13",source:"@site/docs/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/docs/next/release-notes",version:"current",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"docs",previous:{title:"Supported languages",permalink:"/docs/next/languages"},next:{title:"Annotations",permalink:"/docs/next/test-annotations"}},s=[{value:"Version 1.13",id:"version-113",children:[]},{value:"Version 1.12",id:"version-112",children:[]},{value:"Version 1.11",id:"version-111",children:[]},{value:"Version 1.10",id:"version-110",children:[]},{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],p={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-111"},"Version 1.11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-110"},"Version 1.10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-19"},"Version 1.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-18"},"Version 1.8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#version-17"},"Version 1.7"))),(0,i.kt)("h2",{id:"version-113"},"Version 1.13"),(0,i.kt)("h4",{id:"highlights"},"Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u26a1\ufe0f Introducing Reporter API for Playwright Test")," which is already used to create an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/allure-framework/allure-js/pull/297"},"Allure Playwright reporter"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-drag-and-drop"},"page.dragAndDrop(source, target[, options])")," API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR support")," with body sizes for requests and responses. Use via ",(0,i.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])"),".")),(0,i.kt)("h4",{id:"browser-versions"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("h4",{id:"new-apis"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-page"},"browser.newPage([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-response#response-security-details"},"response.securityDetails()")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-response#response-server-addr"},"response.serverAddr()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-drag-and-drop"},"page.dragAndDrop(source, target[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-drag-and-drop"},"frame.dragAndDrop(source, target[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-download#download-cancel"},"download.cancel()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-input-value"},"page.inputValue(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-input-value"},"frame.inputValue(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-input-value"},"elementHandle.inputValue([options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-fill"},"page.fill(selector, value[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-fill"},"frame.fill(selector, value[, options])"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-fill"},"elementHandle.fill(value[, options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-select-option"},"page.selectOption(selector, values[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-select-option"},"frame.selectOption(selector, values[, options])"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-select-option"},"elementHandle.selectOption(values[, options])"))),(0,i.kt)("h2",{id:"version-112"},"Version 1.12"),(0,i.kt)("h4",{id:"\ufe0f-introducing-playwright-test"},"\u26a1\ufe0f Introducing Playwright Test"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/intro"},"Playwright Test")," is a ",(0,i.kt)("strong",{parentName:"p"},"new test runner")," built from scratch by Playwright team specifically to accommodate end-to-end testing needs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run tests across all browsers."),(0,i.kt)("li",{parentName:"ul"},"Execute tests in parallel."),(0,i.kt)("li",{parentName:"ul"},"Enjoy context isolation and sensible defaults out of the box."),(0,i.kt)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),(0,i.kt)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),(0,i.kt)("p",null,"Installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @playwright/test\n")),(0,i.kt)("p",null,"Simple test ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/foo.spec.ts"),":"),(0,i.kt)("p",null,"Running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,i.kt)("p",null,"\ud83d\udc49  Read more in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/intro"},"Playwright Test documentation"),"."),(0,i.kt)("h4",{id:"\ud83e\udddf\u2642\ufe0f-introducing-playwright-trace-viewer"},"\ud83e\udddf\u200d\u2642\ufe0f Introducing Playwright Trace Viewer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/trace-viewer"},"Playwright Trace Viewer")," is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"page DOM before and after each Playwright action"),(0,i.kt)("li",{parentName:"ul"},"page rendering before and after each Playwright action"),(0,i.kt)("li",{parentName:"ul"},"browser network during script execution")),(0,i.kt)("p",null,"Traces are recorded using the new ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext#browser-context-tracing"},"browserContext.tracing")," API:"),(0,i.kt)("p",null,"Traces are examined later with the Playwright CLI:"),(0,i.kt)("p",null,"That will open the following GUI:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png",alt:"image"})),(0,i.kt)("p",null,"\ud83d\udc49 Read more in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/trace-viewer"},"trace viewer documentation"),"."),(0,i.kt)("h4",{id:"browser-versions-1"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Edge 91")),(0,i.kt)("h4",{id:"new-apis-1"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reducedMotion")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-emulate-media"},"page.emulateMedia([options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype#browser-type-launch-persistent-context"},"browserType.launchPersistentContext(userDataDir[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-page"},"browser.newPage([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-event-request"},"browserContext.on('request')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-event-request-failed"},"browserContext.on('requestfailed')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-event-request-finished"},"browserContext.on('requestfinished')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-event-response"},"browserContext.on('response')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype#browser-type-launch"},"browserType.launch([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsertype#browser-type-launch-persistent-context"},"browserType.launchPersistentContext(userDataDir[, options])")),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-tracing"},"browserContext.tracing")," API namespace"),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-download#download-page"},"download.page()")," method")),(0,i.kt)("h2",{id:"version-111"},"Version 1.11"),(0,i.kt)("p",null,"\ud83c\udfa5  New video: ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/_Jla6DyuEu4"},"Playwright: A New Test Automation Framework for the Modern Web")," (",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"},"slides"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We talked about Playwright"),(0,i.kt)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),(0,i.kt)("li",{parentName:"ul"},"Did live demos with new features \u2728"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Special thanks")," to ",(0,i.kt)("a",{parentName:"li",href:"http://applitools.com/"},"applitools")," for hosting the event and inviting us!")),(0,i.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("h4",{id:"new-apis-2"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support for ",(0,i.kt)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-wait-for-request"},"page.waitForRequest(urlOrPredicate[, options])")," and others"),(0,i.kt)("li",{parentName:"ul"},"new ",(0,i.kt)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),(0,i.kt)("li",{parentName:"ul"},"new methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-wait-for-url"},"page.waitForURL(url[, options])")," to await navigations to URL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-video#video-delete"},"video.delete()")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-video#video-save-as"},"video.saveAs(path)")," to manage screen recording"))),(0,i.kt)("li",{parentName:"ul"},"new options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screen")," option in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")," method to emulate ",(0,i.kt)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-check"},"page.check(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-uncheck"},"page.uncheck(selector[, options])")," methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-check"},"page.check(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-uncheck"},"page.uncheck(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-click"},"page.click(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-dblclick"},"page.dblclick(selector[, options])"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-hover"},"page.hover(selector[, options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-tap"},"page.tap(selector[, options])"))))),(0,i.kt)("h2",{id:"version-110"},"Version 1.10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java v1.10")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable"),"!"),(0,i.kt)("li",{parentName:"ul"},"Run Playwright against ",(0,i.kt)("strong",{parentName:"li"},"Google Chrome")," and ",(0,i.kt)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"new channels API"),"."),(0,i.kt)("li",{parentName:"ul"},"Chromium screenshots are ",(0,i.kt)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),(0,i.kt)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,i.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google Chrome 89"),(0,i.kt)("li",{parentName:"ul"},"Microsoft Edge 89")),(0,i.kt)("h4",{id:"new-apis-3"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-browsertype#browsertypelaunchoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",(0,i.kt)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",(0,i.kt)("a",{parentName:"li",href:"./browsers"},"our documentation"),".")),(0,i.kt)("h2",{id:"version-19"},"Version 1.9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/inspector"},"Playwright Inspector")," is a ",(0,i.kt)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),(0,i.kt)("li",{parentName:"ul"},"Author new scripts by ",(0,i.kt)("strong",{parentName:"li"},"recording user actions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pause script execution")," with ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-pause"},"page.pause()")," in headed mode. Pausing the page launches ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/inspector"},"Playwright Inspector")," for debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",(0,i.kt)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",(0,i.kt)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/selectors#text-selector"},"more examples"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",(0,i.kt)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/dialogs"},"Learn more")," about this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Playwright for Python")," is ",(0,i.kt)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/docker"},"Docker image")," to run tests in CI/CD.")),(0,i.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h4",{id:"new-apis-4"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-pause"},"page.pause()"),".")),(0,i.kt)("h2",{id:"version-18"},"Version 1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/selectors#selecting-elements-based-on-layout"},"Selecting elements based on layout")," with ",(0,i.kt)("inlineCode",{parentName:"p"},":left-of()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":right-of()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":above()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":below()"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Playwright now includes ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/cli"},"command line interface"),", former playwright-cli."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright --help\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-select-option"},"page.selectOption(selector, values[, options])")," now waits for the options to be present.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New methods to ",(0,i.kt)("a",{parentName:"p",href:"./actionability#assertions"},"assert element state")," like ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-is-editable"},"page.isEditable(selector[, options])"),"."))),(0,i.kt)("h4",{id:"new-apis-5"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-checked"},"elementHandle.isChecked()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-disabled"},"elementHandle.isDisabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-editable"},"elementHandle.isEditable()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-enabled"},"elementHandle.isEnabled()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-hidden"},"elementHandle.isHidden()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-visible"},"elementHandle.isVisible()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-checked"},"page.isChecked(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-disabled"},"page.isDisabled(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-editable"},"page.isEditable(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-enabled"},"page.isEnabled(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-hidden"},"page.isHidden(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-visible"},"page.isVisible(selector[, options])"),"."),(0,i.kt)("li",{parentName:"ul"},"New option ",(0,i.kt)("inlineCode",{parentName:"li"},"'editable'")," in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-wait-for-element-state"},"elementHandle.waitForElementState(state[, options])"),".")),(0,i.kt)("h4",{id:"browser-versions-4"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,i.kt)("h2",{id:"version-17"},"Version 1.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New Java SDK"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java")," is now on par with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"JavaScript"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},".NET bindings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/selectors"},"new CSS extensions")," and there's more coming soon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New website"),": The docs website at ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"playwright.dev")," has been updated and is now built with ",(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/"},"Docusaurus"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),(0,i.kt)("h4",{id:"new-apis-6"},"New APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-storage-state"},"browserContext.storageState([options])")," to get current state for later reuse."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageState")," option in ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-page"},"browser.newPage([options])")," to setup browser context state.")),(0,i.kt)("h4",{id:"browser-versions-5"},"Browser Versions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),(0,i.kt)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),(0,i.kt)("li",{parentName:"ul"},"WebKit 14.1")))}c.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);