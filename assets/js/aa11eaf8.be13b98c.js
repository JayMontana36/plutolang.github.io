"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1576],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const n={},i=void 0,s={unversionedId:"Standard Library/String Functions",id:"Standard Library/String Functions",title:"String Functions",description:"New functions for the string type, implemented by Pluto.",source:"@site/docs/Standard Library/String Functions.md",sourceDirName:"Standard Library",slug:"/Standard Library/String Functions",permalink:"/docs/Standard Library/String Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OS Functions",permalink:"/docs/Standard Library/OS Functions"},next:{title:"Table Functions",permalink:"/docs/Standard Library/Table Functions"}},o={},p=[{value:"New Functions",id:"new-functions",level:2},{value:"string.split",id:"stringsplit",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4},{value:"string.lfind",id:"stringlfind",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example",id:"example-1",level:4},{value:"string.rfind",id:"stringrfind",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example-2",level:4},{value:"string.strip",id:"stringstrip",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example-3",level:4},{value:"string.lstrip",id:"stringlstrip",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-4",level:4},{value:"string.rstrip",id:"stringrstrip",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Example",id:"example-5",level:4},{value:"string.isascii",id:"stringisascii",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Example",id:"example-6",level:4},{value:"string.islower",id:"stringislower",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Example",id:"example-7",level:4},{value:"string.isalpha",id:"stringisalpha",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Example",id:"example-8",level:4},{value:"string.isupper",id:"stringisupper",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Example",id:"example-9",level:4},{value:"string.isalnum",id:"stringisalnum",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Example",id:"example-10",level:4},{value:"string.contains",id:"stringcontains",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Example",id:"example-11",level:4},{value:"string.casefold",id:"stringcasefold",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Example",id:"example-12",level:4},{value:"string.partition",id:"stringpartition",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Example",id:"example-13",level:4},{value:"string.endswith",id:"stringendswith",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Example",id:"example-14",level:4},{value:"string.startswith",id:"stringstartswith",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Example",id:"example-15",level:4},{value:"string.find_last_of",id:"stringfind_last_of",level:3},{value:"Parameters",id:"parameters-16",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Example",id:"example-16",level:4},{value:"string.find_first_of",id:"stringfind_first_of",level:3},{value:"Parameters",id:"parameters-17",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Example",id:"example-17",level:4},{value:"string.iswhitespace",id:"stringiswhitespace",level:3},{value:"Paramaters",id:"paramaters",level:4},{value:"Returns",id:"returns-18",level:4},{value:"Example",id:"example-18",level:4},{value:"string.find_last_not_of",id:"stringfind_last_not_of",level:3},{value:"Parameters",id:"parameters-18",level:4},{value:"Returns",id:"returns-19",level:4},{value:"Example",id:"example-19",level:4},{value:"string.find_first_not_of",id:"stringfind_first_not_of",level:3},{value:"Parameters",id:"parameters-19",level:4},{value:"Returns",id:"returns-20",level:4},{value:"Example",id:"example-20",level:4},{value:"Modified Functions",id:"modified-functions",level:2},{value:"string.upper",id:"stringupper",level:3},{value:"Example",id:"example-21",level:4},{value:"string.lower",id:"stringlower",level:3},{value:"Example",id:"example-22",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"New functions for the ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," type, implemented by Pluto."),(0,l.kt)("h2",{id:"new-functions"},"New Functions"),(0,l.kt)("h3",{id:"stringsplit"},"string.split"),(0,l.kt)("p",null,"Splits a string by a separator."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to split."),(0,l.kt)("li",{parentName:"ol"},"The separator to split a string by. This can be any string.")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,"A table."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Splitting a string by a single character."',title:'"Splitting',a:!0,string:!0,by:!0,single:!0,'character."':!0},'local s = "hello world, how is everyone doing?"\nlocal r = string.split(s, " ")\n--[[\n    The value of \'r\':\n    {\n        "hello",\n        "world,",\n        "how",\n        "is",\n        "everyone",\n        "doing?"\n    }\n--]]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Splitting a string by a substring."',title:'"Splitting',a:!0,string:!0,by:!0,'substring."':!0},'local s = "helloHALLOWORLDworld,HALLOWORLDhowHALLOWORLDisHALLOWORLDeveryoneHALLOWORLDdoing?"\nlocal r = string.split(s, "HALLOWORLD")\n--[[\n    The value of \'r\':\n    {\n        "hello",\n        "world,",\n        "how",\n        "is",\n        "everyone",\n        "doing?"\n    }\n--]]\n')),(0,l.kt)("h3",{id:"stringlfind"},"string.lfind"),(0,l.kt)("p",null,"Returns the index of where a substring starts. Begins searching at the left side of the string."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"The substring to search for.")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"An integer for the index of the substring, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if the substring was not found."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "hello world"\nlocal r = string.lfind(s, "world") --\x3e 7\n')),(0,l.kt)("h3",{id:"stringrfind"},"string.rfind"),(0,l.kt)("p",null,"Returns the index of where a substring starts. Begins searching at the right side of the string."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"The substring to search for.")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"An integer for the index of the substring, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if the substring was not found."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "hello world"\nlocal r = string.rfind(s, "world") --\x3e 7\n')),(0,l.kt)("h3",{id:"stringstrip"},"string.strip"),(0,l.kt)("p",null,"Strips characters from both ends of a string."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to strip."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to strip.")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"The new string."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "{}|hello world{|}"\nlocal r = string.strip(s, "{}|") --\x3e "hello world"\n')),(0,l.kt)("h3",{id:"stringlstrip"},"string.lstrip"),(0,l.kt)("p",null,"Strips characters from the left side of a string."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to strip."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to strip.")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"The new string."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "<{}|hello world>{|}"\nlocal r = string.strip(s, "{}|") --\x3e "<hello world>{|}"\n')),(0,l.kt)("h3",{id:"stringrstrip"},"string.rstrip"),(0,l.kt)("p",null,"Strips characters from the right side of a string."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to strip."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to strip.")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,"The new string."),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "<{}|hello world>{|}"\nlocal r = string.strip(s, "{}|") --\x3e "<{}|<hello world>"\n')),(0,l.kt)("h3",{id:"stringisascii"},"string.isascii"),(0,l.kt)("p",null,"Checks if a string is entirely composed of ASCII characters."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,"A Boolean."),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "HELLOWORLD123"\nlocal r = string.isascii(r) --\x3e true\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This would exclude any multi-byte characters, like emojis.")),(0,l.kt)("h3",{id:"stringislower"},"string.islower"),(0,l.kt)("p",null,"Checks if a string is entirely composed of lowercase characters."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,"A Boolean."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "helloworld"\nlocal r = string.islower(r) --\x3e true\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Whitespace characters are not lowercase characters.")),(0,l.kt)("h3",{id:"stringisalpha"},"string.isalpha"),(0,l.kt)("p",null,"Checks if a string is entirely composed of alphabetic characters."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,"A Boolean."),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "HELLOWORLD"\nlocal r = string.isalpha(r) --\x3e true\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Whitespace characters are not alphabetic characters.")),(0,l.kt)("h3",{id:"stringisupper"},"string.isupper"),(0,l.kt)("p",null,"Checks if a string is entirely composed of uppercase characters."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,"A Boolean."),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "HELLOWORLD"\nlocal r = string.isupper(r) --\x3e true\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Whitespace characters are not uppercase characters.")),(0,l.kt)("h3",{id:"stringisalnum"},"string.isalnum"),(0,l.kt)("p",null,"Checks if a string is entirely composed of alphanumeric characters."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,"A Boolean."),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "HELLOWORLD123"\nlocal r = string.isalnum(r) --\x3e true\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Whitespace characters are not alphanumeric characters.")),(0,l.kt)("h3",{id:"stringcontains"},"string.contains"),(0,l.kt)("p",null,"Checks if a string contains a substring."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check."),(0,l.kt)("li",{parentName:"ol"},"The substring to check for.")),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,"A boolean."),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "hello world"\nlocal r = string.contains(s, "worl") --\x3e true\n')),(0,l.kt)("h3",{id:"stringcasefold"},"string.casefold"),(0,l.kt)("p",null,"Compares two strings, agnostic of any capitalization."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The first string to compare."),(0,l.kt)("li",{parentName:"ol"},"The second string to compare.")),(0,l.kt)("h4",{id:"returns-12"},"Returns"),(0,l.kt)("p",null,"A boolean."),(0,l.kt)("h4",{id:"example-12"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s1 = "hello world"\nlocal s2 = "heLLo WoRlD"\nlocal r1 = string.casefold(s1, s2) --\x3e true\n')),(0,l.kt)("h3",{id:"stringpartition"},"string.partition"),(0,l.kt)("p",null,"Splits a string once, on the first occurance of a separator."),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to partition."),(0,l.kt)("li",{parentName:"ol"},"The separator to partition the string by."),(0,l.kt)("li",{parentName:"ol"},"A boolean specifying whether to search from the right. By default, this is false, which starts at the left.")),(0,l.kt)("h4",{id:"returns-13"},"Returns"),(0,l.kt)("p",null,"Two strings: A substring for all the content before the first occurance of ",(0,l.kt)("inlineCode",{parentName:"p"},"sep"),", and another substring for all the content afterwards."),(0,l.kt)("h4",{id:"example-13"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="A Basic Partition"',title:'"A',Basic:!0,'Partition"':!0},'local s = "hello world, what\'s up?"\nlocal before, after = string.partition(s, " ")\n\nassert(before == "hello")\nassert(after == "world, what\'s up?")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Partioning From The Right"',title:'"Partioning',From:!0,The:!0,'Right"':!0},'local s = "hello world, what\'s up?"\nlocal before, after = string.partition(s, " ", true)\n\nassert(before == "hello world, what\'s")\nassert(after == "up?")\n')),(0,l.kt)("h3",{id:"stringendswith"},"string.endswith"),(0,l.kt)("p",null,"Checks if a string ends with a suffix."),(0,l.kt)("h4",{id:"parameters-14"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check."),(0,l.kt)("li",{parentName:"ol"},"The substring suffix to check for.")),(0,l.kt)("h4",{id:"returns-14"},"Returns"),(0,l.kt)("p",null,"A boolean."),(0,l.kt)("h4",{id:"example-14"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "hello world"\nlocal r = string.endswith(s, "world") --\x3e true\n')),(0,l.kt)("h3",{id:"stringstartswith"},"string.startswith"),(0,l.kt)("p",null,"Checks if a string starts with a prefix."),(0,l.kt)("h4",{id:"parameters-15"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check."),(0,l.kt)("li",{parentName:"ol"},"The substring prefix to check for.")),(0,l.kt)("h4",{id:"returns-15"},"Returns"),(0,l.kt)("p",null,"A boolean."),(0,l.kt)("h4",{id:"example-15"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "hello world"\nlocal r = string.startswith(s, "hello") --\x3e true\n')),(0,l.kt)("h3",{id:"stringfind_last_of"},"string.find_last_of"),(0,l.kt)("p",null,"Searches the string for the last character that matches any of the characters specified in its arguments."),(0,l.kt)("h4",{id:"parameters-16"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to match.")),(0,l.kt)("h4",{id:"returns-16"},"Returns"),(0,l.kt)("p",null,"An integer, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if nothing is matched."),(0,l.kt)("h4",{id:"example-16"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'-- This will find the last occurance of any listed characters.\nlocal s = "he$$o ?$! world$"\nlocal r = string.find_last_of(s, "!$") --\x3e 16\n')),(0,l.kt)("h3",{id:"stringfind_first_of"},"string.find_first_of"),(0,l.kt)("p",null,"Searches the string for the first character that matches any of the characters specified in its arguments."),(0,l.kt)("h4",{id:"parameters-17"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to match.")),(0,l.kt)("h4",{id:"returns-17"},"Returns"),(0,l.kt)("p",null,"An integer, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if nothing is matched."),(0,l.kt)("h4",{id:"example-17"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'-- This will find the first occurance of any listed characters.\nlocal s = "he$$o ?$! world$"\nlocal r = string.find_first_of(s, "!$") --\x3e 3\n')),(0,l.kt)("h3",{id:"stringiswhitespace"},"string.iswhitespace"),(0,l.kt)("p",null,"Checks if this string is entirely composed of whitespace characters."),(0,l.kt)("h4",{id:"paramaters"},"Paramaters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to check.")),(0,l.kt)("h4",{id:"returns-18"},"Returns"),(0,l.kt)("p",null,"A boolean."),(0,l.kt)("h4",{id:"example-18"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'local s = "    \\t \\v \\f     \\t\\t\\t\\t"\nlocal r = string.iswhitespace(s) --\x3e true\n')),(0,l.kt)("h3",{id:"stringfind_last_not_of"},"string.find_last_not_of"),(0,l.kt)("p",null,"Searches the string for the last character that does not match any of the characters specified in its arguments."),(0,l.kt)("h4",{id:"parameters-18"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to match.")),(0,l.kt)("h4",{id:"returns-19"},"Returns"),(0,l.kt)("p",null,"An integer, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if nothing is matched."),(0,l.kt)("h4",{id:"example-19"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'-- This will find the last non-occurance of any listed characters.\nlocal s = "he$$o ?$! world$"\nlocal r = string.find_last_not_of(s, "!$") --\x3e 15\n')),(0,l.kt)("h3",{id:"stringfind_first_not_of"},"string.find_first_not_of"),(0,l.kt)("p",null,"Searches the string for the first character that does not match any of the characters specified in its arguments."),(0,l.kt)("h4",{id:"parameters-19"},"Parameters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The string to search."),(0,l.kt)("li",{parentName:"ol"},"A string of characters to match.")),(0,l.kt)("h4",{id:"returns-20"},"Returns"),(0,l.kt)("p",null,"An integer, or ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," if nothing is matched."),(0,l.kt)("h4",{id:"example-20"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Basic Usage"',title:'"Basic','Usage"':!0},'-- This will find the first non-occurance of any listed characters.\nlocal s = "he$$o ?$! world$"\nlocal r = string.find_first_not_of(s, "!$") --\x3e 1\n')),(0,l.kt)("h2",{id:"modified-functions"},"Modified Functions"),(0,l.kt)("h3",{id:"stringupper"},"string.upper"),(0,l.kt)("p",null,"This function now takes a second parameter that specifies which index to capitalize."),(0,l.kt)("h4",{id:"example-21"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Basic Usage"',showLineNumbers:!0,title:'"Basic','Usage"':!0},'local s = "hello"\nassert(s:upper(1) == "Hello")\n')),(0,l.kt)("h3",{id:"stringlower"},"string.lower"),(0,l.kt)("p",null,"This function now takes a second parameter that specifies which index to make lowercase."),(0,l.kt)("h4",{id:"example-22"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'showLineNumbers title="Basic Usage"',showLineNumbers:!0,title:'"Basic','Usage"':!0},'local s = "HELLO"\nassert(s:lower(1) == "hELLO")\n')))}c.isMDXComponent=!0}}]);