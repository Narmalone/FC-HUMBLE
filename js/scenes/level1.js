class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
        this.load.image('mouse','assets/img/mouse.png');
    }

       

    create(){
        const map = this.make.tilemap({key:'level_1'});

        const platformTiles = map.addTilesetImage('proto','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        platform.setCollisionByExclusion(-1, true);
        this.player= new mouse (this,50,50,'mouse','Z','Q','D');
        this.physics.add.collider(this.player, platform);

        // CREATION DUN CONTAINER QUI VA POURSUIVRE LE JOUEUR, LA CAM//
        this.camerasOfTheEnd = this.add.container(game.config.width/2, game.config.height/2 +100);
        
        this.cameras.main.startFollow(this.player)
        this.cameras.main.setZoom(0.5)
        this.physics.world.setBounds(0, 0, 25600, 25600);
        console.log(this.camerasOfTheEnd)
       
    }

    update(){
        this.camerasOfTheEnd.x -=1
        this.player.update();
    }
}