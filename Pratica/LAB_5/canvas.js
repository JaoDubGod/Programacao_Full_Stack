// Início primeira Imgem

let canvas = document.getElementById('canvas');
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

// Final primeira imagem

// Início segunda imagem

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');


// terreno
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'grey';
ctx2.strokeStyle = 'grey';
ctx2.fillRect(0,200,300,300);
ctx2.strokeRect(0,200,300,300);
ctx2.closePath();

// lago azul

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'dodgerblue';
ctx2.strokeStyle = 'dodgerblue';
ctx2.fillRect(0,190,55,170);
ctx2.strokeRect(0,200,55,170);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'dodgerblue';
ctx2.strokeStyle = 'dodgerblue';
ctx2.fillRect(0,260,170,50);
ctx2.strokeRect(0,260,170,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'dodgerblue';
ctx2.arc(170,320,60,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'dodgerblue';
ctx2.arc(-5,205,62,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// sol
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = "yellow";
ctx2.arc(230,70,40,0,2*Math.PI);
ctx2.fill();
ctx2.closePath();

// árvores
ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'brown';
ctx2.strokeStyle = 'brown';
ctx2.fillRect(60,150,20,50);
ctx2.strokeRect(60,150,20,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'brown';
ctx2.strokeStyle = 'brown';
ctx2.fillRect(250,200,20,50);
ctx2.strokeRect(250,200,20,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.arc(260,190,25,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.arc(70,145,25,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

// casa

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'peru';
ctx2.strokeStyle = 'peru';
ctx2.fillRect(120,110,80,90);
ctx2.strokeRect(120,110,80,90);
ctx2.closePath();

// porta

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'brown';
ctx2.strokeStyle = 'brown';
ctx2.fillRect(150,150,20,50);
ctx2.strokeRect(150,150,20,50);
ctx2.closePath();

// janelas

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'lightblue';
ctx2.strokeStyle = 'lightblue';
ctx2.fillRect(127,127,23,23);
ctx2.strokeRect(127,127,23,23);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'lightblue';
ctx2.strokeStyle = 'lightblue';
ctx2.fillRect(168,127,23,23);
ctx2.strokeRect(168,127,23,23);
ctx2.closePath();

// telhado

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'coral';
ctx2.strokeStyle = 'coral';
ctx2.moveTo(120,110);
ctx2.lineTo(200, 110);
ctx2.lineTo(160, 70);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();
