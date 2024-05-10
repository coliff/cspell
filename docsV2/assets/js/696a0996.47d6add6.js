"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[419],{4579:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var o=i(6106),c=i(5782);const s={title:"Searching Dictionaries",categories:"docs",nav_order:4},r="Searching Dictionaries",t={id:"command-trace",title:"Searching Dictionaries",description:"The trace command is used to search for words in the CSpell dictionaries.",source:"@site/docs/command-trace.md",sourceDirName:".",slug:"/command-trace",permalink:"/docsV2/docs/command-trace",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/blob/main/docs/docs/command-trace.md",tags:[],version:"current",frontMatter:{title:"Searching Dictionaries",categories:"docs",nav_order:4},sidebar:"tutorialSidebar",previous:{title:"Visual Spell Check",permalink:"/docsV2/docs/command-check"},next:{title:"Custom Dictionaries",permalink:"/docsV2/docs/dictionaries-custom"}},a={},d=[{value:"Command: <code>trace</code> - See which dictionaries contain a word",id:"command-trace---see-which-dictionaries-contain-a-word",level:2},{value:"Options",id:"options",level:2},{value:"Using <code>languageId</code>",id:"using-languageid",level:3}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"searching-dictionaries",children:"Searching Dictionaries"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"trace"})," command is used to search for words in the CSpell dictionaries."]}),"\n",(0,o.jsxs)(n.h2,{id:"command-trace---see-which-dictionaries-contain-a-word",children:["Command: ",(0,o.jsx)(n.code,{children:"trace"})," - See which dictionaries contain a word"]}),"\n",(0,o.jsxs)(n.p,{children:["Trace shows the list of known dictionaries and a ",(0,o.jsx)(n.code,{children:"*"})," next to the ones that contain the word."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"!"})," will appear next to the ones where the word is forbidden."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/3740137/130417575-71da1608-db90-4db3-9679-25ed32227df5.png",alt:"image"})}),"\n",(0,o.jsxs)(n.p,{children:["The word is found in a dictionary if a ",(0,o.jsx)(n.code,{children:"*"})," appears before the dictionary name. ",(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/3740137/130417834-5f8ae058-6723-4801-b950-d8864809206d.png",alt:"image"})]}),"\n",(0,o.jsxs)(n.p,{children:["The dictionary is ",(0,o.jsx)(n.em,{children:"enabled"}),", (in use based upon the file type), if the dictionary name is followed by a ",(0,o.jsx)(n.code,{children:"*"}),". ",(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/3740137/130418257-583ba581-2ff9-459a-a888-6016a93666ab.png",alt:"image"})]}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Usage: cspell trace [options] <words...>\n\nTrace words\n  Search for words in the configuration and dictionaries.\n\nOptions:\n  -c, --config <cspell.json>  Configuration file to use.  By default cspell\n                              looks for cspell.json in the current directory.\n  --locale <locale>           Set language locales. i.e. "en,fr" for English\n                              and French, or "en-GB" for British English.\n  --languageId <language>     Force programming language for unknown\n                              extensions. i.e. "php" or "scala"\n  --no-color                  Turn off color.\n  --color                     Force color\n  -h, --help                  display help for command\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"using-languageid",children:["Using ",(0,o.jsx)(n.code,{children:"languageId"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Search for ",(0,o.jsx)(n.code,{children:"errorcode"})]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'cspell trace --languageId=cpp "errorcode"\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/3740137/130419629-0d8b6781-f775-4b9f-beac-4d9b98505893.png",alt:"image"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"+"})," between ",(0,o.jsxs)(n.em,{children:["error",(0,o.jsx)(n.code,{children:"+"}),"code"]})," indicates that it was found using compound words enabled by ",(0,o.jsx)(n.code,{children:"allowCompoundWords"})," setting."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5782:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var o=i(7378);const c={},s=o.createContext(c);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);