# Desarrollo de videojuegos: Sonido, interacción y redes

## Videojuego a usuario — Interfaz, sonido y feedback

> Transcripción en Markdown del PDF de 80 páginas. Se conserva el texto original de las diapositivas, incluyendo errores ortográficos o gramaticales cuando aparecen en el material. En las páginas con imágenes se agrega una sección de análisis visual para explicar su aporte.

---

## Página 1

# DESARROLLO DE VIDEOJUEGOS

## SONIDO, INTERACCIÓN Y REDES

## VIDEOJUEGO A USUARIO

---

## Página 2

# Videojuego a Usuario

Esta unidad analiza cómo el videojuego se comunica con el jugador, es decir, cómo el sistema genera salidas que el jugador percibe a través de los sentidos: la vista, el oído y el tacto (a través de vibración, por ejemplo).

Esta "respuesta del sistema" es fundamental para la experiencia inmersiva y la jugabilidad efectiva.

---

## Página 3

# PANTALLA

La pantalla es el canal visual principal del videojuego.

A través de ella se muestran todos los elementos que permiten al usuario interpretar lo que está sucediendo en el juego.

La pantalla es el canal de información primario. No se trata solo de que el juego "se vea bonito", sino de que la información sea legible y guíe al jugador de forma intuitiva.

### Análisis visual de la imagen

La diapositiva muestra una imagen colorida de Mario y otros personajes. Esta imagen refuerza la idea de que la pantalla comunica información visual, contexto, acción y dirección para el jugador.

---

## Página 4

# PANTALLA

## Principales elementos visuales

- **Entorno gráfico:** Escenarios, niveles, fondos.
- **Personaje del jugador:** Su representación en pantalla (sprite, modelo 3D).
- **HUD (Heads-Up Display):** Interfaz que muestra vida, puntaje, minimapa, tiempo, inventario, etc.
- **Efectos visuales:** Explosiones, partículas, iluminación dinámica.
- **Cinemáticas o animaciones:** Narrativas o eventos importantes.

---

## Página 5

# INTERFAZ PARA VIDEO JUEGOS

Andrés Pastorini - Alvaro Martínez  
TDIVJ2D – Tecnólogo Informático

### Análisis visual de la imagen

La imagen muestra una interfaz de videojuego con un personaje central, indicadores de monedas, paneles laterales, botones, progreso y opción de jugar. Sirve como ejemplo de una interfaz que combina estética y funcionalidad.

---

## Página 6

# Interfaz del VideoJuego

## Objetivo

Conocer ciertos principios involucrados en el área de diseño gráfico y visión perceptual, y brindar una introducción en el diseño y programación de interfaces gráficas para videojuegos.

---

## Página 7

# Interfaz del VideoJuego

La interfaz es un elemento muy importante, puede llegar a determinar el éxito de un sistema.

El diseño de la interfaz se puede dividir en:

- Aspecto estético
- Aspecto funcional

Influyen en el desarrollo:

- Presupuesto
- Tiempos de entrega

---

## Página 8

# Interfaz del VideoJuego

## Al diseñar la interfaz…

- ¿Que piezas de arte utilizar?
- ¿Cuales se pueden reutilizar?
- ¿Que información pude ser desplegada?
- ¿Cuantas pantallas se deben crear?
- ¿Cuantas animaciones?
- ¿Cuál es el tiempo estimado que puede llevar el trabajo?
- ¿Cuáles son las opciones que difícilmente cambien?

---

## Página 9

# Interfaz del VideoJuego

## Al diseñar la interfaz…

- ¿es aceptable el número de opciones que aparece en cada pantalla?
- ¿están lógicamente agrupadas?
- ¿cuan rápido un nuevo jugador puede empezar a jugar?
- ¿cuáles serán las opciones que el jugador seleccionara comúnmente?
- Comparar el menú, con menús de juegos similares…

Se debe generar un documento con una lista de todos los recursos (“assets”) que se utilizarán.

---

## Página 10

# Interfaz del VideoJuego

## Planificando el menú

Planificar es vital para construir una buena interfaz.

Siempre habrá que realizar cambios, pero esto no significa que no debe existir una planificación inicial.

El objetivo es crear menús, pantallas y pop ups entendibles y fáciles de utilizar.

El jugador no debería detenerse a pensar como funciona la interfaz.

---

## Página 11

# Interfaz del VideoJuego

Se pueden utilizar diagramas de flujo, para indicar las distintas pantallas, opciones de menú y navegaciones entre ellas.

El diagrama debe ser claro y consistente.

Se puede empezar construyendo una caja que representa a la página principal con todas las opciones posibles que se pueden tomar a partir de esta, a partir de aquí construir las navegaciones a las otras distintas pantallas(no olvidar la opción volver) y sus respectivas opciones.

---

## Página 12

# Interfaz del VideoJuego

### Análisis visual de la imagen

La imagen muestra un diagrama de flujo de navegación entre pantallas. Se observan varias cajas conectadas con flechas, representando pantallas, menús, opciones y rutas de retorno. Su función es mostrar cómo planificar la arquitectura de menús antes de implementarla.

---

## Página 13

# Interfaz del VideoJuego

## HUD

Se suele referir como HUD(Head up Display) al sistema de menú que aparece dentro del juego(mientras el usuario juega).

### Análisis visual de la imagen

La captura muestra un juego de aventura gráfica con una zona inferior de comandos e inventario. Es un ejemplo de HUD porque el jugador puede ver acciones disponibles, objetos y estado de interacción mientras continúa dentro del juego.

---

## Página 14

# Interfaz del VideoJuego

## HUD

Es importante organizarlo correctamente, debe ocupar el menor tamaño posible en pantalla.

Es necesario conocer toda la información que se desea visualizar durante el gameplay.

Inventario, mapas, vidas, fuerza, opciones que se quieren mostrar durante el menú de pausa son ejemplos de información que puede aparecer.

Solamente debe desplegar información que el jugador necesite conocer mientras juega, y no debe distraerlo.

---

## Página 15

# Interfaz del VideoJuego

## HUD

El HUD debe ser lo menos intrusivo posible para no romper la inmersión, pero lo suficientemente claro para que el jugador entienda su estado de un vistazo rápido.

---

## Página 16

# Interfaz del VideoJuego

## HUD

Algunas posibles organizaciones.

### Análisis visual de la imagen

La imagen presenta cuatro distribuciones posibles del HUD. Las zonas oscuras indican espacios donde pueden colocarse indicadores o paneles. La idea es ubicar la información necesaria sin invadir demasiado el área de juego.

---

## Página 17

# Interfaz del VideoJuego

## Principios de diseño básicos

### Creando un punto de atención

Cuando se diseña una interface se debe determinar cual es el objeto más importante de la composición, el objeto que se pretende que llame la atención del jugador.

Un buen diseño ayuda al jugador a descubrir rápidamente cual es este punto, guía el ojo del observador a donde se quiere que mire.

Para esto se recurre a la combinación de colores, animaciones, tamaño y forma de los distintos elementos que aparecen en pantalla.

---

## Página 18

# Interfaz del VideoJuego

### Análisis visual de la imagen

La diapositiva muestra ejemplos de menús en color y en escala de grises. Se observa cómo el color, el contraste, la posición y el tamaño ayudan a dirigir la atención del jugador hacia opciones importantes como “Play”.

---

## Página 19

# Interfaz del VideoJuego

## Principios de diseño básicos

**Colores:** determinan humor, expresan emoción y establecen la atmosfera del juego.

Se debe elegir un conjunto de colores armoniosos para trabajar, y este debe ser reducido.

**Organización visual:** espaciamiento, alineación, a la mayoría de las personas les atrae la organización.

---

## Página 20

# Interfaz del VideoJuego

## Principios de diseño básicos

**Balance y peso:** Influyen el color, la forma, el tamaño, la ubicación. Un desbalance en este punto produce tensión en el observador.

### Análisis visual de la imagen

La imagen compara dos composiciones visuales con diferentes distribuciones de peso. Muestra cómo los elementos grandes, pequeños, claros y oscuros generan balance o tensión según su ubicación.

---

## Página 21

# Interfaz del VideoJuego

## Principios de diseño básicos

### Movimiento

### Análisis visual de la imagen

La imagen compara líneas diagonales y líneas verticales. Las diagonales generan sensación de movimiento, profundidad y velocidad; las verticales comunican estabilidad y fuerza.

---

## Página 22

# Interfaz del VideoJuego

## Principios de diseño básicos

### Números impares

---

## Página 23

# Interfaz del VideoJuego

## Principios de diseño básicos

**División de la imagen e Intersecciones:** es importante cuando los objetos se cruzan o cuando la imagen se divide que no parezca que es un error de diseño.

### Análisis visual de la imagen

La imagen muestra ejemplos de divisiones e intersecciones entre bloques. Sirve para demostrar que los cortes o cruces visuales deben estar bien resueltos para no parecer errores accidentales de composición.

---

## Página 24

# Interfaz del VideoJuego

## Tipos de controles

### Slidders

Sirven para ajustar valores como dificultad del juego, volumen, etc.

Puede haber variantes en cuanto a la apariencia, pero el comportamiento es el mismo.

---

## Página 25

# Interfaz del VideoJuego

## Tipos de controles

### Toggle Switches

Son utilizados cuando una opción puede tener dos estados(activada o desactivada) .

En el caso particular de los radio buttons pueden estar asociados a un grupo de opciones de las cuales solo una opción puede estar activa.

---

## Página 26

# Interfaz del VideoJuego

## Tipos de controles

### List

Despliegan un conjunto de opciones posibles, de las cuales se puede marcar solo una de ellas.

La forma de desplegar puede ser variada, horizontal, vertical, etc.

Es importante que la opción actualmente seleccionada sea visualizada de forma especial(iluminandola, con un icono adjunto, etc.). La forma de recorrer la lista también debe ser fácilmente deducible.

---

## Página 27

# Interfaz del VideoJuego

## Tipos de controles

### Input text

Es común que el jugador tenga la opción de ingresar datos al juego, como por ejemplo su nombre para después manejar un ranking de puntos.

A la hora de brindarle una opción de ingreso es necesario conocer con que dispositivo el jugador ingresará sus datos(teclado, mouse, joystick).

---

## Página 28

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

Los patrones de Usabilidad, como todo patrón, describen problemas recurrentes, sugieren buenas prácticas y brindan soluciones a estos problemas, en este caso vinculados al diseño de interfaces gráficas o componentes gráficos con las que el usuario debe interactuar.

Se enfocan en mejorar la satisfacción del usuario cuando utiliza el sistema, y que este pueda brindar la mayor utilidad posible, en base a organizaciones, formas y acciones de los componentes gráficos, que facilitan al usuario su interacción.

---

## Página 29

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### Shield

Es una capa proactiva que previene que el jugador accidentalmente active una caracteristica o función que cause un indeseable efecto o acciones accidentales que podrían tener consecuencias negativas en el juego.

El fuerza al usuario a confirmar su decisión, de esta forma dos errores son requeridos para activar el comportamiento por equivocación.

---

## Página 30

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### State

Brinda pistas visuales al usuario de su actual estado. Un ejemplo podría ser utilizar la imagen del cursor del mouse según lo que el personaje se encuentra haciendo en determinado momento(si el juego utiliza el mouse para moverse, hablar, etc.).

Puede ser usados para prevenir ambigüedades, la cantidad de estados posibles debe ser pequeña y las representaciones simbólicas deben ser claramente distinguibles.

---

## Página 31

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### Automatic Mode Cancellation

Plantea la posibilidad de cancelar la actual secuencia de operaciones ejecutadas. Por ejemplo en un juego de estrategia, si se manda a una unidad a atacar a determinada posición en el mapa, y por algún motivo se desea cancelar esta operación.

---

## Página 32

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### Magnetismo

Es utilizado cuando se necesita que el jugador tenga acciones de movimiento precisas. Por ejemplo con el mouse en un juego de estrategia, si el sistema detecta que el cursor esta muy cerca a una unidad, puede llevar de forma automática el cursor al elemento. El patrón puede ayudar a prevenir inexactitudes y el jugar sea más divertido.

Es conveniente que la funcionalidad de magnetismo sea opcional.

---

## Página 33

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### Focus

Es útil cuando se necesita que el usuario se concentre en una pieza especifica de información e ignore al resto, ya que momentáneamente el resto es irrelevante. Un ejemplo de utilización podría ser un juego de futbol, donde al establecer la táctica del equipo, solamente se muestra un campo y los jugadores.

---

## Página 34

# Interfaz del VideoJuego

## Patrones de usabilidad para videojuegos

### Progress

Su principal aplicación es desplegar información cuantitativa acerca del progreso desde el principio hasta el fin de determinada acción, para que el jugador conozca la duración de la acción ejecutada y vea el avance.

Esto ayuda a que no se ponga nervioso por no saber lo que está pasando. Ejemplos de esto son las barras de progreso cuando se carga determinado módulo, nivel, etc. y también las barras que indican la salud o la energía de un personaje.

---

## Página 35

# Interfaz del VideoJuego

## Principios de diseño básicos

### Texto

El tipo de fuente puede determinar el espíritu del juego.

El texto puede ser simplemente utilizado como elemento de diseño, pero si es de carácter informativo debe ser legible.

Recordar que el jugador quiere jugar, no leer, por lo que no conviene abusar en la cantidad de texto.

---

## Página 36

# Interfaz del VideoJuego

## TEMARIO

1. Introducción al diseño de interfaces gráficas para video juegos
2. Introducción al diseño gráfico y a la visión perceptual

---

## Página 37

# Interfaz del VideoJuego

Se define al Diseño Gráfico, como el proceso de proyectar, coordinar, seleccionar y organizar un conjunto de elementos para producir y crear objetos visuales destinados a comunicar mensajes específicos a grupos determinados.

---

## Página 38

# Interfaz del VideoJuego

El diseño gráfico, puede ser definido por tres elementos:

- **Persuación:** Procura convencer al receptor de que no existe mas que una elección razonable. Utilizando valores emotivos. El mensaje está destinado a afectar el conocimiento, las actitudes y el comportamiento de las personas.
- **Identificación:** Distingue al elemento del contexto.
- **Información:** Refiere a la comunicación objetiva. Valores funcionales, utilitarios y racionales.

---

## Página 39

# Interfaz del VideoJuego

## Elementos Visuales

Cuando los elementos conceptuales se hacen visibles aparecen los siguientes elementos visuales:

- **Contorno:** el circulo, el cuadrado y el triangulo.
- **Forma:** la dimensión, el color y la textura.

---

## Página 40

# Interfaz del VideoJuego

## El círculo

Representa tanto el área que abarca, como el movimiento de rotación que lo produce.

Este contorno tiene un gran valor simbólico especialmente su centro.

Puede tener diferentes significaciones: protección, inestabilidad, totalidad, infinitud, calidez.

---

## Página 41

# Interfaz del VideoJuego

## El cuadrado

Es una figura estable y de carácter permanente (aun cuando se modifica alargando o acortando sus lados).

Se asocia a ideas de estabilidad, permanencia, torpeza, honestidad, rectitud, esmero y equilibrio.

### Análisis visual de la imagen

La diapositiva incluye imágenes de Mario. El marco cuadrado y la composición sirven para asociar esta figura con estabilidad, estructura y permanencia.

---

## Página 42

# Interfaz del VideoJuego

## El triángulo Equilátero

Es una figura estable, con tres puntos de apoyo, uno en cada vértice, aunque no es tan estático como el cuadrado.

Puede tener un fuerte sentido de verticalidad siempre que lo representemos por la base. Se le asocian significados de acción, conflicto y tensión, tiene dirección diagonal.

### Análisis visual de la imagen

La imagen incluye triángulos amarillos y una escena con pirámides. Refuerza la relación del triángulo con dirección, tensión, verticalidad y acción.

---

## Página 43

# Interfaz del VideoJuego

## Elementos de Relación

La dirección, posición, espacio y gravedad, son los elementos que gobiernan la ubicación y la interrelación de las formas en un Diseño.

### Análisis visual de la imagen

La imagen muestra cuatro ejemplos visuales: dirección, posición, espacio y gravedad. Cada uno representa cómo una forma puede comunicar orientación, ubicación, relación espacial o peso visual.

---

## Página 44

# Interfaz del VideoJuego

## Color

Es una percepción visual que se genera en el cerebro al interpretar las señales nerviosas que le envían los foto receptores de la retina del ojo y que a su vez interpretan y distinguen las distintas longitudes de onda que captan de la parte visible del espectro electromagnético.

---

## Página 45

# Interfaz del VideoJuego

## Propiedades visuales del color

El color define la forma y los contornos de los objetos, comunica sentimientos, evoca sensaciones, emociones y estados de ánimo.

El color posee propiedades que pueden definirse y medirse.

Las combinaciones cromáticas son múltiples, por ello los términos utilizados para definir un color son:

- la luminosidad,
- la saturación,
- el tono.

---

## Página 46

# Interfaz del VideoJuego

## La luminosidad

Es el brillo o valor del color. Se refiere al grado de claridad o de oscuridad de un color.

## Saturación

Es el grado de pureza de un color respecto al gris.

## El tono o matiz

Es el color mismo. Es la cualidad que define la mezcla de un color con blanco y negro.

Según su tonalidad se puede decir que un color es rojo, amarillo, verde, etc.

---

## Página 47

# Interfaz del VideoJuego

El círculo cromático es una de las maneras más simples de ordenar los colores para su estudio.

Esta ordenación permite que cada color esté situado justo enfrente de su complementario. Al mismo tiempo los secundarios están rodeados de los primarios que lo han producido.

---

## Página 48

# Interfaz del VideoJuego

### Análisis visual de la imagen

La imagen muestra una clasificación básica de colores. Aparecen colores primarios como rojo, azul y amarillo, y colores secundarios como violeta, naranja y verde. Sirve para comprender la relación entre colores primarios y secundarios.

---

## Página 49

# Interfaz del VideoJuego

## Modelo RGB

El modo RGB asigna un valor de intensidad a cada píxel que oscile entre 0 (negro) y 255 (blanco) para cada uno de los componentes RGB de una imagen en color. Cuando los valores de los tres componentes son idénticos, se obtiene un matiz de gris. Si el valor de todos los componentes es de 255, el resultado será blanco puro y será negro puro si todos los componentes tienen un valor 0.

---

## Página 50

# Interfaz del VideoJuego

## Propiedades sensoriales del color

Los aspectos sensoriales del color, se refieren a los colores y a las combinaciones de colores que despiertan ciertas respuestas emocionales.

Dentro de las propiedades sensoriales del color se encuentra por ejemplo la temperatura del mismo.

La impresión cálida o fría que detectamos en un color se crea por la asociación de éste con una sensación térmica determinada.

---

## Página 51

# Interfaz del VideoJuego

## La importancia del color en los diseños

El color es uno de los medios más subjetivos con el que cuenta el diseñador. Dado percepción del color es la parte simple más emotiva del proceso visual, puede emplearse para expresar y reforzar la información visual.

Tiene mucho poder de atracción o rechazo dependiendo del uso que se le dé.

Los colores también pueden transmitir sensación de movimiento.

---

## Página 52

# Interfaz del VideoJuego

## La visión perceptual

La percepción pertenece al mundo interior individual, es el proceso psicológico de la interpretación y el conocimiento de las cosas y los hechos.

Desde fines de siglo diecinueve hasta mediados del veinte, el desenvolvimiento de la psicología creó la base de la psicología de la forma. El conjunto de principios y leyes que de ella emergen, se funden en la teoría de la forma o teoría de la Gestalt.

---

## Página 53

# Interfaz del VideoJuego

El cerebro humano organiza las percepciones como totalidades (Gestalts) de acuerdo con ciertas leyes a las que denominaron "leyes de la percepción".

Tendemos a agrupar figuras de acuerdo a sus propiedades y a la manera que están dispuestas.

Estas leyes enuncian principios generales, presentes en cada acto perceptivo demostrando que el cerebro hace la mejor organización posible de los elementos que percibe, y asimismo explican cómo sucede esto a través de varios principios.

---

## Página 54

# Interfaz del VideoJuego

## Ley de proximidad

Cuando las partes de una totalidad reciben un mismo estímulo, se unen formando grupos en el sentido de la mínima distancia. Esta ordenación se produce de modo automático. Sólo por una resistencia del perceptor, o por otra ley contradictoria, puede anularse esta lectura.

### Análisis visual de la imagen

La imagen muestra grupos de puntos/círculos organizados por cercanía. El observador percibe columnas o conjuntos porque los elementos próximos tienden a agruparse visualmente.

---

## Página 55

# Interfaz del VideoJuego

## Ley de igualdad o equivalencia

Las partes que componen el campo visual se atraen mutuamente por su grado de igualdad.

Las figuras tienden a agruparse cuando hay cierta similitud entre ellas. Esta similitud puede ser por tamaño, color, dirección o forma.

Si las desigualdades están basadas en el color, el efecto es más sorprendente que en la forma.

---

## Página 56

# Interfaz del VideoJuego

## Ley de igualdad o equivalencia

---

## Página 57

# Interfaz del VideoJuego

## Ley de Prägnanz o ley de la buena forma

Prägnanz quiere decir "forma que transporta la esencia de algo".

---

## Página 58

# Interfaz del VideoJuego

La ley de la buena forma se basa en la observación de que el cerebro intenta organizar los elementos percibidos de la mejor forma posible, esto incluye el sentido de perspectiva, volumen, profundidad etc.

El cerebro prefiere las formas integradas, completas y estables.

Esta ley de alguna manera involucra a otras leyes, ya que el cerebro prefiere también formas cerradas y /o continuas o simétricas, con buen contraste es decir, definidas.

---

## Página 59

# Interfaz del VideoJuego

## Ley de la concentración

Los elementos que se organizan alrededor de un punto central, tienen un mayor peso visual.

---

## Página 60

# Interfaz del VideoJuego

## Ley de la dialéctica

Para identificar una figura, es necesario separarla del fondo. La figura se separa del fondo por medio del contorno, dando una sensación de cercanía.

---

## Página 61

# Interfaz del VideoJuego

## Ley del cerramiento

Las líneas que circundan una superficie son captadas más fácilmente como unidad o figura, que aquellas otras que se unen entre sí. Las circunferencias, cuadriláteros o triángulos producen el efecto de cerramiento.

### Análisis visual de la imagen

La imagen muestra figuras incompletas que el cerebro tiende a completar. Sirve para explicar que una forma puede percibirse como unidad aunque no tenga todos sus bordes dibujados.

---

## Página 62

# Interfaz del VideoJuego

## Ley de la experiencia

La "ley de la experiencia" o "ley de familiaridad" establece que percibimos e interpretamos las imágenes y la información en función de nuestras experiencias previas.

### Análisis visual de la imagen

La imagen presenta figuras incompletas o ambiguas que pueden interpretarse gracias a experiencias previas. El jugador o usuario reconoce patrones conocidos aunque la figura no esté completa.

---

## Página 63

# Interfaz del VideoJuego

## Ley de continuidad

Esta ley tiene como características propias la manera de presentarnos las formas. Estas se nos muestran de manera incompleta, inconclusas, como abreviatura o esquemas de fácil interpretación.

Se tiende también a agrupar elementos que se mueven del mismo modo o en la misma dirección.

---

## Página 64

# Interfaz del VideoJuego

## Ley de la totalidad

El todo es diferente y es más que la suma de sus partes. Una composición se percibe como un todo estructurado.

---

## Página 65

# Interfaz del VideoJuego

### Análisis visual de la imagen

La imagen muestra una escena de videojuego de acción con puntaje, personaje, escenario y elementos de interfaz. Sirve para observar cómo la pantalla comunica estado del juego, objetivos, peligro y progreso.

---

## Página 66

# SONIDO PARA VIDEO JUEGOS

Andrés Pastorini - Alvaro Martínez  
TDIVJ2D – Tecnólogo Informático

---

## Página 67

# SONIDO

El sonido en los videojuegos cumple funciones esenciales, desde la ambientación emocional hasta la comunicación funcional.

Es un componente clave en la experiencia inmersiva de los videojuegos.

No solo ambienta, sino que comunica información al jugador, mejora la narrativa, refuerza emociones y proporciona retroalimentación funcional.

---

## Página 68

# SONIDO

## Función del sonido en la experiencia del jugador

El sonido permite:

- Alertar sobre peligros.
- Confirmar acciones.
- Reforzar emociones.
- Crear tensión.
- Mejorar la inmersión.
- Guiar al jugador sin necesidad de texto.

---

## Página 69

# SONIDO

## Tipos de sonido

- **Música de fondo:** Refuerza el estado emocional del juego.
- **Efectos de sonido:** Aportan información inmediata (disparos, saltos, puertas que se abren).
- **Sonido diegético:** Es parte del mundo del juego (radio, pasos del personaje).
- **Sonido no diegético:** Es externo al mundo del juego, como la música de fondo en un menú.
- **Narración o diálogos:** Refuerzan el contexto y la historia.

---

## Página 70

# SONIDO

## ¿Por qué es importante el sonido?

- **Informa:** Ayuda a detectar eventos invisibles (enemigos fuera de pantalla, trampas).
- **Refuerza emociones:** Genera tensión, alivio, sorpresa, etc.
- **Apoya la jugabilidad:** Confirma acciones como disparos, impactos, recogida de objetos.
- **Construye identidad:** Cada juego tiene una “firma sonora”.

---

## Página 71

# SONIDO

## Buenas prácticas de diseño de sonido en videojuegos

- Usa sonidos que comuniquen significado claro sin necesidad de ver la pantalla.
- Evita sobrecarga sonora: muchos efectos al mismo tiempo pueden confundir.
- Ajusta el volumen relativo entre música, efectos y voces.
- Utiliza el silencio estratégicamente para generar tensión.
- Prueba cómo se escuchan los sonidos en diferentes dispositivos (auriculares, parlantes, móviles).

---

## Página 72

# FEEDBACK

El feedback es toda respuesta del sistema hacia el jugador para confirmar o reaccionar a una acción.

Es decisivo para la jugabilidad, ya que permite al jugador entender si sus acciones fueron reconocidas y con qué efecto.

Sin feedback, el jugador no sabría si su acción fue reconocida, exitosa, fallida o relevante.

---

## Página 73

# FEEDBACK

## Tipos de Feedback

| Tipo | Descripción | Ejemplo |
|---|---|---|
| Visual | Lo que cambia en la pantalla tras una acción | Pantalla tiembla al recibir daño |
| Sonoro | Sonido asociado a la acción del jugador o del entorno | Sonido metálico al recoger una moneda |
| Háptico | Vibración o fuerza física sobre el dispositivo | Vibración al chocar contra una pared |
| UI (Interfaz) | Cambios en botones, menús, indicadores | Botón se resalta al pasar el cursor |
| Narrativo | Reacción de personajes o del mundo | Un NPC dice “¡Gracias!” tras ayudarlo |

---

## Página 74

# FEEDBACK

## Características de un buen feedback

- **Inmediato:** Reacciona en el mismo momento.
- **Consistente:** Se repite con coherencia ante la misma acción.
- **Comprensible:** El jugador entiende lo que ocurrió.
- **Adecuado al contexto:** No exagerado ni demasiado sutil.

---

## Página 75

# FEEDBACK

## ¿Por qué es importante el feedback?

**Confirmación de acciones:** Sabes que hiciste algo y fue registrado.

**Sensación de control:** El juego reacciona a ti.

**Orientación en el gameplay:** Indica errores, objetivos cumplidos o advertencias.

**Refuerzo emocional:** Aumenta la inmersión y el disfrute.

---

## Página 76

# FEEDBACK

## Actividad 1

Elija un videojuego y describa 3 tipos de feedback que identifique: uno visual, uno sonoro y uno háptico (si aplica).

¿Cómo cambia la experiencia del jugador cuando el feedback no está bien implementado?

¿Qué tipo de feedback considera más importante en su experiencia como jugador?

---

## Página 77

# FEEDBACK

## Actividad 2: Analizar la comunicación del videojuego hacia el usuario

Elija un videojuego conocido y analizar cómo comunica información al jugador.

Debe identificar:

- ¿Qué información se muestra en pantalla?
- ¿Qué sonidos ayudan al jugador?
- ¿Qué tipos de feedback aparecen?
- ¿Cómo sabe el jugador que hizo algo bien?
- ¿Cómo sabe el jugador que cometió un error?
- ¿El feedback es claro o confuso?
- ¿Qué se podría mejorar?

---

## Página 78

# FEEDBACK

## Preguntas para discusión en clase

1. ¿Puede un videojuego ser difícil pero tener buen feedback?
2. ¿Qué pasa si un juego no muestra claramente la vida del jugador?
3. ¿El sonido puede reemplazar información visual?
4. ¿Qué tipo de feedback es más importante en juegos móviles?
5. ¿Cómo cambia el feedback entre un juego de terror y un juego de carreras?

---

## Página 79

# Referencias

- Estudio de diseño sobre la construcción de idea y su aplicación en la realidad.  
  Guillermo Gonzáles Ruiz
- Game Interface Design  
  Brent Fox
- http://www.slideshare.net/hornelas/leyes-de-la-gestalt

---

## Página 80

### Análisis visual de la imagen

La imagen final muestra una aventura gráfica estilo pixel art en un barco. En la parte inferior aparece una interfaz con verbos de acción y objetos de inventario. Se observan acciones como abrir, cerrar, empujar, caminar, mirar, usar, hablar, recoger, dar, encender y apagar; además de objetos como una nota, tarjeta, brújula magnética, folleto y otros elementos. La imagen refuerza la importancia de una interfaz que permita al jugador decidir acciones y comprender qué puede hacer dentro del mundo del juego.

---

## Nota de validación

Este Markdown corresponde al PDF nuevo de 80 páginas. Se mantuvo el contenido textual de las diapositivas y se agregaron descripciones de las imágenes relevantes para que el material pueda estudiarse sin depender únicamente del PDF original.
