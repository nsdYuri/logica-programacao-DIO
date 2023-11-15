// Criando classe
class pessoa{
    constructor(nome, idade, altura, peso, genero){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }
}

// Criando objeto
let ike = new pessoa('Yuri', 19, 1.85, 80, 'masculino')
console.log(ike)

// SAIDA NO TERMINAL:
// pessoa {
//     nome: 'Yuri',
//     idade: 19,
//     alutra: 1.85,
//     peso: 80,
//     genero: 'masculino'
//   }