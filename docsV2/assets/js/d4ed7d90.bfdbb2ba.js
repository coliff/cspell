"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37186],{31666:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(86106),l=s(85782);const i={},t="Interface: Logger",c={id:"api/cspell-lib/interfaces/Logger",title:"Interface: Logger",description:"Properties",source:"@site/docs/api/cspell-lib/interfaces/Logger.md",sourceDirName:"api/cspell-lib/interfaces",slug:"/api/cspell-lib/interfaces/Logger",permalink:"/docsV2/docs/api/cspell-lib/interfaces/Logger",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/Logger.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: ~~LegacySettings~~",permalink:"/docsV2/docs/api/cspell-lib/interfaces/LegacySettings"},next:{title:"Interface: MergeSource",permalink:"/docsV2/docs/api/cspell-lib/interfaces/MergeSource"}},d={},o=[{value:"Properties",id:"properties",level:2},{value:"error()",id:"error",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Since",id:"since",level:4},{value:"Source",id:"source",level:4},{value:"log()",id:"log",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Since",id:"since-1",level:4},{value:"Source",id:"source-1",level:4},{value:"warn()",id:"warn",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Since",id:"since-2",level:4},{value:"Source",id:"source-2",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"interface-logger",children:"Interface: Logger"}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"error",children:"error()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"error"}),": (...",(0,n.jsx)(r.code,{children:"data"}),") => ",(0,n.jsx)(r.code,{children:"void"}),"(",(0,n.jsx)(r.code,{children:"message"}),"?, ...",(0,n.jsx)(r.code,{children:"optionalParams"}),") => ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/docs/Web/API/console/error_static",children:"MDN Reference"})}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"data"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsxs)(r.p,{children:["Prints to ",(0,n.jsx)(r.code,{children:"stderr"})," with newline. Multiple arguments can be passed, with the\nfirst used as the primary message and all additional used as substitution\nvalues similar to ",(0,n.jsx)(r.a,{href:"http://man7.org/linux/man-pages/man3/printf.3.html",children:(0,n.jsx)(r.code,{children:"printf(3)"})}),"\n(the arguments are all passed to ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args",children:(0,n.jsx)(r.code,{children:"util.format()"})}),")."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const code = 5;\nconsole.error('error #%d', code);\n// Prints: error #5, to stderr\nconsole.error('error', code);\n// Prints: error 5, to stderr\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If formatting elements (e.g. ",(0,n.jsx)(r.code,{children:"%d"}),") are not found in the first string then\n",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/util.html#utilinspectobject-options",children:(0,n.jsx)(r.code,{children:"util.inspect()"})})," is called on each argument and the\nresulting string values are concatenated. See ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args",children:(0,n.jsx)(r.code,{children:"util.format()"})}),"\nfor more information."]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"message?"}),": ",(0,n.jsx)(r.code,{children:"any"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"optionalParams?"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.h4,{id:"since",children:"Since"}),"\n",(0,n.jsx)(r.p,{children:"v0.1.100"}),"\n",(0,n.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/streetsidesoftware/cspell/blob/90cbc62f5a5222abbe16fe186d3887835fb87577/packages/cspell-lib/src/lib/util/logger.ts#L7",children:"packages/cspell-lib/src/lib/util/logger.ts:7"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"log",children:"log()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"log"}),": (...",(0,n.jsx)(r.code,{children:"data"}),") => ",(0,n.jsx)(r.code,{children:"void"}),"(",(0,n.jsx)(r.code,{children:"message"}),"?, ...",(0,n.jsx)(r.code,{children:"optionalParams"}),") => ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/docs/Web/API/console/log_static",children:"MDN Reference"})}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"data"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsxs)(r.p,{children:["Prints to ",(0,n.jsx)(r.code,{children:"stdout"})," with newline. Multiple arguments can be passed, with the\nfirst used as the primary message and all additional used as substitution\nvalues similar to ",(0,n.jsx)(r.a,{href:"http://man7.org/linux/man-pages/man3/printf.3.html",children:(0,n.jsx)(r.code,{children:"printf(3)"})}),"\n(the arguments are all passed to ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args",children:(0,n.jsx)(r.code,{children:"util.format()"})}),")."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const count = 5;\nconsole.log('count: %d', count);\n// Prints: count: 5, to stdout\nconsole.log('count:', count);\n// Prints: count: 5, to stdout\n"})}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v18.x/api/util.html#utilformatformat-args",children:(0,n.jsx)(r.code,{children:"util.format()"})})," for more information."]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"message?"}),": ",(0,n.jsx)(r.code,{children:"any"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"optionalParams?"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.h4,{id:"since-1",children:"Since"}),"\n",(0,n.jsx)(r.p,{children:"v0.1.100"}),"\n",(0,n.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/streetsidesoftware/cspell/blob/90cbc62f5a5222abbe16fe186d3887835fb87577/packages/cspell-lib/src/lib/util/logger.ts#L5",children:"packages/cspell-lib/src/lib/util/logger.ts:5"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"warn",children:"warn()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"warn"}),": (...",(0,n.jsx)(r.code,{children:"data"}),") => ",(0,n.jsx)(r.code,{children:"void"}),"(",(0,n.jsx)(r.code,{children:"message"}),"?, ...",(0,n.jsx)(r.code,{children:"optionalParams"}),") => ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/docs/Web/API/console/warn_static",children:"MDN Reference"})}),"\n",(0,n.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"data"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"console.warn()"})," function is an alias for ",(0,n.jsx)(r.a,{href:"/docsV2/docs/api/cspell-lib/interfaces/Logger#error",children:"error"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"message?"}),": ",(0,n.jsx)(r.code,{children:"any"})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ...",(0,n.jsx)(r.strong,{children:"optionalParams?"}),": ",(0,n.jsx)(r.code,{children:"any"}),"[]"]}),"\n",(0,n.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.h4,{id:"since-2",children:"Since"}),"\n",(0,n.jsx)(r.p,{children:"v0.1.100"}),"\n",(0,n.jsx)(r.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/streetsidesoftware/cspell/blob/90cbc62f5a5222abbe16fe186d3887835fb87577/packages/cspell-lib/src/lib/util/logger.ts#L6",children:"packages/cspell-lib/src/lib/util/logger.ts:6"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},85782:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var n=s(7378);const l={},i=n.createContext(l);function t(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);