"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36311],{1552:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(86106),c=i(79252);const r={},t="Interface: DictionaryDefinitionBase",o={id:"api/cspell/interfaces/DictionaryDefinitionBase",title:"Interface: DictionaryDefinitionBase",description:"Extended by",source:"@site/docs/api/cspell/interfaces/DictionaryDefinitionBase.md",sourceDirName:"api/cspell/interfaces",slug:"/api/cspell/interfaces/DictionaryDefinitionBase",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionBase",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell/interfaces/DictionaryDefinitionBase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: DictionaryDefinitionAugmented",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionAugmented"},next:{title:"Interface: DictionaryDefinitionCustom",permalink:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionCustom"}},l={},d=[{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"description?",id:"description",level:3},{value:"Source",id:"source",level:4},{value:"name",id:"name",level:3},{value:"Source",id:"source-1",level:4},{value:"noSuggest?",id:"nosuggest",level:3},{value:"Source",id:"source-2",level:4},{value:"repMap?",id:"repmap",level:3},{value:"Source",id:"source-3",level:4},{value:"type?",id:"type",level:3},{value:"Default",id:"default",level:4},{value:"Source",id:"source-4",level:4},{value:"useCompounds?",id:"usecompounds",level:3},{value:"Source",id:"source-5",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interface-dictionarydefinitionbase",children:"Interface: DictionaryDefinitionBase"}),"\n",(0,s.jsx)(n.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionAlternate",children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionAlternate"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell/interfaces/DictionaryDefinitionPreferred",children:(0,s.jsx)(n.code,{children:"DictionaryDefinitionPreferred"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"description"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Optional description of the contents / purpose of the dictionary."}),"\n",(0,s.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:20"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is the name of a dictionary."}),"\n",(0,s.jsx)(n.p,{children:"Name Format:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must contain at least 1 number or letter."}),"\n",(0,s.jsx)(n.li,{children:"Spaces are allowed."}),"\n",(0,s.jsx)(n.li,{children:"Leading and trailing space will be removed."}),"\n",(0,s.jsx)(n.li,{children:"Names ARE case-sensitive."}),"\n",(0,s.jsxs)(n.li,{children:["Must not contain ",(0,s.jsx)(n.code,{children:"*"}),", ",(0,s.jsx)(n.code,{children:"!"}),", ",(0,s.jsx)(n.code,{children:";"}),", ",(0,s.jsx)(n.code,{children:","}),", ",(0,s.jsx)(n.code,{children:"{"}),", ",(0,s.jsx)(n.code,{children:"}"}),", ",(0,s.jsx)(n.code,{children:"["}),", ",(0,s.jsx)(n.code,{children:"]"}),", ",(0,s.jsx)(n.code,{children:"~"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:16"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nosuggest",children:"noSuggest?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"noSuggest"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Indicate that suggestions should not come from this dictionary.\nWords in this dictionary are considered correct, but will not be\nused when making spell correction suggestions."}),"\n",(0,s.jsx)(n.p,{children:"Note: if a word is suggested by another dictionary, but found in\nthis dictionary, it will be removed from the set of\npossible suggestions."}),"\n",(0,s.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:34"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"repmap",children:"repMap?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"repMap"}),": ",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell/type-aliases/ReplaceMap",children:(0,s.jsx)(n.code,{children:"ReplaceMap"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Replacement pairs."}),"\n",(0,s.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:22"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.a,{href:"/docsV2/docs/api/cspell/type-aliases/DictionaryFileTypes",children:(0,s.jsx)(n.code,{children:"DictionaryFileTypes"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Type of file:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"S - single word per line,"}),"\n",(0,s.jsx)(n.li,{children:"W - each line can contain one or more words separated by space,"}),"\n",(0,s.jsx)(n.li,{children:"C - each line is treated like code (Camel Case is allowed)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Default is S."}),"\n",(0,s.jsx)(n.p,{children:"C is the slowest to load due to the need to split each line based upon code splitting rules."}),"\n",(0,s.jsxs)(n.p,{children:["Note: this settings does not apply to inline dictionaries or ",(0,s.jsx)(n.code,{children:".trie"})," files."]}),"\n",(0,s.jsx)(n.h4,{id:"default",children:"Default"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'"S"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:49"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"usecompounds",children:"useCompounds?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"useCompounds"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use Compounds."}),"\n",(0,s.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:"cspell-types/dist/DictionaryDefinition.d.ts:24"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},79252:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(7378);const c={},r=s.createContext(c);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);