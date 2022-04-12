"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3144],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(67294),n=a(54939),l=a(5882),o=a(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))h.call(t,a)&&m(e,a,t[a]);return e};function b(e){var t,a,n;const{lazy:s,block:c,defaultValue:d,values:h,groupId:m,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=h?h:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,l.lx)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(n=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.UB)(),[j,P]=(0,r.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=m){const e=y[m];null!=e&&e!==j&&f.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=O.indexOf(t),r=f[a].value;r!==j&&(T(t),P(r),null!=m&&N(m,r))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},f.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>O.push(e),onKeyDown:C,onFocus:D,onClick:D},a),l={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":j===e})},u(n,p(l))),null!=t?t:e);var n,l}))),s?(0,r.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function v(e){const t=(0,n.Z)();return r.createElement(b,g({key:String(t)},e))}},92744:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return f}});var r=a(3905),n=a(73824),l=a(73811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&d(e,a,t[a]);return e};const m={id:"debug",title:"Debugging tools"},g=void 0,b={unversionedId:"debug",id:"version-1.18/debug",title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.18/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/java/docs/1.18/debug",tags:[],version:"1.18",frontMatter:{id:"debug",title:"Debugging tools"},sidebar:"version-1.18/docs",previous:{title:"Test Generator",permalink:"/java/docs/1.18/codegen"},next:{title:"Release notes",permalink:"/java/docs/1.18/release-notes"}},v={},f=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"Playwright Trace Viewer",id:"playwright-trace-viewer",level:2},{value:"Run in headed mode",id:"run-in-headed-mode",level:2},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"Run in Debug Mode",id:"run-in-debug-mode",level:2},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",level:2},{value:"Visual Studio Code debugger (Node.js)",id:"visual-studio-code-debugger-nodejs",level:2},{value:"Use launch config",id:"use-launch-config",level:3},{value:"Use the JavaScript Debug Terminal",id:"use-the-javascript-debug-terminal",level:3},{value:"Verbose API logs",id:"verbose-api-logs",level:2}],k={toc:f};function w(e){var t,a=e,{components:o}=a,d=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=h(h({},k),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#playwright-inspector"}),"Playwright Inspector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#playwright-trace-viewer"}),"Playwright Trace Viewer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#run-in-headed-mode"}),"Run in headed mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.js)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",h({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),(0,r.kt)("h2",h({},{id:"playwright-inspector"}),"Playwright Inspector"),(0,r.kt)("p",null,(0,r.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/inspector"}),"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,r.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,r.kt)("h2",h({},{id:"playwright-trace-viewer"}),"Playwright Trace Viewer"),(0,r.kt)("p",null,(0,r.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/trace-viewer"}),"Playwright Trace Viewer")," is a GUI tool that helps troubleshooting test runs in a post-mortem manner."),(0,r.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,r.kt)("h2",h({},{id:"run-in-headed-mode"}),"Run in headed mode"),(0,r.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,r.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-java"}),"chromium.launch(new BrowserType.LaunchOptions() // or firefox, webkit\n  .setHeadless(false)\n  .setSlowMo(100));\n")),(0,r.kt)("h2",h({},{id:"browser-developer-tools"}),"Browser Developer Tools"),(0,r.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,r.kt)("strong",{parentName:"li"},"find element selectors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,r.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/verification#console-logs"}),"read logs via API"),")"),(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,r.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,r.kt)("p",null,"Using a ",(0,r.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/api/class-page#page-pause"}),"Page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,r.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/inspector"}),"Playwright Inspector")," to help with debugging."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-java"}),"chromium.launch(new BrowserType.LaunchOptions().setDevtools(true));\n")),(0,r.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,r.kt)("h2",h({},{id:"run-in-debug-mode"}),"Run in Debug Mode"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," will open ",(0,r.kt)("a",h({parentName:"p"},{href:"/java/docs/1.18/inspector"}),"Playwright Inspector"),"."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,r.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,r.kt)("a",h({parentName:"li"},{href:"/java/docs/1.18/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=console mvn test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'$env:PWDEBUG="console"\nmvn test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=console\nmvn test\n")))),(0,r.kt)("h2",h({},{id:"selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console"),(0,r.kt)("p",null,"When running in Debug Mode with ",(0,r.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run with ",(0,r.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,r.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,r.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,r.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,r.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.locator(selector)"),": Highlight the first occurrence of the locator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,r.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,r.kt)("h2",h({},{id:"visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.js)"),(0,r.kt)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),(0,r.kt)("h3",h({},{id:"use-launch-config"}),"Use launch config"),(0,r.kt)("p",null,"Setup ",(0,r.kt)("a",h({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),(0,r.kt)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),(0,r.kt)("h3",h({},{id:"use-the-javascript-debug-terminal"}),"Use the JavaScript Debug Terminal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("a",h({parentName:"li"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal"}),"JavaScript Debug Terminal")),(0,r.kt)("li",{parentName:"ol"},"Set a breakpoint in VS Code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),(0,r.kt)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),(0,r.kt)("h2",h({},{id:"verbose-api-logs"}),"Verbose API logs"),(0,r.kt)("p",null,"Playwright supports verbose logging with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,r.kt)(n.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:api mvn test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),'$env:DEBUG="pw:api"\nmvn test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-batch"}),"set DEBUG=pw:api\nmvn test\n")))))}w.isMDXComponent=!0}}]);