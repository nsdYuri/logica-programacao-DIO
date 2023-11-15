// Seguinte situação: Foram coletados todos os dados do usuário através do input e logo em seguida deve tranferir para uma função de cadastro que adiciona no banco de dados
// Exemplo COM O USO DE JSON

let order = {
    name:"Yuri",
    age:19,
    products: {
    p0:["Memória Ram", 130], 
    p1:["Cargo azul marinho", 129.99], 
    p2:["Cargo marrom", 129.99], 
    p3:["Cargo verde musgo" , 129.99], 
    p4:["Jeans clara", 100]},
}

function getorder(order){
    console.log(`Cliente: ${order.name}`)
    console.log(`Idade: ${order.age}`)
    console.log("----------------------------")
    for (let item in order.products){
        let [productName, productPrice] = order.products[item]
        console.log(`* ${productName}: R$-${productPrice}`)
    }
}

getorder(order)
