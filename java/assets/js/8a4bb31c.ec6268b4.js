"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8251],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return g}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14551:function(e,a,t){t.r(a),t.d(a,{assets:function(){return f},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return v}});var n=t(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&c(e,t,a[t]);if(l)for(var t of l(a))p.call(a,t)&&c(e,t,a[t]);return e};const m={id:"dialogs",title:"Dialogs"},g=void 0,u={unversionedId:"dialogs",id:"version-1.20/dialogs",title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/versioned_docs/version-1.20/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/java/docs/1.20/dialogs",tags:[],version:"1.20",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"docs",previous:{title:"Command line tools",permalink:"/java/docs/1.20/cli"},next:{title:"Downloads",permalink:"/java/docs/1.20/downloads"}},f={},v=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",level:2},{value:"API reference",id:"api-reference",level:3},{value:"beforeunload dialog",id:"beforeunload-dialog",level:2}],h={toc:v};function k(e){var a,t=e,{components:r}=t,c=((e,a)=>{var t={};for(var n in e)s.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))a.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=d(d({},h),c),o(a,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can interact with the web page dialogs such as ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),(0,n.kt)("inlineCode",{parentName:"a"},"alert")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),(0,n.kt)("inlineCode",{parentName:"a"},"confirm")),", ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),(0,n.kt)("inlineCode",{parentName:"a"},"prompt"))," as well as ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),(0,n.kt)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),(0,n.kt)("h2",d({},{id:"alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs"),(0,n.kt)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> dialog.accept());\npage.click("button");\n')),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-event-dialog"}),"Page.onDialog(handler)")," listener ",(0,n.kt)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-click"}),"Page.click(selector[, options])"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-evaluate"}),"Page.evaluate(expression[, arg])")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),(0,n.kt)("p",null,"As a result, following snippet will never resolve:"),(0,n.kt)("div",d({},{className:"admonition admonition-warning alert alert--danger"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"WRONG!"))),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> System.out.println(dialog.message()));\npage.click("button"); // Will hang here\n')),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"If there is no listener for ",(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-event-dialog"}),"Page.onDialog(handler)"),", all dialogs are automatically dismissed."))),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/java/docs/1.20/api/class-dialog",title:"Dialog"}),"Dialog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/java/docs/1.20/api/class-dialog#dialog-accept"}),"Dialog.accept([promptText])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/java/docs/1.20/api/class-dialog#dialog-dismiss"}),"Dialog.dismiss()"))),(0,n.kt)("h2",d({},{id:"beforeunload-dialog"}),"beforeunload dialog"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-close"}),"Page.close([options])")," is invoked with the truthy ",(0,n.kt)("inlineCode",{parentName:"p"},"runBeforeUnload")," value, it page runs its unload handlers. This is the only case when ",(0,n.kt)("a",d({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-close"}),"Page.close([options])")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),(0,n.kt)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-java"}),'page.onDialog(dialog -> {\n  assertEquals("beforeunload", dialog.type());\n  dialog.dismiss();\n});\npage.close(new Page.CloseOptions().setRunBeforeUnload(true));\n')))}k.isMDXComponent=!0}}]);