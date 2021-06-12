class mainMenu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    create(){

        this.textPlay = this.add.text(game.config.width/2-200,game.config.height/2-100, 'PLAY',{font: "70px comfortaa",fill: "white"});

        this.textPlay.setInteractive();
        this.textPlay.on('pointerup', function(pointer){
            this.scene.stop();
            this.scene.start('level_1')
        }, this);
    }
}