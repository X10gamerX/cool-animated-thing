input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        # . . . .
        . . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # . . .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("C5 G B - - - - - ", 1720)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showString("Hello!")
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.showString("WANNA See Something")
    basic.pause(2000)
    basic.showString("no?")
    basic.showIcon(IconNames.Asleep)
    basic.pause(2000)
    basic.showString("TOO BAD")
    basic.pause(2000)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Rollerskate)
    basic.showLeds(`
        . . # # .
        . . # # .
        # # # # .
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.clearScreen()
    music.playMelody("E B C5 A B G A F ", 220)
    basic.showIcon(IconNames.Fabulous)
})
basic.showIcon(IconNames.Heart)
