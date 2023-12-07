# API

- [Maqueen Version](#mawueen-version)
- [Motor](./motor.md)
- [LED's rot](./led-red.md)
- [LED's RGB](./led-rgb.md)
- [Liniensensor](./line-tracking.md)
- [Ultraschallsensor](./ultrasonic.md)
- [Kompass](./compass.md)

Inspiriert von [👉 DFRobot pxt-DFRobot_MaqueenPlus_v20](https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20/blob/master/maqueenPlusV2.ts).

### Maqueen Version
Gibt die Version des Mawueen-Boards zurück.

```py
version() # => 'MBT0021-EN-2.1'
```

### Changelog

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