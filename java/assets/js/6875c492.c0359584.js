"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8610],{31284:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(67294),l=a(86010),n=a(53930),i=a(39130),o="sidebar_a9qW",s="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",u="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(33084);function d({sidebar:e}){return 0===e.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},e.title),r.createElement("ul",{className:m},e.items.map((e=>r.createElement("li",{key:e.permalink,className:c},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))))))}var b=Object.defineProperty,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function _(e){const t=e,{sidebar:a,toc:i,children:o}=t,s=((e,t)=>{var a={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&v.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,((e,t)=>{for(var a in t||(t={}))f.call(t,a)&&E(e,a,t[a]);if(h)for(var a of h(t))v.call(t,a)&&E(e,a,t[a]);return e})({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(d,{sidebar:a})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),i&&r.createElement("div",{className:"col col--2"},i))))}},87242:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),l=a(33084),n=a(22750);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},56345:function(e,t,a){a.d(t,{Z:function(){return U}});var r=a(67294),l=a(86010),n=a(3905),i=a(33084),o=a(39130),s=a(25026),m=a(5882),c=a(67023),u=a(82217),g=a(71662),p="blogPostTitle_rzP5",d="blogPostData_Zg1s",b="blogPostDetailsFull_h6_j",h=a(18901),f="image_o0gy",v=Object.defineProperty,E=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function y(e){return e.href?r.createElement(o.Z,((e,t)=>{for(var a in t||(t={}))_.call(t,a)&&P(e,a,t[a]);if(E)for(var a of E(t))N.call(t,a)&&P(e,a,t[a]);return e})({},e)):r.createElement(r.Fragment,null,e.children)}function Z({author:e}){const{name:t,title:a,url:l,imageURL:n,email:i}=e,o=l||i&&`mailto:${i}`||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},n&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(y,{href:o},r.createElement("img",{className:f,src:n,alt:t}))),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(y,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}var w="authorCol_FlmR",k="imageOnlyAuthorRow_trpF",O="imageOnlyAuthorCol_S2np",T=Object.defineProperty,I=Object.defineProperties,j=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,R=(e,t,a)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&R(e,a,t[a]);if(x)for(var a of x(t))M.call(t,a)&&R(e,a,t[a]);return e};function C({authors:e,assets:t}){if(0===e.length)return null;const a=e.every((({name:e})=>!e));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",a?k:"row")},e.map(((e,n)=>{var i,o,s;return r.createElement("div",{className:(0,l.Z)(!a&&"col col--6",a?O:w),key:n},r.createElement(Z,{author:(o=A({},e),s={imageURL:null!=(i=t.authorsImageUrls[n])?i:e.imageURL},I(o,j(s)))}))})))}function U(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:f}=(0,s.C)(),{children:v,frontMatter:E,assets:_,metadata:N,truncated:P,isBlogPostPage:y=!1}=e,{date:Z,formattedDate:w,permalink:k,tags:O,readingTime:T,title:I,editUrl:j,authors:x}=N,L=null!=(t=_.image)?t:E.image,M=!y&&P,R=O.length>0,A=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(A,{className:p,itemProp:"headline"},y?I:r.createElement(o.Z,{itemProp:"url",to:k},I)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:Z,itemProp:"datePublished"},w),void 0!==T&&r.createElement(r.Fragment,null," \xb7 ",a(T))),r.createElement(C,{authors:x,assets:_})),L&&r.createElement("meta",{itemProp:"image",content:f(L,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:u.Z},v)),(R||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[b]:y})},R&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":M})},r.createElement(h.Z,{tags:O})),y&&j&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:j})),M&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":R})},r.createElement(o.Z,{to:N.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},79040:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(67294),l=a(39130),n=a(31284),i=a(56345),o=a(33084),s=a(5882),m=a(87242);function c(e){const{metadata:t,items:a,sidebar:c,listMetadata:u}=e,{allTagsPath:g,name:p,count:d}=t,b=function(){const{selectMessage:e}=(0,s.c2)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(d),tagName:p});return r.createElement(n.Z,{title:h,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:g},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>r.createElement(i.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:!0},r.createElement(e,null)))),r.createElement(m.Z,{metadata:u}))}},71662:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),l=a(33084),n=a(86010),i="iconEdit_dcUD",o=Object.defineProperty,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function g(e){var t=e,{className:a}=t,l=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(t,["className"]);return r.createElement("svg",((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&u(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(i,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var p=a(5882);function d({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:p.kM.common.editThisPage},r.createElement(g,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},22750:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294),l=a(39130);function n(e){const{permalink:t,title:a,subLabel:n}=e;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}},5818:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l=a(86010),n=a(39130),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){const{permalink:t,name:a,count:m}=e;return r.createElement(n.Z,{href:t,className:(0,l.Z)(i,{[o]:!m,[s]:m})},a,m&&r.createElement("span",null,m))}},18901:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l=a(86010),n=a(33084),i=a(5818),o="tags_XVD_",s="tag_JSN8";function m({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:s},r.createElement(i.Z,{name:e,permalink:t}))))))}}}]);