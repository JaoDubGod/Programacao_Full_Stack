// Constantes e variáveis globais
const canvas = document.getElementById('gameCanvas'); // Selecionando o elemento canvas no HTML
const ctx = canvas.getContext('2d'); // Definindo o contexto do canvas para desenhar em 2D
const pontosDisplay = document.getElementById('pontos'); // Selecionando o elemento de pontos
const width = 40; // Definindo a quantidade de colunas
const tileSize = canvas.width / width; // Tamanho de cada célula no canvas
let pontos = 0; // Inicializando os pontos com zero

// Layout do tabuleiro
const layout = [ 
    /* Layout igual ao seu, removido aqui para economizar espaço, mas use o mesmo */
];

// Localização inicial do Pac-Man
let pmInicio = 700;
// Direção que irá seguir (0: parado, 1: esquerda, 2: cima, 3: direita, 4: baixo)
let pmDirecao = 0;
// ID do intervalo para movimento contínuo
let pmIntervalId;

// Função que desenha o tabuleiro no canvas
function drawTabu() {
    for (let i = 0; i < layout.length; i++) {
        const x = (i % width) * tileSize; // Calculando a coordenada x do quadrado
        const y = Math.floor(i / width) * tileSize; // Calculando a coordenada y do quadrado

        // Definindo a cor de acordo com o tipo de célula
        if (layout[i] === 0) {
            ctx.fillStyle = 'yellow'; // pac-dot
            ctx.fillRect(x + tileSize/4, y + tileSize/4, tileSize/2, tileSize/2);
        } 
        else if (layout[i] === 1) {
            ctx.fillStyle = 'blue'; // parede
            ctx.fillRect(x, y, tileSize, tileSize);
        } 
        else if (layout[i] === 2) {
            ctx.fillStyle = 'purple'; // covil dos fantasmas
            ctx.fillRect(x, y, tileSize, tileSize);
        } 
        else if (layout[i] === 3) {
            ctx.fillStyle = 'orange'; // power-pellet
            ctx.beginPath();
            ctx.arc(x + tileSize/2, y + tileSize/2, tileSize/4, 0, 2 * Math.PI);
            ctx.fill();
        }
        // Espaço vazio (4) não precisa desenhar nada
    }
}

// Função para desenhar o Pac-Man
function drawPacMan() {
    const x = (pmInicio % width) * tileSize; // Calculando x baseado na posição atual
    const y = Math.floor(pmInicio / width) * tileSize; // Calculando y baseado na posição atual

    ctx.fillStyle = 'yellow'; // Definindo a cor do Pac-Man
    ctx.beginPath();
    ctx.arc(x + tileSize / 2, y + tileSize / 2, tileSize / 2.5, 0.25 * Math.PI, 1.75 * Math.PI); // Desenhando "boca aberta"
    ctx.lineTo(x + tileSize / 2, y + tileSize / 2);
    ctx.fill();
}

// Classe Fantasma
class Fantasma {
    constructor(nomeClasse, fmInicio, velocidade, cor) {
        this.nomeClasse = nomeClasse; // Nome da classe (para identificar o fantasma)
        this.fmInicio = fmInicio; // Posição inicial
        this.velocidade = velocidade; // Velocidade de movimento
        this.atualPosi = fmInicio; // Posição atual
        this.taAssustado = false; // Estado do fantasma
        this.timerId = NaN; // ID do intervalo de movimento
        this.cor = cor; // Cor para desenhar no canvas
    }
}

// Criando os fantasmas
const fantasmas = [
    new Fantasma("shadow", 582, 250, 'red'),
    new Fantasma("speedy", 580, 400, 'pink'),
    new Fantasma("bashful", 497, 300, 'cyan'),
    new Fantasma("pokey", 502, 500, 'orange'),
];

// Função para desenhar fantasmas
function drawFantasmas() {
    fantasmas.forEach(fantasma => {
        const x = (fantasma.atualPosi % width) * tileSize;
        const y = Math.floor(fantasma.atualPosi / width) * tileSize;
        ctx.fillStyle = fantasma.taAssustado ? 'blue' : fantasma.cor; // Cor muda se estiver assustado
        ctx.beginPath();
        ctx.arc(x + tileSize / 2, y + tileSize / 2, tileSize / 3, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Função para desenhar todo o jogo
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpando o canvas
    drawTabu(); // Desenhando o tabuleiro
    drawPacMan(); // Desenhando o Pac-Man
    drawFantasmas(); // Desenhando os fantasmas
}

// Movendo o Pac-Man
function mvPM() {
    let proximaPosi = pmInicio;

    // Calcula a próxima posição baseado na direção atual
    if (pmDirecao === 1) {
        proximaPosi = pmInicio - 1; // Move-se para esquerda
        if (pmInicio % width === 0) proximaPosi = pmInicio + width - 1; // Saída para borda oposta
    } else if (pmDirecao === 2) {
        proximaPosi = pmInicio - width; // Move-se para cima
    } else if (pmDirecao === 3) {
        proximaPosi = pmInicio + 1; // Move-se para direita
        if ((pmInicio + 1) % width === 0) proximaPosi = pmInicio - width + 1; 
    } else if (pmDirecao === 4) {
        proximaPosi = pmInicio + width; // Move-se para baixo
    }

    // Verifica se a próxima posição é válida
    if (
        pmDirecao !== 0 && 
        proximaPosi >= 0 && proximaPosi < layout.length &&
        layout[proximaPosi] !== 1 && // Não pode atravessar parede
        layout[proximaPosi] !== 2 // Nem o covil dos fantasmas
    ) {
        pmInicio = proximaPosi; // Atualizando a posição
    }

    drawGame(); // Redesenha o jogo com a nova posição
}

// Movendo os fantasmas
function moverFantasma(fantasma) {
    fantasma.timerId = setInterval(() => {
        let direcoes = [-1, +1, -width, +width]; // Esquerda, Direita, Cima, Baixo
        let direcao = direcoes[Math.floor(Math.random() * direcoes.length)];
        let novaPosi = fantasma.atualPosi + direcao;

        // Verifica se a nova posição não é parede nem covil
        if (
            novaPosi >= 0 && novaPosi < layout.length &&
            layout[novaPosi] !== 1 &&
            layout[novaPosi] !== 2
        ) {
            fantasma.atualPosi = novaPosi; // Atualiza a posição do fantasma
            drawGame(); // Redesenha o jogo
        }
    }, fantasma.velocidade);
}

// Função de iniciar o jogo
function iniciaJogo() {
    pontos = 0; // Resetando os pontos
    pontosDisplay.innerHTML = pontos; // Atualizando a exibição
    pmInicio = 700; // Resetando posição do Pac-Man
    pmDirecao = 0; // Resetando a direção
    clearInterval(pmIntervalId); // Limpando intervalo de movimento

    fantasmas.forEach(fantasma => {
        clearInterval(fantasma.timerId);
        fantasma.atualPosi = fantasma.fmInicio;
        fantasma.taAssustado = false;
        moverFantasma(fantasma); // Iniciando o movimento dos fantasmas
    });

    drawGame(); // Desenhando o jogo
}

// Controle de teclado
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') pmDirecao = 1;
    if (e.key === 'ArrowUp') pmDirecao = 2;
    if (e.key === 'ArrowRight') pmDirecao = 3;
    if (e.key === 'ArrowDown') pmDirecao = 4;
});

// Loop para movimentar o Pac-Man continuamente
pmIntervalId = setInterval(mvPM, 200); // Movimentando a cada 200ms

iniciaJogo(); // Chamando a função para iniciar o jogo
