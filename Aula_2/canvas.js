let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// quadrado azul
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.strokeRect(0,0,50,50);
ctx.closePath();

// quadrado vermelho
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.strokeRect(250,0,50,50);
ctx.closePath();

// "L" amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,240,60,60);
ctx.strokeRect(0,240,60,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(30,240,30,30);
ctx.strokeRect(30,240,30,30);
ctx.closePath();

// "L" preto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(240,240,60,60);
ctx.strokeRect(240,240,60,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(240,240,30,30);
ctx.strokeRect(240,240,30,30);
ctx.closePath();

// retângulo aqua
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0,120,30,60);
ctx.strokeRect(0,120,30,60);
ctx.closePath();

// quadrado aqua
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(270,135,30,30);
ctx.strokeRect(270,135,30,30);
ctx.closePath();

// quadrado vermelho meio
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(110,150,40,40);
ctx.strokeRect(110,150,40,40);
ctx.closePath();

// linha azul
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

// linha vermelha
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(300,0);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

// linha central verde
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

// linha vertical cinza
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'grey';
ctx.moveTo(150,150);
ctx.lineTo(150,290);
ctx.stroke();
ctx.closePath();

// semicirculo central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,60,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

// arco esquerda central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,80,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

// arco direita central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,80,1.75*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

// semi circulo central inferior
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,40,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arco esquerda inferior
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,300,80,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath()

// arco direito inferior
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,300,60,1.5*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

// circulo central
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,115,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath()

// circulo amarelo esquerda
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(70,220,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath()

// circulo amarelo direita
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(220,220,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath()

// texto
ctx.beginPath();
ctx.lineWidth = 0.1;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.strokeText("Canvas",150,50);
ctx.closePath();

// entorno
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,300,300);
ctx.closePath();
