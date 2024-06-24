"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42983],{77552:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=n(86106),i=n(79252);const r={},c="Interface: DictionaryInformation",o={id:"api/cspell-types/interfaces/DictionaryInformation",title:"Interface: DictionaryInformation",description:"Use by dictionary authors to help improve the quality of suggestions",source:"@site/docs/api/cspell-types/interfaces/DictionaryInformation.md",sourceDirName:"api/cspell-types/interfaces",slug:"/api/cspell-types/interfaces/DictionaryInformation",permalink:"/docsV2/docs/api/cspell-types/interfaces/DictionaryInformation",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/DictionaryInformation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: DictionaryDefinitionPreferred",permalink:"/docsV2/docs/api/cspell-types/interfaces/DictionaryDefinitionPreferred"},next:{title:"Interface: EditCosts",permalink:"/docsV2/docs/api/cspell-types/interfaces/EditCosts"}},l={},a=[{value:"Properties",id:"properties",level:2},{value:"accents?",id:"accents",level:3},{value:"Source",id:"source",level:4},{value:"adjustments?",id:"adjustments",level:3},{value:"Source",id:"source-1",level:4},{value:"alphabet?",id:"alphabet",level:3},{value:"Default",id:"default",level:4},{value:"Source",id:"source-2",level:4},{value:"costs?",id:"costs",level:3},{value:"Source",id:"source-3",level:4},{value:"hunspellInformation?",id:"hunspellinformation",level:3},{value:"Source",id:"source-4",level:4},{value:"ignore?",id:"ignore",level:3},{value:"Source",id:"source-5",level:4},{value:"locale?",id:"locale",level:3},{value:"Source",id:"source-6",level:4},{value:"suggestionEditCosts?",id:"suggestioneditcosts",level:3},{value:"Source",id:"source-7",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"interface-dictionaryinformation",children:"Interface: DictionaryInformation"}),"\n",(0,t.jsx)(s.p,{children:"Use by dictionary authors to help improve the quality of suggestions\ngiven from the dictionary."}),"\n",(0,t.jsxs)(s.p,{children:["Added with ",(0,t.jsx)(s.code,{children:"v5.16.0"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"accents",children:"accents?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"accents"}),": ",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/interfaces/CharacterSetCosts",children:(0,t.jsx)(s.code,{children:"CharacterSetCosts"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The accent characters."}),"\n",(0,t.jsxs)(s.p,{children:["Default: ",(0,t.jsx)(s.code,{children:'"\\u0300-\\u0341"'})]}),"\n",(0,t.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L27",children:"DictionaryInformation.ts:27"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"adjustments",children:"adjustments?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"adjustments"}),": ",(0,t.jsx)(s.code,{children:"PatternAdjustment"}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"A collection of patterns to test against the suggested words.\nIf the word matches the pattern, then the penalty is applied."}),"\n",(0,t.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L49",children:"DictionaryInformation.ts:49"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"alphabet",children:"alphabet?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"alphabet"}),": ",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/interfaces/CharacterSetCosts",children:(0,t.jsx)(s.code,{children:"CharacterSetCosts"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The alphabet to use."}),"\n",(0,t.jsx)(s.h4,{id:"default",children:"Default"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'"a-zA-Z"\n'})}),"\n",(0,t.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L20",children:"DictionaryInformation.ts:20"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"costs",children:"costs?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"costs"}),": ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/interfaces/EditCosts",children:(0,t.jsx)(s.code,{children:"EditCosts"})})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Define edit costs."}),"\n",(0,t.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L32",children:"DictionaryInformation.ts:32"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"hunspellinformation",children:"hunspellInformation?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"hunspellInformation"}),": ",(0,t.jsx)(s.code,{children:"HunspellInformation"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Used by dictionary authors"}),"\n",(0,t.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L43",children:"DictionaryInformation.ts:43"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"ignore",children:"ignore?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"ignore"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"An optional set of characters that can possibly be removed from a word before\nchecking it."}),"\n",(0,t.jsx)(s.p,{children:"This is useful in languages like Arabic where Harakat accents are optional."}),"\n",(0,t.jsx)(s.p,{children:"Note: All matching characters are removed or none. Partial removal is not supported."}),"\n",(0,t.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L59",children:"DictionaryInformation.ts:59"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"locale",children:"locale?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"locale"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The locale of the dictionary.\nExample: ",(0,t.jsx)(s.code,{children:"nl,nl-be"})]}),"\n",(0,t.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L14",children:"DictionaryInformation.ts:14"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"suggestioneditcosts",children:"suggestionEditCosts?"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optional"})," ",(0,t.jsx)(s.strong,{children:"suggestionEditCosts"}),": ",(0,t.jsx)(s.a,{href:"/docsV2/docs/api/cspell-types/type-aliases/SuggestionCostsDefs",children:(0,t.jsx)(s.code,{children:"SuggestionCostsDefs"})})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Used in making suggestions. The lower the value, the more likely the suggestion\nwill be near the top of the suggestion list."}),"\n",(0,t.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/87a184442e5566189b3b53480cf855afa793f837/packages/cspell-types/src/DictionaryInformation.ts#L38",children:"DictionaryInformation.ts:38"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79252:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(7378);const i={},r=t.createContext(i);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);