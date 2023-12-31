function tabuada() {
    let num = document.querySelector('input#num')
    let tab  = document.querySelector('select#seltab')
    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        num = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
