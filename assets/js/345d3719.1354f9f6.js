"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["410"],{1997:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>m,frontMatter:()=>a});var o=JSON.parse('{"id":"examples/calibration-routine","title":"Kalibrationsroutine","description":"WIP","source":"@site/versioned_docs/version-2.0.1/examples/calibration-routine.md","sourceDirName":"examples","slug":"/examples/calibration-routine","permalink":"/maqueen-plus-v2-mpy/docs/examples/calibration-routine","draft":false,"unlisted":false,"editUrl":"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-2.0.1/examples/calibration-routine.md","tags":[],"version":"2.0.1","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Kompass","permalink":"/maqueen-plus-v2-mpy/docs/api/compass"},"next":{"title":"Hindernisumgehung","permalink":"/maqueen-plus-v2-mpy/docs/examples/obstacle-avoidance"}}'),r=t("5893"),i=t("65");let a={},s="Kalibrationsroutine",l={},m=[{value:"WIP",id:"wip",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kalibrationsroutine",children:"Kalibrationsroutine"})}),"\n",(0,r.jsx)(n.h2,{id:"wip",children:"WIP"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# Imports go at the top\nfrom microbit import *\nfrom maqueen import *\n# [(25, 1.11), (100, 1.235), (200, 1.27)]\nSPEEDS = [25, 50, 100, 150, 200]\nFACTOR_SHIFT = 0.01\nspeed_idx = 0\n\nmotor_stop()\nmotor_calibration(Motor.LEFT, [(SPEEDS[0], 1)])\nmotor_calibration(Motor.RIGHT, [(25, 1.11), (100, 1.235), (200, 1.27)])\nstate = 'INIT'\nwhile True:\n    if state == 'INIT':\n        motor_run(Motor.ALL, -SPEEDS[speed_idx])\n        print('Rechts (A) oder Links (B)?')\n        state = 'LEFT_OR_RIGHT'\n    elif state == 'LEFT_OR_RIGHT':\n        if button_a.was_pressed():\n            print('[rechts]')\n            state = 'ADJUST_RIGHT'\n            print('+ [A], - [B]')\n        elif button_b.was_pressed():\n            print('[links]')\n            state = 'ADJUST_LEFT'\n            print('+ [A], - [B]')\n    elif state == 'ADJUST_LEFT':\n        m = get_calib(Motor.LEFT)\n        f = m[-1]\n        if button_a.was_pressed():\n            m[len(m) - 1] = (f[0], f[1] + FACTOR_SHIFT)\n            motor_calibration(Motor.LEFT, m)\n        elif button_b.was_pressed():\n            m[len(m) - 1] = (f[0], f[1] - FACTOR_SHIFT)\n            motor_calibration(Motor.LEFT, m)\n        if f != get_calib(Motor.LEFT)[-1]:\n            motor_run(Motor.ALL, -SPEEDS[speed_idx])\n            print('Speed LEFT:', get_calib(Motor.LEFT)[-1])\n            \n    elif state == 'ADJUST_RIGHT':\n        m = get_calib(Motor.RIGHT)\n        f = m[-1]\n        if button_a.was_pressed():\n            m[len(m) - 1] = (f[0], f[1] + FACTOR_SHIFT)\n            motor_calibration(Motor.RIGHT, m)\n        elif button_b.was_pressed():\n            m[len(m) - 1] = (f[0], f[1] - FACTOR_SHIFT)\n            motor_calibration(Motor.RIGHT, m)\n        if f != get_calib(Motor.RIGHT)[-1]:\n            motor_run(Motor.ALL, -SPEEDS[speed_idx])\n            print('Speed RIGHT:', get_calib(Motor.RIGHT)[-1])\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var o=t(7294);let r={},i=o.createContext(r);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);