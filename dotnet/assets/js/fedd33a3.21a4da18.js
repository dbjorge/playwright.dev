"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[138],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"class-route",title:"Route"},m=void 0,h={unversionedId:"api/class-route",id:"version-1.20/api/class-route",title:"Route",description:"Whenever a network route is set up with Page.RouteAsync(url, handler, options) or BrowserContext.RouteAsync(url, handler, options), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.20/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/dotnet/docs/1.20/api/class-route",tags:[],version:"1.20",frontMatter:{id:"class-route",title:"Route"},sidebar:"api",previous:{title:"Response",permalink:"/dotnet/docs/1.20/api/class-response"},next:{title:"Selectors",permalink:"/dotnet/docs/1.20/api/class-selectors"}},f={},k=[{value:"Route.AbortAsync(errorCode)",id:"route-abort",level:2},{value:"Route.ContinueAsync(options)",id:"route-continue",level:2},{value:"Route.FulfillAsync(options)",id:"route-fulfill",level:2},{value:"Route.Request",id:"route-request",level:2}],y={toc:k};function N(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),c),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Whenever a network route is set up with ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.20/api/class-page#page-route"}),"Page.RouteAsync(url, handler, options)")," or ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.20/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-route#route-abort"}),"Route.AbortAsync(errorCode)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-route#route-continue"}),"Route.ContinueAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-route#route-fulfill"}),"Route.FulfillAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-route#route-request"}),"Route.Request"))),(0,r.kt)("h2",p({},{id:"route-abort"}),"Route.AbortAsync(errorCode)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"errorCode"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Optional error code. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,r.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Aborts the route's request."),(0,r.kt)("h2",p({},{id:"route-continue"}),"Route.ContinueAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"RouteContinueOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Headers"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"}),"IDictionary"),"?<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),", ",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,r.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Method"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," If set changes the request method (e.g. GET or POST)",(0,r.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PostData"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?|",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"}),"byte"),"[","]","?",">"," If set changes the post data of request",(0,r.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Url"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," If set changes the request URL. New URL must have same protocol as original one.",(0,r.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Continues route's request with optional overrides."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/*", route =>\n{\n    var headers = new Dictionary<string, string>(route.Request.Headers) { { "foo", "bar" } };\n    headers.Remove("origin");\n    route.ContinueAsync(headers);\n});\n')),(0,r.kt)("h2",p({},{id:"route-fulfill"}),"Route.FulfillAsync(options)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"RouteFulfillOptions?"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Body"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," Optional response body as text.",(0,r.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BodyBytes"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body-bytes"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte"}),"byte"),"[","]","?",">"," Optional response body as raw bytes.",(0,r.kt)("a",{href:"#route-fulfill-option-body-bytes",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ContentType"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," If set, equals to setting ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,r.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Headers"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary"}),"IDictionary"),"?<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),", ",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",">"," Response headers. Header values will be converted to a string.",(0,r.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Path"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),"?",">"," File path to respond with. The content type will be inferred from file extension. If ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,r.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Status"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int"}),"int"),"?",">"," Response status code, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),".",(0,r.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Fulfills route's request with given response."),(0,r.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/*", route => route.FulfillAsync(\n    status: 404,\n    contentType: "text/plain", \n    body: "Not Found!"));\n')),(0,r.kt)("p",null,"An example of serving static file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'await page.RouteAsync("**/xhr_endpoint", route => route.FulfillAsync(new RouteFulfillOptions { Path = "mock_data.json" }));\n')),(0,r.kt)("h2",p({},{id:"route-request"}),"Route.Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.20/api/class-request",title:"Request"}),"Request"),">",(0,r.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"A request to be routed."))}N.isMDXComponent=!0}}]);