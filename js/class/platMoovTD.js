class platMoovTD extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        this.body.allowGravity = false;
        this.body.setVelocityX(0);
        this.clicked = false
        this.dir = 1;
        this.body.setImmovable(true)
        scene.physics.add.collider(this, scene.invisibleBlock ,function(obj, plat){
            if(obj.body.blocked.up){
                obj.body.setVelocityY(0);
                console.log('en haut');
                obj.dir = 1;
            }
            if(obj.body.blocked.down){
                obj.body.setVelocityY(0);
                console.log('en bas');
                obj.dir = -1;
            }
        });
    }

    Clicked(){
        this.clicked = true
        this.updateRed();
    }

    updateRed(){
        console.log(55)
        if(this.clicked == true){
            
            this.body.setVelocityY(300 * this.dir);
            
        }
       
    }
}