var posX1_1=0;
var posX1_2=0;
var posX3=0;
var posX3_1= 0;
var posX3_2= 0;
var factor1=1;
var factor3 = 1;

function iniciarTodo(){
    // Botones
    iniciar();
}

function iniciar(){
    // Aqui van los dibujos
    
    // Aqui van los cambios de movimiento
    
}

function iniciar(){
    var elemento = document.getElementById("lienzo");
    var canvas = elemento.getContext("2d");
    var elementoLeft = elemento.offsetLeft;
    var elementoTop = elemento.offsetTop;
    var elementotWidth = elemento.offsetWidth;
    var elementoHeight = elemento.offsetHeight;
    var enPausa = false;
    var elementos = [];
    // Fondo
    var fondo = document.createElement("img");
    fondo.src = "img/a01-fondo.jpg";
    fondo.addEventListener("load", function(){
        canvas.drawImage(fondo, 0, 0,1280, 720);
    });
    //Plano cartesiano
    canvas.beginPath();
    
    
    canvas.moveTo(636,500); canvas.lineTo(636,10);
    canvas.moveTo(637,500); canvas.lineTo(637,10);
    canvas.moveTo(638,500); canvas.lineTo(638,10);
    canvas.moveTo(639,500); canvas.lineTo(639,10);
    canvas.moveTo(640,500); canvas.lineTo(640,10);
    canvas.moveTo(20,500); canvas.lineTo(1260,500);
    canvas.moveTo(20,501); canvas.lineTo(1260,501);
    canvas.moveTo(20,502); canvas.lineTo(1260,502);
    canvas.moveTo(20,503); canvas.lineTo(1260,503);
    canvas.moveTo(20,504); canvas.lineTo(1260,504);
    canvas.moveTo(120,475); canvas.lineTo(120,525);
    canvas.moveTo(121,475); canvas.lineTo(121,525);
    canvas.moveTo(122,475); canvas.lineTo(122,525);
    canvas.moveTo(123,475); canvas.lineTo(123,525);
    canvas.moveTo(124,475); canvas.lineTo(124,525);
    canvas.moveTo(1160,475); canvas.lineTo(1160,525);
    canvas.moveTo(1161,475); canvas.lineTo(1161,525);
    canvas.moveTo(1162,475); canvas.lineTo(1162,525);
    canvas.moveTo(1163,475); canvas.lineTo(1163,525);
    canvas.moveTo(1164,475); canvas.lineTo(1164,525);
    canvas.moveTo(300,475); canvas.lineTo(300,525);
    canvas.moveTo(301,475); canvas.lineTo(301,525);
    canvas.moveTo(302,475); canvas.lineTo(302,525);
    canvas.moveTo(303,475); canvas.lineTo(303,525);
    canvas.moveTo(304,475); canvas.lineTo(304,525);
    canvas.moveTo(980,475); canvas.lineTo(980,525);
    canvas.moveTo(981,475); canvas.lineTo(981,525);
    canvas.moveTo(982,475); canvas.lineTo(982,525);
    canvas.moveTo(983,475); canvas.lineTo(983,525);
    canvas.moveTo(984,475); canvas.lineTo(984,525);
    canvas.moveTo(500,475); canvas.lineTo(500,525);
    canvas.moveTo(501,475); canvas.lineTo(501,525);
    canvas.moveTo(502,475); canvas.lineTo(502,525);
    canvas.moveTo(503,475); canvas.lineTo(503,525);
    canvas.moveTo(504,475); canvas.lineTo(504,525);
    canvas.moveTo(780,475); canvas.lineTo(780,525);
    canvas.moveTo(781,475); canvas.lineTo(781,525);
    canvas.moveTo(782,475); canvas.lineTo(782,525);
    canvas.moveTo(783,475); canvas.lineTo(783,525);
    canvas.moveTo(784,475); canvas.lineTo(784,525);
    canvas.stroke();
    var puntaSuperior = document.createElement("img");
    puntaSuperior.src="img/a01-puntaSuperiorPlanoCarteciano.png";
    puntaSuperior.addEventListener("load",function(){
        canvas.drawImage(puntaSuperior,603,5,70,35);
    });
    var puntaIzquierda = document.createElement("img");
    puntaIzquierda.src="img/a01-puntaIzquierdaPlanoCarteciano.png";
    puntaIzquierda.addEventListener("load",function(){
        canvas.drawImage(puntaIzquierda,5,485,70,35);
    });
    var puntaDerecha = document.createElement("img");
    puntaDerecha.src="img/a01-puntaDerechaPlanoCarteciano.png";
    puntaDerecha.addEventListener("load",function(){
        canvas.drawImage(puntaDerecha,1200,485,70,35);
    });
    // primera interaccion
    // carga positiva
    var positivo1 = document.createElement("img");
    positivo1.src = "img/a01-cargaPositiva.png";
    positivo1.addEventListener("load", function(){
        canvas.drawImage(positivo1,660+posX1_2,50, 90, 90);
    });
    // carga positiva
    var positivo2 = document.createElement("img");
    positivo2.src = "img/a01-cargaPositiva.png";
    positivo2.addEventListener("load", function(){
        canvas.drawImage(positivo2,520+posX1_1,50, 90, 90);
    });
    // movimiento
    posX1_1=posX1_1-factor1*1;
    posX1_2=posX1_2+factor1*1;
    //segunda interaccion
    var negativo1 = document.createElement("img");
    negativo1.src = "img/a01-cargaNegativa.png";
    negativo1.addEventListener("load", function(){
        canvas.drawImage(negativo1,520+posX1_1,200,95,95);
    })
    var negativo2 = document.createElement("img");
    negativo2.src = "img/a01-cargaNegativa.png";
    negativo2.addEventListener("load", function(){
        canvas.drawImage(negativo2,660+posX1_2, 200, 95,95);
    });
    // tercera interancion
    // carga positiva
    var positivo3 = document.createElement("img");
    positivo3.src = "img/a01-cargaPositiva.png";
    positivo3.addEventListener("load", function(){
        canvas.drawImage(positivo3,5+posX3_1,350, 90, 90);
    });
    // carga negativa
    var negativo3 = document.createElement("img");
    negativo3.src = "img/a01-cargaNegativa.png";
    negativo3.addEventListener("load", function(){
        canvas.drawImage(negativo3,1180-posX3_2,350, 95, 95);
    });
    // movimiento
    posX3_1 = posX3_1+factor3*1;
    posX3_2 = posX3_2+factor3*1;
    if(posX3_1==545){
        factor3 = 0;
    }
    // Texto
    canvas.fillStyle = "black";
    canvas.font = "bold 18px verdana, sans-serif";
    canvas.fillText("Segun la ley de Coulomb la fuerza varia en funcion del cuadrado de la distancia, entonces:", 20, 590);
    canvas.fillText("En los puntos a y -a:", 20, 620);
    canvas.fillText("a", 775, 550);
    canvas.fillText("-a", 490, 550);
    canvas.fillText("b", 975, 550);
    canvas.fillText("-b", 290, 550);
    canvas.fillText("c", 1155, 550);
    canvas.fillText("-c", 110, 550);
    var fuerzaPa = document.createElement("img");
    fuerzaPa.src = "img/a01-fuerzaPuntosa-a.png";
    fuerzaPa.addEventListener("load", function(){
        canvas.drawImage(fuerzaPa,20,625,250, 95);
    });
    canvas.fillText("En los puntos b y -b:", 300, 620);
    canvas.beginPath();
    canvas.moveTo(281,610); canvas.lineTo(281,710);
    canvas.moveTo(282,610); canvas.lineTo(282,710);
    canvas.moveTo(283,610); canvas.lineTo(283,710);
    canvas.moveTo(284,610); canvas.lineTo(284,710);
    canvas.moveTo(285,610); canvas.lineTo(285,710);
    canvas.stroke();
    var fuerzaPb = document.createElement("img");
    fuerzaPb.src = "img/a01-fuerzaPuntob-b.png";
    fuerzaPb.addEventListener("load", function(){
        canvas.drawImage(fuerzaPb,300,625,250, 95);
    });
    canvas.fillText("En los puntos c y -c:", 580, 620);
    canvas.beginPath();
    canvas.moveTo(555,610); canvas.lineTo(555,710);
    canvas.moveTo(556,610); canvas.lineTo(556,710);
    canvas.moveTo(557,610); canvas.lineTo(557,710);
    canvas.moveTo(558,610); canvas.lineTo(558,710);
    canvas.moveTo(559,610); canvas.lineTo(559,710);
    canvas.stroke();
    var fuerzaPc = document.createElement("img");
    fuerzaPc.src = "img/a1-fuerzaPuntoc-c.png";
    fuerzaPc.addEventListener("load", function(){
        canvas.drawImage(fuerzaPc,580,625,250, 95);
    });
    canvas.beginPath();
    canvas.moveTo(840,610); canvas.lineTo(840,710);
    canvas.moveTo(841,610); canvas.lineTo(841,710);
    canvas.moveTo(842,610); canvas.lineTo(842,710);
    canvas.moveTo(843,610); canvas.lineTo(843,710);
    canvas.moveTo(844,610); canvas.lineTo(844,710);

    canvas.stroke();
    canvas.fillText("Es graficamente evidente que:",870, 620);
    canvas.fillText("2a<2b<2c", 870, 650);
    canvas.fillText("Se nota que la magnitud de la fuerza", 870, 680);
    canvas.fillText("disminuye cuando aumenta la distancia.", 870, 710);

    // Botones de pausa y play, respectivamente
    
    var bw = 25;
    var bh = 20;
    var r = 60;
    var h1 = 1280-3*r-2*bw;
    var k1 = 720-r-bh;
    var h2 = 1280-r-bw;
    var k2 = 720-r-bh;
    canvas.beginPath();
    canvas.arc(h1,k1,r,2*Math.PI,false);
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(h2,k2,r,2*Math.PI,false);
    canvas.stroke();
    
    elemento.addEventListener('click', function(event){
        var x = (event.pageX-elementoLeft)/elementotWidth*1280;
        var y = (event.pageY-elementoTop)/elementoHeight*720;
        //console.log(x,y);
        //console.log(x, y);
        //console.log(Math.pow(x-h1, 2)+Math.pow(y-k1, 2),Math.pow(r, 2));

        if(Math.pow(x-h1, 2)+Math.pow(y-k1, 2) <= Math.pow(r, 2) && enPausa == false){
            enPausa = true;
            console.log('Hizo click en PAUSA');
        }
        if(Math.pow(x-h2, 2)+Math.pow(y-k2, 2) <= Math.pow(r, 2)){
            window.requestAnimationFrame(iniciar);
        }
    }, true);

    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);