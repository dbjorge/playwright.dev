"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{99406:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),s=t(26396),i=t(58215),p=["components"],o={id:"verification",title:"Verification"},c=void 0,u={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"We recommend Web-First Assertions that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests.",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/python/docs/next/verification",tags:[],version:"current",frontMatter:{id:"verification",title:"Verification"}},d=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"Text content",id:"text-content-1",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2},{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference-7",children:[],level:3}],level:2},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-8",children:[],level:3}],level:2},{value:"Page events",id:"page-events",children:[{value:"<code>&quot;requestfailed&quot;</code>",id:"requestfailed",children:[],level:4},{value:"<code>&quot;dialog&quot;</code> - handle alert, confirm, prompt",id:"dialog---handle-alert-confirm-prompt",children:[],level:4},{value:"<code>&quot;popup&quot;</code> - handle popup windows",id:"popup---handle-popup-windows",children:[],level:4},{value:"API reference",id:"api-reference-9",children:[],level:3}],level:2}],m={toc:d};function g(e){var a=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend ",(0,r.kt)("a",{parentName:"p",href:"./test-assertions"},"Web-First Assertions")," that automatically retry until the expected condition is met instead. This helps reducing the flakiness of the tests."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = page.locator("nav:first-child").text_content()\nassert content == "home"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = await page.locator("nav:first-child").text_content()\nassert content == "home"\n')))),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-text-content"},"page.text_content(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-text-content"},"element_handle.text_content()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'text = page.locator(".selected").inner_text()\nassert text == "value"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'text = await page.locator(".selected").inner_text()\nassert text == "value"\n')))),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-inner-text"},"page.inner_text(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-inner-text"},"element_handle.inner_text()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'alt = page.locator("input").get_attribute("alt")\nassert alt == "Text"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'alt = await page.locator("input").get_attribute("alt")\nassert alt == "Text"\n')))),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'checked = page.locator("input").is_checked()\nassert checked\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'checked = await page.locator("input").is_checked()\nassert checked\n')))),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()"))),(0,r.kt)("h2",{id:"text-content-1"},"Text content"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = page.locator("nav:first-child").text_content()\nassert content == "home"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'content = await page.locator("nav:first-child").text_content()\nassert content == "home"\n')))),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-eval-on-selector"},"page.eval_on_selector(selector, expression, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle#js-handle-evaluate"},"js_handle.evaluate(expression, **kwargs)"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'html = page.locator("div.result").inner_html()\nassert html == "<p>Result</p>"\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'html = await page.locator("div.result").inner_html()\nassert html == "<p>Result</p>"\n')))),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-inner-html"},"page.inner_html(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-inner-html"},"element_handle.inner_html()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'visible = page.locator("input").is_visible()\nassert visible\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'visible = await page.locator("input").is_visible()\nassert visible\n')))),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-is-visible"},"element_handle.is_visible()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'enabled = page.locator("input").is_enabled()\nassert enabled\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'enabled = await page.locator("input").is_enabled()\nassert enabled\n')))),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-is-enabled"},"page.is_enabled(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element-handle-is-enabled"},"element_handle.is_enabled()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = page.locator('li.selected').count()\nassert length == 3\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = await page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = await page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = await page.locator('li.selected').count()\nassert length == 3\n")))),(0,r.kt)("h2",{id:"console-logs"},"Console logs"),(0,r.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nwith page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = msg_info.value\n\n# Deconstruct print arguments\nmsg.args[0].json_value() # hello\nmsg.args[1].json_value() # 42\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Listen for all console logs\npage.on("console", lambda msg: print(msg.text))\n\n# Listen for all console events and handle errors\npage.on("console", lambda msg: print(f"error: {msg.text}") if msg.type == "error" else None)\n\n# Get the next console log\nasync with page.expect_console_message() as msg_info:\n    # Issue console.log inside the page\n    await page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' })")\nmsg = await msg_info.value\n\n# Deconstruct print arguments\nawait msg.args[0].json_value() # hello\nawait msg.args[1].json_value() # 42\n')))),(0,r.kt)("h3",{id:"api-reference-7"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-console"},'page.on("console")'))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-errors"},"Page errors"),(0,r.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\npage.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Log all uncaught errors to the terminal\npage.on("pageerror", lambda exc: print(f"uncaught exception: {exc}"))\n\n# Navigate to a page with an exception.\nawait page.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n')))),(0,r.kt)("h3",{id:"api-reference-8"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-page-error"},'page.on("pageerror")'))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-events"},"Page events"),(0,r.kt)("h4",{id:"requestfailed"},(0,r.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'page.on("requestfailed", lambda request: print(request.url + " " + request.failure.error_text))\n')),(0,r.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,r.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\n')),(0,r.kt)("h4",{id:"popup---handle-popup-windows"},(0,r.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,r.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n'))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n')))),(0,r.kt)("h3",{id:"api-reference-9"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page",title:"Page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-request-failed"},'page.on("requestfailed")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-dialog"},'page.on("dialog")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-popup"},'page.on("popup")'))))}g.isMDXComponent=!0}}]);