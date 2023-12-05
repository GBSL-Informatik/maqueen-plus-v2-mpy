"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[949],{4193:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(5893),r=s(1151);const t={sidebar_position:4},o="Liniensensor",a={id:"api/line-tracking",title:"Liniensensor",description:"line_sensor(sensor: int)",source:"@site/docs/api/line-tracking.md",sourceDirName:"api",slug:"/api/line-tracking",permalink:"/maqueen-plus-v2-mpy/docs/api/line-tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/packages/create-docusaurus/templates/shared/docs/api/line-tracking.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LED's RGB",permalink:"/maqueen-plus-v2-mpy/docs/api/led-rgb"},next:{title:"Ultraschallsensor",permalink:"/maqueen-plus-v2-mpy/docs/api/ultrasonic"}},l={},c=[{value:"<code>line_sensor(sensor: int)</code>",id:"line_sensorsensor-int",level:4},{value:"<code>line_sensor_data(sensor: int)</code>",id:"line_sensor_datasensor-int",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"liniensensor",children:"Liniensensor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"class LineSensor:\n    SENSOR_L1 = 0\n    SENSOR_M = 1\n    SENSOR_R1 = 2\n    SENSOR_L2 = 3\n    SENSOR_R2 = 4\n    ALL = 5\n"})}),"\n",(0,i.jsx)(n.h4,{id:"line_sensorsensor-int",children:(0,i.jsx)(n.code,{children:"line_sensor(sensor: int)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the value of the specified line tracking sensor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"   /''''^''''\\\n  /  L1 M R1  \\\n |             |\n |L2         R2|\no|.............|o\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"line_sensor(LineSensor.M) # => 0 or 1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"LineSensor.ALL"})," is used, a 5-tuple with values of all sensors is returned. The order is clockwise starting with the leftmost sensor: ",(0,i.jsx)(n.code,{children:"(L2, L1, M, R1, R2)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"line_sensor(LineSensor.ALL) # => tuple of all sensors, (0, 1, 1, 0, 1)\n                            # => L1, M and R2 are on the line\n"})}),"\n",(0,i.jsx)(n.h4,{id:"line_sensor_datasensor-int",children:(0,i.jsx)(n.code,{children:"line_sensor_data(sensor: int)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the raw data of the specified line tracking sensor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"line_sensor_data(LineSensor.M) # => 0-1023\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"LineSensor.ALL"})," is used, a 5-tuple with values of all sensors is returned. The order is clockwise starting with the leftmost sensor: ",(0,i.jsx)(n.code,{children:"(L2, L1, M, R1, R2)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"line_sensor_data(LineSensor.ALL) # => tuple of all sensors, (12, 1023, 721, 23, 222)\n                                 # => All sensors read a value between 0 and 1023\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);