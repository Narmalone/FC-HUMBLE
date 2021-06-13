class loader extends Phaser.Scene {
    constructor(){
        super('loaderScene');
    }

    //CHARGEMENT DES ASSETS, ET CREATION D'UN CHARGEMENT//
    preload(){

        this.load.image('mouse', 'assets/img/mouse.png');
        this.load.image('redB', 'assets/img/red_button.png');
        this.load.image('blueB', 'assets/img/blue_button.png');
        this.load.image('greenB', 'assets/img/green_button.png');
        this.load.image('tileMap', 'assets/img/platform.png');
        this.load.image('platform', 'assets/img/platform.png');
        this.load.image('fond', 'assets/img/fond.png');

        //spritesSheets
        this.load.spritesheet('SP_comm', 
        'assets/spriteSheet/arrow.png',
        { frameWidth: 90, frameHeight: 90}
        );
        this.load.spritesheet('button', 
        'assets/spriteSheet/buttons.png',
        { frameWidth: 400, frameHeight: 300}
        );
        this.load.spritesheet('chara', 
        'assets/spriteSheet/character.png',
        { frameWidth: 128, frameHeight: 128}
        );

        //json
        this.load.tilemapTiledJSON('level_1','assets/Tile/level_1.json');
        this.load.json('jsonData', 'json/camera.json');

        
    }

    create(){
        console.log('dans le loader');
        this.scene.start('menuScene');
        // this.scene.launch('uiScene');
    }

}