# Hindernisumgehung

```py
from microbit import *
from maqueen import *
from random import randint

motor_run(Motor.ALL, 100)
while True:
    if ultrasonic() < 15:
        motor_run(Motor.LEFT, -100)
        sleep(randint(200, 1000))
        motor_run(Motor.ALL, 100)
```