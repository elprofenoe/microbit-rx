function girar_izquierda () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function reversa () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function derecha () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Parar () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function avanzar () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "parar") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        Parar()
    }
    if (receivedString == "izquierda") {
        basic.showArrow(ArrowNames.East)
        girar_izquierda()
    }
    if (receivedString == "derecha") {
        basic.showArrow(ArrowNames.West)
        girar_derecha()
    }
    if (receivedString == "avanzar") {
        basic.showArrow(ArrowNames.South)
        avanzar()
    }
    if (receivedString == "reversa") {
        basic.showArrow(ArrowNames.South)
        reversa()
    }
    if (receivedString == "der") {
        basic.showArrow(ArrowNames.NorthWest)
        derecha()
    }
    if (receivedString == "izq") {
        basic.showArrow(ArrowNames.NorthEast)
        izquierda()
    }
})
function girar_derecha () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function izquierda () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
Parar()
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(103)
