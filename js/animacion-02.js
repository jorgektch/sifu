var posX1_1=0;
var posX1_2=0;
var posX3=0;
var posX3_1= 0;
var posX3_2= 0;
var factor1=1;
var factor3 = 1;
function iniciar(){
    var elemento = document.getElementById("lienzo");
    var canvas = elemento.getContext("2d");
    // Fondo
    var fondo = document.createElement("img");
    fondo.src = "img/a02-fondo.jpg";
    fondo.addEventListener("load", function(){
        canvas.drawImage(fondo, 0, 0,1280, 720);
    });
    //Particiones
    canvas.beginPath();
    canvas.moveTo(426,360); canvas.lineTo(426,700);
    canvas.moveTo(853,360); canvas.lineTo(853,700);
    canvas.moveTo(20,360); canvas.lineTo(1260,360);
    canvas.moveTo(640,360); canvas.lineTo(640,20);
    canvas.lineWidth=5;
    canvas.stroke();
    // primera interaccion
    // carga positiva
    var positivo1 = document.createElement("img");
    positivo1.src = "img/a02-cargaPositiva.png";
    positivo1.addEventListener("load", function(){
        canvas.drawImage(positivo1,184,510, 60, 60);
    });
    canvas.beginPath();
    canvas.moveTo(213,500); canvas.lineTo(213,390);
    canvas.moveTo(202,501); canvas.lineTo(174,395);
    canvas.moveTo(193,505); canvas.lineTo(138,410);
    canvas.moveTo(184,511); canvas.lineTo(106,433);
    canvas.moveTo(178,520); canvas.lineTo(83,465);
    canvas.moveTo(174,529); canvas.lineTo(68,501);
    canvas.moveTo(173,540); canvas.lineTo(63,540);
    canvas.moveTo(174,550); canvas.lineTo(68,578);
    canvas.moveTo(178,560); canvas.lineTo(83,615);
    canvas.moveTo(184,568); canvas.lineTo(106,646);
    canvas.moveTo(192,574); canvas.lineTo(137,669);
    canvas.moveTo(202,578); canvas.lineTo(174,684);
    canvas.moveTo(213,580); canvas.lineTo(213,690);
    canvas.moveTo(223,578); canvas.lineTo(251,684);
    canvas.moveTo(233,574); canvas.lineTo(288,669);
    canvas.moveTo(241,568); canvas.lineTo(319,646);
    canvas.moveTo(247,560); canvas.lineTo(342,615);
    canvas.moveTo(251,550); canvas.lineTo(357,578);
    canvas.moveTo(253,540); canvas.lineTo(363,540);
    canvas.moveTo(251,529); canvas.lineTo(357,501);
    canvas.moveTo(247,520); canvas.lineTo(342,465);
    canvas.moveTo(241,511); canvas.lineTo(319,433);
    canvas.moveTo(233,505); canvas.lineTo(288,410);
    canvas.moveTo(223,501); canvas.lineTo(251,395);
    canvas.lineWidth=2;
    canvas.stroke();
    //Segunda interaccion
    // carga negatica
    var negativo1 = document.createElement("img");
    negativo1.src = "img/a02-cargaNegativa.png";
    negativo1.addEventListener("load", function(){
        canvas.drawImage(negativo1,1035,509, 60, 60);
    });
    canvas.beginPath();
    canvas.moveTo(1065,500); canvas.lineTo(1065,390);
    canvas.moveTo(1054,501); canvas.lineTo(1026,395);
    canvas.moveTo(1044,505); canvas.lineTo(989,410);
    canvas.moveTo(1036,511); canvas.lineTo(958,433);
    canvas.moveTo(1030,519); canvas.lineTo(935,465);
    canvas.moveTo(1026,529); canvas.lineTo(920,501);
    canvas.moveTo(1025,540); canvas.lineTo(915,540);
    canvas.moveTo(1026,550); canvas.lineTo(920,578);
    canvas.moveTo(1030,560); canvas.lineTo(935,615);
    canvas.moveTo(1036,568); canvas.lineTo(958,646);
    canvas.moveTo(1045,574); canvas.lineTo(990,669);
    canvas.moveTo(1054,578); canvas.lineTo(1026,684);
    canvas.moveTo(1065,580); canvas.lineTo(1065,690);
    canvas.moveTo(1075,578); canvas.lineTo(1103,684);
    canvas.moveTo(1085,574); canvas.lineTo(1140,669);
    canvas.moveTo(1093,568); canvas.lineTo(1171,646);
    canvas.moveTo(1099,560); canvas.lineTo(1194,615);
    canvas.moveTo(1103,550); canvas.lineTo(1209,578);
    canvas.moveTo(1105,540); canvas.lineTo(1215,540);
    canvas.moveTo(1103,529); canvas.lineTo(1209,501);
    canvas.moveTo(1099,519); canvas.lineTo(1194,465);
    canvas.moveTo(1093,511); canvas.lineTo(1171,433);
    canvas.moveTo(1085,505); canvas.lineTo(1140,410);
    canvas.moveTo(1075,501); canvas.lineTo(1103,395);
    canvas.lineWidth=2;
    canvas.stroke();
    // movimiento
    //Tercera interaccion
    var negativo2 = document.createElement("img");
    negativo2.src = "img/a02-cargaNegativa.png";
    negativo2.addEventListener("load", function(){
        canvas.drawImage(negativo2,710,510, 60, 60);
    });
    var positivo2 = document.createElement("img");
    positivo2.src = "img/a02-cargaPositiva.png";
    positivo2.addEventListener("load", function(){
        canvas.drawImage(positivo2,516,510, 60, 60);
    });
    //lineas de campo
    canvas.beginPath();
    canvas.arc(642,510,70,34.59*Math.PI/180,143.47*Math.PI/180,false);//Cordenada x, cordenada y, radio, angulo de partida, angulo de llegada, sentido de giro(antihorario true, horario false)
    canvas.moveTo(585,540); canvas.lineTo(700,540);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,570,70,-34.59*Math.PI/180,-143.47*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,570,90,-34.59*Math.PI/180,-143.47*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,510,90,34.59*Math.PI/180,143.47*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,510,110,34.59*Math.PI/180,143.47*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,570,110,-34.59*Math.PI/180,-143.47*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,550,100,17.19*Math.PI/180,162.1*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(642,530,100,-17.19*Math.PI/180,-162.1*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(558,560,200,-17.19*Math.PI/180,-50*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(558,520,200,17.19*Math.PI/180,50*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(725,520,200,130*Math.PI/180,162.1*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(725,560,200,-130*Math.PI/180,-162.1*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(510,675,130,-90*Math.PI/180,-125*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(510,400,130,90*Math.PI/180,125*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(773,400,130,(180-123)*Math.PI/180,(180-90)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(773,675,130,(360-90)*Math.PI/180,(270+33)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(650,715,200,(-53)*Math.PI/180,(-15)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(670,680,200,(-180+38)*Math.PI/180,(-180)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(650,360,200,(170)*Math.PI/180,(130)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(650,360,200,(53)*Math.PI/180,(15)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    //cuarta interaccion
    var positivo3 = document.createElement("img");
    positivo3.src = "img/a02-cargaPositiva.png";
    positivo3.addEventListener("load", function(){
        canvas.drawImage(positivo3,245,150, 60, 60);
    });
    var positivo4 = document.createElement("img");
    positivo4.src = "img/a02-cargaPositiva.png";
    positivo4.addEventListener("load", function(){
        canvas.drawImage(positivo4,335,150, 60, 60);
    });
    canvas.beginPath();
    canvas.arc(112,140,200,(10)*Math.PI/180,(-35)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(527,140,200,(170)*Math.PI/180,(-145)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(527,240,200,(150)*Math.PI/180,(-168)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(112,240,200,(30)*Math.PI/180,(-13)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(112,240,200,(25)*Math.PI/180,(-13)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(100,150,200,(65)*Math.PI/180,(18)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(100,200,200,(-13)*Math.PI/180,(-65)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(545,195,200,(-125)*Math.PI/180,(193)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(550,190,200,(134)*Math.PI/180,(174)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(555,130,200,(100)*Math.PI/180,(155)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(555,240,200,(207)*Math.PI/180,(-103)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(530,300,200,(225)*Math.PI/180,(270)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(530,70,200,(136)*Math.PI/180,(90)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(95,240,200,(290)*Math.PI/180,(332)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(95,105,200,(33)*Math.PI/180,(70)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(105,65,200,(90)*Math.PI/180,(45)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(115,300,200,(-48)*Math.PI/180,(-90)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    //quinta interaccion
    var negativo3 = document.createElement("img");
    negativo3.src = "img/a02-cargaNegativa.png";
    negativo3.addEventListener("load", function(){
        canvas.drawImage(negativo3,930,150, 60, 60);
    });
    var negativo4 = document.createElement("img");
    negativo4.src = "img/a02-cargaNegativa.png";
    negativo4.addEventListener("load", function(){
        canvas.drawImage(negativo4,335+685,150, 60, 60);
    });
    canvas.beginPath();
    canvas.arc(112+685,140,200,(10)*Math.PI/180,(-35)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(527+685,140,200,(170)*Math.PI/180,(-145)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(527+685,240,200,(150)*Math.PI/180,(-168)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(112+685,240,200,(30)*Math.PI/180,(-13)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(112+685,240,200,(25)*Math.PI/180,(-13)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(100+685,150,200,(65)*Math.PI/180,(18)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(100+685,200,200,(-13)*Math.PI/180,(-65)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(545+685,195,200,(-125)*Math.PI/180,(193)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(550+685,190,200,(134)*Math.PI/180,(174)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(555+685,130,200,(100)*Math.PI/180,(155)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(555+685,240,200,(207)*Math.PI/180,(-103)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(530+685,300,200,(225)*Math.PI/180,(270)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(530+685,70,200,(136)*Math.PI/180,(90)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(95+685,240,200,(290)*Math.PI/180,(332)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(95,105,200,(33)*Math.PI/180,(70)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(105+685,65,200,(90)*Math.PI/180,(45)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(115+685,300,200,(-48)*Math.PI/180,(-90)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    /*var negativo1 = document.createElement("img");
    negativo1.src = "img/a02-cargaNegativa.png";
    negativo1.addEventListener("load", function(){
        canvas.drawImage(negativo1,520,200,95,95);
    })
    var negativo2 = document.createElement("img");
    negativo2.src = "img/a02-cargaNegativa.png";
    negativo2.addEventListener("load", function(){
        canvas.drawImage(negativo2,660, 200, 95,95);
    });*/
    // tercera interancion
    // carga positiva
    /*var positivo3 = document.createElement("img");
    positivo3.src = "img/a02-cargaPositiva.png";
    positivo3.addEventListener("load", function(){
        canvas.drawImage(positivo3,5,350, 90, 90);
    });*/
    // carga negativa
    /*var negativo3 = document.createElement("img");
    negativo3.src = "img/a02-cargaNegativa.png";
    negativo3.addEventListener("load", function(){
        canvas.drawImage(negativo3,1180,350, 95, 95);
    });*/
    // movimiento
    // Texto
    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);