let frutas = ['laranja', 'banana', 'maçã', 'pera', 'uva', 'mamão']

//Exibir o vetor
console.log(frutas)

//Extrair o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

//Tirar o primeiro elemento do vetor
let primeiraFruta = fruta.shift()

console.log(frutas)
console.log(primeiraFruta)

//Removendo de posições intermediárias
// splice()
// 1º Paramêtro: posição que será removida (lembre-se que a contagem sempre começa em zero)
// 2º Paramêtro: quantidade de elementos que serão removidos
let terceiraFruta = fruta.splice(2, 1) //Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) //splice() sempre retorna um vetor

// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

//Inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

//Inserindo em posição intermediária
//splice() para inserção
// 1º paramêtro: posição onde ocorrerá a inserção
// 2º paramêtro: quantos elementos serão excluídos (0)
//Paramêtros seguintes: elementos a serem inseridos

// Inserindo na 4ª posição 
frutas.splice(3, 0, 'pessêgo')
console.log(frutas)

//Inserindo duas frutas na 3ª posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

//Substituindo 6ª fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)