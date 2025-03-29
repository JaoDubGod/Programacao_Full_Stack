let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

// quadrado vermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(240,10,50,50);
ctx.strokeRect(240,10,50,50);
ctx.closePath();

// "L" amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(10,240,50,50);
ctx.strokeRect(10,240,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(35,240,25,25);
ctx.strokeRect(35,240,25,25);
ctx.closePath();

// quadrado preto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(240,240,50,50);
ctx.strokeRect(240,240,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(240,240,25,25);
ctx.strokeRect(240,240,25,25);
ctx.closePath();

// retângulo aqua
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(10,125,25,50);
ctx.strokeRect(10,125,25,50);
ctx.closePath();

// quadrado aqua
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(250,130,40,40);
ctx.strokeRect(250,130,40,40);
ctx.closePath();

// quadrado vermelho meio
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(110,150,40,40);
ctx.strokeRect(110,150,40,40);
ctx.closePath();

// linha azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(10,10);
ctx.lineTo(150,150)
ctx.stroke();
ctx.closePath();

// linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(290,10);
ctx.lineTo(150,150)
ctx.stroke();
ctx.closePath();

// linha central verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(10,150);
ctx.lineTo(290,150)
ctx.stroke();
ctx.closePath();

// linha vertical cinza
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'grey';
ctx.moveTo(150,150);
ctx.lineTo(150,290)
ctx.stroke();
ctx.closePath();



// entorno
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(10,10,280,280);
ctx.closePath();

