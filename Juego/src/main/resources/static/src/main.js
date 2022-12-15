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
var noun1;
var noun2;
var musicaFondo;
var activarMusica = true;
var musicaJuego;
var efectoMuerte;
var efectoRecolector;
var efectoDisparo;
var sonidoBoton;
var cuentas1 = true;
var cuentas2 = true;
var cuentas3 = true;
var textoCuenta;
var textoCuenta2;
var textoCuenta3;
var musicaPersonajes;
var reload = false;

///////////////////////////////

var textServer;
var nombres = [undefined, undefined];
var nombre1;
var nombre2;
var chat = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var mensajes;
var botonEnviar;

///////////////////////////////////EXTERNAL FUNCTIONS///////////////////////////////////
//Player 1 bullets hits on player 2
function BulletPlayer1Hit(player2, player1Bullet) {
    efectoMuerte.play();
    player2.setVelocityX(0);
    player2.setVelocityY(0);
    player2.x = 924;
    player2.y = 50;
    player1Bullet.destroy();
    player2Life = player2Life - player1BulletDamage;
    player1BulletDamage = 1;
    player1Score = player1Score + 1;
    player1ScoreText.setText(player1Score);
    if (player2Life == 5) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon5').setScale(0.05);
    } else if (player2Life == 4) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon4').setScale(0.05);
    } else if (player2Life == 3) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon3').setScale(0.05);
    } else if (player2Life == 2) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon2').setScale(0.05);
    } else if (player2Life == 1) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon1').setScale(0.05);
    } else if (player2Life == 0) {
        corazonesPlayer2 = this.add.image(974, 30, 'corazon0').setScale(0.05);
    }
}

//Player 2 bullets hits on player 1
function BulletPlayer2Hit(player1, player2Bullet) {
    efectoMuerte.play();
    player1.setVelocityX(0);
    player1.setVelocityY(0);
    player1.x = 100;
    player1.y = 50;
    player2Bullet.destroy();
    player1Life = player1Life - player2BulletDamage;
    player2BulletDamage = 1;
    player2Score = player2Score + 1;
    player2ScoreText.setText(player2Score);
    if (player1Life == 5) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon5').setScale(0.05);
    } else if (player1Life == 4) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon4').setScale(0.05);
    } else if (player1Life == 3) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon3').setScale(0.05);
    } else if (player1Life == 2) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon2').setScale(0.05);
    } else if (player1Life == 1) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon1').setScale(0.05);
    } else if (player1Life == 0) {
        corazonesPlayer1 = this.add.image(50, 30, 'corazon0').setScale(0.05);
    }
}

//Enable player 1 to shoot after 2 seconds
function enablePlayer1Shoot() {
    player1AbleToShoot = true
}

//Enable player 2 to shoot after 2 seconds
function enablePlayer2Shoot() {
    player2AbleToShoot = true
}

//End game by time
function endGame() {
    musicaJuego.stop();
    this.scene.start('CreditosFinales');
}

//End game by time
function endGameByTime() {
    timeOver = true;
}

//Add ammo to player 1
function addAmmo1(player1, ammo) {
    efectoRecolector.play();
    ammo.destroy();
    player1Ammo = 5;
    balasPlayer1 = this.add.image(230, 30, 'municion5').setScale(0.1);
    this.time.delayedCall(10000, generateAmmo, [], this);
}

//Add ammo to player 2
function addAmmo2(player2, ammo) {
    efectoRecolector.play();
    ammo.destroy();
    player2Ammo = 5;
    balasPlayer2 = this.add.image(800, 30, 'municion5').setScale(0.1);
    this.time.delayedCall(10000, generateAmmo, [], this);
}


//Add health to player 1
function addHealth1(player1, health) {
    efectoRecolector.play();
    health.destroy();
    this.time.delayedCall(5000, generateObject, [], this);
    if (player1Life < 6) {
        player1Life += 1;
        if (player1Life == 6) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon6').setScale(0.05);
        } else if (player1Life == 5) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon5').setScale(0.05);
        } else if (player1Life == 4) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon4').setScale(0.05);
        } else if (player1Life == 3) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon3').setScale(0.05);
        } else if (player1Life == 2) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon2').setScale(0.05);
        } else if (player1Life == 1) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon1').setScale(0.05);
        } else if (player1Life == 0) {
            corazonesPlayer1 = this.add.image(50, 30, 'corazon0').setScale(0.05);
        }
    }
}

//Add health to player 2
function addHealth2(player2, health) {
    efectoRecolector.play();
    health.destroy();
    this.time.delayedCall(5000, generateObject, [], this);
    if (player2Life < 6) {
        player2Life += 1;
        if (player2Life == 6) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon6').setScale(0.05);
        } else if (player2Life == 5) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon5').setScale(0.05);
        } else if (player2Life == 4) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon4').setScale(0.05);
        } else if (player2Life == 3) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon3').setScale(0.05);
        } else if (player2Life == 2) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon2').setScale(0.05);
        } else if (player2Life == 1) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon1').setScale(0.05);
        } else if (player2Life == 0) {
            corazonesPlayer2 = this.add.image(974, 30, 'corazon0').setScale(0.05);
        }
    }
}


//Add velocity to player 1
function addVelocity1(player1, velocity) {
    efectoRecolector.play();
    velocity.destroy();
    player1VelocityX = 320;
    player1VelocityY = 400;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreVelocity1, [], this);
}

//Add velocity to player 2
function addVelocity2(player2, velocity) {
    efectoRecolector.play();
    velocity.destroy();
    player2VelocityX = 320;
    player2VelocityY = 400;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreVelocity2, [], this);
}


//Add damage to player 1
function addDamage1(player1, damage) {
    efectoRecolector.play();
    damage.destroy();
    player1BulletDamage = 3;
    this.time.delayedCall(5000, generateObject, [], this);
}

//Add damage to player 2
function addDamage2(player2, damage) {
    efectoRecolector.play();
    damage.destroy();
    player2BulletDamage = 3;
    this.time.delayedCall(5000, generateObject, [], this);
}


//Add slow to player 1
function addSlow1(player1, slow) {
    efectoRecolector.play();
    slow.destroy();
    player2VelocityX = 80;
    player2VelocityY = 100;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreVelocity2, [], this);
}

//Add slow to player 2
function addSlow2(player2, slow) {
    efectoRecolector.play();
    slow.destroy();
    player1VelocityX = 80;
    player1VelocityY = 100;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreVelocity1, [], this);
}


//Add big to player 1
function addBig1(player1, big) {
    efectoRecolector.play();
    big.destroy();
    player2.setScale(2);
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreSize2, [], this);
}

//Add big to player 2
function addBig2(player2, big) {
    efectoRecolector.play();
    big.destroy();
    player1.setScale(2);
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreSize1, [], this);
}


//Add small to player 1
function addSmall1(player1, small) {
    efectoRecolector.play();
    small.destroy();
    player1.setScale(0.75);
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreSize1, [], this);
}

//Add small to player 2
function addSmall2(player2, small) {
    efectoRecolector.play();
    small.destroy();
    player2.setScale(0.75);
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreSize2, [], this);
}


//Add point to player 1
function addPoint1(player1, point) {
    efectoRecolector.play();
    point.destroy();
    player1Score = player1Score + 1;
    player1ScoreText.setText(player1Score);
    this.time.delayedCall(5000, generateObject, [], this);
}

//Add point to player 2
function addPoint2(player2, point) {
    efectoRecolector.play();
    point.destroy();
    player2Score = player2Score + 1;
    player2ScoreText.setText(player2Score);
    this.time.delayedCall(5000, generateObject, [], this);
}


//Add cadence to player 1
function addCadence1(player1, cadence) {
    efectoRecolector.play();
    cadence.destroy();
    player1Cadence = 500;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreCadence1, [], this);
}

//Add cadence to player 2
function addCadence2(player2, cadence) {
    efectoRecolector.play();
    cadence.destroy();
    player2Cadence = 500;
    this.time.delayedCall(5000, generateObject, [], this);
    this.time.delayedCall(10000, restoreCadence2, [], this);
}

//Generate object
function generateObject() {
    createObject = true;
}

//Generate object
function generateAmmo() {
    createAmmo = true;
}

//Restore player 1 velocity
function restoreVelocity1() {
    player1VelocityX = 160;
    player1VelocityY = 200;
}

//Restore player 2 velocity
function restoreVelocity2() {
    player2VelocityX = 160;
    player2VelocityY = 200;
}

//Restore player 1 size
function restoreSize1() {
    player1.setScale(1.5);
}

//Restore player 2 size
function restoreSize2() {
    player2.setScale(1.5);
}

//Restore player 1 cadence
function restoreCadence1() {
    var player1Cadence = 2000;
}

//Restore player 2 cadence
function restoreCadence2() {
    var player2Cadence = 2000;
}

//Start Game
function startGame() {
    musicaFondo.stop();
    this.scene.start('GameScene');
}

//Draw Clock
function drawClock(x, y, timer) {
    graphics.lineStyle(3, 0xffffff, 1);
    graphics.strokeCircle(x, y, clockSize);

    var angle;
    var dest;
    var p1;
    var p2;
    var size;

    if (timer.repeat > 0) {
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

function cuenta1() {
    if (cuentas1 == true) {
        cuentas1 = false;
        textoCuenta3 = this.add.text(500, 50, 'El juego', { fontFamily: 'essential', fontSize: '40px', fill: '#fff' });
        textoCuenta2 = this.add.text(470, 100, 'comienza en:', { fontFamily: 'essential', fontSize: '40px', fill: '#fff' });
        textoCuenta = this.add.text(540, 140, '3', { fontFamily: 'essential', fontSize: '80px', fill: '#fff' });
        this.time.delayedCall(1000, cuenta2, [], this);
    }
}

function cuenta2() {
    if (cuentas2 == true) {
        cuentas2 = false;
        textoCuenta.setText('2');
        this.time.delayedCall(1000, cuenta3, [], this);
    }
}

function cuenta3() {
    if (cuentas3 == true) {
        cuentas3 = false;
        textoCuenta.setText('1');
        this.time.delayedCall(1000, startGame, [], this);
    }
}

///////////////////////////////////LOADING SCENE///////////////////////////////////
class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        this.load.image('fondoMain', 'assets/fondoPrincipal.png');
        this.load.audio('musicaFondo', 'assets/music/m_menú.mp3');
        this.load.audio('sonidoBoton', 'assets/SFX/efectoBoton.mp3');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('fondoCharacter', 'assets/fondoMenu.png');
        this.load.spritesheet('player1', 'assets/character1.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player2', 'assets/character2.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player3', 'assets/character3.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player4', 'assets/character4.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('fondoTutoVictoria', 'assets/fondoTutoVictoria.png');
        this.load.image('fondoTutoPower', 'assets/fondoTutoPower.png');
        this.load.image('fondoTutoControles', 'assets/fondoTutoControles.png');
        this.load.image('sky', 'assets/fondo.png');
        this.load.image('ground', 'assets/platformP.png');
        this.load.spritesheet('SpritePlayer1', 'assets/player1.png', { frameWidth: 32, frameHeight: 48 });
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
        this.load.audio('efectoMuerte', 'assets/SFX/efectoMuerte.mp3');
        this.load.audio('efectoDisparo', 'assets/SFX/efectoDisparo.mp3');
        this.load.audio('efectoRecolector', 'assets/SFX/efectoRecoger.mp3');
        this.load.image('pantallaCreditos', 'assets/pantallaCreditos.png');
        this.load.image('pausa', 'assets/pausa.png');
        this.load.image('botonMP', 'assets/BotonMP.png');
        this.load.image('victoriaJ2', 'assets/victoriaJ1.png');
        this.load.image('victoriaJ1', 'assets/victoriaJ2.png');
        this.load.image('empate', 'assets/empate.png');
        this.load.image('autores', 'assets/Autores.png');
        this.load.image('recarga', 'assets/recarga.png');
        this.load.image('loginPlayer1', 'assets/LoginJ1.png');
        this.load.image('loginPlayer2', 'assets/LoginJ2.png');
        this.load.image('fondoChat', 'assets/fondoChat.png');
        this.load.image('enviar', 'assets/enviar.png');

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(360, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 80,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });

        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 25,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(370, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        this.load.image('logo');
        for (var i = 0; i < 1; i++) {
            this.load.image('logo' + i);
        }
    }

    create() {
        this.scene.start('MainScene')
    }
}

///////////////////////////////////MAIN SCENE///////////////////////////////////
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
    }

    create() {
        musicaFondo = this.sound.add('musicaFondo', { loop: true });
        sonidoBoton = this.sound.add('sonidoBoton', { loop: false });

        if (activarMusica == true) {
            musicaFondo.play();
            activarMusica = false;
        }

        this.add.image(512, 320, 'fondoMain');
        this.add.image(40, 40, 'logo').setScale(0.1);

        var playButton = this.add.zone(640, 100, 280, 140);
        playButton.setOrigin(0);
        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            sonidoBoton.play();
            if (activarMusica == true) {
                musicaFondo.play();
            }
            activarMusica = false;
            this.scene.start('RegistroJ1')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);

        var controlButton = this.add.zone(640, 270, 280, 140);
        controlButton.setOrigin(0);
        controlButton.setInteractive();
        controlButton.once('pointerdown', () => {
            sonidoBoton.play();
            if (activarMusica == true) {
                musicaFondo.play();
            }
            activarMusica = false;

            this.scene.start('TutoPower')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(controlButton);

        var botonCreditos = this.add.zone(640, 440, 280, 140);
        botonCreditos.setOrigin(0);
        botonCreditos.setInteractive();
        botonCreditos.once('pointerdown', () => {
            sonidoBoton.play();
            if (activarMusica == true) {
                musicaFondo.play();
            }
            activarMusica = false;

            this.scene.start('Creditos')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(botonCreditos);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////CREDITOS///////////////////////////////////
class Creditos extends Phaser.Scene {
    constructor() {
        super({ key: 'Creditos' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'pantallaCreditos');
        this.add.image(510, 350, 'logo').setScale(0.2);
        this.add.image(512, 320, 'autores');
        this.add.sprite(840, 500, 'botonMP');

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

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

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////LOGIN PLAYER 1///////////////////////////////////
class RegistroJ1 extends Phaser.Scene {
    constructor() {
        super({ key: 'RegistroJ1' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'loginPlayer1');

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        var entradaTexto = this.add.text(70, 300, '', { fontFamily: 'Essential', fontSize: '100px', fill: '#000' });

        var continuarJ1 = this.add.zone(640, 440, 310, 135);
        continuarJ1.setOrigin(0);
        continuarJ1.setInteractive();
        continuarJ1.on('pointerdown', () => {
            if (entradaTexto.text.length >= 1) {
				sonidoBoton.play();
                this.scene.start('RegistroJ2')
            }

        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(continuarJ1);

        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === 8 && entradaTexto.text.length > 0) {
                entradaTexto.text = entradaTexto.text.substr(0, entradaTexto.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 92)) {
                if (entradaTexto.text.length < 17) {
                    entradaTexto.text += event.key;
                }
            }
        });

        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "/usuarios",
            data: JSON.stringify("--------- USUARIO ---------"),
            dataType: "json",
            processData: false
        }).done(function (data) {
        });

        continuarJ1.on('pointerdown', () => {
            if (entradaTexto.text.length >= 1) {
                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "/usuarios",
                    data: JSON.stringify(entradaTexto.text),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                });
            }
        });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////LOGIN PLAYER 2///////////////////////////////////
class RegistroJ2 extends Phaser.Scene {
    constructor() {
        super({ key: 'RegistroJ2' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'loginPlayer2');

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        var entradaTexto = this.add.text(70, 300, '', { fontFamily: 'Essential', fontSize: '100px', fill: '#000' });

        var continuarJ2 = this.add.zone(640, 440, 310, 135);
        continuarJ2.setOrigin(0);
        continuarJ2.setInteractive();
        continuarJ2.on('pointerdown', () => {
            if (entradaTexto.text.length >= 1) {
				sonidoBoton.play();
                this.scene.start('PlayerSelector')
            }
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(continuarJ1);

        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === 8 && entradaTexto.text.length > 0) {
                entradaTexto.text = entradaTexto.text.substr(0, entradaTexto.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                if (entradaTexto.text.length < 17) {
                    entradaTexto.text += event.key;
                }
            }
        });

        continuarJ2.on('pointerdown', () => {
            if (entradaTexto.text.length >= 1) {
                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "/usuarios",
                    data: JSON.stringify(entradaTexto.text),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                });
            }
        });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////PLAYER CHARACTER SELECTOR///////////////////////////////////
class PlayerSelector extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayerSelector' });
    }

    preload() {
    }

    create() {
        botonEnviar = this.add.image(968, 555, 'enviar').setInteractive();
        this.add.image(512, 320, 'fondoChat');

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        if (reload == false) {
            SelP1 = this.add.sprite(100, 290, 'player1').setInteractive().setScale(2);
            SelP2 = this.add.sprite(220, 290, 'player2').setInteractive().setScale(2);
            SelP3 = this.add.sprite(340, 290, 'player3').setInteractive().setScale(2);
            SelP4 = this.add.sprite(460, 290, 'player4').setInteractive().setScale(2);
            SelP5 = this.add.sprite(100, 490, 'player1').setInteractive().setScale(2);
            SelP6 = this.add.sprite(220, 490, 'player2').setInteractive().setScale(2);
            SelP7 = this.add.sprite(340, 490, 'player3').setInteractive().setScale(2);
            SelP8 = this.add.sprite(460, 490, 'player4').setInteractive().setScale(2);

            noun = this.add.text(75, 350, 'DAVROS', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });
            noun = this.add.text(75, 550, 'DAVROS', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });

            noun = this.add.text(205, 350, 'EZRI', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });
            noun = this.add.text(205, 550, 'EZRI', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });

            noun = this.add.text(320, 350, 'DUSKY', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });
            noun = this.add.text(320, 550, 'DUSKY', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });

            noun = this.add.text(435, 350, 'ZAMASU', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });
            noun = this.add.text(435, 550, 'ZAMASU', { fontFamily: 'Essential', fontSize: '20px', fill: '#fff' });

            $.ajax({
                type: "GET",
                url: "/usuarios",
                dataType: "json",
            }).done(function (data) {
                nombres[0] = data[data.length - 2];
                nombres[1] = data[data.length - 1];

                nombres[0] = nombres[0].replaceAll("\"", " ");
                nombres[1] = nombres[1].replaceAll("\"", " ");
            });

            ready1Text = this.add.text(55, 50, 'Jugador 1 pendiente de elegir personaje', { fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });
            ready2Text = this.add.text(55, 110, 'Jugador 2 pendiente de elegir personaje', { fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });

            noun1 = this.add.text(55, 200, 'Jugador 1 - ' + nombres[0], { fontFamily: 'Essential', fontSize: '35px', fill: '#fff' });
            noun2 = this.add.text(55, 392, 'Jugador 2 - ' + nombres[1], { fontFamily: 'Essential', fontSize: '35px', fill: '#fff' });

            var textoChat = this.add.text(687, 542, '', { fontFamily: 'Essential', fontSize: '35px', fill: '#000' });

            mensajes = this.add.text(705, 40, chat, { aling: 'center', fontFamily: 'Essential', fontSize: '35px', fill: '#000' });

            this.input.keyboard.on('keydown', function (event) {
                if (event.keyCode === 8 && textoChat.text.length > 0) {
                    textoChat.text = textoChat.text.substr(0, textoChat.text.length - 1);
                }
                else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                    if (textoChat.text.length < 13) {
                        textoChat.text += event.key;
                    }
                }
            });

            $.ajax({
                type: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "/chat",
                data: JSON.stringify("--- Chat de usuarios ---"),
                dataType: "json",
                processData: false
            }).done(function (data) {
            });


            botonEnviar.on('pointerdown', () => {
                if (textoChat.text.length >= 1) {
					sonidoBoton.play();
                    $.ajax({
                        type: "PUT",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        url: "/chat",
                        data: JSON.stringify(textoChat.text),
                        dataType: "json",
                        processData: false
                    }).done(function (data) {
                        textoChat.setText('');
                    });
                }
            });
        }

        if (reload == true) {
            this.add.image(512, 320, 'recarga').setScale(0.25);
        }
    }

    update() {
        noun1.setText('Jugador 1 - ' + nombres[0]);
        noun2.setText('Jugador 2 - ' + nombres[1]);

        $.ajax({
            type: "GET",
            url: "/chat",
            dataType: "json",
        }).done(function (data) {
            chat[1] = data[data.length - 10];
            chat[2] = data[data.length - 9];
            chat[3] = data[data.length - 8];
            chat[4] = data[data.length - 7];
            chat[5] = data[data.length - 6];
            chat[6] = data[data.length - 5];
            chat[7] = data[data.length - 4];
            chat[8] = data[data.length - 3];
            chat[9] = data[data.length - 2];
            chat[10] = data[data.length - 1];

            try {
                chat[10] = chat[10].replaceAll("\"", " ");
                chat[9] = chat[9].replaceAll("\"", " ");
                chat[8] = chat[8].replaceAll("\"", " ");
                chat[7] = chat[7].replaceAll("\"", " ");
                chat[6] = chat[6].replaceAll("\"", " ");
                chat[5] = chat[5].replaceAll("\"", " ");
                chat[4] = chat[4].replaceAll("\"", " ");
                chat[3] = chat[3].replaceAll("\"", " ");
                chat[2] = chat[2].replaceAll("\"", " ");
                chat[1] = chat[1].replaceAll("\"", " ");
            } catch {

            }
            mensajes.setText(chat);
        });

        mensajes.setText(chat);

        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });

        //try {
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
        //} catch {

        //}

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

        if (player2HasSelected == true && player1HasSelected == true) {
            this.time.delayedCall(1000, cuenta1, [], this);
        }
    }
}

///////////////////////////////////TUTO POWER///////////////////////////////////
class TutoPower extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPower' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoPower');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainScene')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControles')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoria')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////TUTO CONTROLES///////////////////////////////////
class TutoControles extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControles' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoControles');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainScene')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoria')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPower')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////TUTO VICTORIA///////////////////////////////////
class TutoVictoria extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoria' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoVictoria');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainScene')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPower')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControles')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////GAME SCENE///////////////////////////////////
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });

        this.player1;
        this.player2;
    }

    preload() {
    }

    create() {
        musicaJuego = this.sound.add('musicaJuego', { loop: true });
        musicaJuego.play();

        efectoMuerte = this.sound.add('efectoMuerte', { loop: false });
        efectoDisparo = this.sound.add('efectoDisparo', { loop: false });
        efectoRecolector = this.sound.add('efectoRecolector', { loop: false });

        this.add.image(512, 320, 'sky');

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
        platforms.create(300, 530, 'ground');
        platforms.create(724, 530, 'ground');

        platforms.create(100, 635, 'suelo');
        platforms.create(500, 635, 'suelo');
        platforms.create(900, 635, 'suelo');

        corazonesPlayer1 = this.add.image(50, 30, 'corazon6').setScale(0.05);
        this.add.image(130, 30, 'puntosPlayer1').setScale(0.05);
        balasPlayer1 = this.add.image(230, 30, 'municion5').setScale(0.1);

        corazonesPlayer2 = this.add.image(974, 30, 'corazon6').setScale(0.05);
        this.add.image(870, 30, 'puntosPlayer2').setScale(0.05);
        balasPlayer2 = this.add.image(800, 30, 'municion5').setScale(0.1);

        if (player1 === 'character1') {
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer1').setScale(1.5);
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [{ key: 'SpritePlayer1', frame: 4 }],
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
        } else if (player1 === 'character2') {
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer2').setScale(1.5);
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [{ key: 'SpritePlayer2', frame: 4 }],
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
        } else if (player1 === 'character3') {
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer3').setScale(1.5);
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [{ key: 'SpritePlayer3', frame: 4 }],
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
        } else if (player1 === 'character4') {
            player1 = this.physics.add.sprite(100, 50, 'SpritePlayer4').setScale(1.5);
            player1.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left1',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn1',
                frames: [{ key: 'SpritePlayer4', frame: 4 }],
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

        if (player2 === 'character1') {
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer1').setScale(1.5);
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer1', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [{ key: 'SpritePlayer1', frame: 4 }],
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
        } else if (player2 === 'character2') {
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer2').setScale(1.5);
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer2', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [{ key: 'SpritePlayer2', frame: 4 }],
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
        } else if (player2 === 'character3') {
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer3').setScale(1.5);
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer3', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [{ key: 'SpritePlayer3', frame: 4 }],
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
        } else if (player2 === 'character4') {
            player2 = this.physics.add.sprite(924, 50, 'SpritePlayer4').setScale(1.5);
            player2.setCollideWorldBounds(true);
            this.anims.create({
                key: 'left2',
                frames: this.anims.generateFrameNumbers('SpritePlayer4', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn2',
                frames: [{ key: 'SpritePlayer4', frame: 4 }],
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

        timedEvent = this.time.delayedCall(120000, endGameByTime, [], this);
        timerEvent1 = this.time.addEvent({ delay: 120000, timeScale: 1 });
        graphics = this.add.graphics({ x: 0, y: 0 });

        player1ScoreText = this.add.text(150, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });
        player2ScoreText = this.add.text(895, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player1, platforms);
        this.physics.add.collider(player2, platforms);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        $.ajax({
            type: "GET",
            url: "/usuarios",
            dataType: "json",
        }).done(function (data) {
            nombres[0] = data[data.length - 2];
            nombres[1] = data[data.length - 1];

            nombres[0] = nombres[0].replaceAll("\"", " ");
            nombres[1] = nombres[1].replaceAll("\"", " ");
        });

        nombre1 = this.add.text(30, 30, nombres[0], { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
        nombre2 = this.add.text(30, 30, nombres[1], { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        $.ajax({
            type: "DELETE",
            url: "/chat",
            dataType: "json",
        }).done(function (data) {
        });
    }

    update() {
        nombre1.x = player1.body.x;
        nombre1.y = player1.body.y - 10;
        nombre2.x = player2.body.x;
        nombre2.y = player2.body.y - 10;

        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });

        graphics.clear();
        drawClock(512, 35, timerEvent1);

        this.input.keyboard.on("keyup_G", () => {
            this.scene.launch('Pausa')
            this.scene.pause();
        });

        if (timeOver == true) {
            if (player1Score > player2Score) {
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else if (player1Score < player2Score) {
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else {
                player1.setScale(2);
                player2.setScale(2);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEvent.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGame, [], this);
        }

        if (player1Score == 10 || player2Score == 10) {
            if (player1Score > player2Score) {
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else if (player1Score < player2Score) {
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else {
                player1.setScale(3);
                player2.setScale(3);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEvent.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGame, [], this);
        }

        if (player1Life <= 0 || player2Life <= 0) {
            if (player1Life <= 0) {
                player2.setScale(3);
                player2.x = 512;
                player2.y = 320;
                player1.x = 2000;
                player1.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else if (player2Life <= 0) {
                player1.setScale(3);
                player1.x = 512;
                player1.y = 320;
                player2.x = 2000;
                player2.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else {
                player1.setScale(3);
                player2.setScale(3);
                player1.x = 312;
                player1.y = 320;
                player2.x = 712;
                player2.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEvent.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGame, [], this);
        }

        this.input.keyboard.on("keydown_A", () => {
            p1LookingRight = false;
            p1LookingLeft = true;
            player1.setVelocityX(-player1VelocityX);
            player1.anims.play('left1', true);
        });
        this.input.keyboard.on("keydown_S", () => {
            player1.setScale(0.75);
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
            player1.setScale(1.5);
        });

        this.input.keyboard.on("keyup_Q", () => {
            if (player1AbleToShoot == true && player1Ammo > 0) {
                efectoDisparo.play();
                player1Ammo = player1Ammo - 1;
                if (player1Ammo == 5) {
                    balasPlayer1 = this.add.image(230, 30, 'municion5').setScale(0.1);
                } else if (player1Ammo == 4) {
                    balasPlayer1 = this.add.image(230, 30, 'municion4').setScale(0.1);
                } else if (player1Ammo == 3) {
                    balasPlayer1 = this.add.image(230, 30, 'municion3').setScale(0.1);
                } else if (player1Ammo == 2) {
                    balasPlayer1 = this.add.image(230, 30, 'municion2').setScale(0.1);
                } else if (player1Ammo == 1) {
                    balasPlayer1 = this.add.image(230, 30, 'municion1').setScale(0.1);
                } else if (player1Ammo == 0) {
                    balasPlayer1 = this.add.image(230, 30, 'municion0').setScale(0.1);
                }
                player1Bullet = this.physics.add.image(player1.body.x + 15, player1.body.y + 20, 'bullet').setScale(0.7);
                if (p1LookingLeft == true) {
                    player1Bullet.setVelocityX(-1500);
                } else if (p1LookingRight == true) {
                    player1Bullet.setVelocityX(1500);
                } else {
                    player1Bullet.setVelocityY(-1500);
                }
                player1AbleToShoot = false;
                this.time.delayedCall(player1Cadence, enablePlayer1Shoot, [], this);
            }
        });

        this.input.keyboard.on("keydown_J", () => {
            p2LookingRight = false;
            p2LookingLeft = true;
            player2.setVelocityX(-player2VelocityX);
            player2.anims.play('left2', true);
        });
        this.input.keyboard.on("keydown_K", () => {
            player2.setScale(0.75);
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
            player2.setScale(1.5);
        });

        this.input.keyboard.on("keyup_U", () => {
            if (player2AbleToShoot == true && player2Ammo > 0) {
                efectoDisparo.play();
                player2Ammo = player2Ammo - 1;
                if (player2Ammo == 5) {
                    balasPlayer2 = this.add.image(800, 30, 'municion5').setScale(0.1);
                } else if (player2Ammo == 4) {
                    balasPlayer2 = this.add.image(800, 30, 'municion4').setScale(0.1);
                } else if (player2Ammo == 3) {
                    balasPlayer2 = this.add.image(800, 30, 'municion3').setScale(0.1);
                } else if (player2Ammo == 2) {
                    balasPlayer2 = this.add.image(800, 30, 'municion2').setScale(0.1);
                } else if (player2Ammo == 1) {
                    balasPlayer2 = this.add.image(800, 30, 'municion1').setScale(0.1);
                } else if (player2Ammo == 0) {
                    balasPlayer2 = this.add.image(800, 30, 'municion0').setScale(0.1);
                }
                player2Bullet = this.physics.add.image(player2.body.x + 15, player2.body.y + 20, 'bullet').setScale(0.7);
                if (p2LookingLeft == true) {
                    player2Bullet.setVelocityX(-1500);
                } else if (p2LookingRight == true) {
                    player2Bullet.setVelocityX(1500);
                } else {
                    player2Bullet.setVelocityY(-1500);
                }
                player2AbleToShoot = false;
                this.time.delayedCall(player2Cadence, enablePlayer2Shoot, [], this);
            }
        });

        if (createAmmo == true) {
            createAmmo = false;
            ammo = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'ammo').setScale(0.8);
            ammo.setCollideWorldBounds(true)
            this.physics.add.collider(ammo, platforms);
        }

        if (createObject == true) {
            createObject = false;
            randomNumber = Phaser.Math.FloatBetween(0, 10);
            if (randomNumber >= 0 && randomNumber <= 2) { //Generate Health
                health = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'health').setScale(0.8);
                health.setCollideWorldBounds(true)
                this.physics.add.collider(health, platforms);
            }
            if (randomNumber > 2 && randomNumber <= 3) { //Generate Velocity
                velocity = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'velocity').setScale(0.8);
                velocity.setCollideWorldBounds(true)
                this.physics.add.collider(velocity, platforms);
            }
            if (randomNumber > 3 && randomNumber <= 4) { //Generate more damage on bullet
                damage = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'damage').setScale(0.8);
                damage.setCollideWorldBounds(true)
                this.physics.add.collider(damage, platforms);
            }
            if (randomNumber > 4 && randomNumber <= 5) { //Generate slow enemy
                slow = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'slow').setScale(0.8);
                slow.setCollideWorldBounds(true)
                this.physics.add.collider(slow, platforms);
            }
            if (randomNumber > 5 && randomNumber <= 6) { //Generate big enemy
                big = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'big').setScale(0.8);
                big.setCollideWorldBounds(true)
                this.physics.add.collider(big, platforms);
            }
            if (randomNumber > 6 && randomNumber <= 7) { //Generate small player
                small = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'small').setScale(0.8);
                small.setCollideWorldBounds(true)
                this.physics.add.collider(small, platforms);
            }
            if (randomNumber > 7 && randomNumber <= 9) { //Generate a point
                point = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'point').setScale(0.8);
                point.setCollideWorldBounds(true)
                this.physics.add.collider(point, platforms);
            }
            if (randomNumber > 9 && randomNumber <= 10) { //Generate cadence
                cadence = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'cadence').setScale(0.8);
                cadence.setCollideWorldBounds(true)
                this.physics.add.collider(cadence, platforms);
            }
        }

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

///////////////////////////////////PAUSE SCENE///////////////////////////////////
class Pausa extends Phaser.Scene {
    constructor() {
        super({ key: 'Pausa' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'pausa');

        var tuto = this.add.zone(350, 310, 330, 100);
        tuto.setOrigin(0);
        tuto.setInteractive();
        tuto.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausa');

        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(tuto);

        var reanudar = this.add.zone(350, 440, 330, 100);
        reanudar.setOrigin(0);
        reanudar.setInteractive();
        reanudar.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.resume('GameScene');
            this.scene.stop();
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(reanudar);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////TUTO POWER///////////////////////////////////
class TutoPowerPausa extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPowerPausa' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoPower');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('Pausa')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////TUTO CONTROLES///////////////////////////////////
class TutoControlesPausa extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControlesPausa' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoControles');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('Pausa')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////TUTO VICTORIA///////////////////////////////////
class TutoVictoriaPausa extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoriaPausa' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoVictoria');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('Pausa')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausa')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
    }
}

///////////////////////////////////FINAL CREDITS SCENE///////////////////////////////////
class CreditosFinales extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditosFinales' });
    }

    preload() {
    }

    create() {
        musicaFondo.play();
        this.add.image(512, 320, 'pantallaCreditos');
        this.add.image(510, 350, 'logo').setScale(0.2);

        this.add.image(512, 320, 'autores');

        this.add.sprite(840, 500, 'botonMP');

        var playButton = this.add.zone(670, 420, 340, 160);
        playButton.setOrigin(0);
        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            reload = true;
            this.scene.start('MainScene');
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        $.ajax({
            type: "DELETE",
            url: "/usuarios",
            dataType: "json",
        }).done(function (data) {
        });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            timeout: 5000,
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            cache: false,
            "error": function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorThrown == "timeout") {
                }
            },
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Página no encontrada");
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                }
            }
        });
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
    scene: [Preload, MainScene, TutoVictoria, TutoPower, TutoControles, RegistroJ1, RegistroJ2, PlayerSelector, Creditos, GameScene, TutoVictoriaPausa, TutoPowerPausa, TutoControlesPausa, Pausa, CreditosFinales],
};

var game = new Phaser.Game(config);

