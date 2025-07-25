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

### Pins
```py
from microbit import pin0, pin1
from maqueen import ultrasonic

ultrasonic(trig=pin0, echo=pin1) # => 0-500
```
### Cache-Dauer
Um eine Distanzmessung vorzunehmen, wird ein ein Ultraschallimpuls gesendet und max. 0.1 Sekunden auf die Antwort gewartet. Wird in dieser Zeit kein Echo empfangen, wird:
- der letzte gemessene Wert zurückgegeben, sofern dieser nicht älter als 1 Sekunde (oder `cache_duration` Mikrosekunden) ist
- andernfalls wird 100'000 cm (1 km) zurückgegeben (didaktische Überlegung: soll 10 cm vor einem Hindernis gestoppt werden, muss keine Fallunterscheidung gemacht werden, da 100'000 cm immer größer ist als 10 cm).


```py

ultrasonic(cache_duration = 0) # => gibt immer 1 km zurück, wenn kein Echo empfangen wird
ultrasonic(cache_duration = 5_000_000) # => gibt den letzten Messwert zurück,
                                       #    falls dieser nicht älter als 5 Sekunden ist
```
