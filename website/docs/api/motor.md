# Motor

Für die Steuerung der Motoren gibt es die Funktionen `motor_run` und `motor_stop`.

### `motor_run(motor: int, speed: int)`
Lässt den Motor mit der angegebenen Geschwindigkeit laufen.

#### Parameter
- `speed`: Werte von `-255` bis `255`. Ein negativer Wert lässt den Motor in die gegengesetzte Richtung drehen.
- `dir`: optional, `Direction.FORWARD` or `Direction.BACKWARD`

#### Beispiel

```py
# den linke Motor mit 100% vorwärts drehen lassen
motor_run(Motor.LEFT, 255)
# den rechten Motor rückwärts mit 50% drehen lassen
motor_run(Motor.RIGHT, 128, Direction.BACKWARD)
# oder äquivalent
motor_run(Motor.RIGHT, -128)

# beide Motoren vorwärts drehen mit 100%
motor_run(Motor.ALL, 255)
```

### `motor_stop()`

Stoppt beide Motoren (oder optional den angegebenen Motor)

#### Parameter
- `motor`: optional, `Motor.LEFT`, `Motor.RIGHT` oder `Motor.ALL`

#### Beispiel
```py
# stoppt beide Motoren
motor_stop()
# stoppt den linken Motor
motor_stop(Motor.LEFT)
```

### `motor_calibration(motor, calibration)`

Die Motoren des Maqueen Plus V2.0 sind nicht perfekt gleich. Mit dieser Funktion kann eine Kalibration mit den Geschwindigkeiten gesetzt werden.
#### Parameter
- `motor`: `Motor.LEFT` oder `Motor.RIGHT`
- `calibration`: Liste von Tupeln mit Geschwindigkeit und dem Korrekturfaktor. Die Geschwindigkeit muss zwischen 0 und 255 liegen. Der Korrekturfaktor ist ein Wert > 0. Der Korrekturfaktor wird linear interpoliert.
#### Beispiel

```py
# set calibration for left motor with 2 calibration points. Correction factors are interpolated linear.
motor_calibration(Motor.LEFT, [(25, 1.3), (200, 1.2)])
# set calibration for right motor with 1 calibration point
motor_stop(Motor.RIGHT, [(100, 1.1)])
# reset calibration for left motor
motor_calibration(Motor.LEFT, [])

# add multiple calibration points. The correction factors are interpolated linear
motor_calibration(Motor.LEFT, [(25, 1.3), (50, 1.2), (100, 1.4), (200, 1.0)]) # => correction factor for speed 75 is 1.3
```