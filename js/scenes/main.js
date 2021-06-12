

//configuration du jeu
var config = {
    type: Phaser.AUTO,
    width: 1905,
    height: 1060,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene: [ ]
};


var game = new Phaser.Game(config);