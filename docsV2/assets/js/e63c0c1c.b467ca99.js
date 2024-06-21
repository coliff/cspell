"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19379],{94996:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(86106),o=t(79252);const i={},a="Type alias: SuggestionCostMapDef",l={id:"api/cspell/type-aliases/SuggestionCostMapDef",title:"Type alias: SuggestionCostMapDef",description:"SuggestionCostMapDef: CostMapDefReplace \\| CostMapDefInsDel \\| CostMapDefSwap",source:"@site/docs/api/cspell/type-aliases/SuggestionCostMapDef.md",sourceDirName:"api/cspell/type-aliases",slug:"/api/cspell/type-aliases/SuggestionCostMapDef",permalink:"/docsV2/docs/api/cspell/type-aliases/SuggestionCostMapDef",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell/type-aliases/SuggestionCostMapDef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type alias: SpellingErrorEmitter()",permalink:"/docsV2/docs/api/cspell/type-aliases/SpellingErrorEmitter"},next:{title:"Type alias: SuggestionCostsDefs",permalink:"/docsV2/docs/api/cspell/type-aliases/SuggestionCostsDefs"}},r={},c=[{value:"Source",id:"source",level:2}];function p(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"type-alias-suggestioncostmapdef",children:"Type alias: SuggestionCostMapDef"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"SuggestionCostMapDef"}),": ",(0,n.jsx)(s.code,{children:"CostMapDefReplace"})," | ",(0,n.jsx)(s.code,{children:"CostMapDefInsDel"})," | ",(0,n.jsx)(s.code,{children:"CostMapDefSwap"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"A WeightedMapDef enables setting weights for edits between related characters and substrings."}),"\n",(0,n.jsxs)(s.p,{children:["Multiple groups can be defined using a ",(0,n.jsx)(s.code,{children:"|"}),".\nA multi-character substring is defined using ",(0,n.jsx)(s.code,{children:"()"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"For example, in some languages, some letters sound alike."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"  map: 'sc(sh)(sch)(ss)|t(tt)' # two groups.\n  replace: 50    # Make it 1/2 the cost of a normal edit to replace a `t` with `tt`.\n"})}),"\n",(0,n.jsx)(s.p,{children:"The following could be used to make inserting, removing, or replacing vowels cheaper."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"  map: 'aeiouy'\n  insDel: 50     # Make it is cheaper to insert or delete a vowel.\n  replace: 45    # It is even cheaper to replace one with another.\n"})}),"\n",(0,n.jsx)(s.p,{children:"Note: the default edit distance is 100."}),"\n",(0,n.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"cspell-types/dist/suggestionCostsDef.d.ts:23"})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},79252:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(7378);const o={},i=n.createContext(o);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);