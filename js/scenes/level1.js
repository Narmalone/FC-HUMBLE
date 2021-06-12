class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
        this.load.image('IM_mouse','assets/mouse.png');
    }

       

    create(){
        console.log('wshwsh')
        const map = this.make.tilemap({key:'level_1'});
        const platformTiles = map.addTilesetImage('tilemap','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        platform.setCollisionByExclusion(-1, true);

        console.log(map);
        this.add.image(0,0,'mouse');
    }

    update(){

    }
}