class platMoovLR extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        this.body.allowGravity = false;
        this.body.setVelocityX(0);
        this.dir = 1;
        this.clicked = false;
        this.body.setImmovable(true)
        scene.physics.add.collider(this, scene.platform, function(obj, plat){
            if(obj.body.blocked.right){
                obj.body.setVelocityX(0);
                console.log('heyheyhey');
                obj.dir = -1;
            }
            if(obj.body.blocked.left){
                obj.body.setVelocityX(0);
                console.log('heyheyhey');
                obj.dir = 1;
            }
        });
    }

    Clicked(){
        this.clicked = true;
        this.updateBlue();
    }

    updateBlue(){
        console.log(55)
        if(this.clicked == true){
            
            this.body.setVelocityX(300 * this.dir);
        }

    }
}