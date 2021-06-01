(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(347)),i=(n(350),n(351),{id:"test-configuration",title:"Configuration"}),c={unversionedId:"test-configuration",id:"test-configuration",isDocsHomePage:!1,title:"Configuration",description:"- Configure browser, context, videos and screenshots",source:"@site/docs/test-configuration.mdx",slug:"/test-configuration",permalink:"/python/docs/next/test-configuration",version:"current"},l=[{value:"Configure browser, context, videos and screenshots",id:"configure-browser-context-videos-and-screenshots",children:[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Local configuration",id:"local-configuration",children:[]}]},{value:"Testing options",id:"testing-options",children:[]},{value:"Different options for each browser",id:"different-options-for-each-browser",children:[]},{value:"Mobile emulation",id:"mobile-emulation",children:[]},{value:"Network mocking",id:"network-mocking",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#configure-browser-context-videos-and-screenshots"}),"Configure browser, context, videos and screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#testing-options"}),"Testing options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#different-options-for-each-browser"}),"Different options for each browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#mobile-emulation"}),"Mobile emulation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#network-mocking"}),"Network mocking"))),Object(o.b)("h2",{id:"configure-browser-context-videos-and-screenshots"},"Configure browser, context, videos and screenshots"),Object(o.b)("p",null,"Playwright Tests supports browser and context options that you typically pass to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")," methods, for example ",Object(o.b)("inlineCode",{parentName:"p"},"headless"),", ",Object(o.b)("inlineCode",{parentName:"p"},"viewport")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreHTTPSErrors"),". It also provides options to record video for the test or capture screenshot at the end."),Object(o.b)("p",null,"You can specify any options either locally in a test file, or globally in the configuration file."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Browser options match ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/next/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)")," method."),Object(o.b)("li",{parentName:"ul"},"Context options match ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/next/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")," method."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"screenshot")," option - whether to capture a screenshot after each test, off by default. Screenshot will appear in the test output directory, typically ",Object(o.b)("inlineCode",{parentName:"li"},"test-results"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'off'")," - Do not capture screenshots."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'on'")," - Capture screenshot after each test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'only-on-failure'")," - Capture screenshot after each test failure."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"video")," option - whether to record video for each test, off by default. Video will appear in the test output directory, typically ",Object(o.b)("inlineCode",{parentName:"li"},"test-results"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'off'")," - Do not record video."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'on'")," - Record video for each test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record video for each test, but remove all videos from successful test runs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'retry-with-video'")," - Record video only when retrying a test.")))),Object(o.b)("h3",{id:"global-configuration"},"Global configuration"),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"playwright.config.ts"),") and specify options in the ",Object(o.b)("inlineCode",{parentName:"p"},"use")," section."),Object(o.b)("p",null,"Now run tests as usual, Playwright Test will pick up the configuration file automatically."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --browser=firefox\n")),Object(o.b)("p",null,"If you put your configuration file in a different place, pass it with ",Object(o.b)("inlineCode",{parentName:"p"},"--config")," option."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --config=tests/my.config.js\n")),Object(o.b)("h3",{id:"local-configuration"},"Local configuration"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"test.use()")," you can override some options for a file or a ",Object(o.b)("inlineCode",{parentName:"p"},"test.describe")," block."),Object(o.b)("h2",{id:"testing-options"},"Testing options"),Object(o.b)("p",null,"In addition to configuring ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-browser",title:"Browser"}),"Browser")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", videos or screenshots, Playwright Test has many options to configure how your tests are run. Below are the most common ones, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/test-advanced"}),"advanced configuration")," for the full list."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forbidOnly"),": Whether to exit with an error if any tests are marked as ",Object(o.b)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalSetup"),": Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalTeardown"),": Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"retries"),": The maximum number of retry attempts per test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testDir"),": Directory with the test files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testIgnore"),": Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"'**/test-assets'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testMatch"),": Glob patterns or regular expressions that match test files. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"'**/todo-tests/*.spec.ts'"),". By default, Playwright Test runs ",Object(o.b)("inlineCode",{parentName:"li"},".*(test|spec)\\.(js|ts|mjs)")," files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout"),": Time in milliseconds given to each test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"workers"),": The maximum number of concurrent worker processes to use for parallelizing tests.")),Object(o.b)("p",null,"You can specify these options in the configuration file."),Object(o.b)("h2",{id:"different-options-for-each-browser"},"Different options for each browser"),Object(o.b)("p",null,"To specify different options per browser, for example command line arguments for Chromium, create multiple projects in your configuration file. Below is an example that runs all tests in three browsers, with different options."),Object(o.b)("p",null,"Playwright Test will run all projects by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright test\n\nRunning 3 tests using 3 workers\n\n  \u2713 example.spec.ts:3:1 \u203a [Chromium] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [Firefox] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npx playwright test --project=webkit\n\nRunning 1 test using 1 worker\n\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),Object(o.b)("p",null,"There are many more things you can do with projects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run a subset of test by specifying different ",Object(o.b)("inlineCode",{parentName:"li"},"testDir")," for each project."),Object(o.b)("li",{parentName:"ul"},"Run tests in multiple configurations, for example with desktop Chromium and emulating Chrome for Android."),Object(o.b)("li",{parentName:"ul"},'Run "core" tests without retries to ensure stability of the core functionality, and use ',Object(o.b)("inlineCode",{parentName:"li"},"retries")," for other tests."),Object(o.b)("li",{parentName:"ul"},"And much more! See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/next/test-advanced"}),"advanced configuration")," for more details.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"--browser")," command line option is not compatible with projects. Specify ",Object(o.b)("inlineCode",{parentName:"p"},"browserName")," in each project instead."))),Object(o.b)("h2",{id:"mobile-emulation"},"Mobile emulation"),Object(o.b)("p",null,"You can use configuration file to make default ",Object(o.b)("inlineCode",{parentName:"p"},"context")," emulate a mobile device."),Object(o.b)("p",null,'Here is an example configuration that runs tests in "Pixel 4" and "iPhone 11" emulation modes. Note that it uses the ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/test-advanced#projects"}),"projects")," feature to run the same set of tests in multiple configurations."),Object(o.b)("h2",{id:"network-mocking"},"Network mocking"),Object(o.b)("p",null,"You don't have to configure anything to mock network requests. Just define a custom ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-route",title:"Route"}),"Route")," that mocks network for a browser context."),Object(o.b)("p",null,"Alternatively, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")," to mock network in a single test."))}b.isMDXComponent=!0},346:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},348:function(e,t,n){"use strict";var r=n(0),a=n(349);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},349:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},350:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(348),i=n(346),c=n(53),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,f=Object(o.a)(),d=f.tabGroupChoices,h=f.setTabGroupChoices,j=Object(r.useState)(c),O=j[0],g=j[1],w=r.Children.toArray(e.children);if(null!=u){var y=d[u];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=u&&h(u,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},351:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);