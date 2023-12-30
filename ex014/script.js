function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'rgb(194, 197, 49)'
    }
    else if (hora <= 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(240, 159, 83)'
    }
    else{
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(31, 18, 51)'
    }
}
