(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2651],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,k=m["".concat(r,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),o=a(944),i=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var r=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,k=(0,o.Z)(),h=k.tabGroupChoices,v=k.setTabGroupChoices,f=(0,n.useState)(c),b=f[0],N=f[1],y=n.Children.toArray(e.children),x=[];if(null!=m){var j=h[m];null!=j&&j!==b&&p.some((function(e){return e.value===j}))&&N(j)}var C=function(e){var t=e.currentTarget,a=x.indexOf(t),n=p[a].value;N(n),null!=m&&(v(m,n),setTimeout((function(){var e,a,n,o,i,l,r,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,i=e.right,l=window,r=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&o<=r&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},g=function(e){var t,a;switch(e.keyCode){case u:var n=x.indexOf(e.target)+1;a=x[n]||x[0];break;case r:var o=x.indexOf(e.target)-1;a=x[o]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:g,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2173:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return r},default:function(){return c}});var n=a(2122),o=a(9756),i=(a(7294),a(3905)),l=(a(1395),a(8215),{id:"class-mouse",title:"Mouse"}),s={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/java/docs/next/api/class-mouse",version:"current",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Locator",permalink:"/java/docs/next/api/class-locator"},next:{title:"Page",permalink:"/java/docs/next/api/class-page"}},r=[{value:"Mouse.click(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.dblclick(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.down(options)",id:"mouse-down",children:[]},{value:"Mouse.move(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.up(options)",id:"mouse-up",children:[]}],u={toc:r};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-mouse"},"Page.mouse()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse().move(0, 0);\npage.mouse().down();\npage.mouse().move(0, 100);\npage.mouse().move(100, 100);\npage.mouse().move(100, 0);\npage.mouse().move(0, 0);\npage.mouse().up();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-mouse#mouse-click"},"Mouse.click(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-mouse#mouse-dblclick"},"Mouse.dblclick(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-mouse#mouse-down"},"Mouse.down([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-mouse#mouse-up"},"Mouse.up([options])"))),(0,i.kt)("h2",{id:"mouse-click"},"Mouse.click(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-click-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-click-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Mouse.ClickOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setButton"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"})," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-click-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-click-option-click-count",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-click-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-click-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-click-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-down"},"Mouse.down([options])"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-up"},"Mouse.up([options])"),"."),(0,i.kt)("h2",{id:"mouse-dblclick"},"Mouse.dblclick(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Mouse.DblclickOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setButton"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"})," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-dblclick-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-down"},"Mouse.down([options])"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-up"},"Mouse.up([options])"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-down"},"Mouse.down([options])")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-mouse#mouse-up"},"Mouse.up([options])"),"."),(0,i.kt)("h2",{id:"mouse-down"},"Mouse.down(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Mouse.DownOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setButton"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"})," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-down-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-down-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-down-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-down-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,i.kt)("h2",{id:"mouse-move"},"Mouse.move(x, y","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-move-option-x",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">",(0,i.kt)("a",{href:"#mouse-move-option-y",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Mouse.MoveOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setSteps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. Sends intermediate ",(0,i.kt)("inlineCode",{parentName:"li"},"mousemove")," events.",(0,i.kt)("a",{href:"#mouse-move-option-steps",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-move-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-move-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,i.kt)("h2",{id:"mouse-up"},"Mouse.up(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Mouse.UpOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setButton"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"})," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),".",(0,i.kt)("a",{href:"#mouse-up-option-button",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setClickCount"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".",(0,i.kt)("a",{href:"#mouse-up-option-click-count",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"mouse-up-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#mouse-up-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}c.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);