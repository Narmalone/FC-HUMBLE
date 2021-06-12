class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite,first,sec,third){
        super(scene,65,65,texture);

        this.premiereCommande=this.scene.add.sprite(-30,-25,'SP_comm');
        this.premiereCommande.setVisible(false);

        this.deuxiemeCommande=this.scene.add.sprite(65,-25,'SP_comm');
        this.deuxiemeCommande.setVisible(false);

        this.troisiemeCommande=this.scene.add.sprite(160,-25,'SP_comm');
        this.troisiemeCommande.setVisible(false);

        this.nombreSymb=0;


        this.keys = scene.input.keyboard.addKeys({
            left: gauche,
            right: droite,
            space: haut,
            one:first,
            two:sec,
            three:third
        });

        this.scene.physics.add.existing(this);
        this.body.setAllowGravity(false);

        this.container = this.scene.add.container(x,y)
        this.container.add([this,this.premiereCommande,this.deuxiemeCommande,this.troisiemeCommande]);

        this.scene.physics.add.existing(this.container);
        this.scene.add.existing(this.container);
        this.container.body.setSize(130,130)
        this.container.body.setAllowDrag(true);
        this.container.body.setDrag(1500, 0);
        this.container.body.setCollideWorldBounds(true);
        this.container.body.setMaxSpeed(900);

        this.symboleCooldownEvent = new Phaser.Time.TimerEvent({ delay: 4000 });
        this.scene.time.addEvent(this.symboleCooldownEvent);

        this.scene.anims.create({
            key: 'uno',
            frames: this.scene.anims.generateFrameNames('SP_comm', { frames: [ 0 ] }),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'dos',
            frames: this.scene.anims.generateFrameNames('SP_comm', { frames: [ 1 ] }),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'tres',
            frames: this.scene.anims.generateFrameNames('SP_comm', { frames: [ 2 ] }),
            frameRate: 1,
            repeat: -1
        });

        this.unSpam=false;
        this.deuxSpam=false;
        this.troisSpam=false;

        this.respawnX;
        this.respawnY;
    }

    apparitionSymbole(numero){
        switch (this.nombreSymb){
            case 0:
                this.premiereCommande.setPosition(65,-25);
                this.premiereCommande.play(numero);
                this.premiereCommande.setVisible(true);
                this.nombreSymb++;
                this.scene.time.addEvent(this.symboleCooldownEvent);
                break;
            
            case 1:
                this.premiereCommande.setPosition(0,-25);
                this.deuxiemeCommande.setPosition(135,-25);
                this.deuxiemeCommande.setVisible(true);
                this.deuxiemeCommande.play(numero);
                this.scene.time.addEvent(this.symboleCooldownEvent);
                this.nombreSymb++;
                break;

            case 2:
                this.premiereCommande.setPosition(-30,-25);
                this.deuxiemeCommande.setPosition(65,-25);
                this.troisiemeCommande.setPosition(160,-25);
                this.troisiemeCommande.play(numero);
                this.troisiemeCommande.setVisible(true);
                this.nombreSymb++;
                this.scene.time.addEvent(this.symboleCooldownEvent);
                break;
            
            default:
                break;
        }
    }

    update(){
        if (this.symboleCooldownEvent.getProgress()==1){
            this.nombreSymb=0;
            this.premiereCommande.setVisible(false);
            this.deuxiemeCommande.setVisible(false);
            this.troisiemeCommande.setVisible(false);
        }

        if (this.keys.left.isDown){
            this.container.body.setVelocityX(-250);
        }
        if (this.keys.right.isDown){
            this.container.body.setVelocityX(250);
        }
        if (this.keys.space.isDown && this.container.body.blocked.down){
            this.container.body.setVelocityY(-250);
        }
        if (this.keys.one.isDown){
            if (this.unSpam==false){
                this.apparitionSymbole('uno');
                this.unSpam=true;
            }
        }

        if (this.keys.one.isUp){
            this.unSpam=false;
        }

        if (this.keys.two.isDown){
            if (this.deuxSpam==false){
                this.apparitionSymbole('dos');
                this.deuxSpam=true;
            }
        }

        if (this.keys.two.isUp){
            this.deuxSpam=false;
        }

        if (this.keys.three.isDown){
            if (this.troisSpam==false){
                this.apparitionSymbole('tres');
                this.troisSpam=true;
            }
        }

        if (this.keys.three.isUp){
            this.troisSpam=false;
        }
        
    }
}