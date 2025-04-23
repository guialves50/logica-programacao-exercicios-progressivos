// Descrição: Leia um número inteiro e informe se ele é par ou ímpar.

// Explicação do Conceito: Um número é par se é divisível por 2; caso contrário, é ímpar.

// ℹ️ Dica: Resto de Divisão

// Exemplo de Entrada/Saída:

// Digite um número inteiro: 8
// O número 8 é par.

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function parOuImpar(num) {
    if(num % 2 == 0) {
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

parOuImpar(parseInt(prompt("Digite um número inteiro: ")))