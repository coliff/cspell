"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12614],{16297:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var c=n(86106),l=n(79252);const t={},i="Interface: TextDocument",r={id:"api/cspell-lib/interfaces/TextDocument",title:"Interface: TextDocument",description:"A simple text document. Not to be implemented. The document keeps the content",source:"@site/docs/api/cspell-lib/interfaces/TextDocument.md",sourceDirName:"api/cspell-lib/interfaces",slug:"/api/cspell-lib/interfaces/TextDocument",permalink:"/docsV2/docs/api/cspell-lib/interfaces/TextDocument",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/TextDocument.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: SuggestionsForWordResult",permalink:"/docsV2/docs/api/cspell-lib/interfaces/SuggestionsForWordResult"},next:{title:"Interface: TextDocumentLine",permalink:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"languageId",id:"languageid",level:3},{value:"Source",id:"source",level:4},{value:"locale?",id:"locale",level:3},{value:"Source",id:"source-1",level:4},{value:"text",id:"text",level:3},{value:"Source",id:"source-2",level:4},{value:"uri",id:"uri",level:3},{value:"Source",id:"source-3",level:4},{value:"version",id:"version",level:3},{value:"Source",id:"source-4",level:4},{value:"Methods",id:"methods",level:2},{value:"getLine()",id:"getline",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-5",level:4},{value:"getLines()",id:"getlines",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-6",level:4},{value:"lineAt()",id:"lineat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-7",level:4},{value:"offsetAt()",id:"offsetat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Source",id:"source-8",level:4},{value:"positionAt()",id:"positionat",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Source",id:"source-9",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"interface-textdocument",children:"Interface: TextDocument"}),"\n",(0,c.jsx)(s.p,{children:"A simple text document. Not to be implemented. The document keeps the content\nas string."}),"\n",(0,c.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(s.h3,{id:"languageid",children:"languageId"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"languageId"}),": ",(0,c.jsx)(s.code,{children:"string"})," | ",(0,c.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"The identifier of the language associated with this document."}),"\n",(0,c.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L65",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:65"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"locale",children:"locale?"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"optional"})," ",(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"locale"}),": ",(0,c.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"The natural language locale."}),"\n",(0,c.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L79",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:79"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"text",children:"text"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"text"}),": ",(0,c.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"the raw Document Text"}),"\n",(0,c.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L74",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:74"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"uri",children:"uri"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"uri"}),": ",(0,c.jsx)(s.code,{children:"Uri"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["The associated URI for this document. Most documents have the ",(0,c.jsx)(s.strong,{children:"file"}),"-scheme, indicating that they\nrepresent files on disk. However, some documents may have other schemes indicating that they are not\navailable on disk."]}),"\n",(0,c.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L61",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:61"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"version",children:"version"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"readonly"})," ",(0,c.jsx)(s.strong,{children:"version"}),": ",(0,c.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"The version number of this document (it will increase after each\nchange, including undo/redo)."}),"\n",(0,c.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L70",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:70"})}),"\n",(0,c.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(s.h3,{id:"getline",children:"getLine()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"getLine"}),"(",(0,c.jsx)(s.code,{children:"lineNum"}),"): ",(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["\u2022 ",(0,c.jsx)(s.strong,{children:"lineNum"}),": ",(0,c.jsx)(s.code,{children:"number"})]}),"\n",(0,c.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})})}),"\n",(0,c.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L84",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:84"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"getlines",children:"getLines()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"getLines"}),"(): ",(0,c.jsx)(s.code,{children:"Iterable"})," <",(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})}),">"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Iterable"})," <",(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})}),">"]}),"\n",(0,c.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L85",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:85"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"lineat",children:"lineAt()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"lineAt"}),"(",(0,c.jsx)(s.code,{children:"offset"}),"): ",(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["\u2022 ",(0,c.jsx)(s.strong,{children:"offset"}),": ",(0,c.jsx)(s.code,{children:"number"})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/TextDocumentLine",children:(0,c.jsx)(s.code,{children:"TextDocumentLine"})})}),"\n",(0,c.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L83",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:83"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"offsetat",children:"offsetAt()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"offsetAt"}),"(",(0,c.jsx)(s.code,{children:"position"}),"): ",(0,c.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["\u2022 ",(0,c.jsx)(s.strong,{children:"position"}),": ",(0,c.jsx)(s.code,{children:"Position"})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"number"})}),"\n",(0,c.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L82",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:82"})}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"positionat",children:"positionAt()"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"positionAt"}),"(",(0,c.jsx)(s.code,{children:"offset"}),"): ",(0,c.jsx)(s.code,{children:"Position"})]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,c.jsxs)(s.p,{children:["\u2022 ",(0,c.jsx)(s.strong,{children:"offset"}),": ",(0,c.jsx)(s.code,{children:"number"})]}),"\n",(0,c.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"Position"})}),"\n",(0,c.jsx)(s.h4,{id:"source-9",children:"Source"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://github.com/streetsidesoftware/cspell/blob/27ce75ff01c367e8457388896a9ddcb9a7fab57d/packages/cspell-lib/src/lib/Models/TextDocument.ts#L81",children:"packages/cspell-lib/src/lib/Models/TextDocument.ts:81"})})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},79252:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var c=n(7378);const l={},t=c.createContext(l);function i(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);