let contador;
let alvo;

console.log("Contagem de 1 - 10");

contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador ++;
};

console.log("Contagem de 10 - 0");

contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador --;
};

console.log("Contagem regressiva");

contador = prompt("Escolha um número para fazer uma contagem regressiva.");
while (contador >= 0) {
    console.log(contador);
    contador --;
};

console.log("Contagem progressiva");

alvo = prompt("Escolha um número para um contagem progressiva.");
contador = 0
while (contador <= alvo) {
    console.log(contador);
    contador ++;
};