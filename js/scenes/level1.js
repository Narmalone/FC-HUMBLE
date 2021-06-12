class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    create(){

        const map = this.make.tilemap({key:'level_1'});
        const platformTiles = map.addTilesetImage('tilemap','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        platform.setCollisionByExclusion(-1, true);

        console.log('dans le niveau 1')
    }

    update(){

    }
}