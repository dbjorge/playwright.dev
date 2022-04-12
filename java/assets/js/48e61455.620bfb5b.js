"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1801],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return v}});var a=n(3905),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={id:"locators",title:"Locators"},d=void 0,h={unversionedId:"locators",id:"version-1.21/locators",title:"Locators",description:"Locator]s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the [Page.locator(selector[, options]) method.",source:"@site/versioned_docs/version-1.21/locators.mdx",sourceDirName:".",slug:"/locators",permalink:"/java/docs/locators",tags:[],version:"1.21",frontMatter:{id:"locators",title:"Locators"},sidebar:"docs",previous:{title:"Input",permalink:"/java/docs/input"},next:{title:"Multithreading",permalink:"/java/docs/multithreading"}},f={},v=[{value:"Strictness",id:"strictness",level:2},{value:"Lists",id:"lists",level:2},{value:"Locator vs ElementHandle",id:"locator-vs-elementhandle",level:2}],g={toc:v};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),p),r(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-locator",title:"Locator"}),"Locator"),"s are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment. Locator can be created with the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-page#page-locator"}),"Page.locator(selector[, options])")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Locator locator = page.locator("text=Submit");\nlocator.click();\n')),(0,a.kt)("p",null,"Every time locator is used for some action, up-to-date DOM element is located in the page. So in the snippet below, underlying DOM element is going to be located twice, prior to every action. This means that if the DOM changes in between the calls due to re-render, the new element corresponding to the locator will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Locator locator = page.locator("text=Submit");\nlocator.hover();\nlocator.click();\n')),(0,a.kt)("h2",u({},{id:"strictness"}),"Strictness"),(0,a.kt)("p",null,"Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches given selector."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Throws if there are several buttons in DOM:\npage.locator("button").click();\n\n// Works because we explicitly tell locator to pick the first element:\npage.locator("button").first().click();\n\n// Works because count knows what to do with multiple matches:\npage.locator("button").count();\n')),(0,a.kt)("h2",u({},{id:"lists"}),"Lists"),(0,a.kt)("p",null,"You can also use locators to work with the element lists."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Locate elements, this locator points to a list.\nLocator rows = page.locator("table tr");\n\n// Pattern 1: use locator methods to calculate text on the whole list.\nList<String> texts = rows.allTextContents();\n\n// Pattern 2: do something with each element in the list.\nint count = rows.count()\nfor (int i = 0; i < count; ++i)\n  System.out.println(rows.nth(i).textContent());\n\n// Pattern 3: resolve locator to elements on page and map them to their text content.\n// Note: the code inside evaluateAll runs in page, you can call any DOM apis there.\nObject texts = rows.evaluateAll("list => list.map(element => element.textContent)");\n')),(0,a.kt)("h2",u({},{id:"locator-vs-elementhandle"}),"Locator vs ElementHandle"),(0,a.kt)("div",u({},{className:"admonition admonition-caution alert alert--warning"}),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,a.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,a.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"We only recommend using ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," in the rare cases when you need to perform extensive DOM traversal on a static page. For all user actions and assertions use locator instead."))),(0,a.kt)("p",null,"The difference between the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-locator",title:"Locator"}),"Locator")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is that the latter points to a particular element, while Locator captures the logic of how to retrieve that element."),(0,a.kt)("p",null,"In the example below, handle points to a particular DOM element on page. If that element changes text or is used by React to render an entirely different component, handle is still pointing to that very stale DOM element. This can lead to unexpected behaviors."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'ElementHandle handle = page.querySelector("text=Submit");\nhandle.hover();\nhandle.click();\n')),(0,a.kt)("p",null,"With the locator, every time the locator is used, up-to-date DOM element is located in the page using the selector. So in the snippet below, underlying DOM element is going to be located twice."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Locator locator = page.locator("text=Submit");\nlocator.hover();\nlocator.click();\n')))}y.isMDXComponent=!0}}]);