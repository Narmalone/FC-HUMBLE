class platMoovTD extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;
        this.body.allowGravity = false;
        this.body.setVelocityX(0);

        this.platState = 0;

    }

    Clicked(){
        
    }

    updateRed(){
        console.log('upd')
        this.body.setVelocityY(120)
        if(this.body.blocked.right){
            this.body.setVelocityX(0)
            this.platState ++;
        }
        else if(this.platState == 1){
            this.body.setVelocityY(-120)
        }
       

    }
}