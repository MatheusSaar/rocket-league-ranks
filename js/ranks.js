function verifique() {

    let rankButton = document.getElementById("button")
    let msgRank = document.getElementById('msg')

    let bronze = document.getElementById("bronze")
    let prata = document.getElementById("prata")
    let ouro = document.getElementById("ouro")
    let platina = document.getElementById("platina")
    let diamante = document.getElementById("diamante")
    let campeao = document.getElementById("campeao")
    let grandeCampeao = document.getElementById("grande-campeao")
    let lenda = document.getElementById("lenda")

    let ranNum = Math.random() * 100

    if (ranNum < 5) {
        bronze.style.display = 'block'
        bronze.style.transition = 'all 0.4s'
        msgRank.innerHTML = "BRONZE"
        rankButton.onclick = "#"

    } else if (ranNum < 27) {
        prata.style.display = 'block'
        prata.style.transition = 'all 0.4s'
        msgRank.innerHTML = "PRATA"
        rankButton.onclick = "#"

    } else if (ranNum < 50) {
        ouro.style.display = 'block'
        ouro.style.transition = 'all 0.4s'
        msgRank.innerHTML = "OURO"
        rankButton.onclick = "#"

    } else if (ranNum < 61) {
        platina.style.display = 'block'
        platina.style.transition = 'all 0.4s'
        msgRank.innerHTML = "PLATINA"
        rankButton.onclick = "#"

    } else if (ranNum < 77) {
        diamante.style.display = 'block'
        diamante.style.transition = 'all 0.4s'
        msgRank.innerHTML = "DIAMANTE"
        rankButton.onclick = "#"

    } else if (ranNum < 83) {
        campeao.style.display = 'block'
        campeao.style.transition = 'all 0.4s'
        msgRank.innerHTML = "CAMPEAO"
        rankButton.onclick = "#"

    } else if (ranNum < 98) {
        grandeCampeao.style.display = 'block'
        grandeCampeao.style.transition = 'all 0.4s'
        msgRank.innerHTML = "GRANDE CAMPEAO"
        rankButton.onclick = "#"

    } else if (ranNum < 99) {
        lenda.style.display = 'block'
        lenda.style.transition = 'all 0.4s'
        msgRank.innerHTML = "SUPERSONIC LEGEND"
        rankButton.onclick = "#"

    }

}
