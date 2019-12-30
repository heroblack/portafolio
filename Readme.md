# Desarrollo Web

## Html

### Dom

DOM es el acrónimo de Document Object Model o Modelo de documento, y es la manera en que se representa el contenido del documento, de manera similar a un árbol de nodos.

A continuación, un ejemplo sencillo de la estructura del DOM:

```html
<html>
  <body>
    <h1>Desarrollo web</h1>
  </body>
</html>
```

### Etiquetas

[etiquetas](https://ibb.co/kBbtNnD)

```html
<!--
Etiquetas
Las etiquetas son la representación básica de la información en un documento html. Sirven para crear y organizar el contenido.
La sintaxis general de una etiqueta es:-->

<nombre>contenido</nombre>
<!-- Hay ciertas etiquetas que tienen una sintaxis diferente, ya que se cierran en sí mismas; es decir, no tienen etiqueta de cierre: -->

<nombre />
Algunas de las etiquetas más conocidas y usadas son:

<!-- Etiquetas de cabecera (head):

doctype: indica al navegador el tipo de documento que se está mostrando.
html: es la etiqueta que envuelve todo el documento
head: es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.
Etiquetas del cuerpo del documento (body):

article: diferencia partes del contenido que pueden vivir por sí mismas.
nav: para hacer menús de navegación.
aside: contenido menos relevante, como publicidad, etc.
section: sirve para diferenciar las secciones principales del contenido.
header: cabecera del documento.
footer: pie de página del documento.
h1 - h6: títulos de nuestro sitio web.
table: tablas de contenidos, similar a la estructura de las hojas de calculo.
ul y ol: listas de items.
div: cualquier división para organizar el contenido. -->
```

### Estructura web

El proyecto que desarrollaremos se trata de un Portafolio Personal, incluirá una cabecera, navegación, un hero (área visual con información destacada) un área de proyectos y otra para eventos, y finalmente un pié de página con un formulario de contacto y enlaces a redes sociales.

El archivo index.html es el archivo que el navegador abre por defecto al acceder a un directorio en un servidor web.

La estructura básica de un archivo html es la siguiente:

```html
<html>
  <head>
    <title> Título de la página title>
  head>
  <body>
    <header> Cabecera del contenido header>
    <section> Sección principal section>
    <section> Otra sección section>
    <footer> Pié de página del documento footer>
  body>
html>
```

las etiquetas a usar:

h1 a h6: son etiquetas para indicar títulos con un estilo que destaca del resto.
article: es la parte de nuestro contenido que puede vivir por sí mismo. Pueden haber tantos artícle como proyectos o eventos tenga nuestro portafolio.
p: define el texto de un párrafo.
small: aplica una apariencia de texto reducido en tamaño.
strong: aplica al texto un formato de negritas.
a: corresponde a un ancla o enlace a una url interna o externa del documento.
img: con esta etiqueta podemos enlazar imágenes en el documento.
figure: le da un contexto semántico a las imágenes.

### Formularios

Los Formularios en html son unidades de información que nos permiten recolectar información para enviarlos al propietario del website o a un servicio externo. Esta formado por dos partes o contextos: una parte donde se hace el ingreso y modelación de esos datos (en el frontend), y otra parte que se encarga de enviar, procesar y almacenar esos datos (en el backend).

Los formularios se crean con la etiqueta form. El atributo principal de un formulario es action, ya que contiene la ruta a la que serán enviados los datos recolectados.

Hay diversos elementos html que permiten la captura o recolección de datos, aunque generalmente se usan los elementos creados con la etiqueta input. Los inputs también sirven para crear botones, aunque existe una etiqueta especial para ésto llamada button… El atributo principal de los inputs es type, que indica el tipo de comportamiento o dato que se espera recibir.

Los elementos creados con la etiqueta label muestran un texto que se puede asociar con un input para darle mayor significado al campo, principalmente cuando no se usa el atributo placeholder.

### Formas de agregar estilo

Formas de agregar estilos a HTML
Hay tres opciones para incluir estilos que definan la apariencia de tu html:

Estilos en línea: se definen directamente en el elemento html que quieres estilizar, se agregan con el atributo style.
Estilos con el tag Style: regularmente este tag se incluye dentro de la etiqueta head del html.
Estilos enlazados desde un archivo css externo: utilizando la etiqueta link que nos permite enlazar recursos externos.
A CSS, se le llama hojas de estilos en cascada porque los estilos que se definen para una página, se van aplicando de arriba hacia abajo, y de lo más general a lo más particular, teniendo prioridad lo más particular. Esto es, los estilos que prevalecen son los que han sido definidos en línea, luego los que fueron definidos mediante la etiqueta style en la cabeza o cuerpo del html, y por último los estilos definidos en archivos externos enlazados con la etiqueta link. Esta prioridad se puede alterar al usar el modificador \*\*!important"" en la definición de algún estilo en particular, aunque esto no es recomendado.

# Unidades de Medida y Colores

Hay varias unidades de medida con las que se puede trabajar en CSS: %, em, rem, px, pt, fr, vw, vh
Las medidas más comunes y utilizadas son los pixeles. Un pixel es la menor unidad homogénea en color que forma parte de una imagen digital. Es la unidad más práctica y fácil de utilizar y manipular, y es la que utilizaremos mayormente en este curso.

Los colores en CSS pueden ser representados de al menos tres formas diferentes:

Representados con palabras claves para cada color, como: red, green, blue, pink, yellow, black, etc.
Usando la composición de tres colores (rojo, verde y azul): para esto podemos usar notación exadecimal o las funciones rgb() y rgba().
Usando la composición mediante valores de Matiz, Saturación y Luminosidad con: hls() y hsla().
h=>hue (0 a 360)
S=>saturation (0 a 100) 100 => full color < 100 tiende a ser gris
l=>light (0 a 100) 100=> blanco 50=>full color 0 => negro
a=>alpha
Con respecto a los valores hexadecimales, cada color está representado por 6 digitos, que representan 3 pares de hexadecimales: FF - FF - FF (rojo, verde y azul), en el que cada par puede tomar valores hexadecimales entre 00 y FF. Cada uno equivale a valores decimales entre 0 y 255, donde 0 es la ausencia de ese color y 255 la mayor cantidad disponible. De esta manera cada color se forma por la combinación de diferentes proporciones de rojo, verde y azul.

#000000 es equivalente a Negro
#FF0000 es equivalente a Rojo
#00FF00 es equivalente a Verde
#0000FF es equivalente a Azul
#FFFFFF es equivalente a Blanco

### Background

Backgrounds de color e imagen
Algunas de las propiedades de css relacionadas con la apariencia del fondo de los elementos son:

background: con la que se puede indicar un color, o usada de manera extendida, puede incluir color de fondo, url de la imagen, posición y modo de repetición de la imagen.
background-image: contiene la url que se usará como fondo del elemento.
background-color: indica el color de fondo, se puede usar en combinación con la imagen.
background-size: se puede indicar en valores de alto y ancho o en alguna de las palabras claves permitidas: cover o contain.
background-position: indica la posición de la imagen dentro del elemento, puede indicarse en unidades o en palabras claves como center, left, top y right.
background-repeat: indica el método de repetición de la imagen de fondo, puede ser: repeat, repeat-x, repeat-y o no-repeat.

### bordes

Todos los elementos html admiten la propiedad de css border, que define la apariencia que tendrá el contorno del componente.
El borde puede ser de muchos estilos, y al igual que las propiedades margin y padding que aprenderás más adelante, a los bordes se les puede colocar estilos tanto de forma general con la propiedad border, como de acuerdo al lado del elemento que se indique: border-top, border-right, border-bottom y border-left.

Con la propiedad boder-radius se define el redondeado de las esquinas de los ;[bordes](https://border-image.com/).

```css
/* border-color: gray;
border-width: 1px;
border-style: dotted;
border: <width> <style> <color>  */
div {
  border: 5px solid red;
  border-top-width: 15px;
  border-top-color: orange;
  border-top-style: solid; /* Esta propiedad no es necesaria (se hereda) */
}

div {
  border-radius: 25px; /* Primer formato */
  border-radius: 25% 50%; /* Segundo formato */
  border-radius: 50px 25px 10px; /* Tercer formato */
  border-radius: 25px 0 15px 50px; /* Cuarto formato */
}

div {
  border-radius: 5px 50px / 50px 15px; /* Usando el segundo formato */
}

/* border-top-left-radius:	TAMAÑO	Indica un radio para redondear la esquina superior izquierda.
border-top-right-radius:	  TAMAÑO	Indica un radio para redondear la esquina superior derecha.
border-bottom-left-radius:	TAMAÑO	Indica un radio para redondear la esquina inferior izquierda.
border-bottom-right-radius:	TAMAÑO	Indica un radio para redondear la esquina inferior derecha. */

.borde {
  border-image-width: 24px;
  border-image-source: url(https://i.imgur.com/lC5gBC8.png);
  border-image-slice: 54 85;
  border-image-outset: 6px;
  border-image-repeat: repeat repeat;
}

div {
  border-image: <source> <slice> <width> <outset> <repeat>;
}

div {
  border-image: url(borde.png) 54 85 repeat;
}
```

<<<<<<< HEAD

### Margenes

Los márgenes en CSS son el espacio que separa a los elementos html entre sí. Hay elementos de html que traen márgenes predefinidos (poe defecto) en los estilos propios del navegador como el caso de: body, h1, h2, h3, h4, h5, h6, ol, ul, li, p, y muchos otros.

Cuando hay dos márgenes de elementos diferentes que colindan entre sí, se presenta una situación llamada ““margin collapsing”” en la que el mayor margen de los dos se superpone al otro.

Se puede asignar una medida de margin para los cuatro lados del elemento, o márgenes individuales para cada uno de los lados con: margin-top, margin-right, margin-bottom y margin-left.

Se puede centrar un elemento html colocándole el valor de margin: 0 auto, cuando dicho elemento tiene display block.

### Modelo de caja

El modelo de caja es un concepto teórico de css que representa a cada elemento html en base sus propiedades de: margin, border, padding y dimensiones (alto y ancho).
Para visualizar un elemento html en su representación como modelo de caja debemos irnos a la parte baja de la sección styles del inspector de elementos, o en la sección llamada Computed.

En el modelo de caja, el ancho total de un elemento html equivale a la sumatoria de los valores de: width, padding-left, padding-right, border-left-width, border-right-width. De manera similar aplica para el alto total de cada elemento. Aunque margin-left y margin-right, forman parte del modelo de caja, no se incluyen para el calculo del ancho total.

Con la propiedad box-sizing, y en particular con el valor border-box de esta propiedad, podemos modificar el comportamiento del modelo de caja para que nuestro elemento nunca supere el tamaño máximo que le hayamos definido en width y height. Esta es la opción recomendada para trabajar.

### Tipos de display

Display es la propiedad de css que indica cómo debe ser mostrado un elemento html. Todos los elementos tienen algún tipo de display. Si un elemento no se ve en pantalla es porque seguramente su display es none.

Los valores más comunes que puede recibir la propiedad display son:

block: el elemento intenta abarcar todo el ancho posible.
inline: reduce su tamaño exclusivamente hasta lo que abarca su contenido, descartando las propiedades width y height.
inline-block: combina lo mejor de block e inline, ya que respeta las dimensiones indicadas en las propiedades width y height, pero coloca el elemento en línea (al costado) de elementos hermanos que también tengan display: inline o inline-block.
flex: asume algunas propiedades por defecto que favorecen la alineación de los elementos internos.
grid: similar a flex, asume algunas propiedades por defecto organizando los contenidos en filas y columnas.
none: oculta el elemento.

### Flex

Flexbox se refiere al tipo de display en css que permite un manejo flexible de la alineación, dimensionamiento y distribución de elementos html.

Esta propiedad se aplica a un elemento padre, pero va a afectar principalmente a sus elementos hijos directos. Por defecto, los elementos internos quedan alineados unos seguidos de los otros. El comportamiento del modelo de caja de estos elementos hijos también se ha modificado, ya que pierden el efecto de su propiedad margin.

Los elementos hijos de un padre con propiedad display: flex tienen a su disposición algunas nuevas propiedades que aportan mayor flexibilidad a su comportamiento. Una de estas propiedades es flex-shrink que, junto a la propiedad flex-wrap del padre, permite adaptar y distribuir los elementos de manera dinámica en el espacio horizontal disponible hasta ocupar todo el espacio, y luego pasar a ocupar dinamicamente las siguiente filas hacia abajo.

Flexbox se refiere al tipo de display en css que permite un manejo flexible de la alineación, dimensionamiento y distribución de elementos html.

Esta propiedad se aplica a un elemento padre, pero va a afectar principalmente a sus elementos hijos directos. Por defecto, los elementos internos quedan alineados unos seguidos de los otros. El comportamiento del modelo de caja de estos elementos hijos también se ha modificado, ya que pierden el efecto de su propiedad margin.

Los elementos hijos de un padre con propiedad display: flex tienen a su disposición algunas nuevas propiedades que aportan mayor flexibilidad a su comportamiento. Una de estas propiedades es flex-shrink que, junto a la propiedad flex-wrap del padre, permite adaptar y distribuir los elementos de manera dinámica en el espacio horizontal disponible hasta ocupar todo el espacio, y luego pasar a ocupar dinamicamente las siguiente filas hacia abajo.

## propiedades padre

```css
 {
  justify-content: center;
  flex-direction: row-reverse;
  align-items: flex-end;
  align-content: flex-start;
  formalargaflex-direction: column;
  flex-wrap: wrap;
  formacortaflex-flow: column wrap;

  flex-flow: column-reverse wrap-reverse;
  align-items: flex-end;
  justify-content: center;
  align-content: space-between;
}
/* propiedades hijo */
 {
  align-self: center;
  order: 2;
  flex-shrink: 0;
}
```

### reseteo de estilos

```css
html {
  box-sizing: border-box;
}
,
::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
```

### Response designed

CONCEPTOS A TENER EN CUENTA
Viewport: área visible del navegador
Portrait: vertical
Landscape: horizontal
**Mobile first: **comenzar web con enfoque para dispositivos moviles
**Desktop first: **comenzar web con enfoque para computadoras
¿Cúal es mejor? Técnicamente Mobile First por la cantidad de codigo que va a ir leyendo segun el dispositivo en el que se ejecute
[ver diseños]('https://mediaqueri.es/')

```html
patrones: * Mostly fluid * Colocacion de columnas * Layout shifter * Tiny
Twearks * Off Canvas Diseño Vertical (Portrait) Diseño Horizontal (Landscape)
Mobile First: Empezar un website desde la menor resolucion soportada Desktop
first: Empezar un website desde la mayor resolucion soportada em : Unidad
relativa al tamaño de fuente especificada mas cercano
<nav>
  font-size: 16px
  <ul>
    font-size: 2em; =>32px
    <li>
      font-size: 1em =>32px <a> font-size:.5em =>16px padding:2em =>32px</a>
    </li>
  </ul>
</nav>

rem: unidad relativa al tamaño de fuente especificada en el ascentro mas lejana
(html o body) vw / vh : unidad relativa porcentual con respecto al viewport
```

### Media Queries

min-width = desde
max-width = hasta

```css
@media media type and (condicion);

@media media screen and (max-width: 768px) and (min-width: 480px) {
}
```

```text
Mobile first

@ media screen and (min-width:320 px){}
@ media screen and (min-width:480 px){}
@ media screen and (min-width:768 px){}
@ media screen and (min-width:1024 px){}
min-width: desde
medidas iniciales en la que van las pantallas

Desktop first

@ media screen and (max-width:1024 px){}
@ media screen and (min-width:768 px){}
@ media screen and (min-width:480 px){}
@ media screen and (min-width320: px){}
max-width: hasta
medidas maximas que las pantallas pueden alcanzar, por como dice su nombre suelen ser medidas ´para ordenadores, o pantallas grandes
```

### Video Iframe responsive

calculos de proporcion para videos 16: (Horizontal)
h\*100 / w

videos verticales:
W\*100 / h

calc(315*100/560)*1%

```html
<div class="flexible-video">
  <iframe
    class="youtube-video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/LoKvxCSZw5w"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  ></iframe>
</div>
```

```css
.flexible-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* h*100/w  */
  background: blue;
}
.youtube-video {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

# Grid Layout

```text
Css Grid Layout. (Mis apuntes de la clase).
En css podemos interpretar cualquier cosa como una caja y así darle estilos.

-Grid Container: Nos permite poner las especificaciones ahí, facilitándonoslo de esa manera el trabajo.

-Grid Item: Es donde se guarda el contenido dinámico que se haga dentro de la pagina. Este es hijo directo del Grid Container.

-Grid line: son las lineas divisoras, tanto horizontales como verticales.

-Grid Track: Son las filas y columnas.

-Grid Cell: Es el espacio donde dos lineas horizontales y dos lineas verticales se juntan.

-Grid Area: Es la suma de n grid cells.
```

# Multiple ssh key

```bash
=======
ssh-copy-id -i ~/.ssh/heroblack hackchan@192.168.18.22
ssh-keygen -f ~/.ssh/heroblack -t rsa -b 4096 -C “inge.fabio.rojas@gmail.com”

ssh-keygen -f ~/.ssh/hackchan -t rsa -b 4096 -C “fabiorojas7@gmail.com”

eval `ssh-agent -s`
#adiciona una entrada de ssh-agent
ssh-add heroblack
ssh-add ~/.ssh/hackchan
#lista una entrada de ssh-agent
ssh-add -l
#elimina todas las entradas de ssh-agent
ssh-add -D
#clonando repositorios
git clone git@heroblack:heroblack/repo_name.git
git clone git@hackchan:hackchan/repo_name.git

#local repo
git remote set-url origin git@hackchan:hackchan/repo_name.git
#remoto
git remote add origin git@hackchan:hackchan/repo_name.git
```

```
 Host hackchan
 HostName github.com
 IdentityFile ~/.ssh/hackchan
 User hackchan
 IdentitiesOnly yes

 Host heroblack
 HostName github.com
 IdentityFile ~/.ssh/heroblack
 User heroblack
 IdentitiesOnly yes

```

# Emmet

```html
ul>li*3>a{menu $}
```

# vscode atajos

```bash
#1. Copiar linea
#Windows y Mac:
Shift Alt Down y Shift Alt Up
#Linux:
Ctrl Shift Alt Down y Ctrl Shift Alt Up

#2. mover linea
Alt Down y Alt Up

#3.Comentariar y descomentariar codigo
Ctrl+K y Ctrl+C o Ctrl+U

#4.Quitar espacios y tabuladores del final
Ctrl+E, CTRL+º
Ctrl+E, S
```

# compresor de imagenes

# [tinypng](https://tinypng.com/)

```txt
 Host hackchan
 HostName github.com
 IdentitiesOnly yes
 IdentityFile ~/.ssh/hackchan
```
