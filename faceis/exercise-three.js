// Descrição: Solicite o raio de um círculo e calcule a área. Use a fórmula: Área = π × raio². Considere π = 3.14159.

// Exemplo de Entrada/Saída:

// Digite o raio do círculo: 3
// A área do círculo é: 28.27431

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function calcArea(raio) {
    const pi = 3.14159
    const area = pi * raio**2
    return console.log(`A área do círculo é: ${area}`)
}

calcArea(parseInt(prompt("Digite o raio do círculo: ")))