class platDisp extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.body.setVelocityX(0);
        this.clicked = false;
        this.body.setImmovable(true); 
        // this.body.setEnable(false);
        // this.setVisible(false);
        this.alternate;
        scene.physics.add.collider(this, scene.player);
        
    }

    Clicked(){
        this.clicked = true;
        this.updateRed();
    }

    updateRed(){
        if(this.clicked == true){
            if (this.alternate==0){
                this.body.setEnable(true);
                this.setVisible(true);
                this.alternate=1;
            }
            else{
                this.body.setEnable(false);
                this.setVisible(false);
                this.alternate=0;
            }

            this.clicked=false;
        }


    }
}
