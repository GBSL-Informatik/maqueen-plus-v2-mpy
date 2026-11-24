# API

- [Maqueen Version](#mawueen-version)
- [Motor](./motor.md)
- [LED's rot](./led-red.md)
- [LED's RGB](./led-rgb.md)
- [Liniensensor](./line-tracking.md)
- [Ultraschallsensor](./ultrasonic.md)

Inspiriert von [👉 DFRobot pxt-DFRobot_MaqueenPlus_v20](https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20/blob/master/maqueenPlusV2.ts).

### Maqueen Version
Gibt die Version des Maqueen-Boards zurück.

```py
version() # => 'MBT0021-EN-2.1'
```

## Changelog

### V2.1.0 (24.11.2026)

#### 🧨 Breaking Changes
- `mq_heading()`, `heading_diff(heading0)` und `heading_set_window_size(n)` wurden entfernt.

#### 🎉 New Features
- [Software-Kalibrierung der Liniensensoren](./line-tracking.md#software-kalibrierung): Für jeden Liniensensor kann ein eigener Schwellwert gesetzt werden. Ist eine Kalibrierung vorhanden, verwenden `line_sensor` und `line_sensor_all` diese Schwellwerte. Die Kalibrierung wird auf dem micro:bit gespeichert und bleibt nach einem Neustart erhalten.
- `recalibrate()`: Interaktive Kalibrierung der Liniensensoren (Knopf A: messen, Knopf B: beenden).
- `calibrate(thresholds, margin, persist)`: Setzt die Schwellwerte direkt. Ohne Schwellwerte wird die Kalibrierung gelöscht.
- `get_calibration()`: Gibt die aktuellen Schwellwerte zurück.
- `show_line_state()`: Zeigt in der obersten Zeile der LED-Matrix an, ob die Liniensensoren Schwarz oder Weiss sehen.

#### 🐛 Bug Fixes
- `ultrasonic`: Der Zeitpunkt der letzten Messung wird nur noch bei einer erfolgreichen Messung aktualisiert, damit der zwischengespeicherte Wert nach `cache_duration` korrekt verfällt.

### V2.0.2 (25.07.2025)

#### 🧨 Breaking Changes
- `ultrasonic`: Die Messung wurde überarbeitet. Distanzen werden neu auf max. 400 cm (statt 500 cm) begrenzt. Wird kein Echo empfangen, wird nicht mehr `0` zurückgegeben, sondern der letzte Messwert (falls nicht älter als `cache_duration`) oder 100'000 cm (1 km).

#### 🎉 New Features
- `ultrasonic(trig, echo, cache_duration)`: Neuer Parameter `cache_duration` (Standard: 1 Sekunde = `1_000_000` Mikrosekunden), wie lange der letzte Messwert bei einem fehlenden Echo zurückgegeben wird.

#### 🐛 Bug Fixes
- `line_sensor_data`: Gibt bei einem unbekannten Sensor `0` statt `None` zurück.

### V2.0.1 (12.12.2023)

Nur kleinere Anpassungen, keine Breaking Changes.

#### 🎉 New Features
- `motor_get_calibration(motor)`: Gibt eine Kopie der aktuellen Kalibration für den angegebenen Motor zurück.

#### 🐛 Bug Fixes
- `_get_speed` behebe Fehler, wenn Geschwindigkeit extrapoliert wird.

### V2.0.0 (7.12.2023)

#### 🧨 Breaking Changes
- `LineSensor` hat jetzt die Werte `L1`, `L2`, `M`, `R1`, `R2` statt `SENSOR_L1`, `SENSOR_L2`, `SENSOR_M`, `SENSOR_R1`, `SENSOR_R2`. ⚠️ `SENSOR_ALL` wurde entfernt. Verwende stattdessen `line_sensor_all()`.
- `line_sensor`: Es können nur einzelne Werte (`L1, L2, M, R1, R2`) abgefragt werden, um die Editor-Autovervollständigung zu unterstützen.
- `line_sensor_data`: Es können nur einzelne Werte (`L1, L2, M, R1, R2`) abgefragt werden, um die Editor-Autovervollständigung zu unterstützen.

#### 🎉 New Features
- `line_sensor_all()`: Gibt ein 5-Tupel mit den Werten (0, 1) von allen Fünf Liniensensoren zurück. Die Reihenfolge ist im Uhrzeigersinn, beginnend mit dem linken Sensor: `(L2, L1, M, R1, R2)`
- `line_sensor_data_all()`: Gibt ein 5-Tupel mit den Werten (0-255) von allen Fünf Liniensensoren zurück. Die Reihenfolge ist im Uhrzeigersinn, beginnend mit dem linken Sensor: `(L2, L1, M, R1, R2)`
- `hsl(h, s, l)`: Hilfsfunktion um Farben im HSL-Farbraum zu beschreiben. Kann wie `rgb` verwendet werden.

#### 🐛 Bug Fixes
- `led_rgb`: Wird `led_rgb` ohne Helligkeit aufgerufen und liegt die globale Helligkeit dabei unter dem Schwellenwert von `2`, so wird die Helligkeit auf das Maximum (255) gesetzt.
