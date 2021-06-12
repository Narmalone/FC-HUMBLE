class UI extends Phaser.Scene {
    constructor(){
        super('ui');
    }

    create(){

        //buttons
        this.redButton = this.add.sprite(300,550, 'redB');
        this.redButton.setInteractive();
        this.redButton.on('pointerdown', function () {
            console.log('red')
        }, this);

        this.blueButton = this.add.sprite(600,550, 'blueB');
        this.blueButton.setInteractive();
        this.blueButton.on('pointerdown', function () {
            console.log('blue')
        }, this);
        this.greenButton = this.add.sprite(908,550, 'greenB');
        this.greenButton.setInteractive();
        this.greenButton.on('pointerdown', function () {
            console.log('green')
        }, this);


        console.log('l"ui du scientifique');
    }

    update(){

    }
}