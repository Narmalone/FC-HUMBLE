// configuration du jeu//

var jtebz;
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: [loader, mainMenu]
};


// CREATION DU JEU//
var game = new Phaser.Game(config);