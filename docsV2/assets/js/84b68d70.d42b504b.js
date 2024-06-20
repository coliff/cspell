"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86906],{83308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var r=i(86106),s=i(79252);const d={},o="Interface: DictionaryDefinitionInlineWords",l={id:"api/cspell/interfaces/DictionaryDefinitionInlineWords",title:"Interface: DictionaryDefinitionInlineWords",description:"Extends",source:"@site/docs/api/cspell/interfaces/DictionaryDefinitionInlineWords.md",sourceDirName:"api/cspell/interfaces",slug:"/api/cspell/interfaces/DictionaryDefinitionInlineWords",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionInlineWords",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell/interfaces/DictionaryDefinitionInlineWords.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: DictionaryDefinitionInlineIgnoreWords",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionInlineIgnoreWords"},next:{title:"Interface: DictionaryDefinitionPreferred",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionPreferred"}},c={},t=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"description?",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Source",id:"source",level:4},{value:"flagWords?",id:"flagwords",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Source",id:"source-1",level:4},{value:"ignoreWords?",id:"ignorewords",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Source",id:"source-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Source",id:"source-3",level:4},{value:"repMap?",id:"repmap",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Source",id:"source-4",level:4},{value:"suggestWords?",id:"suggestwords",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Source",id:"source-5",level:4},{value:"useCompounds?",id:"usecompounds",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Source",id:"source-6",level:4},{value:"words",id:"words",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Source",id:"source-7",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-dictionarydefinitioninlinewords",children:"Interface: DictionaryDefinitionInlineWords"}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase"}),".",(0,r.jsx)(n.code,{children:"Required"}),"<",(0,r.jsx)(n.code,{children:"Pick"}),"<",(0,r.jsx)(n.code,{children:"InlineDictionary"}),", ",(0,r.jsx)(n.code,{children:'"words"'}),">>"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"description"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Optional description of the contents / purpose of the dictionary."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.description"})}),"\n",(0,r.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:20"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"flagwords",children:"flagWords?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"flagWords"}),": ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["List of words to always be considered incorrect. Words found in ",(0,r.jsx)(n.code,{children:"flagWords"})," override ",(0,r.jsx)(n.code,{children:"words"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Format of ",(0,r.jsx)(n.code,{children:"flagWords"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["single word entry - ",(0,r.jsx)(n.code,{children:"word"})]}),"\n",(0,r.jsxs)(n.li,{children:["with suggestions - ",(0,r.jsx)(n.code,{children:"word:suggestion"})," or ",(0,r.jsx)(n.code,{children:"word->suggestion, suggestions"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'"flagWords": [\n  "color: colour",\n  "incase: in case, encase",\n  "canot->cannot",\n  "cancelled->canceled"\n]\n'})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.flagWords"})}),"\n",(0,r.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/InlineDictionary.d.ts:23"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ignorewords",children:"ignoreWords?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"ignoreWords"}),": ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["List of words to be ignored. An ignored word will not show up as an error, even if it is\nalso in the ",(0,r.jsx)(n.code,{children:"flagWords"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.ignoreWords"})}),"\n",(0,r.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/InlineDictionary.d.ts:28"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This is the name of a dictionary."}),"\n",(0,r.jsx)(n.p,{children:"Name Format:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Must contain at least 1 number or letter."}),"\n",(0,r.jsx)(n.li,{children:"Spaces are allowed."}),"\n",(0,r.jsx)(n.li,{children:"Leading and trailing space will be removed."}),"\n",(0,r.jsx)(n.li,{children:"Names ARE case-sensitive."}),"\n",(0,r.jsxs)(n.li,{children:["Must not contain ",(0,r.jsx)(n.code,{children:"*"}),", ",(0,r.jsx)(n.code,{children:"!"}),", ",(0,r.jsx)(n.code,{children:";"}),", ",(0,r.jsx)(n.code,{children:","}),", ",(0,r.jsx)(n.code,{children:"{"}),", ",(0,r.jsx)(n.code,{children:"}"}),", ",(0,r.jsx)(n.code,{children:"["}),", ",(0,r.jsx)(n.code,{children:"]"}),", ",(0,r.jsx)(n.code,{children:"~"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.name"})}),"\n",(0,r.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:16"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"repmap",children:"repMap?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"repMap"}),": ",(0,r.jsx)(n.a,{href:"/docsV2/docs/api/cspell/type-aliases/ReplaceMap",children:(0,r.jsx)(n.code,{children:"ReplaceMap"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Replacement pairs."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.repMap"})}),"\n",(0,r.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:22"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"suggestwords",children:"suggestWords?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"suggestWords"}),": ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A list of suggested replacements for words.\nSuggested words provide a way to make preferred suggestions on word replacements.\nTo hint at a preferred change, but not to require it."}),"\n",(0,r.jsxs)(n.p,{children:["Format of ",(0,r.jsx)(n.code,{children:"suggestWords"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Single suggestion (possible auto fix)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"word: suggestion"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"word->suggestion"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Multiple suggestions (not auto fixable)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"word: first, second, third"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"word->first, second, third"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.suggestWords"})}),"\n",(0,r.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/InlineDictionary.d.ts:42"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"usecompounds",children:"useCompounds?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"useCompounds"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Use Compounds."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.useCompounds"})}),"\n",(0,r.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:24"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"words",children:"words"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"words"}),": ",(0,r.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DictionaryDefinitionInlineBase.words"})}),"\n",(0,r.jsx)(n.h4,{id:"source-7",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:96"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79252:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(7378);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);