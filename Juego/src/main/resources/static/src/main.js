///////////////////////////////////WEBSOCKET///////////////////////////////////
function WebSocketConnection() {
    // Establecemos conexion con el servidor
    //conexion = new WebSocket("ws://127.0.0.1:8080/conexion");
    //conexion = new WebSocket('ws://' + window.location.hostname + ':8080/conexion');
    	//conexion = new WebSocket('ws://' + urlServer + ':8080/conexion');
    	//conexion = new WebSocket('ws://' + this.registry.get("serverIP") + ':8080/conexion');
    conexion = new WebSocket('ws://' + location.host + '/conexion');
    	//conexion = new WebSocket('ws://' + this.ip + '/conexion');
    console.log(location.host)
    console.log(conexion);

    // Mandamos un mensaje cuando abrimos la conexion
    conexion.onopen = function () {
        console.log('Conexion abierta');
    };

    // Mandamos un mensaje cuando cerramos la conexion
    conexion.onclose = function () {
        console.log("Conexion cerrada");
    };

    // Mandamos un mensaje si hay algun error
    conexion.onerror = function (e) {
        console.log("Error: " + e);
    };

    // Recibimos la informacion nueva
    conexion.onmessage = function (data) {
        DatosNuevos = JSON.parse(data.data);
        if (DatosNuevos.EsHost == 1) {
            host = 1;
        } else if (DatosNuevos.EsHost == 0) {
            host = 0;
        } else if (host == 1) {
            mensajeParaJ1(DatosNuevos);
        } else if (host == 0) {
            mensajeParaJ2(DatosNuevos);
        }
    };
}

function mensajeParaJ1(DatosNuevos) {
    //Jugador listo
    player2HasSelected = DatosNuevos.ready;

    if (player1HasSelected && player2HasSelected == true) {
        // Posición de los personajes
        player2.x = DatosNuevos.x;
        player2.y = DatosNuevos.y;

        // Animación personaje
        player2.anims.play(DatosNuevos.animacionJugadores, true);

        //Balas
        player2Bullet.x = DatosNuevos.balaX;
        player2Bullet.y = DatosNuevos.balaY;

        //Municion
        player2Ammo = DatosNuevos.municion;

        //Puntos
        player2Score = DatosNuevos.puntos;
    }
}

function mensajeParaJ2(DatosNuevos) {
    //Jugador listo
    player1HasSelected = DatosNuevos.ready;

    if (player1HasSelected && player2HasSelected == true) {
        // Posición de los personajes
        player1.x = DatosNuevos.x;
        player1.y = DatosNuevos.y;

        // Animación personaje
        player1.anims.play(DatosNuevos.animacionJugadores, true);

        //Balas
        player1Bullet.x = DatosNuevos.balaX;
        player1Bullet.y = DatosNuevos.balaY;

        //Municion
        player1Ammo = DatosNuevos.municion;

        //Puntos
        player1Score = DatosNuevos.puntos;

        //Tiempo
        tiempoAux = DatosNuevos.tiempo;

        //Posicion power up municion
        randomBalaX = DatosNuevos.randomMunX;
        randomBalaY = DatosNuevos.randomMunY;

        //Número random del power up
        randomNumber = DatosNuevos.numRandom;

        //Pos power
        posPowerX = DatosNuevos.powerX;
        posPowerY = DatosNuevos.powerY;
    }
}

///////////////////////////////////GLOBAL VARIABLES ONLINE///////////////////////////////////
var gameOver = false;
var player1;
var player2;
var player1Bullet;
var player2Bullet;
var player1BulletLocal;
var player2BulletLocal;
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
var SelP12;
var SelP22;
var SelP32;
var SelP42;
var SelP52;
var SelP62;
var SelP72;
var SelP82;
var segundaVezAmmo = false;
var segundaVezPower = false;
var player1Name;
var player2Name;
var nombreEscrito = false;
var nameText;

/////////////////////////////// F3
var textServer;
var chat = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var textoChat;
var enviar = true;
var nombreUsuario;
var botonEnviar;
var nombre1;
var nombre2;
var serverFuera = false;
var alerta1;
var alerta2;

/////////////////////////////// F4
var host;
var nombreJugador1;
var nombreJugador2;
var animacionJugador1 = "turn1";
var animacionJugador2 = "turn2";
var moverPasivo = true;
var pantallaEspera;
var tiempoAux;
var empezarPartida = false;
var randomBalaX;
var randomBalaY;
var posPowerX;
var posPowerY;

///////////////////////////////////EXTERNAL ONLINE FUNCTIONS///////////////////////////////////
//Player 1 bullets hits on player 2
function BulletPlayer1Hit(player2, player1Bullet) {
    efectoMuerte.play();
    player1Bullet.x = 2000;
    player1Bullet.y = 2000;
    player2Life = player2Life - player1BulletDamage;
    player1BulletDamage = 1;
    player1Score = player1Score + 1;
}

//Player 2 bullets hits on player 1
function BulletPlayer2Hit(player1, player2Bullet) {
    player2Bullet.x = 2000;
    player2Bullet.y = 2000;
    player1Life = player1Life - player2BulletDamage;
    player2BulletDamage = 1;
    player2Score = player2Score + 1;
}

//Add ammo to player 1
function addAmmo1(player1, ammo) {
    efectoRecolector.play();
    ammo.destroy();
    player1Ammo = 5;
    balasPlayer1 = this.add.image(230, 30, 'municion5').setScale(0.1);
    createAmmo = true;
    segundaVezAmmo = true;
}

//Add ammo to player 2
function addAmmo2(player2, ammo) {
    efectoRecolector.play();
    ammo.destroy();
    player2Ammo = 5;
    balasPlayer2 = this.add.image(800, 30, 'municion5').setScale(0.1);
    createAmmo = true;
    segundaVezAmmo = true;
}

//Add health to player 1
function addHealth1(player1, health) {
    efectoRecolector.play();
    health.destroy();
    createObject = true;
    segundaVezPower = true;
    if (player1Life < 6) {
        player1Life += 1;
    }
}

//Add health to player 2
function addHealth2(player2, health) {
    efectoRecolector.play();
    health.destroy();
    createObject = true;
    segundaVezPower = true;
    if (player2Life < 6) {
        player2Life += 1;
    }
}

//Add velocity to player 1
function addVelocity1(player1, velocity) {
    efectoRecolector.play();
    velocity.destroy();
    player1VelocityX = 320;
    player1VelocityY = 400;
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreVelocity1, [], this);
}

//Add velocity to player 2
function addVelocity2(player2, velocity) {
    efectoRecolector.play();
    velocity.destroy();
    player2VelocityX = 320;
    player2VelocityY = 400;
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreVelocity2, [], this);
}

//Add damage to player 1
function addDamage1(player1, damage) {
    efectoRecolector.play();
    damage.destroy();
    player1BulletDamage = 3;
    createObject = true;
    segundaVezPower = true;
}

//Add damage to player 2
function addDamage2(player2, damage) {
    efectoRecolector.play();
    damage.destroy();
    player2BulletDamage = 3;
    createObject = true;
    segundaVezPower = true;
}

//Add slow to player 1
function addSlow1(player1, slow) {
    efectoRecolector.play();
    slow.destroy();
    player2VelocityX = 80;
    player2VelocityY = 100;
    createObject = true;
    segundaVezPower = true;;
    this.time.delayedCall(10000, restoreVelocity2, [], this);
}

//Add slow to player 2
function addSlow2(player2, slow) {
    efectoRecolector.play();
    slow.destroy();
    player1VelocityX = 80;
    player1VelocityY = 100;
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreVelocity1, [], this);
}

//Add big to player 1
function addBig1(player1, big) {
    efectoRecolector.play();
    big.destroy();
    player2.setScale(2);
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreSize2, [], this);
}

//Add big to player 2
function addBig2(player2, big) {
    efectoRecolector.play();
    big.destroy();
    player1.setScale(2);
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreSize1, [], this);
}

//Add small to player 1
function addSmall1(player1, small) {
    efectoRecolector.play();
    small.destroy();
    player1.setScale(0.75);
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreSize1, [], this);
}

//Add small to player 2
function addSmall2(player2, small) {
    efectoRecolector.play();
    small.destroy();
    player2.setScale(0.75);
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreSize2, [], this);
}

//Add point to player 1
function addPoint1(player1, point) {
    efectoRecolector.play();
    point.destroy();
    player1Score = player1Score + 1;
    player1ScoreText.setText(player1Score);
    createObject = true;
    segundaVezPower = true;
}

//Add point to player 2
function addPoint2(player2, point) {
    efectoRecolector.play();
    point.destroy();
    player2Score = player2Score + 1;
    player2ScoreText.setText(player2Score);
    createObject = true;
    segundaVezPower = true;
}

//Add cadence to player 1
function addCadence1(player1, cadence) {
    efectoRecolector.play();
    cadence.destroy();
    player1Cadence = 500;
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreCadence1, [], this);
}

//Add cadence to player 2
function addCadence2(player2, cadence) {
    efectoRecolector.play();
    cadence.destroy();
    player2Cadence = 500;
    createObject = true;
    segundaVezPower = true;
    this.time.delayedCall(10000, restoreCadence2, [], this);
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
    this.scene.start('CreditosFinalesOnline');
}

function endGameLocal() {
    musicaJuego.stop();
    this.scene.start('CreditosFinalesLocal');
}

//End game by time
function endGameByTime() {
    timeOver = true;
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
    this.scene.start('GameSceneOnline');
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

///////////////////////////////////GLOBAL VARIABLES LOCAL///////////////////////////////////
var gameOver = false;
var player1Local;
var player2Local;
var player1BulletLocal;
var player2BulletLocal;
var p1LookingLeftLocal;
var p1LookingRightLocal;
var p2LookingLeftLocal;
var p2LookingRightLocal;
var SelP1Local;
var SelP2Local;
var SelP3Local;
var SelP4Local;
var SelP5Local;
var SelP6Local;
var SelP7Local;
var SelP8Local;
var player1HasSelectedLocal = false;
var player2HasSelectedLocal = false;
var ready1TextLocal;
var ready2TextLocal;
var platformsLocal;
var cursorsLocal;
var timerTextLocal;
var timedEventLocal;
var player1LifeLocal = 6;
var player2LifeLocal = 6;
var player1AmmoLocal = 5;
var player2AmmoLocal = 5;
var player1AbleToShootLocal = true;
var player2AbleToShootLocal = true;
var player1CadenceLocal = 2000;
var player2CadenceLocal = 2000;
var ammoLocal;
var healthLocal;
var velocityLocal;
var damageLocal;
var slowLocal;
var bigLocal;
var smallLocal;
var pointLocal;
var cadenceLocal;
var createObjectLocal = true;
var createAmmoLocal = true;
var player1ScoreLocal = 0;
var player2ScoreLocal = 0;
var player1ScoreTextLocal;
var player2ScoreTextLocal;
var randomNumberLocal;
var player1VelocityXLocal = 160;
var player1VelocityYLocal = 200;
var player2VelocityXLocal = 160;
var player2VelocityYLocal = 200;
var player1BulletDamageLocal = 1;
var player2BulletDamageLocal = 1;
var timeOverLocal = false;
var graphics;
var timerEvent1Local;
var clockSizeLocal = 25;
var corazonesPlayer1Local;
var corazonesPlayer2Local;
var balasPlayer1Local;
var balasPlayer2Local;
var nounLocal;
var musicaFondoLocal;
var activarMusicaLocal = true;
var musicaJuegoLocal;
var efectoMuerteLocal;
var efectoRecolectorLocal;
var efectoDisparoLocal;
var sonidoBotonLocal;
var cuentas1Local = true;
var cuentas2Local = true;
var cuentas3Local = true;
var textoCuentaLocal;
var textoCuenta2Local;
var textoCuenta3Local;
var musicaPersonajesLocal;
var reloadLocal = false;

///////////////////////////////////EXTERNAL FUNCTIONS LOCAL///////////////////////////////////
//Player 1 bullets hits on player 2
function BulletPlayer1HitLocal(player2Local, player1BulletLocal) {
    efectoMuerteLocal.play();
    player2Local.setVelocityX(0);
    player2Local.setVelocityY(0);
    player2Local.x = 924;
    player2Local.y = 50;
    player1BulletLocal.destroy();
    player2LifeLocal = player2LifeLocal - player1BulletDamageLocal;
    player1BulletDamageLocal = 1;
    player1ScoreLocal = player1ScoreLocal + 1;
    player1ScoreTextLocal.setText(player1ScoreLocal);
    if (player2LifeLocal == 5) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon5').setScale(0.05);
    } else if (player2LifeLocal == 4) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon4').setScale(0.05);
    } else if (player2LifeLocal == 3) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon3').setScale(0.05);
    } else if (player2LifeLocal == 2) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon2').setScale(0.05);
    } else if (player2LifeLocal == 1) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon1').setScale(0.05);
    } else if (player2LifeLocal == 0) {
        corazonesPlayer2Local = this.add.image(974, 30, 'corazon0').setScale(0.05);
    }
}

//Player 2 bullets hits on player 1
function BulletPlayer2HitLocal(player1Local, player2BulletLocal) {
    efectoMuerteLocal.play();
    player1Local.setVelocityX(0);
    player1Local.setVelocityY(0);
    player1Local.x = 100;
    player1Local.y = 50;
    player2BulletLocal.destroy();
    player1LifeLocal = player1LifeLocal - player2BulletDamageLocal;
    player2BulletDamageLocal = 1;
    player2ScoreLocal = player2ScoreLocal + 1;
    player2ScoreTextLocal.setText(player2ScoreLocal);
    if (player1LifeLocal == 5) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon5').setScale(0.05);
    } else if (player1LifeLocal == 4) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon4').setScale(0.05);
    } else if (player1LifeLocal == 3) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon3').setScale(0.05);
    } else if (player1LifeLocal == 2) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon2').setScale(0.05);
    } else if (player1LifeLocal == 1) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon1').setScale(0.05);
    } else if (player1LifeLocal == 0) {
        corazonesPlayer1Local = this.add.image(50, 30, 'corazon0').setScale(0.05);
    }
}

//Enable player 1 to shoot after 2 seconds
function enablePlayer1ShootLocal() {
    player1AbleToShootLocal = true
}

//Enable player 2 to shoot after 2 seconds
function enablePlayer2ShootLocal() {
    player2AbleToShootLocal = true
}

//End game by time
function endGameLocal() {
    musicaJuegoLocal.stop();
    this.scene.start('CreditosFinales');
}

//End game by time
function endGameByTimeLocal() {
    timeOverLocal = true;
}

//Add ammoLocal to player 1
function addAmmo1Local(player1Local, ammoLocal) {
    efectoRecolectorLocal.play();
    console.log('ammoLocal');
    ammoLocal.destroy();
    player1AmmoLocal = 5;
    balasPlayer1Local = this.add.image(230, 30, 'municion5').setScale(0.1);
    this.time.delayedCall(10000, generateAmmoLocal, [], this);
}

//Add ammoLocal to player 2
function addAmmo2Local(player2Local, ammoLocal) {
    efectoRecolectorLocal.play();
    console.log('ammoLocal');
    ammoLocal.destroy();
    player2AmmoLocal = 5;
    balasPlayer2Local = this.add.image(800, 30, 'municion5').setScale(0.1);
    this.time.delayedCall(10000, generateAmmoLocal, [], this);
}

//Add healthLocal to player 1
function addHealth1Local(player1Local, healthLocal) {
    efectoRecolectorLocal.play();
    console.log('healthLocal');
    healthLocal.destroy();
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    if (player1LifeLocal < 6) {
        player1LifeLocal += 1;
        if (player1LifeLocal == 6) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon6').setScale(0.05);
        } else if (player1LifeLocal == 5) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon5').setScale(0.05);
        } else if (player1LifeLocal == 4) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon4').setScale(0.05);
        } else if (player1LifeLocal == 3) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon3').setScale(0.05);
        } else if (player1LifeLocal == 2) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon2').setScale(0.05);
        } else if (player1LifeLocal == 1) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon1').setScale(0.05);
        } else if (player1LifeLocal == 0) {
            corazonesPlayer1Local = this.add.image(50, 30, 'corazon0').setScale(0.05);
        }
    }
}

//Add healthLocal to player 2
function addHealth2Local(player2Local, healthLocal) {
    efectoRecolectorLocal.play();
    console.log('healthLocal');
    healthLocal.destroy();
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    if (player2LifeLocal < 6) {
        player2LifeLocal += 1;
        if (player2LifeLocal == 6) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon6').setScale(0.05);
        } else if (player2LifeLocal == 5) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon5').setScale(0.05);
        } else if (player2LifeLocal == 4) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon4').setScale(0.05);
        } else if (player2LifeLocal == 3) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon3').setScale(0.05);
        } else if (player2LifeLocal == 2) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon2').setScale(0.05);
        } else if (player2LifeLocal == 1) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon1').setScale(0.05);
        } else if (player2LifeLocal == 0) {
            corazonesPlayer2Local = this.add.image(974, 30, 'corazon0').setScale(0.05);
        }
    }
}

//Add velocityLocal to player 1
function addVelocity1Local(player1Local, velocityLocal) {
    efectoRecolectorLocal.play();
    console.log('velocityLocal');
    velocityLocal.destroy();
    player1VelocityXLocal = 320;
    player1VelocityYLocal = 400;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreVelocity1Local, [], this);
}

//Add velocityLocal to player 2
function addVelocity2Local(player2Local, velocityLocal) {
    efectoRecolectorLocal.play();
    console.log('velocityLocal');
    velocityLocal.destroy();
    player2VelocityXLocal = 320;
    player2VelocityYLocal = 400;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreVelocity2Local, [], this);
}

//Add damageLocal to player 1
function addDamage1Local(player1Local, damageLocal) {
    efectoRecolectorLocal.play();
    console.log('damageLocal');
    damageLocal.destroy();
    player1BulletDamageLocal = 3;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
}

//Add damageLocal to player 2
function addDamage2Local(player2Local, damageLocal) {
    efectoRecolectorLocal.play();
    console.log('damageLocal');
    damageLocal.destroy();
    player2BulletDamageLocal = 3;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
}

//Add slowLocal to player 1
function addSlow1Local(player1Local, slowLocal) {
    efectoRecolectorLocal.play();
    console.log('slowLocal');
    slowLocal.destroy();
    player2VelocityXLocal = 80;
    player2VelocityYLocal = 100;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreVelocity2Local, [], this);
}

//Add slowLocal to player 2
function addSlow2Local(player2Local, slowLocal) {
    efectoRecolectorLocal.play();
    console.log('slowLocal');
    slowLocal.destroy();
    player1VelocityXLocal = 80;
    player1VelocityYLocal = 100;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreVelocity1Local, [], this);
}

//Add bigLocal to player 1
function addBig1Local(player1Local, bigLocal) {
    efectoRecolectorLocal.play();
    console.log('bigLocal');
    bigLocal.destroy();
    player2Local.setScale(2);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreSize2Local, [], this);
}

//Add bigLocal to player 2
function addBig2Local(player2Local, bigLocal) {
    efectoRecolectorLocal.play();
    console.log('bigLocal');
    bigLocal.destroy();
    player1Local.setScale(2);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreSize1Local, [], this);
}

//Add smallLocal to player 1
function addSmall1Local(player1Local, smallLocal) {
    efectoRecolectorLocal.play();
    console.log('smallLocal');
    smallLocal.destroy();
    player1Local.setScale(0.75);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreSize1Local, [], this);
}

//Add smallLocal to player 2
function addSmall2Local(player2Local, smallLocal) {
    efectoRecolectorLocal.play();
    console.log('smallLocal');
    smallLocal.destroy();
    player2Local.setScale(0.75);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreSize2Local, [], this);
}

//Add pointLocal to player 1
function addPoint1Local(player1Local, pointLocal) {
    efectoRecolectorLocal.play();
    console.log('pointLocal');
    pointLocal.destroy();
    player1ScoreLocal = player1ScoreLocal + 1;
    player1ScoreTextLocal.setText(player1ScoreLocal);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
}

//Add pointLocal to player 2
function addPoint2Local(player2Local, pointLocal) {
    efectoRecolectorLocal.play();
    console.log('pointLocal');
    pointLocal.destroy();
    player2ScoreLocal = player2ScoreLocal + 1;
    player2ScoreTextLocal.setText(player2ScoreLocal);
    this.time.delayedCall(5000, generateObjectLocal, [], this);
}

//Add cadenceLocal to player 1
function addCadence1Local(player1Local, cadenceLocal) {
    efectoRecolectorLocal.play();
    console.log('cadenceLocal');
    cadenceLocal.destroy();
    player1CadenceLocal = 500;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreCadence1Local, [], this);
}

//Add cadenceLocal to player 2
function addCadence2Local(player2Local, cadenceLocal) {
    efectoRecolectorLocal.play();
    console.log('cadenceLocal');
    cadenceLocal.destroy();
    player2CadenceLocal = 500;
    this.time.delayedCall(5000, generateObjectLocal, [], this);
    this.time.delayedCall(10000, restoreCadence2Local, [], this);
}

//Generate object
function generateObjectLocal() {
    createObjectLocal = true;
}

//Generate object
function generateAmmoLocal() {
    createAmmoLocal = true;
}

//Restore player 1 velocityLocal
function restoreVelocity1Local() {
    player1VelocityXLocal = 160;
    player1VelocityYLocal = 200;
}

//Restore player 2 velocityLocal
function restoreVelocity2Local() {
    player2VelocityXLocal = 160;
    player2VelocityYLocal = 200;
}

//Restore player 1 size
function restoreSize1Local() {
    player1Local.setScale(1.5);
}

//Restore player 2 size
function restoreSize2Local() {
    player2Local.setScale(1.5);
}

//Restore player 1 cadenceLocal
function restoreCadence1Local() {
    var player1CadenceLocal = 2000;
}

//Restore player 2 cadenceLocal
function restoreCadence2Local() {
    var player2CadenceLocal = 2000;
}

//Start Game
function startGameLocal() {
    musicaFondoLocal.stop();
    this.scene.start('GameSceneLocal');
}

//Draw Clock
function drawClock(x, y, timer) {

    graphics.lineStyle(3, 0xffffff, 1);
    graphics.strokeCircle(x, y, clockSizeLocal);

    var angle;
    var dest;
    var p1;
    var p2;
    var size;

    if (timer.repeat > 0) {
        size = clockSizeLocal * 0.9;

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

    size = clockSizeLocal * 0.95;

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

function cuenta1Local() {
    if (cuentas1Local == true) {
        cuentas1Local = false;
        console.log('El juego  comienza en: 3');
        textoCuenta3Local = this.add.text(820, 300, 'El juego', { fontFamily: 'essential', fontSize: '50px', fill: '#fff' });
        textoCuenta2Local = this.add.text(790, 350, 'comienza en:', { fontFamily: 'essential', fontSize: '50px', fill: '#fff' });
        textoCuentaLocal = this.add.text(880, 390, '3', { fontFamily: 'essential', fontSize: '100px', fill: '#fff' });
        this.time.delayedCall(1000, cuenta2Local, [], this);
    }
}

function cuenta2Local() {
    if (cuentas2Local == true) {
        cuentas2Local = false;
        console.log('El juego  comienza en: 2');
        textoCuentaLocal.setText('2');
        this.time.delayedCall(1000, cuenta3Local, [], this);
    }
}

function cuenta3Local() {
    if (cuentas3Local == true) {
        cuentas3Local = false;
        console.log('El juego  comienza en: 1');
        textoCuentaLocal.setText('1');
        this.time.delayedCall(1000, startGameLocal, [], this);
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
        this.load.audio('musicaFondoLocal', 'assets/music/m_menú.mp3');
        this.load.audio('sonidoBotonLocal', 'assets/SFX/efectoBoton.mp3');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('fondoCharacter', 'assets/fondoMenu.png');
        this.load.spritesheet('player1', 'assets/character1.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player2', 'assets/character2.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player3', 'assets/character3.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player4', 'assets/character4.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('fondoTutoVictoria', 'assets/fondoTutoVictoria.png');
        this.load.image('fondoTutoPower', 'assets/fondoTutoPower.png');
        this.load.image('fondoTutoControles', 'assets/fondoTutoControles.png');
        this.load.image('fondoTutoPowerOnline', 'assets/fondoTutoPowerOnline.png');
        this.load.image('fondoTutoControlesOnline', 'assets/fondoTutoControlesOnline.png');
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
        this.load.image('ammoLocal', 'assets/ammo.png');
        this.load.image('healthLocal', 'assets/health.png');
        this.load.image('velocityLocal', 'assets/velocity.png');
        this.load.image('damageLocal', 'assets/damage.png');
        this.load.image('slowLocal', 'assets/slow.png');
        this.load.image('bigLocal', 'assets/big.png');
        this.load.image('smallLocal', 'assets/small.png');
        this.load.image('pointLocal', 'assets/point.png');
        this.load.image('cadenceLocal', 'assets/cadence.png');
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
        this.load.audio('musicaJuegoLocal', 'assets/music/m_acción1.mp3');
        this.load.audio('efectoMuerteLocal', 'assets/SFX/efectoMuerte.mp3');
        this.load.audio('efectoDisparoLocal', 'assets/SFX/efectoDisparo.mp3');
        this.load.audio('efectoRecolectorLocal', 'assets/SFX/efectoRecoger.mp3');
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
        this.load.image('loginPlayer', 'assets/Login.png');
        this.load.image('fondoChat', 'assets/FondoChat.png');
        this.load.image('enviar', 'assets/enviar.png');
        this.load.image('fondoModoJuego', 'assets/ModoJuego.png');
        this.load.image('botonListo', 'assets/BotonJugar.png');
        this.load.image('fondoEspera', 'assets/espera.png');
        this.load.image('SinSelecion', 'assets/personajesSinSelecion.png');
        this.load.image('p2Selecionado', 'assets/selecionP2.png');
        this.load.image('p1Selecionado', 'assets/selecionP1.png');
        this.load.image('P1yP2Sele', 'assets/selecionAmbos.png');

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
    }

    create() {
        this.scene.start('ModoJuego')
    }
}

///////////////////////////////////GAME MODE SELECTION///////////////////////////////////
class ModoJuego extends Phaser.Scene {
    constructor() {
        super({ key: 'ModoJuego' });
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

        this.add.image(512, 320, 'fondoModoJuego');

        var localButton = this.add.zone(60, 380, 440, 210);
        localButton.setOrigin(0);
        localButton.setInteractive();
        localButton.once('pointerdown', () => {
            sonidoBoton.play();
            if (activarMusica == true) {
                musicaFondo.play();
            }
            activarMusica = false;
            this.scene.start('MainSceneLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(localButton);

        var onlineButton = this.add.zone(540, 380, 440, 210);
        onlineButton.setOrigin(0);
        onlineButton.setInteractive();
        onlineButton.once('pointerdown', () => {
            sonidoBoton.play();
            if (activarMusica == true) {
                musicaFondo.play();
            }
            activarMusica = false;

            this.scene.start('MainSceneOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(onlineButton);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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


////////////////////////////////////////////////////////////////////////////VIDEOJUEGO EN LINEA///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////MAIN SCENE///////////////////////////////////
class MainSceneOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'MainSceneOnline' });
    }

    preload() {
    }

    create() {
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
            WebSocketConnection();
            this.scene.start('RegistroJ1Online')
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

            this.scene.start('TutoPowerOnline')
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

            this.scene.start('CreditosOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(botonCreditos);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class CreditosOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditosOnline' });
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
            this.scene.start('MainSceneOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class RegistroJ1Online extends Phaser.Scene {
    constructor() {
        super({ key: 'RegistroJ1Online' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'loginPlayer');
        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
        if (reload == false) {
            //this.add.image(512, 320, 'loginPlayer');

            //textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

            var entradaTexto = this.add.text(70, 300, '', { fontFamily: 'Essential', fontSize: '100px', fill: '#000' });

            var continuarJ1 = this.add.zone(640, 440, 310, 135);
            continuarJ1.setOrigin(0);
            continuarJ1.setInteractive();
            continuarJ1.on('pointerdown', () => {
                if (entradaTexto.text.length >= 1) {

                    //this.scene.start('GameSceneOnline') //TOCAR AQUI
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
                    sonidoBoton.play();
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

                    $.ajax({
                        type: "PUT",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        url: "/chat",
                        data: JSON.stringify(entradaTexto.text + " se ha conectado"),
                        dataType: "json",
                        processData: false
                    }).done(function (data) {
                    });
                    this.scene.start('PlayerSelectorOnline');
                }
            });
        }

        if (reload == true) {
            this.add.image(512, 320, 'recarga').setScale(0.25);
        }
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class PlayerSelectorOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayerSelectorOnline' });
    }

    preload() {
    }

    create() {
        botonEnviar = this.add.image(968, 555, 'enviar').setInteractive();
        this.add.image(512, 320, 'fondoChat');
        this.add.image(512, 320, 'SinSelecion');

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
        
        nameText = this.add.text(40, 60, '', { fontFamily: 'Essential', fontSize: '100px', fill: '#fff' });

        SelP1 = this.add.sprite(300, 300, 'botonListo').setInteractive().setScale(0.5);

        $.ajax({
            type: "GET",
            url: "/usuarios",
            dataType: "json",
        }).done(function (data) {
            nombreUsuario = data[data.length - 1];
            nombreUsuario = nombreUsuario.replaceAll("\"", " ");
        });

        var mensajes = this.add.text(687, 542, '', { fontFamily: 'Essential', fontSize: '35px', fill: '#000' });

        alerta1 = this.add.text(1705, 425, 'Servidor desconectado', { fontFamily: 'Essential', fontSize: '30px', fill: '#000' });
        alerta2 = this.add.text(1705, 450, 'Chat no disponible', { fontFamily: 'Essential', fontSize: '30px', fill: '#000' });

        textoChat = this.add.text(705, 130, chat, { aling: 'center', fontFamily: 'Essential', fontSize: '30px', fill: '#000' });

        $("#value-input").click(function () {
            console.log("pausa");

            enviar = true;
        })

        $("#add-button").click(function () {
            if (enviar === true) {
                enviar = false;
                console.log("no pausa");
                var value = nombreUsuario + ": " + $('#value-input').val();
                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "/chat",
                    data: JSON.stringify(value),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                    console.log("PUT CHAT");
                });
                $('#value-input').val('');
            }
        })

        SelP1.once('pointerdown', () => {
            if (host == 1) {
                player1HasSelected = true;
                sonidoBoton.play();
                var value = nombreUsuario + ": está listo";
                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "/chat",
                    data: JSON.stringify(value),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                    console.log("PUT CHAT");
                });
            }

            if (host == 0) {
                player2HasSelected = true;
                sonidoBoton.play();
                var value = nombreUsuario + ": está listo";
                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "/chat",
                    data: JSON.stringify(value),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                    console.log("PUT CHAT");
                });
            }
        });

        //////////ELEMENTOS PARA QUE LOS WEBSOCKETS ME DEJEN TRABAJAR ANTES DE HACER NADA :) /////////////
        //jugador 1
        player1 = this.physics.add.sprite(20000, 20000, 'SpritePlayer1').setScale(1.5);
         this.anims.create({
            key: 'turn1',
            frames: [{ key: 'SpritePlayer1', frame: 4 }],
            frameRate: 20
        });
        animacionJugador1 = 'turn1';

        //jugador 2
        player2 = this.physics.add.sprite(20000, 20000, 'SpritePlayer2').setScale(1.5);
         this.anims.create({
            key: 'turn2',
            frames: [{ key: 'SpritePlayer2', frame: 4 }],
            frameRate: 20
        });
        animacionJugador2 = 'turn2';

        player2Bullet = this.physics.add.image(0, 1110, 'bullet').setScale(0.7);
        player1Bullet = this.physics.add.image(0, 1110, 'bullet').setScale(0.7);
        player1Ammo = 5;
        player2Ammo = 5;
        randomBalaX = 200;
        randomBalaY = 100;
        randomNumber = 2;
        posPowerX = 100;
        posPowerY = 300;
        player1Score = 0;
        player2Score = 0;
        tiempoAux = 200;
    }

    update() {

        if (nombreEscrito == false) {
            nombreEscrito = true;
            $.ajax({
                type: "GET",
                url: "/usuarios",
                dataType: "json",
            }).done(function (data) {
                nombreUsuario = data[data.length - 1];
                nombreUsuario = nombreUsuario.replaceAll("\"", " ");
                nameText.setText(nombreUsuario);
            });
        }
		
        if (player2HasSelected && player1HasSelected) {
	 		this.add.image(512, 320, 'P1yP2Sele');
            console.log("empezamos");
            this.scene.start('GameSceneOnline')
        }
        
        if (player1HasSelected) {
            this.add.image(512, 320, 'p1Selecionado');
        }
        if (player2HasSelected) {
            this.add.image(512, 320, 'p2Selecionado');
        }

        if (host == 0) {
            conexion.send(
                JSON.stringify({
                    //Player 2 ready
                    ready: player2HasSelected,

                    // Posición del jugador
                    x: player2.x,
                    y: player2.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador2,

                    //Balas
                    balaX: player2Bullet.x + 50,
                    balaY: player2Bullet.y - 90,

                    //Municion
                    municion: player2Ammo,

                    //Puntos
                    puntos: player2Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,

                })
            );
        }

        if (host == 1) {
            conexion.send(
                JSON.stringify({
                    //Player 1 ready
                    ready: player1HasSelected,

                    // Posición del jugador
                    x: player1.x,
                    y: player1.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador1,

                    //Balas
                    balaX: player1Bullet.x + 50,
                    balaY: player1Bullet.y - 90,

                    //Municion
                    municion: player1Ammo,

                    //Puntos
                    puntos: player1Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );
        }

        $.ajax({
            type: "GET",
            url: "/chat",
            dataType: "json",
        }).done(function (data) {
            chat[0] = undefined;
            chat[1] = data[data.length - 8];
            chat[2] = data[data.length - 7];
            chat[3] = data[data.length - 6];
            chat[4] = data[data.length - 5];
            chat[5] = data[data.length - 4];
            chat[6] = data[data.length - 3];
            chat[7] = data[data.length - 2];
            chat[8] = data[data.length - 1];

            try {
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
        });

        textoChat.setText(chat);

        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                    alerta1.x = 710;
                    alerta2.x = 710;
                },
                0: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
                    alerta1.x = 710;
                    alerta2.x = 710;
                },
                500: function () {
                    textServer.setText("Estado del Servidor: Error interno ");
                    alerta1.x = 710;
                    alerta2.x = 710;
                },
                200: function () {
                    textServer.setText("Estado del Servidor: Conectado ");
                    alerta1.x = 1710;
                    alerta2.x = 1710;
                }
            }
        });
    }
}

///////////////////////////////////TUTO POWER///////////////////////////////////
class TutoPowerOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPowerOnline' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoPowerOnline');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainSceneOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class TutoControlesOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControlesOnline' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoControlesOnline');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainSceneOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class TutoVictoriaOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoriaOnline' });
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
            this.scene.start('MainSceneOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class GameSceneOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'GameSceneOnline' });

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

        this.add.image(130, 30, 'puntosPlayer1').setScale(0.05);
        balasPlayer1 = this.add.image(230, 30, 'municion5').setScale(0.1);
        player1ScoreText = this.add.text(150, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });

        this.add.image(870, 30, 'puntosPlayer2').setScale(0.05);
        balasPlayer2 = this.add.image(800, 30, 'municion5').setScale(0.1);
        player2ScoreText = this.add.text(895, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });

        //jugador 1
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

        //jugador 2
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

        tiempoAux = 200;

        timerText = this.add.text(500, 20, 'Tiempo para finalizar', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

        graphics = this.add.graphics({ x: 0, y: 0 });

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player1, platforms);
        this.physics.add.collider(player2, platforms);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        $.ajax({
            type: "GET",
            url: "/usuarios",
            dataType: "json",
        }).done(function (data) {
            nombreJugador1 = data[data.length - 2];
            nombreJugador2 = data[data.length - 1];

            nombreJugador1 = nombreJugador1.replaceAll("\"", " ");
            nombreJugador2 = nombreJugador2.replaceAll("\"", " ");
        });

        nombre1 = this.add.text(310, 430, nombreJugador1, { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
        nombre2 = this.add.text(310, 330, nombreJugador2, { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });

        $.ajax({
            type: "DELETE",
            url: "/chat",
            dataType: "json",
        }).done(function (data) {
        });

        //Elementos del juego que hay que crear antes para los WebSockets
        player2Bullet = this.physics.add.image(0, 1110, 'bullet').setScale(0.7);
        player1Bullet = this.physics.add.image(0, 1110, 'bullet').setScale(0.7);
        player1Ammo = 5;
        player2Ammo = 5;
        randomBalaX = 200;
        randomBalaY = 100;
        randomNumber = 2;
        posPowerX = 100;
        posPowerY = 300;
        player2HasSelected = true;
        player1HasSelected = true;

        if (host == 0) {
            conexion.send(
                JSON.stringify({
                    //Player 2 ready
                    ready: player2HasSelected,

                    // Posición del jugador
                    x: player2.x,
                    y: player2.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador2,

                    //Balas
                    balaX: player2Bullet.x + 50,
                    balaY: player2Bullet.y - 90,

                    //Municion
                    municion: player2Ammo,

                    //Puntos
                    puntos: player2Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,

                })
            );
        }

        if (host == 1) {
            conexion.send(
                JSON.stringify({
                    //Player 1 ready
                    ready: player1HasSelected,

                    // Posición del jugador
                    x: player1.x,
                    y: player1.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador1,

                    //Balas
                    balaX: player1Bullet.x + 50,
                    balaY: player1Bullet.y - 90,

                    //Municion
                    municion: player1Ammo,

                    //Puntos
                    puntos: player1Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );
        }
    }

    update() {
        nombre1.setText(nombreJugador1);
        nombre2.setText(nombreJugador2);
        nombre1.x = player1.body.x;
        nombre1.y = player1.body.y - 20;
        nombre2.x = player2.body.x;
        nombre2.y = player2.body.y - 20;

        if (empezarPartida === false && player1HasSelected === true && player2HasSelected === true) {
            empezarPartida = true;
            timedEvent = this.time.delayedCall(200000, endGameByTime, [], this);
        }
        if (empezarPartida === true && host == 1) {
            tiempoAux = timedEvent.getProgress();
        }

        timerText.setText((200 - (tiempoAux * 200).toString().substr(0, 3)));

        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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

        if (player1Score == 5 || player2Score == 5) {
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

        ///////////PLAYER 1 CONTROL/////////
        if (host == 1) {
            this.input.keyboard.on("keydown_A", () => {
                p1LookingRight = false;
                p1LookingLeft = true;
                player1.setVelocityX(-player1VelocityX);
                player1.anims.play('left1', true);
                animacionJugador1 = 'left1'
            });
            this.input.keyboard.on("keydown_S", () => {
                player1.setScale(0.75);
            });
            this.input.keyboard.on("keydown_D", () => {
                p1LookingLeft = false;
                p1LookingRight = true;
                player1.setVelocityX(player1VelocityX);
                player1.anims.play('right1', true);
                animacionJugador1 = 'right1'
            });
            this.input.keyboard.on("keydown_W", () => {
                player1.setVelocityY(-player1VelocityY);
                player1.anims.play('turn1');
                animacionJugador1 = 'turn1'
            });
            this.input.keyboard.on("keyup_A", () => {
                p1LookingLeft = false;
                player1.setVelocityX(0);
                player1.anims.play('turn1');
                animacionJugador1 = 'turn1'
            });
            this.input.keyboard.on("keyup_D", () => {
                p1LookingRight = false;
                player1.setVelocityX(0);
                player1.anims.play('turn1');
                animacionJugador1 = 'turn1'
            });
            this.input.keyboard.on("keyup_S", () => {
                player1.setScale(1.5);
            });

            this.input.keyboard.on("keyup_Q", () => {
                if (player1AbleToShoot == true && player1Ammo > 0) {
                    efectoDisparo.play();
                    player1Ammo = player1Ammo - 1;
                    player1Bullet = this.physics.add.image(player1.body.x, player1.body.y + 20, 'bullet').setScale(0.7);
                    player1Bullet.x = player1.body.x;
                    player1Bullet.y = player1.body.y + 20;
                    if (p1LookingLeft == true) {
                        player1Bullet.setVelocityX(-1500);
                        player1Bullet.setVelocityY(0);
                    } else if (p1LookingRight == true) {
                        player1Bullet.setVelocityX(1500);
                        player1Bullet.setVelocityY(0);
                    } else {
                        player1Bullet.setVelocityY(-1500);
                    }
                    player1AbleToShoot = false;
                    this.time.delayedCall(player1Cadence, enablePlayer1Shoot, [], this);
                }
            });
            conexion.send(
                JSON.stringify({
                    //Player 1 ready
                    ready: player1HasSelected,

                    // Posición del jugador
                    x: player1.x,
                    y: player1.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador1,

                    //Balas
                    balaX: player1Bullet.x + 50,
                    balaY: player1Bullet.y - 90,

                    //Municion
                    municion: player1Ammo,

                    //Puntos
                    puntos: player1Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );

        }
        ///////////PLAYER 2 CONTROL/////////
        if (host == 0) {
            this.input.keyboard.on("keydown_A", () => {
                p2LookingRight = false;
                p2LookingLeft = true;
                player2.setVelocityX(-player2VelocityX);
                player2.anims.play('left2', true);
                animacionJugador2 = 'left2'
            });
            this.input.keyboard.on("keydown_S", () => {
                player2.setScale(0.75);
            });
            this.input.keyboard.on("keydown_D", () => {
                p2LookingLeft = false;
                p2LookingRight = true;
                player2.setVelocityX(player2VelocityX);
                player2.anims.play('right2', true);
                animacionJugador2 = 'right2'
            });
            this.input.keyboard.on("keydown_W", () => {
                player2.setVelocityY(-player2VelocityY);
                player2.anims.play('turn2');
                animacionJugador2 = 'turn2'
            });
            this.input.keyboard.on("keyup_A", () => {
                p2LookingLeft = false;
                player2.setVelocityX(0);
                player2.anims.play('turn2');
                animacionJugador2 = 'turn2'
            });
            this.input.keyboard.on("keyup_D", () => {
                p2LookingRight = false;
                player2.setVelocityX(0);
                player2.anims.play('turn2');
                animacionJugador2 = 'turn2'
            });
            this.input.keyboard.on("keyup_S", () => {
                player2.setScale(1.5);
            });

            this.input.keyboard.on("keyup_Q", () => {
                if (player2AbleToShoot == true && player2Ammo > 0) {
                    efectoDisparo.play();
                    player2Ammo = player2Ammo - 1;
                    player2Bullet = this.physics.add.image(player2.body.x + 15, player2.body.y + 20, 'bullet').setScale(0.7);
                    player2Bullet.x = player2.body.x + 15;
                    player2Bullet.y = player2.body.y + 20;
                    if (p2LookingLeft == true) {
                        player2Bullet.setVelocityX(-1500);
                        player2Bullet.setVelocityY(0);
                    } else if (p2LookingRight == true) {
                        player2Bullet.setVelocityX(1500);
                        player2Bullet.setVelocityY(0);
                    } else {
                        player2Bullet.setVelocityY(-1500);
                    }
                    player2AbleToShoot = false;
                    this.time.delayedCall(player2Cadence, enablePlayer2Shoot, [], this);
                }
            });
            conexion.send(
                JSON.stringify({
                    //Player 2 ready
                    ready: player2HasSelected,

                    // Posición del jugador
                    x: player2.x,
                    y: player2.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador2,

                    //Balas
                    balaX: player2Bullet.x + 50,
                    balaY: player2Bullet.y - 90,

                    //Municion
                    municion: player2Ammo,

                    //Puntos
                    puntos: player2Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );
        }

        if (createAmmo == true) {
            createAmmo = false;

            if (segundaVezAmmo == true) {
                if (host == 1) {
                    randomBalaX = Phaser.Math.FloatBetween(0, 1024);
                    randomBalaY = Phaser.Math.FloatBetween(0, 640);
                    conexion.send(
                        JSON.stringify({
                            //Player 1 ready
                            ready: player1HasSelected,

                            // Posición del jugador
                            x: player1.x,
                            y: player1.y,

                            //Animaciones jugadores
                            animacionJugadores: animacionJugador1,

                            //Balas
                            balaX: player1Bullet.x + 50,
                            balaY: player1Bullet.y - 90,

                            //Municion
                            municion: player1Ammo,

                            //Puntos
                            puntos: player1Score,

                            //Tiempo
                            tiempo: tiempoAux,

                            //Posicion power up bala
                            randomMunX: randomBalaX,
                            randomMunY: randomBalaY,

                            //Número random del power up
                            numRandom: randomNumber,

                            //Pos power up
                            powerX: posPowerX,
                            powerY: posPowerY,
                        })
                    );
                }
            }

            ammo = this.physics.add.image(randomBalaX, randomBalaY, 'ammo').setScale(0.8);
            ammo.setCollideWorldBounds(true)
            this.physics.add.collider(ammo, platforms);
        }

        if (createObject == true) {
            createObject = false;
            if (segundaVezPower == true) {
                if (host == 1) {
                    randomNumber = Phaser.Math.FloatBetween(0, 6);
                    posPowerX = Phaser.Math.FloatBetween(0, 1024);
                    posPowerY = Phaser.Math.FloatBetween(0, 640);

                    conexion.send(
                        JSON.stringify({
                            //Player 1 ready
                            ready: player1HasSelected,

                            // Posición del jugador
                            x: player1.x,
                            y: player1.y,

                            //Animaciones jugadores
                            animacionJugadores: animacionJugador1,

                            //Balas
                            balaX: player1Bullet.x + 50,
                            balaY: player1Bullet.y - 90,

                            //Municion
                            municion: player1Ammo,

                            //Puntos
                            puntos: player1Score,

                            //Tiempo
                            tiempo: tiempoAux,

                            //Posicion power up bala
                            randomMunX: randomBalaX,
                            randomMunY: randomBalaY,

                            //Número random del power up
                            numRandom: randomNumber,

                            //Pos power up
                            powerX: posPowerX,
                            powerY: posPowerY,
                        })
                    );
                }
            }

            if (randomNumber >= 0 && randomNumber <= 2) { //Generate Velocity
                velocity = this.physics.add.image(posPowerX, posPowerY, 'velocity').setScale(0.8);
                velocity.setCollideWorldBounds(true)
                this.physics.add.collider(velocity, platforms);
            }
            if (randomNumber > 2 && randomNumber <= 4) { //Generate a point
                point = this.physics.add.image(posPowerX, posPowerY, 'point').setScale(0.8);
                point.setCollideWorldBounds(true)
                this.physics.add.collider(point, platforms);
            }
            if (randomNumber > 4 && randomNumber <= 6) { //Generate cadence
                cadence = this.physics.add.image(posPowerX, posPowerY, 'cadence').setScale(0.8);
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

        //////////////////COMPROBACIÓN DE TODAS LAS VARIABLES PARA LOS JUGADORES///////////////////////
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
        if (host == 1) {
            conexion.send(
                JSON.stringify({
                    //Player 1 ready
                    ready: player1HasSelected,

                    // Posición del jugador
                    x: player1.x,
                    y: player1.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador1,

                    //Balas
                    balaX: player1Bullet.x + 50,
                    balaY: player1Bullet.y - 90,

                    //Municion
                    municion: player1Ammo,

                    //Puntos
                    puntos: player1Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );

        }

        if (host == 0) {
            conexion.send(
                JSON.stringify({
                    //Player 2 ready
                    ready: player2HasSelected,

                    // Posición del jugador
                    x: player2.x,
                    y: player2.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador2,

                    //Balas
                    balaX: player2Bullet.x + 50,
                    balaY: player2Bullet.y - 90,

                    //Municion
                    municion: player2Ammo,

                    //Puntos
                    puntos: player2Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,

                })
            );
        }
        player1ScoreText.setText(player1Score);
        player2ScoreText.setText(player2Score);

        if (host == 1) {
            conexion.send(
                JSON.stringify({
                    //Player 1 ready
                    ready: player1HasSelected,

                    // Posición del jugador
                    x: player1.x,
                    y: player1.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador1,

                    //Balas
                    balaX: player1Bullet.x + 50,
                    balaY: player1Bullet.y - 90,

                    //Municion
                    municion: player1Ammo,

                    //Puntos
                    puntos: player1Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,

                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,
                })
            );

        }

        if (host == 0) {
            conexion.send(
                JSON.stringify({
                    //Player 2 ready
                    ready: player2HasSelected,

                    // Posición del jugador
                    x: player2.x,
                    y: player2.y,

                    //Animaciones jugadores
                    animacionJugadores: animacionJugador2,

                    //Balas
                    balaX: player2Bullet.x + 50,
                    balaY: player2Bullet.y - 90,

                    //Municion
                    municion: player2Ammo,

                    //Puntos
                    puntos: player2Score,

                    //Tiempo
                    tiempo: tiempoAux,

                    //Posicion power up bala
                    randomMunX: randomBalaX,
                    randomMunY: randomBalaY,


                    //Número random del power up
                    numRandom: randomNumber,

                    //Pos power up
                    powerX: posPowerX,
                    powerY: posPowerY,

                })
            );
        }
    }
}

///////////////////////////////////PAUSE SCENE///////////////////////////////////
class PausaOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'PausaOnline' });
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
            this.scene.start('TutoPowerPausaOnline');

        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(tuto);

        var reanudar = this.add.zone(350, 440, 330, 100);
        reanudar.setOrigin(0);
        reanudar.setInteractive();
        reanudar.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.resume('GameSceneOnline');
            this.scene.stop();
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(reanudar);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class TutoPowerPausaOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPowerPausaOnline' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoPowerOnline');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('PausaOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class TutoControlesPausaOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControlesPausaOnline' });
    }

    preload() {
    }

    create() {
        this.add.image(512, 320, 'fondoTutoControlesOnline');

        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('PausaOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class TutoVictoriaPausaOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoriaPausaOnline' });
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
            this.scene.start('PausaOnline')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);

        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausaOnline')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);

        textServer = this.add.text(20, 605, '', { fontFamily: 'Essential', fontSize: '22px', fill: '#fff' });
    }

    update() {
        var url = $(location).attr('href');

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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
class CreditosFinalesOnline extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditosFinalesOnline' });
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
            this.scene.start('MainSceneOnline');
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
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            statusCode: {
                404: function () {
                    textServer.setText("Estado del Servidor: Desconectado");
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


////////////////////////////////////////////////////////////////////////////VIDEOJUEGO EN LOCAL///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////MAIN SCENE///////////////////////////////////
class MainSceneLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'MainSceneLocal' });
    }

    preload() {
    }

    create() {
        musicaFondoLocal = this.sound.add('musicaFondoLocal', { loop: true });
        sonidoBotonLocal = this.sound.add('sonidoBotonLocal', { loop: false });

        if (activarMusicaLocal == true) {
            musicaFondoLocal.play();
            activarMusicaLocal = false;
        }

        //Add the background
        this.add.image(512, 320, 'fondoMain');
        this.add.image(40, 600, 'logo').setScale(0.1);

        //Add interactions with the buttons - Go to play Scene
        var playButton = this.add.zone(640, 100, 280, 140);
        playButton.setOrigin(0);
        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            sonidoBotonLocal.play();
            if (activarMusicaLocal == true) {
                musicaFondoLocal.play();
            }
            activarMusicaLocal = false;
            this.scene.start('PlayerSelectorLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);

        //Add interactions with the buttons - Go to controls scene
        var controlButton = this.add.zone(640, 270, 280, 140);
        controlButton.setOrigin(0);
        controlButton.setInteractive();
        controlButton.once('pointerdown', () => {
            sonidoBotonLocal.play();
            if (activarMusicaLocal == true) {
                musicaFondoLocal.play();
            }
            activarMusicaLocal = false;

            this.scene.start('TutoPowerLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(controlButton);

        //Add interactions with the buttons - Go to credits scene
        var botonCreditos = this.add.zone(640, 440, 280, 140);
        botonCreditos.setOrigin(0);
        botonCreditos.setInteractive();
        botonCreditos.once('pointerdown', () => {
            sonidoBotonLocal.play();
            if (activarMusicaLocal == true) {
                musicaFondoLocal.play();
            }
            activarMusicaLocal = false;

            this.scene.start('CreditosLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(botonCreditos);
    }
}

///////////////////////////////////CreditosLocal///////////////////////////////////
class CreditosLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditosLocal' });
    }

    preload() {
    }

    create() {

        this.add.image(512, 320, 'pantallaCreditos');
        this.add.image(510, 350, 'logo').setScale(0.2);

        this.add.image(512, 320, 'autores');

        //Add the buttons
        this.add.sprite(840, 500, 'botonMP');

        //Add interactions with the buttons - Go to play Scene
        var playButton = this.add.zone(670, 420, 340, 160);
        playButton.setOrigin(0);
        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            sonidoBotonLocal.play();
            musicaFondoLocal.stop();
            activarMusicaLocal = true;
            this.scene.start('MainSceneLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(playButton);
    }
}

///////////////////////////////////PLAYER CHARACTER SELECTOR///////////////////////////////////
class PlayerSelectorLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayerSelectorLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoCharacter');

        //Add the characters
        if (reloadLocal == false) {
            SelP1Local = this.add.sprite(100, 200, 'player1').setInteractive().setScale(3);
            SelP2Local = this.add.sprite(300, 200, 'player2').setInteractive().setScale(3);
            SelP3Local = this.add.sprite(500, 200, 'player3').setInteractive().setScale(3);
            SelP4Local = this.add.sprite(700, 200, 'player4').setInteractive().setScale(3);
            SelP5Local = this.add.sprite(100, 470, 'player1').setInteractive().setScale(3);
            SelP6Local = this.add.sprite(300, 470, 'player2').setInteractive().setScale(3);
            SelP7Local = this.add.sprite(500, 470, 'player3').setInteractive().setScale(3);
            SelP8Local = this.add.sprite(700, 470, 'player4').setInteractive().setScale(3);

            nounLocal = this.add.text(55, 100, 'Jugador 1', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
            nounLocal = this.add.text(55, 370, 'Jugador 2', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

            nounLocal = this.add.text(50, 280, 'DAVROS', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
            nounLocal = this.add.text(50, 550, 'DAVROS', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

            nounLocal = this.add.text(270, 280, 'EZRI', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
            nounLocal = this.add.text(270, 550, 'EZRI', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

            nounLocal = this.add.text(465, 280, 'DUSKY', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
            nounLocal = this.add.text(465, 550, 'DUSKY', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

            nounLocal = this.add.text(660, 280, 'ZAMASU', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });
            nounLocal = this.add.text(660, 550, 'ZAMASU', { fontFamily: 'Essential', fontSize: '40px', fill: '#fff' });

            ready1TextLocal = this.add.text(270, 16, 'Jugador 1 pendiente de elegir personaje', { fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });
            ready2TextLocal = this.add.text(270, 65, 'Jugador 2 pendiente de elegir personaje', { fontFamily: 'Essential', fontSize: '37px', fill: '#fff' });
        }

        if (reloadLocal == true) {
            this.add.image(512, 320, 'recarga').setScale(0.25);
        }

    }
    update() {

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
        SelP1Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player1Local = 'character1';
            player1HasSelectedLocal = true;
            ready1TextLocal.setText('Jugador 1 listo con: DAVROS');
        });

        SelP2Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player1Local = 'character2';
            player1HasSelectedLocal = true;
            ready1TextLocal.setText('Jugador 1 listo con: EZRI');
        });

        SelP3Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player1Local = 'character3';
            player1HasSelectedLocal = true;
            ready1TextLocal.setText('Jugador 1 listo con: DUSKY');
        });

        SelP4Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player1Local = 'character4';
            player1HasSelectedLocal = true;
            ready1TextLocal.setText('Jugador 1 listo con: ZAMASU');
        });


        //Player 2 choice
        SelP5Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player2Local = 'character1';
            player2HasSelectedLocal = true;
            ready2TextLocal.setText('Jugador 2 listo con: DAVROS');
        });

        SelP6Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player2Local = 'character2';
            player2HasSelectedLocal = true;
            ready2TextLocal.setText('Jugador 2 listo con: EZRI');
        });

        SelP7Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player2Local = 'character3';
            player2HasSelectedLocal = true;
            ready2TextLocal.setText('Jugador 2 listo con: DUSKY');
        });

        SelP8Local.on('pointerdown', function (pointer) {
            sonidoBotonLocal.play();
            player2Local = 'character4';
            player2HasSelectedLocal = true;
            ready2TextLocal.setText('Jugador 2 listo con: ZAMASU');
        });

        if (player2HasSelectedLocal == true && player1HasSelectedLocal == true) {
            // this.time.delayedCall(3000, startGameLocal, [], this); 
            this.time.delayedCall(1000, cuenta1Local, [], this);
        }
    }
}
///////////////////////////////////TUTO POWER///////////////////////////////////
class TutoPowerLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPowerLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoPower');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainSceneLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);


        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////TUTO CONTROLES///////////////////////////////////
class TutoControlesLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControlesLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoControles');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainSceneLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////TUTO VICTORIA///////////////////////////////////
class TutoVictoriaLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoriaLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoVictoria');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            musicaFondo.stop();
            activarMusica = true;
            this.scene.start('MainSceneLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////GAME SCENE///////////////////////////////////
class GameSceneLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'GameSceneLocal' });

        this.player1;
        this.player2;
    }

    preload() {
    }

    create() {
        musicaJuegoLocal = this.sound.add('musicaJuegoLocal', { loop: true });
        musicaJuegoLocal.play();

        efectoMuerteLocal = this.sound.add('efectoMuerteLocal', { loop: false });
        efectoDisparoLocal = this.sound.add('efectoDisparoLocal', { loop: false });
        efectoRecolectorLocal = this.sound.add('efectoRecolectorLocal', { loop: false });

        //Add the background
        this.add.image(512, 320, 'sky');

        //Add the platformsLocal
        platformsLocal = this.physics.add.staticGroup();

        platformsLocal.create(100, 170, 'ground');
        platformsLocal.create(924, 170, 'ground');
        platformsLocal.create(512, 170, 'ground');
        platformsLocal.create(312, 290, 'ground');
        platformsLocal.create(712, 290, 'ground');
        platformsLocal.create(200, 410, 'ground');
        platformsLocal.create(824, 410, 'ground');
        platformsLocal.create(100, 530, 'ground');
        platformsLocal.create(924, 530, 'ground');
        platformsLocal.create(300, 530, 'ground');
        platformsLocal.create(724, 530, 'ground');

        platformsLocal.create(100, 635, 'suelo');
        platformsLocal.create(500, 635, 'suelo');
        platformsLocal.create(900, 635, 'suelo');

        corazonesPlayer1Local = this.add.image(50, 30, 'corazon6').setScale(0.05);
        this.add.image(130, 30, 'puntosPlayer1').setScale(0.05);
        balasPlayer1Local = this.add.image(230, 30, 'municion5').setScale(0.1);

        corazonesPlayer2Local = this.add.image(974, 30, 'corazon6').setScale(0.05);
        this.add.image(870, 30, 'puntosPlayer2').setScale(0.05);
        balasPlayer2Local = this.add.image(800, 30, 'municion5').setScale(0.1);

        //Player 1 creation
        if (player1Local === 'character1') {
            player1Local = this.physics.add.sprite(100, 50, 'SpritePlayer1').setScale(1.5);
            player1Local.setCollideWorldBounds(true);
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
        } else if (player1Local === 'character2') {
            player1Local = this.physics.add.sprite(100, 50, 'SpritePlayer2').setScale(1.5);
            player1Local.setCollideWorldBounds(true);
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
        } else if (player1Local === 'character3') {
            player1Local = this.physics.add.sprite(100, 50, 'SpritePlayer3').setScale(1.5);
            player1Local.setCollideWorldBounds(true);
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
        } else if (player1Local === 'character4') {
            player1Local = this.physics.add.sprite(100, 50, 'SpritePlayer4').setScale(1.5);
            player1Local.setCollideWorldBounds(true);
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


        //Player 2 creation
        if (player2Local === 'character1') {
            player2Local = this.physics.add.sprite(924, 50, 'SpritePlayer1').setScale(1.5);
            player2Local.setCollideWorldBounds(true);
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
        } else if (player2Local === 'character2') {
            player2Local = this.physics.add.sprite(924, 50, 'SpritePlayer2').setScale(1.5);
            player2Local.setCollideWorldBounds(true);
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
        } else if (player2Local === 'character3') {
            player2Local = this.physics.add.sprite(924, 50, 'SpritePlayer3').setScale(1.5);
            player2Local.setCollideWorldBounds(true);
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
        } else if (player2Local === 'character4') {
            player2Local = this.physics.add.sprite(924, 50, 'SpritePlayer4').setScale(1.5);
            player2Local.setCollideWorldBounds(true);
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

        //Timer 
        timedEventLocal = this.time.delayedCall(120000, endGameByTimeLocal, [], this);
        timerEvent1Local = this.time.addEvent({ delay: 120000, timeScale: 1 });
        graphics = this.add.graphics({ x: 0, y: 0 });

        //Game texts
        player1ScoreTextLocal = this.add.text(150, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });
        player2ScoreTextLocal = this.add.text(895, 20, '0', { fontFamily: 'aplhbeta', fontSize: '25px', fill: '#fff' });

        //Input Events
        cursorsLocal = this.input.keyboard.createCursorKeys();

        //Colliders - Players with the platformsLocal
        this.physics.add.collider(player1Local, platformsLocal);
        this.physics.add.collider(player2Local, platformsLocal);
    }

    update() {
        graphics.clear();
        drawClock(512, 35, timerEvent1Local);

        this.input.keyboard.on("keyup_G", () => {
            this.scene.launch('Pausa')
            this.scene.pause();
        });

        //End game by time
        if (timeOverLocal == true) {
            if (player1ScoreLocal > player2ScoreLocal) {
                player1Local.setScale(3);
                player1Local.x = 512;
                player1Local.y = 320;
                player2Local.x = 2000;
                player2Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else if (player1ScoreLocal < player2ScoreLocal) {
                player2Local.setScale(3);
                player2Local.x = 512;
                player2Local.y = 320;
                player1Local.x = 2000;
                player1Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else {
                player1Local.setScale(2);
                player2Local.setScale(2);
                player1Local.x = 312;
                player1Local.y = 320;
                player2Local.x = 712;
                player2Local.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEventLocal.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGameLocal, [], this);
        }

        //End game by score
        if (player1ScoreLocal == 10 || player2ScoreLocal == 10) {
            if (player1ScoreLocal > player2ScoreLocal) {
                player1Local.setScale(3);
                player1Local.x = 512;
                player1Local.y = 320;
                player2Local.x = 2000;
                player2Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else if (player1ScoreLocal < player2ScoreLocal) {
                player2Local.setScale(3);
                player2Local.x = 512;
                player2Local.y = 320;
                player1Local.x = 2000;
                player1Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else {
                player1Local.setScale(3);
                player2Local.setScale(3);
                player1Local.x = 312;
                player1Local.y = 320;
                player2Local.x = 712;
                player2Local.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEventLocal.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGameLocal, [], this);
        }

        //End game by life
        if (player1LifeLocal <= 0 || player2LifeLocal <= 0) {
            if (player1LifeLocal <= 0) {
                player2Local.setScale(3);
                player2Local.x = 512;
                player2Local.y = 320;
                player1Local.x = 2000;
                player1Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ2').setScale(0.2);
            } else if (player2LifeLocal <= 0) {
                player1Local.setScale(3);
                player1Local.x = 512;
                player1Local.y = 320;
                player2Local.x = 2000;
                player2Local.y = 2000;
                this.add.image(512, 160, 'victoriaJ1').setScale(0.2);
            } else {
                player1Local.setScale(3);
                player2Local.setScale(3);
                player1Local.x = 312;
                player1Local.y = 320;
                player2Local.x = 712;
                player2Local.y = 320;
                this.add.image(512, 160, 'empate').setScale(0.2);
            }
            timedEventLocal.paused = true;
            this.physics.pause();
            this.time.delayedCall(4000, endGameLocal, [], this);
        }

        //Player 1 controls
        this.input.keyboard.on("keydown_A", () => {
            p1LookingRightLocal = false;
            p1LookingLeftLocal = true;
            player1Local.setVelocityX(-player1VelocityXLocal);
            player1Local.anims.play('left1', true);
        });
        this.input.keyboard.on("keydown_S", () => {
            player1Local.setScale(0.75);
        });
        this.input.keyboard.on("keydown_D", () => {
            p1LookingLeftLocal = false;
            p1LookingRightLocal = true;
            player1Local.setVelocityX(player1VelocityXLocal);
            player1Local.anims.play('right1', true);
        });
        this.input.keyboard.on("keydown_W", () => {
            player1Local.setVelocityY(-player1VelocityYLocal);
            player1Local.anims.play('turn1');
        });
        this.input.keyboard.on("keyup_A", () => {
            p1LookingLeftLocal = false;
            player1Local.setVelocityX(0);
            player1Local.anims.play('turn1');
        });
        this.input.keyboard.on("keyup_D", () => {
            p1LookingRightLocal = false;
            player1Local.setVelocityX(0);
            player1Local.anims.play('turn1');
        });
        this.input.keyboard.on("keyup_S", () => {
            player1Local.setScale(1.5);
        });

        //Player 1 actions
        this.input.keyboard.on("keyup_Q", () => {
            if (player1AbleToShootLocal == true && player1AmmoLocal > 0) {
                efectoDisparoLocal.play();
                player1AmmoLocal = player1AmmoLocal - 1;
                //player1AmmoText.setText('Munición 1: ' + player1AmmoLocal);
                if (player1AmmoLocal == 5) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion5').setScale(0.1);
                } else if (player1AmmoLocal == 4) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion4').setScale(0.1);
                } else if (player1AmmoLocal == 3) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion3').setScale(0.1);
                } else if (player1AmmoLocal == 2) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion2').setScale(0.1);
                } else if (player1AmmoLocal == 1) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion1').setScale(0.1);
                } else if (player1AmmoLocal == 0) {
                    balasPlayer1Local = this.add.image(230, 30, 'municion0').setScale(0.1);
                }
                player1BulletLocal = this.physics.add.image(player1Local.body.x + 15, player1Local.body.y + 20, 'bullet').setScale(0.7);
                if (p1LookingLeftLocal == true) {
                    player1BulletLocal.setVelocityX(-1500);
                } else if (p1LookingRightLocal == true) {
                    player1BulletLocal.setVelocityX(1500);
                } else {
                    player1BulletLocal.setVelocityY(-1500);
                }
                player1AbleToShootLocal = false;
                this.time.delayedCall(player1CadenceLocal, enablePlayer1ShootLocal, [], this);
            }
        });

        //Player 2 controls
        this.input.keyboard.on("keydown_J", () => {
            p2LookingRightLocal = false;
            p2LookingLeftLocal = true;
            player2Local.setVelocityX(-player2VelocityXLocal);
            player2Local.anims.play('left2', true);
        });
        this.input.keyboard.on("keydown_K", () => {
            player2Local.setScale(0.75);
        });
        this.input.keyboard.on("keydown_L", () => {
            p2LookingLeftLocal = false;
            p2LookingRightLocal = true;
            player2Local.setVelocityX(player2VelocityXLocal);
            player2Local.anims.play('right2', true);
        });
        this.input.keyboard.on("keydown_I", () => {
            player2Local.setVelocityY(-player2VelocityYLocal);
            player2Local.anims.play('turn2');
        });
        this.input.keyboard.on("keyup_J", () => {
            p2LookingLeftLocal = false;
            player2Local.setVelocityX(0);
            player2Local.anims.play('turn2');
        });
        this.input.keyboard.on("keyup_L", () => {
            p2LookingRightLocal = false;
            player2Local.setVelocityX(0);
            player2Local.anims.play('turn2');
        });
        this.input.keyboard.on("keyup_K", () => {
            player2Local.setScale(1.5);
        });

        //Player 2 actions
        this.input.keyboard.on("keyup_U", () => {
            if (player2AbleToShootLocal == true && player2AmmoLocal > 0) {
                efectoDisparoLocal.play();
                player2AmmoLocal = player2AmmoLocal - 1;
                //player2AmmoText.setText('Munición 2: ' + player2AmmoLocal);
                if (player2AmmoLocal == 5) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion5').setScale(0.1);
                } else if (player2AmmoLocal == 4) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion4').setScale(0.1);
                } else if (player2AmmoLocal == 3) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion3').setScale(0.1);
                } else if (player2AmmoLocal == 2) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion2').setScale(0.1);
                } else if (player2AmmoLocal == 1) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion1').setScale(0.1);
                } else if (player2AmmoLocal == 0) {
                    balasPlayer2Local = this.add.image(800, 30, 'municion0').setScale(0.1);
                }
                player2BulletLocal = this.physics.add.image(player2Local.body.x + 15, player2Local.body.y + 20, 'bullet').setScale(0.7);
                if (p2LookingLeftLocal == true) {
                    player2BulletLocal.setVelocityX(-1500);
                } else if (p2LookingRightLocal == true) {
                    player2BulletLocal.setVelocityX(1500);
                } else {
                    player2BulletLocal.setVelocityY(-1500);
                }
                player2AbleToShootLocal = false;
                this.time.delayedCall(player2CadenceLocal, enablePlayer2ShootLocal, [], this);
            }
        });

        //Generate ammoLocal
        if (createAmmoLocal == true) {
            createAmmoLocal = false;
            ammoLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'ammoLocal').setScale(0.8);
            ammoLocal.setCollideWorldBounds(true)
            this.physics.add.collider(ammoLocal, platformsLocal);
        }

        //Generate objects
        if (createObjectLocal == true) {
            createObjectLocal = false;
            randomNumberLocal = Phaser.Math.FloatBetween(0, 10);
            //randomNumberLocal = 2;
            console.log(randomNumberLocal);
            if (randomNumberLocal >= 0 && randomNumberLocal <= 2) { //Generate healthLocal
                healthLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'healthLocal').setScale(0.8);
                healthLocal.setCollideWorldBounds(true)
                this.physics.add.collider(healthLocal, platformsLocal);
            }
            if (randomNumberLocal > 2 && randomNumberLocal <= 3) { //Generate velocityLocal
                velocityLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'velocityLocal').setScale(0.8);
                velocityLocal.setCollideWorldBounds(true)
                this.physics.add.collider(velocityLocal, platformsLocal);
            }
            if (randomNumberLocal > 3 && randomNumberLocal <= 4) { //Generate more damageLocal on bullet
                damageLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'damageLocal').setScale(0.8);
                damageLocal.setCollideWorldBounds(true)
                this.physics.add.collider(damageLocal, platformsLocal);
            }
            if (randomNumberLocal > 4 && randomNumberLocal <= 5) { //Generate slowLocal enemy
                slowLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'slowLocal').setScale(0.8);
                slowLocal.setCollideWorldBounds(true)
                this.physics.add.collider(slowLocal, platformsLocal);
            }
            if (randomNumberLocal > 5 && randomNumberLocal <= 6) { //Generate bigLocal enemy
                bigLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'bigLocal').setScale(0.8);
                bigLocal.setCollideWorldBounds(true)
                this.physics.add.collider(bigLocal, platformsLocal);
            }
            if (randomNumberLocal > 6 && randomNumberLocal <= 7) { //Generate smallLocal player
                smallLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'smallLocal').setScale(0.8);
                smallLocal.setCollideWorldBounds(true)
                this.physics.add.collider(smallLocal, platformsLocal);
            }
            if (randomNumberLocal > 7 && randomNumberLocal <= 9) { //Generate a pointLocal
                pointLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'pointLocal').setScale(0.8);
                pointLocal.setCollideWorldBounds(true)
                this.physics.add.collider(pointLocal, platformsLocal);
            }
            if (randomNumberLocal > 9 && randomNumberLocal <= 10) { //Generate cadenceLocal
                cadenceLocal = this.physics.add.image(Phaser.Math.FloatBetween(0, 1024), Phaser.Math.FloatBetween(0, 640), 'cadenceLocal').setScale(0.8);
                cadenceLocal.setCollideWorldBounds(true)
                this.physics.add.collider(cadenceLocal, platformsLocal);
            }
        }

        //Update of collisions
        this.physics.add.collider(player2Local, player1BulletLocal, BulletPlayer1HitLocal, null, this);
        this.physics.add.collider(player1Local, player2BulletLocal, BulletPlayer2HitLocal, null, this);
        this.physics.add.collider(player1Local, ammoLocal, addAmmo1Local, null, this);
        this.physics.add.collider(player2Local, ammoLocal, addAmmo2Local, null, this);
        this.physics.add.collider(player1Local, healthLocal, addHealth1Local, null, this);
        this.physics.add.collider(player2Local, healthLocal, addHealth2Local, null, this);
        this.physics.add.collider(player1Local, velocityLocal, addVelocity1Local, null, this);
        this.physics.add.collider(player2Local, velocityLocal, addVelocity2Local, null, this);
        this.physics.add.collider(player1Local, damageLocal, addDamage1Local, null, this);
        this.physics.add.collider(player2Local, damageLocal, addDamage2Local, null, this);
        this.physics.add.collider(player1Local, slowLocal, addSlow1Local, null, this);
        this.physics.add.collider(player2Local, slowLocal, addSlow2Local, null, this);
        this.physics.add.collider(player1Local, bigLocal, addBig1Local, null, this);
        this.physics.add.collider(player2Local, bigLocal, addBig2Local, null, this);
        this.physics.add.collider(player1Local, smallLocal, addSmall1Local, null, this);
        this.physics.add.collider(player2Local, smallLocal, addSmall2Local, null, this);
        this.physics.add.collider(player1Local, pointLocal, addPoint1Local, null, this);
        this.physics.add.collider(player2Local, pointLocal, addPoint2Local, null, this);
        this.physics.add.collider(player1Local, cadenceLocal, addCadence1Local, null, this);
        this.physics.add.collider(player2Local, cadenceLocal, addCadence2Local, null, this);
    }
}
///////////////////////////////////PAUSE SCENE///////////////////////////////////
class PausaLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'PausaLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'pausa');

        //Add interactions with the buttons - Go to play Scene
        var tuto = this.add.zone(350, 310, 330, 100);
        tuto.setOrigin(0);
        tuto.setInteractive();
        tuto.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausaLocal');

        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(tuto);

        //Add interactions with the buttons - Go to play Scene
        var reanudar = this.add.zone(350, 440, 330, 100);
        reanudar.setOrigin(0);
        reanudar.setInteractive();
        reanudar.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.resume('GameSceneLocal');
            this.scene.stop();
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(reanudar);
    }
}

///////////////////////////////////TUTO POWER///////////////////////////////////
class TutoPowerPausaLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoPowerPausaLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoPower');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('PausaLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);


        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////TUTO CONTROLES///////////////////////////////////
class TutoControlesPausaLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoControlesPausaLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoControles');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('PausaLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoVictoriaPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////TUTO VICTORIA///////////////////////////////////
class TutoVictoriaPausaLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'TutoVictoriaPausaLocal' });
    }

    preload() {
    }

    create() {
        //Add the background
        this.add.image(512, 320, 'fondoTutoVictoria');

        //Add interactions with the buttons - Go back to Main Scene
        var backButton = this.add.zone(830, 500, 180, 90);
        backButton.setOrigin(0);
        backButton.setInteractive();
        backButton.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('PausaLocal')
        });
        // this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(backButton);


        var flechaDerecha = this.add.zone(860, 265, 130, 140);
        flechaDerecha.setOrigin(0);
        flechaDerecha.setInteractive();
        flechaDerecha.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoPowerPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaDerecha);

        var flechaIzquierda = this.add.zone(20, 265, 130, 140);
        flechaIzquierda.setOrigin(0);
        flechaIzquierda.setInteractive();
        flechaIzquierda.once('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('TutoControlesPausaLocal')
        });
        //this.add.graphics().lineStyle(2,0x00ff0c).strokeRectShape(flechaIzquierda);
    }
}

///////////////////////////////////FINAL CREDITS SCENE///////////////////////////////////
class CreditosFinalesLocal extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditosFinalesLocal' });
    }

    preload() {
    }

    create() {
        musicaFondo.play();
        this.add.image(512, 320, 'pantallaCreditos');
        this.add.image(510, 350, 'logo').setScale(0.2);

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
            reload = true;
            this.scene.start('MainSceneLocal');
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
    scene: [Preload, ModoJuego, MainSceneOnline, TutoVictoriaOnline, TutoPowerOnline, TutoControlesOnline, RegistroJ1Online,
        PlayerSelectorOnline, CreditosOnline, GameSceneOnline, TutoVictoriaPausaOnline, TutoPowerPausaOnline, TutoControlesPausaOnline,
        PausaOnline, CreditosFinalesOnline, MainSceneLocal, TutoVictoriaLocal, TutoPowerLocal, TutoControlesLocal, PlayerSelectorLocal,
        CreditosLocal, GameSceneLocal, TutoVictoriaPausaLocal, TutoPowerPausaLocal, TutoControlesPausaLocal, PausaLocal, CreditosFinalesLocal],
};

var game = new Phaser.Game(config);

