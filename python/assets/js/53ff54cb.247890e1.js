"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1368],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&l(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),r=a(54939),o=a(5882),s=a(86010),i="tabItem_LplD",l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&h(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:l,block:p,defaultValue:d,values:m,groupId:h,className:f}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),w=(0,o.lx)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:null!=(r=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.UB)(),[N,O]=(0,n.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,a=_.indexOf(t),n=b[a].value;n!==N&&(T(t),O(n),null!=h&&x(h,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]||_[_.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>_.push(e),onKeyDown:P,onFocus:S,onClick:S},a),o={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":N===e})},c(r,u(o))),null!=t?t:e);var r,o}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,r.Z)();return n.createElement(f,g({key:String(t)},e))}},21317:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var n=a(3905),r=a(73824),o=a(73811),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&d(e,a,t[a]);return e};const h={id:"auth",title:"Authentication"},g=void 0,f={unversionedId:"auth",id:"version-1.21/auth",title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.21/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/python/docs/auth",tags:[],version:"1.21",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"API testing",permalink:"/python/docs/api-testing"},next:{title:"Browsers",permalink:"/python/docs/browsers"}},y={},b=[{value:"Automate logging in",id:"automate-logging-in",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Session storage",id:"session-storage",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:2},{value:"Persistent authentication",id:"persistent-authentication",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"API reference",id:"api-reference-2",level:3}],w={toc:b};function v(e){var t,a=e,{components:s}=a,d=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),d),i(t,l({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,n.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#session-storage"}),"Session storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),(0,n.kt)("h2",m({},{id:"automate-logging-in"}),"Automate logging in"),(0,n.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/input"}),"Input guide")," for more details."),(0,n.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"page = context.new_page()\npage.goto('https://github.com/login')\n\n# Interact with login form\npage.click('text=Login')\npage.fill('input[name=\"login\"]', USERNAME)\npage.fill('input[name=\"password\"]', PASSWORD)\npage.click('text=Submit')\n# Verify app is logged in\n"))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"page = await context.new_page()\nawait page.goto('https://github.com/login')\n\n# Interact with login form\nawait page.click('text=Login')\nawait page.fill('input[name=\"login\"]', USERNAME)\nawait page.fill('input[name=\"password\"]', PASSWORD)\nawait page.click('text=Submit')\n# Verify app is logged in\n")))),(0,n.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,n.kt)("h2",m({},{id:"reuse-authentication-state"}),"Reuse authentication state"),(0,n.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". Playwright provides ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,n.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,n.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Save storage state into the file.\nstorage = context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state="state.json")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# Save storage state into the file.\nstorage = await context.storage_state(path="state.json")\n\n# Create a new context with the saved storage state.\ncontext = await browser.new_context(storage_state="state.json")\n')))),(0,n.kt)("h3",m({},{id:"code-generation"}),"Code generation"),(0,n.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,n.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,n.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,n.kt)("a",m({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),(0,n.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,n.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,n.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,n.kt)("p",null,"This approach will also ",(0,n.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,n.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)"))),(0,n.kt)("h2",m({},{id:"session-storage"}),"Session storage"),(0,n.kt)("p",null,"Rarely, ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import os\n# Get session storage and store as env variable\nsession_storage = page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\ncontext.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import os\n# Get session storage and store as env variable\nsession_storage = await page.evaluate("() => JSON.stringify(sessionStorage)")\nos.environ["SESSION_STORAGE"] = session_storage\n\n# Set session storage in a new context\nsession_storage = os.environ["SESSION_STORAGE"]\nawait context.add_init_script("""(storage => {\n  if (window.location.hostname === \'example.com\') {\n    const entries = JSON.parse(storage)\n    for (const [key, value] of Object.entries(entries)) {\n      window.sessionStorage.setItem(key, key)\n    }\n  }\n})(\'""" + session_storage + "\')")\n')))),(0,n.kt)("h3",m({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-storage-state"}),"browser_context.storage_state(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-page#page-evaluate"}),"page.evaluate(expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-add-init-script"}),"browser_context.add_init_script(**kwargs)"))),(0,n.kt)("h2",m({},{id:"multi-factor-authentication"}),"Multi-factor authentication"),(0,n.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,n.kt)("h3",m({},{id:"persistent-authentication"}),"Persistent authentication"),(0,n.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,n.kt)("p",null,"User data directories can be used with the ",(0,n.kt)("a",m({parentName:"p"},{href:"/python/docs/api/class-browsertype#browser-type-launch-persistent-context"}),"browser_type.launch_persistent_context(user_data_dir, **kwargs)")," API."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    user_data_dir = '/path/to/directory'\n    browser = p.chromium.launch_persistent_context(user_data_dir, headless=False)\n    # Execute login steps manually in the browser window\n"))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        user_data_dir = '/path/to/directory'\n        browser = await p.chromium.launch_persistent_context(user_data_dir, headless=False)\n        # Execute login steps manually in the browser window\n\nasyncio.run(main())\n")))),(0,n.kt)("h3",m({},{id:"lifecycle"}),"Lifecycle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a user data directory on disk."),(0,n.kt)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),(0,n.kt)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),(0,n.kt)("h3",m({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/api/class-browsertype#browser-type-launch-persistent-context"}),"browser_type.launch_persistent_context(user_data_dir, **kwargs)"))))}v.isMDXComponent=!0}}]);