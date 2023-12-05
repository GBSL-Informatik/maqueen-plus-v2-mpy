---
sidebar_position: 6
---
# Kompass


### Compass Heading
Since the compass is mounted in the maqueen such that the y-axis points upwards and the z-axis points forward, the heading calculated by the micro:bit is not correct (it assumes the y-axis points forward and the z-axis points upwards).

Therefore, a tilt-compensated compass heading is calculated using the accelerometer and magnetometer data assuming the micro:bit is mounted in the maqueen.

#### `mq_heading()`

The heading is returned in degrees between 0 and 359. The heading is calculated using the accelerometer and magnetometer data.

! Pay attention to inferring the heading while the maqueen is moving, since the motors produce magnetic noise.

```py
mq_heading() # => 0-359
```

#### `heading_diff(heading0: float, apply_window: bool = True)`

Returns the difference between the current heading and the specified heading in degrees between -180 and 180.

To get more stable results, a moving average filter is applied to the heading (default window size is 1). The window size can be changed by setting the global variable `heading_set_window_size` (see below).

```py
initial_heading = 20
# maqueen turned by 45 degrees to the right
heading_diff(initial_heading) # => 45
# maqueen now turned by 90 degrees to the left
heading_diff(initial_heading) # => -45
```
the moving average filter can be disabled by setting `apply_window` to `False`.

```py
heading_diff(initial_heading, apply_window=False) # => -45
```

#### `heading_set_window_size(size: int)`
Sets the window size of the moving average filter used to calculate the heading difference.

```py
heading_set_window_size(5) # => window size of 5
```

To disable the moving average filter, set the window size to `1`.

```py
heading_set_window_size(1) # => no moving average filter
```