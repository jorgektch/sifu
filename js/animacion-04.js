var posX1_1=0;
var posX1_2=0;
var posX1_3=0;
var posY1_1=0;
var posY1_2=0;
var posY1_3=0;
var factor=1;
var factor1=0;
var factor2=0;
var contador=1;
var contador1=1;
var factorCont=1;

function iniciar(){
    var elemento = document.getElementById("lienzo");
    var canvas = elemento.getContext("2d");
    // Fondo
    var fondo = document.createElement("img");
    fondo.src = "img/a01-fondo.jpg";
    fondo.addEventListener("load", function(){
        canvas.drawImage(fondo, 0, 0,1280, 720);
    });
    //Particula cargada
    var particulaCargadaq = document.createElement("img");
    particulaCargadaq.src="img/a04-particulaCargadaq.png";
    particulaCargadaq.addEventListener("load",function(){
        canvas.drawImage(particulaCargadaq,638-18+posX1_1+posX1_2-posX1_3,61-21+posY1_1+posY1_2+posY1_3,35,35);
    });
    //Particula cargada
    var particulaCargadaq = document.createElement("img");
    particulaCargadaq.src="img/a04-particulaCargadaq.png";
    particulaCargadaq.addEventListener("load",function(){
        canvas.drawImage(particulaCargadaq,638-18+posX1_1+posX1_2-posX1_3,61-21+posY1_1+posY1_2+posY1_3,35,35);
    });
    var voltage1 = document.createElement("img");
    voltage1.src="img/a04-voltage1.png";
    voltage1.addEventListener("load",function(){
        canvas.drawImage(voltage1,640,20,25,25);
    });
    //Movimiento
    posX1_1=posX1_1+factor*154/100;
    posX1_2=posX1_2+factor1*10/100;
    posX1_3=posX1_3+factor2*103/100;
    posY1_1=posY1_1+factor*115/100;
    posY1_2=posY1_2+factor1*185/100;
    posY1_3=posY1_3+factor2*85/100;
    contador=contador+factorCont;
    if(contador>=115){
        factor=0;
        factor1=1;
        var voltage2 = document.createElement("img");
        voltage2.src="img/a04-voltage2.png";
        voltage2.addEventListener("load",function(){
            canvas.drawImage(voltage2,800,150,25,25);
        });
        if (contador>=207) {
            factor1=0;
            factor2=1;
            var voltage3 = document.createElement("img");
            voltage3.src="img/a04-voltage3.png";
            voltage3.addEventListener("load",function(){
                canvas.drawImage(voltage3,818,363,25,25);
            });
            if (contador>=305) {
                factor2=0;
                var voltage4 = document.createElement("img");
                voltage4.src="img/a04-voltage4.png";
                voltage4.addEventListener("load",function(){
                    canvas.drawImage(voltage4,715,453,25,25);
                });
            }
        }
    }
    var particulaCargadaQ = document.createElement("img");
    particulaCargadaQ.src="img/a04-particulaCargada_Q.png";
    particulaCargadaQ.addEventListener("load",function(){
        canvas.drawImage(particulaCargadaQ,600,323,75,75);
    });
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(958,360); canvas.lineTo(700,360);
    canvas.moveTo(318,360); canvas.lineTo(575,360);
    canvas.moveTo(637,300); canvas.lineTo(637,41);
    canvas.moveTo(637,420); canvas.lineTo(637,685);
    canvas.moveTo(411,587); canvas.lineTo(595,403);
    canvas.moveTo(680,318); canvas.lineTo(864,134);
    canvas.moveTo(411,134); canvas.lineTo(595,318);
    canvas.moveTo(680,403); canvas.lineTo(864,587);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(638,361,120,0,2*Math.PI,false);
    canvas.lineWidth=2;//Ancho de la linea del borde
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(638,361,60,0,2*Math.PI,false);
    canvas.lineWidth=2;//Ancho de la linea del borde
    canvas.stroke();
    canvas.arc(638,361,180,0,2*Math.PI,false);
    canvas.lineWidth=2;//Ancho de la linea del borde
    canvas.stroke();
    canvas.arc(638,361,240,0,2*Math.PI,false);
    canvas.lineWidth=2;//Ancho de la linea del borde
    canvas.stroke();
    canvas.arc(638,361,300,0,2*Math.PI,false);
    canvas.lineWidth=2;//Ancho de la linea del borde
    canvas.stroke();
    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);