class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
    }

       

    create(){
        console.log('wshwsh')
        const map = this.make.tilemap({key:'level_1'});
        const platformTiles = map.addTilesetImage('tilemap','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        
        this.scientist = new Scientist(this,0,0)

    }

    update(){

        
    }
}