class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    } 

    create(){

        const map = this.make.tilemap({key:'level_1'});

        const platformTiles = map.addTilesetImage('proto','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);  
        platform.setCollisionByExclusion(-1, true);

        console.log(map);
        this.player= new mouse (this,50,50,'mouse','Z','Q','D');

        this.physics.add.collider(this.player, platform)

    }

    update(){
        this.player.update();
    }
}