function contar() {
    let start = document.querySelector('input#start')
    let end = document.querySelector('input#end')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Não foi possível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        start = Number(start.value)
        end = Number(end.value)
        passo = Number(passo.value)
        if(passo <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            passo = 1
        }
        if(start < end) {
            while(start <= end) {
                res.innerHTML += `${start} \u{1F449} `
                start += passo
            }
        } else {
            while(start >= end) {
                res.innerHTML += `${start} \u{1F449} `
                start-= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}