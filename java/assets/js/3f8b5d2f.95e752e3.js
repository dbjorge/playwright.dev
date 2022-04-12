"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3758],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var a=n(3905),s=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"class-consolemessage",title:"ConsoleMessage"},m=void 0,d={unversionedId:"api/class-consolemessage",id:"version-1.21/api/class-consolemessage",title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [Page.onConsoleMessage(handler) event. For each console messages logged in the page there will be corresponding event in the Playwright context.",source:"@site/versioned_docs/version-1.21/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/java/docs/api/class-consolemessage",tags:[],version:"1.21",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"api",previous:{title:"BrowserType",permalink:"/java/docs/api/class-browsertype"},next:{title:"Dialog",permalink:"/java/docs/api/class-dialog"}},f={},h=[{value:"ConsoleMessage.args()",id:"console-message-args",level:2},{value:"ConsoleMessage.location()",id:"console-message-location",level:2},{value:"ConsoleMessage.text()",id:"console-message-text",level:2},{value:"ConsoleMessage.type()",id:"console-message-type",level:2}],k={toc:h};function v(e){var t,n=e,{components:s}=n,p=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=g(g({},k),p),o(t,r({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",g({parentName:"p"},{href:"/java/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",(0,a.kt)("a",g({parentName:"p"},{href:"/java/docs/api/class-page#page-event-console"}),"Page.onConsoleMessage(handler)")," event. For each console messages logged in the page there will be corresponding event in the Playwright context."),(0,a.kt)("pre",null,(0,a.kt)("code",g({parentName:"pre"},{className:"language-java"}),'// Listen for all System.out.printlns\npage.onConsoleMessage(msg -> System.out.println(msg.text()));\n\n// Listen for all console events and handle errors\npage.onConsoleMessage(msg -> {\n  if ("error".equals(msg.type()))\n    System.out.println("Error text: " + msg.text());\n});\n\n// Get the next System.out.println\nConsoleMessage msg = page.waitForConsoleMessage(() -> {\n  // Issue console.log inside the page\n  page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' });");\n});\n\n// Deconstruct console.log arguments\nmsg.args().get(0).jsonValue() // hello\nmsg.args().get(1).jsonValue() // 42\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"/java/docs/api/class-consolemessage#console-message-args"}),"ConsoleMessage.args()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"/java/docs/api/class-consolemessage#console-message-location"}),"ConsoleMessage.location()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"/java/docs/api/class-consolemessage#console-message-text"}),"ConsoleMessage.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",g({parentName:"li"},{href:"/java/docs/api/class-consolemessage#console-message-type"}),"ConsoleMessage.type()"))),(0,a.kt)("h2",g({},{id:"console-message-args"}),"ConsoleMessage.args()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,a.kt)("a",g({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,a.kt)("a",g({parentName:"li"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,a.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"List of arguments passed to a ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,a.kt)("a",g({parentName:"p"},{href:"/java/docs/api/class-page#page-event-console"}),"Page.onConsoleMessage(handler)"),"."),(0,a.kt)("h2",g({},{id:"console-message-location"}),"ConsoleMessage.location()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,a.kt)("a",g({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,a.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"URL of the resource followed by 0-based line and column numbers in the resource formatted as ",(0,a.kt)("inlineCode",{parentName:"p"},"URL:line:column"),"."),(0,a.kt)("h2",g({},{id:"console-message-text"}),"ConsoleMessage.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,a.kt)("a",g({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,a.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"The text of the console message."),(0,a.kt)("h2",g({},{id:"console-message-type"}),"ConsoleMessage.type()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,a.kt)("a",g({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,a.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"One of the following values: ",(0,a.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}v.isMDXComponent=!0}}]);