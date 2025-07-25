# Kalibrationsroutine

WIP
---

```py
# Imports go at the top
from microbit import *
from maqueen import *
# [(25, 1.11), (100, 1.235), (200, 1.27)]
SPEEDS = [25, 50, 100, 150, 200]
FACTOR_SHIFT = 0.01
speed_idx = 0

motor_stop()
motor_calibration(Motor.LEFT, [(SPEEDS[0], 1)])
motor_calibration(Motor.RIGHT, [(25, 1.11), (100, 1.235), (200, 1.27)])
state = 'INIT'
while True:
    if state == 'INIT':
        motor_run(Motor.ALL, -SPEEDS[speed_idx])
        print('Rechts (A) oder Links (B)?')
        state = 'LEFT_OR_RIGHT'
    elif state == 'LEFT_OR_RIGHT':
        if button_a.was_pressed():
            print('[rechts]')
            state = 'ADJUST_RIGHT'
            print('+ [A], - [B]')
        elif button_b.was_pressed():
            print('[links]')
            state = 'ADJUST_LEFT'
            print('+ [A], - [B]')
    elif state == 'ADJUST_LEFT':
        m = get_calib(Motor.LEFT)
        f = m[-1]
        if button_a.was_pressed():
            m[len(m) - 1] = (f[0], f[1] + FACTOR_SHIFT)
            motor_calibration(Motor.LEFT, m)
        elif button_b.was_pressed():
            m[len(m) - 1] = (f[0], f[1] - FACTOR_SHIFT)
            motor_calibration(Motor.LEFT, m)
        if f != get_calib(Motor.LEFT)[-1]:
            motor_run(Motor.ALL, -SPEEDS[speed_idx])
            print('Speed LEFT:', get_calib(Motor.LEFT)[-1])
            
    elif state == 'ADJUST_RIGHT':
        m = get_calib(Motor.RIGHT)
        f = m[-1]
        if button_a.was_pressed():
            m[len(m) - 1] = (f[0], f[1] + FACTOR_SHIFT)
            motor_calibration(Motor.RIGHT, m)
        elif button_b.was_pressed():
            m[len(m) - 1] = (f[0], f[1] - FACTOR_SHIFT)
            motor_calibration(Motor.RIGHT, m)
        if f != get_calib(Motor.RIGHT)[-1]:
            motor_run(Motor.ALL, -SPEEDS[speed_idx])
            print('Speed RIGHT:', get_calib(Motor.RIGHT)[-1])
```