
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#bday')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade <= 12){
                //Criança!
                img.setAttribute('src', 'imagens/menino.jpg')
            }
            else if(idade <= 21){
                //Jovem!
                img.setAttribute('src', 'imagens/hjovem.jpg')
            }
            else if(idade <= 60){
                //Adulto!
                img.setAttribute('src', 'imagens/hadulto.jpg')
            }
            else if(idade <= 120){
                //idoso!
                img.setAttribute('src', 'imagens/hidoso.jpg')
            }
            else{
                //morto!
                img.setAttribute('src', 'imagens/esqueleto.jpg')
            }
        }
        else{
            genero = 'Mulher'
            if(idade <= 12){
                //Criança!
                img.setAttribute('src', 'imagens/menina.jpg')
            }
            else if(idade <= 21){
                //Jovem!
                img.setAttribute('src', 'imagens/mjovem.jpg')
            }
            else if(idade <= 60){
                //Adulto!
                img.setAttribute('src', 'imagens/madulta.jpg')
            }
            else if(idade <= 120){
                //idoso!
                img.setAttribute('src', 'imagens/midosa.jpg')
            }
            else{
                //morto!
                img.setAttribute('src', 'imagens/esqueleto.jpg')
            }
        }
        res.innerHTML = `${genero} de ${idade} anos`
        res.appendChild(img)
    }
}