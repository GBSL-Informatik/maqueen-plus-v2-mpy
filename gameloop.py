
def run():
    if button_a.was_pressed() and 'on_button_pressed_a' in locals():
        eval('on_button_pressed_a()')
    if button_b.was_pressed() and 'on_button_pressed_b' in locals():
        eval('on_button_pressed_b()')
    if 'on_gesture' in locals():
        for gesture in ['up', 'down', 'left', 'right', 'face up', 'face down', 'freefall', '3g', '6g', '8g', 'shake']:
            if accelerometer.was_gesture(gesture):
                eval("on_gesture('" + gesture + "')")
    if microphone.was_event(SoundEvent.LOUD) and 'on_sound_loud' in locals():
        eval('on_sound_loud()')
    if microphone.was_event(SoundEvent.QUIET) and 'on_sound_loud' in locals():
        eval('on_sound_quiet()')

    if pin_logo.is_touched() and 'on_logo_event_pressed' in locals():
        eval('on_logo_event_pressed()')
    if 'on_pin_pressed' in locals():
        if pin0.is_touched():
            eval('on_pin_pressed(0)')
        if pin1.is_touched():
            eval('on_pin_pressed(1)')
        if pin2.is_touched():
            eval('on_pin_pressed(2)')