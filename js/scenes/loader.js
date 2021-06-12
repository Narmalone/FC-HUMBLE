class loader extends Phaser.Scene {
    constructor(){
        super('loaderScene');
    }

    //CHARGEMENT DES ASSETS, ET CREATION D'UN CHARGEMENT//
    preload(){

    }

    create(){
        console.log('dans le loader')
        this.scene.start('menuScene');
        // this.scene.launch('uiScene');
    }

}