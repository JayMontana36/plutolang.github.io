"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"New Syntax/Continue Statement",id:"New Syntax/Continue Statement",title:"Continue Statement",description:"Continue statements are meant to be used in loops, like break. They skip the current iteration of the loop, and they'll skip any code necessary to do so.",source:"@site/docs/New Syntax/Continue Statement.md",sourceDirName:"New Syntax",slug:"/New Syntax/Continue Statement",permalink:"/docs/New Syntax/Continue Statement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New Syntax",permalink:"/docs/category/new-syntax"},next:{title:"Lambda Expressions",permalink:"/docs/New Syntax/Lambda Expressions"}},p={},c=[{value:"Using compatibility mode?",id:"using-compatibility-mode",level:2},{value:"Interactive Example",id:"interactive-example",level:4}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Continue statements are meant to be used in loops, like ",(0,o.kt)("inlineCode",{parentName:"p"},"break"),". They skip the current iteration of the loop, and they'll skip any code necessary to do so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},"-- Print every number besides five.\nfor i = 1, 10 do\n    if i == 5 then\n        continue\n    end\n    print(i)\n    -- continue jumps here.\nend\n")),(0,o.kt)("p",null,"They introduce a new keyword, ",(0,o.kt)("inlineCode",{parentName:"p"},"continue"),". These cannot be used inside switch statements."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note, ",(0,o.kt)("inlineCode",{parentName:"p"},"continue")," will skip code. If any code within your loop will determine if the loop continues, make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"continue")," doesn't jump over it.")),(0,o.kt)("h2",{id:"using-compatibility-mode"},"Using compatibility mode?"),(0,o.kt)("p",null,"The keyword will be ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_continue"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"continue"),"."),(0,o.kt)("h4",{id:"interactive-example"},(0,o.kt)("a",{parentName:"h4",href:"https://plutolang.github.io/web/#code=--%20Print%20every%20number%20besides%20five.%0D%0Afor%20i%20%3D%201%2C%2010%20do%0D%0A%20%20%20%20if%20i%20%3D%3D%205%20then%0D%0A%20%20%20%20%20%20%20%20continue%0D%0A%20%20%20%20end%0D%0A%20%20%20%20print(i)%0D%0A%20%20%20%20--%20continue%20jumps%20here.%0D%0Aend"},"Interactive Example")))}s.isMDXComponent=!0}}]);