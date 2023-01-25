"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3980],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(t),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return t?n.createElement(d,p(p({ref:r},u),{},{components:t})):n.createElement(d,p({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={},p=void 0,l={unversionedId:"New Operators/Increment Operator",id:"New Operators/Increment Operator",title:"Increment Operator",description:"Pluto provides an easy way to increment variables using the prefixed ++ operator:",source:"@site/docs/New Operators/Increment Operator.md",sourceDirName:"New Operators",slug:"/New Operators/Increment Operator",permalink:"/docs/New Operators/Increment Operator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compound Operators",permalink:"/docs/New Operators/Compound Operators"},next:{title:"Null-Coalescing Operator",permalink:"/docs/New Operators/Null-Coalescing Operator"}},c={},i=[],u={toc:i};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto provides an easy way to increment variables using the prefixed ++ operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},"++x\n")),(0,o.kt)("p",null,"This is shorter than the equivalent Pluto code using compound operators:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},"x += 1\n")),(0,o.kt)("p",null,"And especially compared to the plain Lua approach:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},"x = x + 1\n")))}s.isMDXComponent=!0}}]);