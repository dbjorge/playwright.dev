"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[19462],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73811:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(67294),n=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))o.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},73824:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(67294),n=r(54939),i=r(5882),l=r(86010),o="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&m(e,r,t[r]);return e};function f(e){var t,r,n;const{lazy:s,block:u,defaultValue:h,values:d,groupId:m,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:v.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),b=(0,i.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:null!=(n=null!=h?h:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,i.UB)(),[O,T]=(0,a.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,r=x.indexOf(t),a=y[r].value;a!==O&&(P(t),T(a),null!=m&&N(m,a))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},y.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:C,onFocus:j,onClick:j},r),i={className:(0,l.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":O===e})},c(n,p(i))),null!=t?t:e);var n,i}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,n.Z)();return a.createElement(f,g({key:String(t)},e))}},61729:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var a=r(3905),n=r(73824),i=r(73811),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&h(e,r,t[r]);return e};const m={id:"trace-viewer",title:"Trace Viewer"},g=void 0,f={unversionedId:"trace-viewer",id:"version-1.20/trace-viewer",title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces locally or in your browser on trace.playwright.dev.",source:"@site/versioned_docs/version-1.20/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/docs/1.20/trace-viewer",tags:[],version:"1.20",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"docs",previous:{title:"Inspector",permalink:"/docs/1.20/inspector"},next:{title:"Test Generator",permalink:"/docs/1.20/codegen"}},v={},y=[{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Viewing the trace",id:"viewing-the-trace",level:2},{value:"Actions",id:"actions",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Viewing remote Traces",id:"viewing-remote-traces",level:2},{value:"Using trace.playwright.dev",id:"using-traceplaywrightdev",level:2},{value:"Viewing local traces",id:"viewing-local-traces",level:3},{value:"Remote traces",id:"remote-traces",level:3}],b={toc:y};function w(e){var t,r=e,{components:l}=r,h=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),h),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces ",(0,a.kt)("a",d({parentName:"p"},{href:"#viewing-the-trace"}),"locally")," or in your browser on ",(0,a.kt)("a",d({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,a.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,a.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#recording-a-trace"}),"Recording a trace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#viewing-the-trace"}),"Viewing the trace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#actions"}),"Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#screenshots"}),"Screenshots")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#snapshots"}),"Snapshots")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#viewing-remote-traces"}),"Viewing remote Traces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#using-traceplaywrightdevhttpstraceplaywrightdev"}),"Using [trace.playwright.dev](https://trace.playwright.dev)"))),(0,a.kt)("h2",d({},{id:"recording-a-trace"}),"Recording a trace"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"trace: 'on-first-retry'")," option in the test configuration file. This will produce ",(0,a.kt)("inlineCode",{parentName:"p"},"trace.zip")," file for each test that was retried."),(0,a.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Library",value:"library"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  retries: 1,\n  use: {\n    trace: 'on-first-retry',\n  },\n};\nexport default config;\n"))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  retries: 1,\n  use: {\n    trace: 'on-first-retry',\n  },\n};\n\nmodule.exports = config;\n"))),(0,a.kt)(i.Z,{value:"library",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-library"}),"const browser = await chromium.launch();\nconst context = await browser.newContext();\n\n// Start tracing before creating / navigating a page.\nawait context.tracing.start({ screenshots: true, snapshots: true });\n\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\n\n// Stop tracing and export it into a zip archive.\nawait context.tracing.stop({ path: 'trace.zip' });\n")))),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"trace: 'retain-on-failure'")," if you do not enable retries but still want traces for failed tests."),(0,a.kt)("p",null,"Available options to record a trace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record a trace."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'on'")," - Record a trace for each test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record a trace for each test, but remove it from successful test runs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'on-first-retry'")," - Record a trace only when retrying a test for the first time.")),(0,a.kt)("p",null,"If you are not using Playwright Test, use the ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/1.20/api/class-browsercontext#browser-context-tracing"}),"browserContext.tracing")," API instead."),(0,a.kt)("h2",d({},{id:"viewing-the-trace"}),"Viewing the trace"),(0,a.kt)("p",null,"You can open the saved trace using Playwright CLI or in your browser on ",(0,a.kt)("a",d({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,a.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright show-trace trace.zip\n")),(0,a.kt)("h2",d({},{id:"actions"}),"Actions"),(0,a.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,a.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,a.kt)("p",null,"Selecting each action reveals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"action snapshots,"),(0,a.kt)("li",{parentName:"ul"},"action log,"),(0,a.kt)("li",{parentName:"ul"},"source code location,"),(0,a.kt)("li",{parentName:"ul"},"network log for this action")),(0,a.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,a.kt)("h2",d({},{id:"screenshots"}),"Screenshots"),(0,a.kt)("p",null,"When tracing with the ",(0,a.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,a.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,a.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,a.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,a.kt)("p",null,"That helps locating the action of interest very quickly."),(0,a.kt)("h2",d({},{id:"snapshots"}),"Snapshots"),(0,a.kt)("p",null,"When tracing with the ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Before"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A snapshot at the time action is called.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Action"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"After"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"A snapshot after the action.")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,a.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,a.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."),(0,a.kt)("h2",d({},{id:"viewing-remote-traces"}),"Viewing remote Traces"),(0,a.kt)("p",null,"You can open remote traces using it's URL. They could be generated in a CI run and makes it easy to view the remote trace without having to manually download the file."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright show-trace https://example.com/trace.zip\n")),(0,a.kt)("h2",d({},{id:"using-traceplaywrightdev"}),"Using ",(0,a.kt)("a",d({parentName:"h2"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev")),(0,a.kt)("p",null,(0,a.kt)("a",d({parentName:"p"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev")," is a statically hosted variant of the Trace Viewer. "),(0,a.kt)("h3",d({},{id:"viewing-local-traces"}),"Viewing local traces"),(0,a.kt)("p",null,"When navigating to ",(0,a.kt)("a",d({parentName:"p"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev"),", you can upload trace files using drag and drop."),(0,a.kt)("h3",d({},{id:"remote-traces"}),"Remote traces"),(0,a.kt)("p",null,"You can also pass the URL of your uploaded trace (e.g. inside your CI) from some accessible storage as a parameter. CORS (Cross-Origin Resource Sharing) rules might apply."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-txt"}),"https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip\n")))}w.isMDXComponent=!0}}]);