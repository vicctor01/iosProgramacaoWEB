// Loop principal que percorre os números de 2 até 20
for (let num = 2; num <= 20; num++) {
    let primo = true; // Suponha que o número é primo até que prove o contrário

    // Verifica se o número é divisível por algum número entre 2 e o próprio número - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false; // Se for divisível, não é primo
            break; // Não precisa continuar verificando, já sabemos que não é primo
        }
    }

    // Se o número for primo, ele será impresso
    if (primo) {
        console.log(num);
    }
}