console.log("Saldações, boas vindas");
let nome = "Eduardo";
console.log(`Olâ, ${nome}`);
alert(`Olâ, ${nome}`);

let LinguagemProgramação = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(LinguagemProgramação);

let valor1 = 153;
let valor2 = 453;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

valor1 = 9943;
valor2 = 8613;
resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt("Qual a sua idade????????");
respostaIdade = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
console.log(respostaIdade);


let numero = parseFloat(prompt("Digite um numero"));
console.log(numero);
if (numero == 0) {
    console.log("número neutro");
} else if (numero > 0) {
    console.log("número positivo");
} else {
    console.log("número negativo");
};

let i = 1;
while (i <= 10) {
    console.log(i);
    i ++;
};

let nota = 8;
console.log(nota);
if (nota >= 7) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}

let Brandom = Math.random()
console.log(Brandom)

Brandom = parseInt((Math.random() * 10 + 1));
console.log(Brandom)

Brandom = parseInt(Math.random() * 1000) + 1;
console.log(Brandom)