let DiaDaSemana = prompt("Qual o dia da semana? (minusculo sem acento)");

if (DiaDaSemana == "sabado") {
    alert("Bom fim de semana!");
}
else if (DiaDaSemana == "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
};


let NumeroDoUsuario = prompt("Digite um número positivo ou negativo");

if (NumeroDoUsuario > 0) {
    alert("Seu número é positivo");
} else {
    alert("Seu número é negativo");
};


let Pontuação = 6;
console.log (Pontuação);

if (Pontuação >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
};


let saldoConta = 200;

alert(`Seu saldo é de R$${saldoConta}.`);


let nome = prompt("Qual o seu nome?");
alert(`Saudações ${nome}`);