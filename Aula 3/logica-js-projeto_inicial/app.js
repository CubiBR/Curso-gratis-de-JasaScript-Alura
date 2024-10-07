// te dá boas vindas
alert("Boas vindas ao jogo do número secreto!");
// cria uma variavel para armazenar o numero secreto
let numeroSecreto = 5;
console.log(numeroSecreto)
// cria uma variavel para armazenar o seu chute e tembém coloca no console
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    console.log(chute);

    console.log('Resultado da comparação:', chute == numeroSecreto);
    if (chute ==numeroSecreto) {

        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        };
        tentativas ++;
    };

};
