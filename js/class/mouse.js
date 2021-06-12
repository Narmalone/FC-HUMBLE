class mouse extends Phaser.GameObjects.Sprite{
    constructor(scene, x,y,texture,haut,gauche,droite){
        super(scene,x,y,texture);

        this.scene.physics.add.existing(this);
        this.scene.add.existing(this);

        this.keys = scene.input.keyboard.addKeys({
            left: gauche,
            right: droite,
            space: haut,
        });

        this.body.setAllowDrag(true);
        this.body.setDrag(1500, 0);
        this.body.setCollideWorldBounds(true);
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
        
    }
}