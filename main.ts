makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.showIcon(IconNames.No)
    basic.clearScreen()
    maqueenPlusV2.ledBlank()
    music.play(music.tonePlayable(139, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    isGoingForward = false
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Backward, speed)
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    isGoingForward = true
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, speed)
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    isGoingForward = false
    maqueenPlusV2.setIndexColor(0, maqueenPlusV2.NeoPixelColors.Orange)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Orange)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 25)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 25)
    basic.pause(500)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    maqueenPlusV2.ledBlank()
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    if (speed <= 235) {
        speed += 20
    }
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(speed)
})
makerbit.onIrDatagram(function () {
    if (makerbit.irButton() == 224) {
        if (speed >= 20) {
            speed += -20
        }
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(speed)
    }
    if (makerbit.irButton() == 144) {
        speed = 255
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(speed)
    }
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    isGoingForward = false
    maqueenPlusV2.setIndexColor(2, maqueenPlusV2.NeoPixelColors.Orange)
    maqueenPlusV2.setIndexColor(3, maqueenPlusV2.NeoPixelColors.Orange)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 25)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 25)
    basic.pause(500)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    maqueenPlusV2.ledBlank()
})
let distance = 0
let isGoingForward = false
let speed = 0
speed = 150
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.forever(function () {
    distance = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (isGoingForward && distance < 30 && distance != 0) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
        maqueenPlusV2.ledBlank()
    } else {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
    }
})
