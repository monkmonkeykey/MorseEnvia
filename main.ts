input.onButtonPressed(Button.A, function () {
    basic.showString(".")
    radio.sendString(".")
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(" ")
    radio.sendString(" ")
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("-")
    radio.sendString("-")
    basic.pause(200)
})
radio.setGroup(1)
