// Pré-Condicional (While)
let num = 0;
while (num < 11){
    console.log(num);
    num++;
}



// Pós-Condicional (Do While)
let nome = "Yuri";
do {
    console.log("Bem vindo");
} while (nome == "Derek");



// Contador (For)

for (i = 1; i < 4; i++){
    console.log(i);
}

let pontosDeVida = 0
for (i = 1; i < 11; i++){
    pontosDeVida += 1;
    console.log("Tomoou poção magica " + i)
}

console.log("Pontos de vida totais: " + pontosDeVida)