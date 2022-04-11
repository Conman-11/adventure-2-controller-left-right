input.onButtonPressed(Button.A, function () {
    if (Pause == 0) {
        radio.sendString("A Press")
    }
    if (Pause == 1) {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PAUSE") {
        Pause = 1
        basic.pause(1000)
        Pause = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Pause == 0) {
        radio.sendString("B Press")
    }
    if (Pause == 1) {
    	
    }
})
let Pause = 0
radio.setGroup(68)
Pause = 0
basic.forever(function () {
	
})
