// Nessa função passamos como parametro um nome inteiro, dentro dela a variavel firstName recebe esse nome completo e o separa(split) por espaços vazios(" "), transformando assim o nome em um vetor, em seguida pega o primeiro item desse vetor cujo o indice é [0] e atribui a variavel.

// Ao fim do algoritimo, pedimos para que seja retornado a variavel firstName, como resultado da função. Dessa maneira, todos os nomes completos que passarem por essa função, retornaram apeneas com o primeiro nome.
function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

userName = getFirstName("Yuri Chichedom Ikegwuonu")
console.log("Bem vindo(a) " + userName)

