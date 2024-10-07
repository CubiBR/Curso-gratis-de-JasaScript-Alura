// te dá boas vindas
alert("Boas vindas ao jogo do número secreto!");
// cria uma variavel para armazenar o numero secreto
let numeroSecreto = 838;
console.log(numeroSecreto)
// cria uma variavel para armazenar o seu chute e tembém coloca no console
let chute = prompt("Escolha um número entre 1 e 10");
console.log(chute)


//se chute for igual a o número secreto
console.log('Resultado da comparação:', chute == numeroSecreto);
if (chute ==numeroSecreto) {
    // se acertar o código de tá parabens
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
}
else {
    // se errar ele te avisa
    console.log('Valor do número secreto:', numeroSecreto);
    alert("você errou :(");
};