namespace SpriteKind {
    export const bullet = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f f f . . . . 
. . . . f f f f f f f f . . . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
`
}
scene.onOverlapTile(SpriteKind.bullet, myTiles.tile3, function (sprite, location) {
    cannons_health += -1
    if (cannons_health == 0) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
f f f 
f f f 
f f f 
f f f 
f f f 
f f f 
f f f 
`, SpriteKind.bullet)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite2.vy = 100
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let cannons_health = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . f f f f f f f f . . 
. . f f f f f f f f . . 
f f f f f f f f f f f f 
f f f f f f f f f f f f 
. . . . f f f f . . . . 
. . . . f f f f . . . . 
. . f f . . . . f f . . 
. . f f . . . . f f . . 
f f . . . . . . . . f f 
f f . . . . . . . . f f 
`, SpriteKind.Player)
scene.setBackgroundColor(1)
mySprite.setPosition(80, 5)
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030302020202020202020202`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
info.setLife(3)
cannons_health = 1000
forever(function () {
    pause(1000)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f f f . . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f . . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . . f f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . 
. . f f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f f f 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f f f f f f f f . . 
. . . . . f f f f f f f f f f f f f f . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
`, 0, -100)
    tiles.placeOnRandomTile(projectile, myTiles.tile3)
})
