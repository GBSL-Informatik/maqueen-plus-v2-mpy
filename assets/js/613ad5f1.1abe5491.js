"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[175],{8310:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=d(5893),i=d(1151);const s={sidebar_position:2},t="LED's rot",l={id:"api/led-red",title:"LED's rot",description:"F\xfcr die Steuerung der beiden roten LED's kann die Funktion led_red verwendet werden.",source:"@site/docs/api/led-red.md",sourceDirName:"api",slug:"/api/led-red",permalink:"/maqueen-plus-v2-mpy/docs/next/api/led-red",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/docs/api/led-red.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Motor",permalink:"/maqueen-plus-v2-mpy/docs/next/api/motor"},next:{title:"LED's RGB",permalink:"/maqueen-plus-v2-mpy/docs/next/api/led-rgb"}},o={},c=[{value:"API",id:"api",level:2},{value:"<code>led_red(on)</code>",id:"led_redon",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Beispiel",id:"beispiel",level:4}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Dl:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Dl",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"leds-rot",children:"LED's rot"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:d(1646).Z+"",width:"900",height:"600"})}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr die Steuerung der beiden roten LED's kann die Funktion ",(0,r.jsx)(n.code,{children:"led_red"})," verwendet werden."]}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.p,{children:"F\xfcr die Farb-LED's k\xf6nnen folgende Konstanten benutzt werden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Led:\n    LEFT = 0\n    RIGHT = 1\n    ALL = 2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"led_redon",children:(0,r.jsx)(n.code,{children:"led_red(on)"})}),"\n",(0,r.jsx)(n.p,{children:"Schaltet die rote LED vorne am Maqueen ein oder aus."}),"\n",(0,r.jsx)(n.h4,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"on: bool"})})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"True"})," oder ",(0,r.jsx)(n.code,{children:"False"})," um die beiden LED ein- oder auszuschalten"]})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"led: int"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"optional"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Led.LEFT"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Led.RIGHT"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Led.ALL"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"led_red(True) # schaltet beide roten LED's ein\n\n# oder einzeln...\nled_red(False, Led.LEFT) # schaltet die linke LED aus\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1646:(e,n,d)=>{d.d(n,{Z:()=>r});const r=d.p+"assets/images/maqueen-red-leds-da11bd54691ebb5ae8b49f8bcb6c7cc9.jpg"},1151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>t});var r=d(7294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);