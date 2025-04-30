/*Questão 4: 
Crie um loop `while` que gere uma sequência de Fibonacci de 10 números. A sequência 
começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores. */


let n1 = 0, n2 = 1, proximo

let contador = 1

while (contador <= 10) {

    proximo = n1 + n2

    console.log (`${contador}: ${n1}`)

    n1 = n2
    n2= proximo

    contador++
        ;

}
