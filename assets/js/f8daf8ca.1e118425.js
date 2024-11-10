"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6200"],{75:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>t,frontMatter:()=>d});var s=JSON.parse('{"id":"api/line-tracking","title":"Liniensensor","description":"F\xfcr die Steuerung des Liniensensors kann die Funktion line_sensor verwendet werden.","source":"@site/docs/api/line-tracking.md","sourceDirName":"api","slug":"/api/line-tracking","permalink":"/maqueen-plus-v2-mpy/docs/next/api/line-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/docs/api/line-tracking.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"LED\'s RGB","permalink":"/maqueen-plus-v2-mpy/docs/next/api/led-rgb"},"next":{"title":"Ultraschallsensor","permalink":"/maqueen-plus-v2-mpy/docs/next/api/ultrasonic"}}'),r=i("5893"),l=i("65");let d={sidebar_position:4},c="Liniensensor",o={},t=[{value:"API",id:"api",level:2},{value:"<code>line_sensor(sensor)</code>",id:"line_sensorsensor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Beispiel",id:"beispiel",level:4},{value:"<code>line_sensor_all()</code>",id:"line_sensor_all",level:3},{value:"Beispiel",id:"beispiel-1",level:4},{value:"<code>line_sensor_data(sensor)</code>",id:"line_sensor_datasensor",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"Beispiel",id:"beispiel-2",level:4},{value:"<code>line_sensor_data_all()</code>",id:"line_sensor_data_all",level:3},{value:"Beispiel",id:"beispiel-3",level:4},{value:"Kalibrierung der Liniensensoren",id:"kalibrierung-der-liniensensoren",level:3}];function a(e){let n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components},{Dl:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Dl",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"liniensensor",children:"Liniensensor"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(5021).Z+"",width:"564",height:"376"})}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr die Steuerung des Liniensensors kann die Funktion ",(0,r.jsx)(n.code,{children:"line_sensor"})," verwendet werden."]}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"F\xfcr die Liniensensoren k\xf6nnen folgende Konstanten benutzt werden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class LineSensor:\n    L1 = 0\n    M = 1\n    R1 = 2\n    L2 = 3\n    R2 = 4\n"})}),"\n",(0,r.jsx)(n.h3,{id:"line_sensorsensor",children:(0,r.jsx)(n.code,{children:"line_sensor(sensor)"})}),"\n",(0,r.jsxs)(n.p,{children:["Gibt f\xfcr den angegebenen Liniensensor an, ob er Schwarz (=",(0,r.jsx)(n.code,{children:"1"}),") oder Weiss (=",(0,r.jsx)(n.code,{children:"0"}),") sieht."]}),"\n",(0,r.jsx)(n.p,{children:"Aus der Vogelperspektive sind die Sensoren wie folgt angeordnet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   /''''^''''\\\n  /  L1 M R1  \\\n |             |\n |L2         R2|\no|.............|o\n"})}),"\n",(0,r.jsx)(n.h4,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sensor: int"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.L1"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.M"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.R1"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.L2"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.R2"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(n.p,{children:"Den mittleren Sensor abfragen:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"line_sensor(LineSensor.M) # => 0 oder 1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"line_sensor_all",children:(0,r.jsx)(n.code,{children:"line_sensor_all()"})}),"\n",(0,r.jsxs)(n.p,{children:["Mit ",(0,r.jsx)(n.code,{children:"line_sensor_all"})," wird ein 5-Tupel mit den Werten von allen F\xfcnf Liniensensoren zur\xfcckgegeben. Die Reihenfolge ist im Uhrzeigersinn, beginnend mit dem linken Sensor: ",(0,r.jsx)(n.code,{children:"(L2, L1, M, R1, R2)"})]}),"\n",(0,r.jsx)(n.h4,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"line_sensor_all()   # => Tupel aller Sensorwerte, (0, 1, 1, 0, 1)\n                    #    -> L1, M und R2 sind auf der Linie\n"})}),"\n",(0,r.jsx)(n.h3,{id:"line_sensor_datasensor",children:(0,r.jsx)(n.code,{children:"line_sensor_data(sensor)"})}),"\n",(0,r.jsxs)(n.p,{children:["Gibt die Rohdaten des angegebenen Liniensensors zur\xfcck. Je n\xe4her der Sensorwert bei ",(0,r.jsx)(n.code,{children:"0"})," ist, desto dunkler ist die gemessene Farbe. Je n\xe4her der Wert bei ",(0,r.jsx)(n.code,{children:"255"})," ist, desto heller ist die gemessene Farbe. F\xfcr die Unterscheidung von Schwarz und Weiss kann bspw. folgender Schwellwert verwendet werden:"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"schwarz"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"< 100"})})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"weiss"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"> 100"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"parameter-1",children:"Parameter"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sensor: int"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.L1"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.M"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.R1"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.L2"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LineSensor.R2"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"beispiel-2",children:"Beispiel"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"line_sensor_data(LineSensor.M) # => 0-256\n"})}),"\n",(0,r.jsx)(n.h3,{id:"line_sensor_data_all",children:(0,r.jsx)(n.code,{children:"line_sensor_data_all()"})}),"\n",(0,r.jsxs)(n.p,{children:["Mit der Funktion ",(0,r.jsx)(n.code,{children:"line_sensor_data_all"})," wird ein 5-Tupel mit den Rohwerten von allen 5 Liniensensoren zur\xfcckgegeben. Die Reihenfolge ist im Uhrzeigersinn, beginnend mit dem linken Sensor: ",(0,r.jsx)(n.code,{children:"(L2, L1, M, R1, R2)"})]}),"\n",(0,r.jsx)(n.h4,{id:"beispiel-3",children:"Beispiel"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"line_sensor_data_all()  # => Tupel aller Sensorwerte (12, 130, 50, 72, 77)\n                        # => Alle Sensoren messen Werte zwischen 0 und 255\n"})}),"\n",(0,r.jsx)(n.h3,{id:"kalibrierung-der-liniensensoren",children:"Kalibrierung der Liniensensoren"}),"\n",(0,r.jsx)(n.p,{children:"Die Liniensensoren wurden im Werk kalibriert. Sollte die Kalibrierung nicht mehr pr\xe4zise sein, k\xf6nnen die Sensoren neu kalibriert werden."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Maqueen auf einer schwarzen Fl\xe4che positionieren (bspw. auf der R\xfcckseite der beigelegten ",(0,r.jsx)(n.em,{children:"Track Map"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Den ",(0,r.jsx)(n.em,{children:"Calibration Key"})," ",(0,r.jsx)(n.strong,{children:"5 Sekunden"})," gedr\xfcckt halten"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(1128).Z+"",width:"1674",height:"667"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5021:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/maqueen-line-tracking-90028864895b8f93198c534b51119b5f.jpg"},1128:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/maqueen-linesensor-calibration-188d35bd7fd8e30cd821f96d5f13fa53.png"},65:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return d}});var s=i(7294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);