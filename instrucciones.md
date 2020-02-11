# Instrucciones

Sigue y completa cada uno de los pasos mencionados abajo.
Utiliza elementos HTML semánticos. Hay una chuleta en este mismo proyecto.
Puedes hacerme preguntas, pero daré indicaciones sin decir cómo hacerlo.
Inténtalo, busca en internet, pero intenta no copiar :)
Cuando acabes, haz un zip con toda la carpeta y envíamelo por Slack solo a mi

---

1. Cambia el título del documento para que aparezca tu nombre en la pestaña del navegador

2. Añade el archivo de estilos, que se encuentra en la carpeta "assets > css", al documento
    2.1 [CSS]: Añade un estilo que quite los márgenes y paddings al elemento cuerpo del documento (body)
    2.2 [CSS]: Añade el color de fondo "#b7e3e4" al cuerpo del documento
    2.3 [CSS]: El documento deberá tener un tamaño de fuente base de "18px" y un alto de línea de "1.25"
    2.4 [CSS]: El titular principal deberá tener un tamaño de fuente de "4.5rem"
    2.5 [CSS]: El titular secundario deberá tener un tamaño de fuente de "3rem"

3. Crea 3 secciones:
    3.1 Una cabecera
        3.1.1 Añade un elemento de navegación
        3.1.2 Añade un listado desordenado con 5 items dentro de esta navegación
        3.1.3 Crea un link o ancla en cada item del listado, 2 de ellos deben abrir una pestaña nueva
        3.1.4 [CSS]: Deben visualizarse con columnas y sin decoración ("·")
        3.1.5 [CSS]: Posiciona de manera absoluta toda la cabecera y que ocupe todo el ancho

    3.2 Un contenido principal
        3.2.1 Crea una primera sección llamada Billboard
        3.2.2 [CSS]: Añade la imagen de fondo que se encuentra en la carpeta "assets > img"
        3.2.3 [CSS]: Esta sección deberá tener un alto mínimo de "100vh" (Viewport Height)
        3.2.4 [CSS]: La imagen debe cubrir todo el contenedor, no repetirse y estar centrada
        3.2.5 Debajo de esta sección, crea 3 secciones con un ID correspondiente
        3.2.6 [CSS]: Dale padding arriba y abajo de "2rem" a todas las secciones
        3.2.7 [CSS]: Cada sección deberá tener un alto mínimo de "40vh" (Viewport Height)
        3.2.8 [CSS]: Modifica el color de fondo a "#167c80" y el color de fuente a "#fff" solo a la sección par
        3.2.9 Añade un titular y un párrafo de texto a cada sección, el titular del billboard deberá ser el principal
        3.2.10 [CSS]: En esta sección distinta: centra el texto, añade una imagen debajo del párrafo y como máximo deberá tener un ancho del 60% de su contenedor

    3.3 Un footer
        3.3.1 Añade un texto de copyright
        3.3.2 [CSS]: Dale color de fondo "#1b1d1c" y color de fuente "#fff"
        3.3.3 [CSS]: Dale padding arriba y abajo de "1rem"
        3.3.3 [CSS]: Centra el texto

4. Más a más
    4.1 Añade una tipografía de Google Fonts
        4.1.1 Si tienes tiempo, utiliza 2. Una solo para los titulares y la otra para el resto
    4.2 [CSS]: Centra el contenido del billboard en el medio del contenedor
    4.2 [CSS]: Como máximo, este contenido del Billboard, deberá tener "35rem" de ancho
    4.3 [CSS]: Todo el contenido del resto de secciones deberá tener "75rem" de ancho como máximo
    4.4 [CSS]: Pon una capa con color de fondo "rgba(0, 0, 0, .75)" por encima de la imagen del Billboard, pero por debajo del texto
        4.4.1 Si puedes hacerlo con un pseudo-elemento, mejor