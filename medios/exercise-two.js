// Descrição: Peça dois números ao usuário e exiba o maior deles.

// Exemplo de Entrada/Saída:

// Digite o primeiro número: 12
// Digite o segundo número: 7
// O maior número é: 12

import PromptSync from "prompt-sync"
const prompt = PromptSync()

function checarNumero(firstNumber, secondNumber) {
    if(firstNumber > secondNumber) {
        console.log(`O maior número é: ${firstNumber}`)
    } else if(firstNumber < secondNumber) {
        console.log(`O maior número é: ${secondNumber}`)     
    } else {
        console.log("Os números são iguais")
    }
}

checarNumero(parseInt(prompt("Digite o primeiro número: ")), parseInt(prompt("Digite o segundo número: ")))