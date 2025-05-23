// Constantes e variáveis globais
const pontosDisplay = document.getElementById('pontos') // Criando a constante de pontos
const width = 40 // Definindo a quantidade de colunas
let pontos = 0 // Declarando os pontos sendo zero
const game = document.querySelector('.game') // Selecionando o primeiro elemento DOM de um seletor CSS especificado

// Layout do tabuleiro (0 - pac-dots, 1 - parede, 2 - covil dos fantasmas, 3 - power-pellet, 4 - espaço vazio)
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 3, 0, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 0, 0, 3, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
] 

const quadrados = [] // Definindo a constante quadrado e criando um array vazio

// Localização inicial do Pac-Man
let pmInicio = 700;
// Direção que irá seguir (0: parado, 1: esquerda, 2: cima, 3: direita, 4: baixo)
let pmDirecao;
// ID do intervalo para movimento contínuo
let pmIntervalId;

// Criando o tabuleiro
function createTabu() {
    // Laço que irá percorrer todos os 1600 elementos de layout
    for (let i = 0; i < layout.length; i++) {
        const quadrado = document.createElement('div') // Criando a div que representa uma célula no tabuleiro
        game.appendChild(quadrado) // Colocando o quadrado (square) dentro da grade (game)
        quadrados.push(quadrado) // Adicionando um item no final do array

        // Adicionando o layout para o tabuleiro
        if (layout[i] === 0) {
            quadrados[i].classList.add("pac-dot")
        } // Se no layout for 0, será um pac-dot
        if (layout[i] === 1) {
            quadrados[i].classList.add("parede")
        } // Se no layout for 1, será uma parede
        if (layout[i] === 2) {
            quadrados[i].classList.add("covil-fantasma")
        } // Se no layout for 2, será o covil dos fantasmas
        if (layout[i] === 3) {
            quadrados[i].classList.add("power-pellet")
        } // Se no layout for 3, será um power-pellet
    }
}

createTabu() // Chamando a função para construir o tabuleiro

// Criando os fantasmas usando constructor
// Classe Fantasma
class Fantasma {
    // Método especial que é chamado automaticamente quando cria um novo objeto
    // Inicializa as propriedades do objeto recém-criado
    constructor(nomeClasse, fmInicio, velocidade) {
        this.nomeClasse = nomeClasse
        this.fmInicio = fmInicio
        this.velocidade = velocidade
        this.atualPosi = fmInicio
        this.taAssustado = false
        this.timerId = NaN
    }
}

// Todos os fantasmas
const fantasmas = [
    new Fantasma("shadow", 582, 250),
    new Fantasma("speedy", 580, 400),
    new Fantasma("bashful", 497, 300),
    new Fantasma("pokey", 502, 500),
];

// Função de para iniciar o jogo, podendo reiniciar após vitória ou derrota
function iniciaJogo() {
    // Limpa o tabuleiro e reseta as variáveis
    pontos = 0;
    pontosDisplay.innerHTML = pontos;
    pmInicio = 700;
    pmDirecao = 0;
    clearInterval(pmIntervalId) ; // Limpa qualquer movimento anterior

    createTabu(); // Cria novamente o tabuleiro

    // Desenha o Pac-Man
    quadrados[pmInicio].classList.add("pac-man");

    // Reinciandos os fantasmas
    fantasmas.forEach(function(fantasma) {
        clearInterval(fantasma.timerId); // Limpa o timer anterior
        fantasma.atualPosi = fantasma.fmInicio; // Recoloca na posição inicial
        fantasma.taAssustado = false; // Recoloca o fantasma no estado normal
        // Removendo toda as classe fantasma das posições antes de adionar na posição inicial
        for (let i = 0; i < quadrados.length; i++) {
            quadrados[i].classList.remove(fantasma.nomeClasse, "fantasma", "fantasma-assustado");
        }
        quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma");
        moverFantasma(fantasma); // Inicia o movimento dos fantasmas novamente
    });
}

// Movendo o Pac-Man
function mvPM() {
    let proximaPosi = pmInicio;

    // Calcula a próxima posição baseado na direção atual
    if (pmDirecao === 1) {
        proximaPosi = pmInicio - 1; // Move-se para esquerda
        // Altera da borda esquerda para borda direita
        if (pmInicio % width === 0) {
            proximaPosi = pmInicio + width - 1;
        }
    }

    else if (pmDirecao === 2) {
        proximaPosi = pmInicio - width; // Move-se para cima
    }

    else if (pmDirecao === 3) {
        proximaPosi = pmInicio + 1; // Move-se para direita
        // Altera da borda direita para borda esquerda
        if ((pmInicio + 1) % width === 0) {
            proximaPosi = pmInicio - width + 1;
        }
    }

    else if (pmDirecao === 4) {
        proximaPosi = pmInicio + width; // Move-se para baixo
    }

    // Verificando se a próxima posição é válida, não sendo parede ou o covil dos fantasmas
    // E adicionando verificação para garantir que a próxima posição está dentro do limite do array
    if (
        pmDirecao !== 0 && //Se não estiver parado
        proximaPosi >= 0 && proximaPosi < quadrados.length && // Garantindo se a posição é válida
        !quadrados[proximaPosi].classList.contains("parede") &&
        !quadrados[proximaPosi].classList.contains("covil-fantasma")
    ) {
        // Removendo a classe da posição antiga
        quadrados[pmInicio].classList.remove("pac-man");
        // Atualizando a posição
        pmInicio = proximaPosi;
        // Adicionando a classe da nova posição
        quadrados[pmInicio].classList.add("pac-man");
        
        comePD();
        comePP();
        olhaGO();
        olhaVT();
    }

    else if (pmDirecao !== 0) {
        // Se não alterar o movimento atual, para o movimento contínuo
        clearInterval(pmIntervalId);
        pmDirecao = 0; // Define a direção como nula
    }
}

// Função para iniciar ou alterar o movimento contínuo
function inMov(nwDire) {
    if (pmDirecao === nwDire && pmIntervalId) {
        return; // Já está se movendo na mesma direção
    }
    pmDirecao = nwDire;
    clearInterval(pmIntervalId); // Limpa o intervalo anterior
    pmIntervalId = setInterval(mvPM, 180); // Inicia o movimento contínuo com velocidade de 180
}

// Função para input do teclado
function mvPMTeclado(event) {
    switch (event.key) {
        case 'ArrowLeft':
            inMov(1); // 1: irá para esquerda
            break;
        case 'ArrowUp':
            inMov(2); // 2: irá para cima
            break;
        case 'ArrowRight':
            inMov(3); // 3: irá para direita
            break;
        case 'ArrowDown':
            inMov(4); // 4: irá para baixo
            break;
    }
}

// Event Listener para as setas do teclado
document.addEventListener("keydown", mvPMTeclado);

// Função para comer o pac-dot
function comePD() {
    if (quadrados[pmInicio].classList.contains("pac-dot")) {
        pontos++ // Aumenta os pontos
        pontosDisplay.innerHTML = pontos // Substitui pelo novo valor
        quadrados[pmInicio].classList.remove("pac-dot") // Remove os pac-dots
    }
}

// Função para comer os power-pellet
function comePP() {
    if (quadrados[pmInicio].classList.contains("power-pellet")) {
        pontos += 10; // Aumenta +10 pontos
        pontosDisplay.innerHTML = pontos; // Substitui pelo novo valor
        fantasmas.forEach(function(fantasma) { 
            fantasma.taAssustado = true;
        });
        setTimeout(nAssustaFantasma, 10000); // Tempo para que o fantasma volte ao normal
        quadrados[pmInicio].classList.remove("power-pellet"); // Remove os power-pellet
    }
}

// Fazendo os fantasmas ficarem assustados
function nAssustaFantasma() {
    fantasmas.forEach(function(fantasma) {
        fantasma.taAssustado = false;
    });
}

// Movendo fantasmas aleatoriamente
function moverFantasma(fantasma) {
    const direcoes = [-1, 1, width, -width]; // Esquerda, Direita, Baixo, Cima
    let direcao = direcoes[Math.floor(Math.random() * direcoes.length)];

    fantasma.timerId = setInterval(function () {
        let proximaPosicaoFantasma = fantasma.atualPosi + direcao;

        // Adicionado verificação para garantir que proximaPosicaoFantasma está no limites do array
        if (proximaPosicaoFantasma < 0 || proximaPosicaoFantasma >= quadrados.length ||
            quadrados[proximaPosicaoFantasma].classList.contains("parede") ||
            quadrados[proximaPosicaoFantasma].classList.contains("fantasma")) {
            // Se a próxima posição é inválida, uma parede ou outro fantasma, tenta uma nova direção
            direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
            proximaPosicaoFantasma = fantasma.atualPosi + direcao; // Tenta a nova posição
        }

        // Se a nova direção ainda for a uma parede ou fantasma, o fantasma fica parado
        if (proximaPosicaoFantasma >= 0 && proximaPosicaoFantasma < quadrados.length &&
            !quadrados[proximaPosicaoFantasma].classList.contains("parede") &&
            !quadrados[proximaPosicaoFantasma].classList.contains("fantasma")) {

            quadrados[fantasma.atualPosi].classList.remove(fantasma.nomeClasse, "fantasma", "fantasma-assustado");
            fantasma.atualPosi = proximaPosicaoFantasma;
            quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma");
        }

        // Se o fantasma estiver assustado
        if (fantasma.taAssustado) {
            quadrados[fantasma.atualPosi].classList.add("fantasma-assustado");
        }

        // Se o fantasma estiver assustado e o Pac-Man estiver perto
        if (fantasma.taAssustado && quadrados[fantasma.atualPosi].classList.contains("pac-man")) {
            fantasma.taAssustado = false;
            quadrados[fantasma.atualPosi].classList.remove(fantasma.nomeClasse, "fantasma", "fantasma-assustado");
            fantasma.atualPosi = fantasma.fmInicio; // Retorna o fantasma para sua posição inicial
            pontos += 100; // Adiciona mais 100 pontos ao jogador
            pontosDisplay.innerHTML = pontos; // Altera a quantidade de pontos
            quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma"); // Recoloca o fantasma para se movimentar
        }
        olhaGO();
    }, fantasma.velocidade);
}

// Olhando se houve Game Over
function olhaGO() {
    if (
        quadrados[pmInicio].classList.contains("fantasma") &&
        !quadrados[pmInicio].classList.contains("fantasma-assustado")) {
        fantasmas.forEach(function(fantasma) {
            clearInterval(fantasma.timerId);
        });
        clearInterval(pmIntervalId); // Para o movimento do Pac-Man
        setTimeout(function () {
            alert("Game Over");
            startGame(); // Reinicia o jogo após o Game Over
        }, 500);
    }
}

// Olhando se houve vitória
function olhaVT() {
    // Coloando uma quantidade de pontos aleatória (pode alterar)
    if (pontos >= 150) {
        fantasmas.forEach(function(fantasma) { // Alterado de arrow function para função tradicional
            clearInterval(fantasma.timerId);
        });
        clearInterval(pmIntervalId); // Para o movimento do Pac-Man
        setTimeout(function () {
            alert("Você Ganhou!!!");
            startGame(); // Reinicia o jogo após a vitória
        }, 500);
    }
}

// Inicia o jogo quando a página carrega
window.onload = iniciaJogo;