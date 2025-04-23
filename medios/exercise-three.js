// Descrição: Peça três números ao usuário e exiba o maior deles.

// Exemplo de Entrada/Saída:

// Digite o primeiro número: 12
// Digite o segundo número: 7
// Digite o terceiro número: 15
// O maior número é: 15

import PromptSync from "prompt-sync"
const prompt = PromptSync()

function checarNumeroMaior(firstNumber, secondNumber, thirdNumber) {
    const nums = [firstNumber, secondNumber, thirdNumber]
    const maiorNumero = Math.max(...nums)
    console.log(`O maior número é: ${maiorNumero}`)
}

checarNumeroMaior(
    parseInt(prompt("Digite o primeiro número: ")),
    parseInt(prompt("Digite o segundo número: ")),
    parseInt(prompt("Digite o terceiro número: "))
)