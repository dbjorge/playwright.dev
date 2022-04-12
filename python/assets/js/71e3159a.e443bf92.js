"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7547],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,y=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(y,s(s({ref:t},u),{},{components:a})):n.createElement(y,s({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),l=a(54939),r=a(5882),s=a(86010),i="tabItem_LplD",o=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&y(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&y(e,a,t[a]);return e};function f(e){var t,a,l;const{lazy:o,block:p,defaultValue:d,values:m,groupId:y,className:f}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,r.lx)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:null!=(l=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:N}=(0,r.UB)(),[T,w]=(0,n.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:_}=(0,r.o5)();if(null!=y){const e=x[y];null!=e&&e!==T&&b.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==T&&(_(t),w(n),null!=y&&N(y,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break}case"ArrowLeft":{const a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=v({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>I.push(e),onKeyDown:P,onFocus:O,onClick:O},a),r={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":T===e})},c(l,u(r))),null!=t?t:e);var l,r}))),o?(0,n.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,l.Z)();return n.createElement(f,v({key:String(t)},e))}},74211:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var n=a(3905),l=a(73824),r=a(73811),s=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&d(e,a,t[a]);return e};const y={id:"assertions",title:"Assertions"},v=void 0,f={unversionedId:"assertions",id:"version-1.19/assertions",title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.19/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/python/docs/1.19/assertions",tags:[],version:"1.19",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.19/docs",previous:{title:"API testing",permalink:"/python/docs/1.19/api-testing"},next:{title:"Authentication",permalink:"/python/docs/1.19/auth"}},h={},b=[{value:"Text content",id:"text-content",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Inner text",id:"inner-text",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Attribute value",id:"attribute-value",level:2},{value:"Checkbox state",id:"checkbox-state",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"JS expression",id:"js-expression",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Inner HTML",id:"inner-html",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Visibility",id:"visibility",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Enabled state",id:"enabled-state",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Custom assertions",id:"custom-assertions",level:2}],k={toc:b};function g(e){var t,a=e,{components:s}=a,d=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),i(t,o({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#text-content"}),"Text content")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#inner-text"}),"Inner text")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#js-expression"}),"JS expression")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#visibility"}),"Visibility")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),(0,n.kt)("h2",m({},{id:"text-content"}),"Text content"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'content = page.text_content("nav:first-child")\nassert content == "home"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'content = await page.text_content("nav:first-child")\nassert content == "home"\n')))),(0,n.kt)("h3",m({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-text-content"}),"page.text_content(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-text-content"}),"element_handle.text_content()"))),(0,n.kt)("h2",m({},{id:"inner-text"}),"Inner text"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'text = page.inner_text(".selected")\nassert text == "value"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'text = await page.inner_text(".selected")\nassert text == "value"\n')))),(0,n.kt)("h3",m({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-inner-text"}),"page.inner_text(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-inner-text"}),"element_handle.inner_text()"))),(0,n.kt)("h2",m({},{id:"attribute-value"}),"Attribute value"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'alt = page.get_attribute("input", "alt")\nassert alt == "Text"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'alt = await page.get_attribute("input", "alt")\nassert alt == "Text"\n')))),(0,n.kt)("h2",m({},{id:"checkbox-state"}),"Checkbox state"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'checked = page.is_checked("input")\nassert checked\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'checked = await page.is_checked("input")\nassert checked\n')))),(0,n.kt)("h3",m({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-is-checked"}),"page.is_checked(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-is-checked"}),"element_handle.is_checked()"))),(0,n.kt)("h2",m({},{id:"js-expression"}),"JS expression"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'content = page.locator("nav:first-child").text_content()\nassert content == "home"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'content = await page.locator("nav:first-child").text_content()\nassert content == "home"\n')))),(0,n.kt)("h3",m({},{id:"api-reference-3"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-eval-on-selector"}),"page.eval_on_selector(selector, expression, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-jshandle#js-handle-evaluate"}),"js_handle.evaluate(expression, **kwargs)"))),(0,n.kt)("h2",m({},{id:"inner-html"}),"Inner HTML"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'html = page.inner_html("div.result")\nassert html == "<p>Result</p>"\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'html = await page.inner_html("div.result")\nassert html == "<p>Result</p>"\n')))),(0,n.kt)("h3",m({},{id:"api-reference-4"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-inner-html"}),"page.inner_html(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-inner-html"}),"element_handle.inner_html()"))),(0,n.kt)("h2",m({},{id:"visibility"}),"Visibility"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'visible = page.is_visible("input")\nassert visible\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'visible = await page.is_visible("input")\nassert visible\n')))),(0,n.kt)("h3",m({},{id:"api-reference-5"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-is-visible"}),"page.is_visible(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-is-visible"}),"element_handle.is_visible()"))),(0,n.kt)("h2",m({},{id:"enabled-state"}),"Enabled state"),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'enabled = page.is_enabled("input")\nassert enabled\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),'enabled = await page.is_enabled("input")\nassert enabled\n')))),(0,n.kt)("h3",m({},{id:"api-reference-6"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-is-enabled"}),"page.is_enabled(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/python/docs/1.19/api/class-elementhandle#element-handle-is-enabled"}),"element_handle.is_enabled()"))),(0,n.kt)("h2",m({},{id:"custom-assertions"}),"Custom assertions"),(0,n.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = page.locator('li.selected').count()\nassert length == 3\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-py"}),"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nvalue = await page.locator('#search').input_value()\nassert value == 'query'\n\n# Assert computed style\nfont_size = await page.locator('div').evaluate('el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = await page.locator('li.selected').count()\nassert length == 3\n")))))}g.isMDXComponent=!0}}]);