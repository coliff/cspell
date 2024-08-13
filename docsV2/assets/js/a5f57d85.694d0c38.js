"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32834],{98440:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(86106),t=n(79252);const i={},c="Interface: ParsedText",d={id:"api/cspell-types/interfaces/ParsedText",title:"Interface: ParsedText",description:"Properties",source:"@site/docs/api/cspell-types/interfaces/ParsedText.md",sourceDirName:"api/cspell-types/interfaces",slug:"/api/cspell-types/interfaces/ParsedText",permalink:"/docsV2/docs/api/cspell-types/interfaces/ParsedText",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-types/interfaces/ParsedText.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: ParseResult",permalink:"/docsV2/docs/api/cspell-types/interfaces/ParseResult"},next:{title:"Interface: Parser",permalink:"/docsV2/docs/api/cspell-types/interfaces/Parser"}},l={},a=[{value:"Properties",id:"properties",level:2},{value:"delegate?",id:"delegate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"map?",id:"map",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"range",id:"range",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rawText?",id:"rawtext",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"scope?",id:"scope",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"text",id:"text",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"interface-parsedtext",children:"Interface: ParsedText"})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"delegate",children:"delegate?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.strong,{children:"delegate"}),": ",(0,r.jsx)(s.code,{children:"DelegateInfo"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Used to delegate parsing the contents of ",(0,r.jsx)(s.code,{children:"text"})," to another parser."]}),"\n",(0,r.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L51",children:"Parser/index.ts:51"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"map",children:"map?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.strong,{children:"map"}),": ",(0,r.jsx)(s.code,{children:"SourceMap"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The source map is used to support text transformations."}),"\n",(0,r.jsx)(s.p,{children:"See: SourceMap"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L46",children:"Parser/index.ts:46"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"range",children:"range"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"range"}),": ",(0,r.jsx)(s.code,{children:"Range"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"start and end offsets of the text"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L34",children:"Parser/index.ts:34"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"rawtext",children:"rawText?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.strong,{children:"rawText"}),": ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The raw text before it has been transformed"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L30",children:"Parser/index.ts:30"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"scope",children:"scope?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.strong,{children:"scope"}),": ",(0,r.jsx)(s.code,{children:"Scope"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The Scope annotation for a segment of text.\nUsed by the spell checker to apply spell checking options\nbased upon the value of the scope."}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L40",children:"Parser/index.ts:40"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"text",children:"text"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"text"}),": ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The text extracted and possibly transformed"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/146e02401e02efe6854c568e3c4c8645fcfb988e/packages/cspell-types/src/Parser/index.ts#L26",children:"Parser/index.ts:26"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},79252:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>d});var r=n(7378);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);