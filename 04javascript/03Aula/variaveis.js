var nomeVar = 'Jorel'
let nomeLet = 'pablo'
let latido = 'barf barf'

function cachorro(){
    let latido = 'auau' // Preso no bloco 
    console.log(latido);  // Acessa o bloco
    console.log(nomeVar);
    console.log(nomeLet);
}

console.log(latido); // Não acessa o bloco
cachorro ();


const turmamanha = 3.14 // uma contante não pode ser mudada
//turmamanha = 500
pi2 = turmamanha * 5
console.log(pi2);