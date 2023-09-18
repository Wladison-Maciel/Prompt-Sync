<h2 align = "center">
  Bienvenidos a mi tutorial 😃
</h2>

<div align = "center">

![Stars](https://img.shields.io/github/stars/Wladison-Maciel/Prompt-Sync.svg)
![Watchers](https://img.shields.io/github/watchers/Wladison-Maciel/Prompt-Sync.svg)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/Wladison-Maciel/Prompt-Sync/main)
![Follows](https://img.shields.io/github/followers/Wladison-Maciel.svg?style=social&label=Follow&maxAge=2592000)
</div>

<div align = "center">
  
[- Comenzar](#Qué-aprenderé-aquí??)
[- Requerimientos mínimos](#Requerimientos-mínimos)
[- Crear](#Crear)
[/Abierto](#Abierto)
[/Ejecutar](#Ejecutar)
[- Instalación de PromptSync](#Instalación-de-PromptSync)
[- Terminando el tutorial](#Terminando-el-tutorial)
[- Explicación](#Explicación)
[- Dudas](#Dudas)

</div>

## Qué aprenderé aquí? 🤷‍♂️

<p>
  En este repositorio te enseñaré cómo hacer un código Js (JavaScript) donde hay una entrada de datos común, usando la terminal VScode sin usar un sitio web CSS/HTML. El problema encontrado fue que en Visual Studio Code no es posible recibir valores desde el teclado para la entrada de datos convencional, al igual que en Python y Java.
</p>

## Requerimientos mínimos:

<p>
  
  * 1 Debes haber instalado Node.js para que podamos usar la Biblioteca
  * 2 Visual Studio Code debe instalarse junto
  * 3 En Visual Studio Code, instale las extensiones: Code Runner, JavaScript (ES6) code snippets
 
</p>

* ### Node.JS - Visual Studio Code
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<h3>
  
  Verifique que Node.JS esté instalado de la siguiente manera:
</h3>

<h4>

  - 1 - Abra el símbolo del sistema de su computadora
  - 2 - Escriba "nodo" como se muestra en la imagen.
  - 3 - Si aparece la versión de Node, significa que todo está bien.
</h4>

<img src="https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/bcb1389f-d819-417b-9f03-eef1dc392f27"/>


## Crear

<p>
  Para empezar, debemos crear una carpeta donde se almacenará nuestro código JavaScript.
</p>

<h4>

  - 1 - Abre tu explorador de archivos
  - 2 - Crea una carpeta (cualquier nombre), en este caso el nombre de la carpeta creada fue: "PromptSyncGit"
</h4>


<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/ff67dec7-722a-4315-b14f-ca9fe4d9c007" />

## Abierto

<p>
  Ahora abra su Visual Studio Code y desde allí, abra la carpeta que creó
</p>

<h4>

  - 1 - Ir al archivo
  - 2 - Abre la carpeta
  - 3 - Seleccione la carpeta creada que fue: "PromptSyncGit"
  - 4 - Finalmente, crea un archivo JavaScript, con un nombre de tu elección, ejemplo en la imagen: "App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/277a9ed6-0f2c-46e0-a25a-071f89cb711d" />

## Ejecutar

<p>
  Antes de ejecutar la aplicación debemos agregar una línea de código muy importante
</p>

<h4>
  
  - 1 - Con la carpeta fuente abierta y el archivo JavaScript creado, ingresará el siguiente código
  - 2 - Dejándolo siempre en la primera línea de código.
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

## Instalación de PromptSync

<p>
  Hemos llegado a la guinda del pastel, aquí es donde todo cambia
</p>

<h4>
  
  - 1 - Inicialmente, si miras la carpeta que creaste, solo tendrás el archivo JavaScript, como en la primera foto a continuación: App.js
  - 2 - En el espacio de código, vaya a la terminal
  - 3 - Nueva terminal
  - 4 - Nota: Si la terminal no se abre en la carpeta donde está el código, puedes usar el comando "cd"+{NombreDelDirectorio}
  - 5 - Ahora en la terminal escriba el siguiente comando: npm install Prompt-Sync
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/220153a9-1106-4733-94e5-cadecd607f71"/>

<h4>
  Después de escribir el comando, puede ver que se han agregado una nueva carpeta y archivos a la carpeta de su proyecto, o todo puede estar contenido en una sola carpeta.
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/72f54900-4f52-44bd-b2db-711fcdb30bb2"/>

## Terminando el tutorial

<p>
  Con todo listo, creé un código simple con ingreso de datos y su retorno.
</p>

<h4>
  - 1 - En la terminal escriba "node"+ nombre de archivo, que sería JavaScript, de la siguiente manera: "node App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/abf36827-b224-4279-98ab-4b757d1baa53" />

## Explicación:

<h4>
 Qué significa realmente esta línea de código?
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

<p>
  La variable de entrada puede ser un nombre de su elección, pero es lo que entra en su código cuando hay entrada de datos.
</p>

<h4>
  Ejemplo:
</h4>

``` JS
const entradaDados = require('prompt-sync')({sigint: true});
```

``` JS
let idade = Number.parseInt(entradaDados("Digite um número: "));
```

<h4>
  Qué significa requerir?
</h4>

``` JS
require('prompt-sync')
```

<p>
  Esto es muy simple, requerir es realizar una solicitud de los datos que se descargaron desde la sincronización inmediata.
</p>

<h4>
  Y el sigint: true?
</h4>

``` JS
({sigint: true});
```

<p>
  Te dice si la condición de ingreso de datos es verdadera o falsa, si vas ahora y cambias de "verdadero" a "falso", el código no podrá capturar si hubo un ingreso de datos, o mejor dicho, lo negará. entrada
</p>

<div align = "center">

## Referencia utilizada para el tutorial:

<p>
  En el siguiente enlace se encuentra el vídeo que se utilizó para producir este repositorio.
</p>

https://youtu.be/1TzCYVTC9tc?si=zmhZPPBLgPT5kwXa

![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)

  
## Dudas:

<p>
  Si no pudo hacerlo o tiene alguna pregunta sobre el asunto, comuníquese conmigo utilizando cualquiera de los métodos a continuación:
</p>

<a href="https://www.instagram.com/eiwladison/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
<a href="mailto: franciscowladison97@gmail.com" target="_blank"><img src= "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
<a href="mailto: franciscowladison97@outlook.com" target="_blank"><img src= "https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />

<h3 align = "center">
  Gracias por venir aquí, nos vemos en el próximo tutorial 😀👍
</h3>

</div>


<div align = "center">

#### _✮ LEER EN [OTROS IDIOMAS](Translation/Translation.md):_

<kbd>[<img title="Português" alt="Português" src="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/br.svg" width="22">](README.br.md)</kbd>
<kbd>[<img title="Inglês" alt="Inglês" src="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/us.svg" width="22">](README.en.md)</kbd>
  
</div>
