"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9331],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return i.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||n;return t?i.createElement(m,l(l({ref:a},c),{},{components:t})):i.createElement(m,l({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12151:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var i=t(3905),r=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))p.call(a,t)&&c(e,t,a[t]);return e};const u={id:"class-dialog",title:"Dialog"},g=void 0,m={unversionedId:"api/class-dialog",id:"version-1.19/api/class-dialog",title:"Dialog",description:"Dialog] objects are dispatched by page via the [Page.onDialog(handler) event.",source:"@site/versioned_docs/version-1.19/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/java/docs/1.19/api/class-dialog",tags:[],version:"1.19",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.19/api",previous:{title:"ConsoleMessage",permalink:"/java/docs/1.19/api/class-consolemessage"},next:{title:"Download",permalink:"/java/docs/1.19/api/class-download"}},h={},v=[{value:"Dialog.accept(promptText)",id:"dialog-accept",level:2},{value:"Dialog.defaultValue()",id:"dialog-default-value",level:2},{value:"Dialog.dismiss()",id:"dialog-dismiss",level:2},{value:"Dialog.message()",id:"dialog-message",level:2},{value:"Dialog.type()",id:"dialog-type",level:2}],f={toc:v};function k(e){var a,t=e,{components:r}=t,c=((e,a)=>{var t={};for(var i in e)s.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&o)for(var i of o(e))a.indexOf(i)<0&&p.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(a=d(d({},f),c),n(a,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("a",d({parentName:"p"},{href:"/java/docs/1.19/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",d({parentName:"p"},{href:"/java/docs/1.19/api/class-page#page-event-dialog"}),"Page.onDialog(handler)")," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-java"}),"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onDialog(dialog -> {\n        System.out.println(dialog.message());\n        dialog.dismiss();\n      });\n      page.evaluate(\"alert('1')\");\n      browser.close();\n    }\n  }\n}\n")),(0,i.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,i.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,i.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",d({parentName:"p"},{href:"/java/docs/1.19/api/class-page#page-event-dialog"}),"Page.onDialog(handler)")," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",d({parentName:"p"},{href:"/java/docs/1.19/api/class-dialog#dialog-accept"}),"Dialog.accept([promptText])")," or ",(0,i.kt)("a",d({parentName:"p"},{href:"/java/docs/1.19/api/class-dialog#dialog-dismiss"}),"Dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"/java/docs/1.19/api/class-dialog#dialog-accept"}),"Dialog.accept([promptText])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"/java/docs/1.19/api/class-dialog#dialog-default-value"}),"Dialog.defaultValue()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"/java/docs/1.19/api/class-dialog#dialog-dismiss"}),"Dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"/java/docs/1.19/api/class-dialog#dialog-message"}),"Dialog.message()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",d({parentName:"li"},{href:"/java/docs/1.19/api/class-dialog#dialog-type"}),"Dialog.type()"))),(0,i.kt)("h2",d({},{id:"dialog-accept"}),"Dialog.accept(","[promptText]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptText"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,i.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,i.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",d({},{id:"dialog-default-value"}),"Dialog.defaultValue()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,i.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",d({},{id:"dialog-dismiss"}),"Dialog.dismiss()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,i.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",d({},{id:"dialog-message"}),"Dialog.message()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,i.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",d({},{id:"dialog-type"}),"Dialog.type()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,i.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,i.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}k.isMDXComponent=!0}}]);