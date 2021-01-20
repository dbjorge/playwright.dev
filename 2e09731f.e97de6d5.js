(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(666)),o=(a(670),a(671),{id:"class-dialog",title:"Dialog"}),l={unversionedId:"api/class-dialog",id:"version-1.8.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/versioned_docs/version-1.8.0/api/class-dialog.mdx",slug:"/api/class-dialog",permalink:"/docs/api/class-dialog",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"ConsoleMessage",permalink:"/docs/api/class-consolemessage"},next:{title:"Download",permalink:"/docs/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageondialog"}),"page.on('dialog')")," event."),Object(i.b)("p",null,"An example of using ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogmessage"}),"dialog.message()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-dialog#dialogtype"}),"dialog.type()"))),Object(i.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(i.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.")),Object(i.b)("p",null,"Returns when the dialog has been accepted."),Object(i.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(i.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(i.b)("p",null,"Returns when the dialog has been dismissed."),Object(i.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"A message displayed in the dialog."),Object(i.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(i.b)("p",null,"Returns dialog's type, can be one of ",Object(i.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(i.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(i.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},666:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,g=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(g,l(l({ref:t},s),{},{components:a})):r.a.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},667:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},668:function(e,t,a){"use strict";var n=a(0),r=a(669);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},669:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},670:function(e,t,a){"use strict";a(0),a(668),a(667),a(55)},671:function(e,t,a){"use strict";a(3),a(0)}}]);