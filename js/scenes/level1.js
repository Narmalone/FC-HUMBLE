class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');
    }

    preload(){
        this.load.image();
    }

    create(){
        console.log('dans le niveau 1');
        this.player=this.add.sprite(10,10,)
    }
}