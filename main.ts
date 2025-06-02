input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.white)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        strip.show()
        basic.showString("Shy")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
        basic.pause(Tiempo)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
        basic.pause(Tiempo)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showString("Anger")
        for (let index = 0; index < 2; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
        }
        for (let index = 0; index < 2; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.black)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.showString("Fear")
        for (let index = 0; index < 3; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
        }
        for (let index = 0; index < 3; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.yellow)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.showString("Joy")
        for (let index = 0; index < 4; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
        }
        for (let index = 0; index < 4; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.green)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showString("Disgust")
        for (let index = 0; index < 5; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
        }
        for (let index = 0; index < 5; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.blue)) {
        strip.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.showString("Sad")
        for (let index = 0; index < 6; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(1000)
        }
        for (let index = 0; index < 6; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
            basic.pause(Tiempo)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let Velocidad = 0
let Tiempo = 0
let strip: neopixel.Strip = null
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
strip.show()
Tiempo = 1600
Velocidad = 90
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
