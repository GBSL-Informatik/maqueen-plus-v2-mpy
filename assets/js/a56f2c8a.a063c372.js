"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[635],{4649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=t(5893),r=t(1151);const s={},i="Hindernisumgehung",a={id:"examples/obstacle-avoidance",title:"Hindernisumgehung",description:"",source:"@site/versioned_docs/version-1.0.0/examples/obstacle-avoidance.md",sourceDirName:"examples",slug:"/examples/obstacle-avoidance",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/examples/obstacle-avoidance",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-1.0.0/examples/obstacle-avoidance.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kompass",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/api/compass"}},c={},m=[];function u(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hindernisumgehung",children:"Hindernisumgehung"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"from microbit import *\nfrom maqueen import *\nfrom random import randint\n\nmotor_run(Motor.ALL, 100)\nwhile True:\n    if ultrasonic() < 15:\n        motor_run(Motor.LEFT, -100)\n        sleep(randint(200, 1000))\n        motor_run(Motor.ALL, 100)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);