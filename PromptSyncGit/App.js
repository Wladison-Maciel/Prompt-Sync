const entrada = require('prompt-sync')({sigint: true});

// Entrada de Dados 
let nome = String(entrada("Digite seu nome:"))

// Imprimindo essa variável
console.log("Olá" ,nome)