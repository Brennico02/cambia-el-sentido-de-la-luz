let I = 0
input.onButtonPressed(Button.A, function () {
    I += I + 1
})
basic.forever(function () {
    I = 2
    led.plot(I, 0)
})
