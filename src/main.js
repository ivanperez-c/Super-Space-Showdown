///////////////////////////////////GLOBAL VARIABLES///////////////////////////////////
var gameOver = false;
var player1;
var player2;
var player1Bullet;
var player2Bullet;
var p1LookingLeft;
var p1LookingRight;
var p2LookingLeft;
var p2LookingRight;
var SelP1;
var SelP2;
var SelP3;
var SelP4;
var SelP5;
var SelP6;
var SelP7;
var SelP8;
var player1HasSelected = false;
var player2HasSelected = false;
var ready1Text;
var ready2Text;
var platforms;
var cursors;
var timerText;
var timedEvent;
var player1Life = 6;
var player2Life = 6;
var player1Ammo = 5;
var player2Ammo = 5;
//var player1LifeText;
//var player2LifeText;
//var player1AmmoText;
//var player2AmmoText;
var player1AbleToShoot = true;
var player2AbleToShoot = true;
var player1Cadence = 2000;
var player2Cadence = 2000;
var ammo;
var health;
var velocity;
var damage;
var slow;
var big;
var small;
var point;
var cadence;
var createObject = true;
var createAmmo = true;
var player1Score = 0;
var player2Score = 0;
var player1ScoreText;
var player2ScoreText;
var randomNumber;
var player1VelocityX = 160;
var player1VelocityY = 200;
var player2VelocityX = 160;
var player2VelocityY = 200;
var player1BulletDamage = 1;
var player2BulletDamage = 1;
var timeOver = false;
var graphics;
var timerEvent1;
var clockSize = 25;
var corazonesPlayer1;
var corazonesPlayer2;
var balasPlayer1;
var balasPlayer2;
var noun;
var musicaFondo;
var activarMusica = true;
var resultado;
var musicaJuego;
var efectoMuerte;
var efectoRecolector;
var efectoDisparo;
var sonidoBoton;

///////////////////////////////////EXTERNAL FUNCTIONS///////////////////////////////////
//Player 1 bullets hits on player 2
function BulletPlayer1Hit(player2, player1Bullet){
    efectoMuerte.play();
    player2.setVelocityX(0);
    player2.setVelocityY(0);
    player2.x = 924;
    player2.y = 50;
    player1Bullet.destroy();
    player2Life = player2Life - player1BulletDamage;
    player1BulletDamage = 1;
    player1Score = player1Score + 1;
    //player2LifeText.setText('Vida 2: ' + player2Life);
    player1ScoreText.setText(player1Score);
    if(player2Life == 5){
        corazonesPlayer2 = this.add.image(974,30, 'corazon5').setScale(0.05);
    }else if(player2Life == 4){
        corazonesPlayer2 = this.add.image(974,30, 'corazon4').setScale(0.05);
    }else if(player2Life == 3){
        corazonesPlayer2 = this.add.image(974,30, 'corazon3').setScale(0.05);
    }else if(player2Life == 2){
        corazonesPlayer2 = this.add.image(974,30, 'corazon2').setScale(0.05);
    }else if(player2Life == 1){
        corazonesPlayer2 = this.add.image(974,30, 'corazon1').setScale(0.05);
    }else if(player2Life == 0){
        corazonesPlayer2 = this.add.image(974,30, 'corazon0').setScale(0.05);
    }
}

//Player 2 bullets hits on player 1
function BulletPlayer2Hit(player1, player2Bullet){
    efectoMuerte.play();
    player1.setVelocityX(0);
    player1.setVelocityY(0);
    player1.x = 100;
    player1.y = 50;
    player2Bullet.destroy();
    player1Life = player1Life - player2BulletDamage;
    player2BulletDamage = 1;
    player2Score = player2Score + 1;
   // player1LifeText.setText('Vida 1: ' + player1Life);
    player2ScoreText.setText(player2Score);
    if(player1Life == 5){
        corazonesPlayer1 = this.add.image(50,30, 'corazon5').setScale(0.05);
    }else if(player1Life == 4){
        corazonesPlayer1 = this.add.image(50,30, 'corazon4').setScale(0.05);
    }else if(player1Life == 3){
        corazonesPlayer1 = this.add.image(50,30, 'corazon3').setScale(0.05);
    }else if(player1Life == 2){
        corazonesPlayer1 = this.add.image(50,30, 'corazon2').setScale(0.05);
    }else if(player1Life == 1){
        corazonesPlayer1 = this.add.image(50,30, 'corazon1').setScale(0.05);
    }else if(player1Life == 0){
        corazonesPlayer1 = this.add.image(50,30, 'corazon0').setScale(0.05);
    }
}

//Enable player 1 to shoot after 2 seconds
function enablePlayer1Shoot(){
    player1AbleToShoot = true
}

//Enable player 2 to shoot after 2 seconds
function enablePlayer2Shoot(){
    player2AbleToShoot = true
}

//End game by time
function endGame() {
    musicaJuego.stop();
    this.scene.start('CreditsScene');
}

//End game by time
function endGameByTime() {
    timeOver = true;
}

//Add ammo to player 1
function addAmmo1(player1, ammo){
    efectoRecolector.play();
    console.log('ammo');
    ammo.destroy();
    player1Ammo = 5;
    balasPlayer1 = this.add.image(230,30,'municion5').setScale(0.1);
    //player1AmmoText.setText('Munición 1: ' + player1Ammo);
    this.time.delayedCall(10000, generateAmmo, [], this); 
}

//Add ammo to player 2
function addAmmo2(player2, ammo){
    efectoRecolector.play();
    console.log('ammo');
    ammo.destroy();
    player2Ammo = 5;
    balasPlayer2 = this.add.image(800,30,'municion5').setScale(0.1);
    //player2AmmoText.setText('Munición 2: ' + player2Ammo);
    this.time.delayedCall(10000, generateAmmo, [], this); 
}


//Add health to player 1
function addHealth1(player1, health){
    efectoRecolector.play();
    console.log('health');
    health.destroy();
    this.time.delayedCall(5000, generateObject, [], this);
    if(player1Life < 6){
        player1Life += 1;
        //player1LifeText.setText('Vida 1: ' + player1Life);
        if(player1Life == 6){
            corazonesPlayer1 = this.add.image(50,30, 'corazon6').setScale(0.05);
        }else if(player1Life == 5){
            corazonesPlayer1 = this.add.image(50,30, 'corazon5').setScale(0.05);
        }else if(player1Life == 4){
            corazonesPlayer1 = this.add.image(50,30, 'corazon4').setScale(0.05);
        }else if(player1Life == 3){
            corazonesPlayer1 = this.add.image(50,30, 'corazon3').setScale(0.05);
        }else if(player1Life == 2){
            corazonesPlayer1 = this.add.image(50,30, 'corazon2').setScale(0.05);
        }else if(player1Life == 1){
            corazonesPlayer1 = this.add.image(50,30, 'corazon1').setScale(0.05);
        }else if(player1Life == 0){
            corazonesPlayer1 = this.add.image(50,30, 'corazon0').setScale(0.05);
        }
    }
}

//Add health to player 2
function addHealth2(player2, health){
    efectoRecolector.play();
    console.log('health');
    health.destroy();
    this.time.delayedCall(5000, generateObject, [], this); 
    if(player2Life < 6){
        player2Life += 1;
        //player2LifeText.setText('Vida 2: ' + player2Life);
        if(player2Life == 6){
            corazonesPlayer2 = this.add.image(974,30, 'corazon6').setScale(0.05);
        }else if(player2Life == 5){
            corazonesPlayer2 = this.add.image(974,30, 'corazon5').setScale(0.05);
        }else if(player2Life == 4){
            corazonesPlayer2 = this.add.image(974,30, 'corazon4').setScale(0.05);
        }else if(player2Life == 3){
            corazonesPlayer2 = this.add.image(974,30, 'corazon3').setScale(0.05);
        }else if(player2Life == 2){
            corazonesPlayer2 = this.add.image(974,30, 'corazon2').setScale(0.05);
        }else if(player2Life == 1){
            corazonesPlayer2 = this.add.image(974,30, 'corazon1').setScale(0.05);
        }else if(player2Life == 0){
            corazonesPlayer2 = this.add.image(974,30, 'corazon0').setScale(0.05);
        }
    }
}


//Add velocity to player 1
function addVelocity1(player1, velocity){
    efectoRecolector.play();
    console.log('velocity');
    velocity.destroy();
    player1VelocityX = 320;
    player1VelocityY = 400;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreVelocity1, [], this); 
}

//Add velocity to player 2
function addVelocity2(player2, velocity){
    efectoRecolector.play();
    console.log('velocity');
    velocity.destroy();
    player2VelocityX = 320;
    player2VelocityY = 400;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreVelocity2, [], this); 
}


//Add damage to player 1
function addDamage1(player1, damage){
    efectoRecolector.play();
    console.log('damage');
    damage.destroy();
    player1BulletDamage = 3;
    this.time.delayedCall(5000, generateObject, [], this); 
}

//Add damage to player 2
function addDamage2(player2, damage){
    efectoRecolector.play();
    console.log('damage');
    damage.destroy();
    player2BulletDamage = 3;
    this.time.delayedCall(5000, generateObject, [], this); 
}


//Add slow to player 1
function addSlow1(player1, slow){
    efectoRecolector.play();
    console.log('slow');
    slow.destroy();
    player2VelocityX = 80;
    player2VelocityY = 100;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreVelocity2, [], this); 
}

//Add slow to player 2
function addSlow2(player2, slow){
    efectoRecolector.play();
    console.log('slow');
    slow.destroy();
    player1VelocityX = 80;
    player1VelocityY = 100;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreVelocity1, [], this); 
}


//Add big to player 1
function addBig1(player1, big){
    efectoRecolector.play();
    console.log('big');
    big.destroy();
    player2.setScale(1.5);
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreSize2, [], this);
}

//Add big to player 2
function addBig2(player2, big){
    efectoRecolector.play();
    console.log('big');
    big.destroy();
    player1.setScale(1.5);
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreSize1, [], this);
}


//Add small to player 1
function addSmall1(player1, small){
    efectoRecolector.play();
    console.log('small');
    small.destroy();
    player1.setScale(0.5);
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreSize1, [], this);
}

//Add small to player 2
function addSmall2(player2, small){
    efectoRecolector.play();
    console.log('small');
    small.destroy();
    player2.setScale(0.5);
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreSize2, [], this);
}


//Add point to player 1
function addPoint1(player1, point){
    efectoRecolector.play();
    console.log('point');
    point.destroy();
    player1Score = player1Score + 1;
    player1ScoreText.setText(player1Score);
    this.time.delayedCall(5000, generateObject, [], this); 
}

//Add point to player 2
function addPoint2(player2, point){
    efectoRecolector.play();
    console.log('point');
    point.destroy();
    player2Score = player2Score + 1;
    player2ScoreText.setText(player2Score);
    this.time.delayedCall(5000, generateObject, [], this); 
}
    

//Add cadence to player 1
function addCadence1(player1, cadence){
    efectoRecolector.play();
    console.log('cadence');
    cadence.destroy();
    player1Cadence = 500;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreCadence1, [], this); 
}

//Add cadence to player 2
function addCadence2(player2, cadence){
    efectoRecolector.play();
    console.log('cadence');
    cadence.destroy();
    player2Cadence = 500;
    this.time.delayedCall(5000, generateObject, [], this); 
    this.time.delayedCall(10000, restoreCadence2, [], this); 
}


//Generate object
function generateObject(){
    createObject = true;
}

//Generate object
function generateAmmo(){
    createAmmo = true;
}

//Restore player 1 velocity
function restoreVelocity1(){
    player1VelocityX = 160;
    player1VelocityY = 200;
}

//Restore player 2 velocity
function restoreVelocity2(){
    player2VelocityX = 160;
    player2VelocityY = 200;
}

//Restore player 1 size
function restoreSize1(){
    player1.setScale(1);
}

//Restore player 2 size
function restoreSize2(){
    player2.setScale(1);
}

//Restore player 1 cadence
function restoreCadence1(){
    var player1Cadence = 2000;
}

//Restore player 2 cadence
function restoreCadence2(){
    var player2Cadence = 2000;
}

//Start Game
function startGame(){
    musicaFondo.stop();
    this.scene.start('GameScene');
}

//Draw Clock
function drawClock (x, y, timer)
{

    graphics.lineStyle(3, 0xffffff, 1);
    graphics.strokeCircle(x, y, clockSize);

    var angle;
    var dest;
    var p1;
    var p2;
    var size;

    if (timer.repeat > 0)
    {
        size = clockSize * 0.9;

        angle = (360 * timer.getOverallProgress()) - 90;
        dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

        graphics.lineStyle(2, 0xff0000, 1);

        graphics.beginPath();

        graphics.moveTo(x, y);

        p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

        graphics.lineTo(p1.x, p1.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.moveTo(x, y);

        p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

        graphics.lineTo(p2.x, p2.y);
        graphics.lineTo(dest.x, dest.y);

        graphics.strokePath();
        graphics.closePath();
    }


    size = clockSize * 0.95;

    angle = (360 * timer.getProgress()) - 90;
    dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

    graphics.lineStyle(2, 0xffff00, 1);

    graphics.beginPath();

    graphics.moveTo(x, y);

    p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

    graphics.lineTo(p1.x, p1.y);
    graphics.lineTo(dest.x, dest.y);

    graphics.moveTo(x, y);

    p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

    graphics.lineTo(p2.x, p2.y);
    graphics.lineTo(dest.x, dest.y);

    graphics.strokePath();
    graphics.closePath();
}


///////////////////////////////////MAIN SCENE///////////////////////////////////
class MainScene extends Phaser.Scene{
    constructor() {
		super({ key: 'MainScene' });
	}

    preload(){
        this.load.image('fondoMain', 'assets/fondoPrincipal.png');
        this.load.image('PlayButton', 'assets/BotonJugar.png');
        this.load.image('ControlButton', 'assets/BotonAjustes.png');
        this.load.audio('musicaFondo', 'assets/music/m_menú.mp3');
        this.load.audio('sonidoBoton', 'assets/SFX/button.mp3');
    }

    create(){
        musicaFondo = this.sound.add('musicaFondo', { loop: false });
        sonidoBoton = this.sound.add('sonidoBoton', { loop: false });
       
        this.input.on('pointerup', function (pointer) {

            if (pointer.leftButtonReleased()&&activarMusica==true)
            {
                activarMusica = false;
                musicaFondo.play();
            }
            else if (pointer.rightButtonReleased()&&activarMusica==true)
            {
                activarMusica = false;
                musicaFondo.play();
            }
            else if (pointer.middleButtonReleased()&&activarMusica==true)
            {
                activarMusica = false;
                musicaFondo.play();
            }
            else if (pointer.backButtonReleased()&&activarMusica==true)
            {
                activarMusica = false;
                musicaFondo.play();
            }
            else if (pointer.forwardButtonReleased()&&activarMusica==true)
            {
                activarMusica = false;
                musicaFondo.play();
            }
    
        });

        //Add the background
        this.add.image(512, 320, 'fondoMain');

        //Add interactions with the buttons - Go to play Scene
        var playButton = this.add.zone(610, 100, 340, 160);
        playButton.setOrigin(0);
        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            sonidoBoton.play();
            //this.scene.start('Player1Selector')
            if(activarMusica==true){
                musicaFondo.play();
            }
            activarMusica = false;
            this.scene.start('PlayerSelector')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);

        //Add interactions with the buttons - Go to controls scene
        var controlButton = this.add.zone(640, 440, 280, 140);
        controlButton.setOrigin(0);
        controlButton.setInteractive();
        controlButton.once('pointerdown', () => {
            sonidoBoton.play();
            if(activarMusica==true){
                musicaFondo.play();
            }
            activarMusica = false;
            this.scene.start('Controls')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(controlButton);

    }

}

///////////////////////////////////PLAYER CHARACTER SELECTOR///////////////////////////////////
class PlayerSelector extends Phaser.Scene{
    constructor() {
		super({ key: 'PlayerSelector' });
	}

    preload(){
        this.load.image('fondoCharacter', 'assets/fondoMenu.png');
        this.load.spritesheet('player1', 'assets/character1.png', { frameWidth: 32, frameHeight: 48});
        this.load.spritesheet('player2', 'assets/character2.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player3', 'assets/character3.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player4', 'assets/character4.png', { frameWidth: 32, frameHeight: 48 });
        
    }

    create(){
        //Add the background
        this.add.image(512, 320, 'fondoCharacter');

        //Add the characters
        SelP1 = this.add.sprite(200, 200, 'player1').setInteractive().setScale(4);
        SelP2 = this.add.sprite(400, 200, 'player2').setInteractive().setScale(4);
        SelP3 = this.add.sprite(600, 200, 'player3').setInteractive().setScale(4);
        SelP4 = this.add.sprite(800, 200, 'player4').setInteractive().setScale(4);
        SelP5 = this.add.sprite(200, 470, 'player1').setInteractive().setScale(4);
        SelP6 = this.add.sprite(400, 470, 'player2').setInteractive().setScale(4);
        SelP7 = this.add.sprite(600, 470, 'player3').setInteractive().setScale(4);
        SelP8 = this.add.sprite(800, 470, 'player4').setInteractive().setScale(4);

        noun = this.add.text(55, 100, 'Jugador 1', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
        noun = this.add.text(55, 370, 'Jugador 2', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        noun = this.add.text(150, 300, 'DAVROS', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
        noun = this.add.text(150, 570, 'DAVROS', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        noun = this.add.text(370, 300, 'EZRI', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
        noun = this.add.text(370, 570, 'EZRI', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        noun = this.add.text(565, 300, 'DUSKY', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
        noun = this.add.text(565, 570, 'DUSKY', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        noun = this.add.text(760, 300, 'ZAMASU', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
        noun = this.add.text(760, 570, 'ZAMASU', {  fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        ready1Text = this.add.text(270, 16, 'Jugador 1 pendiente de elegir personaje', {  fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });
        ready2Text = this.add.text(270, 65, 'Jugador 2 pendiente de elegir personaje', {  fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });
        
    }
    update (){    
       
        //Change color of characters
		this.input.on('gameobjectover', function (pointer, gameObject) {
			gameObject.setTint(0x00ff00);
		});

		this.input.on('gameobjectout', function (pointer, gameObject) {
			if (gameObject.input.isDown) {
				gameObject.setTint(0xff0000);
			}
			else {
				gameObject.clearTint();
			}
		});

        //Player 1 choice
        SelP1.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player1 = 'character1';
            player1HasSelected = true;
            ready1Text.setText('Jugador 1 listo con: DAVROS');
		});

		SelP2.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player1 = 'character2';
            player1HasSelected = true;
            ready1Text.setText('Jugador 1 listo con: EZRI');
		});

		SelP3.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player1 = 'character3';
            player1HasSelected = true;
            ready1Text.setText('Jugador 1 listo con: DUSKY');
		});

		SelP4.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player1 = 'character4';
            player1HasSelected = true;
            ready1Text.setText('Jugador 1 listo con: ZAMASU');
		});


        //Player 2 choice
        SelP5.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player2 = 'character1';
            player2HasSelected = true;
            ready2Text.setText('Jugador 2 listo con: DAVROS');
		});

		SelP6.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player2 = 'character2';
            player2HasSelected = true;
            ready2Text.setText('Jugador 2 listo con: EZRI');
		});

		SelP7.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player2 = 'character3';
            player2HasSelected = true;
            ready2Text.setText('Jugador 2 listo con: DUSKY');
		});

		SelP8.on('pointerdown', function (pointer) {
            sonidoBoton.play();
			player2 = 'character4';
            player2HasSelected = true;
            ready2Text.setText('Jugador 2 listo con: ZAMASU');
		});

        if(player2HasSelected == true && player1HasSelected == true){
            this.time.delayedCall(3000, startGame, [], this); 
        }
    }
}


///////////////////////////////////CONTROLS SCENE///////////////////////////////////
class Controls extends Phaser.Scene{
    constructor() {
		super({ key: 'Controls' });
	}

    preload(){
        this.load.image('fondoControl', 'assets/fondoTuto.png');
    }

    create(){ 
        //Add the background
        this.add.image(512, 320, 'fondoControl');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('MainScene')
        });
       // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);
    }
}


///////////////////////////////////GAME SCENE///////////////////////////////////
class GameScene extends Phaser.Scene{
    constructor() {
		super({ key: 'GameScene' });

        this.player1;
        this.player2;
	}
    
    preload () {
        this.load.image('sky', 'assets/fondo.png');
        this.load.image('ground', 'assets/platformP.png');
        this.load.spritesheet('SpritePlayer1', 'assets/player1.png', { frameWidth: 32, frameHeight: 48});
        this.load.spritesheet('SpritePlayer2', 'assets/player2.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('SpritePlayer3', 'assets/player3.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('SpritePlayer4', 'assets/player4.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('bullet', 'assets/bala.png');
        this.load.image('ammo', 'assets/ammo.png');
        this.load.image('health', 'assets/health.png');
        this.load.image('velocity', 'assets/velocity.png');
        this.load.image('damage', 'assets/damage.png');
        this.load.image('slow', 'assets/slow.png');
        this.load.image('big', 'assets/big.png');
        this.load.image('small', 'assets/small.png');
        this.load.image('point', 'assets/point.png');
        this.load.image('cadence', 'assets/cadence.png');
        this.load.image('corazon6', 'assets/corazon6.png');
        this.load.image('corazon5', 'assets/corazon5.png');
        this.load.image('corazon4', 'assets/corazon4.png');
        this.load.image('corazon3', 'assets/corazon3.png');
        this.load.image('corazon2', 'assets/corazon2.png');
        this.load.image('corazon1', 'assets/corazon1.png');
        this.load.image('corazon0', 'assets/corazon0.png');
        this.load.image('puntosPlayer1', 'assets/puntos1.png');
        this.load.image('puntosPlayer2', 'assets/puntos2.png');
        this.load.image('municion0', 'assets/munición0.png');
        this.load.image('municion1', 'assets/munición1.png');
        this.load.image('municion2', 'assets/munición2.png');
        this.load.image('municion3', 'assets/munición3.png');
        this.load.image('municion4', 'assets/munición4.png');
        this.load.image('municion5', 'assets/munición5.png');
        this.load.image('suelo', 'assets/platform.png');
        this.load.audio('musicaJuego', 'assets/music/m_acción1.mp3');
        this.load.audio('efectoMuerte', 'assets/SFX/Death.mp3');
        this.load.audio('efectoDisparo', 'assets/SFX/Gun.mp3');
        this.load.audio('efectoRecolector', 'assets/SFX/Recarga laser.mp3');
    }

    create () {
        
        musicaJuego = this.sound.add('musicaJuego', { loop: true });
        musicaJuego.play();

        efectoMuerte = this.sound.add('efectoMuerte', { loop: false });
        efectoDisparo = this.sound.add('efectoDisparo', { loop: false });
        efectoRecolector = this.sound.add('efectoRecolector', { loop: false });

        //Add the background
        this.add.image(512, 320, 'sky');

        //Add the platforms
        platforms = this.physics.add.staticGroup();
       
        platforms.create(100, 170, 'ground');
        platforms.create(924, 170, 'ground');
        platforms.create(512, 170, 'ground');
        platforms.create(312, 290, 'ground');
        platforms.create(712, 290, 'ground');
        platforms.create(200, 410, 'ground');
        platforms.create(824, 410, 'ground');
        platforms.create(100, 530, 'ground');
        platforms.create(924, 530, 'ground');
        platforms.create(350, 530, 'ground');
        platforms.create(674, 530, 'ground');
        platforms.create(100, 635, 'suelo');
        platforms.create(500, 635, 'suelo');
        platforms.create(900, 635, 'suelo');

        corazonesPlayer1 = this.add.image(50,30, 'corazon6').setScale(0.05);
        this.add.image(130,30,'puntosPlayer1').setScale(0.05);
        balasPlayer1 = this.add.image(230,30,'municion5').setScale(0.1);

        corazonesPlayer2 = this.add.image(974,30, 'corazon6').setScale(0.05);
        this.add.image(870,30,'puntosPlayer2').setScale(0.05);
        balasPlayer2 = this.add.image(800,30,'municion5').setScale(0.1);

        //Player 1 creation
        if(player1 === 'character1'){
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer1');
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [ { key: 'SpritePlayer1', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right1',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef1',
                frames: [{ key: 'SpritePlayer1', frame: 0 }],
                frameRate: 20
            });
        }else if(player1 === 'character2'){
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer2');
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [ { key: 'SpritePlayer2', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right1',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef1',
                frames: [{ key: 'SpritePlayer2', frame: 0 }],
                frameRate: 20
            });
        }else if(player1 === 'character3'){
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer3');
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [ { key: 'SpritePlayer3', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right1',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef1',
                frames: [{ key: 'SpritePlayer3', frame: 0 }],
                frameRate: 20
            });
        }else if(player1 === 'character4'){
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer4');
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [ { key: 'SpritePlayer4', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right1',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef1',
                frames: [{ key: 'SpritePlayer4', frame: 0 }],
                frameRate: 20
            });
        }
        

        //Player 2 creation
        if(player2 === 'character1'){
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer1');
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [ { key: 'SpritePlayer1', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right2',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef2',
                frames: [{ key: 'SpritePlayer1', frame: 0 }],
                frameRate: 20
            });
        }else if(player2 === 'character2'){
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer2');
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [ { key: 'SpritePlayer2', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right2',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef2',
                frames: [{ key: 'SpritePlayer2', frame: 0 }],
                frameRate: 20
            });
        }else if(player2 === 'character3'){
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer3');
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [ { key: 'SpritePlayer3', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right2',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef2',
                frames: [{ key: 'SpritePlayer3', frame: 0 }],
                frameRate: 20
            });
        }else if(player2 === 'character4'){
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer4');
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [ { key: 'SpritePlayer4', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right2',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turnDef2',
                frames: [{ key: 'SpritePlayer4', frame: 0 }],
                frameRate: 20
            });
        }

        //Timer 
		timedEvent = this.time.delayedCall(120000, endGameByTime, [], this);
        
        timerEvent1 = this.time.addEvent({ delay: 120000, timeScale: 1 });
        graphics = this.add.graphics({ x: 0, y: 0 });
    
        //Game texts
        player1ScoreText = this.add.text(150, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });
        player2ScoreText = this.add.text(895, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });
        
        //Input Events
        cursors = this.input.keyboard.createCursorKeys();

        //Colliders - Players with the platforms
        this.physics.add.collider(player1, platforms);   
        this.physics.add.collider(player2, platforms);
        
    }

    update (){
        graphics.clear();
        drawClock(512, 35, timerEvent1);

        //End game by time
        if(timeOver == true){
            if (player1Score > player2Score){
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                resultado = 'j1';
            }else if(player1Score < player2Score){
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                resultado = 'j2';
            }else{
                player1.setScale(2);
                player2.setScale(2);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                resultado = 'empate';
            }
            timedEvent.paused = true;
			this.physics.pause();
			this.time.delayedCall(2000, endGame, [], this);
        }

        //End game by score
        if (player1Score == 10 || player2Score == 10) {
            if (player1Score > player2Score){
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                resultado = 'j1';
            }else if(player1Score < player2Score){
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                resultado = 'j2';
            }else{
                player1.setScale(3);
                player2.setScale(3);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                resultado = 'empate';
            }
            timedEvent.paused = true;
			this.physics.pause();
			this.time.delayedCall(2000, endGame, [], this);
        }

        //End game by life
        if (player1Life <= 0 || player2Life <= 0) {
            if (player1Life <= 0){
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                resultado = 'j2';
            }else if(player2Life <= 0){
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                resultado = 'j1';
            }else{
                player1.setScale(3);
                player2.setScale(3);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                resultado = 'empate';
            }
            timedEvent.paused = true;
			this.physics.pause();
			this.time.delayedCall(2000, endGame, [], this);
        }

        //Player 1 controls
        this.input.keyboard.on("keydown_A", () => {
            p1LookingRight = false;
            p1LookingLeft = true;
            player1.setVelocityX(-player1VelocityX);
            player1.anims.play('left1', true);
        });
        this.input.keyboard.on("keydown_S", () => {
            player1.setScale(0.5);
        });
        this.input.keyboard.on("keydown_D", () => {
            p1LookingLeft = false;
            p1LookingRight = true;
            player1.setVelocityX(player1VelocityX);
            player1.anims.play('right1', true);
        });
        this.input.keyboard.on("keydown_W", () => {
            player1.setVelocityY(-player1VelocityY);
            player1.anims.play('turn1');
        }); 
        this.input.keyboard.on("keyup_A", () => {
            p1LookingLeft = false;
			player1.setVelocityX(0);
			player1.anims.play('turn1');
		});
        this.input.keyboard.on("keyup_D", () => {
            p1LookingRight = false;
			player1.setVelocityX(0);
			player1.anims.play('turn1');
		});
        this.input.keyboard.on("keyup_S", () => {
            player1.setScale(1);
		});

        //Player 1 actions
        this.input.keyboard.on("keyup_Q", () => {
            if (player1AbleToShoot == true && player1Ammo > 0){
                efectoDisparo.play();
                player1Ammo = player1Ammo - 1;
                //player1AmmoText.setText('Munición 1: ' + player1Ammo);
                if(player1Ammo == 5){
                    balasPlayer1 = this.add.image(230,30,'municion5').setScale(0.1);
                }else if(player1Ammo == 4){
                    balasPlayer1 = this.add.image(230,30,'municion4').setScale(0.1);
                }else if(player1Ammo == 3){
                    balasPlayer1 = this.add.image(230,30,'municion3').setScale(0.1);
                }else if(player1Ammo == 2){
                    balasPlayer1 = this.add.image(230,30,'municion2').setScale(0.1);
                }else if(player1Ammo == 1){
                    balasPlayer1 = this.add.image(230,30,'municion1').setScale(0.1);
                }else if(player1Ammo == 0){
                    balasPlayer1 = this.add.image(230,30,'municion0').setScale(0.1);
                }
                player1Bullet = this.physics.add.image(player1.body.x + 15, player1.body.y + 20, 'bullet').setScale(0.7);
                if (p1LookingLeft == true){
                    player1Bullet.setVelocityX(-2000);
                }else if (p1LookingRight == true){
                    player1Bullet.setVelocityX(2000);
                }else{
                    player1Bullet.setVelocityY(-2000);
                }
                player1AbleToShoot = false;
                this.time.delayedCall(player1Cadence, enablePlayer1Shoot, [], this);
            }
        });

        //Player 2 controls
        this.input.keyboard.on("keydown_J", () => {
            p2LookingRight = false;
            p2LookingLeft = true;
            player2.setVelocityX(-player2VelocityX);
            player2.anims.play('left2', true);
        });
        this.input.keyboard.on("keydown_K", () => {
            player2.setScale(0.5);
        });
        this.input.keyboard.on("keydown_L", () => {
            p2LookingLeft = false;
            p2LookingRight = true;
            player2.setVelocityX(player2VelocityX);
            player2.anims.play('right2', true);
        });
        this.input.keyboard.on("keydown_I", () => {
            player2.setVelocityY(-player2VelocityY);
            player2.anims.play('turn2');
        }); 
        this.input.keyboard.on("keyup_J", () => {
            p2LookingLeft = false;
			player2.setVelocityX(0);
			player2.anims.play('turn2');
		});
        this.input.keyboard.on("keyup_L", () => {
            p2LookingRight = false;
			player2.setVelocityX(0);
			player2.anims.play('turn2');
		});
        this.input.keyboard.on("keyup_K", () => {
            player2.setScale(1);
		});

        //Player 2 actions
        this.input.keyboard.on("keyup_U", () => {
            if(player2AbleToShoot == true && player2Ammo > 0){
                efectoDisparo.play();
                player2Ammo = player2Ammo - 1;
                //player2AmmoText.setText('Munición 2: ' + player2Ammo);
                if(player2Ammo == 5){
                    balasPlayer2 = this.add.image(800,30,'municion5').setScale(0.1);
                }else if(player2Ammo == 4){
                    balasPlayer2 = this.add.image(800,30,'municion4').setScale(0.1);
                }else if(player2Ammo == 3){
                    balasPlayer2 = this.add.image(800,30,'municion3').setScale(0.1);
                }else if(player2Ammo == 2){
                    balasPlayer2 = this.add.image(800,30,'municion2').setScale(0.1);
                }else if(player2Ammo == 1){
                    balasPlayer2 = this.add.image(800,30,'municion1').setScale(0.1);
                }else if(player2Ammo == 0){
                    balasPlayer2 = this.add.image(800,30,'municion0').setScale(0.1);
                }
                player2Bullet = this.physics.add.image(player2.body.x + 15, player2.body.y + 20, 'bullet').setScale(0.7);
                if (p2LookingLeft == true){
                    player2Bullet.setVelocityX(-2000);
                }else if (p2LookingRight == true){
                    player2Bullet.setVelocityX(2000);
                }else{
                    player2Bullet.setVelocityY(-2000);
                }
                player2AbleToShoot = false;
                this.time.delayedCall(player2Cadence, enablePlayer2Shoot, [], this); 
            }
        });

        //Generate ammo
        if (createAmmo == true){
            createAmmo = false;
            ammo = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'ammo').setScale(0.2);
            ammo.setCollideWorldBounds(true)
            this.physics.add.collider(ammo, platforms);
        }

        //Generate objects
        if (createObject == true){
            createObject = false;
            randomNumber = Phaser.Math.FloatBetween(0, 10);
            //randomNumber = 2;
            console.log(randomNumber);
            if (randomNumber >= 0 && randomNumber <= 2){ //Generate Health
                health = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'health').setScale(0.2);
                health.setCollideWorldBounds(true)
                this.physics.add.collider(health, platforms);
            }
            if (randomNumber > 2 && randomNumber <= 3){ //Generate Velocity
                velocity = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'velocity').setScale(0.2);
                velocity.setCollideWorldBounds(true)
                this.physics.add.collider(velocity, platforms);
            }
            if (randomNumber > 3 && randomNumber <= 4){ //Generate more damage on bullet
                damage = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'damage').setScale(0.2);
                damage.setCollideWorldBounds(true)
                this.physics.add.collider(damage, platforms);
            }
            if (randomNumber > 4 && randomNumber <= 5){ //Generate slow enemy
                slow = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'slow').setScale(0.2);
                slow.setCollideWorldBounds(true)
                this.physics.add.collider(slow, platforms);
            }
            if (randomNumber > 5 && randomNumber <= 6){ //Generate big enemy
                big = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'big').setScale(0.2);
                big.setCollideWorldBounds(true)
                this.physics.add.collider(big, platforms);
            }
            if (randomNumber > 6 && randomNumber <= 7){ //Generate small player
                small = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'small').setScale(0.2);
                small.setCollideWorldBounds(true)
                this.physics.add.collider(small, platforms);
            }
            if (randomNumber > 7 && randomNumber <= 9){ //Generate a point
                point = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'point').setScale(0.2);
                point.setCollideWorldBounds(true)
                this.physics.add.collider(point, platforms);
            }
            if (randomNumber > 9 && randomNumber <= 10){ //Generate cadence
                cadence = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'cadence').setScale(0.2);
                cadence.setCollideWorldBounds(true)
                this.physics.add.collider(cadence, platforms);
            }
        }

        //Update of collisions
        this.physics.add.collider(player2, player1Bullet, BulletPlayer1Hit, null, this);
        this.physics.add.collider(player1, player2Bullet, BulletPlayer2Hit, null, this);
        this.physics.add.collider(player1, ammo, addAmmo1, null, this);
        this.physics.add.collider(player2, ammo, addAmmo2, null, this);
        this.physics.add.collider(player1, health, addHealth1, null, this);
        this.physics.add.collider(player2, health, addHealth2, null, this);
        this.physics.add.collider(player1, velocity, addVelocity1, null, this);
        this.physics.add.collider(player2, velocity, addVelocity2, null, this);
        this.physics.add.collider(player1, damage, addDamage1, null, this);
        this.physics.add.collider(player2, damage, addDamage2, null, this);
        this.physics.add.collider(player1, slow, addSlow1, null, this);
        this.physics.add.collider(player2, slow, addSlow2, null, this);
        this.physics.add.collider(player1, big, addBig1, null, this);
        this.physics.add.collider(player2, big, addBig2, null, this);
        this.physics.add.collider(player1, small, addSmall1, null, this);
        this.physics.add.collider(player2, small, addSmall2, null, this);
        this.physics.add.collider(player1, point, addPoint1, null, this);
        this.physics.add.collider(player2, point, addPoint2, null, this);
        this.physics.add.collider(player1, cadence, addCadence1, null, this);
        this.physics.add.collider(player2, cadence, addCadence2, null, this);
    }
}

///////////////////////////////////CREDITS SCENE///////////////////////////////////
class CreditsScene extends Phaser.Scene{
    constructor() {
		super({ key: 'CreditsScene' });
	}

    preload(){
        this.load.image('fondoCredit', 'assets/fondoMenu.png');
        this.load.image('botonMP', 'assets/BotonMP.png');
        this.load.image('victoriaJ2', 'assets/victoriaJ1.png');
        this.load.image('victoriaJ1', 'assets/victoriaJ2.png');
        this.load.image('empate', 'assets/empate.png');
        this.load.image('autores', 'assets/Autores.png');
    }

    create(){
        musicaFondo.play();
        //Add the background
        this.add.image(512, 320, 'fondoCredit');

        if(resultado === 'j1'){
            this.add.image(512, 160, 'victoriaJ1');
        }else if(resultado === 'j2'){
            this.add.image(512, 160, 'victoriaJ2');
        }else if(resultado === 'empate'){
            this.add.image(512, 160, 'empate');
        }

        this.add.image(512, 320, 'autores');

        //Add the buttons
        this.add.sprite(840, 500, 'botonMP');

         //Add interactions with the buttons - Go to play Scene
         var playButton = this.add.zone(670, 420, 340, 160);
         playButton.setOrigin(0);
         playButton.setInteractive();
         playButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
             this.scene.start('MainScene')
         });
         //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);
    }
}


///////////////////////////////////GAME CONFIG///////////////////////////////////
var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    parent: 'phaser-example',
    scene: [MainScene, Controls, PlayerSelector, GameScene, CreditsScene],
};

var game = new Phaser.Game(config);

