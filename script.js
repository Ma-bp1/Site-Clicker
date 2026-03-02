let contarCliques = document.getElementById('numeroClick')

export function contarCliques() {
    const miau = new Audio("dragon-studio-cat-meow-401729.mp3")
    contarCliques.innerHTML = parseFloat(contarCliques.innerHTML) + 1
    miau.play()
}

document.getElementById('gato').addEventListener('click', incrementarCliques);

export const upgrades = [
    {
        titulo:"Ratinhos trabalhadores",
        custo:"10",
        description:"Terá ratos para trabalhar pra você (autoclicker)",
    },

    {
        titulo:"Leite",
        custo:"20",
        description:"Faz o gato ficar feliz (multiplica 2x o autoclicker)",
    },

    {
        titulo:"Dar ao nome do seu gato",
        custo:"100",
        description:"Você pode nomear seu bichano",
    },

    {
        titulo:"Ronronar",
        custo:"150",
        description:"Seu pet comecou a gostar de você, ele irá ronronar quando você der carinho",
    }
]

