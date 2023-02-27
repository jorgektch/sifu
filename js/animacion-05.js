var factor=1;
var factor1=1;
var factor2=1;
var factor3=1;
var factor4=1;
var factorCont=1;
var aumento=0;
var aumento1=0;
var aumento2=0;
var aumento3=0;
var aumento4=0;
var contador=0;
var contador1=0;
var contador2=0;
var contador3=0;
function iniciar(){
    var elemento = document.getElementById("lienzo");
    var canvas = elemento.getContext("2d");
    // Fondo
    var fondo = document.createElement("img");
    fondo.src = "img/a01-fondo.jpg";
    fondo.addEventListener("load", function(){
        canvas.drawImage(fondo, 0, 0,1280, 720);
    });
    //Sueprficie cargada
    var superficieEuleriana = document.createElement("img");
    superficieEuleriana.src="img/a03-superficieEuleriana.png";
    superficieEuleriana.addEventListener("load",function(){
        canvas.drawImage(superficieEuleriana,38,260,200,200);
    });
    var letraQ = document.createElement("img");
    letraQ.src="img/a05-letraQ.png";
    letraQ.addEventListener("load",function(){
        canvas.drawImage(letraQ,115,340,50,50);
    });
    canvas.beginPath();
    canvas.arc(138+aumento,360,0+aumento,(-90)*Math.PI/180,(90)*Math.PI/180,false);
    canvas.lineWidth=3;//Ancho de la linea del borde
    canvas.stroke();
    aumento=aumento+factor*1;
    contador++;
    /*if (contador>=10) {
        aumento=0;
        contador=0;
    }*/
    if (contador>=200) {
        contador1++;
        aumento1=aumento1+factor1*1;
        canvas.beginPath();
        canvas.arc(138+aumento1,360,0+aumento1,(-90)*Math.PI/180,(90)*Math.PI/180,false);
        canvas.lineWidth=3;//Ancho de la linea del borde
        canvas.stroke();
        if (contador1>=200) {    
            contador2++;
            aumento2=aumento2+factor2*1;
            canvas.beginPath();
            canvas.arc(138+aumento2,360,0+aumento2,(-90)*Math.PI/180,(90)*Math.PI/180,false);
            canvas.lineWidth=3;//Ancho de la linea del borde
            canvas.stroke();
            if (contador2>=200) {
                aumento3=aumento3+factor3*1;
                contador3++;
                canvas.beginPath();
                canvas.arc(138+aumento3,360,0+aumento3,(-90)*Math.PI/180,(90)*Math.PI/180,false);
                canvas.lineWidth=3;//Ancho de la linea del borde
                canvas.stroke();
                if (contador3>=800) {
                    contador3=0;
                    aumento3=0;
                }
            }
            if (contador2>=800) {
                contador2=0;
                aumento1=0;
            }
        }
        if (contador1>=800) {
            contador1=0;
            aumento1=0;
        }
    }
    if (contador>=800) {
        aumento=0;
        contador=0;
    }
    //Puntos
    canvas.beginPath();
    canvas.arc(500,360,10,(0)*Math.PI/180,(360)*Math.PI/180,false);
    canvas.lineWidth=0;
    canvas.fillStyle = "black";
    canvas.fill();;//Ancho de la linea del borde
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(1100,360,10,(0)*Math.PI/180,(360)*Math.PI/180,false);
    canvas.lineWidth=0;
    canvas.fillStyle = "black";
    canvas.fill();//Ancho de la linea del borde
    canvas.stroke();
    //Voltage
    var voltage1 = document.createElement("img");
    voltage1.src="img/a04-voltage1.png";
    voltage1.addEventListener("load",function(){
        canvas.drawImage(voltage1,500,380,25,25);
    });
    var voltage2 = document.createElement("img");
    voltage2.src="img/a04-voltage2.png";
    voltage2.addEventListener("load",function(){
        canvas.drawImage(voltage2,1100,380,25,25);
    });
    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);