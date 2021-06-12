class loader extends Phaser.Scene {
    constructor(){
        super('loaderScene');
    }

    //CHARGEMENT DES ASSETS, ET CREATION D'UN CHARGEMENT//
    preload(){

        this.load.image('mouse', 'assets/img/mouse.png');
        this.load.image('platform', 'assets/img/platform.png');
        this.load.tilemapTiledJSON('level_1','assets/Tile/level_1.json');

    }

    create(){
        console.log('dans le loader');
        this.scene.start('menuScene');
    }

}