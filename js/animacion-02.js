var posX1_1=0;
var posX1_2=0;
var posX3=0;
var posX3_1= 0;
var posX3_2= 0;
var factor1=1;
var factor3 = 1;
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
var contador5=0;
var contador6=0;
var factor=1;
var tamaño=0;
var factorC1=1;
var factorC2=1;
var factorC3=1;
var factorC4=1;
var factorC5=1;
var factorC6=1;
var factorC7=1;
var factorC8=1;
var factorC9=1;
var aumentoC1=0;
var aumentoC2=0;
var aumentoC3=0;
var aumentoC4=0;
var aumentoC5=0;
var aumentoC6=0;
var aumentoC7=0;
var aumentoC8=0;
var aumentoC9=0;
var aumentoC10=0;
var aumentoC11=0;
var aumentoC12=0;
var aumentoC13=0;
var aumentoC14=0;
var aumentoC15=0;
var aumentoC16=0;
var aumentoC17=0;
var aumentoC18=0;
var aumentoC19=0;
var aumentoC20=0;
var aumentoC21=0;
var aumentoC22=0;
var aumentoC23=0;
var aumentoC24=0;
var aumentoC25=0;
var aumentoC26=0;
var aumentoC27=0;
var aumentoC28=0;
var aumentoC29=0;
var aumentoC30=0;
var aumentoC31=0;
var aumentoC32=0;
var aumentoC33=0;
var aumentoC34=0;
var aumentoC35=0;
var aumentoC36=0;
var aumentoC37=0;
var aumentoC38=0;
var aumentoC39=0;
var aumentoC40=0;
var aumentoC41=0;
var aumentoC42=0;
var aumentoC43=0;
var aumentoC44=0;
var aumentoC45=0;
var aumentoC46=0;
var aumentoC47=0;
var aumentoC48=0;
var aumentoC49=0;
var aumentoC50=0;
var aumentoC51=0;
var aumentoC52=0;
var aumentoC53=0;
var aumentoC54=0;
var aumentoC55=0;
var movimientoX=685;
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
    canvas.moveTo(193,505); canvas.lineTo(138,410);
    canvas.moveTo(178,520); canvas.lineTo(83,465);
    canvas.moveTo(173,540); canvas.lineTo(63,540);
    canvas.moveTo(178,560); canvas.lineTo(83,615);
    canvas.moveTo(192,574); canvas.lineTo(137,669);
    canvas.moveTo(213,580); canvas.lineTo(213,690);
    canvas.moveTo(233,574); canvas.lineTo(288,669);
    canvas.moveTo(247,560); canvas.lineTo(342,615);
    canvas.moveTo(253,540); canvas.lineTo(363,540);
    canvas.moveTo(247,520); canvas.lineTo(342,465);
    canvas.moveTo(233,505); canvas.lineTo(288,410);
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
    canvas.moveTo(1044,505); canvas.lineTo(989,410);
    canvas.moveTo(1030,519); canvas.lineTo(935,465);
    canvas.moveTo(1025,540); canvas.lineTo(915,540);
    canvas.moveTo(1030,560); canvas.lineTo(935,615);
    canvas.moveTo(1045,574); canvas.lineTo(990,669);
    canvas.moveTo(1065,580); canvas.lineTo(1065,690);
    canvas.moveTo(1085,574); canvas.lineTo(1140,669);
    canvas.moveTo(1099,560); canvas.lineTo(1194,615);
    canvas.moveTo(1105,540); canvas.lineTo(1215,540);
    canvas.moveTo(1099,519); canvas.lineTo(1194,465);
    canvas.moveTo(1085,505); canvas.lineTo(1140,410);
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
    contador6++;
    if (contador6>=112) {
        contador6=0;
        aumentoC33=0;
        aumentoC34=0;
        aumentoC35=0;
        aumentoC36=0;
        aumentoC37=0;
        aumentoC38=0;
        aumentoC39=0;
        aumentoC40=0;
        aumentoC41=0;
        aumentoC42=0;
        aumentoC43=0;
        aumentoC44=0;
        aumentoC45=0;
        aumentoC46=0;
        aumentoC47=0;
        aumentoC48=0;
        aumentoC49=0;
        aumentoC50=0;
        aumentoC51=0;
        aumentoC52=0;
        aumentoC53=0;
    }
    canvas.beginPath();//34.59 143.47
    canvas.arc(642,510,70,(143.47)*Math.PI/180,(143.47-aumentoC33)*Math.PI/180,true);//Cordenada x, cordenada y, radio, angulo de partida, angulo de llegada, sentido de giro(antihorario true, horario false)
    canvas.moveTo(585,540); canvas.lineTo(584+aumentoC34,540);
    canvas.lineWidth=2;
    aumentoC34=aumentoC34+factorC2*1;
    canvas.stroke();
    aumentoC33=aumentoC33+factorC1*1;
    canvas.beginPath();//-34.59 -143.47
    canvas.arc(642,570,70,(-143.47)*Math.PI/180,(-143.47+aumentoC35)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC35=aumentoC35+factorC3*1;
    canvas.beginPath();//-34.59 -143.47
    canvas.arc(642,570,90,(-143.47)*Math.PI/180,(-143.47+aumentoC36)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC36=aumentoC36+factorC3*1;
    canvas.beginPath();//34.59 143.47
    canvas.arc(642,510,90,(144)*Math.PI/180,(144-aumentoC37)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();//34.59 143.47
    aumentoC37=aumentoC37+factorC3*1;
    canvas.beginPath();
    canvas.arc(642,510,110,(142)*Math.PI/180,(142-aumentoC38)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC38=aumentoC38+factorC4*20/21;
    canvas.beginPath();//-34.59 -143.47
    canvas.arc(642,570,110,(-143.47)*Math.PI/180,(-143.47+aumentoC39)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC39=aumentoC39+factorC3*20/21;
    canvas.beginPath();//17.19 162.1
    canvas.arc(642,550,100,(162.1)*Math.PI/180,(162.1-aumentoC40)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC40=aumentoC40+factorC5*100/75;
    canvas.beginPath();//-17.19 -162.1
    canvas.arc(642,530,100,(-162.1)*Math.PI/180,(-162.1+aumentoC41)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC41=aumentoC41+factorC2*100/75;
    canvas.beginPath();
    aumentoC42=aumentoC42+factorC2*100/310;
    canvas.beginPath();//17.19 -50
    canvas.arc(558,520,200,(50)*Math.PI/180,(50-aumentoC49)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    canvas.beginPath();//-17.19 -50
    canvas.arc(558,560,200,(-50)*Math.PI/180,(-50+aumentoC42)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC49=aumentoC49+factorC2*100/310;
    canvas.beginPath();//130 162.1
    canvas.arc(725,520,200,(162.1)*Math.PI/180,(162.1-aumentoC43)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC43=aumentoC43+factorC2*100/310;
    canvas.beginPath();//-130 -162.1
    canvas.arc(725,560,200,(-162.1)*Math.PI/180,(-162.1+aumentoC44)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC44=aumentoC44+factorC3*100/310;
    canvas.beginPath();//-90 -125
    canvas.arc(510,675,130,(-90)*Math.PI/180,(-90-aumentoC45)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC45=aumentoC45+factorC1*100/310;
    canvas.beginPath();//90 125
    canvas.arc(510,400,130,(90)*Math.PI/180,(90+aumentoC46)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC46=aumentoC46+factorC1*100/310;
    canvas.beginPath();//180-123 180-90
    canvas.arc(773,400,130,(180-126)*Math.PI/180,(180-126+aumentoC47)*Math.PI/180,false)
    canvas.lineWidth=2;
    aumentoC47=aumentoC47+factorC2*100/310;
    canvas.stroke();
    canvas.beginPath();//360-90 270+33
    canvas.arc(773,675,130,(270+36)*Math.PI/180,(270+36-aumentoC48)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC48=aumentoC48+factorC1*100/310;
    canvas.beginPath();//-53 -15
    canvas.arc(650,715,200,(-18)*Math.PI/180,(-18-aumentoC50)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC50=aumentoC50+factorC1*100/310;
    canvas.beginPath();//-180+38 -180
    canvas.arc(670,680,200,(-180+38)*Math.PI/180,(-180+38-aumentoC51)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC51=aumentoC51+factor1*100/310;
    canvas.beginPath();//170 130
    canvas.arc(640,365,200,(130)*Math.PI/180,(130+aumentoC52)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC52=aumentoC52+factorC3*100/310;
    canvas.beginPath();//53 15
    canvas.arc(650,360,200,(15)*Math.PI/180,(15+aumentoC53)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC53=aumentoC53+factorC1*100/310;
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
    canvas.arc(112+movimientoX,140,200,(-35)*Math.PI/180,(-35+aumentoC17)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC17=aumentoC17+factorC2*1;
    canvas.beginPath();
    canvas.arc(527+movimientoX,140,200,(-145)*Math.PI/180,(-145-aumentoC18)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC18=aumentoC18+factorC8*1;
    canvas.beginPath();
    canvas.arc(527+movimientoX,240,200,(150)*Math.PI/180,(150+aumentoC19)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC19=aumentoC19+factorC4*1;
    /*canvas.beginPath();
    canvas.arc(12+movimientoX,240,200,(30)*Math.PI/180,(-13)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();*/
    canvas.beginPath();
    canvas.arc(112+movimientoX,240,200,(30)*Math.PI/180,(30-aumentoC20)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC20=aumentoC20+factorC5*1;
    canvas.beginPath();//65 18
    canvas.arc(100+movimientoX,150,200,(60)*Math.PI/180,(60-aumentoC21)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC21=aumentoC21+factorC5*1;
    canvas.beginPath();
    canvas.arc(100+movimientoX,200,200,(-55)*Math.PI/180,(-55+aumentoC22)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC22=aumentoC22+factorC5*1;
    canvas.beginPath();//-125 193
    canvas.arc(545+movimientoX,195,200,(-125)*Math.PI/180,(-125-aumentoC23)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC23=aumentoC23+factorC9*1;
    canvas.beginPath();//134 174
    canvas.arc(550+movimientoX,190,200,(132)*Math.PI/180,(132+aumentoC24)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC24=aumentoC24+factorC6*1;
    canvas.beginPath();//100 155
    canvas.arc(555+movimientoX,130,200,(110)*Math.PI/180,(110+aumentoC25)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC25=aumentoC25+factorC2*1;
    canvas.beginPath();//207 -103
    canvas.arc(555+movimientoX,240,200,(-108)*Math.PI/180,(-108-aumentoC26)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC26=aumentoC26+factorC8*1;
    canvas.beginPath();//225 270
    canvas.arc(530+movimientoX,300,200,(270)*Math.PI/180,(270-aumentoC27)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC27=aumentoC27+factorC1*1;
    canvas.beginPath();//136 90
    canvas.arc(530+movimientoX,70,200,(90)*Math.PI/180,(90+aumentoC28)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC28=aumentoC28+factorC4*1;
    canvas.beginPath();//290 332
    canvas.arc(95+movimientoX,240,200,(290)*Math.PI/180,(290+aumentoC29)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC29=aumentoC29+factorC2*1;
    canvas.beginPath();//-48 -90
    canvas.arc(115+685,300,200,(-90)*Math.PI/180,(-90+aumentoC30)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC30=aumentoC30+factorC2*1;
    canvas.beginPath();//33 70
    canvas.arc(95+movimientoX,105,200,(75)*Math.PI/180,(75-aumentoC31)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC31=aumentoC31+factorC2*1;
    canvas.beginPath();//90 45
    canvas.arc(105+movimientoX,65,200,(87)*Math.PI/180,(87-aumentoC32)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC32=aumentoC32+factorC3*1;
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
    canvas.arc(112+685-movimientoX,140,200,(10-aumentoC1)*Math.PI/180,(10)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC1=aumentoC1+factorC1*1;
    if (10-aumentoC1==-35) {
        aumentoC1=0;
    }
    canvas.beginPath();
    canvas.arc(527+685-movimientoX,140,200,(170)*Math.PI/180,(170+aumentoC2)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC2=aumentoC2+factorC2*1;
    /*if (170+aumentoC2==215) {
        aumentoC2=0;
    }*/
    canvas.beginPath();
    canvas.arc(527+685-movimientoX,240,200,(-168-aumentoC3)*Math.PI/180,(-168)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC3=aumentoC3+factorC3*1;
    contador5=contador5+factor*1;
    if (contador5>=43) {
        aumentoC3=0;
        contador5=0;
        aumentoC2=0;
        aumentoC1=0;
        aumentoC4=0;
        aumentoC5=0;
        aumentoC6=0;
        aumentoC7=0;
        aumentoC8=0;
        aumentoC9=0;
        aumentoC10=0;
        aumentoC11=0;
        aumentoC12=0;
        aumentoC13=0;
        aumentoC14=0;
        aumentoC15=0;
        aumentoC16=0;
        aumentoC17=0;
        aumentoC18=0;
        aumentoC19=0;
        aumentoC20=0;
        aumentoC21=0;
        aumentoC22=0;
        aumentoC23=0;
        aumentoC24=0;
        aumentoC25=0;
        aumentoC26=0;
        aumentoC27=0;
        aumentoC28=0;
        aumentoC29=0;
        aumentoC30=0;
        aumentoC31=0;
        aumentoC32=0;
    }
    /*if (-168-aumentoC3==-360+149) {
        aumentoC3=0;
    }*/
    canvas.beginPath();
    canvas.arc(112+685-movimientoX,240,200,(-13)*Math.PI/180,(-13+aumentoC4)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC4=aumentoC4+factorC4*1;
    canvas.beginPath();
    canvas.arc(100+685-movimientoX,150,200,(18)*Math.PI/180,(18+aumentoC5)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC5=aumentoC5+factorC5*1;
    canvas.beginPath();
    canvas.arc(100+685-movimientoX,200,200,(-13)*Math.PI/180,(-13-aumentoC6)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC6=aumentoC6+factorC6*1;
    canvas.beginPath();
    canvas.arc(545+685-movimientoX,195,200,(193)*Math.PI/180,(193+aumentoC7)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC7=aumentoC7+factorC7*1;
    canvas.beginPath();
    canvas.arc(550+685-movimientoX,190,200,(174)*Math.PI/180,(174-aumentoC8)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC8=aumentoC8+factorC8*1;
    canvas.beginPath();
    canvas.arc(555+685-movimientoX,130,200,(155)*Math.PI/180,(155-aumentoC9)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC9=aumentoC9+factorC9*1;
    canvas.beginPath();
    canvas.arc(555+685-movimientoX,240,200,(207)*Math.PI/180,(207+aumentoC10)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC10=aumentoC10+factor1*1;
    canvas.beginPath();
    canvas.arc(530+685-movimientoX,300,200,(225+aumentoC11)*Math.PI/180,(225)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC11=aumentoC11+factorC1*1;
    canvas.beginPath();
    canvas.arc(530+685-movimientoX,70,200,(136-aumentoC12)*Math.PI/180,(136)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC12=aumentoC12+factorC1*1;
    canvas.beginPath();
    canvas.arc(95+685-movimientoX,240,200,(332-aumentoC13)*Math.PI/180,(332)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC13=aumentoC13+factorC4*1;
    canvas.beginPath();
    canvas.arc(95,105,200,(33)*Math.PI/180,(33+aumentoC14)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC14=aumentoC14+factorC2*1;
    canvas.beginPath();
    canvas.arc(105+685-movimientoX,65,200,(45)*Math.PI/180,(45+aumentoC15)*Math.PI/180,false);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC15=aumentoC15+factorC2;
    tamaño=15;
    canvas.beginPath();
    canvas.arc(805-movimientoX,300,200,(-48)*Math.PI/180,(-48-aumentoC16)*Math.PI/180,true);
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC16=aumentoC16+factorC3;
    //Flechas
    var puntaDerecha = document.createElement("img");
    puntaDerecha.src="img/a01-puntaDerechaPlanoCarteciano.png";
    puntaDerecha.addEventListener("load",function(){
        canvas.drawImage( puntaDerecha,250+puntaDerechaPosX,528,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaDerechaPosX = puntaDerechaPosX+factor*1;
    if(365+puntaDerechaPosX==485){
        puntaDerechaPosX = 0;
    }
    var puntaIzquierda = document.createElement("img");
    puntaIzquierda.src="img/a01-puntaIzquierdaPlanoCarteciano.png";
    puntaIzquierda.addEventListener("load",function(){
        canvas.drawImage( puntaIzquierda,150-puntaIzquierdaPosX,528,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaIzquierdaPosX = puntaIzquierdaPosX+factor*1;
    if(235-puntaIzquierdaPosX==115){
        puntaIzquierdaPosX = 0;
    }
    var puntaSuperior = document.createElement("img");
    puntaSuperior.src="img/a01-puntaSuperiorPlanoCarteciano.png";
    puntaSuperior.addEventListener("load",function(){
        canvas.drawImage( puntaSuperior,200,480-puntaSuperiorPosY,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaSuperiorPosY = puntaSuperiorPosY+factor*1;
    if(275-puntaSuperiorPosY==155){
        puntaSuperiorPosY = 0;
    }
    var puntaInferior = document.createElement("img");
    puntaInferior.src="img/a03-puntaInferiorPlanoCarteciano.png";
    puntaInferior.addEventListener("load",function(){
        canvas.drawImage( puntaInferior,200,575+puntaInferiorPosY,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaInferiorPosY = puntaInferiorPosY+factor*1;
    if(405+puntaInferiorPosY==525){
        puntaInferiorPosY = 0;
    }
    var punta30Grados = document.createElement("img");
    punta30Grados.src="img/a03-punta30GradosPlanoCarteciano.png";
    punta30Grados.addEventListener("load",function(){
        canvas.drawImage( punta30Grados,240+punta30GradosPosX,510-punta30GradosPosY,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta60Grados,217+punta60GradosPosX,490-punta60GradosPosY,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta60GradosPosY=punta60GradosPosY+factor*3/4;
    punta60GradosPosX=punta60GradosPosX+factor*Math.sqrt(3)/4;
    if(punta60GradosPosY==120*3/4){
        punta60GradosPosX = 0;
        punta60GradosPosY = 0;
    }var punta60Grados1 = document.createElement("img");
    punta60Grados1.src="img/a03-punta60GradosPlanoCarteciano.png";
    punta60Grados1.addEventListener("load",function(){
        canvas.drawImage( punta60Grados1,217+punta60Grados1PosX,565+punta60Grados1PosY,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta30Grados1,163-punta30Grados1PosX,510-punta30Grados1PosY,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta120Grados,185-punta120GradosPosX,490-punta120GradosPosY,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta120GradosPosX=punta120GradosPosX+factor*Math.sqrt(3)/4;
    punta120GradosPosY=punta120GradosPosY+factor*3/4;
    if(punta120GradosPosY==120*3/4){
        punta120GradosPosX = 0;
        punta120GradosPosY = 0;
    }var punta120Grados1 = document.createElement("img");
    punta120Grados1.src="img/a03-punta120GradosPlanoCarteciano.png";
    punta120Grados1.addEventListener("load",function(){
        canvas.drawImage( punta120Grados1,183-punta120Grados1PosX,565+punta120Grados1PosY,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta210Grados,160-punta210GradosPosX,545+punta210GradosPosY,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta210Grados1,240+punta210Grados1PosX,547+punta210Grados1PosY,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta210Grados1PosX=punta210Grados1PosX+factor*3/4;
    punta210Grados1PosY=punta210Grados1PosY+factor*Math.sqrt(3)/4;
    if(punta210Grados1PosX==120*3/4){
        punta210Grados1PosX = 0;
        punta210Grados1PosY = 0;
    }
    var aumentoX=852;
    var aumentoX_1=200;
    var aumentoY_1=115;
    //Flechas
    var puntaDerecha = document.createElement("img");
    puntaDerecha.src="img/a01-puntaDerechaPlanoCarteciano.png";
    puntaDerecha.addEventListener("load",function(){
        canvas.drawImage( puntaDerecha,250+aumentoX+puntaDerechaPosX-aumentoX_1,528,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaDerechaPosX = puntaDerechaPosX+factor*1;
    if(365+puntaDerechaPosX==485){
        puntaDerechaPosX = 0;
    }
    var puntaIzquierda = document.createElement("img");
    puntaIzquierda.src="img/a01-puntaIzquierdaPlanoCarteciano.png";
    puntaIzquierda.addEventListener("load",function(){
        canvas.drawImage( puntaIzquierda,150+aumentoX-puntaIzquierdaPosX+aumentoX_1,528,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaIzquierdaPosX = puntaIzquierdaPosX+factor*1;
    if(235-puntaIzquierdaPosX==115){
        puntaIzquierdaPosX = 0;
    }
    var puntaSuperior = document.createElement("img");
    puntaSuperior.src="img/a01-puntaSuperiorPlanoCarteciano.png";
    puntaSuperior.addEventListener("load",function(){
        canvas.drawImage( puntaSuperior,200+aumentoX,480-puntaSuperiorPosY+aumentoX_1,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaSuperiorPosY = puntaSuperiorPosY+factor*1;
    if(275-puntaSuperiorPosY==155){
        puntaSuperiorPosY = 0;
    }
    var puntaInferior = document.createElement("img");
    puntaInferior.src="img/a03-puntaInferiorPlanoCarteciano.png";
    puntaInferior.addEventListener("load",function(){
        canvas.drawImage( puntaInferior,200+aumentoX,575+puntaInferiorPosY-aumentoX_1,40-tamaño,40-tamaño);
    });
    //Movimiento
    puntaInferiorPosY = puntaInferiorPosY+factor*1;
    if(405+puntaInferiorPosY==525){
        puntaInferiorPosY = 0;
    }
    var punta30Grados = document.createElement("img");
    punta30Grados.src="img/a03-punta30GradosPlanoCarteciano.png";
    punta30Grados.addEventListener("load",function(){
        canvas.drawImage( punta30Grados,270+aumentoX+punta30GradosPosX-aumentoX_1,493-punta30GradosPosY+aumentoY_1,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta60Grados,320+aumentoX+punta60GradosPosX-aumentoX_1,538-punta60GradosPosY+aumentoY_1,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta60GradosPosY=punta60GradosPosY+factor*3/4;
    punta60GradosPosX=punta60GradosPosX+factor*Math.sqrt(3)/4;
    if(punta60GradosPosY==120*3/4){
        punta60GradosPosX = 0;
        punta60GradosPosY = 0;
    }var punta60Grados1 = document.createElement("img");
    punta60Grados1.src="img/a03-punta60GradosPlanoCarteciano.png";
    punta60Grados1.addEventListener("load",function(){
        canvas.drawImage( punta60Grados1,235+aumentoX+punta60Grados1PosX-aumentoY_1,600+punta60Grados1PosY-aumentoX_1,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta30Grados1,130+aumentoX-punta30Grados1PosX+aumentoX_1,490-punta30Grados1PosY+aumentoY_1,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta120Grados,83+aumentoX-punta120GradosPosX+aumentoX_1,545-punta120GradosPosY+aumentoY_1,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta120GradosPosX=punta120GradosPosX+factor*Math.sqrt(3)/4;
    punta120GradosPosY=punta120GradosPosY+factor*3/4;
    if(punta120GradosPosY==120*3/4){
        punta120GradosPosX = 0;
        punta120GradosPosY = 0;
    }var punta120Grados1 = document.createElement("img");
    punta120Grados1.src="img/a03-punta120GradosPlanoCarteciano.png";
    punta120Grados1.addEventListener("load",function(){
        canvas.drawImage( punta120Grados1,76+aumentoX-punta120Grados1PosX+aumentoX_1,515+punta120Grados1PosY-aumentoY_1,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta210Grados,130+aumentoX-punta210GradosPosX+aumentoX_1,565+punta210GradosPosY-aumentoY_1,40-tamaño,40-tamaño);
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
        canvas.drawImage( punta210Grados1,275+aumentoX+punta210Grados1PosX-aumentoX_1,567+punta210Grados1PosY-aumentoY_1,40-tamaño,40-tamaño);
    });
    //Movimiento
    punta210Grados1PosX=punta210Grados1PosX+factor*3/4;
    punta210Grados1PosY=punta210Grados1PosY+factor*Math.sqrt(3)/4;
    if(punta210Grados1PosX==120*3/4){
        punta210Grados1PosX = 0;
        punta210Grados1PosY = 0;
    }
    window.requestAnimationFrame(iniciar);
}
window.requestAnimationFrame(iniciar);