"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[415],{9090:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(6106),i=s(5782);const o={layout:"default",title:"Working with Git",categories:"docs",parent:"Docs",nav_order:4,published:!1},c="Tips for Working with Git",r={id:"git",title:"Working with Git",description:"CSpell can be used to spell check files that have been changed as well as spell checking the commit message.",source:"@site/docs/git.md",sourceDirName:".",slug:"/git",permalink:"/docsV2/docs/git",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/blob/main/docs/docs/git.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Working with Git",categories:"docs",parent:"Docs",nav_order:4,published:!1},sidebar:"tutorialSidebar",previous:{title:"Getting Started with CSpell",permalink:"/docsV2/docs/getting-started"},next:{title:"Globs",permalink:"/docsV2/docs/globs"}},l={},d=[{value:"pre-commit",id:"pre-commit",level:2},{value:"commit-msg",id:"commit-msg",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tips-for-working-with-git",children:"Tips for Working with Git"}),"\n",(0,n.jsx)(t.p,{children:"CSpell can be used to spell check files that have been changed as well as spell checking the commit message."}),"\n",(0,n.jsx)(t.h1,{id:"git-commit-hooks",children:"Git commit-hooks"}),"\n",(0,n.jsx)(t.h2,{id:"pre-commit",children:"pre-commit"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:".git/hooks/pre-commit"})})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"#!/bin/sh\n\nexec git diff --cached --name-only | npx cspell --no-summary --no-progress --no-must-find-files --file-list stdin\n"})}),"\n",(0,n.jsx)(t.h2,{id:"commit-msg",children:"commit-msg"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:".git/hooks/commit-msg"})})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"#!/bin/sh\n\nexec npx cspell --no-summary --no-progress --language-id commit-msg $1\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},5782:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var n=s(7378);const i={},o=n.createContext(i);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);