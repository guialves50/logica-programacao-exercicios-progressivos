// Escreva um programa que leia dois números inteiros fornecidos pelo usuário e exiba a soma deles.
// Exemplo de saída:
// Digite o primeiro número: 5
// Digite o segundo número: 7
// A soma é: 12

import promptSync from 'prompt-sync';
const prompt = promptSync();

const firstNumber = parseInt(prompt("Digite o primeiro número: "))
const secondNumber = parseInt(prompt("Digite o segundo número: "))

const sum = firstNumber + secondNumber
console.log(`\nA soma é: ${sum}`)