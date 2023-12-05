---
sidebar_position: 5
---
# Ultraschallsensor


#### `ultrasonic()`
Returns the distance in centimeters.

```py
ultrasonic() # => 0-500
```

When the ultrasonic sensor is not connected to the default trigger `pin13` and echo `pin14`, you can specify the pins as arguments.

```py
ultrasonic(trig=pin0, echo=pin1) # => 0-500
```
