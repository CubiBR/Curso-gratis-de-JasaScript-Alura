alert("Boas vindas a este site!");
let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}