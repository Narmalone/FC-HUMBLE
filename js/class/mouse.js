class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite,){
        super(scene,x,y,texture);

        this.scene.physics.add.existing(this);
        this.scene.add.existing(this);

        this.scene = scene;

        this.keys = scene.input.keyboard.addKeys({
            left: gauche,
            right: droite,
            space: haut,
        });

        this.body.setAllowDrag(true);
        this.body.setDrag(1500, 0);
        this.body.setCollideWorldBounds(true);

        // this.container= this.add.container()

        this.respawnX;
        this.respawnY;
        this.dirP = 1;

        //anims
        if(true){
            this.anims.create({
                key: 'idle',
                frames: this.anims.generateFrameNames('chara', { frames: [ 0 ] }),
                frameRate: 1,
            });
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('chara', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: 'idleA',
                frames: this.anims.generateFrameNumbers('chara', { start: 4, end: 5 }),
                frameRate: 10,
                repeat: -1
            });
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
    
            this.scene.anims.create({
                key: 'quatro',
                frames: this.scene.anims.generateFrameNames('SP_comm', { frames: [ 3 ] }),
                frameRate: 1,
                repeat: -1
            });
        }

        this.anims.play('idleA');

        //code des flèches

        this.cursors = this.scene.input.keyboard.createCursorKeys();

        this.premiereCommande=this.scene.add.sprite(-30,-25,'SP_comm');
        this.premiereCommande.setVisible(false);

        this.deuxiemeCommande=this.scene.add.sprite(65,-25,'SP_comm');
        this.deuxiemeCommande.setVisible(false);

        this.troisiemeCommande=this.scene.add.sprite(160,-25,'SP_comm');
        this.troisiemeCommande.setVisible(false);

        this.nombreSymb=0;

        this.container = this.scene.add.container(x,y);
        this.container.add([this.premiereCommande,this.deuxiemeCommande,this.troisiemeCommande]);

        this.scene.physics.add.existing(this.container);
        this.scene.add.existing(this.container);
        this.container.body.setSize(130,130)
        this.container.body.setAllowDrag(true);
        this.container.body.setDrag(1500, 0);
        this.container.body.setCollideWorldBounds(true);
        this.container.body.setMaxSpeed(900);



        this.symboleCooldownEvent = new Phaser.Time.TimerEvent({ delay: 1000 });
        this.scene.time.addEvent(this.symboleCooldownEvent);
        
        

        this.unSpam=false;
        this.deuxSpam=false;
        this.troisSpam=false;
        this.quatreSpam=false;

        

    
    }

    apparitionSymbole(numero){
        //console.log('apparition ' + numero + " ++ " + this.nombreSymb)
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

    Signs(){
        if (this.symboleCooldownEvent.getProgress()==1){
            this.nombreSymb=0;
            this.premiereCommande.setVisible(false);
            this.deuxiemeCommande.setVisible(false);
            this.troisiemeCommande.setVisible(false);
        }
       
        if (this.cursors.up.isDown){
            if (this.unSpam==false){
                this.apparitionSymbole('uno');
                this.unSpam=true;
                console.log(7848)
            }
        }

        if (this.cursors.up.isUp){
            this.unSpam=false;
        }

        if (this.cursors.down.isDown){
            if (this.deuxSpam==false){
                this.apparitionSymbole('dos');
                this.deuxSpam=true;
            }
        }

        if (this.cursors.down.isUp){
            this.deuxSpam=false;
        }

        if (this.cursors.right.isDown){
            if (this.troisSpam==false){
                this.apparitionSymbole('tres');
                this.troisSpam=true;
            }
        }

        if (this.cursors.right.isUp){
            this.troisSpam=false;
        }

        if (this.cursors.left.isDown){
            if (this.quatreSpam==false){
                this.apparitionSymbole('quatro');
                this.quatreSpam=true;
            }
        }

        if (this.cursors.left.isUp){
            this.quatreSpam=false;
        }
    }

    update(){
        if (this.keys.left.isDown){
            this.body.setVelocityX(-250);
            this.anims.play('right', true).setFlipX(true);
            this.dirP = -1;
        }
        if (this.keys.right.isDown){
            this.body.setVelocityX(250);
            this.anims.play('right', true).setFlipX(false);
            this.dirP = 1;
        }
        if (!this.keys.right.isDown && !this.keys.left.isDown){
            
            if(this.dirP == 1){
                this.anims.play('idleA', true).setFlipX(false);
            }
            else{
                this.anims.play('idleA', true).setFlipX(true);
            }
        }

        if (this.keys.space.isDown && this.body.blocked.down){
            
            this.body.setVelocityY(-250);
        }
        if(this.body.velocity.x > 500){
            this.body.velocity.x = 500
        }
        
       
        var voidLayer = this.scene.platform.getTileAtWorldXY(this.x + 63 , this.y);
        if(voidLayer != null){
            if (voidLayer.index != -1) {
                this.x -= 5
            }
        }
        var voidLayer2 = this.scene.platform.getTileAtWorldXY(this.x - 63 , this.y);
        if(voidLayer2 != null){
            if (voidLayer2.index != -1) {
                this.x += 5
            }
        }
        if(this.x < this.scene.cameras.main.scrollX -228){
            this.x = this.respawnX;
            this.y = this.respawnY;
        }

        if(this.y > this.scene.cameras.main.scrollY + 1100){
            this.x = this.respawnX;
            this.y = this.respawnY;
            this.scene.cameras.main.setLerp(0, 1);
            
        }

        this.Signs();

        //code pour les comm

        this.container.x = this.x - 65;
        this.container.y = this.y - 115;
        //console.log(this.premiereCommande.worldX, this.premiereCommande.worldY);
        
    }
}
/*
class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite,first,sec,third,fourth){
        super(scene,x, y,texture);

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
            three:third,
            four:fourth
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

        this.symboleCooldownEvent = new Phaser.Time.TimerEvent({ delay: 1500 });
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

        this.scene.anims.create({
            key: 'quatro',
            frames: this.scene.anims.generateFrameNames('SP_comm', { frames: [ 3 ] }),
            frameRate: 1,
            repeat: -1
        });

        this.unSpam=false;
        this.deuxSpam=false;
        this.troisSpam=false;
        this.quatreSpam=false;

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

        if (this.keys.four.isDown){
            if (this.quatreSpam==false){
                this.apparitionSymbole('quatro');
                this.quatreSpam=true;
            }
        }

        if (this.keys.four.isUp){
            this.quatreSpam=false;
        }

        //
        
        
    }
}*/