let contarCliques = document.getElementById('labelClique')

export function displayCliques() {
    contarCliques.innerHTML = parseFloat(contarCliques.innerHTML) + 1 
}

document.getElementById('gato').addEventListener('click', displayCliques)

export const upgrades = [
    {
        titulo:"Ratinhos Trabalhadores",
        custo:"10",
        descricao:"Terá ratos para trabalhar pra você (autoclicker)",
        acao: upgradeRatinhos
    },

    {
        titulo:"Leite",
        custo:"20",
        descricao:"Faz o gato ficar feliz (multiplica 2x o autoclicker)",
        acao: upgradeLeite
    },

    {
        titulo:"Dar nome ao seu gato",
        custo:"100",
        descricao:"Você pode nomear seu bichano",
        acao: upgradeNomeGato
    },

    {
        titulo:"Ronronar",
        custo:"150",
        descricao:"Seu pet comecou a gostar de você, ele irá ronronar quando você der carinho",
        acao: upgradeRonronar
    }
]

function comprarUpgrade(indice){
    const upgrade = upgrades[indice];
    const custo = parseFloat(upgrade.custo);
    
    if (document.getElementById('labelClique').innerHTML >= custo) {
        document.getElementById('labelClique').innerHTML -= custo;

        upgrade.acao();
    }
    else {
        alert("Cliques insuficientes! Clique um pouco mais :3")
    }
}

//upgrades e suas funcionalidades abaixo:
function upgradeRatinhos() {
    var tempoAlteravel = 1000;

    setInterval(()=>{
        displayCliques();
    }, tempoAlteravel);
}

function upgradeLeite() {
    console.log('teste')
}

function upgradeNomeGato() {
    console.log('teste')
}

function upgradeRonronar() {
    console.log('teste')
}


