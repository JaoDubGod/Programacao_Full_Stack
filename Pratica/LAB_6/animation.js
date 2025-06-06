let canvas = document.getElementById('mouse');
let ctx = canvas.getContext('2d');

let mouseDentro = false

let bola = {
    x: 150,
    y: 150,
    raio: 15,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,300,300)
    bola.desenha();
    requestAnimationFrame(animacao)
}

animacao();

canvas.addEventListener('mouseenter', () => {
    mouseDentro = true;
});

canvas.addEventListener('mouseleave', () => {
    mouseDentro = false;
});

document.addEventListener('mousemove',function(evento){
    if (!mouseDentro) return;

    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;

    let r = bola.raio;

    if (x_mouse < r) {
        bola.x = r;
    } else if (x_mouse > 300 - 2*r) {
        bola.x = 300 - r;
    } else {
        bola.x = x_mouse;
    }

    if (y_mouse < r) {
        bola.y = r;
    } else if (y_mouse > 300 - 2*r) {
        bola.y = 300 - r;
    } else {
        bola.y = y_mouse;
    }
})
