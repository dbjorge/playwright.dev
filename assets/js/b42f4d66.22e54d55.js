"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2790],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",u="tabItemActive_2DSg";var p=37,l=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,d=e.groupId,h=e.className,f=s(),m=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(r),w=k[0],v=k[1],x=a.Children.toArray(e.children),b=[];if(null!=d){var y=m[d];null!=y&&y!==w&&c.some((function(e){return e.value===y}))&&v(y)}var N=function(e){var t=e.currentTarget,n=b.indexOf(t),a=c[n].value;v(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,s,i,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,i=window,o=i.innerHeight,p=i.innerWidth,n>=0&&s<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},q=function(e){var t,n;switch(e.keyCode){case l:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case p:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:q,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"api-testing",title:"API testing"}),o=void 0,u={unversionedId:"api-testing",id:"api-testing",isDocsHomePage:!1,title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/docs/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/docs/next/api-testing",version:"current",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/library"},next:{title:"Assertions",permalink:"/docs/next/assertions"}},p=[{value:"Writing API Test",id:"writing-api-test",children:[]},{value:"Preparing server state via API calls",id:"preparing-server-state-via-api-calls",children:[]},{value:"Checking server state after running user actions",id:"checking-server-state-after-running-user-actions",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],l={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can be used to get access to the ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," API of your application."),(0,s.kt)("p",null,"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few example where it may come in handy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test your server API.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Prepare server side state before visting the web application in a test.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Validate server side post-conditions after running some actions in the browser All of that could be achived via ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext")," methods.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#writing-api-test"},"Writing API Test"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#preparing-server-state-via-api-calls"},"Preparing server state via API calls"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#checking-server-state-after-running-user-actions"},"Checking server state after running user actions"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"#reuse-authentication-state"},"Reuse authentication state")))),(0,s.kt)("h2",{id:"writing-api-test"},"Writing API Test"),(0,s.kt)("p",null,"The Playwright ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,s.kt)("p",null,"The following example demonstrates how to use Plawright to test programmatic creation of issues via ",(0,s.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest"},"GitHub API"),". The test suite will do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create a new repo before all tests"),(0,s.kt)("li",{parentName:"ul"},"create a few issues and validate the server state"),(0,s.kt)("li",{parentName:"ul"},"after all tests finish delete the repo")),(0,s.kt)("p",null,"Creating and deleting a repo:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { request } = require('@playwright/test');\n...\nconst context = await request.newContext();\nawait context.post('https://api.github.com/user/repos', {\n  headers: {\n    'Accept': 'application/vnd.github.v3+json',\n    // Add GitHub personal access token.\n    'Authorization': `token ${process.env.API_TOKEN}`,\n  },\n  data: {\n    name: 'test-repo-1'\n  }\n});\nconst response = await request.delete(`https://api.github.com/repos/${user}/test-repo-1`{\n  headers: {\n    'Accept': 'application/vnd.github.v3+json',\n    // Add GitHub personal access token.\n    'Authorization': `token ${process.env.API_TOKEN}`,\n  }\n});\n")),(0,s.kt)("p",null,"Playwright Test comes with a built in request fixture that can be used to simplify the code. Also since the authorizaztion token is going to be reused between tests it makes sense to configure it once for all tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test.use({\n  baseURL: 'https://api.github.com',\n  extraHTTPHeaders: {\n    'Accept': 'application/vnd.github.v3+json',\n    // Add authorization token to all requests.\n    'Authorization': 'token ' + token,\n  }\n});\n\nconst repo = 'test-repo-1';\n\n// The request object will use the context parameters above.\ntest.beforeAll(async ({ request }) => {\n  // Create new repository\n  const response = await request.post('/user/repos', {\n    data: {\n      name: repo\n    }\n  });\n  expect(response.ok()).toBeTruthy();\n});\n\ntest.afterAll(async ({ request }) => {\n  // Delete the repository\n  const response = await request.delete(`/repos/${user}/${repo}`);\n  expect(response.ok()).toBeTruthy();\n});\n")),(0,s.kt)("p",null,"Now we can add a couple tests that would create new issues in the repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('should create bug report', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${user}/${repo}/issues`, {\n    data: {\n      title: '[Bug] report 1',\n      body: 'Bug description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${user}/${repo}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Bug] report 1',\n    body: 'Bug description'\n  }));\n});\n\ntest('should create feature request', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${user}/${repo}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n      body: 'Feature description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${user}/${repo}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Feature] request 1',\n    body: 'Feature description'\n  }));\n});\n")),(0,s.kt)("h2",{id:"preparing-server-state-via-api-calls"},"Preparing server state via API calls"),(0,s.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('last created issue should be first in the list', async ({ page, request }) => {\n  const newIssue = await request.post(`/repos/${user}/${repo}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  await page.goto(`https://github.com/${user}/${repo}/issues`);\n  const text = await page.locator(`a[data-hovercard-type='issue']`).first().textContent()\n  expect('[Feature] request 1');\n});\n")),(0,s.kt)("h2",{id:"checking-server-state-after-running-user-actions"},"Checking server state after running user actions"),(0,s.kt)("p",null,"The following test creates a new issue via user interface in the browser and then uses checks if it was created by means of the server API:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('last created issue should be on server', async ({ page, request }) => {\n  await page.goto(`https://github.com/${user}/${repo}/issues`);\n  await page.click('text=New Issue');\n  await page.fill('[aria-label=\"Title\"]', 'Bug report 1');\n  await page.fill('[aria-label=\"Comment body\"]', 'Bug description');\n  await page.click('text=Submit new issue');\n  const issueId = page.url().substr(page.url().lastIndexOf('/'));\n\n  const newIssue = await request.get(`https://api.github.com/repos/${user}/${repo}/issues/${issueId}`);\n  expect(newIssue.ok()).toBeTruthy();\n  expect(newIssue).toEqual(expect.objectContaining({\n    title: 'Bug report 1'\n  }));\n});\n")),(0,s.kt)("h3",{id:"api-reference"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-playwright#playwright-request"},"playwright.request")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-request"},"browserContext.request")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-request"},"page.request")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequest#api-request-new-context"},"apiRequest.newContext([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext#api-request-context-delete"},"apiRequestContext.delete(url[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext#api-request-context-fetch"},"apiRequestContext.fetch(urlOrRequest[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext#api-request-context-get"},"apiRequestContext.get(url[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext#api-request-context-post"},"apiRequestContext.post(url[, options])"))),(0,s.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,s.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," Playwright provides ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext#api-request-context-storage-state"},"apiRequestContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,s.kt)("p",null,"Storage state is interchangable between ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext"),". You can use it e.g. to log in via API calls and then create a new context with retrived cookies. The following code snippet retrieves state from an authenticated ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"ApiRequestContext"},"ApiRequestContext")," and creates a new ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," with that state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const requestContext = await request.newContext({\n  httpCredentials: {\n    username: 'user',\n    password: 'passwd'\n  }\n});\nawait requestContext.get(`https://api.example.com/login`);\n// Save storage state into the file.\nawait requestContext.storageState({ path: 'state.json' });\n\n// Create a new context with the saved storage state.\nconst context = await browser.newContext({ storageState: 'state.json' });\n")),(0,s.kt)("h3",{id:"api-reference-1"},"API reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browser-new-context"},"browser.newContext([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext#api-request-context-storage-state"},"apiRequestContext.storageState([options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequest#api-request-new-context"},"apiRequest.newContext([options])"))))}c.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);