"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16755],{49715:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=d(86106),n=d(85782);const i={layout:"default",title:"Globs",categories:"docs",nav_order:4},r="Globs",c={id:"globs",title:"Globs",description:"Globs are used extensively by CSpell to determine which files to check and what settings to apply.",source:"@site/docs/globs.md",sourceDirName:".",slug:"/globs",permalink:"/docsV2/docs/globs",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/tree/main/website/docs/docs/globs.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Globs",categories:"docs",nav_order:4},sidebar:"tutorialSidebar",previous:{title:"Working with Git",permalink:"/docsV2/docs/git"},next:{title:"How it Works",permalink:"/docsV2/docs/how-it-works"}},l={},o=[{value:"Mode - Strict",id:"mode---strict",level:2},{value:"Mode - Loose",id:"mode---loose",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"globs",children:"Globs"}),"\n",(0,t.jsx)(s.p,{children:"Globs are used extensively by CSpell to determine which files to check and what settings to apply."}),"\n",(0,t.jsx)(s.p,{children:"Here are some of the places globs are used:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Location"}),(0,t.jsx)(s.th,{children:"Mode"}),(0,t.jsx)(s.th,{children:"Note"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"files[]"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"strict"})}),(0,t.jsx)(s.td,{children:"The glob patterns used to search for files to spell check."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ignorePaths[]"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"loose"})}),(0,t.jsxs)(s.td,{children:["Glob patterns used to exclude files and directories from being checked. ",(0,t.jsx)(s.code,{children:"!"})," are only partially supported due to an issue with the Glob library",(0,t.jsx)(s.a,{href:"https://github.com/isaacs/node-glob/issues/409",title:"Glob - Does not match for negative ignore \xb7 Issue #409",children:(0,t.jsx)("sup",{children:"1"})})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"overrides[].filename"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"loose"})}),(0,t.jsx)(s.td,{children:"Used to apply configuration settings to files whose path matches the glob"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"mode---strict",children:"Mode - Strict"}),"\n",(0,t.jsx)(s.p,{children:"Strict mode is used to explicitly select files to be checked. It gives more nuanced control over the file search process."}),"\n",(0,t.jsx)(s.p,{children:"Examples:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Glob"}),(0,t.jsx)(s.th,{children:"Meaning"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"*.md"})}),(0,t.jsx)(s.td,{children:"Only check the Markdown files in the current directory. It will not scan subdirectories."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"*.{md,js}"})," or ",(0,t.jsx)(s.code,{children:"{*.md,*.js}"})]}),(0,t.jsx)(s.td,{children:"Only check the Markdown or JavaScript files in the current directory. It will not scan subdirectories."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"**/*.md"})}),(0,t.jsxs)(s.td,{children:["Scan all directories (except ",(0,t.jsx)(s.em,{children:"hidden"})," ones starting with ",(0,t.jsx)(s.code,{children:"."}),") looking for markdown files."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"**/{*,.*}/**/*.md"})}),(0,t.jsxs)(s.td,{children:["Scan all directories including a ",(0,t.jsx)(s.em,{children:"hidden"})," one looking for markdown files. Does not match ",(0,t.jsx)(s.code,{children:"*.md"})," in root."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"src/**"})}),(0,t.jsxs)(s.td,{children:["Scan the ",(0,t.jsx)(s.code,{children:"src"})," directory looking for all ",(0,t.jsx)(s.em,{children:"non-hidden"})," files."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"**"})}),(0,t.jsxs)(s.td,{children:["Use the ",(0,t.jsx)(s.code,{children:"--dot"})," option to include hidden directories or files."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"**/.*"})}),(0,t.jsxs)(s.td,{children:["Scan for only ",(0,t.jsx)(s.em,{children:"hidden"})," files."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"mode---loose",children:"Mode - Loose"}),"\n",(0,t.jsxs)(s.p,{children:["Loose mode is used to match files that have been found. It is designed to emulate ",(0,t.jsx)(s.code,{children:".gitignore"})," rules closely.\nBy default, loose mode matches hidden files and directories."]}),"\n",(0,t.jsx)(s.p,{children:"Examples:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Glob"}),(0,t.jsx)(s.th,{children:"Meaning"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"*.md"})}),(0,t.jsxs)(s.td,{children:["Will match against any path containing ",(0,t.jsx)(s.code,{children:"*.md"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"node_modules"})}),(0,t.jsxs)(s.td,{children:["Will match against any path containing ",(0,t.jsx)(s.code,{children:"node_modules"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/node_modules"})}),(0,t.jsxs)(s.td,{children:["Matches against ",(0,t.jsx)(s.code,{children:"./node_modules"})," and all contained files. It will not match nested paths like: ",(0,t.jsx)(s.code,{children:"./package/node_modules/*"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/node_modules/"})}),(0,t.jsxs)(s.td,{children:["Matches the ",(0,t.jsx)(s.code,{children:"./node_modules"})," directory and any files it contains."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/node_modules/**"})}),(0,t.jsxs)(s.td,{children:["Same as ",(0,t.jsx)(s.code,{children:"/node_modules/"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"test"})}),(0,t.jsxs)(s.td,{children:["Matches any directory or file called ",(0,t.jsx)(s.code,{children:"test"}),". Equivalent to using both ",(0,t.jsx)(s.code,{children:"**/test"})," and ",(0,t.jsx)(s.code,{children:"**/test/**"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"**/test/**"})}),(0,t.jsxs)(s.td,{children:["Similar to ",(0,t.jsx)(s.code,{children:"test"}),", but only matches paths contained in a ",(0,t.jsx)(s.code,{children:"test"})," directory."]})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85782:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>c});var t=d(7378);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);