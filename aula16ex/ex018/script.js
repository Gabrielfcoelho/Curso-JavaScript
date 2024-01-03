let numlist = []

function add() {
    let num = document.querySelector('input#num')
    let selnum = document.querySelector('select#selnum')
    if(num.value.length == 0 || numlist.indexOf(Number(num.value)) != -1 || Number(num.value) < 1 || Number(num.value) > 100) {
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        numlist.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        selnum.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if( numlist.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let res = document.querySelector('div#res')
        let maiornum = numlist[0]
        let menornum = numlist[0]
        let soma = 0
        for(let pos in numlist) {
            soma += numlist[pos]
            if(numlist[pos] > maiornum) {
                maiornum = numlist[pos]
            } else if(numlist[pos] < menornum) {
                menornum = numlist[pos]
            }
        }
        let media = soma / numlist.length
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${numlist.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiornum}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menornum}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
