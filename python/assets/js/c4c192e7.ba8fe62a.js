"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2050],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=n,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return t?a.createElement(d,o(o({ref:r},u),{},{components:t})):a.createElement(d,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73811:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(67294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;function c({children:e,hidden:r,className:t}){return a.createElement("div",((e,r)=>{for(var t in r||(r={}))o.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e})({role:"tabpanel"},{hidden:r,className:t}),e)}},73824:function(e,r,t){t.d(r,{Z:function(){return v}});var a=t(67294),n=t(54939),l=t(5882),o=t(86010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&d(e,t,r[t]);if(p)for(var t of p(r))f.call(r,t)&&d(e,t,r[t]);return e};function y(e){var r,t,n;const{lazy:s,block:p,defaultValue:m,values:f,groupId:d,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:v.map((({props:{value:e,label:r,attributes:t}})=>({value:e,label:r,attributes:t}))),g=(0,l.lx)(h,((e,r)=>e.value===r.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===m?m:null!=(n=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?n:null==(t=v[0])?void 0:t.props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.UB)(),[j,T]=(0,a.useState)(O),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=d){const e=k[d];null!=e&&e!==j&&h.some((r=>r.value===e))&&T(e)}const E=e=>{const r=e.currentTarget,t=N.indexOf(r),a=h[t].value;a!==j&&(P(r),T(a),null!=d&&w(d,a))},x=e=>{let r=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]||N[N.length-1];break}}null==r||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:r,attributes:t})=>{return a.createElement("li",(n=b({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>N.push(e),onKeyDown:x,onFocus:E,onClick:E},t),l={className:(0,o.Z)("tabs__item",i,null==t?void 0:t.className,{"tabs__item--active":j===e})},c(n,u(l))),null!=r?r:e);var n,l}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==j})))))}function v(e){const r=(0,n.Z)();return a.createElement(y,b({key:String(r)},e))}},26041:function(e,r,t){t.r(r),t.d(r,{assets:function(){return v},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var a=t(3905),n=t(73824),l=t(73811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&m(e,t,r[t]);return e};const d={id:"frames",title:"Frames"},b=void 0,y={unversionedId:"frames",id:"version-1.18/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.18/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/python/docs/1.18/frames",tags:[],version:"1.18",frontMatter:{id:"frames",title:"Frames"},sidebar:"version-1.18/docs",previous:{title:"Extensibility",permalink:"/python/docs/1.18/extensibility"},next:{title:"Handles",permalink:"/python/docs/1.18/handles"}},v={},h=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],g={toc:h};function O(e){var r,t=e,{components:o}=t,m=((e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(r=f(f({},g),m),i(r,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frames"}),"Frames")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,a.kt)("h2",f({},{id:"frames"}),"Frames"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/1.18/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/1.18/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,a.kt)("p",null,"A page can have additional frames attached with the ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Locate element inside frame\n# Get frame using any other selector\nusername = page.frame_locator('.frame-class').locator('#username-input')\nusername.fill('John')\n"))),(0,a.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Locate element inside frame\nusername = await page.frame_locator('.frame-class').locator('#username-input')\nawait username.fill('John')\n")))),(0,a.kt)("h2",f({},{id:"frame-objects"}),"Frame objects"),(0,a.kt)("p",null,"One can access frame objects using the ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/1.18/api/class-page#page-frame"}),"page.frame(**kwargs)")," API:"),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nframe.fill('#username-input', 'John')\n"))),(0,a.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nawait frame.fill('#username-input', 'John')\n")))))}O.isMDXComponent=!0}}]);