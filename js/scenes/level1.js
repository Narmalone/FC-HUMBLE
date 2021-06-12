class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');
    }

    preload(){
        this.load.image('IM_mouse','assets/mouse.png');
    }

    create(){
        console.log('dans le niveau 1');
        this.player=this.add.sprite(this,10,10,texture,"Z","Q","D");
    }

    update(){
        this.player.update();
    }
}