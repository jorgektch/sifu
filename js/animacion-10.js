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
    
    var elemento = document.getElementById("lienzo")
    var canvas=elemento.getContext("2d")
    
    //Dibujando Iman
    canvas.fillStyle = "#FB485A";   //Iman Azul  
    canvas.fillRect(440,310,200,100);
    canvas.fillStyle = "#135188";   //Iman Rojo
    canvas.fillRect(640,310,200,100);
    
        // Texto
        canvas.fillStyle="White";
        canvas.font="bold 50px verdan, comic-sans";
        canvas.fillText("N",530,370);
        canvas.fillStyle="White";
        canvas.font="bold 50px verdan, comic-sans";
        canvas.fillText("S",720,370);
    


    
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
        canvas.beginPath();//-34.59 -143.47
    canvas.arc(642,400,150,(-143.47)*Math.PI/180,(-143.47+aumentoC36)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC36=aumentoC36+factorC3*1;
    
    canvas.beginPath();//34.59 143.47
    canvas.arc(642,320,150,(144)*Math.PI/180,(144-aumentoC37)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();//34.59 143.47
    aumentoC37=aumentoC37+factorC3*1;

    
    canvas.beginPath();
    canvas.arc(642,260,240,(142)*Math.PI/180,(142-aumentoC38)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC38=aumentoC38+factorC4*20/21;
    
    canvas.beginPath();//-34.59 -143.47
    canvas.arc(642,457,240,(-143.47)*Math.PI/180,(-143.47+aumentoC39)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC39=aumentoC39+factorC3*20/21;
    
    aumentoC44=aumentoC44+factorC3*100/310;
    canvas.beginPath();//-90 -125
    canvas.arc(440,620,250,(-90)*Math.PI/180,(-90-aumentoC45)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();

    aumentoC45=aumentoC45+factorC1*100/310;
    canvas.beginPath();//90 125
    canvas.arc(440,100,250,(90)*Math.PI/180,(90+aumentoC46)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC46=aumentoC46+factorC1*100/310;


    canvas.beginPath();//180-123 180-90
    canvas.arc(840,100,250,(180-126)*Math.PI/180,(180-126+aumentoC47)*Math.PI/180,false)
    canvas.lineWidth=2;

    aumentoC47=aumentoC47+factorC2*100/310;
    canvas.stroke();
    canvas.beginPath();//360-90 270+33
    canvas.arc(840,620,250,(270+36)*Math.PI/180,(270+36-aumentoC48)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC48=aumentoC48+factorC1*100/310;

    canvas.beginPath();//-53 -15
    canvas.arc(625,665,350,(-18)*Math.PI/180,(-18-aumentoC50)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC50=aumentoC50+factorC1*100/310;
    
    canvas.beginPath();//-180+38 -180
    canvas.arc(584,580,250,(-163+38)*Math.PI/180,(-180+38-aumentoC51)*Math.PI/180,true)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC51=aumentoC51+factor1*100/310;
    
    canvas.beginPath();//170 130
    canvas.arc(664,60,350,(130)*Math.PI/180,(130+aumentoC52)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC52=aumentoC52+factorC3*100/310;

    canvas.beginPath();//53 15
    canvas.arc(614,60,350,(15)*Math.PI/180,(15+aumentoC53)*Math.PI/180,false)
    canvas.lineWidth=2;
    canvas.stroke();
    aumentoC53=aumentoC53+factorC1*100/310;
    
    window.requestAnimationFrame(iniciar);

    }
    window.addEventListener("load", iniciar);