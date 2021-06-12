class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
        this.load.image('IM_mouse','assets/img/mouse.png');
        this.load.spritesheet('SP_comm','assets/spriteSheet/symbol_proto.png',{ frameWidth: 90, frameHeight: 90 });
    }



    create(){
        const map = this.make.tilemap({key:'level_1'});

        const platformTiles = map.addTilesetImage('proto','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        platform.setCollisionByExclusion(-1, true);
        this.player= new mouse (this,50,50,'IM_mouse','Z','Q','D','ONE','TWO','THREE');

        this.physics.add.collider(this.player.container, platform);
        this.cameras.main.startFollow(this.player.container);
        // this.cameras.main.setZoom(0.1);
        this.physics.world.setBounds(0, 0, 25600, 25600);


        this.physics.add.collider(this.moovLR, platform)

    }

    update(){
        this.player.update();
    }
}
