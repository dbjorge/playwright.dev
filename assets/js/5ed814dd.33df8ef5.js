(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9627],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),i=n(80944),o=n(86010),a="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,i.Z)(),g=d.tabGroupChoices,v=d.setTabGroupChoices,h=(0,r.useState)(u),b=h[0],y=h[1],k=r.Children.toArray(e.children),w=[];if(null!=m){var N=g[m];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&y(N)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;y(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,i,o,a,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,o=e.right,a=window,s=a.innerHeight,c=a.innerWidth,n>=0&&o<=c&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",a,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},31481:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=(n(41395),n(58215),{id:"extensibility",title:"Extensibility"}),l={unversionedId:"extensibility",id:"version-1.10.0/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.10.0/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/docs/1.10.0/extensibility",version:"1.10.0",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"version-1.10.0/docs",previous:{title:"Events",permalink:"/docs/1.10.0/events"},next:{title:"Handles",permalink:"/docs/1.10.0/handles"}},s=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-selector-engines"},"Custom selector engines"))),(0,o.kt)("h2",{id:"custom-selector-engines"},"Custom selector engines"),(0,o.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-selectors#selectorsregistername-script-options"},"selectors.register(name, script[, options])"),"."),(0,o.kt)("p",null,"Selector engine should have the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,o.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,o.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,o.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,o.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,o.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,o.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Must be a function that evaluates to a selector engine instance.\nconst createTagNameEngine = () => ({\n  // Returns the first element matching given selector in the root's subtree.\n  query(root, selector) {\n    return root.querySelector(selector);\n  },\n\n  // Returns all elements matching given selector in the root's subtree.\n  queryAll(root, selector) {\n    return Array.from(root.querySelectorAll(selector));\n  }\n});\n\n// Register the engine. Selectors will be prefixed with \"tag=\".\nawait selectors.register('tag', createTagNameEngine);\n\n// Now we can use 'tag=' selectors.\nconst button = await page.$('tag=button');\n\n// We can combine it with other selector engines using `>>` combinator.\nawait page.click('tag=div >> span >> \"Click me\"');\n\n// We can use it in any methods supporting selectors.\nconst buttonCount = await page.$$eval('tag=button', buttons => buttons.length);\n")))}u.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);