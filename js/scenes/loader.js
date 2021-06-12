class loader extends Phaser.Scene {
    constructor(){
        super('loaderScene');
    }

    //CHARGEMENT DES ASSETS, ET CREATION D'UN CHARGEMENT//
    preload(){

        this.load.image('mouse', 'assets/img/mouse.png');
        this.load.image('tileMap', 'assets/img/platform.png');
    }

    create(){
        console.log('dans le loader');
        this.scene.start('menuScene');
        // this.scene.launch('uiScene');
    }

}