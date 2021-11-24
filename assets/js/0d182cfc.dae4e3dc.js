"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[21478],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||s;return a?o.createElement(m,n(n({ref:t},p),{},{components:a})):o.createElement(m,n({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var c=2;c<s;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var o=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return d}});var o=a(67294),r=a(79443);var s=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},n=a(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,u=e.groupId,h=e.className,m=s(),k=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,o.useState)(r),f=b[0],g=b[1],x=o.Children.toArray(e.children),N=[];if(null!=u){var S=k[u];null!=S&&S!==f&&d.some((function(e){return e.value===S}))&&g(S)}var y=function(e){var t=e.currentTarget,a=N.indexOf(t),o=d[a].value;g(o),null!=u&&(v(u,o),setTimeout((function(){var e,a,o,r,s,n,l,c;(e=t.getBoundingClientRect(),a=e.top,o=e.left,r=e.bottom,s=e.right,n=window,l=n.innerHeight,c=n.innerWidth,a>=0&&s<=c&&r<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},A=function(e){var t,a;switch(e.keyCode){case p:var o=N.indexOf(e.target)+1;a=N[o]||N[0];break;case c:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},h)},d.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,n.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:y,onClick:y},a)}))),t?(0,o.cloneElement)(x.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){var o=(0,a(67294).createContext)(void 0);t.Z=o},87091:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var o=a(22122),r=a(19756),s=(a(67294),a(3905)),n=(a(55064),a(58215),{id:"class-locatorassertions",title:"LocatorAssertions"}),l=void 0,i={unversionedId:"api/class-locatorassertions",id:"api/class-locatorassertions",isDocsHomePage:!1,title:"LocatorAssertions",description:"The LocatorAssertions] class provides assertion methods that can be used to make assertions about the [Locator] state in the tests. A new instance of [LocatorAssertions] is created by calling [playwrightAssertions.expect(locator):",source:"@site/docs/api/class-locatorassertions.mdx",sourceDirName:"api",slug:"/api/class-locatorassertions",permalink:"/docs/next/api/class-locatorassertions",version:"current",frontMatter:{id:"class-locatorassertions",title:"LocatorAssertions"},sidebar:"api",previous:{title:"Locator",permalink:"/docs/next/api/class-locator"},next:{title:"Logger",permalink:"/docs/next/api/class-logger"}},c=[{value:"locatorAssertions.not()",id:"locator-assertions-not",children:[]},{value:"locatorAssertions.toBeChecked()",id:"locator-assertions-to-be-checked",children:[]},{value:"locatorAssertions.toBeDisabled()",id:"locator-assertions-to-be-disabled",children:[]},{value:"locatorAssertions.toBeEditable()",id:"locator-assertions-to-be-editable",children:[]},{value:"locatorAssertions.toBeEmpty()",id:"locator-assertions-to-be-empty",children:[]},{value:"locatorAssertions.toBeEnabled()",id:"locator-assertions-to-be-enabled",children:[]},{value:"locatorAssertions.toBeFocused()",id:"locator-assertions-to-be-focused",children:[]},{value:"locatorAssertions.toBeHidden()",id:"locator-assertions-to-be-hidden",children:[]},{value:"locatorAssertions.toBeVisible()",id:"locator-assertions-to-be-visible",children:[]},{value:"locatorAssertions.toContainText(expected, options)",id:"locator-assertions-to-contain-text",children:[]},{value:"locatorAssertions.toHaveAttribute(name, value)",id:"locator-assertions-to-have-attribute",children:[]},{value:"locatorAssertions.toHaveClass(expected)",id:"locator-assertions-to-have-class",children:[]},{value:"locatorAssertions.toHaveCount(count)",id:"locator-assertions-to-have-count",children:[]},{value:"locatorAssertions.toHaveCSS(name, value)",id:"locator-assertions-to-have-css",children:[]},{value:"locatorAssertions.toHaveId(id)",id:"locator-assertions-to-have-id",children:[]},{value:"locatorAssertions.toHaveJSProperty(name, value)",id:"locator-assertions-to-have-js-property",children:[]},{value:"locatorAssertions.toHaveText(expected, options)",id:"locator-assertions-to-have-text",children:[]},{value:"locatorAssertions.toHaveValue(value)",id:"locator-assertions-to-have-value",children:[]}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," state in the tests. A new instance of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," is created by calling ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-playwrightassertions#playwright-assertions-expect-locator"},"playwrightAssertions.expect(locator)"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-not"},"locatorAssertions.not()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-checked"},"locatorAssertions.toBeChecked()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-disabled"},"locatorAssertions.toBeDisabled()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-editable"},"locatorAssertions.toBeEditable()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-empty"},"locatorAssertions.toBeEmpty()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-enabled"},"locatorAssertions.toBeEnabled()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-focused"},"locatorAssertions.toBeFocused()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-hidden"},"locatorAssertions.toBeHidden()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-visible"},"locatorAssertions.toBeVisible()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-contain-text"},"locatorAssertions.toContainText(expected[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-attribute"},"locatorAssertions.toHaveAttribute(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-class"},"locatorAssertions.toHaveClass(expected)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-count"},"locatorAssertions.toHaveCount(count)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-css"},"locatorAssertions.toHaveCSS(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-id"},"locatorAssertions.toHaveId(id)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-js-property"},"locatorAssertions.toHaveJSProperty(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-text"},"locatorAssertions.toHaveText(expected[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-value"},"locatorAssertions.toHaveValue(value)"))),(0,s.kt)("h2",{id:"locator-assertions-not"},"locatorAssertions.not()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-not-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,s.kt)("a",{href:"#locator-assertions-not-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the Locator doesn't contain text ",(0,s.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,s.kt)("h2",{id:"locator-assertions-to-be-checked"},"locatorAssertions.toBeChecked()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-checked-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-checked-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a checked input."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.subscribe');\nawait expect(locator).toBeChecked();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-disabled"},"locatorAssertions.toBeDisabled()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-disabled-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-disabled-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a disabled element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeDisabled();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-editable"},"locatorAssertions.toBeEditable()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-editable-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-editable-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an editable element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeEditable();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-empty"},"locatorAssertions.toBeEmpty()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-empty-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-empty-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an empty editable element or to a DOM node that has no text."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('div.warning');\nawait expect(locator).toBeEmpty();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-enabled"},"locatorAssertions.toBeEnabled()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-enabled-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-enabled-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an enabled element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeEnabled();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-focused"},"locatorAssertions.toBeFocused()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-focused-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-focused-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a focused DOM node."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeFocused();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-hidden"},"locatorAssertions.toBeHidden()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-hidden-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-hidden-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a hidden DOM node, which is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/actionability#visible"},"visible"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeHidden();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-visible"},"locatorAssertions.toBeVisible()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-visible-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-visible-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/actionability#visible"},"visible")," DOM node."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeVisible();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-contain-text"},"locatorAssertions.toContainText(expected","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-use-inner-text"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to use ",(0,s.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element that contains the given text. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toContainText('substring');\nawait expect(locator).toContainText(/\\d messages/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .list-item');\nawait expect(locator).toContainText(['Text 1', 'Text 4', 'Text 5']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-attribute"},"locatorAssertions.toHaveAttribute(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Attribute name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected attribute value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given attribute."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveAttribute('type', 'text');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-class"},"locatorAssertions.toHaveClass(expected)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected class or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-have-class-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-class-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given CSS class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('#component');\nawait expect(locator).toHaveClass(/selected/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveClass(['component', 'component selected', 'component']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-count"},"locatorAssertions.toHaveCount(count)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"count"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-option-count"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Expected count.",(0,s.kt)("a",{href:"#locator-assertions-to-have-count-option-count",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-count-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," resolves to an exact number of DOM nodes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const list = page.locator('list > .component');\nawait expect(list).toHaveCount(3);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-css"},"locatorAssertions.toHaveCSS(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," CSS property name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," CSS property value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," resolves to an element with the given computed CSS style."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button');\nawait expect(locator).toHaveCSS('display', 'flex');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-id"},"locatorAssertions.toHaveId(id)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-option-id"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Element id.",(0,s.kt)("a",{href:"#locator-assertions-to-have-id-option-id",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-id-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given DOM Node ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveId('lastname');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-js-property"},"locatorAssertions.toHaveJSProperty(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Property name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">"," Property value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.component');\nawait expect(locator).toHaveJSProperty('loaded', true);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-text"},"locatorAssertions.toHaveText(expected","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-use-inner-text"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to use ",(0,s.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given text. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toHaveText(/Welcome, Test User/);\nawait expect(locator).toHaveText(/Welcome, .*/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveText(['Text 1', 'Text 2', 'Text 3']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-value"},"locatorAssertions.toHaveValue(value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-value-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given input value. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input[type=number]');\nawait expect(locator).toHaveValue(/[0-9]/);\n")))}d.isMDXComponent=!0},86010:function(e,t,a){function o(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);