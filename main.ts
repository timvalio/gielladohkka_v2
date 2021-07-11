control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu2 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu5 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu_1 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P6, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu3 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P7, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu4 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P10, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu7 = 1
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P9, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    boallu6 = 1
})
let boallu7 = 0
let boallu6 = 0
let boallu5 = 0
let boallu4 = 0
let boallu3 = 0
let boallu2 = 0
let boallu_1 = 0
boallu_1 = 0
boallu2 = 0
boallu3 = 0
boallu4 = 0
boallu5 = 0
boallu6 = 0
boallu7 = 0
pins.setPull(DigitalPin.P3, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P3, PinEventType.Edge)
pins.setPull(DigitalPin.P4, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P4, PinEventType.Edge)
pins.setPull(DigitalPin.P6, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P6, PinEventType.Edge)
pins.setPull(DigitalPin.P7, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P7, PinEventType.Edge)
pins.setPull(DigitalPin.P8, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P8, PinEventType.Edge)
pins.setPull(DigitalPin.P9, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P9, PinEventType.Edge)
pins.setPull(DigitalPin.P10, PinPullMode.PullDown)
pins.setEvents(DigitalPin.P10, PinEventType.Edge)
dfplayermini.connect(SerialPin.P1, SerialPin.P0)
dfplayermini.setVolume(15)
led.enable(false)
basic.forever(function () {
    if (boallu_1 == 1) {
        dfplayermini.playFile(2, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu_1 = 0
    }
    if (boallu2 == 1) {
        dfplayermini.playFile(3, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu2 = 0
    }
    if (boallu3 == 1) {
        dfplayermini.playFile(4, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu3 = 0
    }
    if (boallu4 == 1) {
        dfplayermini.playFile(5, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu4 = 0
    }
    if (boallu5 == 1) {
        dfplayermini.playFile(6, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu5 = 0
    }
    if (boallu6 == 1) {
        dfplayermini.playFile(7, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu6 = 0
    }
    if (boallu7 == 1) {
        dfplayermini.playFile(8, dfplayermini.isRepeat.No)
        control.waitMicros(1000)
        boallu7 = 0
    }
})
