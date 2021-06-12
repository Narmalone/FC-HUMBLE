class PlatMoovLR extends Phaser.gameObjects.Sprite {
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        this.body.allowGravity = false;
        this.body.setVelocityX(0);
    }

    update(){
        if(scientist > pointer > platGoRight){
            this.body.setVelocityX(120)
            if(this.body.blocked.right){
                this.body.setVelocityX(0)
            }
        }
        if(scientist > pointer > platGoLeft){
            this.body.setVelocityX(-120)
            if(this.body.blocked.left){
                this.body.setVelocityX(0)
            }
        }

    }
}