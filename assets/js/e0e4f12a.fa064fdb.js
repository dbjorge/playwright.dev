"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[12007],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1794:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=a(3905),i=Object.defineProperty,l=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&s(e,a,t[a]);return e};const d={id:"class-electronapplication",title:"ElectronApplication"},h=void 0,m={unversionedId:"api/class-electronapplication",id:"version-1.20/api/class-electronapplication",title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/versioned_docs/version-1.20/api/class-electronapplication.mdx",sourceDirName:"api",slug:"/api/class-electronapplication",permalink:"/docs/1.20/api/class-electronapplication",tags:[],version:"1.20",frontMatter:{id:"class-electronapplication",title:"ElectronApplication"},sidebar:"api",previous:{title:"Electron",permalink:"/docs/1.20/api/class-electron"}},f={},k=[{value:"electronApplication.on(&#39;close&#39;)",id:"electron-application-event-close",level:2},{value:"electronApplication.on(&#39;window&#39;)",id:"electron-application-event-window",level:2},{value:"electronApplication.browserWindow(page)",id:"electron-application-browser-window",level:2},{value:"electronApplication.close()",id:"electron-application-close",level:2},{value:"electronApplication.context()",id:"electron-application-context",level:2},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electron-application-evaluate",level:2},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electron-application-evaluate-handle",level:2},{value:"electronApplication.firstWindow()",id:"electron-application-first-window",level:2},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electron-application-wait-for-event",level:2},{value:"electronApplication.windows()",id:"electron-application-windows",level:2}],v={toc:k};function w(e){var t,a=e,{components:i}=a,s=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),s),l(t,r({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Electron application representation. You can use ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electron#electron-launch"}),"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-event-close"}),"electronApplication.on('close')")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-event-window"}),"electronApplication.on('window')")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-browser-window"}),"electronApplication.browserWindow(page)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-close"}),"electronApplication.close()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-context"}),"electronApplication.context()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-first-window"}),"electronApplication.firstWindow()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-wait-for-event"}),"electronApplication.waitForEvent(event[, optionsOrPredicate])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electronapplication#electron-application-windows"}),"electronApplication.windows()"))),(0,n.kt)("h2",u({},{id:"electron-application-event-close"}),"electronApplication.on('close')"),(0,n.kt)("p",null,"This event is issued when the application closes."),(0,n.kt)("h2",u({},{id:"electron-application-event-window"}),"electronApplication.on('window')"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-page",title:"Page"}),"Page"),">")),(0,n.kt)("p",null,"This event is issued for every window that is created ",(0,n.kt)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-page",title:"Page"}),"Page")," that can be used for Playwright automation."),(0,n.kt)("h2",u({},{id:"electron-application-browser-window"}),"electronApplication.browserWindow(page)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"page"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-option-page"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-page",title:"Page"}),"Page"),">"," Page to retrieve the window for.",(0,n.kt)("a",{href:"#electron-application-browser-window-option-page",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,n.kt)("a",{href:"#electron-application-browser-window-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the BrowserWindow object that corresponds to the given Playwright page."),(0,n.kt)("h2",u({},{id:"electron-application-close"}),"electronApplication.close()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-close-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,n.kt)("a",{href:"#electron-application-close-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Closes Electron application."),(0,n.kt)("h2",u({},{id:"electron-application-context"}),"electronApplication.context()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-context-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">",(0,n.kt)("a",{href:"#electron-application-context-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),(0,n.kt)("h2",u({},{id:"electron-application-evaluate"}),"electronApplication.evaluate(pageFunction","[, arg]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-option-expression"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electron",title:"Electron"}),"Electron"),">"," Function to be evaluated in the worker context.",(0,n.kt)("a",{href:"#electron-application-evaluate-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-option-arg"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,n.kt)("a",{href:"#electron-application-evaluate-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",">",(0,n.kt)("a",{href:"#electron-application-evaluate-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"If the function passed to the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,n.kt)("p",null,"If the function passed to the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")," returns ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,n.kt)("h2",u({},{id:"electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-option-expression"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-electron",title:"Electron"}),"Electron"),">"," Function to be evaluated in the worker context.",(0,n.kt)("a",{href:"#electron-application-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arg"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-option-arg"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">",(0,n.kt)("a",{href:"#electron-application-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,n.kt)("a",{href:"#electron-application-evaluate-handle-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate"}),"electronApplication.evaluate(pageFunction[, arg])")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("p",null,"If the function passed to the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/api/class-electronapplication#electron-application-evaluate-handle"}),"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),(0,n.kt)("h2",u({},{id:"electron-application-first-window"}),"electronApplication.firstWindow()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-first-window-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-page",title:"Page"}),"Page"),">",">",(0,n.kt)("a",{href:"#electron-application-first-window-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),(0,n.kt)("h2",u({},{id:"electron-application-wait-for-event"}),"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-option-event"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Event name, same one typically passed into ",(0,n.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,n.kt)("a",{href:"#electron-application-wait-for-event-option-event",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-option-options-or-predicate"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Either a predicate that receives an event or an options object. Optional.",(0,n.kt)("a",{href:"#electron-application-wait-for-event-option-options-or-predicate",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"predicate")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),">"," receives the event data and resolves to truthy value when the waiting should resolve."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," maximum time to wait for in milliseconds. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-browsercontext#browser-context-set-default-timeout"}),"browserContext.setDefaultTimeout(timeout)"),"."))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,n.kt)("a",{href:"#electron-application-wait-for-event-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),(0,n.kt)("h2",u({},{id:"electron-application-windows"}),"electronApplication.windows()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-windows-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/api/class-page",title:"Page"}),"Page"),">",">",(0,n.kt)("a",{href:"#electron-application-windows-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Convenience method that returns all the opened windows."))}w.isMDXComponent=!0}}]);