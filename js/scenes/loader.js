class loader extends Phaser.Scene {
    constructor(){
        super('loaderScene');
    }

    //CHARGEMENT DES ASSETS, ET CREATION D'UN CHARGEMENT//
    preload(){

        this.load.image('mouse', 'assets/img/mouse.png');
<<<<<<< Updated upstream
        this.load.image('platform', 'assets/img/platform.png');
=======
        this.load.image('redB', 'assets/img/red_button.png');
        this.load.image('blueB', 'assets/img/blue_button.png');
        this.load.image('greenB', 'assets/img/green_button.png');
        this.load.image('tileMap', 'assets/img/tilesetPlatforms.png');
        this.load.image('platform', 'assets/img/tilesetPlatforms.png');
        this.load.image('fond', 'assets/img/fond.png');


        this.load.image('yellowPlatform', 'assets/img/yellow_platform.png')
        this.load.image('greenPlatform', 'assets/img/green_platform.png')
        this.load.image('redPlatform', 'assets/img/red_platform.png')

        //json
>>>>>>> Stashed changes
        this.load.tilemapTiledJSON('level_1','assets/Tile/level_1.json');

<<<<<<< Updated upstream
=======
        // this.load.image
>>>>>>> Stashed changes
    }

    create(){
        console.log('dans le loader');
        this.scene.start('menuScene');
    }

}