// 3. Sistema de calculo de Média de Notas com Array

let notas = [5, 6, 7, 8, 9, 10]

let somaNota = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]

let media = somaNota/6

if (media <= 6) {
    console.log('Reprovado');
}
else{
    console.log('aprovado');
}
