class Scientist extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,nom){
        super(scene,x,y,nom);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene = scene;


        ////variables\\\\

        //pointer
        this.pointer;
    }

    //Functions
    Buttons(){
        //red
        
    }
    update(){
        this.pointer = this.scene.input.activePointer;
        this.Buttons();
    }
}