class platMoovLR extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        this.body.allowGravity = false;
        this.body.setVelocityX(0);

        this.platState = 0;
        this.dir = 1;
        this.clicked = false;

    }

    Clicked(){
        this.clicked = true;
        this.updateBlue();
        console.log('kk')
    }

    updateBlue(){
        console.log(55)
        if(this.clicked == true){
            
            this.body.setVelocityX(300 * this.dir);
        }
        
       

    }
}