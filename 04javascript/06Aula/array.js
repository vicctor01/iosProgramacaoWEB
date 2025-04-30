let saboresPastel = [' queijo', 'pizza', 'bauru', 'portuguesa', 'brócolis', 'atum', 'alho poró']

console.log(saboresPastel);
console.log(saboresPastel.length); //.lenght pra saber quantos itens tem na variável


let  = saboresPastel.push('carne seca') //adição de um sabor


console.log(`meu sabor de pastel favorito é ${saboresPastel[4]}`);

let removerSabor = saboresPastel.pop()
//criado um novo array onde armazenou as informações retiradas de 'saboresPastel'


saboresPastel.splice(2,1)
//Splice recebe dois valores separados por vírgula, o primeiro valor indica aonde será o corte, o segundo valor indica qual o tamanho do corte

console.log(saboresPastel);