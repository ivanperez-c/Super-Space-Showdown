# Super Space Showdown

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen2.png" alt="JuveR" width="300px">
</p>

# Pixel Perfect

**Descripción del  juego**: Juego de plataformas jugador contra jugador en el que cada jugador controla un personaje que utiliza armas y objetos que encuentra por el escenario para intentar acabar con su rival.

**Autores**: Grupo 10 - Pixel Perfect
 - Iván Pérez Ciruelos, i.perezc.2019@alumnos.urjc.es, ivanperez-c
 - Adrian Mira García, a.mira.2019@alumnos.urjc.es, AdrianMira
 - Juan Gradolph Andrés, j.gradolph.2019@alumnos.urjc.es, GradolphJ
 - Carlos Garrido Guerrero, c.garrido.2020@alumnos.urjc.es, 
 - Pablo Burgaleta de la Peña, p.burgaleta.2019@alumnos.urjc.es, PBurgaleta
 
 **Grado**: Diseño y desarrollo de videojuegos
 
 **Asignatura**: Juegos en Red
 
 # Índice
* 1.**Introducción**
  *  a. Concepto del juego
  *  b. Historia del juego
  *  c. Género
  *  d. Público objetivo
  *  e. Estilo visual
  *  f. Música
* 2.**Mecánicas**
  * a. Ganar vida
  * b. Mejorar bala
  * c. Ralentizar enemigo
  * d. Reducir dimensiones
  * e. Aumentar cadencia
  * f. Recargar munición
  * g. Aumentar dimensiones del enemigo
  * h. Aumentar velocidad
  * i. Ganar un puntoo
* 3.**Pantallas** 
  * a. Diagrama de flujo
* 4.**Diseño y arte** 
  * a. Estética general del juego
  * b. Apartado visual
  * c. Personajes
    * i. DAVROS
    * ii. EZRI
    * iii. DUSKY
    * iv. ZAMASU
* 5.**API REST** 
* 6.**Instrucciones para la ejecución del juego** 


&nbsp;

# 1. Introducción
## a. Concepto del juego
Super Space Showdown es un videojuego de plataformas de un jugador contra otro jugador, en el que cada jugador podrá elegir entre cuatro personajes con cuál poder jugar en un escenario de plataformas en el que aparecerán objetos de forma aleatoria que ayudarán al jugador a acabar con su oponente.

El concepto principal del juego consiste en un plataformas 2D, de acción donde los jugadores controlarán a alienígenas oficinistas con armas. El objetivo principal es obtener el máximo número de puntos antes de que acabe el tiempo. Los puntos se obtendrán de diversas formas: matando a los rivales y obteniendo objetos de recursos. 

&nbsp;

## b. Historia del juego
Las oficinas de la megacorporación intergaláctica de SpaceCorp son un ambiente altamente competitivo en el que los trabajadores harán cualquier cosa por la oportunidad de ascender. Incluso participar en SUPER SPACE SHOWDOWN, la competición donde los trabajadores obtienen ascensos a base de tener que acabar con la competencia a cualquier costo.

&nbsp;

## c. Género
El género del videojuego es un plataformas en 2D, caracterizado por tener que correr y saltar entre diferentes plataformas esquivando los disparos del jugador rival mientras se recogen elementos para acabar con el rival de una forma más sencilla.

&nbsp;

## d. Público objetivo
El público objetivo del videojuego está en personas de entre 12 y 25 años, a las que les guste los juegos de acción y plataformas.

&nbsp;

## e. Estilo visual
El principal estilo visual que se aborda en el videojuego es el pixel art.

&nbsp;

## f. Música
La música se basa principalmente en dos estilos diferentes.

El primer estilo empleado es un estilo arcade, una música rápida creada mediante sintetizadores y diversos plugins, similar a las bandas sonoras de juegos como Hotline Miami, Duck Game o Risk of Rain 2.

El segundo estilo empleado es mucho más lento, con tintes de jazz o lofi, este estilo de música será empleado para menús y situaciones en las que el jugador no se esté enfrentando en combate.

Con ambos estilos de música se busca conseguir un contraste entre los momentos más calmados con la acción, que comienza bruscamente.

&nbsp;

# 2. Mecánicas
Los jugadores controlan el movimiento del personaje mediante 4 teclas, 

  -	WASD para el movimiento del jugador 1.
  -	IJKL para el movimiento del jugador 2.

Además del movimiento, los jugadores también pueden realizar disparos, con la tecla Q el jugador 1 y la tecla U el jugador 2.

Dentro de la partida se hayan un total de nueve power ups generados de la siguiente manera: 

  -	La recarga de munición aparece en una posición aleatoria cada 5 segundos tras ser obtenida por cualquier jugador.

  -	La ganancia de vida y la ganancia de un punto aparecen en una posición aleatoria cada 10 segundos después de que un jugador haya obtenido este power-up o cualquier otro a excepción de la munición, tiene un porcentaje de aparición del 20% cada uno.

  -	El resto de power-ups aparecen en una posición aleatoria cada 10 segundos después de que un jugador haya obtenido este power-up o cualquier otro a excepción de la munición, tiene un porcentaje de aparición del 10% cada uno.

  -	Todos los power ups que generen efectos sobre el jugador o sobre el oponente tienen una duración de 10 segundos.

&nbsp;

## a. Ganar vida

El jugador obtiene uno de vida siempre y cuando tenga menos de seis de vida (el máximo).

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen3.png" alt="JuveR" width="300px">
</p>

&nbsp;

## b. Mejorar bala

Mejora el siguiente disparo del jugador, quitando el doble de vida.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen4.png" alt="JuveR" width="300px">
</p>

&nbsp;

## c. Ralentizar enemigo

Reduce la velocidad del enemigo a la mitad.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen5.png" alt="JuveR" width="300px">
</p>

&nbsp;

## d. Reducir dimensiones

Reduce el tamaño del jugador de forma considerable.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen6.png" alt="JuveR" width="300px">
</p>

&nbsp;

## e. Aumentar cadencia

Aumenta la cadencia de disparo del jugador.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen7.png" alt="JuveR" width="300px">
</p>

&nbsp;

## f. Recargar munición

Recarga toda la munición al jugador.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen8.png" alt="JuveR" width="300px">
</p>

&nbsp;

## g. Aumentar dimensiones del enemigo

Aumenta considerablemente el tamaño del oponente.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen9.png" alt="JuveR" width="300px">
</p>

&nbsp;

## h. Aumentar velocidad

Aumenta considerablemente la velocidad del jugador.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen10.png" alt="JuveR" width="300px">
</p>

&nbsp;

## i. Ganar un puntoo

El jugador obtiene un punto extra.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen11.png" alt="JuveR" width="300px">
</p>

&nbsp;

# 3. Pantallas

Pantalla de carga empleada para mostrar el proceso de carga el juego mientras se realiza el preload de todos los assets del videojuego.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen12.png" alt="JuveR" width="500px">
</p>

Pantalla de menú principal, desde la cual se podrá acceder a la pantalla de juego, al tutorial del juego y a los créditos.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen13.png" alt="JuveR" width="500px">
</p>

Pantallas de login para los usuarios, desde la cual cada usuario podrá ingresar un nombre que le identifique durante la partida.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen26.PNG" alt="JuveR" width="500px">
</p>

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen27.PNG" alt="JuveR" width="500px">
</p>

Pantalla de selección de personajes, cada jugador ha de elegir con qué personaje quiere jugar, tras elegir los dos jugadores comienza una cuenta atrás de tres segundos y comienza el juego.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen28.PNG" alt="JuveR" width="500px">
</p>

Pantalla de juego, en la cual el jugador interactúa con todos los elementos de esta y disfruta de la partida.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen15.png" alt="JuveR" width="500px">
</p>

Pantalla de pausa a la que pueden acceder los jugadores desde la pantalla de juego para tomarse un descanso o consultar el tutorial del juego en caso de ser necesario.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen16.png" alt="JuveR" width="500px">
</p>

Pantallas de tutorial que se pueden pasar entre ellas para tener toda la información del juego.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen17.png" alt="JuveR" width="500px">
</p>

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen18.png" alt="JuveR" width="500px">
</p>

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen19.png" alt="JuveR" width="500px">
</p>

Pantalla de créditos en la que aparecen los creadores del videojuego.

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen20.png" alt="JuveR" width="500px">
</p>

## a. Diagrama de flujo

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen21.png" alt="JuveR" width="500px">
</p>


# 4. Diseño y arte

## a. Estética general del juego 

La estética general del juego se basa en un estilo clásico de una oficina pero trasladando este ambiente al espacio, es por ello que nuestros personajes llevan indumentaria típica de oficina (Camisa, traje y corbata…) pero teniendo en cuenta que son alienígenas y estarán combatiendo a muerte por un ascenso.

## b. Apartado visual

El estilo visual del videojuego será de personajes chibi (personajes con cuerpo pequeño y cabeza grande) dibujados en pixel art

## c. Personajes

**i. DAVROS**

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen22.png" alt="JuveR" width="500px">
</p>

**ii. EZRI**

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen23.png" alt="JuveR" width="500px">
</p>

**iii. DUSKY**

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen24.png" alt="JuveR" width="500px">
</p>

**iv. ZAMASU**

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/Imagen25.png" alt="JuveR" width="500px">
</p>


# 5. API REST
Para la creación de la API REST en el lenguaje de programación Java, se ha empleado el IDE Eclipse.

La API contiene:

- Una clase salaChat con su respectivo salaChatRestController, en las cuales se definen constructores, getters y setters, y los métodos GET, PUT, DELETE y POST respectivamente para el correcto funcionamiento de un chat que permite la comunicación entre usuarios. 

- Una clase username con su respectivo usernameRestController, en las cuales se definen constructores, getters y setters, y los métodos GET, PUT, DELETE y POST respectivamente para permitir a cada usuario seleccionar un nombre que le identifique para jugar la partida. 

<p align="center">
  <img src="https://github.com/ivanperez-c/Super-Space-Showdown/blob/main/Imagenes%20GDD/api.png" alt="JuveR" width="500px">
</p>


# 6. Instrucciones para la ejecución del juego
Para ejecutar la aplicación hay que seguir los siguientes pasos:

1- Levantar el servidor: para ello será necesario estar en posesión del proyecto, importarlo y ejecutarlo en Eclipse.

2- Acceder al navegador para poder jugar, preferiblemente Google Chrome.

3- Acceder a la dirección IP de la máquina que ha levantado el servidor, accediendo al puerto 8080 por defecto o al puerto específico configurado por la máquina.
