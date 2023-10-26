// Criando função que exibe mensagem de boas vindas exigindo como parametro o nome do usuario
function bemVindo(nome){
    console.log("Seja bem vindo ao nosso sistema " + nome)
}

// Graças aos parametros, conseguimos executar o memso código com 3 valores diferentes de maneira muito mais simples e prática

bemVindo("Yuri")
bemVindo("Derek")
bemVindo("Sully")



// Se não passarmos nenhum valor para a variavel nome, por default o sistema ira incluir cliente no lugar

function login(nome = "Cliente"){
    console.log("Bem vindo " + nome)
}

login()