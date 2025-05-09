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
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
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
            if ((pmInicio - 1) === 400) {
                pmInicio = 360;  // Se teletransporta de esquerda para direita
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
            if ((pmInicio + 1) === 360) {
                pmInicio = 400; // Se teletransporta da direita para esquerda
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
        pontos ++ // Aumenta os pontos
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
// Classe fantasma
class fantasma {
    constructor
}