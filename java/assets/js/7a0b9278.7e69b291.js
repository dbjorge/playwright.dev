"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1529],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),y=a,m=f["".concat(l,".").concat(y)]||f[y]||u[y]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81858:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"class-playwrightexception",title:"PlaywrightException"},y=void 0,m={unversionedId:"api/class-playwrightexception",id:"version-1.20/api/class-playwrightexception",title:"PlaywrightException",description:"* extends: [RuntimeException]",source:"@site/versioned_docs/version-1.20/api/class-playwrightexception.mdx",sourceDirName:"api",slug:"/api/class-playwrightexception",permalink:"/java/docs/1.20/api/class-playwrightexception",tags:[],version:"1.20",frontMatter:{id:"class-playwrightexception",title:"PlaywrightException"},sidebar:"api",previous:{title:"Page",permalink:"/java/docs/1.20/api/class-page"},next:{title:"Request",permalink:"/java/docs/1.20/api/class-request"}},d={},g=[],v={toc:g};function b(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html",title:"RuntimeException"}),"RuntimeException"))),(0,n.kt)("p",null,"PlaywrightException is thrown whenever certain operations are terminated abnormally, e.g. browser closes while ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-evaluate"}),"Page.evaluate(expression[, arg])")," is running. All Playwright exceptions inherit from this class."))}b.isMDXComponent=!0}}]);