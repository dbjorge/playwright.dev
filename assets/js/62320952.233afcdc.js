"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[55392],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31614:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e};const d={id:"library",title:"Library"},m=void 0,y={unversionedId:"library",id:"version-1.20/library",title:"Library",description:"Playwright can either be used as a part of the Playwright Test, or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on.",source:"@site/versioned_docs/version-1.20/library.mdx",sourceDirName:".",slug:"/library",permalink:"/docs/1.20/library",tags:[],version:"1.20",frontMatter:{id:"library",title:"Library"},sidebar:"docs",previous:{title:"Advanced: TypeScript",permalink:"/docs/1.20/test-typescript"},next:{title:"Auto-waiting",permalink:"/docs/1.20/actionability"}},h={},g=[{value:"Usage",id:"usage",level:2},{value:"First script",id:"first-script",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"In JavaScript",id:"in-javascript",level:3},{value:"In TypeScript",id:"in-typescript",level:3},{value:"System requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3}],f={toc:g};function w(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},f),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can either be used as a part of the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/intro"}),"Playwright Test"),", or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#usage"}),"Usage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#first-script"}),"First script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#typescript-support"}),"TypeScript support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#system-requirements"}),"System requirements")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/docs/1.20/release-notes"}),"Release notes"))),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Use npm or Yarn to install Playwright library in your Node.js project. See ",(0,n.kt)("a",u({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm i -D playwright\n")),(0,n.kt)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/browsers#managing-browser-binaries"}),"managing browsers"),"."),(0,n.kt)("p",null,"Once installed, you can ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",(0,n.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),(0,n.kt)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,n.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"}),"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),(0,n.kt)("h2",u({},{id:"first-script"}),"First script"),(0,n.kt)("p",null,"In our first script, we will navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),(0,n.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/debug"}),"section"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"firefox.launch({ headless: false, slowMo: 50 });\n")),(0,n.kt)("h2",u({},{id:"record-scripts"}),"Record scripts"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/cli"}),"Command line tools")," can be used to record user interactions and generate JavaScript code."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npx playwright codegen wikipedia.org\n")),(0,n.kt)("h2",u({},{id:"typescript-support"}),"TypeScript support"),(0,n.kt)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),(0,n.kt)("h3",u({},{id:"in-javascript"}),"In JavaScript"),(0,n.kt)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"//@ts-check\n// ...\n")),(0,n.kt)("p",null,"Alternatively, you can use JSDoc to set types for variables."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"/** @type {import('playwright').Page} */\nlet page;\n")),(0,n.kt)("h3",u({},{id:"in-typescript"}),"In TypeScript"),(0,n.kt)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-js"}),"let page: import('playwright').Page;\n")),(0,n.kt)("h2",u({},{id:"system-requirements"}),"System requirements"),(0,n.kt)("p",null,"Playwright requires Node.js version 12 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,n.kt)("h3",u({},{id:"windows"}),"Windows"),(0,n.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,n.kt)("h3",u({},{id:"macos"}),"macOS"),(0,n.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,n.kt)("h3",u({},{id:"linux"}),"Linux"),(0,n.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,n.kt)("p",null,"See also in the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/1.20/cli#install-system-dependencies"}),"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}w.isMDXComponent=!0}}]);