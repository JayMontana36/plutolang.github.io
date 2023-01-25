"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},i=void 0,o={unversionedId:"Runtime Environment/Table Functions",id:"Runtime Environment/Table Functions",title:"Table Functions",description:"New functions for the table type, implemented by Pluto.",source:"@site/docs/Runtime Environment/Table Functions.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Table Functions",permalink:"/docs/Runtime Environment/Table Functions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OS Functions",permalink:"/docs/Runtime Environment/OS Functions"},next:{title:"String Functions",permalink:"/docs/Runtime Environment/String Functions"}},s={},u=[{value:"table.freeze",id:"tablefreeze",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"table.isfrozen",id:"tableisfrozen",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"table.contains",id:"tablecontains",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"New functions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," type, implemented by Pluto."),(0,a.kt)("h3",{id:"tablefreeze"},"table.freeze"),(0,a.kt)("p",null,"Freezes a table to prevent modification."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The table to freeze")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The original table, but frozen."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local t = table.freeze({...})\n-- `table.freeze(t)` on another line will work fine too.\nt.key = "value" -- Fails.\n')),(0,a.kt)("h3",{id:"tableisfrozen"},"table.isfrozen"),(0,a.kt)("p",null,"Checks if this table is frozen."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The table to check.")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"A boolean."),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},"local t = {}\ntable.freeze(t)\nassert(table.isfrozen(t) == true)\n")),(0,a.kt)("h3",{id:"tablecontains"},"table.contains"),(0,a.kt)("p",null,"Checks if this table contains an element."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The table to check."),(0,a.kt)("li",{parentName:"ol"},"The element to check for.")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"The index if found, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},"local t = { 1, 2, 3, 4, 5, 6 }\nlocal r = table.contains(t, 4) --\x3e 4\n")))}p.isMDXComponent=!0}}]);