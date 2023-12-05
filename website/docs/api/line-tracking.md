---
sidebar_position: 4
---
# Liniensensor

```py
class LineSensor:
    SENSOR_L1 = 0
    SENSOR_M = 1
    SENSOR_R1 = 2
    SENSOR_L2 = 3
    SENSOR_R2 = 4
    ALL = 5
```

#### `line_sensor(sensor: int)`
Returns the value of the specified line tracking sensor.

```
   /''''^''''\
  /  L1 M R1  \
 |             |
 |L2         R2|
o|.............|o
```

```py
line_sensor(LineSensor.M) # => 0 or 1
```

When `LineSensor.ALL` is used, a 5-tuple with values of all sensors is returned. The order is clockwise starting with the leftmost sensor: `(L2, L1, M, R1, R2)`

```py
line_sensor(LineSensor.ALL) # => tuple of all sensors, (0, 1, 1, 0, 1)
                            # => L1, M and R2 are on the line
```

#### `line_sensor_data(sensor: int)`
Returns the raw data of the specified line tracking sensor.

```py
line_sensor_data(LineSensor.M) # => 0-1023
```

When `LineSensor.ALL` is used, a 5-tuple with values of all sensors is returned. The order is clockwise starting with the leftmost sensor: `(L2, L1, M, R1, R2)`

```py
line_sensor_data(LineSensor.ALL) # => tuple of all sensors, (12, 1023, 721, 23, 222)
                                 # => All sensors read a value between 0 and 1023
```