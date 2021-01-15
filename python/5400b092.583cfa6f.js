(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{148:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=i(a),d=n,g=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(g,s(s({ref:t},p),{},{components:a})):r.a.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},150:function(e,t,a){"use strict";var n=a(0),r=a(151);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(150),c=a(148),s=a(55),l=a.n(s),p=37,i=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,b=e.values,u=e.groupId,d=e.className,g=Object(o.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,O=Object(n.useState)(s),f=O[0],j=O[1],y=n.Children.toArray(e.children);if(null!=u){var v=m[u];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=u&&h(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case i:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},153:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(149)),c=a(152),s=a(153),l={id:"verification",title:"Verification"},p={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"- Videos",source:"@site/docs/verification.mdx",slug:"/verification",permalink:"/python/docs/verification",version:"current",sidebar:"docs",previous:{title:"Page Object Models",permalink:"/python/docs/pom"},next:{title:"Test Runners",permalink:"/python/docs/test-runners-python"}},i=[{value:"Videos",id:"videos",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Console logs",id:"console-logs",children:[]},{value:"Page errors",id:"page-errors",children:[]},{value:"Page events",id:"page-events",children:[]}],b={toc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#videos"}),"Videos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#screenshots"}),"Screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#console-logs"}),"Console logs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#page-errors"}),"Page errors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#page-events"}),"Page events"))),Object(o.b)("h2",{id:"videos"},"Videos"),Object(o.b)("p",null,"Playwright can record videos for all pages in a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"),"."),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# With browser.new_context()\ncontext = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n\n# With browser.new_page()\npage = browser.new_page(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\npage.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# With browser.new_context()\ncontext = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n\n# With browser.new_page()\npage = await browser.new_page(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait page.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')))),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextoptions"}),"browser.new_context(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_pageoptions"}),"browser.new_page(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"))),Object(o.b)("h2",{id:"screenshots"},"Screenshots"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Save to file\npage.screenshot(path="screenshot.png")\n\n# Capture full page\npage.screenshot(path="screenshot.png", full_page=True)\n\n# Capture into Image\nscreenshot_bytes = page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n\n# Capture given element\nelement_handle = page.query_selector(".header")\nelement_handle.screenshot(path="screenshot.png")\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Save to file\nawait page.screenshot(path="screenshot.png")\n\n# Capture full page\nawait page.screenshot(path="screenshot.png", full_page=True)\n\n# Capture into Image\nscreenshot_bytes = await page.screenshot()\nimage = Image.open(io.BytesIO(screenshot_bytes))\n\n# Capture given element\nelement_handle = await page.query_selector(".header")\nawait element_handle.screenshot(path="screenshot.png")\n')))),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagescreenshotoptions"}),"page.screenshot(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#element_handlescreenshotoptions"}),"element_handle.screenshot(**options)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"console-logs"},"Console logs"),Object(o.b)("p",null,"Console messages logged in the page can be brought into the Node.js context."),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Listen for all console logs\npage.on("console", msg => print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nwith page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = msg_info.value\n\n# Deconstruct print arguments\nmsg.args[0].json_value() # hello\nmsg.args[1].json_value() # 42\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Listen for all console logs\npage.on("console", msg => print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nasync with page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    await page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = await msg_info.value\n\n# Deconstruct print arguments\nawait msg.args[0].json_value() # hello\nawait msg.args[1].json_value() # 42\n')))),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonconsole"}),'page.on("console")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-errors"},"Page errors"),Object(o.b)("p",null,"Listen for uncaught exceptions in the page with the ",Object(o.b)("inlineCode",{parentName:"p"},"pagerror")," event."),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\npage.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\nawait page.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n')))),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpageerror"}),'page.on("pageerror")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-events"},"Page events"),Object(o.b)("h4",{id:"requestfailed"},Object(o.b)("inlineCode",{parentName:"h4"},'"requestfailed"')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("requestfailed", lambda request: print(request.url + " " + request.failure.error_text))\n')),Object(o.b)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(o.b)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\n')),Object(o.b)("h4",{id:"popup---handle-popup-windows"},Object(o.b)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n')))),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonrequestfailed"}),'page.on("requestfailed")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageondialog"}),'page.on("dialog")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpopup"}),'page.on("popup")'))))}u.isMDXComponent=!0}}]);