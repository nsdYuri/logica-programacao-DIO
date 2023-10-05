let materias = ["DataBase", "Web Development", "Python", "Java", "Software Design"]
console.log(materias) // Imprime na tela a lista completa
console.log(materias[1]); // Imprime apenas o valor correspondente ao indice indicado


// Alguns metodos para manipulação de um array

// remove o ultimo item da lista
materias.pop() 
console.log(materias)

// remove o primeiro item da lista
materias.shift() 
console.log(materias)

// Adiciona o valor entre parenteses ao fim do array
materias.push('Data Base') 
console.log(materias)

// Adiciona o valor entre parenteses ao inicio do array
materias.unshift('User Expirience') 
console.log(materias)

// Inverte a ordem da lista
materias.reverse()
console.log(materias)

// indexOf traz o indice correspondente ao item entre parenteses que deve ser o mesmo presente no array
let index = materias.indexOf('Java')
console.log(index)