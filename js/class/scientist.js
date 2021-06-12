class MunBox extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,nom){
        super(scene,x,y,nom);
        scene.add.existing(this);
        scene.physics.add.existing(this);


        ////variables\\\\

        //pointer
        this.pointer;
        if(true)console.log(55);
    }

    //Functions
    update(){
        this.pointer = this.scene.input.activePointer;
        
    }
}