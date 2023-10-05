let banda = [
    ["Yuri", "Guitarrista", "19 anos"],
    ["Cap", "Baixista", "20 anos"],
    ["Kennedy", "Vocalista", "21 anos"],
    ["Maj", "Baterista", "21 anos"],
    ["Miracle", "Tecladista", "18 anos"]
]

// Imprimir matriz inteira
console.log(banda);

// Imprimir array que corresponde ao indice 2, eixo y
console.log(banda[2]);

// Imprime valor que ocupa a posição 0 no array que ocupa a posição 2 da matriz, em outras palavras seria, linha 2, coluna 0. Essa é a lógica dos parametros, o primeiro é a linha e o segundo a coluna.
console.log(banda[2][0]);

// Os métodos utilizados nos vetores tambem funcionam nos métodos
banda.pop()
console.log(banda)

// Porpriedades
console.log(banda.length)