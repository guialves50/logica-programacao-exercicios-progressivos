# Lógica de Programação - Lista de Exercícios Progressivos

> ℹ Desenvolvi esta lista como material de apoio e orientação ao grupo de estudos "Devs em Construção", do curso de Análise e Desenvolvimento de Sistemas, turma 2024, do Centro Universitário Claretiano, de Batatais. Porém, esta lista pode ser livremente usada e reproduzida livremente.

Esta é uma lista de exercícios com **dificuldade progressiva** 📈, começando de exercícios bem simples e aumentando a dificuldade aos poucos. Você pode resolvê-los em **qualquer linguagem de programação** de sua preferência. 🖥️

Sugiro que os exercícios sejam **resolvidos na ordem** em que estão apresentados 🔢, desde o primeiro, mesmo que sejam casos simples que você já sabe como resolver.

Os exercícios contém exemplos de entrada e saída (que você pode alterar, como preferir, pois são só exemplos) para facilitar o entendimento.

Ao final, há uma proposta de **projeto prático** ⌨️, que consolida as habilidades desenvolvidas nos exercícios em um desafio maior.

> 💡 O objetivo ***não*** é chegar a uma solução a qualquer custo (para isso, bastaria pedir a solução ao [ChatGPT](https://chatgpt.com/) 🤖), mas ***desenvolver as habilidades*** de ***pensamento computacional*** e ***lógica de programação*** - o que só acontecerá se você realmente “quebrar a cabeça” 🧠 em cada um dos exercícios.

---

## **Nível 1: Exercícios Simples**

1. **Soma de Dois Números**
    - **Descrição:** Escreva um programa que leia dois números inteiros fornecidos pelo usuário e exiba a soma deles.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o primeiro número: 5
        Digite o segundo número: 7
        A soma é: 12
        ```

2. **Conversão de Temperatura**
    - **Descrição:** Leia uma temperatura em graus Celsius e converta-a para Fahrenheit. A fórmula de conversão é: `F = (C × 9/5) + 32`.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a temperatura em Celsius: 25
        A temperatura em Fahrenheit é: 77.0
        ```

3. **Cálculo da Área do Círculo**
    - **Descrição:** Solicite o raio de um círculo e calcule a área. Use a fórmula: `Área = π × raio²`. Considere π = 3.14159.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o raio do círculo: 3
        A área do círculo é: 28.27431
        ```

4. **Tempo em Minutos**
    - **Descrição:** Leia uma quantidade de dias e converta esse valor para o total de minutos.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a quantidade de dias: 2
        O total em minutos é: 2880
        ```

5. **Preço com Desconto**
    - **Descrição:** Peça o preço original de um produto e a porcentagem de desconto. Calcule e mostre o preço final após o desconto.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o preço original do produto: 100
        Digite a porcentagem de desconto: 15
        O preço com desconto é: 85.0
        ```


---

## **Nível 2: Exercícios com Estruturas Condicionais**

1. **Número Par ou Ímpar**
    - **Descrição:** Leia um número inteiro e informe se ele é par ou ímpar.
    - **Explicação do Conceito:** Um número é par se é divisível por 2; caso contrário, é ímpar.
    - ℹ️ **Dica:** [Resto de Divisão](https://www.youtube.com/watch?v=27IVqMRtb5k)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um número inteiro: 8
        O número 8 é par.
        ```

2. **Maior de Dois Números**
- **Descrição:** Peça dois números ao usuário e exiba o maior deles.
- **Exemplo de Entrada/Saída:**

    ```markdown
    Digite o primeiro número: 12
    Digite o segundo número: 7
    O maior número é: 12
    ```

1. **Maior de Três Números**
    - **Descrição:** Peça três números ao usuário e exiba o maior deles.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o primeiro número: 12
        Digite o segundo número: 7
        Digite o terceiro número: 15
        O maior número é: 15
        ```

2. **Calculadora Simples**
    - **Descrição:** Leia dois números e um operador matemático (+, -, *, /). Realize a operação indicada e mostre o resultado.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o primeiro número: 10
        Digite o segundo número: 5
        Digite o operador (+, -, *, /): *
        Resultado: 50
        ```

3. **Verificação de Idade**
    - **Descrição:** Solicite a idade do usuário e informe se ele é menor ou maior de 18.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite sua idade: 20
        Você é maior de 18.
        ```

4. **Classificação de Triângulos**
    - **Descrição:** Leia os comprimentos dos três lados de um triângulo e determine se ele é equilátero, isósceles ou escaleno.
    - **Explicação do Conceito:**
        - **Equilátero:** Todos os lados iguais.
        - **Isósceles:** Dois lados iguais.
        - **Escaleno:** Todos os lados diferentes.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o comprimento do lado 1: 5
        Digite o comprimento do lado 2: 5
        Digite o comprimento do lado 3: 5
        O triângulo é equilátero.
        ```

5. **Ano Bissexto**
    - **Descrição:** Peça ao usuário um ano e determine se é um ano bissexto.
    - **Explicação do Conceito:** Um ano é bissexto se é divisível por 4, mas não por 100, exceto se for também divisível por 400.
    - ℹ️ **Dica:** [Como saber se um ano é bissexto?](https://www.youtube.com/watch?v=LMjLh1Z3lGw)
    - ℹ️ **Dica:** [Resto de Divisão](https://www.youtube.com/watch?v=27IVqMRtb5k)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um ano: 2020
        O ano 2020 é bissexto.
        ```

6. **Aprovado ou Reprovado**
    - **Descrição:** Leia a nota final de um aluno e informe se ele está aprovado (nota maior ou igual a 6) ou reprovado.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a nota final: 7.5
        O aluno está aprovado.
        ```

7. **Verificação de Senha**
    - **Descrição:** Solicite que o usuário insira uma senha. Se a senha estiver correta (defina você mesmo(a) uma senha padrão, como **senha123**), exiba "Acesso Permitido"; caso contrário, "Acesso Negado".
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a senha: 1234
        Acesso Negado.
        ```

        ```markdown
        Digite a senha: senha123
        Acesso Permitido.
        ```

8. **Categoria de Nadador**
    - **Descrição:** Com base na idade fornecida, classifique o nadador em uma das seguintes categorias:
        - **Infantil:** até 10 anos
        - **Juvenil:** 11 a 17 anos
        - **Adulto:** 18 anos ou mais
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a idade do nadador: 15
        Categoria: Juvenil
        ```

9. **Calculadora de IMC**
    - **Descrição:** Peça o peso e a altura do usuário, calcule o Índice de Massa Corporal (IMC) e classifique-o.
    - **Explicação do Conceito:**
        - **IMC:** É uma medida que relaciona peso e altura. A fórmula é: `IMC = peso / (altura × altura)`.
        - **Classificação:**
            - **Abaixo do peso:** IMC < 18.5
            - **Peso normal:** 18.5 ≤ IMC < 25
            - **Sobrepeso:** 25 ≤ IMC < 30
            - **Obesidade:** IMC ≥ 30
    - ℹ️ **Dica:** [Como Calcular O IMC](https://www.youtube.com/watch?v=e5OuLSDayxs)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite seu peso em kg: 68
        Digite sua altura em metros: 1.75
        Seu IMC é: 22.2
        Classificação: Peso normal
        ```


---

## **Nível 3: Exercícios com Estruturas de Repetição**

1. **Contagem de 1 a 10**
    - **Descrição:** Utilize um loop para exibir os números de 1 a 10.
    - **Exemplo de Saída:**

        ```markdown
        1 2 3 4 5 6 7 8 9 10
        ```

2. **Tabuada de um Número**
    - **Descrição:** Peça um número inteiro e exiba a tabuada desse número de 1 a 10.
    - **Exemplo de Entrada/Saída:**

        ```
        Digite um número: 7
        Tabuada do 7:
        7 x 1 = 7
        7 x 2 = 14
        7 x 3 = 21
        ...
        7 x 10 = 70
        ```

3. **Soma de Números de 1 a N**
    - **Descrição:** Solicite um número inteiro positivo N e calcule a soma de todos os números de 1 até N.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um número inteiro positivo: 5
        A soma de 1 a 5 é: 15
        ```

4. **Fatorial de um Número**
    - **Descrição:** Leia um número inteiro não negativo e calcule seu fatorial.
    - **Explicação do Conceito:** O fatorial de um número n (representado por n!) é o produto de todos os números inteiros positivos de 1 até n.
    - ℹ️ **Dica**: [Fatorial de um número natural (dois primeiros minutos do vídeo)](https://www.youtube.com/watch?v=NZT-EXV21OI)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um número inteiro não negativo: 4
        O fatorial de 4 é: 24
        ```

5. **Números Pares entre 1 e 50**
    - **Descrição:** Exiba todos os números pares no intervalo de 1 a 50.
    - ℹ️ **Dica:** no exercício 6, você aprendeu como verificar se um número é par ou ímpar.
    - **Exemplo de Saída:**

        ```markdown
        2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50
        ```

6. **Sequência de Fibonacci**
    - **Descrição:** Peça um número N e exiba os N primeiros termos da sequência de Fibonacci.
    - **Explicação do Conceito:** A sequência de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos dois anteriores.
    - ℹ️ **Dica:** [O que é a sequência de Fibonacci?](https://www.youtube.com/watch?v=cHZWZhHQq4g)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o número de termos: 7
        Sequência de Fibonacci:
        0 1 1 2 3 5 8
        ```

7. **Validação de Entrada**
    - **Descrição:** Continue solicitando ao usuário um número entre 1 e 10 até que ele forneça um valor nesse intervalo.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um número entre 1 e 10: 12
        Valor inválido. Tente novamente.
        Digite um número entre 1 e 10: -3
        Valor inválido. Tente novamente.
        Digite um número entre 1 e 10: 7
        Você digitou: 7
        ```

8. **Contagem Regressiva**
    - **Descrição:** Implemente uma contagem regressiva de 10 a 0 e exiba "Lançar!" ao final.
    - **Exemplo de Saída:**

        ```markdown
        10
        9
        8
        7
        6
        5
        4
        3
        2
        1
        0
        Lançar!
        ```

9. **Número Primo**
    - **Descrição:** Peça um número inteiro e determine se ele é primo.
    - **Explicação do Conceito:** Um número primo é um número maior que 1 que é divisível apenas por 1 e por ele mesmo.
    - ℹ️ **Dica:** você aprendeu sobre divisibilidade no exercício 6, e reforçou no exercício 12.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite um número inteiro: 17
        O número 17 é primo.
        ```

10. **Adivinhe o Número**
    - **Descrição:** O programa escolhe um número aleatório entre 1 e 100. O usuário deve tentar adivinhar o número, e o programa dará dicas se o número é maior ou menor após cada tentativa. O jogo continua até que o usuário acerte.
    - **Exemplo de Interação:**

        ```markdown
        Adivinhe o número entre 1 e 100: 50
        Muito alto! Tente novamente.
        Adivinhe o número entre 1 e 100: 25
        Muito baixo! Tente novamente.
        Adivinhe o número entre 1 e 100: 37
        Correto! Você acertou em 3 tentativas.
        ```


---

## **Nível 4: Exercícios Combinados (Condicionais e Repetições)**

1. **Menu de Operações Matemáticas**
    - **Descrição:** Apresente um menu com as opções:
        1. Soma
        2. Subtração
        3. Multiplicação
        4. Divisão
        5. Sair
           Permita que o usuário escolha uma operação, insira dois números e exiba o resultado. O menu deve ser exibido novamente até que o usuário escolha sair.
    - **Exemplo de Interação:**

        ```markdown
        Menu de Operações:
        1. Soma
        2. Subtração
        3. Multiplicação
        4. Divisão
        5. Sair
        Escolha uma opção: 1
        Digite o primeiro número: 8
        Digite o segundo número: 2
        Resultado: 10
        (O menu é exibido novamente)
        ```

2. **Login com Três Tentativas**
    - **Descrição:** Solicite ao usuário um nome de usuário e senha. Dê até três tentativas para acertar. Se errar três vezes, exiba uma mensagem de conta bloqueada.
    - **Exemplo de Interação:**

        ```markdown
        Tentativa 1:
        Usuário: admin
        Senha: 123
        Acesso Negado.
        Tentativa 2:
        Usuário: admin
        Senha: senha123
        Acesso Negado.
        Tentativa 3:
        Usuário: admin
        Senha: admin123
        Acesso Permitido.
        ```

3. **Cálculo de Média de Notas**
    - **Descrição:** Peça ao usuário para inserir as notas de vários alunos. O usuário deve indicar quando não há mais notas a serem inseridas. Calcule e exiba a média das notas inseridas.
    - ℹ️ **Dica:** [Média aritmética](https://www.youtube.com/watch?v=nRxl0WUplf4)

    - **Exemplo de Interação:**

        ```markdown
        Digite a nota do aluno (ou -1 para sair): 7
        Digite a nota do aluno (ou -1 para sair): 8.5
        Digite a nota do aluno (ou -1 para sair): 6
        Digite a nota do aluno (ou -1 para sair): -1
        A média das notas é: 7.17
        ```

4. **Calculadora de Juros Compostos**
    - **Descrição:** Peça o capital inicial, a taxa de juros mensal e o número de meses. Calcule e exiba o montante final usando juros compostos.
    - **Explicação do Conceito:** Juros compostos são calculados sobre o capital inicial mais os juros acumulados. A fórmula é: `Montante = Capital × (1 + Taxa)^Tempo`.
    - ℹ️ **Saiba mais sobre juros compostos:**

   [https://www.youtube.com/watch?v=ZMsieXqXwMg](https://www.youtube.com/watch?v=ZMsieXqXwMg)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o capital inicial: 1000
        Digite a taxa de juros mensal (em %): 1
        Digite o número de meses: 12
        O montante após 12 meses é: 1126.83
        ```

5. **Controle de Abastecimento**
    - **Descrição:** Simule um sistema de controle de abastecimento em um posto de gasolina. O programa deve permitir registrar vários abastecimentos, calculando o total de litros e o valor total a pagar. O loop deve continuar até que o usuário decida encerrar.
    - **Exemplo de Interação:**

        ```markdown
        Digite a quantidade de litros abastecidos: 30
        Digite o preço por litro: 4.59
        Valor a pagar: 137.70
        Deseja registrar outro abastecimento? (S/N): S
        (Repetir processo ou encerrar)
        ```

6. **Validação de CPF Simples**
    - **Descrição:** Peça ao usuário um CPF (somente números) e verifique se ele tem 11 dígitos. Continue solicitando até que um CPF válido seja inserido.
    - **Exemplo de Interação:**

        ```markdown
        Digite seu CPF (apenas números): 123456789
        CPF inválido. Deve conter 11 dígitos.
        Digite seu CPF (apenas números): 12345678901
        CPF válido registrado.
        ```

7. **Sistema de Notas com Conceito**
    - **Descrição:** Leia as notas dos alunos e atribua conceitos de acordo com a média:
        - **A:** 9 a 10
        - **B:** 7 a 8.9
        - **C:** 5 a 6.9
        - **D:** abaixo de 5
          O programa deve continuar até que o usuário decida sair.
    - ℹ️ **Dica:** você aprendeu sobre cálculo de médias no exercício 29.
    - **Exemplo de Interação:**

        ```markdown
        Digite a nota do aluno: 8
        Conceito: B
        Deseja inserir outra nota? (S/N): S
        Digite a nota do aluno: 4.5
        Conceito: D
        Deseja inserir outra nota? (S/N): N
        ```

8. **Controle de Estoque Simples**
    - **Descrição:** Permita que o usuário adicione ou remova itens de um estoque. Exiba a quantidade atual em estoque após cada operação. O programa deve continuar até que o usuário escolha sair.
    - **Exemplo de Interação:**

        ```markdown
        Ação:
        1. Adicionar itens
        2. Remover itens
        3. Sair
        Escolha uma opção: 1
        Quantidade a adicionar: 50
        Estoque atual: 50
        (Repetir processo ou encerrar)
        ```

9. **Jogo da Forca Simplificado**
    - **Descrição:** Defina uma palavra secreta no código. O usuário deve tentar adivinhar as letras até completar a palavra ou atingir o número máximo de tentativas.
    - **Exemplo de Interação:**

        ```markdown
        Palavra secreta: _ _ _ _ (4 letras)
        Tentativas restantes: 6
        Digite uma letra: a
        Palavra secreta: _ a _ a
        Tentativas restantes: 6
        Digite uma letra: m
        Palavra secreta: m a _ a
        Tentativas restantes: 6
        Digite uma letra: s
        Palavra secreta: m a s a
        Parabéns! Você acertou a palavra: masa
        ```


## **Nível 5: Exercícios com Coleções/Estruturas de Dados**

1. **Soma de Elementos de um Vetor**
    - **Descrição:** Leia 5 números inteiros e armazene-os em um vetor (ou array, ou lista). Em seguida, calcule e exiba a soma desses números.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o número 1: 4
        Digite o número 2: 7
        Digite o número 3: 1
        Digite o número 4: 3
        Digite o número 5: 9
        A soma dos números é: 24
        ```

2. **Média de Notas com Vetor**
    - **Descrição:** Solicite ao usuário que insira as notas de 5 alunos e armazene-as em um vetor (ou array, ou lista). Calcule e exiba a média das notas.
    - ℹ️ **Dica:** você aprendeu sobre cálculo de médias no exercício 29, e reforçou no exercício 33.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite a nota do aluno 1: 7.5
        Digite a nota do aluno 2: 8.0
        Digite a nota do aluno 3: 6.5
        Digite a nota do aluno 4: 9.0
        Digite a nota do aluno 5: 7.0
        A média das notas é: 7.6
        ```

3. **Contagem de Números Pares em um Vetor**
    - **Descrição:** Leia 10 números inteiros e armazene-os em um vetor (ou array, ou lista). Determine e exiba quantos números são pares.
    - **Explicação do Conceito:** Um número é par se for divisível por 2. Percorra o vetor, verifique cada número e conte quantos são pares.
    - ℹ️ **Dica:** você aprendeu a verificar se um número é par ou ímpar no exercício 6.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o número 1: 2
        Digite o número 2: 5
        Digite o número 3: 8
        Digite o número 4: 3
        Digite o número 5: 6
        Digite o número 6: 9
        Digite o número 7: 4
        Digite o número 8: 7
        Digite o número 9: 10
        Digite o número 10: 1
        Quantidade de números pares: 5
        ```

4. **Busca de Elemento em Vetor**
    - **Descrição:** Armazene uma lista de 5 nomes em um vetor (ou array, ou lista). Peça ao usuário que digite um nome e informe se esse nome está na lista.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        (Nomes armazenados: Ana, Bruno, Carlos, Daniela, Eduardo)
        Digite um nome para buscar: Carlos
        O nome "Carlos" está na lista.
        ```

        ```markdown
        Digite um nome para buscar: Fernanda
        O nome "Fernanda" não está na lista.
        ```

5. **Ordenação de Números (Bubble Sort)**
    - **Descrição:** Leia 5 números inteiros, armazene-os em um vetor (ou array, ou lista) e exiba os números em ordem crescente usando o algoritmo Bubble Sort.
    - **Explicação do Conceito:** O Bubble Sort compara elementos adjacentes e os troca se estiverem fora de ordem. Este processo é repetido até que toda a lista esteja ordenada.
    - **Dica:** [O que é e COMO FUNCIONA o BubbleSort (passo-a-passo)](https://www.youtube.com/watch?v=8RkZoBZNNgI)

    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o número 1: 5
        Digite o número 2: 2
        Digite o número 3: 9
        Digite o número 4: 1
        Digite o número 5: 6
        Números em ordem crescente: 1 2 5 6 9
        ```

6. **Contagem de Caracteres em uma String**
    - **Descrição:** Peça ao usuário que digite uma frase. Conte e exiba o número de caracteres (sem contar espaços) que a frase contém.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite uma frase: Programação é divertida
        A frase contém 19 caracteres.
        ```

7. **Cálculo de Frequência de Letras**
    - **Descrição:** Leia uma palavra e conte quantas vezes cada letra aparece nela. Exiba o resultado para cada letra encontrada.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite uma palavra: banana
        Frequência de letras:
        b: 1
        a: 3
        n: 2
        ```

8. **Inversão de Ordem de Elementos**
    - **Descrição:** Leia 5 números e armazene-os em um vetor (ou array, ou lista). Exiba os números na ordem inversa à de entrada.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Digite o número 1: 10
        Digite o número 2: 20
        Digite o número 3: 30
        Digite o número 4: 40
        Digite o número 5: 50
        Números na ordem inversa: 50 40 30 20 10
        ```

9. **Interseção de Conjuntos**
    - **Descrição:** Leia dois conjuntos de números inteiros (cada um com 5 elementos) e exiba os números que estão presentes em ambos os conjuntos.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Conjunto 1:
        Digite o número 1: 1
        Digite o número 2: 2
        Digite o número 3: 3
        Digite o número 4: 4
        Digite o número 5: 5
        Conjunto 2:
        Digite o número 1: 4
        Digite o número 2: 5
        Digite o número 3: 6
        Digite o número 4: 7
        Digite o número 5: 8
        Números presentes em ambos os conjuntos: 4 5
        ```

10. **Calculadora de Estatísticas Simples**
    - **Descrição:** Leia um conjunto de números inteiros (quantidade definida pelo usuário) e armazene-os em um vetor. Calcule e exiba o valor máximo, mínimo e a média dos números.
    - **Exemplo de Entrada/Saída:**

        ```markdown
        Quantos números você vai inserir? 4
        Digite o número 1: 15
        Digite o número 2: 8
        Digite o número 3: 22
        Digite o número 4: 10
        Valor máximo: 22
        Valor mínimo: 8
        Média: 13.75
        ```


---

### **Projeto Prático: Gerenciador de Tarefas Pessoais**

Crie um programa que ajude o usuário a gerenciar suas tarefas diárias. O sistema permitirá adicionar, visualizar e marcar tarefas como concluídas. O objetivo é construir uma aplicação simples que agregue funcionalidades progressivamente.

### **Etapa 1: Criar um Menu Interativo**

- **Descrição:** Desenvolva um menu que exiba as seguintes opções:
    1. Adicionar Tarefa
    2. Listar Tarefas
    3. Marcar Tarefa como Concluída
    4. Sair
- O menu deve ser exibido após a conclusão de cada operação, até que o usuário escolha sair.
- **Exemplo de Interação:**

    ```markdown
    Gerenciador de Tarefas:
    1. Adicionar Tarefa
    2. Listar Tarefas
    3. Marcar Tarefa como Concluída
    4. Sair
    Escolha uma opção:
    ```


### **Etapa 2: Adicionar Tarefas**

- **Descrição:** Implemente a funcionalidade para o usuário adicionar uma nova tarefa.
- Cada tarefa deve ter uma descrição e um status de conclusão (inicialmente não concluída).
- **Exemplo de Interação:**

    ```markdown
    Digite a descrição da tarefa: Estudar para a prova de lógica
    Tarefa adicionada com sucesso!
    ```


### **Etapa 3: Listar Tarefas**

- **Descrição:** Permita que o usuário visualize todas as tarefas cadastradas.
- Exiba a lista de tarefas mostrando a descrição e o status (concluída ou não concluída).
- **Exemplo de Saída:**

    ```markdown
    Lista de Tarefas:
    1. [ ] Estudar para a prova de lógica
    2. [ ] Comprar materiais de escritório
    ```


### **Etapa 4: Marcar Tarefas como Concluídas**

- **Descrição:** Implemente a opção de marcar uma tarefa específica como concluída.
- O usuário deve poder selecionar a tarefa pelo número ou identificador exibido na lista.
- **Exemplo de Interação:**

    ```markdown
    Digite o número da tarefa que deseja marcar como concluída: 1
    Tarefa "Estudar para a prova de lógica" marcada como concluída.
    ```


### **Etapa 5: Melhorias e Funcionalidades Adicionais**

- **Ordenação de Tarefas:**
    - **Descrição:** Permita que o usuário visualize as tarefas ordenadas por concluídas e não concluídas.
    - **Exemplo de Saída:**

        ```markdown
        Tarefas Pendentes:
        2. [ ] Comprar materiais de escritório
        
        Tarefas Concluídas:
        1. [X] Estudar para a prova de lógica
        ```

- **Remoção de Tarefas:**
    - **Descrição:** Adicione a opção de remover tarefas da lista.
    - **Exemplo de Interação:**

        ```markdown
        Digite o número da tarefa que deseja remover: 2
        Tarefa "Comprar materiais de escritório" removida com sucesso.
        ```

- **Persistência de Dados (Opcional):**
    - **Descrição:** Salve as tarefas em um arquivo para que sejam mantidas entre as execuções do programa.
    - **Observação:** Este é um passo opcional que envolve manipulação de arquivos.