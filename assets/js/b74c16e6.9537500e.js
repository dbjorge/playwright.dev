"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[83792],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(54939),s=a(5882),l=a(86010),i="tabItem_LplD",o=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&g(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&g(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:o,block:u,defaultValue:m,values:d,groupId:g,className:f}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,s.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=k[0])?void 0:a.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.UB)(),[x,j]=(0,n.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==x&&b.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==x&&(C(t),j(n),null!=g&&N(g,n))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=h({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:O,onFocus:P,onClick:P},a),s={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(r,c(s))),null!=t?t:e);var r,s}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,r.Z)();return n.createElement(f,h({key:String(t)},e))}},20250:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return b}});var n=a(3905),r=a(73824),s=a(73811),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const g={id:"intro",title:"Getting started"},h=void 0,f={unversionedId:"intro",id:"version-1.21/intro",title:"Getting started",description:"Playwright can either be used as a part of the Playwright Test test runner (this guide), or as a Playwright Library.",source:"@site/versioned_docs/version-1.21/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",tags:[],version:"1.21",frontMatter:{id:"intro",title:"Getting started"},sidebar:"docs",next:{title:"Inspector",permalink:"/docs/inspector"}},k={},b=[{value:"Installation",id:"installation",level:2},{value:"Using the VS Code extension",id:"using-the-vs-code-extension",level:3},{value:"Using init command",id:"using-init-command",level:3},{value:"Manually",id:"manually",level:3},{value:"First test",id:"first-test",level:2},{value:"Configuration file",id:"configuration-file",level:2},{value:"Writing assertions",id:"writing-assertions",level:2},{value:"Using test fixtures",id:"using-test-fixtures",level:2},{value:"Using test hooks",id:"using-test-hooks",level:2},{value:"VS Code extension",id:"vs-code-extension",level:2},{value:"Run tests with a single click",id:"run-tests-with-a-single-click",level:3},{value:"Follow the execution line",id:"follow-the-execution-line",level:3},{value:"Debug step-by-step, explore selectors",id:"debug-step-by-step-explore-selectors",level:3},{value:"Record new tests",id:"record-new-tests",level:3},{value:"Tune selectors",id:"tune-selectors",level:3},{value:"Command line",id:"command-line",level:2},{value:"Configure NPM scripts",id:"configure-npm-scripts",level:2}],y={toc:b};function w(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),m),i(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can either be used as a part of the Playwright Test test runner (this guide), or as a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/library"}),"Playwright Library"),"."),(0,n.kt)("p",null,"Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run tests across all browsers."),(0,n.kt)("li",{parentName:"ul"},"Execute tests in parallel."),(0,n.kt)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),(0,n.kt)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),(0,n.kt)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#installation"}),"Installation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#first-test"}),"First test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#configuration-file"}),"Configuration file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#writing-assertions"}),"Writing assertions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#using-test-fixtures"}),"Using test fixtures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#using-test-hooks"}),"Using test hooks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#vs-code-extension"}),"VS Code extension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#command-line"}),"Command line")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#configure-npm-scripts"}),"Configure NPM scripts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/release-notes"}),"Release notes"))),(0,n.kt)("br",null),(0,n.kt)("h2",d({},{id:"installation"}),"Installation"),(0,n.kt)("p",null,"Playwright has its own test runner for end-to-end tests, we call it Playwright Test."),(0,n.kt)("h3",d({},{id:"using-the-vs-code-extension"}),"Using the VS Code extension"),(0,n.kt)("p",null,"Install the VS Code extension from the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright"}),"marketplace"),"."),(0,n.kt)("p",null,'If you don\'t have the Playwright Test npm package installed in your project, or if you are starting with a new testing project, "Install Playwright" action will help you get started.'),(0,n.kt)("img",{width:"446",alt:"Install Playwright",src:"https://user-images.githubusercontent.com/883973/153693073-a83fc6e6-a17a-4011-b11e-2423f75ce584.png"}),(0,n.kt)("p",null,"Pick the browsers you'd like to use by default, don't worry, you'll be able to change them later to add or configure the browsers used."),(0,n.kt)("img",{width:"579",alt:"Choose browsers",src:"https://user-images.githubusercontent.com/883973/153693126-258646eb-0d4c-41eb-8c4a-7ac248384078.png"}),(0,n.kt)("p",null,"The extension automatically detects if you have ","[Playwright Test]"," installed and loads the ","[Playwright Test]"," projects into Visual Studio Code. By default it will select the first project as a run profile and inside the test explorer you can change this behavior to run a single test in multiple or different browsers."),(0,n.kt)("h3",d({},{id:"using-init-command"}),"Using init command"),(0,n.kt)("p",null,"Alternatively, you can scaffold your project using the init command."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Run from your project's root directory\nnpm init playwright@latest\n# Or create a new project\nnpm init playwright@latest new-project\n")),(0,n.kt)("p",null,"This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test ",(0,n.kt)("inlineCode",{parentName:"p"},"example.spec.ts"),". You can now jump directly to ",(0,n.kt)("a",d({parentName:"p"},{href:"#writing-assertions"}),"writing assertions")," section."),(0,n.kt)("h3",d({},{id:"manually"}),"Manually"),(0,n.kt)("p",null,"Add dependency and install browsers."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm i -D @playwright/test\n# install supported browsers\nnpx playwright install\n")),(0,n.kt)("p",null,"You can optionally install only selected browsers, see ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/cli#install-browsers"}),"install browsers")," for more details. Or you can install no browsers at all and use existing ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/browsers"}),"browser channels"),"."),(0,n.kt)("h2",d({},{id:"first-test"}),"First test"),(0,n.kt)("p",null,"Create ",(0,n.kt)("inlineCode",{parentName:"p"},"tests/example.spec.js")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"tests/example.spec.ts")," for TypeScript) to define your test."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n")))),(0,n.kt)("p",null,"Now run your tests, assuming that test files are in the ",(0,n.kt)("inlineCode",{parentName:"p"},"tests")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n")),(0,n.kt)("p",null,"Playwright Test just ran a test using Chromium browser, in a headless manner. Let's tell it to use headed browser:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --headed\n")),(0,n.kt)("h2",d({},{id:"configuration-file"}),"Configuration file"),(0,n.kt)("p",null,"To enjoy all the features that Playwright Test has to offer, you would want to create a configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.config.js"),"). It allows you to run tests in multiple browsers configured as you'd like."),(0,n.kt)("p",null,'Here is an example configuration that runs every test in Chromium, Firefox and WebKit, by creating a "project" for each browser configuration. It also specifies ',(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-retries"}),"two retries")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/trace-viewer"}),"tracing")," options."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  use: {\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  use: {\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Look for more options in the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-configuration"}),"configuration section"),"."),(0,n.kt)("p",null,"Now you can run tests in multiple browsers by default."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n\nRunning 5 tests using 5 workers\n\n  \u2713 [chromium] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [webkit] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --project=firefox\n\nRunning 1 test using 1 worker\n\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,n.kt)("h2",d({},{id:"writing-assertions"}),"Writing assertions"),(0,n.kt)("p",null,"Playwright Test uses ",(0,n.kt)("a",d({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),"expect")," library for test assertions. It extends it with the Playwright-specific matchers to achieve greater testing ergonomics."),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-assertions"}),"test assertions here"),"."),(0,n.kt)("p",null,"Here is a quick example of using them:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=Introduction').first()).toBeVisible();\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=Introduction').first()).toBeVisible();\n});\n")))),(0,n.kt)("h2",d({},{id:"using-test-fixtures"}),"Using test fixtures"),(0,n.kt)("p",null,"You noticed an argument ",(0,n.kt)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"test('basic test', async ({ page }) => {\n  ...\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"test('basic test', async ({ page }) => {\n  ...\n")))),(0,n.kt)("p",null,"We call these arguments ",(0,n.kt)("inlineCode",{parentName:"p"},"fixtures"),". Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test."),(0,n.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Fixture"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/api/class-page",title:"Page"}),"Page")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Isolated page for this test run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"context"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Isolated context for this test run. The ",(0,n.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,n.kt)("a",d({parentName:"td"},{href:"/docs/test-configuration"}),"configure context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"browser"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/api/class-browser",title:"Browser"}),"Browser")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"Browsers are shared across tests to optimize resources. Learn how to ",(0,n.kt)("a",d({parentName:"td"},{href:"/docs/test-configuration"}),"configure browser"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"browserName"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("a",d({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The name of the browser currently running the test. Either ",(0,n.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,n.kt)("h2",d({},{id:"using-test-hooks"}),"Using test hooks"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://playwright.dev/');\n  });\n});\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://playwright.dev/');\n  });\n});\n")))),(0,n.kt)("h2",d({},{id:"vs-code-extension"}),"VS Code extension"),(0,n.kt)("p",null,"Install the VS Code extension from the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright"}),"marketplace"),"."),(0,n.kt)("h3",d({},{id:"run-tests-with-a-single-click"}),"Run tests with a single click"),(0,n.kt)("p",null,"You can use Tests sidebar to run a test or a group of tests with a single click."),(0,n.kt)("p",null,(0,n.kt)("img",d({parentName:"p"},{src:"https://user-images.githubusercontent.com/883973/152095110-46667a83-1f56-4964-8e99-094b880b70a0.gif",alt:"run_tests"}))),(0,n.kt)("h3",d({},{id:"follow-the-execution-line"}),"Follow the execution line"),(0,n.kt)("p",null,"While tests are running, execution line is highlighted, once the line has completed, step time is rendered as an editor decoration."),(0,n.kt)("p",null,(0,n.kt)("img",d({parentName:"p"},{src:"https://user-images.githubusercontent.com/883973/152095192-b85fb222-051a-40b2-8a6e-899d43d383c0.gif",alt:"execution_line"}))),(0,n.kt)("h3",d({},{id:"debug-step-by-step-explore-selectors"}),"Debug step-by-step, explore selectors"),(0,n.kt)("p",null,"Right click and start breakpoint debugging. Set a breakpoint, hover over a value. When your cursor is on some Playwright action or a locator, corresponding element (or elements) are highlighted in the browser."),(0,n.kt)("p",null,(0,n.kt)("img",d({parentName:"p"},{src:"https://user-images.githubusercontent.com/883973/152095220-b68a2a3c-8395-4252-9be8-5c6adf35eddf.gif",alt:"step_explore"}))),(0,n.kt)("h3",d({},{id:"record-new-tests"}),"Record new tests"),(0,n.kt)("p",null,"Record new tests via performing the test actions in the browser."),(0,n.kt)("p",null,(0,n.kt)("img",d({parentName:"p"},{src:"https://user-images.githubusercontent.com/883973/153694515-f25fdd12-7a7c-4fec-9695-36b19b1d6a6b.gif",alt:"recording"}))),(0,n.kt)("h3",d({},{id:"tune-selectors"}),"Tune selectors"),(0,n.kt)("p",null,"You can edit test source code to fine-tune selectors while on a breakpoint. A selector playground on every line of your test script!"),(0,n.kt)("p",null,(0,n.kt)("img",d({parentName:"p"},{src:"https://user-images.githubusercontent.com/883973/152095248-7dda7d77-b8ee-42ab-8902-9cf462d1f334.gif",alt:"tune_selectors"}))),(0,n.kt)("h2",d({},{id:"command-line"}),"Command line"),(0,n.kt)("p",null,"Following are the usual command line patterns. Learn more about the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-cli"}),"command line"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run all the tests"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run a single test file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test tests/todo-page.spec.ts\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run a set of test files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run files that have ",(0,n.kt)("inlineCode",{parentName:"p"},"my-spec")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"my-spec-2")," in the file name"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test my-spec my-spec-2\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run the test with the title"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'npx playwright test -g "add a todo item"\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --headed\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run tests in a particular configuration (project)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --project=firefox\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Disable ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-parallel"}),"parallelization")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --workers=1\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/test-reporters"}),"reporter")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=dot\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --debug\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ask for help"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --help\n")))),(0,n.kt)("h2",d({},{id:"configure-npm-scripts"}),"Configure NPM scripts"),(0,n.kt)("p",null,"Playwright Test will automatically pick up ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "playwright test"\n  }\n}\n')),(0,n.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,n.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test": "playwright test --config=tests/example.config.js"\n  }\n}\n')),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"  To pass options through npm script, use double dashes: ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run test -- --headed"),"."))))}w.isMDXComponent=!0}}]);