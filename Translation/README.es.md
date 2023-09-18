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
  
  - 1 - Com a pasta do código aberto e com o arquivo JavaScript criado, você vai digitar o seguinte código
  - 2 - Sempre o deixando na 1° linha de código
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

## Instalación de PromptSync

<p>
  Chegamos na cereja do bolo, é aqui que tudo muda
</p>

<h4>
  
  - 1 - Inicialmente se você for olha a pasta que criou, terá somente o arquivo JavaScript, como na foto 1° abaixo: App.js
  - 2 - No espaço de código, vá em terminal
  - 3 - Novo terminal
  - 4 - Obs: Se o terminal não abrir na pasta onde está o código, você pode utilizar o comando "cd"+{NomeDoDiretório}
  - 5 - Agora no terminal digite o seguinte comando: npm install prompt-sync
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/220153a9-1106-4733-94e5-cadecd607f71"/>

<h4>
  Após digitar o comando, você pode ver que na pasta do seu projeto foi adicionado uma nova pasta e arquivos, ou tudo pode estar contido em somente uma pasta
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/72f54900-4f52-44bd-b2db-711fcdb30bb2"/>

## Terminando el tutorial

<p>
  Com tudo pronto, criei um código simples com entrada de dados e o seu retorno
</p>

<h4>
  - 1 - No terminal digite "node"+ nome do arquivo, que seria o JavaScript, da seguinte maneira: "node App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/abf36827-b224-4279-98ab-4b757d1baa53" />

## Explicación:

<h4>
  O que realmente significa essa linha de código?
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

<p>
  A variável entrada pode ser um nome sua escolha, mas ela é quem vai no seu código para quando houver uma entrada de dados
</p>

<h4>
  Exemplo:
</h4>

``` JS
const entradaDados = require('prompt-sync')({sigint: true});
```

``` JS
let idade = Number.parseInt(entradaDados("Digite um número: "));
```

<h4>
  O que require quer dizer?
</h4>

``` JS
require('prompt-sync')
```

<p>
  Esse é bem simples, o require está fazendo um requerimento dos dados que foram baixados a partir do prompt-sync
</p>

<h4>
  E o sigint: true?
</h4>

``` JS
({sigint: true});
```

<p>
  Ele diz se a condição de entrada de dados é verdadeira ou falsa, se você for agora e troca de "true" para "false", o código não irá conseguir capitar se houve uma entrada de dados, ou melhor, ele vai negar essa entrada
</p>



<div align = "center">

## Referencia utilizada para el tutorial:

<p>
  No link abaixo está o video que foi utilizado para produzir esse repositório
</p>

https://youtu.be/1TzCYVTC9tc?si=zmhZPPBLgPT5kwXa

![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)

  
## Dudas:

<p>
  Se não conseguiu ou tem alguma dúvida em relação ao assunto, entre em contato comigo por algum dos meios abaixo:
</p>

<a href="https://www.instagram.com/eiwladison/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
<a href="mailto: franciscowladison97@gmail.com" target="_blank"><img src= "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
<a href="mailto: franciscowladison97@outlook.com" target="_blank"><img src= "https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />

<h3 align = "center">
  Obrigado por chegar aqui, até um próximo tutorial 😀👍
</h3>

</div>


<div align = "center">

#### _✮ LEIA EM [OUTROS IDIOMAS](Translation/Translation.md):_

<kbd>[<img title="Inglês" alt="Inglês" src="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/us.svg" width="22">](Translation/README.en.md)</kbd>
  
</div>
