// Descrição: Leia uma quantidade de dias e converta esse valor para o total de minutos.

// Exemplo de Entrada/Saída:

// Digite a quantidade de dias: 2
// O total em minutos é: 2880

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function converterDiasEmMinutos(dias) {
    const diasEmHoras = 24
    const horasEmMinutos = 60

    const calc = (dias * diasEmHoras) * horasEmMinutos
    return console.log(`O total em minutos é: ${calc}`)
}

converterDiasEmMinutos(parseInt(prompt("Digite a quantidade de dias: ")))