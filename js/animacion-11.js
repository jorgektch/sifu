const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
var canvasWidth = canvas.offsetWidth;
var canvasHeight = canvas.offsetHeight;

// Variables de posicion de los controles
var bw = 25;
var bh = 20;
var r = 60;
var h1 = 1280-3*r-2*bw;
var k1 = 720-r-bh;
var h2 = 1280-r-bw;
var k2 = 720-r-bh;

var enPausa = false;

/* DESDE ESTA PARTE PUEDEN/DEBEN EDITAR (PAARA QUE COLOQUEN SUS VARIABLES) */

// Elementos de la animacion, pueden haber arreglos
var particlesArray = [];

/* HASTA ESTA PARTE PUEDEN/DEBEN EDITAR */

// Posicion del mouse
const mouse = {
    x: null,
    y: null,
}

// Dibujado de controles
function drawControls(){
    ctx.fillStyle = '#021B49';
    
    ctx.beginPath();
    ctx.arc(h1,k1,r,2*Math.PI,false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(h2,k2,r,2*Math.PI,false);
    ctx.fill();

    // Boton para pausar y continuar
    if(enPausa == false){
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.rect(h1-20, k1-25, 10, 45);
        ctx.rect(h1+10, k1-25, 10, 45);
        ctx.fill();
        ctx.closePath();
    }else{
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(h1-20,k1-25);
        ctx.lineTo(h1+20,k1);
        ctx.lineTo(h1-20,k1+25);
        ctx.fill();
        ctx.closePath();
    }
    
    // Boton para reiniciar
    ctx.beginPath();
    ctx.arc(h2, k2, 30,0,-Math.PI * 0.5, false);
    ctx.arc(h2, k2, 23,-Math.PI * 0.5,0, true);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(h2,k2-40);
    ctx.lineTo(h2+20,k2-25);
    ctx.lineTo(h2,k2-10);
    ctx.fill();
    ctx.closePath();
}

/* DESDE ESTA PARTE PUEDEN/DEBEN EDITAR (PARA DEFINIR SUS CLASES, FUNCIONES, POSICIONES INICIALES Y FORMA DE MOVERSE) */

// Clases con los elementos que se dibujaran
class ConductingWire{
    constructor(){
        this.w = 800;
        this.h = 75;
        this.x = 1280/2-this.w/2;
        this.y = 200;
        this.speedX = 0;
        this.speedY = 0;
    }
    update(){
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
    draw(){
        ctx.fillStyle = '#7480d4';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.arc(this.x+this.w, this.y+this.h/2, this.h/2, 0, 2*Math.PI);
        ctx.fill();
        ctx.beginPath();

        ctx.fillStyle = '#5e66ab';
        ctx.arc(this.x, this.y+this.h/2, this.h/2, 0, 2*Math.PI);
        ctx.fill();
    }
}

class ConductingPart{
    constructor(){
        this.w = 60;
        this.h = 75;
        this.x = 980;
        this.y = 200;
        this.speedX = -5;
        this.speedY = 0;
    }
    update(){
        if(this.x == 240){
            this.speedX = 0;
        }
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
    draw(){
        ctx.fillStyle = '#6c74c4';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.arc(this.x+this.w, this.y+this.h/2, this.h/2, 0, 2*Math.PI);
        ctx.fill();
        ctx.beginPath();

        ctx.fillStyle = '#5e66ab';
        ctx.arc(this.x, this.y+this.h/2, this.h/2, 0, 2*Math.PI);
        ctx.fill();
    }
}

class RightHand{
    constructor(){
        this.w = 415;
        this.h = 402*this.w/621;
        this.x = 715;
        this.y = 375;
        this.speedX = -5;
        this.speedY = 0;
    }
    update(){
        if(this.x == -25){
            this.speedX = 0;
        }
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }
    draw(){
        var img = document.createElement("img");
        img.src = "img/a11-right-hand.png";
        ctx.drawImage(img, this.x, this.y,this.w, this.h);

        var img = document.createElement("img");
        img.src = "img/a11-lines.png";
        ctx.drawImage(img, this.x, this.y-275,this.w, this.h);
    }
}

// Funcion que inicializa las posiciones de los elementos
function init(){
    cw = new ConductingWire();
    cp = new ConductingPart();
    rh = new RightHand();
}

// Funcion que mueve las posiciones de los elementos
function handleElements(){
    cw.update();
    cp.update();
    rh.update();
}

// Funcion que muestra los elementos
function showElements(){
    cw.draw();
    cp.draw();
    rh.draw();
}

/* HASTA ESTA PARTE PUEDEN/DEBEN EDITAR */

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if(enPausa == false){
        handleElements();
    }
    showElements(); // Primero dibuja los elementos
    drawControls(); // Luego los botones
    requestAnimationFrame(animate);
}

// Listener que revisa si hay clicks en los controles de pausa y reinicio
canvas.addEventListener('click', function(event){
    mouse.x = Math.round((event.pageX-canvasLeft)/canvasWidth*1280);
    mouse.y = Math.round((event.pageY-canvasTop)/canvasHeight*720);
    
    if(Math.pow(mouse.x-h1, 2)+Math.pow(mouse.y-k1, 2) <= Math.pow(r, 2)){
        if(enPausa == false){
            enPausa = true;
            //console.log('PAUSADO');
        }else{
            enPausa = false;
            //console.log('EN MOVIMIENTO');
        }
    }
    if(Math.pow(mouse.x-h2, 2)+Math.pow(mouse.y-k2, 2) <= Math.pow(r, 2)){
        init();
    }
}, false);

function run(){
    init();
    
    animate();
}
run();