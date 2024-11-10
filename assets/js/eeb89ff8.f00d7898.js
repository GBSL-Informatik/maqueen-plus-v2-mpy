"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6094"],{5524:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>m,assets:()=>c,toc:()=>u,frontMatter:()=>i});var r=JSON.parse('{"id":"examples/obstacle-avoidance","title":"Hindernisumgehung","description":"","source":"@site/docs/examples/obstacle-avoidance.md","sourceDirName":"examples","slug":"/examples/obstacle-avoidance","permalink":"/maqueen-plus-v2-mpy/docs/next/examples/obstacle-avoidance","draft":false,"unlisted":false,"editUrl":"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/docs/examples/obstacle-avoidance.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Kalibrationsroutine","permalink":"/maqueen-plus-v2-mpy/docs/next/examples/calibration-routine"}}'),o=t("5893"),a=t("65");let i={},s="Hindernisumgehung",c={},u=[];function l(e){let n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"hindernisumgehung",children:"Hindernisumgehung"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"from microbit import *\nfrom maqueen import *\nfrom random import randint\n\nmotor_run(Motor.ALL, 100)\nwhile True:\n    if ultrasonic() < 15:\n        motor_run(Motor.LEFT, -100)\n        sleep(randint(200, 1000))\n        motor_run(Motor.ALL, 100)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(7294);let o={},a=r.createContext(o);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);