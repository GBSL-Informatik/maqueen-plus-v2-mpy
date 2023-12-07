---
sidebar_position: 5
---
# Ultraschallsensor

Der Ultraschallsensor misst die Entfernung zu einem Objekt in Zentimetern. Mit der Funktion `ultrasonic` kann die Entfernung gemessen werden.

## API

### `ultrasonic()`
Gibt die Entfernung in Zentimetern zurück. Die maximal messbare Entfernung beträgt 500 cm.

#### Beispiel
```py
ultrasonic() # => 0-500
```

## Konfiguration
Wenn der Ultraschallsensor nicht an den Standard-Trigger `pin13` und Echo `pin14` angeschlossen ist, können die Pins als Argumente angegeben werden.

```py
from microbit import pin0, pin1
from maqueen import ultrasonic

ultrasonic(trig=pin0, echo=pin1) # => 0-500
```
