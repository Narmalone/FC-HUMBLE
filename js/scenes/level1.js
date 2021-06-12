class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');
    }

    create(){

        const map = this.make.tilemap({key:'level_1'});
        
        console.log('dans le niveau 1')
    }

    update(){

    }
}