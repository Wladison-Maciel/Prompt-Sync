<h2 align = "center">
  Seja Bem-Vindo(a) ao meu tutorial 😃
</h2>

<div align = "center">

![Stars](https://img.shields.io/github/stars/Wladison-Maciel/Prompt-Sync.svg)
![Watchers](https://img.shields.io/github/watchers/Wladison-Maciel/Prompt-Sync.svg)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/Wladison-Maciel/Prompt-Sync/main)
![Follows](https://img.shields.io/github/followers/Wladison-Maciel.svg?style=social&label=Follow&maxAge=2592000)
</div>

<h3 align = "center">
  Ainda estou atualizando, fique ligado(a) 😉
</h3>

<div align = "center">
  
[- Inicio](#O-que-irei-aprender-aqui?)
[- Requisitos Minímos](#Requisitos-Minímos)
[- Criar](#Criar)
[/Abrir](#Abrir)
[/Executar](#Executar)
[- Instalando o PromptSync](#Instalando-o-PromptSync)
[- Finalizando o Tutorial](#Finalizando-o-Tutorial)
[- Explicação](#Explicação)

</div>

## O que irei aprender aqui? 🤷‍♂️

<p>
  Neste repositório irei lhe ensinar a como fazer um código Js(JavaScript) onde há uma entrada de dados comum, utilizando o terminal do VScode sem o uso de site CSS/HTML
</p>

## Requisitos Minímos:

<p>
  
  * 1 Você deve ter instalado o Node.js para que possamos utilizar a linguagem JavaScript
  * 2 Como personagem principal também, o Visual Studio Code deve estar instalado juntamente
  * 3 No Visual Studio Code, instale as extensões: Code Runner, JavaScript (ES6) code snippets 
</p>

* ### Node.JS - Visual Studio Code
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<h3>
  Verifique se o Node.JS está instalado da seguinte maneira:
</h3>

<h4>

  - 1 - Abra o Prompt de comando do seu computador
  - 2 - Digite "node" da maneira como está mostrando a imagem
  - 3 - Se aparecer a versão do Node quer dizer que está tudo certo
</h4>

<img src="https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/bcb1389f-d819-417b-9f03-eef1dc392f27"/>


## Criar

<p>
  Para começarmos mesmo devemos criar uma pasta onde será armazenado nosso código JavaScript 
</p>

<h4>

  - 1 - Abra seu explorador de arquivos
  - 2 - Crie uma pasta (qualquer nome), no caso o nome da pasta criada foi: "PromptSyncGit"
</h4>


<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/ff67dec7-722a-4315-b14f-ca9fe4d9c007" />

## Abrir

<p>
  Agora abra o seu Visual Studio Code e a partir dele, abra a pasta que você criou
</p>

<h4>

  - 1 - Vá em arquivo
  - 2 - Abrir pasta
  - 3 - Selecione a pasta criada que foi: "PromptSyncGit"
  - 4 - Por fim, crie um arquivo JavaScript, com nome a sua preferência, exemplo na imagem: "App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/277a9ed6-0f2c-46e0-a25a-071f89cb711d" />

## Executar

<p>
  Antes de executarmos a aplicação devemos adicionar uma linha de código bastante importante
</p>

<h4>
  
  - 1 - Com a pasta do código aberto e com o arquivo JavaScript criado, você vai digitar o seguinte código
  - 2 - Sempre o deixando na 1° linha de código
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

## Instalando o PromptSync

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

## Finalizando o Tutorial

<p>
  Com tudo pronto, criei um código simples com entrada de dados e o seu retorno
</p>

<h4>
  - 1 - No terminal digite "node"+ nome do arquivo, que seria o JavaScript, da seguinte maneira: "node App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/abf36827-b224-4279-98ab-4b757d1baa53" />

## Explicação:

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
