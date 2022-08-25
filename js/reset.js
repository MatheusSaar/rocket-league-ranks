function resetButton() {

    let ranks = Array.from(document.querySelector('.ranks').children)

    ranks.forEach(r => {
        r.style.display = 'none'
        r.innerHTML = ""
    })

    verifique()

}