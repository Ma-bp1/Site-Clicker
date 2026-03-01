let quantidadeCliques = document.querySelector('.numeroCliques')

function incrementarCliques() {
    const miau = new Audio("dragon-studio-cat-meow-401729.mp3")
    quantidadeCliques.innerHTML = parseFloat(quantidadeCliques.innerHTML) + 1
    miau.play()
}

export const upgrades = [
    {
        title:"Ratinhos trabalhadores",
        custo:"10",
        description:"Terá ratos para trabalhar pra você (autoclicker)",
    },

    {
        title:"Leite",
        custo:"20",
        description:"",
    },

    {
        title:"Dar ao nome do seu gato",
        custo:"100",
        description:"Você pode nomear seu bichano",
    },

    {
        title:"Ronronar",
        custo:"150",
        description:"Seu pet comecou a gostar de você, ele irá ronronar quando você der carinho",