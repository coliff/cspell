"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9163],{88214:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=i(86106),r=i(79252);const c={},o="Interface: DictionaryDefinitionInlineIgnoreWords",d={id:"api/cspell-types/interfaces/DictionaryDefinitionInlineIgnoreWords",title:"Interface: DictionaryDefinitionInlineIgnoreWords",description:"Extends",source:"@site/docs/api/cspell-types/interfaces/DictionaryDefinitionInlineIgnoreWords.md",sourceDirName:"api/cspell-types/interfaces",slug:"/api/cspell-types/interfaces/DictionaryDefinitionInlineIgnoreWords",permalink:"/docsV2/docs/api/cspell-types/interfaces/DictionaryDefinitionInlineIgnoreWords",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/DictionaryDefinitionInlineIgnoreWords.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: DictionaryDefinitionInlineFlagWords",permalink:"/docsV2/docs/api/cspell-types/interfaces/DictionaryDefinitionInlineFlagWords"},next:{title:"Interface: DictionaryDefinitionInlineWords",permalink:"/docsV2/docs/api/cspell-types/interfaces/DictionaryDefinitionInlineWords"}},l={},t=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"description?",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Source",id:"source",level:4},{value:"flagWords?",id:"flagwords",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Source",id:"source-1",level:4},{value:"ignoreWords",id:"ignorewords",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Source",id:"source-3",level:4},{value:"repMap?",id:"repmap",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Source",id:"source-4",level:4},{value:"suggestWords?",id:"suggestwords",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Source",id:"source-5",level:4},{value:"useCompounds?",id:"usecompounds",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Source",id:"source-6",level:4},{value:"words?",id:"words",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Source",id:"source-7",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interface-dictionarydefinitioninlineignorewords",children:"Interface: DictionaryDefinitionInlineIgnoreWords"}),"\n",(0,s.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase"}),".",(0,s.jsx)(n.code,{children:"Required"}),"<",(0,s.jsx)(n.code,{children:"Pick"}),"<",(0,s.jsx)(n.code,{children:"InlineDictionary"}),", ",(0,s.jsx)(n.code,{children:'"ignoreWords"'}),">>"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"description"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optional description of the contents / purpose of the dictionary."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.description"})}),"\n",(0,s.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/DictionaryDefinition.ts#L29",children:"DictionaryDefinition.ts:29"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"flagwords",children:"flagWords?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"flagWords"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["List of words to always be considered incorrect. Words found in ",(0,s.jsx)(n.code,{children:"flagWords"})," override ",(0,s.jsx)(n.code,{children:"words"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Format of ",(0,s.jsx)(n.code,{children:"flagWords"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["single word entry - ",(0,s.jsx)(n.code,{children:"word"})]}),"\n",(0,s.jsxs)(n.li,{children:["with suggestions - ",(0,s.jsx)(n.code,{children:"word:suggestion"})," or ",(0,s.jsx)(n.code,{children:"word->suggestion, suggestions"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'"flagWords": [\n  "color: colour",\n  "incase: in case, encase",\n  "canot->cannot",\n  "cancelled->canceled"\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.flagWords"})}),"\n",(0,s.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/InlineDictionary.ts#L25",children:"InlineDictionary.ts:25"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ignorewords",children:"ignoreWords"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ignoreWords"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.ignoreWords"})}),"\n",(0,s.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/DictionaryDefinition.ts#L124",children:"DictionaryDefinition.ts:124"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is the name of a dictionary."}),"\n",(0,s.jsx)(n.p,{children:"Name Format:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must contain at least 1 number or letter."}),"\n",(0,s.jsx)(n.li,{children:"Spaces are allowed."}),"\n",(0,s.jsx)(n.li,{children:"Leading and trailing space will be removed."}),"\n",(0,s.jsx)(n.li,{children:"Names ARE case-sensitive."}),"\n",(0,s.jsxs)(n.li,{children:["Must not contain ",(0,s.jsx)(n.code,{children:"*"}),", ",(0,s.jsx)(n.code,{children:"!"}),", ",(0,s.jsx)(n.code,{children:";"}),", ",(0,s.jsx)(n.code,{children:","}),", ",(0,s.jsx)(n.code,{children:"{"}),", ",(0,s.jsx)(n.code,{children:"}"}),", ",(0,s.jsx)(n.code,{children:"["}),", ",(0,s.jsx)(n.code,{children:"]"}),", ",(0,s.jsx)(n.code,{children:"~"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.name"})}),"\n",(0,s.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/DictionaryDefinition.ts#L25",children:"DictionaryDefinition.ts:25"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"repmap",children:"repMap?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"repMap"}),": ",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/ReplaceMap",children:(0,s.jsx)(n.code,{children:"ReplaceMap"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Replacement pairs."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.repMap"})}),"\n",(0,s.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/DictionaryDefinition.ts#L31",children:"DictionaryDefinition.ts:31"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"suggestwords",children:"suggestWords?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"suggestWords"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A list of suggested replacements for words.\nSuggested words provide a way to make preferred suggestions on word replacements.\nTo hint at a preferred change, but not to require it."}),"\n",(0,s.jsxs)(n.p,{children:["Format of ",(0,s.jsx)(n.code,{children:"suggestWords"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Single suggestion (possible auto fix)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"word: suggestion"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"word->suggestion"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Multiple suggestions (not auto fixable)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"word: first, second, third"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"word->first, second, third"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.suggestWords"})}),"\n",(0,s.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/InlineDictionary.ts#L46",children:"InlineDictionary.ts:46"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"usecompounds",children:"useCompounds?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"useCompounds"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use Compounds."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.useCompounds"})}),"\n",(0,s.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/DictionaryDefinition.ts#L33",children:"DictionaryDefinition.ts:33"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"words",children:"words?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"words"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"List of words to be considered correct."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.words"})}),"\n",(0,s.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/streetsidesoftware/cspell/blob/c10b9f547b7186a4928000635afa5d8fc676c73b/packages/cspell-types/src/InlineDictionary.ts#L5",children:"InlineDictionary.ts:5"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},79252:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var s=i(7378);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);