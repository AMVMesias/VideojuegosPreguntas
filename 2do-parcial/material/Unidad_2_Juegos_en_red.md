# Unidad 2: Juegos en red

**Asignatura:** Desarrollo de Videojuegos  
**Tema:** Sonido, Interacción y Redes  
**Archivo base:** Unidad 2 Juegos en red.pdf  
**Total de páginas:** 64  

> Conversión a Markdown con transcripción del texto principal y análisis de imágenes/diagramas relevantes.

---

## Página 1

# DESARROLLO DE VIDEOJUEGOS

## SONIDO, INTERACCIÓN Y REDES

---

## Página 2

# VIDEOJUEGO A VIDEOJUEGO

## JUEGOS EN RED

---

## Página 3

# VIDEOJUEGO A VIDEOJUEGO

Es la comunicación que se produce entre diferentes ordenadores o videoconsolas a través de una red. Usando esta conexión, podemos interactuar con otros jugadores y participar de un modo cooperativo o competitivo en un videojuego.

La inclusión de tecnologías de red en un juego se ha convertido en un elemento clave para incrementar las ventas y la calidad del mismo. El hecho de añadir una opción multijugador aumenta su tiempo de vida, es decir, el tiempo que el jugador puede utilizar el juego sin aburrirse, y por tanto aumenta el valor que el usuario percibe de un juego.

---

## Página 4

# HISTORIA DE LOS JUEGOS DE RED

Los primeros juegos considerados multijugador aparecieron en las universidades americanas a principios de los años ochenta. Se trataba de los MUD, **Multi-User Dungeons**, un tipo de juego basado en texto en el que se conectaba a un servidor mediante acceso a través de una terminal.

El funcionamiento de estos juegos era parecido a lo que comúnmente conocemos como juegos de rol, donde el jugador se crea un avatar, y mediante la exploración del mundo tiene que desarrollar sus estadísticas.

---

## Página 5

# HISTORIA DE LOS JUEGOS DE RED

Los dos primeros juegos que sacaron el máximo partido a las capacidades multijugador fueron:

- **Doom** de Id Software, pionero en los FPS.
- **Warcraft** de Blizzard, pionero en juegos de estrategia en tiempo real.

Ambos juegos permitían crear combates entre varios jugadores simultáneos, lo que se pasó a conocer comúnmente como un **deathmatch**.

### Análisis visual de la página

La diapositiva incluye capturas de juegos clásicos. A la izquierda se observa una escena tipo FPS asociada a *Doom*, con vista en primera persona y enemigos en pantalla. A la derecha se observa una escena de estrategia en tiempo real, relacionada con *Warcraft*, donde se distinguen unidades, terreno y elementos de gestión. La imagen refuerza la comparación entre dos géneros que impulsaron el multijugador: disparos en primera persona y estrategia en tiempo real.

---

## Página 6

# HISTORIA DE LOS JUEGOS DE RED

## Siguiente paso

Aparición de los primeros juegos en línea persistentes alrededor de 1995.

Combinaban parte de los dos puntos anteriores: tenían un servidor central donde los usuarios se conectaban para jugar, y, además, disponían de un cliente gráfico que permitía interactuar de forma intuitiva con el entorno y los otros jugadores.

Este tipo de juegos fueron llamados **Massively Multiplayer Games** o **Juegos Multijugador Masivos**.

---

## Página 7

# HISTORIA DE LOS JUEGOS DE RED

## Siguiente paso

No pueden jugarse de forma individual; requieren conexión a un servidor cada vez que se quiera jugar una partida.

Por esta razón, los juegos persistentes introdujeron un nuevo modelo de negocio para los videojuegos basado en subscripciones mensuales.

La gran mayoría de estos juegos pertenecen al género de los **MMORPG** (*massively multiuser online role playing game*).

Ejemplos destacados:

- **Ultima Online**, que fue el primero en establecerse y el que más tiempo lleva en el mercado.
- **World of Warcraft**, uno de los últimos en llegar, pero que ha batido récords sobre número de usuarios suscritos.

---

## Página 8

# ARQUITECTURA DE INTERNET

El gran salto cualitativo se produjo con la aparición de Internet como una red de comunicación a escala global.

La comunicación entre dos dispositivos conectados mediante una red se realiza mediante lo que conocemos como un **protocolo de comunicación**, es decir, un conjunto de normas que definen la lengua en la que hablan dos ordenadores entre sí.

El conjunto de protocolos más extendido en la actualidad y el que se utiliza actualmente en Internet es conocido como modelo **TCP/IP** (*Transmission Control Protocol / Internet Protocol*).

---

## Página 9

# CAPAS TCP/IP

El modelo TCP/IP está basado en una arquitectura de cinco capas que realizan funciones específicas dentro del proceso de comunicación entre dos aplicaciones.

Elementos destacados en la diapositiva:

- **MAC**
- **IP**
- **Puerto**

### Modelo TCP/IP mostrado

| Capa | Función | Ejemplos de protocolos |
|---|---|---|
| Aplicación | Representa datos para el usuario más el control de codificación y de diálogo. | HTTP, FTP, NTP, Telnet, DHCP, Ping |
| Transporte / Puerto | Admite la comunicación entre distintos dispositivos a través de diversas redes. | TCP, UDP |
| Internet / IP | Determina el mejor camino a través de una red. | IP, IGMP, ARP |
| Acceso a la red / MAC | Controla los dispositivos del hardware y los medios que forman la red. | Ethernet |

### Análisis visual de la página

La imagen muestra el modelo TCP/IP organizado en bloques o capas. Cada capa representa un nivel de responsabilidad dentro de la comunicación en red. La parte superior se orienta a la aplicación y al usuario, mientras que las capas inferiores se relacionan con transporte, direccionamiento IP y acceso físico a la red. Es importante porque ayuda a entender dónde intervienen elementos como puerto, IP y MAC dentro de la comunicación de videojuegos en red.

---

## Página 10

# TIPO DE COMUNICACIÓN

## Orientada a la conexión

Requiere el establecimiento de un canal de datos mediante una conexión inicial entre las dos instancias que intervienen en la comunicación.

Las dos instancias negocian entre ellas y crean una conexión dedicada para poder hablar entre sí.

Una vez que se establece el canal, las dos instancias envían y reciben los paquetes de datos a través de este.

En la arquitectura TCP/IP, este tipo de conexión se realiza mediante el uso del protocolo **TCP**. Ejemplos de protocolos a nivel de aplicación que trabajan con él son **HTTP**, **POP3** o **FTP**.

---

## Página 11

# TIPO DE COMUNICACIÓN

## No orientada a la conexión

Permite enviar paquetes entre dos instancias sin establecer ningún tipo de conexión inicial.

En este caso, el protocolo que se utiliza es **UDP** y como ejemplos de aplicaciones basadas en este tipo de conexión tenemos varios sistemas de transferencia de vídeo o audio, **DHCP**, **DNS**, etc.

## Comparación TCP vs UDP

| TCP | UDP |
|---|---|
| Necesita establecer un canal de comunicación. | No necesita de ningún tipo de conexión previa para poder enviar paquetes. |
| Garantiza que los datos se han transferido íntegramente entre las dos instancias. | No garantiza que los datos se reciban. |
| Los paquetes se reciben en el mismo orden en que son enviados. | Tampoco garantiza que se reciban en el mismo orden en que se han enviado. |
| Los paquetes con los datos pueden tener un tamaño de bytes variable. | Los paquetes, llamados datagramas, tienen todos la misma longitud. |
| Si hay algún problema en la transmisión, los paquetes se reenvían, creando más tráfico en la red. | No existe el reenvío de paquetes. |
| Es un protocolo lento, ya que tiene que garantizar que todos los datos se reciben y que están en orden. | Es un protocolo rápido, ya que no requiere comprobaciones adicionales. |

---

## Página 12

# TIPO DE COMUNICACIÓN

## En el contexto de los videojuegos

La elección del tipo de comunicación es muy importante. Dicha decisión depende de qué tipo de juego queramos implementar.

En un juego de estrategia donde cada movimiento es clave para el funcionamiento del sistema, es preferible una conexión **TCP** que nos garantice que todas las acciones que tome el usuario se ejecuten.

En cambio, en un **First Person Shooter (FPS)**, donde se puede actualizar el sistema multitud de veces por segundo, no podemos utilizar un protocolo TCP porque nos podría ralentizar el sistema. Por ello, posiblemente la mejor opción es utilizar **UDP** y simplemente no preocuparnos por aquellos paquetes que se pierden.

En el mundo de los videojuegos en red existe el **R-UDP (Reliable UDP)**. Este protocolo es muy similar a UDP, pero mediante una implementación ligera consigue que tenga la misma fiabilidad que TCP.

---

## Página 13

# Programación de la red

La programación en red para videojuegos permite conectar jugadores a través de Internet o redes locales (**LAN**).

Su objetivo principal es sincronizar posiciones, acciones y estados de juego en tiempo real entre múltiples dispositivos, minimizando el retraso (**latencia**) y evitando trampas.

---

## Página 14

# Programación de la red

Requiere dos elementos imprescindibles:

- Crear las conexiones entre los clientes, así como saber cómo enviar y gestionar la información.
- Diseñar un protocolo que defina cómo se comunican nuestras dos aplicaciones entre sí.

Es decir, diseñar o utilizar diferentes mecanismos que nos permitan describir los estados de nuestro juego y de los elementos que lo componen.

---

## Página 15

# Programación de la red

La programación se puede efectuar de distintas maneras, según el control que queramos tener de lo que se envía y se recibe.

- Utilizar herramientas de bajo nivel, como los llamados **sockets**, los cuales nos proporcionan un acceso directo a la capa de red.

  En este sentido, tenemos un control total de cada byte de información que se transmite por la red.

- Utilizar un mecanismo de alto nivel, que gestione mediante abstracciones todas las conexiones concurrentes y el estado de las mismas.

---

## Página 16

# Programación de la red

## Protocolos de comunicación en videojuegos

En videojuegos, los protocolos permiten que clientes y servidores intercambien información:

- Movimiento
- Acciones
- Disparos
- Daño
- Chat
- Inventario
- Estado de la partida
- Conexión y desconexión

---

## Página 17

# Programación de la red

## Protocolos de comunicación en videojuegos

### 1. UDP

UDP es muy usado en videojuegos en tiempo real porque es rápido y tiene baja latencia.

No garantiza que todos los paquetes lleguen ni que lleguen en orden, pero eso puede ser aceptable para datos que cambian constantemente, como posición o rotación.

---

## Página 18

# Programación de la red

## Protocolos de comunicación en videojuegos

### 1. UDP

| Uso | Ejemplo |
|---|---|
| Movimiento de jugadores | Posición, rotación, velocidad |
| Disparos rápidos | Dirección del disparo, impacto |
| Estados temporales | Animaciones, efectos, físicas |
| Juegos competitivos | FPS, carreras, acción online |

**Ventaja:** rápido.  
**Desventaja:** puede perder paquetes.

---

## Página 19

# Programación de la red

## Protocolos de comunicación en videojuegos

### 2. TCP

TCP garantiza que los datos lleguen completos y en orden.

El problema es que puede introducir más latencia, porque si un paquete se pierde, espera su retransmisión antes de continuar.

---

## Página 20

# Programación de la red

## Protocolos de comunicación en videojuegos

### 2. TCP

| Uso | Ejemplo |
|---|---|
| Login | Usuario y contraseña |
| Chat | Mensajes entre jugadores |
| Inventario | Compra, venta o equipamiento |
| Datos importantes | Guardado de progreso |
| Menús online | Lista de servidores o salas |

**Ventaja:** confiable.  
**Desventaja:** menos adecuado para acción en tiempo real.

---

## Página 21

# Programación de la red

## Protocolos de comunicación en videojuegos

### 3. Reliable UDP

Muchos motores y librerías usan una variante conocida como **UDP confiable** o **Reliable UDP**.

No es un protocolo único estándar como TCP, sino una técnica donde se usa UDP, pero se agregan otros mecanismos.

---

## Página 22

# Programación de la red

## Protocolos de comunicación en videojuegos

### 3. Reliable UDP

| Mecanismo | Función |
|---|---|
| ACK | Confirmar que un paquete llegó |
| Número de secuencia | Saber el orden de los paquetes |
| Reenvío | Volver a enviar datos importantes |
| Canales confiables/no confiables | Separar datos críticos y datos rápidos |

Photon, por ejemplo, documenta conexiones usando UDP, TCP y WSS según el tipo de servicio y configuración.

---

## Página 23

# Programación de la red

La herramienta básica para programar en red se basa en el concepto de **socket**.

## SOCKETS

Un **socket** es una entidad que permite que un computador intercambie datos con otros computadores. Un socket identifica una conexión particular entre dos ordenadores y se compone siempre de cinco elementos:

- Dirección de red, identificador IP.
- Puerto de la máquina origen.
- Dirección de red.
- Un puerto de la máquina destino.
- El tipo de protocolo, TCP o UDP.

### Análisis visual de la página

El diagrama muestra la comunicación entre un cliente y un servidor mediante sockets. En el lado del cliente aparecen acciones como `socket`, `connect`, `send/receive` y `close`. En el lado del servidor aparecen acciones como `socket`, `bind`, `listen`, `accept`, `send/receive` y `close`. La imagen permite entender que el cliente inicia la conexión y el servidor queda escuchando solicitudes para aceptarlas y luego intercambiar datos.

---

## Página 24

# Programación de la red

## 4. WebSocket

Es un protocolo de comunicación que permite establecer una conexión persistente entre un navegador y un servidor.

Es útil para juegos en navegador, juegos casuales, salas, chat o servicios externos.

La principal diferencia con el HTTP normal es que permite la comunicación bidireccional; el servidor no solo puede responder a las solicitudes de los clientes, sino que también puede enviarle mensajes.

Usa el puerto estándar **80 (HTTP)** o **443 (HTTPS)**, lo que facilita su uso en aplicaciones web que deben funcionar a través de firewalls y proxies.

---

## Página 25

# Programación de la red

## 4. WebSocket - ¿Cómo funciona?

1. El cliente envía una solicitud HTTP especial llamada **Solicitud de actualización**. Esta solicitud informa al servidor que el cliente desea cambiar a WebSocket.
2. Si el servidor es compatible con WebSocket y acepta cambiar, responde con una respuesta HTTP especial que confirma la actualización a WebSocket.
3. Después de intercambiar estos mensajes, se establece una conexión bidireccional persistente entre el cliente y el servidor. Ambos lados pueden enviar mensajes en cualquier momento, no solo en respuesta a solicitudes del otro lado.
4. Ahora el cliente y el servidor pueden enviar y recibir mensajes en cualquier momento. Cada mensaje de WebSocket está envuelto en **marcos** que indican cuándo comienza y termina el mensaje. Esto permite que el navegador y el servidor interpreten correctamente los mensajes, incluso si se dividen en partes debido a problemas de red.

### Análisis visual de la página

El diagrama representa una secuencia entre **Client** y **Server**. Primero aparece una petición HTTP de actualización, luego una respuesta HTTP con el código **101 Switching Protocols**, después se establece la conexión WebSocket y se intercambian mensajes en ambos sentidos. Finalmente, se muestra el cierre de conexión. La imagen ayuda a comprender que WebSocket empieza con HTTP, pero luego cambia a una conexión persistente bidireccional.

---

## Página 26

# Programación de la red

## 4. WebSocket

| Uso | Ejemplo |
|---|---|
| Juegos web | Multijugador en navegador |
| Chat | Comunicación entre jugadores |
| Lobby | Crear o unirse a salas |
| Juegos por turnos | Cartas, ajedrez, trivia |
| Paneles externos | Estadísticas o administración |

Godot soporta WebSocket tanto en exportaciones nativas como web.

**Ventaja:** compatible con navegadores.  
**Desventaja:** no siempre es ideal para juegos de acción de muy baja latencia.

---

## Página 27

# Programación de la red

## WebSocket - Características

- **Conexión persistente:** una vez establecida, la conexión WebSocket permanece abierta, permitiendo a ambas partes enviar datos en cualquier momento.
- **Bajo overhead:** comparado con HTTP, tiene un menor overhead en el intercambio de datos después de establecer la conexión inicial.
- **Bidireccional:** permite enviar y recibir mensajes en ambas direcciones, lo que es más eficiente que las solicitudes HTTP tradicionales que requieren una respuesta del servidor para cada solicitud del cliente.

---

## Página 28

# Programación de la red

## 5. WebRTC

WebRTC permite comunicación en tiempo real, especialmente entre navegadores. Puede usarse para juegos web multijugador, comunicación **peer-to-peer** o experiencias interactivas en navegador.

| Uso | Ejemplo |
|---|---|
| Juegos web P2P | Dos jugadores conectados directamente |
| Voz/video | Comunicación integrada |
| Experiencias colaborativas | Simuladores, entornos compartidos |
| Juegos en navegador | Cuando UDP directo no está disponible |

Godot incluye implementaciones de alto nivel basadas en **ENet**, **WebRTC** y **WebSocket** mediante su API multijugador.

---

## Página 29

# Programación de la red

## 6. ENet

ENet es una librería de red basada en UDP que ofrece comunicación confiable y no confiable. Es muy usada en motores como Godot.

En Godot, **ENetMultiplayerPeer** es una de las implementaciones disponibles para multijugador de alto nivel.

---

## Página 30

# Programación de la red

## 6. ENet

| Uso | Ejemplo |
|---|---|
| Juegos 2D o 3D online | Acción, aventura, cooperativo |
| Cliente-servidor | Servidor central y varios clientes |
| RPC | Ejecutar funciones remotas |
| Sincronización | Posición, estados, eventos |

---

## Página 31

# Comparación general

| Protocolo | Velocidad | Confiabilidad | Uso recomendado |
|---|---|---|---|
| UDP | Alta | Baja | Movimiento, acción en tiempo real |
| TCP | Media | Alta | Login, chat, inventario, datos críticos |
| Reliable UDP | Alta | Media/Alta | Eventos importantes con baja latencia |
| WebSocket | Media | Alta | Juegos web, lobby, chat, turnos |
| WebRTC | Alta | Variable | Juegos web en tiempo real, P2P |
| HTTP/HTTPS | Baja para tiempo real | Alta | APIs, ranking, login, persistencia |
| ENet | Alta | Configurable | Multijugador en Godot |

---

## Página 32

# Arquitectura de comunicación

La arquitectura de comunicación en un videojuego define cómo los dispositivos, clientes, servidores y peers se conectan entre sí y cómo intercambian información en tiempo real.

Es un aspecto crítico para determinar el rendimiento, escalabilidad, sincronización y tipo de experiencia de juego: cooperativa, competitiva o persistente.

### Análisis visual de la página

La imagen compara dos modelos: **Peer-to-Peer** y **Client-Server**. En Peer-to-Peer todos los jugadores se comunican entre sí, pero se indica que es vulnerable a trampas porque no hay autoridad central. En Client-Server aparece un servidor en el centro que coordina a los jugadores y se presenta como autoridad del juego. La imagen resume la diferencia principal: en P2P todos son pares, mientras que en cliente-servidor existe un nodo central que controla el estado del juego.

---

## Página 33

# Arquitectura de comunicación

## 1. Cliente-Servidor

En este tipo de comunicación definiremos a un agente como servidor y a otro como cliente.

## Esquema

- Un servidor central procesa toda la lógica del juego. Permanece a la espera de peticiones de clientes y va sirviendo las diferentes peticiones a medida que van llegando.
- Los clientes envían peticiones a un servidor (**input**) y reciben actualizaciones.

### Análisis visual de la página

La imagen muestra un servidor central conectado con varios computadores cliente. Las flechas indican el intercambio de información entre el servidor y los clientes. Representa un modelo en el que el servidor coordina el estado del juego y los jugadores se conectan a él para enviar acciones y recibir respuestas.

---

## Página 34

# Arquitectura de comunicación

## Cliente-Servidor

### Ventajas

- Control centralizado, útil para prevención de trampas.
- Persistencia del mundo.
- Escalabilidad, puede usarse con múltiples instancias.

### Desventajas

- Requiere hosting potente.
- Mayor latencia si el servidor está lejos.

---

## Página 35

# Arquitectura de comunicación

## 2. Peer-to-Peer (P2P)

En un sistema **peer-to-peer** todos los agentes se encuentran en el mismo nivel jerárquico, es decir, consideramos a todos los elementos como iguales.

## Esquema

- No hay servidor central.
- Cada cliente actúa como nodo y comunica directamente con los demás.

### Análisis visual de la página

La imagen muestra varios computadores conectados entre sí mediante flechas. No existe un servidor central. Cada equipo puede comunicarse directamente con los otros, lo que representa la lógica P2P. Este modelo puede funcionar bien para grupos pequeños o redes locales, pero tiene problemas de seguridad y sincronización cuando crece.

---

## Página 36

# Arquitectura de comunicación

## Peer-to-Peer

### Ventajas

- No es necesario invertir en servidores específicos ni en administradores, ya que cada usuario actúa como administrador de su propio equipo.
- No se depende de un sistema central, lo que evita problemas de conexiones y cuellos de botella.
- Fácil de implementar para juegos pequeños.
- Menor latencia en redes locales.

### Desventajas

- Son poco escalables. Se pueden utilizar sin problemas a pequeña escala.
- Vulnerable a trampas, porque no hay autoridad.
- Difícil sincronizar múltiples estados.

---

## Página 37

# Arquitectura de comunicación

## 3. Cliente-Servidor con replicación distribuida (modelo híbrido)

Utiliza parte de las dos arquitecturas descritas previamente, combinando clientes, servidores y peers.

## Esquema

- El servidor conserva autoridad, pero algunos cálculos se delegan a los clientes, por ejemplo movimiento o físicas.
- Los clientes replican o predicen estados.

### Análisis visual de la página

El diagrama muestra un servidor central conectado a varios computadores, pero también se observan conexiones laterales entre clientes. Esto representa un modelo híbrido: el servidor conserva autoridad, pero los clientes participan en ciertos procesos de predicción, replicación o sincronización. Este modelo busca equilibrar control, rendimiento y experiencia en tiempo real.

---

## Página 38

# Arquitectura de comunicación

## Cliente-Servidor con replicación distribuida

### Ventajas

- Reducción de carga en el servidor.
- Mejor experiencia en tiempo real.

### Desventajas

- Requiere mecanismos de reconciliación, como rollback e interpolación.
- Posibles inconsistencias si hay pérdida de paquetes.

---

## Página 39

# Diseño de Juegos en Línea Persistentes

## Persistent Online Games Design (PONG)

Son aquellos en los que el mundo del juego continúa existiendo y evolucionando, independientemente de si un jugador está conectado o no.

Se desarrollan totalmente en línea.

Tienen un servidor que está siempre funcionando, incluso cuando no hay jugadores, y los jugadores se conectan cuando quieren jugar una partida.

Estos juegos tienen una **persistencia** de datos que permite que los personajes, mundos y eventos continúen sin que todos los jugadores tengan que estar activos al mismo tiempo.

---

## Página 40

# Diseño de Juegos en Línea Persistentes

## Persistent Online Games Design (PONG)

### Arquitectura del sistema

- El diseño es mucho más complejo, ya que se tiene que decidir qué partes se ejecutan en el cliente y qué partes se ejecutan en el servidor.
- El sistema tiene que estar preparado para soportar todos los jugadores que van a utilizar el juego simultáneamente.
- La cantidad de información que se transmite entre cliente y servidor es mucho mayor.
- Todos los datos se guardan en el servidor, así que nos tenemos que encargar de que estos datos se encuentren siempre disponibles.

---

## Página 41

# Diseño de Juegos en Línea Persistentes

## Persistent Online Games Design (PONG)

### Arquitectura del sistema

La infraestructura de red de un mundo persistente se compone de tres capas distintas:

- Los clientes que corren la interfaz gráfica para que puedan interactuar con el entorno.
- Los servidores que ejecutan el código del juego y deciden lo que está pasando en todo momento.
- Los servidores de bases de datos que guardan toda la información referente a los usuarios y algunos datos sobre el estado del juego.

### Capas representadas

- Servidor de base de datos.
- Servidores.
- Clientes.

### Análisis visual de la página

El diagrama muestra una arquitectura de tres niveles: a la izquierda está el servidor de base de datos, al centro varios servidores de juego y a la derecha varios clientes. Las flechas indican intercambio de datos entre base de datos, servidores y usuarios. La imagen refuerza que en juegos persistentes no basta con conectar jugadores; también se requiere infraestructura para guardar información y mantener el mundo activo.

---

## Página 42

# Diseño de Juegos en Línea Persistentes

## Persistent Online Games Design (PONG)

## Segmentación de mundo

Para garantizar que todos los usuarios puedan disfrutar de una buena experiencia de juego, es necesario limitar el número de conexiones máximas que el servidor puede gestionar.

A veces es necesario utilizar varios servidores que garanticen que todos los clientes puedan conectarse y jugar al mismo tiempo.

---

## Página 43

# Diseño de Juegos en Línea Persistentes

## Segmentación de mundo

Hay dos técnicas para distribuir usuarios entre servidores:

### 1. Reinos o realms

Crear varios servidores a los cuales los clientes se pueden conectar, conocidos como **reinos** (*realms*).

Cada uno de estos servidores contiene una copia completa del mundo, y no se puede transferir la información de un usuario de un mundo al otro.

Una ventaja adicional de estos servidores es que los podemos colocar en diferentes localizaciones, lo que permite reducir el tiempo que tardan los paquetes entre cliente y servidor, mejorando la fluidez del juego.

---

## Página 44

# Diseño de Juegos en Línea Persistentes

## Segmentación de mundo

### 2. Subdivisión espacial del mundo

Es lo que se conoce como una **subdivisión espacial del mundo**.

Consiste en recortar el mapa donde se desarrolla la acción en varias zonas y colocar la gestión de cada una de ellas en un servidor diferente.

Se debe tener en cuenta que esta división no tiene por qué hacerse en tamaños equivalentes. Se debe estudiar la densidad de población en cada una de las zonas del mundo y dividir para que el número de usuarios sea parecido en todas ellas.

---

## Página 45

# Diseño de Juegos en Línea Persistentes

## Elementos clave

- **Mundo persistente:** el mundo sigue evolucionando con el tiempo, incluso cuando los jugadores están desconectados.
- **Base de datos centralizada:** para gestionar la persistencia, es fundamental usar bases de datos que almacenen la información sobre el estado del mundo y las acciones de los jugadores.
- **Eventos sincronizados:** cambios como clima, guerras entre facciones o misiones globales deben ser gestionados de forma que los jugadores que regresan al juego puedan ver cómo ha afectado el tiempo y sus decisiones pasadas al mundo.
- **Sistema de actualización y parches:** en los juegos persistentes, las actualizaciones y los parches pueden cambiar el estado del juego en el servidor, de forma que todos los jugadores conectados o desconectados experimenten el mismo entorno.

---

## Página 46

# Diseño de Juegos en Línea Persistentes

## Consideraciones en el diseño

- **Escalabilidad:** el servidor debe ser capaz de soportar una cantidad masiva de jugadores conectados simultáneamente, con servidores distribuidos si es necesario.
- **Seguridad:** la seguridad en los juegos persistentes es esencial, ya que los jugadores invierten tiempo en desarrollar su personaje y pueden perder progresos si la infraestructura no es confiable.
- **Economía del juego:** crear una economía que tenga sentido y no cause desequilibrio entre los jugadores. Esto implica gestionar recompensas, comercio e intercambio de recursos de manera eficiente.

---

## Página 47

# Técnicas Avanzadas para Juegos de Red

Las técnicas avanzadas para juegos de red son métodos y soluciones que permiten mejorar el rendimiento, la estabilidad y la experiencia del usuario en juegos en línea.

Estas incluyen la optimización de la latencia, la gestión de la sincronización de eventos y el manejo de la arquitectura de servidores.

Se usan para que el juego se sienta fluido, justo y estable, aunque exista latencia, pérdida de paquetes o diferencias entre los equipos de los jugadores.

---

## Página 48

# Técnicas Avanzadas para Juegos de Red

## 1. Arquitectura cliente-servidor autoritativa

En esta técnica, el servidor tiene la verdad del juego. El cliente envía entradas, pero el servidor valida lo que realmente ocurre.

Ejemplo:

- Cliente: “me moví hacia adelante”.
- Servidor: valida posición, colisiones y velocidad.
- Servidor: envía el estado correcto a todos.

**Riesgo:** consume más recursos en servidor.

---

## Página 49

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

### Predicción de movimiento

Se utiliza para manejar la latencia de la red, haciendo que los movimientos de los jugadores en el juego sean suaves a pesar de las demoras.

Se predicen las posiciones de los jugadores mientras esperan la llegada de los datos reales desde el servidor.

Unity Netcode for Entities documenta la predicción del lado del cliente como una técnica para mitigar la latencia en gameplay.

**Ventaja:** el juego se siente más rápido.  
**Desventaja:** si el servidor corrige el estado, puede aparecer un “salto” o corrección visual.

---

## Página 50

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

### 3. Server reconciliation

Después de predecir, el cliente compara su estado local con el estado oficial enviado por el servidor.

Si hay diferencia, el cliente corrige su posición o estado.

Ejemplo:

- Cliente predice: estoy en X=10.
- Servidor responde: realmente estás en X=9.5.
- Cliente corrige suavemente la posición.

**Riesgo:** si la corrección no es suave, el jugador nota tirones.

---

## Página 51

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

### 4. Interpolación

La interpolación suaviza el movimiento de otros jugadores usando estados pasados conocidos.

En lugar de mostrar inmediatamente la última posición recibida, el cliente dibuja una transición entre posiciones.

Es útil porque los paquetes no siempre llegan con ritmo constante.

**Uso recomendado:** movimiento de enemigos, aliados, vehículos y objetos remotos.

---

## Página 52

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

### 5. Extrapolación

La extrapolación intenta adivinar hacia dónde irá un objeto si no llegan paquetes nuevos.

Si un jugador iba corriendo hacia la derecha y se pierde un paquete, el cliente asume que seguirá moviéndose en esa dirección por unos instantes.

**Ventaja:** evita congelamientos.  
**Desventaja:** si el jugador cambia de dirección, la predicción puede ser incorrecta.

---

## Página 53

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

### 6. Lag compensation

La compensación de latencia permite que el servidor evalúe una acción según lo que veía el jugador en el momento de ejecutarla.

Ejemplo:

- Un jugador dispara a un enemigo.
- Cuando el disparo llega al servidor, el enemigo ya se movió.
- El servidor “rebobina” brevemente el estado del mundo para verificar si, desde la perspectiva del jugador, el disparo era válido.

**Ventaja:** hace más justo el disparo con latencia.  
**Riesgo:** jugadores con mucho ping pueden generar situaciones injustas si no se limita correctamente.

---

## Página 54

# Técnicas Avanzadas para Juegos de Red

## 8. Rate limiting

Controla cuántos mensajes puede enviar un cliente por segundo.

Si un jugador envía 500 acciones por segundo, el servidor puede ignorarlas o bloquearlo.

| Caso | Acción |
|---|---|
| Spam de chat | Limitar mensajes |
| Ataques repetidos | Validar cooldown |
| Paquetes excesivos | Descartar o sancionar |
| Intentos de conexión | Limitar por IP o usuario |

Es importante para seguridad y estabilidad.

---

## Página 55

# Técnicas Avanzadas para Juegos de Red

## 9. Rollback networking

Muy usado en juegos de pelea.

El juego predice las acciones del rival y, si luego llega una entrada diferente, retrocede unos frames, corrige y vuelve a simular.

Ejemplo:

- Frame 100: predigo que el rival sigue quieto.
- Frame 103: llega entrada real: el rival atacó.
- Juego retrocede, aplica ataque y re-simula.

**Uso recomendado:** juegos de pelea, acción 2D, juegos con inputs precisos.  
**Riesgo:** requiere simulación determinista.

---

## Página 56

# Técnicas Avanzadas para Juegos de Red

## Ejemplo aplicado: juego de disparos online

| Problema | Técnica aplicada |
|---|---|
| El jugador siente retraso al moverse | Client-side prediction |
| Otros jugadores se ven con tirones | Interpolación |
| Un disparo parece impactar tarde | Lag compensation |
| Se consume mucho ancho de banda | Delta compression |
| Algunos clientes intentan hacer trampa | Servidor autoritativo |
| Jugador con mala conexión | Extrapolación limitada |

---

## Página 57

# Técnicas Avanzadas para Juegos de Red

## Técnicas clave

- **Desacoplamiento de servidor y cliente:** los juegos avanzados usan arquitecturas donde el servidor no está completamente acoplado al cliente, lo que reduce la dependencia y mejora la escalabilidad y la seguridad.
- **Técnicas de carga y balanceo:** utilizar varias instancias de servidor y balanceadores de carga para distribuir a los jugadores entre diferentes servidores y asegurar que el rendimiento no se vea afectado por un número excesivo de jugadores en una sola instancia.
- **P2P vs servidores dedicados:** un aspecto avanzado es decidir si el juego usará una arquitectura cliente-servidor tradicional o un modelo de red P2P, en el que los clientes se conectan directamente entre sí, eliminando la necesidad de servidores centrales, pero aumentando los riesgos de piratería y vulnerabilidad.

---

## Página 58

# Herramientas de Comunicación en Juegos de Red

Las herramientas de comunicación en juegos de red son los protocolos y servicios que permiten que los jugadores y el servidor intercambien datos en tiempo real, garantizando que la experiencia del jugador sea fluida y sincronizada.

## Tipos de herramientas

- **Sockets y API de redes:** los sockets permiten la comunicación bidireccional entre el servidor y el cliente, usando TCP o UDP. TCP es adecuado para juegos basados en turnos o con poco movimiento en tiempo real. UDP es más adecuado para juegos en tiempo real donde el retraso o latencia debe ser mínimo.
- **WebSockets:** usados principalmente en juegos basados en navegador. Permiten la comunicación persistente entre el cliente y el servidor, lo que permite la actualización en tiempo real sin tener que hacer múltiples solicitudes HTTP.
- **Protocolos de sincronización:** algunas herramientas, como Photon o Mirror para Unity, gestionan la sincronización de eventos entre los jugadores, asegurando que las acciones en el servidor se reflejan correctamente en los clientes.

---

## Página 59

# Herramientas de Comunicación en Juegos de Red

## Tipos de herramientas

- **VoIP y chat en vivo:** los juegos multijugador avanzados ofrecen integración con herramientas de chat de voz en tiempo real, como Discord, para facilitar la comunicación verbal entre jugadores.
- **Redes distribuidas y CDN (Content Delivery Network):** el uso de redes distribuidas y CDN mejora la entrega de datos a los jugadores, minimizando la latencia, garantizando que los datos del juego se transmitan de manera eficiente y fluida.
- **Middleware de red:** herramientas como Photon, PlayFab o Unity Multiplayer proporcionan soluciones integradas para la comunicación en juegos multijugador, gestionando las conexiones de red, la sincronización de datos y el mantenimiento de las sesiones de juego.

---

## Página 60

# Herramientas de Comunicación en Juegos de Red

## Aspectos clave en las herramientas de comunicación

- **Optimización de ancho de banda:** la transmisión de datos debe ser eficiente para no sobrecargar la red, utilizando compresión y técnicas de *delta compression* para solo enviar cambios pequeños en el estado del juego.
- **Seguridad en la comunicación:** las herramientas de comunicación deben asegurar la protección de los datos del jugador, incluyendo cifrado de la transmisión y autenticación de usuarios.
- **Escalabilidad de servidores:** a medida que la base de jugadores crece, las herramientas de comunicación deben ser escalables, con servidores capaces de manejar un volumen creciente de jugadores y solicitudes.

---

## Página 61

# Herramientas oficiales de Unity

| Herramienta | Uso principal |
|---|---|
| Netcode for GameObjects | Sincronizar objetos, jugadores, variables, RPC y escenas. |
| Unity Transport | Capa de transporte de bajo nivel sobre UDP, con opciones de confiabilidad, ordenamiento y fragmentación. |
| Relay | Conectar jugadores sin abrir puertos ni usar servidor dedicado. Útil para juegos hosteados por un jugador. |
| Lobby | Crear salas, listar partidas, invitar jugadores y mantener información de sesión. |
| Matchmaker | Emparejar jugadores automáticamente según reglas de búsqueda. |
| Multiplayer Services SDK | SDK que unifica Lobby, Relay y Matchmaker bajo una sola API para proyectos nuevos. |
| Multiplay Hosting | Hosting de servidores dedicados para juegos con mayor demanda. |

---

## Página 62

# Herramientas externas populares en Unity

| Herramienta | Característica |
|---|---|
| Mirror | Librería open source de alto nivel para Unity. Es muy usada y compatible con Unity 2019, 2020, 2021, 2022 y Unity 6. |
| FishNet | Solución gratuita y open source para Unity, orientada a rendimiento y flexibilidad. |
| Photon Fusion | SDK comercial de alto rendimiento para sincronización de estado, predicción del cliente y compensación de latencia. |

---

## Página 63

# Herramientas principales en Godot

| Herramienta | Uso principal |
|---|---|
| High-level Multiplayer API | Sistema principal para RPC, autoridad y sincronización entre nodos. |
| ENetMultiplayerPeer | Transporte recomendado para muchos juegos en escritorio, LAN o Internet usando UDP confiable. |
| WebSocketMultiplayerPeer | Comunicación cliente-servidor usando WebSocket; útil para web o integración con servidores. |
| WebRTCMultiplayerPeer | Comunicación en navegadores y escenarios web donde ENet no es viable. |
| MultiplayerSpawner | Instancia nodos sincronizados en red. |
| MultiplayerSynchronizer | Sincroniza propiedades de nodos, como posición, animación o estado. |
| RPC | Permite llamar funciones entre cliente y servidor. |

---

## Página 64

# Comparación Unity vs Godot

| Aspecto | Unity | Godot |
|---|---|---|
| Solución oficial principal | Netcode for GameObjects | High-level Multiplayer API |
| Servicios integrados | Lobby, Relay, Matchmaker, Multiplay | No incluye servicios comerciales equivalentes integrados |
| Facilidad para salas online | Alta con Unity Services | Requiere implementación propia o servicios externos |
| Control del código | Alto, pero depende del ecosistema Unity | Muy alto, motor open source |
| Ideal para | Juegos comerciales, cooperativos, móviles, competitivos pequeños/medianos | Proyectos educativos, indies, 2D, prototipos y juegos con control propio del servidor |
| Curva de aprendizaje | Media | Media-baja para ejemplos simples, media-alta para producción online |

---

# Resumen general del documento

La unidad explica cómo los videojuegos pueden comunicarse entre sí a través de redes, permitiendo experiencias multijugador cooperativas o competitivas. Primero se revisa la historia de los juegos en red, desde los MUD hasta los MMORPG y mundos persistentes. Luego se introduce la arquitectura de Internet y el modelo TCP/IP, destacando protocolos como TCP, UDP, Reliable UDP, WebSocket, WebRTC y ENet.

También se analizan arquitecturas de comunicación como cliente-servidor, peer-to-peer y modelos híbridos. Posteriormente se profundiza en juegos persistentes, segmentación del mundo, bases de datos, escalabilidad y seguridad. Finalmente, se presentan técnicas avanzadas como servidor autoritativo, predicción, reconciliación, interpolación, extrapolación, compensación de latencia, rate limiting y rollback networking, además de herramientas disponibles para Unity y Godot.

# Conceptos clave

- Juegos en red.
- Multijugador cooperativo y competitivo.
- TCP/IP.
- TCP, UDP y Reliable UDP.
- WebSocket, WebRTC y ENet.
- Sockets.
- Cliente-servidor.
- Peer-to-peer.
- Servidor autoritativo.
- Juegos persistentes.
- Segmentación de mundo.
- Latencia.
- Predicción.
- Interpolación.
- Extrapolación.
- Lag compensation.
- Rollback networking.
- Herramientas de Unity y Godot para multijugador.
