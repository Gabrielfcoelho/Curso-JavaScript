let num = [5,4,3,2,1]
num[5] = 6
num.push(7)//inserir números no array
num.sort()//Ordena os números

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)//retorna o índice do número, caso o número não exista retorna -1
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}