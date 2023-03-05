posx1=378;
posy1=505;

posx2=851;
posy2=505;

posx3=851
posy3=242

posx4=378
posy4=242

posx5=618
posy5=242

posx6=618
posy6=505
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
factorx1=1;
factory2=1;
factorx3=1;
factory4=1;
factorx5=1;
factorx6=1;
function iniciar(){
    var elemento = document.getElementById("lienzo")
    var canvas = elemento.getContext("2d")
    
    //FIJO
    var fondo=document.createElement("img")
    fondo.src="img/a9_fondo.jpg"
    fondo.addEventListener("load",function(){
        canvas.drawImage(fondo,0,0,1280,720)
    })
    var circuito=document.createElement("img")
    circuito.src="img/a9_circuito.png"
    circuito.addEventListener("load",function(){
        canvas.drawImage(circuito,378,152,525,385)
    })
    
    var electron=document.createElement("img")
    electron.src="img/a9_electron.png"
    electron.addEventListener("load",function(){
        canvas.drawImage(electron,posx1,posy1,55,70)
    })

    var electron2=document.createElement("img")
    electron2.src="img/a9_electron2.png"
    electron2.addEventListener("load",function(){
        canvas.drawImage(electron2,posx2,posy2,55,70)
    })

    var electron3=document.createElement("img")
    electron3.src="img/a9_electron3.png"
    electron3.addEventListener("load",function(){
        canvas.drawImage(electron3,posx3,posy3,55,70)
    })

    var electron4=document.createElement("img")
    electron4.src="img/a9_electron4.png"
    electron4.addEventListener("load",function(){
        canvas.drawImage(electron4,posx4,posy4,55,70)
    })

    var electron5=document.createElement("img")
    electron5.src="img/a9_electron5.png"
    electron5.addEventListener("load",function(){
        canvas.drawImage(electron5,posx5,posy5,55,70)
    })

    var electron6=document.createElement("img")
    electron6.src="img/a9_electron6.png"
    electron6.addEventListener("load",function(){
        canvas.drawImage(electron6,posx6,posy6,55,70)
    })

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Bombilla (R)",550,140)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Generador (V)",150,410)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Conductor (V)",550,590)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Interruptor",920,410)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 20px verdan, san-serif";
    canvas.fillText("(elemento de",940,430)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 20px verdan, san-serif";
    canvas.fillText("control)",960,450)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 45px verdan, san-serif";
    canvas.fillText("V = I x R",550,420)

    contador1++
    posx1=posx1+factorx1*2
    if(contador1>122){
        posx1=378
        contador1=0
    }
    contador2++
    posy2=posy2-factory2*2
    if(contador2>122){
        posy2=505
        contador2=0
    }
    contador3++
    posx3=posx3-factorx3*2
    if(contador3>122){
        posx3=851
        contador3=0
    }
    contador4++
    posy4=posy4+factory4*2
    if(contador4>122){
        posy4=242
        contador4=0
    }
    contador5++
    posx5=posx5-factorx5*2
    if(contador5>122){
        posx5=618
        contador5=0
    }
    contador6++
    posx6=posx6+factorx6*2
    if(contador6>122){
        posx6=618
        contador6=0
    }
    window.requestAnimationFrame(iniciar);

}
window.requestAnimationFrame(iniciar);
