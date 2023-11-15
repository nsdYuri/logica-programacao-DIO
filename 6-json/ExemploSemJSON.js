// Seguinte situação: Foram coletados todos os dados do usuário através do input e logo em seguida deve tranferir para uma função de cadastro que adiciona no banco de dados
let name = "Yuri"
let age  = 19
let products = ["Memória Ram", "Cargo azul marinho", "Cargo marrom", "Cargo verde musgo", "Jeans clara"]
let productsValues = [130, 129.90, 129.90, 129.90, 100]

function order(nome, product, productsValue, idade){
    console.log("Cliente: " + nome)
    console.log("Idade: " + idade)
    console.log("----------------------------")
    console.log("Produto: " + product[0])
    console.log("Valor: " + productsValue[0])
}

order(name, products, productsValues, age)

// O objetivo desse exemplo é mostrar como fariamos para tranferir os dados das variaveis (name, age, products e productsValues) para a função (order) sem a utilização