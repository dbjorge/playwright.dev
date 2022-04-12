"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9764],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,h=c["".concat(s,".").concat(d)]||c[d]||k[d]||o;return t?a.createElement(h,l(l({ref:r},u),{},{components:t})):a.createElement(h,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},52965:function(e,r,t){t.r(r),t.d(r,{assets:function(){return w},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return f}});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&u(e,t,r[t]);return e};const c={id:"class-worker",title:"Worker"},d=void 0,h={unversionedId:"api/class-worker",id:"version-1.21/api/class-worker",title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.21/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/python/docs/api/class-worker",tags:[],version:"1.21",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"api",previous:{title:"WebSocket",permalink:"/python/docs/api/class-websocket"}},w={},f=[{value:"worker.on(&quot;close&quot;)",id:"worker-event-close",level:2},{value:"worker.evaluate(expression, **kwargs)",id:"worker-evaluate",level:2},{value:"worker.evaluate_handle(expression, **kwargs)",id:"worker-evaluate-handle",level:2},{value:"worker.url",id:"worker-url",level:2}],m={toc:f};function v(e){var r,t=e,{components:n}=t,u=((e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(r=k(k({},m),u),o(r,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Worker class represents a ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-py"}),'def handle_worker(worker):\n    print("worker created: " + worker.url)\n    worker.on("close", lambda: print("worker destroyed: " + worker.url))\n\npage.on(\'worker\', handle_worker)\n\nprint("current workers:")\nfor worker in page.workers:\n    print("    " + worker.url)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-worker#worker-event-close"}),'worker.on("close")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-worker#worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-worker#worker-url"}),"worker.url"))),(0,a.kt)("h2",k({},{id:"worker-event-close"}),'worker.on("close")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-worker",title:"Worker"}),"Worker"),">")),(0,a.kt)("p",null,"Emitted when this dedicated ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),(0,a.kt)("h2",k({},{id:"worker-evaluate"}),"worker.evaluate(expression, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,a.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arg"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,a.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,a.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,a.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")," returns a ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")," returns a non-",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,a.kt)("h2",k({},{id:"worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,a.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arg"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,a.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,a.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",(0,a.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,a.kt)("p",null,"The only difference between ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate"}),"worker.evaluate(expression, **kwargs)")," and ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)")," is that ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)")," returns ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)")," returns a ",(0,a.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-worker#worker-evaluate-handle"}),"worker.evaluate_handle(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,a.kt)("h2",k({},{id:"worker-url"}),"worker.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}v.isMDXComponent=!0}}]);