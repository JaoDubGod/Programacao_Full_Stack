const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 20;

// Exemplo: desenhar parede
function drawWall(x, y) {
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(x, y, tileSize, tileSize);
}

// Exemplo: desenhar pac-dot
function drawPacDot(x, y) {
    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    ctx.arc(x + tileSize/2, y + tileSize/2, 5, 0, 2 * Math.PI);
    ctx.fill();
}

// Exemplo: desenhar power pellet
function drawPowerPellet(x, y) {
    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    ctx.arc(x + tileSize/2, y + tileSize/2, 8, 0, 2 * Math.PI);
    ctx.fill();
}

// Exemplo: desenhar Pac-Man
function drawPacMan(x, y) {
    ctx.fillStyle = '#8B8000';
    ctx.beginPath();
    ctx.arc(x + tileSize/2, y + tileSize/2, tileSize/2, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(x + tileSize/2, y + tileSize/2);
    ctx.fill();
}

// Exemplo de mapa simples
for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 20; col++) {
        const x = col * tileSize;
        const y = row * tileSize;

        if (row === 0 || row === 19 || col === 0 || col === 19) {
            drawWall(x, y);
        } else if ((row + col) % 5 === 0) {
            drawPacDot(x, y);
        } else if ((row + col) % 7 === 0) {
            drawPowerPellet(x, y);
        }
    }
}

// Exemplo: Pac-Man na posição (5,5)
drawPacMan(5 * tileSize, 5 * tileSize);
