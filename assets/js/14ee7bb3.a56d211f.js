"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["5575"],{4208:function(e,r,n){n.r(r),n.d(r,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"api/motor","title":"Motor","description":"F\xfcr die Steuerung der Motoren gibt es die Funktionen motorrun und motorstop.","source":"@site/docs/api/motor.md","sourceDirName":"api","slug":"/api/motor","permalink":"/maqueen-plus-v2-mpy/docs/next/api/motor","draft":false,"unlisted":false,"editUrl":"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/docs/api/motor.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"API","permalink":"/maqueen-plus-v2-mpy/docs/next/api/"},"next":{"title":"LED\'s rot","permalink":"/maqueen-plus-v2-mpy/docs/next/api/led-red"}}'),o=n("5893"),t=n("65");let d={sidebar_position:1},s="Motor",l={},c=[{value:"API",id:"api",level:2},{value:"<code>motor_run(motor, speed)</code>",id:"motor_runmotor-speed",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Beispiel",id:"beispiel",level:4},{value:"<code>motor_stop()</code>",id:"motor_stop",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"Beispiel",id:"beispiel-1",level:4},{value:"<code>motor_calibration(motor, calibration)</code>",id:"motor_calibrationmotor-calibration",level:3},{value:"Parameter",id:"parameter-2",level:4},{value:"Beispiel",id:"beispiel-2",level:4},{value:"Kalibration zur\xfccksetzen",id:"kalibration-zur\xfccksetzen",level:4},{value:"<code>motor_get_calibration(motor)</code>",id:"motor_get_calibrationmotor",level:4},{value:"Parameter",id:"parameter-3",level:4},{value:"Beispiel",id:"beispiel-3",level:4}];function a(e){let r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Dl:n}=r;return!n&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Dl",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"motor",children:"Motor"})}),"\n",(0,o.jsxs)(r.p,{children:["F\xfcr die Steuerung der Motoren gibt es die Funktionen ",(0,o.jsx)(r.code,{children:"motor_run"})," und ",(0,o.jsx)(r.code,{children:"motor_stop"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(r.p,{children:"F\xfcr die Motorsteuerung k\xf6nnen folgende Konstanten benutzt werden"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"class Motor:\n    LEFT = 0\n    RIGHT = 1\n    ALL = 2\n\nclass Direction:\n    FORWARD = 0\n    BACKWARD = 1\n"})}),"\n",(0,o.jsx)(r.h3,{id:"motor_runmotor-speed",children:(0,o.jsx)(r.code,{children:"motor_run(motor, speed)"})}),"\n",(0,o.jsx)(r.p,{children:"L\xe4sst den Motor mit der angegebenen Geschwindigkeit laufen."}),"\n",(0,o.jsx)(r.h4,{id:"parameter",children:"Parameter"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"motor: int"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.LEFT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.RIGHT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.ALL"})})}),(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"speed: int[-255, 255]"})})}),(0,o.jsx)("dd",{children:(0,o.jsxs)(r.p,{children:["Werte von ",(0,o.jsx)(r.code,{children:"-255"})," bis ",(0,o.jsx)(r.code,{children:"255"}),". Ein negativer Wert l\xe4sst den Motor in die gegengesetzte Richtung drehen."]})}),(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"dir: int"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"optional"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Direction.FORWARD"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Direction.BACKWARD"})})})]}),"\n",(0,o.jsx)(r.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"# den linke Motor mit 100% vorw\xe4rts drehen lassen\nmotor_run(Motor.LEFT, 255)\n# den rechten Motor r\xfcckw\xe4rts mit 50% drehen lassen\nmotor_run(Motor.RIGHT, 128, Direction.BACKWARD)\n# oder \xe4quivalent\nmotor_run(Motor.RIGHT, -128)\n\n# beide Motoren vorw\xe4rts drehen mit 100%\nmotor_run(Motor.ALL, 255)\n"})}),"\n",(0,o.jsx)(r.h3,{id:"motor_stop",children:(0,o.jsx)(r.code,{children:"motor_stop()"})}),"\n",(0,o.jsxs)(r.p,{children:["Stoppt beide Motoren (oder ",(0,o.jsx)(r.em,{children:"optional"})," den angegebenen Motor)"]}),"\n",(0,o.jsx)(r.h4,{id:"parameter-1",children:"Parameter"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"motor"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"optional"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.LEFT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.RIGHT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.ALL"})})})]}),"\n",(0,o.jsx)(r.h4,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"# stoppt beide Motoren\nmotor_stop()\n# stoppt den linken Motor\nmotor_stop(Motor.LEFT)\n"})}),"\n",(0,o.jsx)(r.h3,{id:"motor_calibrationmotor-calibration",children:(0,o.jsx)(r.code,{children:"motor_calibration(motor, calibration)"})}),"\n",(0,o.jsx)(r.p,{children:"Die Motoren des Maqueen Plus V2.0 sind nicht perfekt gleich. Mit dieser Funktion kann eine Kalibration mit den Geschwindigkeiten gesetzt werden."}),"\n",(0,o.jsx)(r.h4,{id:"parameter-2",children:"Parameter"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"motor"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.LEFT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.RIGHT"})})}),(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"calibration"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:"Liste von Tupeln mit Geschwindigkeit und dem Korrekturfaktor. Die Geschwindigkeit muss zwischen 0 und 255 liegen. Der Korrekturfaktor ist ein Wert > 0. Der Korrekturfaktor wird linear interpoliert."})})]}),"\n",(0,o.jsx)(r.p,{children:'Die Kalibration kann durch das "Geradeausfahren lassen" des Maqueens eruiert werden:'}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"from maqueen import *\n\nmotor_calibration(Motor.LEFT, [(25, 1.3)])\n\nmotor_run(Motor.ALL, 25)\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Der Faktor ",(0,o.jsx)(r.code,{children:"1.3"})," kann angepasst werden, bis der Maqueen geradeaus f\xe4hrt."]}),"\n",(0,o.jsx)(r.h4,{id:"beispiel-2",children:"Beispiel"}),"\n",(0,o.jsxs)(r.p,{children:["Am besten wird ein zweiter Messpunkt bei Geschwindigkeit ",(0,o.jsx)(r.code,{children:"200"})," eruiert und die Kalibration mit diesen beiden Punkten gesetzt:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"motor_calibration(Motor.LEFT, [(25, 1.3), (200, 1.2)])\n"})}),"\n",(0,o.jsx)(r.p,{children:"Allenfalls kann auch ein dritter (oder mehr) Messpunkt gesetzt werden. Die Korrekturfaktoren werden linear interpoliert."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"\nmotor_calibration(\n    Motor.LEFT,\n    [\n        (25, 1.3), \n        (50, 1.2), \n        (100, 1.4), \n        (200, 1.0)\n    ]\n)\n\nmotor_run(Motor.ALL, 75) # => Korrekturfaktor ist 1.3\n"})}),"\n",(0,o.jsx)(r.h4,{id:"kalibration-zur\xfccksetzen",children:"Kalibration zur\xfccksetzen"}),"\n",(0,o.jsx)(r.p,{children:"Die Kalibration kann zur\xfcckgesetzt werden, indem eine leere Liste \xfcbergeben wird:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"# Kalibration zur\xfccksetzen\nmotor_calibration(Motor.LEFT, [])\nmotor_calibration(Motor.RIGHT, [])\n"})}),"\n",(0,o.jsx)(r.h4,{id:"motor_get_calibrationmotor",children:(0,o.jsx)(r.code,{children:"motor_get_calibration(motor)"})}),"\n",(0,o.jsx)(r.p,{children:"Gibt eine Kopie der aktuellen Kalibration f\xfcr den angegebenen Motor zur\xfcck."}),"\n",(0,o.jsx)(r.h4,{id:"parameter-3",children:"Parameter"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("dt",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"motor"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.LEFT"})})}),(0,o.jsx)("dd",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"Motor.RIGHT"})})})]}),"\n",(0,o.jsx)(r.h4,{id:"beispiel-3",children:"Beispiel"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-py",children:"motor_get_calibration(Motor.LEFT) # => [(25, 1.3), (200, 1.2)]\n"})})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},65:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return d}});var i=n(7294);let o={},t=i.createContext(o);function d(e){let r=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);