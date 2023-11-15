class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        if (this.tipo == 'mago'){
            ataque = magia;
        } else if (this.tipo == 'guerreiro'){
            ataque = 'espadada';
        }else if (this.tipo == 'monge'){
            ataque = 'artes marciais';
        }else if (this.tipo == 'ninja'){
            ataque = 'shuriekn';
        }
        console.log(`O ${this.tipo} atacou usano o ataque ${ataque}`);
    }
}

let hero = new heroi('Derek', 15, 'ninja')
console.log(hero)

hero.atacar()