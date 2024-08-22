namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
}
function spawnenemies () {
    Enemy_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . f 8 8 8 8 8 8 f f f . . . . 
        . . f 8 8 f f 8 f f 8 f . . . . 
        . . f f 8 f f f f f 8 f . . . . 
        . . . f 8 f f 8 f f 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 f . . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Enemy_1 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    Enemy_3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Enemy_1.setBounceOnWall(true)
    Enemy_3.setVelocity(40, 30)
    Enemy_1.setVelocity(40, 30)
    Enemy_2.setPosition(randint(1, 200), randint(1, 200))
    Enemy_3.setPosition(randint(1, 200), randint(1, 200))
    Enemy_1.setPosition(randint(1, 200), randint(1, 200))
    Enemy_2.setVelocity(40, 30)
    Enemy_3.setBounceOnWall(true)
    Enemy_2.setBounceOnWall(true)
}
info.onScore(15, function () {
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
function spawnhero () {
    hero = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 f f f 2 f f 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 f f 2 2 2 . . . . 
        . . . 2 2 2 2 f f 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(hero)
    hero.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let bag1: Sprite = null
let hero: Sprite = null
let Enemy_3: Sprite = null
let Enemy_1: Sprite = null
let Enemy_2: Sprite = null
info.startCountdown(20)
spawnhero()
info.setLife(3)
for (let index = 0; index < 2; index++) {
    spawnenemies()
}
music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    bag1 = sprites.createProjectileFromSide(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ........4eee........
        .......eeeeee.......
        .........cc.........
        .........4c.........
        ........4444........
        .......444444.......
        ......44444444......
        .....4444444444.....
        .....eeeeeeeeee.....
        .....eeeeeeeecc.....
        ......eeeeeecc......
        .......eccccc.......
        ....................
        ....................
        `, 50, 50)
    bag1.setPosition(randint(0, 160), randint(0, 160))
    bag1.setKind(SpriteKind.Projectile)
    bag1.setBounceOnWall(true)
})
