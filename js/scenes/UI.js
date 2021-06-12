class UI extends Phaser.Scene {
    constructor(){
        super('uiScene');
    }

    create(){

        //buttons
        this.redButton = this.add.sprite(100,550, 'redB');
        this.redButton.setInteractive();
        this.blueButton = this.add.sprite(500,550, 'blueB');
        this.blueButton.setInteractive();
        this.greenButton = this.add.sprite(908,550, 'greenB');
        this.greenButton.setInteractive();


        console.log('l"ui du scientifique');
    }

    update(){

    }
}