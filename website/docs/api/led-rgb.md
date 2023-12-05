---
sidebar_position: 3
---
# LED's RGB


Für die Steuerung der beiden vier unterseitig montierten Farb-LED's kann die Funktion `led_rgb` verwendet werden.

## API
Für die Farb-LED's können folgende Konstanten benutzt werden:

```py
class ColorLED:
    L1 = 0
    L2 = 1
    R2 = 2
    R1 = 3
    ALL = 4

class Color:
    RED = 0xFF0000
    ORANGE = 0xFFA500
    YELLOW = 0xFFFF00
    GREEN = 0x00FF00
    BLUE = 0x0000FF
    INDIGO = 0x4B0082
    VIOLET = 0x8A2BE2
    PURPLE = 0xFF00FF
    WHITE = 0xFFFFFF
    BLACK = 0x000000
```


### `led_rgb(rgb)`
Steuert die Farbe der RGB-LED's. Standardmässig wird die gleiche Farbe für alle 4 LED's verwendet.

Die Farb-LED's sind wie folgt angeordnet:

```
   /''''^''''\
  /  L1   R1  \
 |             |
 |L2         R2|
o|.............|o
```

#### Parameter
- `rgb: int`: Farbe als Integer. Siehe `Color` Konstanten oder die Hilfsfunktion [`rgb`](#rgb).
- `led: int[0-4]`: *optional*, `ColorLED.L1`, `ColorLED.L2`, `ColorLED.R1`, `ColorLED.R2` oder `ColorLED.ALL`
- `brightness: int[0-255]`: *optional*, Helligkeit der LED's. Standardmässig wird die globale Helligkeit verwendet. Siehe [`led_brightness`](#led_brightness) um die globale Helligkeit zu verändern.

#### Beispiel
```py
# alle Farb-LED's in rot einschalten
led_rgb(Color.RED)

# die LED vorne links auf grün setzen
led_rgb(Color.GREEN, ColorLED.L1)

# eigene RGB-Farbe vorn rechts setzen
led_rgb(rgb(255, 128, 0), ColorLED.R1)

# Blau für alle LED's bei einer Helligkeitsstufe 50 setzen.
led_rgb(Color.BLUE, brightness=50) # Ändert die globale Helligkeit nicht.
```

### `led_brightness(brightness)` {#led_brightness}
Setzt die globale Helligkeit der RGB-LED's.

#### Parameter
- `brightness: int[0-255]`: Helligkeit der LED's. `0` ist aus, `255` ist volle Helligkeit.

#### Beispiel
```py
led_brightness(255) # volle Helligkeit
led_brightness(0) # LED's aus
```

### `led_rgb_off()`

Schaltet alle RGB-LED's aus (schwarz, `0`).

#### Parameter
- `led: int[0-4]`: *optional*, `ColorLED.L1`, `ColorLED.L2`, `ColorLED.R1`, `ColorLED.R2` oder `ColorLED.ALL`
  
#### Beispiel

```py
led_rgb_off() # schaltet alle LED's aus
led_rgb_off(ColorLED.L2) # schaltet die untere linke LED aus
```

### `rgb(r, g, b)` {#rgb}

Hilfsfunktion um eine RGB-Farbe in einen Integer zu konvertieren.

#### Parameter
- `r: int[0-255]`: Rotanteil
- `g: int[0-255]`: Grünanteil
- `b: int[0-255]`: Blauanteil

#### Beispiel

```py
rgb(255, 128, 0) # => 16744448  (oder als Hex-Wert: 0xFF8000)
```