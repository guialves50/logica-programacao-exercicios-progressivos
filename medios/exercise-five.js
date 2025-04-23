// Descrição: Solicite a idade do usuário e informe se ele é menor ou maior de 18.

// Exemplo de Entrada/Saída:

// Digite sua idade: 20
// Você é maior de 18.
import PromptSync from "prompt-sync"
const prompt = PromptSync()

function checarIdade(age) {
    if(age >= 18) {
        return console.log("Você é maior de 18")
    } else {
        return console.log("Você é menor de 18")
    }
}

checarIdade(parseInt(prompt("Digite sua idade: ")))