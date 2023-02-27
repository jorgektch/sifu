var puntaIzquierdaPosX=0;
var puntaDerechaPosX=0;
var puntaSuperiorPosY=0;
var puntaInferiorPosY=0;
var punta30GradosPosX=0;
var punta30GradosPosY=0;
var punta60GradosPosX=0;
var punta60GradosPosY=0;
var punta60Grados1PosY=0;
var punta60Grados1PosX=0;
var punta30Grados1PosX=0;
var punta30Grados1PosY=0;
var punta120GradosPosY=0;
var punta120GradosPosX=0;
var punta120Grados1PosX=0;
var punta120Grados1PosY=0;
var punta210GradosPosY=0;
var punta210GradosPosX=0;
var punta210Grados1PosX=0;
var punta210Grados1PosY=0;
var punta78Coma59GradosPosY=0;
var punta78Coma59GradosPosX=0;
var punta71Coma1GradosPosX=0;
var punta71Coma1GradosPosY=0;
var punta93Coma05GradosPosY=0;
var punta93Coma05GradosPosX=0;
var punta87Coma18GradosPosX=0;
var punta87Coma18GradosPosY=0;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var factor=1;
function iniciar(){
    var elemento = document.getElementById("lienzo");
    var canvas = elemento.getContext("2d");
    // Fondo
    var fondo = document.createElement("img");
    fondo.src = "img/a01-fondo.jpg";
    fondo.addEventListener("load", function(){
        canvas.drawImage(fondo, 0, 0,1280, 720);
    });
    var superficieEuleriana = document.createElement("img");
    superficieEuleriana.src="img/a03-superficieEuleriana.png";
    superficieEuleriana.addEventListener("load",function(){
        canvas.drawImage(superficieEuleriana,230,260,200,200);
    });
    //Particiones
    canvas.beginPath();
    canvas.moveTo(640,700); canvas.lineTo(640,20);
    canvas.lineWidth=5;
    canvas.stroke();
    //Particula cargada
    var particulaCargada = document.createElement("img");
    particulaCargada.src="img/a04-particulaCargada_Q.png";
    particulaCargada.addEventListener("load",function(){
        canvas.drawImage(particulaCargada,283,323,75,75);
    });
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(320,310); canvas.lineTo(320,185);
    canvas.moveTo(295,316); canvas.lineTo(232,208);
    canvas.moveTo(276,335); canvas.lineTo(168,272);
    canvas.moveTo(145,360); canvas.lineTo(270,360);
    canvas.moveTo(276,385); canvas.lineTo(168,447);
    canvas.moveTo(295,403); canvas.lineTo(232,511);
    canvas.moveTo(320,410); canvas.lineTo(320,535);
    canvas.moveTo(345,403); canvas.lineTo(407,511);
    canvas.moveTo(363,385); canvas.lineTo(471,447);
    canvas.moveTo(370,360); canvas.lineTo(495,360);
    canvas.moveTo(363,335); canvas.lineTo(471,272);
    canvas.moveTo(345,316); canvas.lineTo(407,208);
    canvas.lineWidth=2;
    canvas.stroke();
    var particulaCargada2 = document.createElement("img");
    particulaCargada2.src="img/a04-particulaCargada_Q.png";
    particulaCargada2.addEventListener("load",function(){
        canvas.drawImage(particulaCargada2,800,523,75,75);
    });
    var superficieEuleriana2 = document.createElement("img");
    superficieEuleriana2.src="img/a03-superficieEuleriana.png";
    superficieEuleriana2.addEventListener("load",function(){
        canvas.drawImage(superficieEuleriana2,890,60,300,300);
    });
    canvas.beginPath();
    canvas.moveTo(840,510); canvas.lineTo(950,35);
    canvas.moveTo(860,520); canvas.lineTo(1050,35);
    canvas.moveTo(875,530); canvas.lineTo(1150,35);
    canvas.moveTo(890,545); canvas.lineTo(1250,35);
    canvas.lineWidth=2;
    canvas.stroke();
    //Flechas
    var puntaDerecha = document.createElement("img");
    puntaDerecha.src="img/a01-puntaDerechaPlanoCarteciano.png";
    puntaDerecha.addEventListener("load",function(){
        canvas.drawImage( puntaDerecha,365+puntaDerechaPosX,340,40,40);
    });
    //Movimiento
    puntaDerechaPosX = puntaDerechaPosX+factor*1;
    if(365+puntaDerechaPosX==485){
        puntaDerechaPosX = 0;
    }
    var puntaIzquierda = document.createElement("img");
    puntaIzquierda.src="img/a01-puntaIzquierdaPlanoCarteciano.png";
    puntaIzquierda.addEventListener("load",function(){
        canvas.drawImage( puntaIzquierda,235-puntaIzquierdaPosX,340,40,40);
    });
    //Movimiento
    puntaIzquierdaPosX = puntaIzquierdaPosX+factor*1;
    if(235-puntaIzquierdaPosX==115){
        puntaIzquierdaPosX = 0;
    }
    var puntaSuperior = document.createElement("img");
    puntaSuperior.src="img/a01-puntaSuperiorPlanoCarteciano.png";
    puntaSuperior.addEventListener("load",function(){
        canvas.drawImage( puntaSuperior,300,275-puntaSuperiorPosY,40,40);
    });
    //Movimiento
    puntaSuperiorPosY = puntaSuperiorPosY+factor*1;
    if(275-puntaSuperiorPosY==155){
        puntaSuperiorPosY = 0;
    }
    var puntaInferior = document.createElement("img");
    puntaInferior.src="img/a03-puntaInferiorPlanoCarteciano.png";
    puntaInferior.addEventListener("load",function(){
        canvas.drawImage( puntaInferior,300,405+puntaInferiorPosY,40,40);
    });
    //Movimiento
    puntaInferiorPosY = puntaInferiorPosY+factor*1;
    if(405+puntaInferiorPosY==525){
        puntaInferiorPosY = 0;
    }
    var punta30Grados = document.createElement("img");
    punta30Grados.src="img/a03-punta30GradosPlanoCarteciano.png";
    punta30Grados.addEventListener("load",function(){
        canvas.drawImage( punta30Grados,352+punta30GradosPosX,319-punta30GradosPosY,40,40);
    });
    //Movimiento
    punta30GradosPosX=punta30GradosPosX+factor*3/4;
    punta30GradosPosY=punta30GradosPosY+factor*Math.sqrt(3)/4;
    if(352+punta30GradosPosX==391+3*17){
        punta30GradosPosX = 0;
        punta30GradosPosY = 0;
    }
    var punta60Grados = document.createElement("img");
    punta60Grados.src="img/a03-punta60GradosPlanoCarteciano.png";
    punta60Grados.addEventListener("load",function(){
        canvas.drawImage( punta60Grados,320+punta60GradosPosX,290-punta60GradosPosY,40,40);
    });
    //Movimiento
    punta60GradosPosY=punta60GradosPosY+factor*3/4;
    punta60GradosPosX=punta60GradosPosX+factor*Math.sqrt(3)/4;
    if(punta60GradosPosY==120*3/4){
        punta60GradosPosX = 0;
        punta60GradosPosY = 0;
    }
    var punta60Grados1 = document.createElement("img");
    punta60Grados1.src="img/a03-punta60GradosPlanoCarteciano.png";
    punta60Grados1.addEventListener("load",function(){
        canvas.drawImage( punta60Grados1,320+punta60Grados1PosX,390+punta60Grados1PosY,40,40);
    });
    //Movimiento
    punta60Grados1PosX=punta60Grados1PosX+factor*Math.sqrt(3)/4;
    punta60Grados1PosY=punta60Grados1PosY+factor*3/4;
    if(punta60Grados1PosY==120*3/4){
        punta60Grados1PosX = 0;
        punta60Grados1PosY = 0;
    }
    var punta30Grados1 = document.createElement("img");
    punta30Grados1.src="img/a03-punta30GradosPlanoCarteciano.png";
    punta30Grados1.addEventListener("load",function(){
        canvas.drawImage( punta30Grados1,252-punta30Grados1PosX,319-punta30Grados1PosY,40,40);
    });
    //Movimiento
    punta30Grados1PosX=punta30Grados1PosX+factor*3/4;
    punta30Grados1PosY=punta30Grados1PosY+factor*Math.sqrt(3)/4;
    if(punta30Grados1PosX==120*3/4){
        punta30Grados1PosX = 0;
        punta30Grados1PosY = 0;
    }
    var punta120Grados = document.createElement("img");
    punta120Grados.src="img/a03-punta120GradosPlanoCarteciano.png";
    punta120Grados.addEventListener("load",function(){
        canvas.drawImage( punta120Grados,280-punta120GradosPosX,290-punta120GradosPosY,40,40);
    });
    //Movimiento
    punta120GradosPosX=punta120GradosPosX+factor*Math.sqrt(3)/4;
    punta120GradosPosY=punta120GradosPosY+factor*3/4;
    if(punta120GradosPosY==120*3/4){
        punta120GradosPosX = 0;
        punta120GradosPosY = 0;
    }
    var punta120Grados1 = document.createElement("img");
    punta120Grados1.src="img/a03-punta120GradosPlanoCarteciano.png";
    punta120Grados1.addEventListener("load",function(){
        canvas.drawImage( punta120Grados1,280-punta120Grados1PosX,390+punta120Grados1PosY,40,40);
    });
    //Movimiento
    punta120Grados1PosX=punta120Grados1PosX+factor*Math.sqrt(3)/4;
    punta120Grados1PosY=punta120Grados1PosY+factor*3/4;
    if(punta120Grados1PosY==120*3/4){
        punta120Grados1PosX = 0;
        punta120Grados1PosY = 0;
    }
    var punta210Grados = document.createElement("img");
    punta210Grados.src="img/a03-punta210GradosPlanoCarteciano.png";
    punta210Grados.addEventListener("load",function(){
        canvas.drawImage( punta210Grados,250-punta210GradosPosX,360+punta210GradosPosY,40,40);
    });
    //Movimiento
    punta210GradosPosX=punta210GradosPosX+factor*3/4;
    punta210GradosPosY=punta210GradosPosY+factor*Math.sqrt(3)/4;
    if(punta210GradosPosX==120*3/4){
        punta210GradosPosX = 0;
        punta210GradosPosY = 0;
    }
    var punta210Grados1 = document.createElement("img");
    punta210Grados1.src="img/a03-punta210GradosPlanoCarteciano.png";
    punta210Grados1.addEventListener("load",function(){
        canvas.drawImage( punta210Grados1,350+punta210Grados1PosX,360+punta210Grados1PosY,40,40);
    });
    //Movimiento
    punta210Grados1PosX=punta210Grados1PosX+factor*3/4;
    punta210Grados1PosY=punta210Grados1PosY+factor*Math.sqrt(3)/4;
    if(punta210Grados1PosX==120*3/4){
        punta210Grados1PosX = 0;
        punta210Grados1PosY = 0;
    }
    var punta87Coma18Grados = document.createElement("img");
    punta87Coma18Grados.src="img/a03-punta87Coma18GradosPlanoCarteciano.png";
    punta87Coma18Grados.addEventListener("load",function(){
        canvas.drawImage( punta87Coma18Grados,870+punta87Coma18GradosPosX,517-punta87Coma18GradosPosY,40,40);
    });
    //Movimiento
    punta87Coma18GradosPosX=punta87Coma18GradosPosX+factor*80/38;
    punta87Coma18GradosPosY=punta87Coma18GradosPosY+factor*113/38;
    contador4=contador4+factor*1;
    if(contador4==165){
        punta87Coma18GradosPosX = 0;
        punta87Coma18GradosPosY = 0;
        contador4=0;
    }
    var punta93Coma05Grados = document.createElement("img");
    punta93Coma05Grados.src="img/a03-punta93Coma05GradosPlanoCarteciano.png";
    punta93Coma05Grados.addEventListener("load",function(){
        canvas.drawImage( punta93Coma05Grados,852+punta93Coma05GradosPosX,505-punta93Coma05GradosPosY,40,40);
    });
    //Movimiento
    punta93Coma05GradosPosX=punta93Coma05GradosPosX+factor*62/38;
    punta93Coma05GradosPosY=punta93Coma05GradosPosY+factor*113/38;
    contador3=contador3+factor*1;
    if(contador3==165){
        punta93Coma05GradosPosX = 0;
        punta93Coma05GradosPosY = 0;
        contador3=0;
    }
    var punta71Coma1Grados = document.createElement("img");
    punta71Coma1Grados.src="img/a03-punta71Coma1GradosPlanoCarteciano.png";
    punta71Coma1Grados.addEventListener("load",function(){
        canvas.drawImage( punta71Coma1Grados,837+punta71Coma1GradosPosX,492-punta71Coma1GradosPosY,40,40);
    });
    //Movimiento
    punta71Coma1GradosPosX=punta71Coma1GradosPosX+factor*44/38;
    punta71Coma1GradosPosY=punta71Coma1GradosPosY+factor*111/38;
    contador2=contador2+factor*1;
    if(contador2==165){
        punta71Coma1GradosPosY = 0;
        punta71Coma1GradosPosX = 0;
        contador2=0;
    }
    var punta78Coma59Grados = document.createElement("img");
    punta78Coma59Grados.src="img/a03-punta78Coma59GradosPlanoCarteciano.png";
    punta78Coma59Grados.addEventListener("load",function(){
        canvas.drawImage( punta78Coma59Grados,818+punta78Coma59GradosPosX,482-punta78Coma59GradosPosY,40,40);
    });
    //Movimiento
    punta78Coma59GradosPosX=punta78Coma59GradosPosX+factor*28/40;
    punta78Coma59GradosPosY=punta78Coma59GradosPosY+factor*119/40;
    contador1=contador1+factor*1;
    if(contador1==165){
        punta78Coma59GradosPosX = 0;
        punta78Coma59GradosPosY = 0;
        contador1=0;
    }
    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);