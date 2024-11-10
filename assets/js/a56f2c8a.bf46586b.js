"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["9452"],{5558:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>a});var r=JSON.parse('{"id":"examples/obstacle-avoidance","title":"Hindernisumgehung","description":"","source":"@site/versioned_docs/version-1.0.0/examples/obstacle-avoidance.md","sourceDirName":"examples","slug":"/examples/obstacle-avoidance","permalink":"/maqueen-plus-v2-mpy/docs/1.0.0/examples/obstacle-avoidance","draft":false,"unlisted":false,"editUrl":"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-1.0.0/examples/obstacle-avoidance.md","tags":[],"version":"1.0.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Kompass","permalink":"/maqueen-plus-v2-mpy/docs/1.0.0/api/compass"}}'),o=t("5893"),s=t("65");let a={},i="Hindernisumgehung",c={},u=[];function l(e){let n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"hindernisumgehung",children:"Hindernisumgehung"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"from microbit import *\nfrom maqueen import *\nfrom random import randint\n\nmotor_run(Motor.ALL, 100)\nwhile True:\n    if ultrasonic() < 15:\n        motor_run(Motor.LEFT, -100)\n        sleep(randint(200, 1000))\n        motor_run(Motor.ALL, 100)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},65:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(7294);let o={},s=r.createContext(o);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);