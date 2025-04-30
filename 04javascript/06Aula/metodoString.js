let nome = 'Luluzinha'

console.log(nome[1]);
console.log(nome.charAt(1));
 // acessa o caracter onde vc indicar a posição no índce do array/string

console.log(nome.length);
// Length indicara quantos caracteres tem na sua string

console.log(nome.toLowerCase());  
// Transforoma a string da vaiavel em minúsculo 

console.log(nome.toUpperCase()); 
// Transforma tudo em maiúsculo

console.log(nome.substring(4, 9));
//primeiro nº indica onde começa o corte, o segundo nº onde termina.

console.log(nome.split('z'));
// split corta o caractere selecionado de toda a string

let meuNome = 'Victor Hugo'
//faça com que seu nome seja substituido pelo sobrenome

let newName = meuNome.replace('Victor Hugo', 'Hugo Victor');
 
console.log(newName);