const pontosDisplay = document.getElementById('pontos') // Criando a constante de pontos
const width = 40 // Definindo a quantidade de colunas
let pontos = 0 // Declarando os pontos sendo zero
const game = document.querySelector('.game') // Selecionando o primeiro elemento DOM de um seletor CSS especificado

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
] // Layout criado com 40 colunas (40x40)

// 0 - pac-dots (pontos)
// 1 - parede
// 2 - covil dos fantasmas
// 3 - power-pellet (circulos maiores que deixam fantasmas vulneráveis)
// 4 - espaço vazio

const quadrados = [] // Definindo a constante quadrado e criando um array vazio

// Criando o tabuleiro
function createTabu() {
    // Laço que irá percorrer todos os 1600 elementos de layout
    for (let i = 0; i < layout.length; i++) {
        const quadrado = document.createElement('div') // Criando a div que representa uma célula no tabuleiro
        game.appendChild(quadrado) // Colocando o quadrado (square) dentro da grade (game)
        quadrados.push(quadrado) // Adicionando um item no finao do array

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

// Criando personagens
// Desenhando o Pac-Man dentro do tabuleiro
let pmInicio = 700 // Localização inicial do Pac-Man
quadrados[pmInicio].classList.add("pac-man") // Mostrando o Pac-Man visualmente

// Movendo o Pac-Man
function mvPM(event) {
    quadrados[pmInicio].classList.remove("pac-man") // Remove a classe para "desaparecer" da posição antiga
    // Trocando a tecla no evento. Retornando uma string como "ArrowUp", "ArrowDown", "ArrowLeft" ou "ArrowRight"
    switch (event.key) {
        case 'ArrowLeft': // Caso pressionar a seta da esquerda
            if (
                pmInicio % width !== 0 && // Analisa se não está encostado na borda esquerda
                !quadrados[pmInicio - 1].classList.contains("parede") && // Verifica se a célula à esquerda não é parede, para não poder atravessar
                !quadrados[pmInicio - 1].classList.contains("covil-fantasma") // Verifica se a célula à esquerda não é o covil, onde não pode entrar
            ) {
                pmInicio -= 1 // Se todas forem verdade, move-se para esquerda
            }
            if ((pmInicio - 1) === 360) {
                pmInicio = 400;  // Se teletransporta de esquerda para direita
            }
            break
        case "ArrowUp":
            if (
                pmInicio - width >= 0 && // Analisa se não está encostado na borda superior
                !quadrados[pmInicio - width].classList.contains("parede") && // Verifica se a célula de cima não é parede, para não poder atravessar
                !quadrados[pmInicio - width].classList.contains("covil-fantasma") // Verifica se a célula de cima não é o covil, onde não pode entrar
            ) {
                pmInicio -= width // Se todas forem verdade, move-se para cima
            }
            break
        case "ArrowRight":
            if (
                pmInicio % width < width - 1 && // Analisa se não está encostado na borda direita
                !quadrados[pmInicio + 1].classList.contains("parede") && // Verifica se a célula à direita não é parede, para não poder atravessar
                !quadrados[pmInicio + 1].classList.contains("covil-fantasma") // Verifica se a célula à direita não é o covil, onde não pode entrar
            ) {
                pmInicio += 1 // Se todas forem verdade, move-se para direita
            }
            if ((pmInicio + 1) === 400) {
                pmInicio = 360; // Se teletransporta da direita para esquerda
            }
            break
        case "ArrowDown":
            if (
                pmInicio + width < width * width && // Analisa se não está encostado na borda inferior
                !quadrados[pmInicio + width].classList.contains("parede") && // Verifica se a célula de baixo não é parede, para não poder atravessar
                !quadrados[pmInicio + width].classList.contains("covil-fantasma") // Verifica se a célula de baixo não é o covil, onde não pode entrar
            ) {
                pmInicio += width
            }
            break
    }
    quadrados[pmInicio].classList.add("pac-man")
    comePD()
    comePP()
    olhaGO()
    olhaVT()
}

document.addEventListener("keyup", mvPM)

// Comendo o pac-dot
function comePD() {
    if (quadrados[pmInicio].classList.contains("pac-dot")) {
        pontos++ // Aumenta os pontos
        pontosDisplay.innerHTML = pontos // Substitui pelo novo valor
        quadrados[pmInicio].classList.remove("pac-dot") // Remove os pac-dots
    }
}

// Comendo os power-pellet
function comePP() {
    if (quadrados[pmInicio].classList.contains("power-pellet")) {
        pontos += 10 // Aumenta +10 pontos
        pontosDisplay.innerHTML = pontos // Substitui pelo novo valor
        fantasmas.forEach(fantasmas => fantasmas.taAssustado = true) // Verifica se a o fantasma vai estar assustado
        setTimeout(nAssustaFantasma, 10000) // Tempo para que o fantasma volte ao normal
        quadrados[pmInicio].classList.remove("power-pellet") // Remove os power-pellet
    }
}

// Fazendo os fantasmas ficarem assutados
function nAssustaFantasma() {
    fantasmas.forEach(fantasmas => fantasmas.taAssustado = false)
}

// Criando os fantasmas usando constructor
// Classe Fantasma
class Fantasma {
    // Método especial que é chamado automaticamente quando cria um novo objeto
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
// Adicionando eles usando a class fantasma
const fantasmas = [
    new Fantasma("shadow", 582, 250),
    new Fantasma("speedy", 580, 400),
    new Fantasma("bashful", 497, 300),
    new Fantasma("pokey", 502, 500),
]

// Desenhando os fantasmas dentro do tabuleiro
fantasmas.forEach(fantasma => quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma"))

// Movendo eles aleatoriamente
fantasmas.forEach(fantasma => moverFantasma(fantasma))

// Criando função andaFantasma
function moverFantasma(fantasma) {
    const direcoes = [-1, 1, width, -width]
    // Definindo uma direção inicial aletória
    let direcao = direcoes[Math.floor(Math.random() * direcoes.length)]


    fantasma.timerId = setInterval(function () {
        // Se o próximo quadrado que o fantasma for não tem fantasma e não é parede
        if (
            !quadrados[fantasma.atualPosi + direcao].classList.contains("parede") && // Verifica se a próxima posição do fantasma for em direção a parede
            !quadrados[fantasma.atualPosi + direcao].classList.contains("fantasma") // E em direção à uma fantasma
        ) {
            quadrados[fantasma.atualPosi].classList.remove(fantasma.nomeClasse, "fantasma", "fantasma-assustado")
            fantasma.atualPosi += direcao
            quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma")
        }
        // Se não, procura uma nova direção aleatória para ir
        else direcao = direcoes[Math.floor(Math.random() * direcoes.length)]

        // Se o fantasmas estiver assustado
        if (fantasma.taAssustado) {
            quadrados[fantasma.atualPosi].classList.add("fantasma-assustado")
        }

        // Se o fantasma estiver assustado e o Pac-Man estiver perto
        if (fantasma.taAssustado && quadrados[fantasma.atualPosi].classList.contains("pac-man")) {
            fantasma.taAssustado = false
            quadrados[fantasma.atualPosi].classList.remove(fantasma.nomeClasse, "fantasma", "fantasma-assustado") // Se o Pac-Man passar pelo fantasma e ele estiver assustado
            fantasma.atualPosi = fantasma.fmInicio // Retorna o fantasma para sua posição inicial
            pontos += 100 // Adiciona mais 100 pontos ao jogador
            pontosDisplay.innerHTML = pontos // Altera a quantidade de pontos
            quadrados[fantasma.atualPosi].classList.add(fantasma.nomeClasse, "fantasma") // Recoloca o fantasma para andar pelo mapa
        }
        olhaGO()
    }, fantasma.velocidade)
}

// Olhando se houve Game Over

function olhaGO() {
    if (
        quadrados[pmInicio].classList.contains("fantasma") &&
        !quadrados[pmInicio].classList.contains("fantasma-assustado")) {
        fantasmas.forEach(fantasma => clearInterval(fantasma.timerId))
        document.removeEventListener("keyup", mvPM)
        setTimeout(function () {
            alert("Game Over")
        }, 500)
    }
}

// Olhando se houve vitória
function olhaVT() {
    // Coloando uma quantidade de pontos aleatória (pode alterar)
    if (pontos >= 400) {
        fantasmas.forEach(fantasma => clearInterval(fantasma.timerId))
        document.removeEventListener("keyup", mvPM)
        setTimeout(function () {
            alert("Você Ganhou!!!")
        }, 500)
    }
}