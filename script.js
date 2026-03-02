let contarCliques = document.getElementById('labelClique')

export function displayCliques() {
    contarCliques.innerHTML = parseFloat(contarCliques.innerHTML) + 1 
}

document.getElementById('gato').addEventListener('click', contarCliques)

function comprarUpgrade(indice){
    let podeComprar = false;
    

    if (document.getElementById('labelClique').innerHTML >= {upgrades.custo}) {
        podeComprar = true;
    }
    else podeComprar() = false;
}

document.querySelector('.cardContainer').addEventListener('click', comprarUpgrade())

//upgrades e suas funcionalidades abaixo:
function upgradeRatinhos() {
    setInterval(()=>{
        displayCliques();
    }, 100);
}


export const upgrades = [
    {
        titulo:"Ratinhos Trabalhadores",
        custo:"10",
        description:"Terá ratos para trabalhar pra você (autoclicker)",
    },

    {
        titulo:"Leite",
        custo:"20",
        description:"Faz o gato ficar feliz (multiplica 2x o autoclicker)",
    },

    {
        titulo:"Dar nome ao seu gato",
        custo:"100",
        description:"Você pode nomear seu bichano",
    },

    {
        titulo:"Ronronar",
        custo:"150",
        description:"Seu pet comecou a gostar de você, ele irá ronronar quando você der carinho",
    }
]