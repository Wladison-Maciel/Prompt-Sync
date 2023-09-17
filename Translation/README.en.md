<h2 align = "center">
  Welcome to my tutorial 😃
</h2>

<div align = "center">

![Stars](https://img.shields.io/github/stars/Wladison-Maciel/Prompt-Sync.svg)
![Watchers](https://img.shields.io/github/watchers/Wladison-Maciel/Prompt-Sync.svg)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/Wladison-Maciel/Prompt-Sync/main)
![Follows](https://img.shields.io/github/followers/Wladison-Maciel.svg?style=social&label=Follow&maxAge=2592000)
</div>

<div align = "center">
  
[- Start](#What-will-I-learn-here?)
[- Minimum Requirements](#Minimum-Requirements)
[- Create](#Create)
[/Open](#Open)
[/Execute](#Execute)
[- Installing PromptSync](#Installing-PromptSync)
[- Finishing the Tutorial](#Finishing-the-Tutorial)
[- Explanation](#Explanation)
[- Questions](#Questions)

</div>

## What will I learn her? 🤷‍♂️

<p>
  In this repository I will teach you how to make a Js code (JavaScript) where there is a common data input, using the VScode terminal without using a CSS/HTML website. The problem encountered was that in Visual Studio Code it is not possible to receive values ​​from the keyboard for conventional data entry, just like in Python and Java
</p>

## Minimum Requirements:

<p>
  
  * 1 You must have installed Node.js for us to use the Library
  * 2 Visual Studio Code must be installed together
  * 3 In Visual Studio Code, install the extensions: Code Runner, JavaScript (ES6) code snippets 
</p>

* ### Node.JS - Visual Studio Code
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<h3>
  Verify that Node.JS is installed as follows:
</h3>

<h4>
  
  - 1 - Open your computer's Command Prompt
  - 2 - Type "node" as shown in the image
  - 3 - If the Node version appears, it means everything is ok
</h4>

<img src="https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/bcb1389f-d819-417b-9f03-eef1dc392f27"/>


## Create

<p>
 To get started, we must create a folder where our JavaScript code will be stored
</p>

<h4>
  
  - 1 - Open your file explorer
  - 2 - Create a folder (any name), in this case the name of the folder created was: "PromptSyncGit"
</h4>


<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/ff67dec7-722a-4315-b14f-ca9fe4d9c007" />

## Open

<p>
  Now open your Visual Studio Code and from there, open the folder you created
</p>

<h4>
  
  - 1 - Go to file
  - 2 - Open the folder
  - 3 - Select the folder created which was: "PromptSyncGit"
  - 4 - Finally, create a JavaScript file, with a name of your choice, example in the image: "App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/277a9ed6-0f2c-46e0-a25a-071f89cb711d" />

## Execute

<p>
 Before running the application we must add a very important line of code
</p>

<h4>
  
  - 1 - With the source folder open and the JavaScript file created, you will enter the following code
  - 2 - Always leaving it on the 1st line of code
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

## Installing PromptSync

<p>
  We have reached the icing on the cake, this is where everything changes
</p>

<h4>
  
  - 1 - Initially, look at the folder you created, it will only have the JavaScript file, as in the 1st photo below: App.js
  - 2 - In code space, go to terminal
  - 3 - New terminal
  - 4 - Note: If the terminal does not open in the folder where the code is, you can use the command "cd"+{NameOfDirectory}
  - 5 - Now in the terminal type the following command: npm install prompt-sync
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/220153a9-1106-4733-94e5-cadecd607f71"/>

<h4>
  After typing the command, you can see that a new folder and files have been added to your project folder, or everything can be contained in just one folder
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/72f54900-4f52-44bd-b2db-711fcdb30bb2"/>

## Finishing the Tutorial

<p>
  With everything ready, I created a simple code with data entry and its return
</p>

<h4>
  
  - 1 - In the terminal type "node"+ file name, which would be JavaScript, as follows: "node App.js"
</h4>

<img src = "https://github.com/Wladison-Maciel/Prompt-Sync/assets/125041870/abf36827-b224-4279-98ab-4b757d1baa53" />

## Explanation:

<h4>
   What does this line of code actually mean?
</h4>

``` JS
const entrada = require('prompt-sync')({sigint: true});
```

<p>
  The input variable can be a name of your choice, but it is what goes into your code when there is data input.
</p>

<h4>
  Example:
</h4>

``` JS
const entradaDados = require('prompt-sync')({sigint: true});
```

``` JS
let idade = Number.parseInt(entradaDados("Digite um número: "));
```

<h4>
  What does require mean?
</h4>

``` JS
require('prompt-sync')
```

<p>
  This is very simple, require is making a request for the data that was downloaded from prompt-sync
</p>

<h4>
  And sigint: true?
</h4>

``` JS
({sigint: true});
```

<p>
 It tells you whether the data entry condition is true or false, if you go now and change from "true" to "false", the code will not be able to capture whether there was a data entry, or rather, it will deny this entry
</p>



<div align = "center">

## Reference used for the tutorial:

<p>
 In the link below is the video that was used to produce this repository:
</p>

https://youtu.be/1TzCYVTC9tc?si=zmhZPPBLgPT5kwXa

![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)

  
## Questions:

<p>
  If you were unable to do so or have any questions regarding the matter, please contact me using any of the methods below:
</p>

<a href="https://www.instagram.com/eiwladison/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
<a href="mailto: franciscowladison97@gmail.com" target="_blank"><img src= "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
<a href="mailto: franciscowladison97@outlook.com" target="_blank"><img src= "https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />

<h3 align = "center">
 Thanks for coming here, see you in the next tutorial 😀👍
</h3>

</div>
