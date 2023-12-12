"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4313],{691:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=i(5893),r=i(1151);const t={sidebar_position:5},o="Ultraschallsensor",a={id:"api/ultrasonic",title:"Ultraschallsensor",description:"Der Ultraschallsensor misst die Entfernung zu einem Objekt in Zentimetern. Mit der Funktion ultrasonic kann die Entfernung gemessen werden.",source:"@site/versioned_docs/version-1.0.0/api/ultrasonic.md",sourceDirName:"api",slug:"/api/ultrasonic",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/api/ultrasonic",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-1.0.0/api/ultrasonic.md",tags:[],version:"1.0.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Liniensensor",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/api/line-tracking"},next:{title:"Kompass",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/api/compass"}},l={},c=[{value:"API",id:"api",level:2},{value:"<code>ultrasonic()</code>",id:"ultrasonic",level:3},{value:"Beispiel",id:"beispiel",level:4},{value:"Konfiguration",id:"konfiguration",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ultraschallsensor",children:"Ultraschallsensor"}),"\n",(0,s.jsxs)(n.p,{children:["Der Ultraschallsensor misst die Entfernung zu einem Objekt in Zentimetern. Mit der Funktion ",(0,s.jsx)(n.code,{children:"ultrasonic"})," kann die Entfernung gemessen werden."]}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"ultrasonic",children:(0,s.jsx)(n.code,{children:"ultrasonic()"})}),"\n",(0,s.jsx)(n.p,{children:"Gibt die Entfernung in Zentimetern zur\xfcck. Die maximal messbare Entfernung betr\xe4gt 500 cm."}),"\n",(0,s.jsx)(n.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"ultrasonic() # => 0-500\n"})}),"\n",(0,s.jsx)(n.h2,{id:"konfiguration",children:"Konfiguration"}),"\n",(0,s.jsxs)(n.p,{children:["Wenn der Ultraschallsensor nicht an den Standard-Trigger ",(0,s.jsx)(n.code,{children:"pin13"})," und Echo ",(0,s.jsx)(n.code,{children:"pin14"})," angeschlossen ist, k\xf6nnen die Pins als Argumente angegeben werden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"from microbit import pin0, pin1\nfrom maqueen import ultrasonic\n\nultrasonic(trig=pin0, echo=pin1) # => 0-500\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);