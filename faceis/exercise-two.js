// Descrição: Leia uma temperatura em graus Celsius e converta-a para Fahrenheit. A fórmula de conversão é: F = (C × 9/5) + 32.

// Exemplo de Entrada/Saída:

// Digite a temperatura em Celsius: 25
// A temperatura em Fahrenheit é: 77.0

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function converterEmFahrenheit(tempEmCelsius) {
    const F = (tempEmCelsius * 9/5) + 32

    return console.log(`A temperatura em Fahrenheit é: ${F.toFixed(1)}`)
}

converterEmFahrenheit(parseInt(prompt("Digite a temperatura em Celsius: ")))