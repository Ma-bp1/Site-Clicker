let quantidadeCliques = document.querySelector('.numeroCliques')

function incrementarCliques() {
    const miau = new Audio("dragon-studio-cat-meow-401729.mp3")
    quantidadeCliques.innerHTML = parseFloat(quantidadeCliques.innerHTML) + 1
    miau.play()
}
