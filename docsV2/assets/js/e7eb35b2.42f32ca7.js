"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[878],{5066:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=l(6106),s=l(5782);const o={title:"Document Settings",categories:"configuration",parent:"Configuration",nav_order:11},c="Inline Document Settings",d={id:"Configuration/document-settings",title:"Document Settings",description:"In Document Settings",source:"@site/docs/Configuration/document-settings.md",sourceDirName:"Configuration",slug:"/Configuration/document-settings",permalink:"/docsV2/docs/Configuration/document-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/streetsidesoftware/cspell/blob/main/docs/docs/Configuration/document-settings.md",tags:[],version:"current",frontMatter:{title:"Document Settings",categories:"configuration",parent:"Configuration",nav_order:11},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docsV2/docs/Configuration/"},next:{title:"Importing / Extending Configuration",permalink:"/docsV2/docs/Configuration/imports"}},t={},r=[{value:"In Document Settings",id:"in-document-settings",level:2},{value:"Enable / Disable checking sections of code",id:"enable--disable-checking-sections-of-code",level:3},{value:"Disable Checking",id:"disable-checking",level:4},{value:"Enable Checking",id:"enable-checking",level:4},{value:"Example",id:"example",level:4},{value:"Ignore",id:"ignore",level:3},{value:"Words",id:"words",level:3},{value:"Enable / Disable compound words",id:"enable--disable-compound-words",level:3},{value:"Excluding and Including Text to be checked.",id:"excluding-and-including-text-to-be-checked",level:3},{value:"Exclude Example",id:"exclude-example",level:4},{value:"Include Example",id:"include-example",level:4}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"inline-document-settings",children:"Inline Document Settings"}),"\n",(0,i.jsx)(n.h2,{id:"in-document-settings",children:"In Document Settings"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to add spell check settings into your source code.\nThis is to help with file specific issues that may not be applicable to the entire project."}),"\n",(0,i.jsxs)(n.p,{children:["All settings are prefixed with ",(0,i.jsx)(n.code,{children:"cSpell:"})," or ",(0,i.jsx)(n.code,{children:"spell-checker:"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disable"})," -- turn off the spell checker for a section of code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enable"})," -- turn the spell checker back on after it has been turned off."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ignore"})," -- specify a list of words to be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"words"})," -- specify a list of words to be considered correct and will appear in the suggestions list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ignoreRegExp"})," -- Any text matching the regular expression will NOT be checked for spelling."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"includeRegExp"})," -- Only text matching the collection of includeRegExp will be checked."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enableCompoundWords"})," / ",(0,i.jsx)(n.code,{children:"disableCompoundWords"}),' -- Allow / disallow words like: "stringlength".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dictionaries"})," -- specify a list of the names of the dictionaries to use."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enable--disable-checking-sections-of-code",children:"Enable / Disable checking sections of code"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to disable / enable the spell checker by adding comments to your code."}),"\n",(0,i.jsx)(n.h4,{id:"disable-checking",children:"Disable Checking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* cSpell:disable */"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* spell-checker: disable */"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* spellchecker: disable */"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"// cspell:disable-line"})," -- disables checking for the current line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/* cspell:disable-next-line */"})," -- disables checking till the end of the next line."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"enable-checking",children:"Enable Checking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* cSpell:enable */"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* spell-checker: enable */"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/* spellchecker: enable */"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// cSpell:disable\nconst wackyWord = ['zaallano', 'wooorrdd', 'zzooommmmmmmm'];\n/* cSpell:enable */\n\nconst words = ['zaallano', 'wooorrdd', 'zzooommmmmmmm']; // cspell:disable-line disables this entire line\n\n// To disable the next line, use cspell:disable-next-line\nconst moreWords = ['ieeees', 'beees', 'treeees'];\n\n// Nesting disable / enable is not Supported\n\n// spell-checker:disable\n// It is now disabled.\n\nvar liep = 1;\n\n/* cspell:disable */\n// It is still disabled\n\n// cSpell:enable\n// It is now enabled\n\nconst str = 'goededag'; // <- will be flagged as an error.\n\n// spell-checker:enable <- doesn't do anything\n\n// cSPELL:DISABLE <-- also works.\n\n// if there isn't an enable, spelling is disabled till the end of the file.\nconst str = 'goedemorgen'; // <- will NOT be flagged as an error.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ignore",children:"Ignore"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Ignore"})," allows you the specify a list of words you want to ignore within the document."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// cSpell:ignore zaallano, wooorrdd\n// cSpell:ignore zzooommmmmmmm\nconst wackyWord = ['zaallano', 'wooorrdd', 'zzooommmmmmmm'];\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," words defined with ",(0,i.jsx)(n.code,{children:"ignore"})," will be ignored for the entire file."]}),"\n",(0,i.jsx)(n.h3,{id:"words",children:"Words"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"words"})," list allows you to add words that will be considered correct and will be used as suggestions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// cSpell:words woorxs sweeetbeat\nconst companyName = 'woorxs sweeetbeat';\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," words defined with ",(0,i.jsx)(n.code,{children:"words"})," will be used for the entire file."]}),"\n",(0,i.jsx)(n.h3,{id:"enable--disable-compound-words",children:"Enable / Disable compound words"}),"\n",(0,i.jsx)(n.p,{children:"In some programming language it is common to glue words together."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"// cSpell:enableCompoundWords\nchar * errormessage;  // Is ok with cSpell:enableCompoundWords\nint    errornumber;   // Is also ok.\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Compound word checking cannot be turned on / off in the same file.\nThe last setting in the file determines the value for the entire file."]}),"\n",(0,i.jsx)(n.h3,{id:"excluding-and-including-text-to-be-checked",children:"Excluding and Including Text to be checked."}),"\n",(0,i.jsxs)(n.p,{children:["By default, the entire document is checked for spelling.\n",(0,i.jsx)(n.code,{children:"cSpell:disable"}),"/",(0,i.jsx)(n.code,{children:"cSpell:enable"})," above allows you to block off sections of the document.\n",(0,i.jsx)(n.code,{children:"ignoreRegExp"})," and ",(0,i.jsx)(n.code,{children:"includeRegExp"})," give you the ability to ignore or include patterns of text.\nBy default the flags ",(0,i.jsx)(n.code,{children:"gim"})," are added if no flags are given."]}),"\n",(0,i.jsx)(n.p,{children:"The spell checker works in the following way:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Find all text matching ",(0,i.jsx)(n.code,{children:"includeRegExp"})]}),"\n",(0,i.jsxs)(n.li,{children:["Remove any text matching ",(0,i.jsx)(n.code,{children:"ignoreRegExp"})]}),"\n",(0,i.jsx)(n.li,{children:"Check the remaining text."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exclude-example",children:"Exclude Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// cSpell:ignoreRegExp 0x[0-9a-f]+     -- will ignore c style hex numbers\n// cSpell:ignoreRegExp /0x[0-9A-F]+/g  -- will ignore upper case c style hex numbers.\n// cSpell:ignoreRegExp g{5} h{5}       -- will only match ggggg, but not hhhhh or 'ggggg hhhhh'\n// cSpell:ignoreRegExp g{5}|h{5}       -- will match both ggggg and hhhhh\n// cSpell:ignoreRegExp /g{5} h{5}/     -- will match 'ggggg hhhhh'\n/* cSpell:ignoreRegExp /n{5}/          -- will NOT work as expected because of the ending comment -> */\n/*\n   cSpell:ignoreRegExp /q{5}/          -- will match qqqqq just fine but NOT QQQQQ\n*/\n// cSpell:ignoreRegExp /[^\\s]{40,}/    -- will ignore long strings with no spaces.\n// cSpell:ignoreRegExp Email           -- this will ignore email like patterns -- see Predefined RegExp expressions\nvar encodedImage = 'HR+cPzr7XGAOJNurPL0G8I2kU0UhKcqFssoKvFTR7z0T3VJfK37vS025uKroHfJ9nA6WWbHZ/ASn...';\nvar email1 = 'emailaddress@myfancynewcompany.com';\nvar email2 = '<emailaddress@myfancynewcompany.com>';\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," ignoreRegExp and includeRegExp are applied to the entire file. They do not start and stop."]}),"\n",(0,i.jsx)(n.h4,{id:"include-example",children:"Include Example"}),"\n",(0,i.jsxs)(n.p,{children:["In general you should not need to use ",(0,i.jsx)(n.code,{children:"includeRegExp"}),". But if you are mixing languages then it could come in helpful."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Python",children:'# cSpell:includeRegExp #.*\n# cSpell:includeRegExp ("""|\'\'\')[^\\1]*\\1\n# only comments and block strings will be checked for spelling.\ndef sum_it(self, seq):\n    """This is checked for spelling"""\n    variabele = 0\n    alinea = \'this is not checked\'\n    for num in seq:\n        # The local state of \'value\' will be retained between iterations\n        variabele += num\n        yield variabele\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5782:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>d});var i=l(7378);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);