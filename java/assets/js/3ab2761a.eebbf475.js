(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3291],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(944),a=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=(0,i.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,b=(0,r.useState)(c),y=b[0],g=b[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var N=v[d];null!=N&&N!==y&&m.some((function(e){return e.value===N}))&&g(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;g(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,i,a,o,u,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,u=o.innerHeight,s=o.innerWidth,n>=0&&a<=s&&i<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),i=n(9443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4233:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"mobile",title:"Mobile (experimental)"}),l={unversionedId:"mobile",id:"version-1.11.0/mobile",isDocsHomePage:!1,title:"Mobile (experimental)",description:"- Requirements",source:"@site/versioned_docs/version-1.11.0/mobile.mdx",sourceDirName:".",slug:"/mobile",permalink:"/java/docs/1.11.0/mobile",version:"1.11.0",frontMatter:{id:"mobile",title:"Mobile (experimental)"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-run"},"How to run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#known-limitations"},"Known limitations"))),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Mobile support is experimental and uses prefixed provisional API."))),(0,a.kt)("p",null,"You can try Playwright against Android, Chrome for Android and Android WebView today. This support is experimental. Support for devices is tracked in the issue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/issues/1122"},"#1122"),"."),(0,a.kt)("p",null,"See ","[Android]"," for documentation."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android device or AVD Emulator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"ADB daemon")," running and authenticated with your device. Typically running ",(0,a.kt)("inlineCode",{parentName:"li"},"adb devices")," is all you need to do."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.android.chrome"},(0,a.kt)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device"),(0,a.kt)("li",{parentName:"ul"},'"Enable command line on non-rooted devices" enabled in ',(0,a.kt)("inlineCode",{parentName:"li"},"chrome://flags"),".")),(0,a.kt)("h2",{id:"how-to-run"},"How to run"),(0,a.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),(0,a.kt)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),(0,a.kt)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")))}c.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);