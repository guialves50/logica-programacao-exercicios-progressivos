// Descrição: Leia dois números e um operador matemático (+, -, *, /). Realize a operação indicada e mostre o resultado.

// Digite o primeiro número: 10
// Digite o segundo número: 5
// Digite o operador (+, -, *, /): *
// Resultado: 50

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function calculadora(firstNum, secondNum, operador) {
    switch (operador) {
        case operador = "+":
            const result = firstNum + secondNum
            console.log(`Resultado: ${result}`)
            break;
        case operador = "-":
            const result1 = firstNum - secondNum
            console.log(`Resultado: ${result1}`)
            break;
        case operador = "*":
            const result2 = firstNum * secondNum
            console.log(`Resultado: ${result2}`)
            break;
        case operador = "/":
            const result3 = firstNum / secondNum
            console.log(`Resultado: ${result3}`)
            break;
        default:
            break;
    }
}

calculadora(
    parseInt(prompt("Digite o primeiro número: ")),
    parseInt(prompt("Digite o segundo número: ")),
    prompt("Digite o operador (+, -, *, /): ")
)