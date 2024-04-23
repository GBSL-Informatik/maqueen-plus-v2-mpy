---
sidebar_position: 1
---

import maqueen from './lib/maqueen.raw.py';
import CodeBlock from '@theme/CodeBlock';

# Maqueen Plus V2.0

Eine Bibliothek zum Steuern und Auslesen von Sensordaten beim **Maqueen Plus V2.0** mit Micro:bit und **MicroPython**.

![](images/maqueen-specs.jpg)

## Installation

Auf https://python.microbit.org/v/3 finden Sie eine Online-IDE für MicroPython auf dem Micro:bit.

Kopieren Sie die Datei `maqueen.py` in den Projektordner, sie kann dann direkt importiert und gebraucht werden.

![](images/microbit-project.png)

```py
from maqueen import *

motor_run(Motor.LEFT, 100)
sleep(150)
motor_stop(Motor.LEFT)
motor_run(Motor.ALL, 100)
```

## Bibliothek


<CodeBlock language="python" title="maqueen.py">
{maqueen}
</CodeBlock>
