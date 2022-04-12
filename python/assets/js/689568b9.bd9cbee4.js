"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3556],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73811:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},73824:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(67294),a=r(54939),o=r(5882),l=r(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))h.call(t,r)&&f(e,r,t[r]);return e};function y(e){var t,r,a;const{lazy:s,block:c,defaultValue:d,values:h,groupId:f,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),N=(0,o.lx)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:null!=(a=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=k[0])?void 0:r.props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,o.UB)(),[x,O]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=f){const e=g[f];null!=e&&e!==x&&b.some((t=>t.value===e))&&O(e)}const q=e=>{const t=e.currentTarget,r=T.indexOf(t),n=b[r].value;n!==x&&(C(t),O(n),null!=f&&w(f,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},y)},b.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=m({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:q,onClick:q},r),o={className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":x===e})},u(a,p(o))),null!=t?t:e);var a,o}))),s?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,a.Z)();return n.createElement(y,m({key:String(t)},e))}},48606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var n=r(3905),a=r(73824),o=r(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&d(e,r,t[r]);return e};const f={id:"class-route",title:"Route"},m=void 0,y={unversionedId:"api/class-route",id:"version-1.21/api/class-route",title:"Route",description:"Whenever a network route is set up with page.route(url, handler, kwargs) or browser_context.route(url, handler, kwargs), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.21/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/python/docs/api/class-route",tags:[],version:"1.21",frontMatter:{id:"class-route",title:"Route"},sidebar:"api",previous:{title:"Response",permalink:"/python/docs/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/api/class-selectors"}},k={},b=[{value:"route.abort(**kwargs)",id:"route-abort",level:2},{value:"route.continue_(**kwargs)",id:"route-continue",level:2},{value:"route.fulfill(**kwargs)",id:"route-fulfill",level:2},{value:"route.request",id:"route-request",level:2}],N={toc:b};function v(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},N),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Whenever a network route is set up with ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-page#page-route"}),"page.route(url, handler, **kwargs)")," or ",(0,n.kt)("a",h({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browser-context-route"}),"browser_context.route(url, handler, **kwargs)"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-route#route-abort"}),"route.abort(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-route#route-continue"}),"route.continue_(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-route#route-fulfill"}),"route.fulfill(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-route#route-request"}),"route.request"))),(0,n.kt)("h2",h({},{id:"route-abort"}),"route.abort(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error_code"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Optional error code. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,n.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Aborts the route's request."),(0,n.kt)("h2",h({},{id:"route-continue"}),"route.continue_(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"headers"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,n.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"method"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request method (e.g. GET or POST)",(0,n.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post_data"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," If set changes the post data of request",(0,n.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,n.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Continues route's request with optional overrides."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    route.continue_(headers=headers)\n}\npage.route("**/*", handle)\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    await route.continue_(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),(0,n.kt)("h2",h({},{id:"route-fulfill"}),"route.fulfill(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"body"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">"," Response body.",(0,n.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"content_type"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If set, equals to setting ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,n.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"headers"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">"," Response headers. Header values will be converted to a string.",(0,n.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,n.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"response"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-response"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">"," ",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," to fulfill route's request with. Individual fields of the response (such as headers) can be overridden using fulfill options.",(0,n.kt)("a",{href:"#route-fulfill-option-response",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"status"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," Response status code, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),".",(0,n.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Fulfills route's request with given response."),(0,n.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'await page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n')))),(0,n.kt)("p",null,"An example of serving static file:"),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-py"}),'await page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n')))),(0,n.kt)("h2",h({},{id:"route-request"}),"route.request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/python/docs/api/class-request",title:"Request"}),"Request"),">",(0,n.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"A request to be routed."))}v.isMDXComponent=!0}}]);