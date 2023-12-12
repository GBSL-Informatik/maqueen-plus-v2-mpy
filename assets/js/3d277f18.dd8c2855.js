"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1481],{9553:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>_,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=i(5893),t=i(1151);const o="'''\nVersion: 1.0.0\n@see https://github.com/DFRobot/pxt-DFRobot_MaqueenPlus_v20/blob/master/maqueenPlusV2.ts\n'''\nfrom micropython import const\nfrom microbit import i2c, display, Image, pin13, pin14, pin15, accelerometer, compass\nfrom machine import time_pulse_us\nfrom neopixel import NeoPixel\nfrom time import sleep_ms\nfrom math import sqrt, asin, cos, sin, atan2, pi\n\nclass Motor:\n    LEFT = 0\n    RIGHT = 1\n    ALL = 2\n\nclass Direction:\n    FORWARD = 0\n    BACKWARD = 1\n\nclass Led:\n    LEFT = 0\n    RIGHT = 1\n    ALL = 2\n\nclass LineSensor:\n    SENSOR_L1 = 0\n    SENSOR_M = 1\n    SENSOR_R1 = 2\n    SENSOR_L2 = 3\n    SENSOR_R2 = 4\n    ALL = 5\n\nclass Color:\n    RED = 0xFF0000\n    ORANGE = 0xFFA500\n    YELLOW = 0xFFFF00\n    GREEN = 0x00FF00\n    BLUE = 0x0000FF\n    INDIGO = 0x4B0082\n    VIOLET = 0x8A2BE2\n    PURPLE = 0xFF00FF\n    WHITE = 0xFFFFFF\n    BLACK = 0x000000\n\nclass ColorLED:\n    L1 = 0\n    L2 = 1\n    R2 = 2\n    R1 = 3\n    ALL = 4\n\nI2C_ADDR = const(0x10)\nADC0_REGISTER = const(0X1E)\nADC1_REGISTER = const(0X20)\nADC2_REGISTER = const(0X22)\nADC3_REGISTER = const(0X24)\nADC4_REGISTER = const(0X26)\nLEFT_LED_REGISTER = const(0X0B)\nRIGHT_LED_REGISTER = const(0X0C)\nLEFT_MOTOR_REGISTER = const(0X00)\nRIGHT_MOTOR_REGISTER = const(0X02)\nLINE_STATE_REGISTER = const(0X1D)\nVERSION_CNT_REGISTER = const(0X32)\nVERSION_DATA_REGISTER = const(0X33)\n\n_ULTRASONIC_PULSE_LENGTH_US = const(500*58)\n\n_neo_pixel = NeoPixel(pin15, 4)\n_brightness = 0xff\n_heading_window_size = 1\n_heading_buffer = [0.0]\n_heading_buffer_index = 0\n_motor_calibration = [[], []]\n\ndef I2CInit():\n    version_v = 0\n    i2c.write(I2C_ADDR, bytearray([VERSION_CNT_REGISTER]))\n    version_v = i2c.read(I2C_ADDR, 1) # read 1 byte\n    while not version_v:\n        display.show(Image('90009:09090:00900:09090:90009'))\n        sleep_ms(500)\n        display.clear()\n        i2c.write(I2C_ADDR, bytearray([VERSION_CNT_REGISTER]))\n        version_v = i2c.read(I2C_ADDR, 1) # read 1 byte\n    display.show(Image('00000:00009:00090:90900:09000'))\n    sleep_ms(500)\n    display.clear()\n\ndef motor_calibration(motor: int, speed_factors: list):\n    '''\n    Maqueen robots tend to have different motor speeds.\n    You can provide factors for different speeds to inter/extrapolate\n    new speeds.\n    ```\n    motor_calibration(Motor.Right, [(20, 1.28), (200, 1.22)])\n    '''\n    if motor > 1:\n        print('No motor index', motor, 'found. Calibration is ignored')\n        return\n    _motor_calibration[motor] = sorted(speed_factors, key=lambda x: x[0])\n\ndef _get_speed(motor: int, speed: int):\n    num_calibs = len(_motor_calibration[motor])\n    if motor > 1 or num_calibs == 0:\n        return speed\n    elif num_calibs == 1:\n        return int(_motor_calibration[motor][0][1] * speed)\n    elif num_calibs == 2:\n        calibs = _motor_calibration[motor]\n        x1 = calibs[0][0]\n        y1 = calibs[0][1]\n        x2 = calibs[1][0]\n        y2 = calibs[1][1]\n        m = (y2 - y1) / (x2 - x1)\n        factor = y1 + (speed - x1) * m\n        return int(factor * speed)\n    else:\n        calibs = _motor_calibration[motor]\n        cal2 = next(x for x in calibs if x[0] > speed)\n        idx_cal2 = calibs.index(cal2)\n        if idx_cal2 > 0:\n            cal1 = calibs[idx_cal2 - 1]\n        else:\n            cal1 = cal2\n            cal2 = calibs[idx_cal2 + 1]\n        x1 = cal1[0]\n        y1 = cal1[1]\n        x2 = cal2[0]\n        y2 = cal2[1]\n        m = (y2 - y1) / (x2 - x1)\n        factor = y1 + (speed - x1) * m\n        return int(factor * speed)\n\n\ndef motor_run(motor: int, speed: int, dir: int = Direction.FORWARD):\n    '''\n    Run the motor on the given speed.\n    speed: 0-255\n    ```\n    motor_run(Motor.ALL, speed=100, dir=Direction.Forward)\n    ```\n    '''    \n    if speed < 0:\n        speed = -speed\n        dir = Direction.FORWARD if dir == Direction.BACKWARD else Direction.BACKWARD\n\n    if motor == Motor.LEFT:\n        i2c.write(I2C_ADDR, bytearray([LEFT_MOTOR_REGISTER, dir, _get_speed(motor, speed)]))\n    elif motor == Motor.RIGHT:\n        i2c.write(I2C_ADDR, bytearray([RIGHT_MOTOR_REGISTER, dir, _get_speed(motor, speed)]))\n    else:\n        i2c.write(I2C_ADDR, bytearray([LEFT_MOTOR_REGISTER, dir, _get_speed(Motor.LEFT, speed), dir, _get_speed(Motor.RIGHT, speed)]))\n\ndef motor_stop(motor: int = Motor.ALL):\n    '''\n    Stop the motor.\n    ```\n    motor_stop() # => stop both motors\n    motor_stop(Motor.LEFT) # => stop the left motor\n    ```\n    '''\n    motor_run(motor, 0, 0)\n\ndef led_red(on: bool, led: int = Led.ALL):\n    '''\n    Control the LED.\n    ```\n    led_red(True) # => turn on both red LED's\n    led_red(False, Led.LEFT) # => turn off the left red LED\n    ```\n    '''\n    if led == Led.LEFT:\n        i2c.write(I2C_ADDR, bytearray([LEFT_LED_REGISTER, 1 if on else 0]))\n    elif led == Led.RIGHT:\n        i2c.write(I2C_ADDR, bytearray([RIGHT_LED_REGISTER, 1 if on else 0]))\n    else:\n        switch = 1 if on else 0\n        i2c.write(I2C_ADDR, bytearray([LEFT_LED_REGISTER, switch, switch]))\n\ndef line_sensor(sensor: int):\n    '''\n    Read the line sensor.\n    ```\n    line_sensor(LineSensor.SENSOR_L1) # => 0 or 1\n    ```\n\n    ```\n    line_sensor(LineSensor.ALL)\n    # => (left2, left1, middle, right1, right2) # => list[0 or 1]\n    ```\n    '''\n    i2c.write(I2C_ADDR, bytearray([LINE_STATE_REGISTER]))\n    data = i2c.read(I2C_ADDR, 1)\n    if sensor == LineSensor.SENSOR_L2:\n        return 1 if (data[0] & 0x10) == 0x10 else 0\n    elif sensor == LineSensor.SENSOR_L1:\n        return 1 if (data[0] & 0x08) == 0x08 else 0\n    elif sensor == LineSensor.SENSOR_M:\n        return 1 if (data[0] & 0x04) == 0x04 else 0\n    elif sensor == LineSensor.SENSOR_R1:\n        return 1 if (data[0] & 0x02) == 0x02 else 0\n    elif sensor == LineSensor.SENSOR_R2:\n        return 1 if (data[0] & 0x01) == 0x01 else 0\n    elif sensor == LineSensor.ALL:\n        return (\n             1 if (data[0] & 0x10) == 0x10 else 0,\n             1 if (data[0] & 0x08) == 0x08 else 0,\n             1 if (data[0] & 0x04) == 0x04 else 0,\n             1 if (data[0] & 0x02) == 0x02 else 0,\n             1 if (data[0] & 0x01) == 0x01 else 0\n        )\n\ndef line_sensor_data(sensor: int):\n    '''\n    Read the raw values of the line sensor.\n    ```\n    line_sensor_data(LineSensor.SENSOR_L1) # => int\n    ```\n\n    ```\n    line_sensor_data(LineSensor.ALL)\n    # => (left2, left1, middle, right1, right2) # => list[int]\n    ```\n    '''\n    i2c.write(I2C_ADDR, bytearray([LINE_STATE_REGISTER]))\n    if sensor == LineSensor.SENSOR_L2:\n        i2c.write(I2C_ADDR, bytearray([ADC0_REGISTER]))\n        buffer = i2c.read(I2C_ADDR, 2)\n        return buffer[1] << 8 | buffer[0]\n    if sensor == LineSensor.SENSOR_L1:\n        i2c.write(I2C_ADDR, bytearray([ADC1_REGISTER]))\n        buffer = i2c.read(I2C_ADDR, 2)\n        return buffer[1] << 8 | buffer[0]\n    elif sensor == LineSensor.SENSOR_M:\n        i2c.write(I2C_ADDR, bytearray([ADC2_REGISTER]))\n        buffer = i2c.read(I2C_ADDR, 2)\n        return buffer[1] << 8 | buffer[0]\n    elif sensor == LineSensor.SENSOR_R1:\n        i2c.write(I2C_ADDR, bytearray([ADC3_REGISTER]))\n        buffer = i2c.read(I2C_ADDR, 2)\n        return buffer[1] << 8 | buffer[0]\n    elif sensor == LineSensor.SENSOR_R2:\n        i2c.write(I2C_ADDR, bytearray([ADC4_REGISTER]))\n        buffer = i2c.read(I2C_ADDR, 2)\n        return buffer[1] << 8 | buffer[0]\n    elif sensor == LineSensor.ALL:\n        return (\n            line_sensor_data(LineSensor.SENSOR_L2),\n            line_sensor_data(LineSensor.SENSOR_L1),\n            line_sensor_data(LineSensor.SENSOR_M),\n            line_sensor_data(LineSensor.SENSOR_R1),\n            line_sensor_data(LineSensor.SENSOR_R2)\n        )\n\ndef ultrasonic(trig = pin13, echo = pin14):\n    '''\n    Read the ultrasonic sensor.\n    ```\n    ultrasonic()\n    ```\n    '''\n    trig.write_digital(1)\n    sleep_ms(1)\n    trig.write_digital(0)\n    if echo.read_digital() == 0:\n        trig.write_digital(0)\n        trig.write_digital(1)\n        sleep_ms(20)\n        trig.write_digital(0)\n        data = time_pulse_us(echo, 1, _ULTRASONIC_PULSE_LENGTH_US)\n    else:\n        trig.write_digital(1)\n        trig.write_digital(0)\n        sleep_ms(20)\n        trig.write_digital(0)\n        data = time_pulse_us(echo, 1, _ULTRASONIC_PULSE_LENGTH_US)\n    data = data / 59\n    if data <= 0:\n        return 0\n    elif data >= 500:\n        return 500\n    return round(data)\n\ndef version():\n    '''\n    Read the version of the board.\n    ```\n    version() # => string like 'MBT0021-EN-2.1'\n    ```\n    '''\n    i2c.write(I2C_ADDR, bytearray([VERSION_CNT_REGISTER]))\n    bytes_to_read = int(i2c.read(I2C_ADDR, 1)[0])\n    i2c.write(I2C_ADDR, bytearray([VERSION_DATA_REGISTER]))\n    version = i2c.read(I2C_ADDR, bytes_to_read)\n    return version.decode('utf-8')\n\ndef rgb(r: int, g: int, b: int):\n    return (r << 16) | (g << 8) | b\n\ndef led_rgb(rgb: int, led: int = ColorLED.ALL, brightness: int = -1):\n    '''\n    Control the color LED.\n    ```\n    led_rgb(Color.RED) # => all to red\n    led_rgb(Color.RED, ColorLED.L1) # => L1 to red\n    led_rgb(rgb(255, 10, 30), ColorLED.L1)\n    # led enumeration:\n     /L1   R1\\\\\n    |  -----  |\n    | maqueen |\n    | L2   R2 |\n    ```\n    '''\n    if brightness < 0:\n        brightness = _brightness\n\n    r = (rgb >> 16) * (brightness / 255)\n    g = ((rgb >> 8) & 0xFF) * (brightness / 255)\n    b = ((rgb) & 0xFF) * (brightness / 255)\n    if led == ColorLED.ALL:\n        for i in range(4):\n            _neo_pixel[i] = (int(r), int(g), int(b))\n    elif led >= 0 and led < ColorLED.ALL:\n        _neo_pixel[led] = (int(r), int(g), int(b))\n    _neo_pixel.show()\n\n\ndef led_brightness(brightness: int):\n    '''\n    Set the brightness of the color LEDs from 0 to 255.\n    ```\n    led_brightness(255)\n    ```\n    '''\n    global _brightness\n    if brightness < 0:\n        brightness = 0\n    elif brightness > 255:\n        brightness = 255\n    _brightness = brightness\n\ndef led_rgb_off(led: int = ColorLED.ALL):\n    '''\n    Turn off the color LED.\n    ```\n    led_rgb_off()\n    led_rgb_off(ColorLED.L1)\n    ```\n    '''\n    if led < 0 or led > ColorLED.ALL:\n        led = ColorLED.ALL\n    led_rgb(0, led)\n\n# compass tilt compensation: https://ozzmaker.com/compass2/\n\ndef mq_heading():\n    '''\n    returns the micro:bit heading when mounted on the maqueen [0-360]\n    ```\n    mq_heading()\n    ```\n\n    Tilt Compensation: @see https://ozzmaker.com/compass2/\n    Axis:\n    x -> x\n    z -> -y\n    y -> z\n    '''\n    acc_flat = accelerometer.get_values()\n    acc_raw = (acc_flat[0], acc_flat[2], -acc_flat[1])\n    mag_raw = (compass.get_x(), compass.get_z(), -compass.get_y())\n    \n    acc_norm = sqrt(acc_raw[0] * acc_raw[0] + acc_raw[1] * acc_raw[1] + acc_raw[2] * acc_raw[2])\n    try:\n        acc_x_norm = acc_raw[0]/acc_norm\n        acc_y_norm = acc_raw[1]/acc_norm\n\n        pitch = asin(acc_x_norm)\n        roll = -asin(acc_y_norm / cos(pitch))\n\n        mag_x_comp = mag_raw[0] * cos(pitch) + mag_raw[2] * sin(pitch)\n        mag_y_comp = mag_raw[0] * sin(roll) * sin(pitch) + mag_raw[1] * cos(roll) - mag_raw[2] * sin(roll) * cos(pitch)\n        heading = 180 * atan2(mag_y_comp, mag_x_comp) / pi\n        if heading < 0:\n            heading += 360\n        return heading\n    except:\n        return 0\n\ndef heading_set_window_size(n: int = 1):\n    '''\n    set the window size for the heading buffer. For calculating the heading_diff, the mean of the last n values is used.\n    ```\n    heading_set_window_size(5)\n    ```\n    '''\n    global _heading_buffer_index\n    if n < 1:\n        _heading_window_size = 1\n    else:\n        _heading_window_size = n\n    _heading_buffer.clear()\n    for i in range(_heading_window_size):\n        _heading_buffer.append(0)\n    _heading_buffer_index = 0\n\ndef _heading_append(heading: float):\n    global _heading_buffer_index\n    _heading_buffer[_heading_buffer_index] = heading\n    _heading_buffer_index = (_heading_buffer_index + 1) % _heading_window_size\n\ndef _heading_mean():\n    if _heading_window_size == 1:\n        return _heading_buffer[0]\n    return sum(_heading_buffer) / _heading_window_size\n\ndef heading_diff(heading0: float, apply_window: bool = True):\n    '''\n    returns the difference between an initial heading and the current mesaurement\n    ```\n    h0 = mq_heading()\n    # maqueen turned 10 degrees to the right\n    heading_diff(h0) # => 10\n    ```\n    '''\n    heading = mq_heading()\n    if apply_window:\n        _heading_append(heading)\n        current = _heading_mean()\n    else:\n        current = heading\n    angle = 180 - abs(abs(heading0 - current) - 180)\n    if (heading0 + angle) % 360 == current:\n        return -angle\n    else:\n        return angle";var s=i(9286);const a={sidebar_position:1},_="Maqueen Plus V2.0",d={id:"index",title:"Maqueen Plus V2.0",description:"Eine Bibliothek zum Steuern und Auslesen von Sensordaten beim Maqueen Plus V2.0 mit Micro:bit und MicroPython.",source:"@site/versioned_docs/version-1.0.0/index.md",sourceDirName:".",slug:"/",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/",draft:!1,unlisted:!1,editUrl:"https://github.com/GBSL-Informatik/maqueen-plus-v2-mpy/tree/main/website/versioned_docs/version-1.0.0/index.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API",permalink:"/maqueen-plus-v2-mpy/docs/1.0.0/api/"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Bibliothek",id:"bibliothek",level:2}];function f(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"maqueen-plus-v20",children:"Maqueen Plus V2.0"}),"\n",(0,r.jsxs)(e.p,{children:["Eine Bibliothek zum Steuern und Auslesen von Sensordaten beim ",(0,r.jsx)(e.strong,{children:"Maqueen Plus V2.0"})," mit Micro",":bit"," und ",(0,r.jsx)(e.strong,{children:"MicroPython"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:i(678).Z+"",width:"1247",height:"722"})}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(e.p,{children:["Auf ",(0,r.jsx)(e.a,{href:"https://python.microbit.org/v/3",children:"https://python.microbit.org/v/3"})," finden Sie eine Online-IDE f\xfcr MicroPython auf dem Micro",":bit","."]}),"\n",(0,r.jsxs)(e.p,{children:["Kopieren Sie die Datei ",(0,r.jsx)(e.code,{children:"maqueenplus.py"})," in den Projektordner, sie kann dann direkt importtiert und gebraucht werden."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:i(504).Z+"",width:"1497",height:"897"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"from maqueen import *\n\nmotor_run(Motor.LEFT, 100)\nsleep(150)\nmotor_stop(Motor.LEFT)\nmotor_run(Motor.ALL, 100)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"bibliothek",children:"Bibliothek"}),"\n",(0,r.jsx)(s.Z,{language:"python",title:"maqueen.py",children:o})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(f,{...n})}):f(n)}},678:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/maqueen-specs-e63631058dd9abed3084bf407b2ef2c2.jpg"},504:(n,e,i)=>{i.d(e,{Z:()=>r});const r=i.p+"assets/images/microbit-project-e49dbf43d1479243c104fbd6f9a8a140.png"}}]);