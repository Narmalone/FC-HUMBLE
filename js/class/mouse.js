class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite,first,sec,third){
        super(scene,65,65,texture);

        this.premiereCommande=this.scene.add.sprite(-30,-25,'SP_comm');
        this.deuxiemeCommande=this.scene.add.sprite(65,-25,'SP_comm');
        this.troisiemeCommande=this.scene.add.sprite(160,-25,'SP_comm');

        this.scene = scene;

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

        this.respawnX;
        this.respawnY;

        

    
    }

    apparitionSymbole(){
        
    }

    update(){
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
            console.log('sippin tea in your hood wtf is up you buttercup');
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

        if(this.x > this.scene.cameras.main.scrollY +1200){
            this.x = this.respawnX;
            this.y = this.respawnY;
            this.cameras.main.setLerp(0, 1);
            
        }
        
        
    }
}