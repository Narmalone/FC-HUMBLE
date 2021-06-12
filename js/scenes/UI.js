class UI extends Phaser.Scene {
    constructor(){
        super('ui');
    }

    create(){

        //buttons
        //red
        this.redButton = this.add.sprite(game.config.width /2 ,game.config.height / 1.2, 'redB').setScale(0.5).setOrigin(0.5,0.5);
        this.redButton.setInteractive();
        this.redButton.on('pointerdown', function () {
            console.log('red')
        }, this);
        //blue
        this.blueButton = this.add.sprite(game.config.width /2.6,game.config.height / 1.2, 'blueB').setScale(0.5).setOrigin(0.5,0.5);
        this.blueButton.setInteractive();
        this.blueButton.on('pointerdown', function () {
            console.log('blue')
        }, this);
        //green
        this.greenButton = this.add.sprite(game.config.width / 1.625,game.config.height / 1.2, 'greenB').setScale(0.5).setOrigin(0.5,0.5);
        this.greenButton.setInteractive();
        this.greenButton.on('pointerdown', function () {
            console.log('green')
        }, this);

        //emoji
        this.greenButton = this.add.sprite(game.config.width / 1.625,game.config.height / 1.2, 'greenB').setScale(0.5).setOrigin(0.5,0.5);
        this.greenButton.setInteractive();
        this.greenButton.on('pointerdown', function () {
            console.log('green')
        }, this);


        console.log('l"ui du scientifique');
    }

    update(){

    }
}