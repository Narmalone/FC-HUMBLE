class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
        this.load.image('IM_mouse','assets/img/mouse.png');
    }

       

    create(){

        this.fond = this.add.tileSprite(0,2500,1920,1080, 'fond').setOrigin(0.5,0.5);
        console.log(this.fond)

        const map = this.make.tilemap({key:'level_1'});

        const platformTiles = map.addTilesetImage('proto','platform');
        var platform = map.createLayer('platformer',platformTiles,0,0);
        platform.setCollisionByExclusion(-1, true);
        this.player= new mouse (this,50,2000,'IM_mouse','Z','Q','D');
        this.physics.add.collider(this.player, platform);
        
        //camera
        this.cameras.main.setZoom(0.85);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setLerp(0, 1);
        this.physics.world.setBounds(0, 0, 25600, 25600);
            
        //player souris
        this.scientist = new Scientist(this,0,0);

    }

    update(){
        
       
    }

    update(){
        this.cameras.main.scrollX += 1; 


        this.fond.x += 1;
        this.fond.tilePositionX = this.cameras.main.scrollX * 0.8;

        this.player.update();
    }
}