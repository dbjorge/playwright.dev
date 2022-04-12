"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3326],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||k[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return m}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"class-websocket",title:"WebSocket"},u=void 0,h={unversionedId:"api/class-websocket",id:"version-1.21/api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.21/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/python/docs/api/class-websocket",tags:[],version:"1.21",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"Video",permalink:"/python/docs/api/class-video"},next:{title:"Worker",permalink:"/python/docs/api/class-worker"}},b={},m=[{value:"web_socket.on(&quot;close&quot;)",id:"web-socket-event-close",level:2},{value:"web_socket.on(&quot;framereceived&quot;)",id:"web-socket-event-frame-received",level:2},{value:"web_socket.on(&quot;framesent&quot;)",id:"web-socket-event-frame-sent",level:2},{value:"web_socket.on(&quot;socketerror&quot;)",id:"web-socket-event-socket-error",level:2},{value:"web_socket.expect_event(event, **kwargs)",id:"web-socket-wait-for-event",level:2},{value:"web_socket.is_closed()",id:"web-socket-is-closed",level:2},{value:"web_socket.url",id:"web-socket-url",level:2},{value:"web_socket.wait_for_event(event, **kwargs)",id:"web-socket-wait-for-event-2",level:2}],f={toc:m};function w(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},f),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-event-close"}),'web_socket.on("close")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-event-frame-received"}),'web_socket.on("framereceived")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-event-frame-sent"}),'web_socket.on("framesent")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-event-socket-error"}),'web_socket.on("socketerror")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-wait-for-event"}),"web_socket.expect_event(event, **kwargs)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-is-closed"}),"web_socket.is_closed()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-url"}),"web_socket.url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket#web-socket-wait-for-event-2"}),"web_socket.wait_for_event(event, **kwargs)"))),(0,a.kt)("h2",k({},{id:"web-socket-event-close"}),'web_socket.on("close")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket"),">")),(0,a.kt)("p",null,"Fired when the websocket closes."),(0,a.kt)("h2",k({},{id:"web-socket-event-frame-received"}),'web_socket.on("framereceived")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," frame payload")))),(0,a.kt)("p",null,"Fired when the websocket receives a frame."),(0,a.kt)("h2",k({},{id:"web-socket-event-frame-sent"}),'web_socket.on("framesent")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," frame payload")))),(0,a.kt)("p",null,"Fired when the websocket sends a frame."),(0,a.kt)("h2",k({},{id:"web-socket-event-socket-error"}),'web_socket.on("socketerror")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<","[String]",">")),(0,a.kt)("p",null,"Fired when the websocket has an error."),(0,a.kt)("h2",k({},{id:"web-socket-wait-for-event"}),"web_socket.expect_event(event, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Event name, same one would pass into ",(0,a.kt)("inlineCode",{parentName:"li"},"webSocket.on(event)"),".",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-timeout"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-set-default-timeout"}),"browser_context.set_default_timeout(timeout)"),".",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-timeout",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager"}),"EventContextManager"),">",(0,a.kt)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."),(0,a.kt)("h2",k({},{id:"web-socket-is-closed"}),"web_socket.is_closed()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">",(0,a.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Indicates that the web socket has been closed."),(0,a.kt)("h2",k({},{id:"web-socket-url"}),"web_socket.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,a.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the WebSocket."),(0,a.kt)("h2",k({},{id:"web-socket-wait-for-event-2"}),"web_socket.wait_for_event(event, **kwargs)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-event"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Event name, same one typically passed into ",(0,a.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,a.kt)("a",{href:"#web-socket-wait-for-event-2-option-event",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-predicate"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,a.kt)("a",{href:"#web-socket-wait-for-event-2-option-predicate",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-timeout"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",k({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser-context-set-default-timeout"}),"browser_context.set_default_timeout(timeout)"),".",(0,a.kt)("a",{href:"#web-socket-wait-for-event-2-option-timeout",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-return"})," ","<",(0,a.kt)("a",k({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"}),"Any"),">",(0,a.kt)("a",{href:"#web-socket-wait-for-event-2-return",class:"list-anchor"},"#"))),(0,a.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"In most cases, you should use ",(0,a.kt)("a",k({parentName:"p"},{href:"/python/docs/api/class-websocket#web-socket-wait-for-event"}),"web_socket.expect_event(event, **kwargs)"),"."))),(0,a.kt)("p",null,"Waits for given ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," to fire. If predicate is provided, it passes event's value into the ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,a.kt)("inlineCode",{parentName:"p"},"predicate(event)")," to return a truthy value. Will throw an error if the socket is closed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," is fired."))}w.isMDXComponent=!0}}]);