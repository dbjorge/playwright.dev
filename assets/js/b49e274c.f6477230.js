(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8796],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),l=a(80944),i=a(86010),r="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=(0,l.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,n.useState)(c),N=g[0],v=g[1],y=n.Children.toArray(e.children),b=[];if(null!=d){var w=k[d];null!=w&&w!==N&&u.some((function(e){return e.value===w}))&&v(w)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),n=u[a].value;v(n),null!=d&&(f(d,n),setTimeout((function(){var e,a,n,l,i,r,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,i=e.right,r=window,s=r.innerHeight,p=r.innerWidth,a>=0&&i<=p&&l<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case s:var l=b.indexOf(e.target)-1;a=b[l]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),l=a(79443);t.Z=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},64446:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var n=a(22122),l=a(19756),i=(a(67294),a(3905)),r=(a(41395),a(58215),{id:"input",title:"Input"}),o={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/docs/next/input",version:"current",frontMatter:{id:"input",title:"Input"},sidebar:"docs",previous:{title:"Handles",permalink:"/docs/next/handles"},next:{title:"Inspector",permalink:"/docs/next/inspector"}},s=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],p={toc:s};function c(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text-input"},"Text input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkboxes-and-radio-buttons"},"Checkboxes and radio buttons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#select-options"},"Select options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mouse-click"},"Mouse click")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type-characters"},"Type characters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#keys-and-shortcuts"},"Keys and shortcuts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upload-files"},"Upload files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#focus-element"},"Focus element"))),(0,i.kt)("h2",{id:"text-input"},"Text input"),(0,i.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Text input\nawait page.fill('#name', 'Peter');\n\n// Date input\nawait page.fill('#date', '2020-02-02');\n\n// Time input\nawait page.fill('#time', '13-15');\n\n// Local datetime input\nawait page.fill('#local', '2020-03-02T05:15');\n\n// Input through label\nawait page.fill('text=First Name', 'Peter');\n")),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-fill"},"page.fill(selector, value[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-fill"},"frame.fill(selector, value[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-fill"},"elementHandle.fill(value[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),(0,i.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Check the checkbox\nawait page.check('#agree');\n\n// Assert the checked state\nexpect(await page.isChecked('#agree')).toBeTruthy()\n\n// Uncheck by input <label>.\nawait page.uncheck('#subscribe-label');\n\n// Select the radio button\nawait page.check('text=XL');\n")),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-check"},"page.check(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-is-checked"},"page.isChecked(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-uncheck"},"page.uncheck(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-check"},"elementHandle.check([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-is-checked"},"elementHandle.isChecked()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-uncheck"},"elementHandle.uncheck([options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"select-options"},"Select options"),(0,i.kt)("p",null,"Selects one or multiple options in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Single selection matching the value\nawait page.selectOption('select#colors', 'blue');\n\n// Single selection matching the label\nawait page.selectOption('select#colors', { label: 'Blue' });\n\n// Multiple selected items\nawait page.selectOption('select#colors', ['red', 'green', 'blue']);\n\n// Select the option via element handle\nconst option = await page.$('#best-option');\nawait page.selectOption('select#colors', option);\n")),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-select-option"},"page.selectOption(selector, values[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-select-option"},"frame.selectOption(selector, values[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-select-option"},"elementHandle.selectOption(values[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"mouse-click"},"Mouse click"),(0,i.kt)("p",null,"Performs a simple human click."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Generic click\nawait page.click('button#submit');\n\n// Double click\nawait page.dblclick('#item');\n\n// Right click\nawait page.click('#item', { button: 'right' });\n\n// Shift + click\nawait page.click('#item', { modifiers: ['Shift'] });\n\n// Hover over element\nawait page.hover('#item');\n\n// Click the top left corner\nawait page.click('#item', { position: { x: 0, y: 0} });\n")),(0,i.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,i.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,i.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,i.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,i.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,i.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,i.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,i.kt)("h4",{id:"forcing-the-click"},"Forcing the click"),(0,i.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/actionability"},"actionability")," checks and force the click:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('button#submit', { force: true });\n")),(0,i.kt)("h4",{id:"programmatic-click"},"Programmatic click"),(0,i.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"},(0,i.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.dispatchEvent('button#submit', 'click');\n")),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-click"},"page.click(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-click"},"frame.click(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-click"},"elementHandle.click([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-dblclick"},"page.dblclick(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-dblclick"},"frame.dblclick(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-dblclick"},"elementHandle.dblclick([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-hover"},"page.hover(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-hover"},"frame.hover(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-hover"},"elementHandle.hover([options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-dispatch-event"},"page.dispatchEvent(selector, type[, eventInit, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-dispatch-event"},"frame.dispatchEvent(selector, type[, eventInit, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-dispatch-event"},"elementHandle.dispatchEvent(type[, eventInit])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"type-characters"},"Type characters"),(0,i.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Type character by character\nawait page.type('#area', 'Hello World!');\n")),(0,i.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most of the time, ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-fill"},"page.fill(selector, value[, options])")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-type"},"page.type(selector, text[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-type"},"frame.type(selector, text[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-type"},"elementHandle.type(text[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-keyboard#keyboard-type"},"keyboard.type(text[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Hit Enter\nawait page.press('#submit', 'Enter');\n\n// Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight');\n\n// Press $ sign on keyboard\nawait page.press('#value', '$');\n")),(0,i.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," property of the keyboard events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,i.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,i.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,i.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,i.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// <input id=name>\nawait page.press('#name', 'Shift+A');\n\n// <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft');\n")),(0,i.kt)("p",null,"Shortcuts such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,i.kt)("p",null,"Note that you still need to specify the capital ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,i.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,i.kt)("h3",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-press"},"page.press(selector, key[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-press"},"frame.press(selector, key[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-press"},"elementHandle.press(key[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-keyboard#keyboard-press"},"keyboard.press(key[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"upload-files"},"Upload files"),(0,i.kt)("p",null,"You can select input files for upload using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-set-input-files"},"page.setInputFiles(selector, files[, options])")," method. It expects first argument to point to an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element")," with the type ",(0,i.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Select one file\nawait page.setInputFiles('input#upload', 'myfile.pdf');\n\n// Select multiple files\nawait page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n\n// Remove all the selected files\nawait page.setInputFiles('input#upload', []);\n\n// Upload buffer from memory\nawait page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),(0,i.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/class-page#page-event-file-chooser"},"page.on('filechooser')")," event or use a corresponding waiting method upon your action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,i.kt)("h3",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-filechooser",title:"FileChooser"},"FileChooser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-set-input-files"},"page.setInputFiles(selector, files[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-set-input-files"},"frame.setInputFiles(selector, files[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-set-input-files"},"elementHandle.setInputFiles(files[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"focus-element"},"Focus element"),(0,i.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.focus('input#name');\n")),(0,i.kt)("h3",{id:"api-reference-7"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-focus"},"page.focus(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-frame#frame-focus"},"frame.focus(selector[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#element-handle-focus"},"elementHandle.focus()"))),(0,i.kt)("br",null))}c.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})}}]);