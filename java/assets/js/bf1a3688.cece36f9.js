"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2743],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return u}});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},f=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=s(t),u=o,h=f["".concat(i,".").concat(u)]||f[u]||p[u]||n;return t?r.createElement(h,l(l({ref:a},m),{},{components:t})):r.createElement(h,l({ref:a},m))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=f;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},628:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return k}});var r=t(3905),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&m(e,t,a[t]);if(c)for(var t of c(a))s.call(a,t)&&m(e,t,a[t]);return e};const f={id:"class-framelocator",title:"FrameLocator"},u=void 0,h={unversionedId:"api/class-framelocator",id:"version-1.20/api/class-framelocator",title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either Page.frameLocator(selector) or Locator.frameLocator(selector) method.",source:"@site/versioned_docs/version-1.20/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/java/docs/1.20/api/class-framelocator",tags:[],version:"1.20",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"api",previous:{title:"Frame",permalink:"/java/docs/1.20/api/class-frame"},next:{title:"JSHandle",permalink:"/java/docs/1.20/api/class-jshandle"}},d={},k=[{value:"FrameLocator.first()",id:"frame-locator-first",level:2},{value:"FrameLocator.frameLocator(selector)",id:"frame-locator-frame-locator",level:2},{value:"FrameLocator.last()",id:"frame-locator-last",level:2},{value:"FrameLocator.locator(selector, options)",id:"frame-locator-locator",level:2},{value:"FrameLocator.nth(index)",id:"frame-locator-nth",level:2}],v={toc:k};function g(e){var a,t=e,{components:o}=t,m=((e,a)=>{var t={};for(var r in e)i.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))a.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(a=p(p({},v),m),n(a,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"FrameLocator represents a view to the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-frame-locator"}),"Page.frameLocator(selector)")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-locator#locator-frame-locator"}),"Locator.frameLocator(selector)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'Locator locator = page.frameLocator("#my-frame").locator("text=Submit");\nlocator.click();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Strictness")),(0,r.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'// Throws if there are several frames in DOM:\npage.frame_locator(".result-frame").locator("button").click();\n\n// Works because we explicitly tell locator to pick the first frame:\npage.frame_locator(".result-frame").first().locator("button").click();\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,r.kt)("p",null,"If you have a ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-locator",title:"Locator"}),"Locator")," object pointing to an ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator")," using ",(0,r.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"}),(0,r.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"Locator frameLocator = locator.frameLocator(':scope');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator#frame-locator-first"}),"FrameLocator.first()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator#frame-locator-frame-locator"}),"FrameLocator.frameLocator(selector)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator#frame-locator-last"}),"FrameLocator.last()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator#frame-locator-locator"}),"FrameLocator.locator(selector[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator#frame-locator-nth"}),"FrameLocator.nth(index)"))),(0,r.kt)("h2",p({},{id:"frame-locator-first"}),"FrameLocator.first()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the first matching frame."),(0,r.kt)("h2",p({},{id:"frame-locator-frame-locator"}),"FrameLocator.frameLocator(selector)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,r.kt)("h2",p({},{id:"frame-locator-last"}),"FrameLocator.last()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the last matching frame."),(0,r.kt)("h2",p({},{id:"frame-locator-locator"}),"FrameLocator.locator(selector","[, options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"p"},"FrameLocator.LocatorOptions"),">"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setHas"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," that has ",(0,r.kt)("inlineCode",{parentName:"p"},"text=Playwright")," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setHasText"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"|",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",title:"Pattern"}),"Pattern"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"Playwright"')," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/1.20/api/class-locator",title:"Locator"}),"Locator"),">",(0,r.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#")))),(0,r.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,r.kt)("h2",p({},{id:"frame-locator-nth"}),"FrameLocator.nth(index)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">",(0,r.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/1.20/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the n-th matching frame."))}g.isMDXComponent=!0}}]);