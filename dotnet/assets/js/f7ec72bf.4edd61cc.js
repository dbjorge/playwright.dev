"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2770],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,f=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return m}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e};const g={id:"pages",title:"Pages"},d=void 0,f={unversionedId:"pages",id:"version-1.21/pages",title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.21/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/dotnet/docs/pages",tags:[],version:"1.21",frontMatter:{id:"pages",title:"Pages"},sidebar:"docs",previous:{title:"Network",permalink:"/dotnet/docs/network"},next:{title:"Page Object Models",permalink:"/dotnet/docs/pom"}},w={},m=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}],y={toc:m};function h(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),c),o(t,p({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#pages"}),"Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),(0,a.kt)("h2",u({},{id:"pages"}),"Pages"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," can have multiple pages. A ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.GotoAsync("http://example.com");\n// Fill an input.\nawait page.Locator("#search").FillAsync("query");\n\n// Navigate implicitly by clicking a link.\nawait page.Locator("#submit").ClickAsync();\n// Expect a new url.\nConsole.WriteLine(page.Url);\n')),(0,a.kt)("h2",u({},{id:"multiple-pages"}),"Multiple pages"),(0,a.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,a.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Create two pages\nvar pageOne = await context.NewPageAsync();\nvar pageTwo = await context.NewPageAsync();\n\n// Get pages of a browser context\nvar allPages = context.Pages;\n")),(0,a.kt)("h2",u({},{id:"handling-new-pages"}),"Handling new pages"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,a.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Get page after a specific action (e.g. clicking a link)\nvar newPage = await context.RunAndWaitForPageAsync(async () =>\n{\n    await page.ClickAsync(\"a[target='_blank']\");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n")),(0,a.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Get all new pages (including popups) in the context\ncontext.Page += async  (_, page) => {\n    await page.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")),(0,a.kt)("h2",u({},{id:"handling-popups"}),"Handling popups"),(0,a.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,a.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,a.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,a.kt)("p",null,"This event is emitted in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Get popup after a specific action (e.g., click)\nvar newPage = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\nawait newPage.WaitForLoadStateAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n')),(0,a.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"// Get all popups when they open\npage.Popup += async  (_, popup) => {\n    await popup.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n")))}h.isMDXComponent=!0}}]);