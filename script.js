let totalCliques = 0;
var totalUpgrades = 0;

export function contarUpgrades() {
    totalUpgrades = upgrades.quantidade;
    displayUpgrades();
}

export function contarCliques() {
    totalCliques += 1;
    displayCliques(); 
}

function displayCliques(){
    const labelClique = document.getElementById('labelClique');
    labelClique.innerHTML = Math.floor(totalCliques);

    const upgradeCards = document.querySelectorAll('.cardContainer');

    upgrades.forEach((upgrade, indice)=>{
    const upgradeCardsHtml = upgradeCards[indice];
    
    if (upgradeCardsHtml) {
        if (totalCliques >= parseFloat(upgrade.custo)) {
            upgradeCardsHtml.classList.remove('upgradeIndisponivel');
            upgradeCardsHtml.classList.add ('upgradeDisponivel');
        } else {
            upgradeCardsHtml.classList.remove('upgradeDisponivel');
            upgradeCardsHtml.classList.add('upgradeIndisponivel');
        }
    }
});
}

function displayUpgrades(){
    const labelUpdateUpgrades = document.getElementById('quantidadeUpgradesLabel')
    labelUpdateUpgrades.innerHTML = Math.floor(totalUpgrades);
}



document.getElementById('gato').addEventListener('click', contarCliques);

window.comprarUpgrade = function(indice){
    const upgrade = upgrades[indice];
    const custo = parseFloat(upgrade.custo);
    
    if (totalCliques >= custo) {
        totalCliques -= custo;

        upgrade.quantidade += 1;

        upgrade.acao();
        displayCliques();
        
    }
    else {
        alert("Cliques insuficientes! Clique um pouco mais :3")
    }
}

//upgrades e suas funcionalidades abaixo:
function upgradeRatinhos() {
    var tempoAlteravel = 1000;

    setInterval(()=>{
        totalCliques += 1;
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

export const upgrades = [
    {
        titulo:"Ratinhos Trabalhadores",
        custo:"10",
        descricao:"Terá ratos para trabalhar pra você (autoclicker 1 clique por segundo cada ratinho)",
        acao: upgradeRatinhos,
        quantidade: 0
    },

    {
        titulo:"Leite",
        custo:"20",
        descricao:"Faz o gato ficar feliz (multiplica 2x o autoclicker)",
        acao: upgradeLeite,
        quantidade: 0
    },

    {
        titulo:"Dar nome ao seu gato",
        custo:"100",
        descricao:"Você pode nomear seu bichano",
        acao: upgradeNomeGato,
        quantidade: 0,
    },

    {
        titulo:"Ronronar",
        custo:"150",
        descricao:"Seu pet comecou a gostar de você, ele irá ronronar quando você der carinho",
        acao: upgradeRonronar,
        quantidade: 0,
    }
]


displayCliques();
