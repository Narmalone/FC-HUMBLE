class level_1 extends Phaser.Scene {
    constructor(){
        super('level_1');

    }

    preload(){
        this.load.image('IM_mouse','assets/img/mouse.png');
    }

       

    create(){

        
        this.fond = this.add.tileSprite(1000,2300,6000,8000, 'fond').setOrigin(0.5,0.5).setScale(0.5);
        console.log(this.fond)

        const map = this.make.tilemap({key:'level_1'});

        const platformTiles = map.addTilesetImage('proto','platform');
        this.platform = map.createLayer('platformer',platformTiles,0,0);
        this.platform.setCollisionByExclusion(-1, true);
        this.player = new mouse (this,350,1200,'IM_mouse','Space','Q','D');
        this.physics.add.collider(this.player, this.platform);
        
        //camera
        this.cameras.main.setZoom(0.85);
        this.cameras.main.startFollow(this.player.body);
        this.cameras.main.setLerp(0, 1);
        this.cameras.main.setBounds(0,-200);
        this.physics.world.setBounds(0, 0, 25600, 25600);

        this.canClick = true
            
        //player souris
        this.scientist = new Scientist(this,0,0);

        if(true){
            this.anims.create({
                key: 'y1',
                frames: this.anims.generateFrameNames('button', { frames: [ 0 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'y2',
                frames: this.anims.generateFrameNames('button', { frames: [ 3 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'g1',
                frames: this.anims.generateFrameNames('button', { frames: [ 1 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'g2',
                frames: this.anims.generateFrameNames('button', { frames: [ 4 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'r1',
                frames: this.anims.generateFrameNames('button', { frames: [ 2 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'r2',
                frames: this.anims.generateFrameNames('button', { frames: [ 5 ] }),
                frameRate: 1,
            });
        }

        //PLATEFORMES//
        //GAUCHE A DROITE//
        this.platformes_1 = [];
        var platformesObject_1 = map.getObjectLayer('platMoovLRSpawn')['objects'];
        platformesObject_1.forEach(platformesObject_1=>{
            this.objplat_1 = new platMoovLR(this, platformesObject_1.x, platformesObject_1.y, 'mouse').setScale(0.4);
            this.objplat_1.immovable = true;
            this.platformes_1.push(this.objplat_1);
        });
        
        

        //HAUT BAS//
        this.platformes_2 = [];
        var platformesObject_2 = map.getObjectLayer('platMoovTDSpawn')['objects'];
        platformesObject_2.forEach(platformesObject_2=>{
            this.objplat_2 = new platMoovTD(this, platformesObject_2.x, platformesObject_2.y, 'mouse').setScale(0.4);
            this.platformes_2.push(this.objplat_2);
        });

        this.platformes_3 = [];
        var platformesObject_3 = map.getObjectLayer('platDispSpawn')['objects'];
        platformesObject_3.forEach(platformesObject_3=>{
            this.objplat_3 = new platDisp(this, platformesObject_3.x, platformesObject_3.y, 'mouse').setScale(0.4);
            this.objplat_3.alternate = platformesObject_3.properties[0].value;
            console.log(platformesObject_3.properties[0].value);
            this.objplat_3.Clicked();
            this.platformes_3.push(this.objplat_3);
        });


        this.checkPoints = [];
        var checkPoint = map.getObjectLayer('checkPoint')['objects'];
        checkPoint.forEach(cp=>{
            this.cp = this.physics.add.image(cp.x , cp.y, '');
            this.cp.body.height = 100
            this.checkPoints.push(this.cp)
        });

        

        this.physics.add.collider(this.player, this.platformes_1);
        this.physics.add.collider(this.player, this.platformes_2);
        this.physics.add.collider(this.checkPoints, this.platform);
        this.physics.add.overlap(this.player, this.checkPoints, function(p , cp){
            p.respawnX = cp.x;
            p.respawnY = cp.y;
        });


        // BOUTONS//
        this.redButton = this.add.sprite(game.config.width /2 ,game.config.height / 1.2, 'button').setScale(0.5).setOrigin(0.5,0.5).setScrollFactor(0);
        this.redButton.anims.play('r1');
        this.redButton.setInteractive();
        this.redButton.on('pointerdown', function () {
            console.log('red');
            this.objplat_2.Clicked();
            
        }, this);

        this.blueButton = this.add.sprite(game.config.width /2.6,game.config.height / 1.2, 'button').setScale(0.5).setOrigin(0.5,0.5).setScrollFactor(0);
        this.blueButton.anims.play('y1');
        this.blueButton.setInteractive();
        this.blueButton.on('pointerdown', function () {
            console.log('yellow');
            
            for(var i =0; i < this.platformes_1.length ; i++){
                this.platformes_1[i].Clicked();
            }
            
        }, this);

        this.greenButton = this.add.sprite(game.config.width / 1.625,game.config.height / 1.2, 'button').setScale(0.5).setOrigin(0.5,0.5).setScrollFactor(0);
        this.greenButton.anims.play('g1');
        this.greenButton.setInteractive();
        this.greenButton.on('pointerdown', function () {
            
            this.canClick = true;
            console.log('green');
            for(var i =0; i < this.platformes_3.length ; i++){
                this.platformes_3[i].Clicked();
            }
        }, this);

        this.greenButton.on('pointerdown', function (event, gameObjects) {
            this.anims.play('g2');
        });
        this.greenButton.on('pointerup', function (event, gameObjects) {
            this.anims.play('g1');
        });
        this.redButton.on('pointerdown', function (event, gameObjects) {
            this.anims.play('r2');
        });
        this.redButton.on('pointerup', function (event, gameObjects) {
            this.anims.play('r1');
        });

        this.blueButton.on('pointerdown', function (event, gameObjects) {
            this.anims.play('y2');
        });
        this.blueButton.on('pointerup', function (event, gameObjects) {
            this.anims.play('y1');
        });

        

    }

    update(){

        this.cameras.main.scrollX += 1; 
        
       
        this.fond.x += 1;
        this.fond.tilePositionX = this.cameras.main.scrollX * 0.8;
        this.fond.tilePositionY = this.cameras.main.scrollY * 0;

        this.player.update();

        for(var i =0; i < this.platformes_3.length ; i++){
            this.platformes_3[i].updateRed();
        }

       if(this.player.y > 3122)this.cameras.main.setLerp(0, 0);
       if(this.player.y < 3122)this.cameras.main.setLerp(0, 1);
        
    }
}