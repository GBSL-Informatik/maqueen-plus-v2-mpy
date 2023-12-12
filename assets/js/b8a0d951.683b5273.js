"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2719],{4791:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var d=i(5893),r=i(1151);const l={sidebar_position:3},s="LED's RGB",c={id:"api/led-rgb",title:"LED's RGB",description:"F\xfcr die Steuerung der beiden vier unterseitig montierten Farb-LED's kann die Funktion led_rgb verwendet werden.",source:"@site/versioned_docs/version-2.0.0/api/led-rgb.md",sourceDirName:"api",slug:"/api/led-rgb",permalink:"/maqueen-plus-v2-mpy/docs/2.0.0/api/led-rgb",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-2.0.0/api/led-rgb.md",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LED's rot",permalink:"/maqueen-plus-v2-mpy/docs/2.0.0/api/led-red"},next:{title:"Liniensensor",permalink:"/maqueen-plus-v2-mpy/docs/2.0.0/api/line-tracking"}},t={},h=[{value:"API",id:"api",level:2},{value:"<code>led_rgb(rgb)</code>",id:"led_rgb",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Beispiel",id:"beispiel",level:4},{value:"<code>led_brightness(brightness)</code>",id:"led_brightness",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"Beispiel",id:"beispiel-1",level:4},{value:"<code>led_rgb_off()</code>",id:"led_rgb_off",level:3},{value:"Parameter",id:"parameter-2",level:4},{value:"Beispiel",id:"beispiel-2",level:4},{value:"<code>rgb(r, g, b)</code>",id:"rgb",level:3},{value:"Parameter",id:"parameter-3",level:4},{value:"Beispiel",id:"beispiel-3",level:4},{value:"<code>hsl(h, s, l)</code>",id:"hsl",level:3},{value:"Parameter",id:"parameter-4",level:4},{value:"Beispiel",id:"beispiel-4",level:4}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Dl:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Dl",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"leds-rgb",children:"LED's RGB"}),"\n",(0,d.jsxs)(n.p,{children:["F\xfcr die Steuerung der beiden vier unterseitig montierten Farb-LED's kann die Funktion ",(0,d.jsx)(n.code,{children:"led_rgb"})," verwendet werden."]}),"\n",(0,d.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,d.jsx)(n.p,{children:"F\xfcr die Farb-LED's k\xf6nnen folgende Konstanten benutzt werden:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"class ColorLED:\n    L1 = 0\n    L2 = 1\n    R2 = 2\n    R1 = 3\n    ALL = 4\n\nclass Color:\n    RED = 0xFF0000\n    ORANGE = 0xFFA500\n    YELLOW = 0xFFFF00\n    GREEN = 0x00FF00\n    BLUE = 0x0000FF\n    INDIGO = 0x4B0082\n    VIOLET = 0x8A2BE2\n    PURPLE = 0xFF00FF\n    WHITE = 0xFFFFFF\n    BLACK = 0x000000\n"})}),"\n",(0,d.jsx)(n.h3,{id:"led_rgb",children:(0,d.jsx)(n.code,{children:"led_rgb(rgb)"})}),"\n",(0,d.jsx)(n.p,{children:"Steuert die Farbe der RGB-LED's. Standardm\xe4ssig wird die gleiche Farbe f\xfcr alle 4 LED's verwendet."}),"\n",(0,d.jsx)(n.p,{children:"Die Farb-LED's sind wie folgt angeordnet:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"   /''''^''''\\\n  /  L1   R1  \\\n |             |\n |L2         R2|\no|.............|o\n"})}),"\n",(0,d.jsx)(n.h4,{id:"parameter",children:"Parameter"}),"\n",(0,d.jsxs)(l,{children:[(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"rgb"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int"})})}),(0,d.jsx)("dd",{children:(0,d.jsxs)(n.p,{children:["Farbe als Integer. Siehe ",(0,d.jsx)(n.code,{children:"Color"})," Konstanten oder die Hilfsfunktion ",(0,d.jsx)(n.a,{href:"#rgb",children:(0,d.jsx)(n.code,{children:"rgb"})}),"."]})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"led: int[0-4]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"optional"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.L1"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.L2"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.R1"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.R2"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.ALL"})})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"brightness: int[0-255]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"optional"})})}),(0,d.jsx)("dd",{children:(0,d.jsxs)(n.p,{children:["Helligkeit der LED's. Standardm\xe4ssig wird die globale Helligkeit verwendet. Siehe ",(0,d.jsx)(n.a,{href:"#led_brightness",children:(0,d.jsx)(n.code,{children:"led_brightness"})})," um die globale Helligkeit zu ver\xe4ndern."]})})]}),"\n",(0,d.jsx)(n.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"# alle Farb-LED's in rot einschalten\nled_rgb(Color.RED)\n\n# die LED vorne links auf gr\xfcn setzen\nled_rgb(Color.GREEN, ColorLED.L1)\n\n# eigene RGB-Farbe vorn rechts setzen\nled_rgb(rgb(255, 128, 0), ColorLED.R1)\n\n# Blau f\xfcr alle LED's bei einer Helligkeitsstufe 50 setzen.\nled_rgb(Color.BLUE, brightness=50) # \xc4ndert die globale Helligkeit nicht.\n"})}),"\n",(0,d.jsx)(n.h3,{id:"led_brightness",children:(0,d.jsx)(n.code,{children:"led_brightness(brightness)"})}),"\n",(0,d.jsx)(n.p,{children:"Setzt die globale Helligkeit der RGB-LED's."}),"\n",(0,d.jsx)(n.h4,{id:"parameter-1",children:"Parameter"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"brightness: int[0-255]"}),": Helligkeit der LED's. ",(0,d.jsx)(n.code,{children:"0"})," ist aus, ",(0,d.jsx)(n.code,{children:"255"})," ist volle Helligkeit."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"led_brightness(255) # volle Helligkeit\nled_brightness(0) # LED's aus\n"})}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["Wenn die Helligkeit w\xe4hrend dem Aufruf von ",(0,d.jsx)(n.a,{href:"#led_rgb",children:(0,d.jsx)(n.code,{children:"led_rgb"})})," auf ",(0,d.jsx)(n.code,{children:"0"})," ist, so wird die Helligkeit wieder auf ",(0,d.jsx)(n.code,{children:"255"})," gesetzt."]})}),"\n",(0,d.jsx)(n.h3,{id:"led_rgb_off",children:(0,d.jsx)(n.code,{children:"led_rgb_off()"})}),"\n",(0,d.jsxs)(n.p,{children:["Schaltet alle RGB-LED's aus (schwarz, ",(0,d.jsx)(n.code,{children:"0"}),")."]}),"\n",(0,d.jsx)(n.h4,{id:"parameter-2",children:"Parameter"}),"\n",(0,d.jsxs)(l,{children:[(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"led: int[0-4]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"optional"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.L1"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.L2"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.R1"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.R2"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"ColorLED.ALL"})})})]}),"\n",(0,d.jsx)(n.h4,{id:"beispiel-2",children:"Beispiel"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"led_rgb_off() # schaltet alle LED's aus\nled_rgb_off(ColorLED.L2) # schaltet die untere linke LED aus\n"})}),"\n",(0,d.jsx)(n.h3,{id:"rgb",children:(0,d.jsx)(n.code,{children:"rgb(r, g, b)"})}),"\n",(0,d.jsx)(n.p,{children:"Hilfsfunktion um eine RGB-Farbe in einen Integer zu konvertieren."}),"\n",(0,d.jsx)(n.h4,{id:"parameter-3",children:"Parameter"}),"\n",(0,d.jsxs)(l,{children:[(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"r: int[0-255]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"Rotanteil"})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"g: int[0-255]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"Gr\xfcnanteil"})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"b: int[0-255]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"Blauanteil"})})]}),"\n",(0,d.jsx)(n.h4,{id:"beispiel-3",children:"Beispiel"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"rgb(255, 128, 0) # => 16744448  (oder als Hex-Wert: 0xFF8000)\n\nled_rgb(rgb(255, 128, 0)) # => LED's in orange\n"})}),"\n",(0,d.jsx)(n.h3,{id:"hsl",children:(0,d.jsx)(n.code,{children:"hsl(h, s, l)"})}),"\n",(0,d.jsx)(n.p,{children:"Hilfsfunktion um eine HSL-Farbe in einen Integer zu konvertieren."}),"\n",(0,d.jsx)(n.h4,{id:"parameter-4",children:"Parameter"}),"\n",(0,d.jsxs)(l,{children:[(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"h: int[0-360]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"Farbton"})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"s: int[0-100]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"S\xe4ttigung"})}),(0,d.jsx)("dt",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"l: int[0-100]"})})}),(0,d.jsx)("dd",{children:(0,d.jsx)(n.p,{children:"Helligkeit - achtung, nicht zu verwechseln mit der globalen Helligkeit der LED's! Hier wird nur die Helligkeit der Farbe angegeben."})})]}),"\n",(0,d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,d.jsx)("div",{style:{maxWidth:"220px"},children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:i(984).Z+"",width:"400",height:"400"})})})}),"\n",(0,d.jsx)(n.h4,{id:"beispiel-4",children:"Beispiel"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-py",children:"hsl(0, 100, 50) # => 16711680  (oder als Hex-Wert: 0xFF0000)\n\nled_rgb(hsl(0, 100, 50)) # => LED's in rot\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},984:(e,n,i)=>{i.d(n,{Z:()=>d});const d=i.p+"assets/images/hsl-color-circle-e6a371dac53d8bb75c0dfa8ef6038337.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var d=i(7294);const r={},l=d.createContext(r);function s(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);