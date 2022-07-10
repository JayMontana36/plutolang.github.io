"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Pluto?","href":"/docs/Introduction","docId":"Introduction"},{"type":"link","label":"Installation","href":"/docs/Installation","docId":"Installation"},{"type":"category","label":"New Syntax","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Continue Statement","href":"/docs/New Syntax/Continue Statement","docId":"New Syntax/Continue Statement"},{"type":"link","label":"Lambda Expressions","href":"/docs/New Syntax/Lambda Expressions","docId":"New Syntax/Lambda Expressions"},{"type":"link","label":"Switch Statement","href":"/docs/New Syntax/Switch Statement","docId":"New Syntax/Switch Statement"},{"type":"link","label":"Ternary Expressions","href":"/docs/New Syntax/Ternary Expressions","docId":"New Syntax/Ternary Expressions"}],"href":"/docs/category/new-syntax"},{"type":"category","label":"New Operators","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Alternative Operators","href":"/docs/New Operators/Alternative Operators","docId":"New Operators/Alternative Operators"},{"type":"link","label":"Compound Operators","href":"/docs/New Operators/Compound Operators","docId":"New Operators/Compound Operators"}],"href":"/docs/category/new-operators"},{"type":"category","label":"Optimizations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"For Loops","href":"/docs/Optimizations/For Loops","docId":"Optimizations/For Loops"},{"type":"link","label":"Table Length","href":"/docs/Optimizations/Table Length","docId":"Optimizations/Table Length"}],"href":"/docs/category/optimizations"},{"type":"category","label":"Backwards Compatibility","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Compatibility Mode","href":"/docs/Backwards Compatibility/Compatibility Mode","docId":"Backwards Compatibility/Compatibility Mode"},{"type":"link","label":"Incompatibilities","href":"/docs/Backwards Compatibility/Incompatibilities","docId":"Backwards Compatibility/Incompatibilities"}],"href":"/docs/category/backwards-compatibility"}]},"docs":{"Backwards Compatibility/Compatibility Mode":{"id":"Backwards Compatibility/Compatibility Mode","title":"Compatibility Mode","description":"Compatibility Mode in Pluto will prefix all of the new keywords with pluto_ to prevent conflicts with any existing identifiers.","sidebar":"tutorialSidebar"},"Backwards Compatibility/Incompatibilities":{"id":"Backwards Compatibility/Incompatibilities","title":"Incompatibilities","description":"How compatible with Lua is Pluto?","sidebar":"tutorialSidebar"},"Installation":{"id":"Installation","title":"Installation","description":"Getting Started","sidebar":"tutorialSidebar"},"Introduction":{"id":"Introduction","title":"What is Pluto?","description":"Pluto is a fork of the Lua 5.4 programming language. Lua is designed to be a small, fast, and embeddable language. It\'s used very often in games and resource-restricted regions. Lua bites a bullet by needing to stay small though, it lacks general-purpose features. This strain on the language makes it difficult to produce complex scripts at an accelerated rate. It takes more time to implement alternatives for missing syntax, or writing your own manual functions to split strings.","sidebar":"tutorialSidebar"},"New Operators/Alternative Operators":{"id":"New Operators/Alternative Operators","title":"Alternative Operators","description":"Pluto implements alternative operators, which are aliases for other operators.","sidebar":"tutorialSidebar"},"New Operators/Compound Operators":{"id":"New Operators/Compound Operators","title":"Compound Operators","description":"Pluto implements a plethora of compound operators, which are actually faster than their Lua counterparts.","sidebar":"tutorialSidebar"},"New Syntax/Continue Statement":{"id":"New Syntax/Continue Statement","title":"Continue Statement","description":"Continue statements are meant to be used in loops, like break. They skip the current iteration of the loop, and they\'ll skip any code necessary to do so.","sidebar":"tutorialSidebar"},"New Syntax/Lambda Expressions":{"id":"New Syntax/Lambda Expressions","title":"Lambda Expressions","description":"Lambda expressions are shorthand function objects for evaluating quick expressions. Take this code:","sidebar":"tutorialSidebar"},"New Syntax/Switch Statement":{"id":"New Syntax/Switch Statement","title":"Switch Statement","description":"The switch statement consists of the following new keywords:","sidebar":"tutorialSidebar"},"New Syntax/Ternary Expressions":{"id":"New Syntax/Ternary Expressions","title":"Ternary Expressions","description":"Ternary expressions behave identical as to how they would in C. They introduce no new keywords.","sidebar":"tutorialSidebar"},"Optimizations/For Loops":{"id":"Optimizations/For Loops","title":"For Loops","description":"The pairs and ipairs functions are optimized by Pluto in several complex ways. On a consistent basis, pairs & ipairs loops are 3.5x faster than their Lua counterparts.","sidebar":"tutorialSidebar"},"Optimizations/Table Length":{"id":"Optimizations/Table Length","title":"Table Length","description":"Pluto will cache the length of a table when you request it for the first time. This cache is refreshed whenever you make an edit to the table. It\'s still advisable to localize this value though, since looking through the cache and the virtual machine is expensive compared to looking up a local.","sidebar":"tutorialSidebar"}}}')}}]);