// configuration du jeu//

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: true
        }
    },
    scene: [loader, mainMenu, level_1 , UI]
}

// CREATION DU JEU//
var game = new Phaser.Game(config);