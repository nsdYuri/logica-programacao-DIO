// Criando classe
class pessoa{
    constructor(nome, idade, altura, peso, genero){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }

    // Método
    boas_vindas(){
        let imc = this.peso / (this.altura * this.altura)
        console.log(`Seja bem vindo ${this.nome}, com base em seus dados de peso e alutra, calculamos que seu IMC é igual a ${imc}`)
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

console.log(ike.nome)
console.log(ike.idade)
ike.boas_vindas()