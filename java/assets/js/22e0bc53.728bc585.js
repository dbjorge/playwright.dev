"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5127],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(l,".").concat(g)]||u[g]||h[g]||n;return a?s.createElement(d,i(i({ref:t},c),{},{components:a})):s.createElement(d,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37446:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return y}});var s=a(3905),r=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e};const u={id:"class-playwrightassertions",title:"PlaywrightAssertions"},g=void 0,d={unversionedId:"api/class-playwrightassertions",id:"version-1.18/api/class-playwrightassertions",title:"PlaywrightAssertions",description:"The [PlaywrightAssertions] class provides convenience methods for creating assertions that will wait until the expected condition is met.",source:"@site/versioned_docs/version-1.18/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/java/docs/1.18/api/class-playwrightassertions",tags:[],version:"1.18",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"},sidebar:"version-1.18/api",previous:{title:"PageAssertions",permalink:"/java/docs/1.18/api/class-pageassertions"},next:{title:"PlaywrightException",permalink:"/java/docs/1.18/api/class-playwrightexception"}},f={},y=[{value:"PlaywrightAssertions.assertThat(response)",id:"playwright-assertions-expect-api-response",level:2},{value:"PlaywrightAssertions.assertThat(locator)",id:"playwright-assertions-expect-locator",level:2},{value:"PlaywrightAssertions.assertThat(page)",id:"playwright-assertions-expect-page",level:2}],m={toc:y};function k(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var s in e)l.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&o)for(var s of o(e))t.indexOf(s)<0&&p.call(e,s)&&(a[s]=e[s]);return a})(a,["components"]);return(0,s.kt)("wrapper",(t=h(h({},m),c),n(t,i({components:r,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,"The ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-playwrightassertions",title:"PlaywrightAssertions"}),"PlaywrightAssertions")," class provides convenience methods for creating assertions that will wait until the expected condition is met."),(0,s.kt)("p",null,"Consider the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-java"}),'...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestExample {\n  ...\n  @Test\n  void statusBecomesSubmitted() {\n    ...\n    page.click("#submit-button");\n    assertThat(page.locator(".status")).hasText("Submitted");\n  }\n}\n')),(0,s.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,s.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,s.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,s.kt)("p",null,"By default, the timeout for assertions is set to 5 seconds."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-api-response"}),"PlaywrightAssertions.assertThat(response)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-locator"}),"PlaywrightAssertions.assertThat(locator)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-playwrightassertions#playwright-assertions-expect-page"}),"PlaywrightAssertions.assertThat(page)"))),(0,s.kt)("h2",h({},{id:"playwright-assertions-expect-api-response"}),"PlaywrightAssertions.assertThat(response)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"response"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-option-response"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">"," ",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-expect-api-response-option-response",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-return"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"}),"APIResponseAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-expect-api-response-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-apiresponseassertions",title:"APIResponseAssertions"}),"APIResponseAssertions")," object for the given ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-java"}),"PlaywrightAssertions.assertThat(response).isOK();\n")),(0,s.kt)("h2",h({},{id:"playwright-assertions-expect-locator"}),"PlaywrightAssertions.assertThat(locator)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"locator"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-option-locator"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-locator",title:"Locator"}),"Locator"),">"," ",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-locator",title:"Locator"}),"Locator")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-expect-locator-option-locator",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-return"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"}),"LocatorAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-expect-locator-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-locatorassertions",title:"LocatorAssertions"}),"LocatorAssertions")," object for the given ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-locator",title:"Locator"}),"Locator"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-java"}),"PlaywrightAssertions.assertThat(locator).isVisible();\n")),(0,s.kt)("h2",h({},{id:"playwright-assertions-expect-page"}),"PlaywrightAssertions.assertThat(page)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"page"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-option-page"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-page",title:"Page"}),"Page"),">"," ",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-page",title:"Page"}),"Page")," object to use for assertions.",(0,s.kt)("a",{href:"#playwright-assertions-expect-page-option-page",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-return"})," ","<",(0,s.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/api/class-pageassertions",title:"PageAssertions"}),"PageAssertions"),">",(0,s.kt)("a",{href:"#playwright-assertions-expect-page-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Creates a ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-pageassertions",title:"PageAssertions"}),"PageAssertions")," object for the given ",(0,s.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-page",title:"Page"}),"Page"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",h({parentName:"pre"},{className:"language-java"}),'PlaywrightAssertions.assertThat(page).hasTitle("News");\n')))}k.isMDXComponent=!0}}]);