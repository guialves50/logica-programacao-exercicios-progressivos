// Descrição: Peça o preço original de um produto e a porcentagem de desconto. Calcule e mostre o preço final após o desconto.

// Exemplo de Entrada/Saída:

// Digite o preço original do produto: 100
// Digite a porcentagem de desconto: 15
// O preço com desconto é: 85.0

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function calcularDesconto(precoOriginal, porcetagemDeDesconto) {
    const conversaoDoDesconto = porcetagemDeDesconto / 100
    const precoComDesconto = precoOriginal - (precoOriginal * conversaoDoDesconto)
    console.log(`O preço com desconto é: ${precoComDesconto.toFixed(1)}`)
}

calcularDesconto(
    parseInt(prompt("Digite o preço original do produto: ")), 
    parseInt(prompt("Digite a porcetagem de desconto: "))
)