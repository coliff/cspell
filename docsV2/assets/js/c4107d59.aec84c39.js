"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12102],{30831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(86106),a=t(79252);const s={layout:"default",title:"Language Settings",categories:"configuration",parent:"Configuration",nav_order:11},o="Language Settings",l={id:"Configuration/language-settings",title:"Language Settings",description:"LanguageSettings",source:"@site/docs/Configuration/language-settings.mdx",sourceDirName:"Configuration",slug:"/Configuration/language-settings",permalink:"/docsV2/docs/Configuration/language-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/Configuration/language-settings.mdx",tags:[],version:"current",frontMatter:{layout:"default",title:"Language Settings",categories:"configuration",parent:"Configuration",nav_order:11},sidebar:"tutorialSidebar",previous:{title:"Importing / Extending Configuration",permalink:"/docsV2/docs/Configuration/imports"},next:{title:"Overrides",permalink:"/docsV2/docs/Configuration/overrides"}},r={},c=[{value:"LanguageSettings",id:"languagesettings",level:2}];function g(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"language-settings",children:"Language Settings"}),"\n",(0,i.jsx)(n.h2,{id:"languagesettings",children:"LanguageSettings"}),"\n",(0,i.jsxs)(n.p,{children:["The Language Settings allow configuration to be based upon the programming language and/or the locale.\nThere are two selector fields: ",(0,i.jsx)(n.code,{children:"locale"})," and ",(0,i.jsx)(n.code,{children:"languageId"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"languageId"})," defines which programming languages to match against.\nA value of ",(0,i.jsx)(n.code,{children:'"python,javascript"'})," will match against ",(0,i.jsx)(n.em,{children:"python"})," and ",(0,i.jsx)(n.em,{children:"javascript"})," files. To match against ALL programming languages,\nuse ",(0,i.jsx)(n.code,{children:'"*"'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"locale"})," defines which spoken languages to match against. A value of ",(0,i.jsx)(n.code,{children:'"en-GB,nl"'})," will match against British English or Dutch.\nA value of ",(0,i.jsx)(n.code,{children:'"*"'})," will match all spoken languages."]}),"\n",(0,i.jsxs)(n.li,{children:["Most configuration values allowed in a ",(0,i.jsx)(n.code,{children:"cspell.json"})," file can be defined or redefined within the ",(0,i.jsx)(n.code,{children:"languageSettings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'    "languageSettings": [\n        {\n            // VSCode languageId. i.e. typescript, java, go, cpp, javascript, markdown, latex\n            // * will match against any file type.\n            "languageId": "c,cpp",\n            // Language locale. i.e. en-US, de-AT, or ru. * will match all locales.\n            // Multiple locales can be specified like: "en, en-US" to match both English and English US.\n            "locale": "*",\n            // To exclude patterns, add them to "ignoreRegExpList"\n            "ignoreRegExpList": [\n                "/#include.*/"\n            ],\n            // List of dictionaries to enable by name in `dictionaryDefinitions`\n            "dictionaries": ["cpp"],\n            // Dictionary definitions can also be supplied here. They are only used if "languageId" and "locale" match.\n            "dictionaryDefinitions": []\n        }\n    ]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},79252:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(7378);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);