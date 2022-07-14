"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||n;return r?i.createElement(m,l(l({ref:t},d),{},{components:r})):i.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(7462),a=(r(7294),r(3905));const n={},l=void 0,o={unversionedId:"Standard Library/IO Functions",id:"Standard Library/IO Functions",title:"IO Functions",description:"io.isdir",source:"@site/docs/Standard Library/IO Functions.md",sourceDirName:"Standard Library",slug:"/Standard Library/IO Functions",permalink:"/docs/Standard Library/IO Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base Functions",permalink:"/docs/Standard Library/Base Functions"},next:{title:"OS Functions",permalink:"/docs/Standard Library/OS Functions"}},s={},u=[{value:"io.isdir",id:"ioisdir",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"io.isfile",id:"ioisfile",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"io.exists",id:"ioexists",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"io.copyto",id:"iocopyto",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"io.filesize",id:"iofilesize",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"io.makedir",id:"iomakedir",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"io.absolute",id:"ioabsolute",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"ioisdir"},"io.isdir"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A string path.")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A boolean indicating if the path led toward a directory."),(0,a.kt)("h3",{id:"ioisfile"},"io.isfile"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A string path.")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"A boolean indicating if the path led towards a file."),(0,a.kt)("h3",{id:"ioexists"},"io.exists"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A string path.")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"A boolean indicating if the path led towards an existing file or directory."),(0,a.kt)("h3",{id:"iocopyto"},"io.copyto"),(0,a.kt)("p",null,"Copy a file to another file, creating a new file if needed."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A path towards the file to copy."),(0,a.kt)("li",{parentName:"ol"},"A path towards the file to copy into.")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"A boolean indicating if the file was successfully copied."),(0,a.kt)("h3",{id:"iofilesize"},"io.filesize"),(0,a.kt)("p",null,"Fetch the size of a file in kilobytes."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The string path to the file.")),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"A double."),(0,a.kt)("h3",{id:"iomakedir"},"io.makedir"),(0,a.kt)("p",null,"Create a directory."),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The path for the new directory.")),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"A boolean indicating if the directory was successfully created."),(0,a.kt)("h3",{id:"ioabsolute"},"io.absolute"),(0,a.kt)("p",null,"Convert a relative path into an absolute one."),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The relative string path.")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,"A string representing the new file path."))}p.isMDXComponent=!0}}]);