"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[890],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=s,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38372:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return q},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return f}});var r=a(3905),s=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e};const c={id:"class-request",title:"Request"},m=void 0,h={unversionedId:"api/class-request",id:"api/class-request",title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/java/docs/next/api/class-request",tags:[],version:"current",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"PlaywrightException",permalink:"/java/docs/next/api/class-playwrightexception"},next:{title:"Response",permalink:"/java/docs/next/api/class-response"}},k={},f=[{value:"Request.allHeaders()",id:"request-all-headers",level:2},{value:"Request.failure()",id:"request-failure",level:2},{value:"Request.frame()",id:"request-frame",level:2},{value:"Request.headerValue(name)",id:"request-header-value",level:2},{value:"Request.headers()",id:"request-headers",level:2},{value:"Request.headersArray()",id:"request-headers-array",level:2},{value:"Request.isNavigationRequest()",id:"request-is-navigation-request",level:2},{value:"Request.method()",id:"request-method",level:2},{value:"Request.postData()",id:"request-post-data",level:2},{value:"Request.postDataBuffer()",id:"request-post-data-buffer",level:2},{value:"Request.redirectedFrom()",id:"request-redirected-from",level:2},{value:"Request.redirectedTo()",id:"request-redirected-to",level:2},{value:"Request.resourceType()",id:"request-resource-type",level:2},{value:"Request.response()",id:"request-response",level:2},{value:"Request.sizes()",id:"request-sizes",level:2},{value:"Request.timing()",id:"request-timing",level:2},{value:"Request.url()",id:"request-url",level:2}],v={toc:f};function q(e){var t,a=e,{components:s}=a,p=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),p),n(t,l({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-page",title:"Page"}),"Page"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-request"}),"Page.onRequest(handler)")," emitted when the request is issued by the page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-response"}),"Page.onResponse(handler)")," emitted when/if the response status and headers are received for the request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-page#page-event-request-finished"}),"Page.onRequestFinished(handler)")," emitted when the response body is downloaded and the request is complete.")),(0,r.kt)("p",null,"If request fails at some point, then instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-page#page-event-request-failed"}),"Page.onRequestFailed(handler)")," event is emitted."),(0,r.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,r.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,r.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-all-headers"}),"Request.allHeaders()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-failure"}),"Request.failure()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-frame"}),"Request.frame()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-headers"}),"Request.headers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-headers-array"}),"Request.headersArray()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-header-value"}),"Request.headerValue(name)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-is-navigation-request"}),"Request.isNavigationRequest()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-method"}),"Request.method()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-post-data"}),"Request.postData()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-post-data-buffer"}),"Request.postDataBuffer()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-redirected-from"}),"Request.redirectedFrom()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-redirected-to"}),"Request.redirectedTo()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-resource-type"}),"Request.resourceType()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-response"}),"Request.response()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-sizes"}),"Request.sizes()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-timing"}),"Request.timing()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request#request-url"}),"Request.url()"))),(0,r.kt)("h2",d({},{id:"request-all-headers"}),"Request.allHeaders()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,r.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,r.kt)("h2",d({},{id:"request-failure"}),"Request.failure()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"The method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,r.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,r.kt)("p",null,"Example of logging of all the failed requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-java"}),'page.onRequestFailed(request -> {\n  System.out.println(request.url() + " " + request.failure());\n});\n')),(0,r.kt)("h2",d({},{id:"request-frame"}),"Request.frame()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-frame",title:"Frame"}),"Frame"),">",(0,r.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),(0,r.kt)("h2",d({},{id:"request-header-value"}),"Request.headerValue(name)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header.",(0,r.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,r.kt)("h2",d({},{id:"request-headers"}),"Request.headers()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,r.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-request#request-all-headers"}),"Request.allHeaders()")," instead."),(0,r.kt)("h2",d({},{id:"request-headers-array"}),"Request.headersArray()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,r.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,r.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Value of the header.")))),(0,r.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-request#request-all-headers"}),"Request.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,r.kt)("h2",d({},{id:"request-is-navigation-request"}),"Request.isNavigationRequest()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,r.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Whether this request is driving frame's navigation."),(0,r.kt)("h2",d({},{id:"request-method"}),"Request.method()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,r.kt)("h2",d({},{id:"request-post-data"}),"Request.postData()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Request's post body, if any."),(0,r.kt)("h2",d({},{id:"request-post-data-buffer"}),"Request.postDataBuffer()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">",(0,r.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Request's post body in a binary form, if any."),(0,r.kt)("h2",d({},{id:"request-redirected-from"}),"Request.redirectedFrom()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,r.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,r.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,r.kt)("p",null,"For example, if the website ",(0,r.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-java"}),'Response response = page.navigate("http://example.com");\nSystem.out.println(response.request().redirectedFrom().url()); // "http://example.com"\n')),(0,r.kt)("p",null,"If the website ",(0,r.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-java"}),'Response response = page.navigate("https://google.com");\nSystem.out.println(response.request().redirectedFrom()); // null\n')),(0,r.kt)("h2",d({},{id:"request-redirected-to"}),"Request.redirectedTo()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,r.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,r.kt)("p",null,"This method is the opposite of ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-request#request-redirected-from"}),"Request.redirectedFrom()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-java"}),"System.out.println(request.redirectedFrom().redirectedTo() == request); // true\n")),(0,r.kt)("h2",d({},{id:"request-resource-type"}),"Request.resourceType()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,r.kt)("h2",d({},{id:"request-response"}),"Request.response()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,r.kt)("a",d({parentName:"li"},{href:"/java/docs/next/api/class-response",title:"Response"}),"Response"),">",(0,r.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the matching ",(0,r.kt)("a",d({parentName:"p"},{href:"/java/docs/next/api/class-response",title:"Response"}),"Response")," object, or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,r.kt)("h2",d({},{id:"request-sizes"}),"Request.sizes()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<","Sizes",">",(0,r.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">"," Size of the received response body (encoded) in bytes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,r.kt)("p",null,"Returns resource size information for given request."),(0,r.kt)("h2",d({},{id:"request-timing"}),"Request.timing()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<","Timing",">",(0,r.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,r.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,r.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,r.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-java"}),'page.onRequestFinished(request -> {\n  Timing timing = request.timing();\n  System.out.println(timing.responseEnd - timing.startTime);\n});\npage.navigate("http://example.com");\n')),(0,r.kt)("h2",d({},{id:"request-url"}),"Request.url()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"URL of the request."))}q.isMDXComponent=!0}}]);