"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24],{8415:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var i=r(5893),l=r(1151);const d={sidebar_position:3},s="LED's RGB",t={id:"api/led-rgb",title:"LED's RGB",description:"F\xfcr die Steuerung der beiden vier unterseitig montierten Farb-LED's kann die Funktion led_rgb verwendet werden.",source:"@site/docs/api/led-rgb.md",sourceDirName:"api",slug:"/api/led-rgb",permalink:"/maqueen-plus-v2-mpy/docs/api/led-rgb",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/packages/create-docusaurus/templates/shared/docs/api/led-rgb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LED's rot",permalink:"/maqueen-plus-v2-mpy/docs/api/led-red"}},c={},o=[{value:"API",id:"api",level:2},{value:"<code>led_rgb(rgb)</code>",id:"led_rgbrgb",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Beispiel",id:"beispiel",level:4},{value:"<code>led_brightness(brightness)</code>",id:"led_brightness",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"Beispiel",id:"beispiel-1",level:4},{value:"<code>led_rgb_off()</code>",id:"led_rgb_off",level:3},{value:"Parameter",id:"parameter-2",level:4},{value:"Beispiel",id:"beispiel-2",level:4},{value:"<code>rgb(r, g, b)</code>",id:"rgb",level:3},{value:"Parameter",id:"parameter-3",level:4},{value:"Beispiel",id:"beispiel-3",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"leds-rgb",children:"LED's RGB"}),"\n",(0,i.jsxs)(n.p,{children:["F\xfcr die Steuerung der beiden vier unterseitig montierten Farb-LED's kann die Funktion ",(0,i.jsx)(n.code,{children:"led_rgb"})," verwendet werden."]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr die Farb-LED's k\xf6nnen folgende Konstanten benutzt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"class ColorLED:\n    L1 = 0\n    L2 = 1\n    R2 = 2\n    R1 = 3\n    ALL = 4\n\nclass Color:\n    RED = 0xFF0000\n    ORANGE = 0xFFA500\n    YELLOW = 0xFFFF00\n    GREEN = 0x00FF00\n    BLUE = 0x0000FF\n    INDIGO = 0x4B0082\n    VIOLET = 0x8A2BE2\n    PURPLE = 0xFF00FF\n    WHITE = 0xFFFFFF\n    BLACK = 0x000000\n"})}),"\n",(0,i.jsx)(n.h3,{id:"led_rgbrgb",children:(0,i.jsx)(n.code,{children:"led_rgb(rgb)"})}),"\n",(0,i.jsx)(n.p,{children:"Steuert die Farbe der RGB-LED's. Standardm\xe4ssig wird die gleiche Farbe f\xfcr alle 4 LED's verwendet."}),"\n",(0,i.jsx)(n.p,{children:"Die Farb-LED's sind wie folgt angeordnet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"   /''''^''''\\\n  /  L1   R1  \\\n |             |\n |L2         R2|\no|.............|o\n"})}),"\n",(0,i.jsx)(n.h4,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rgb: int"}),": Farbe als Integer. Siehe ",(0,i.jsx)(n.code,{children:"Color"})," Konstanten oder die Hilfsfunktion ",(0,i.jsx)(n.a,{href:"#rgb",children:(0,i.jsx)(n.code,{children:"rgb"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"led: int[0-4]"}),": ",(0,i.jsx)(n.em,{children:"optional"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.L1"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.L2"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.R1"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.R2"})," oder ",(0,i.jsx)(n.code,{children:"ColorLED.ALL"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"brightness: int[0-255]"}),": ",(0,i.jsx)(n.em,{children:"optional"}),", Helligkeit der LED's. Standardm\xe4ssig wird die globale Helligkeit verwendet. Siehe ",(0,i.jsx)(n.a,{href:"#led_brightness",children:(0,i.jsx)(n.code,{children:"led_brightness"})})," um die globale Helligkeit zu ver\xe4ndern."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"beispiel",children:"Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"# alle Farb-LED's in rot einschalten\nled_rgb(Color.RED)\n\n# die LED vorne links auf gr\xfcn setzen\nled_rgb(Color.GREEN, ColorLED.L1)\n\n# eigene RGB-Farbe vorn rechts setzen\nled_rgb(rgb(255, 128, 0), ColorLED.R1)\n\n# Blau f\xfcr alle LED's bei einer Helligkeitsstufe 50 setzen.\nled_rgb(Color.BLUE, brightness=50) # \xc4ndert die globale Helligkeit nicht.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"led_brightness",children:(0,i.jsx)(n.code,{children:"led_brightness(brightness)"})}),"\n",(0,i.jsx)(n.p,{children:"Setzt die globale Helligkeit der RGB-LED's."}),"\n",(0,i.jsx)(n.h4,{id:"parameter-1",children:"Parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"brightness: int[0-255]"}),": Helligkeit der LED's. ",(0,i.jsx)(n.code,{children:"0"})," ist aus, ",(0,i.jsx)(n.code,{children:"255"})," ist volle Helligkeit."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"beispiel-1",children:"Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"led_brightness(255) # volle Helligkeit\nled_brightness(0) # LED's aus\n"})}),"\n",(0,i.jsx)(n.h3,{id:"led_rgb_off",children:(0,i.jsx)(n.code,{children:"led_rgb_off()"})}),"\n",(0,i.jsxs)(n.p,{children:["Schaltet alle RGB-LED's aus (schwarz, ",(0,i.jsx)(n.code,{children:"0"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"parameter-2",children:"Parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"led: int[0-4]"}),": ",(0,i.jsx)(n.em,{children:"optional"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.L1"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.L2"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.R1"}),", ",(0,i.jsx)(n.code,{children:"ColorLED.R2"})," oder ",(0,i.jsx)(n.code,{children:"ColorLED.ALL"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"beispiel-2",children:"Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"led_rgb_off() # schaltet alle LED's aus\nled_rgb_off(ColorLED.L2) # schaltet die untere linke LED aus\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rgb",children:(0,i.jsx)(n.code,{children:"rgb(r, g, b)"})}),"\n",(0,i.jsx)(n.p,{children:"Hilfsfunktion um eine RGB-Farbe in einen Integer zu konvertieren."}),"\n",(0,i.jsx)(n.h4,{id:"parameter-3",children:"Parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"r: int[0-255]"}),": Rotanteil"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"g: int[0-255]"}),": Gr\xfcnanteil"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b: int[0-255]"}),": Blauanteil"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"beispiel-3",children:"Beispiel"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"rgb(255, 128, 0) # => 16744448  (oder als Hex-Wert: 0xFF8000)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var i=r(7294);const l={},d=i.createContext(l);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);