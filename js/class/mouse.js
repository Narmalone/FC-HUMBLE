class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite){
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

        

    
    }

    update(){
        if (this.keys.left.isDown){
            this.body.setVelocityX(-250);
        }
        if (this.keys.right.isDown){
            this.body.setVelocityX(250);
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

        if(this.x > this.scene.cameras.main.scrollY +1200){
            this.x = this.respawnX;
            this.y = this.respawnY;
            this.cameras.main.setLerp(0, 1);
            
        }
        
        
    }
}