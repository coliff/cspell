"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67682],{46438:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(86106),l=t(85782);const r={},i="Interface: WorkspaceTrustSettings",c={id:"api/cspell-lib/interfaces/WorkspaceTrustSettings",title:"Interface: WorkspaceTrustSettings",description:"To prevent the unwanted execution of untrusted code, WorkspaceTrustSettings",source:"@site/docs/api/cspell-lib/interfaces/WorkspaceTrustSettings.md",sourceDirName:"api/cspell-lib/interfaces",slug:"/api/cspell-lib/interfaces/WorkspaceTrustSettings",permalink:"/docsV2/docs/api/cspell-lib/interfaces/WorkspaceTrustSettings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/api/cspell-lib/interfaces/WorkspaceTrustSettings.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface: VirtualFS",permalink:"/docsV2/docs/api/cspell-lib/interfaces/VirtualFS"},next:{title:"Namespace: ExclusionHelper",permalink:"/docsV2/docs/api/cspell-lib/namespaces/ExclusionHelper/"}},o={},d=[{value:"Properties",id:"properties",level:2},{value:"trustLevel?",id:"trustlevel",level:3},{value:"Default",id:"default",level:4},{value:"Source",id:"source",level:4},{value:"trustedFiles?",id:"trustedfiles",level:3},{value:"Source",id:"source-1",level:4},{value:"untrustedFiles?",id:"untrustedfiles",level:3},{value:"Source",id:"source-2",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"interface-workspacetrustsettings",children:"Interface: WorkspaceTrustSettings"}),"\n",(0,n.jsx)(s.p,{children:"To prevent the unwanted execution of untrusted code, WorkspaceTrustSettings\nare use to set the trust levels."}),"\n",(0,n.jsxs)(s.p,{children:["Trust setting have an impact on both ",(0,n.jsx)(s.code,{children:"cspell.config.js"})," files and on ",(0,n.jsx)(s.code,{children:".pnp.js"})," files.\nIn an untrusted location, these files will NOT be used."]}),"\n",(0,n.jsx)(s.p,{children:"This will also prevent any associated plugins from being loaded."}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"trustlevel",children:"trustLevel?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"trustLevel"}),": ",(0,n.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/type-aliases/TrustLevel",children:(0,n.jsx)(s.code,{children:"TrustLevel"})})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Sets the default trust level."}),"\n",(0,n.jsx)(s.h4,{id:"default",children:"Default"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:'"trusted"\n'})}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"packages/cspell-types/dist/CSpellSettingsDef.d.ts:367"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"trustedfiles",children:"trustedFiles?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"trustedFiles"}),": ",(0,n.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/type-aliases/Glob",children:(0,n.jsx)(s.code,{children:"Glob"})}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Glob patterns of locations that contain ALWAYS trusted files."}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"packages/cspell-types/dist/CSpellSettingsDef.d.ts:358"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"untrustedfiles",children:"untrustedFiles?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.strong,{children:"untrustedFiles"}),": ",(0,n.jsx)(s.a,{href:"/docsV2/docs/api/cspell-lib/type-aliases/Glob",children:(0,n.jsx)(s.code,{children:"Glob"})}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Glob patterns of locations that contain NEVER trusted files."}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"packages/cspell-types/dist/CSpellSettingsDef.d.ts:362"})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},85782:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(7378);const l={},r=n.createContext(l);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);