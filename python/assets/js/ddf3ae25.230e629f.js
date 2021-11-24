"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9147],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(t,e,r){var n=r(7294);e.Z=function(t){var e=t.children,r=t.hidden,a=t.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},e)}},5064:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(7294),a=r(9443);var i=function(){var t=(0,n.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=r(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,c=39;var u=function(t){var e=t.lazy,r=t.block,a=t.defaultValue,u=t.values,h=t.groupId,m=t.className,d=i(),y=d.tabGroupChoices,k=d.setTabGroupChoices,f=(0,n.useState)(a),g=f[0],x=f[1],N=n.Children.toArray(t.children),b=[];if(null!=h){var w=y[h];null!=w&&w!==g&&u.some((function(t){return t.value===w}))&&x(w)}var q=function(t){var e=t.currentTarget,r=b.indexOf(e),n=u[r].value;x(n),null!=h&&(k(h,n),setTimeout((function(){var t,r,n,a,i,o,s,p;(t=e.getBoundingClientRect(),r=t.top,n=t.left,a=t.bottom,i=t.right,o=window,s=o.innerHeight,p=o.innerWidth,r>=0&&i<=p&&a<=s&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},v=function(t){var e,r;switch(t.keyCode){case c:var n=b.indexOf(t.target)+1;r=b[n]||b[0];break;case p:var a=b.indexOf(t.target)-1;r=b[a]||b[b.length-1]}null==(e=r)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},u.map((function(t){var e=t.value,r=t.label;return n.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":g===e}),key:e,ref:function(t){return b.push(t)},onKeyDown:v,onFocus:q,onClick:q},r)}))),e?(0,n.cloneElement)(N.filter((function(t){return t.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==g})}))))}},9443:function(t,e,r){var n=(0,r(7294).createContext)(void 0);e.Z=n},7389:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=(r(5064),r(8215),{id:"class-apirequest",title:"APIRequest"}),s=void 0,l={unversionedId:"api/class-apirequest",id:"api/class-apirequest",isDocsHomePage:!1,title:"APIRequest",description:"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see here.",source:"@site/docs/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/python/docs/next/api/class-apirequest",version:"current",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"api",previous:{title:"Playwright",permalink:"/python/docs/next/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/python/docs/next/api/class-apirequestcontext"}},p=[{value:"api_request.new_context(**kwargs)",id:"api-request-new-context",children:[]}],c={toc:p};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see ",(0,i.kt)("a",{parentName:"p",href:"./class-apirequestcontext"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apirequest#api-request-new-context"},"api_request.new_context(**kwargs)"))),(0,i.kt)("h2",{id:"api-request-new-context"},"api_request.new_context(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_url"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Methods like ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apirequestcontext#api-request-context-get"},"api_request_context.get(url, **kwargs)")," take the base URL into consideration by using the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"},(0,i.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,i.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"baseURL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,i.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,i.kt)("li",{parentName:"ul"},"baseURL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,i.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_http_headers"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">"," An object containing additional HTTP headers to be sent with every request.",(0,i.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_credentials"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Credentials for ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,i.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ignore_https_errors"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proxy"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Network proxy settings.",(0,i.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,i.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,i.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional username to use if HTTP proxy requires authentication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage_state"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]","|",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)"),". Either a path to the file with saved storage, or the value returned by one of ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," or ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apirequestcontext#api-request-context-storage-state"},"api_request_context.storage_state(**kwargs)")," methods.",(0,i.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cookies")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domain")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expires")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Unix time in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpOnly")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secure")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sameSite")," ","<",'"Strict"|"Lax"|"None"',">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origins")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"localStorage")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,i.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_agent"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Specific user agent to use in this context.",(0,i.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),">",(0,i.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Creates new instances of ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),"."))}u.isMDXComponent=!0},6010:function(t,e,r){function n(t){var e,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=n(t[e]))&&(a&&(a+=" "),a+=r);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,r=0,a="";r<arguments.length;)(t=arguments[r++])&&(e=n(t))&&(a&&(a+=" "),a+=e);return a}r.d(e,{Z:function(){return a}})}}]);