posx1=826;
posy1=375;
factorx1=2.5;
factorx1a=2.5;
factory1=2.5;
factory1a=2.5;
function iniciar(){
    var elemento = document.getElementById("mi-lienzo")
    var canvas = elemento.getContext("2d")
    //FIJO
    var a6_fondo=document.createElement("img")
    a6_fondo.src="img/a6_fondo.jpg"
    a6_fondo.addEventListener("load", function(){
        canvas.drawImage(a6_fondo,0,0,1280,720)
    })

    var a6_conjunto2 = document.createElement("img")
    a6_conjunto2.src="img/a6_conjunto2.png"
    a6_conjunto2.addEventListener("load", function(){
        canvas.drawImage(a6_conjunto2,160, 200 ,966 ,279)
    })
    

    // INICIANDO ANIMACION
    var electron1=document.createElement("img")
    electron1.src="img/a6_electron1.png"
    electron1.addEventListener("load", function(){
        canvas.drawImage(electron1,posx1,posy1,15,5)
    }) 
    var electron2=document.createElement("img")
    electron2.src="img/a6_electron2.png"
    electron2.addEventListener("load", function(){
        canvas.drawImage(electron2,826,375,15,5)
    }) 
    var electron3=document.createElement("img")
    electron3.src="img/a6_electron3.png"
    electron3.addEventListener("load", function(){
        canvas.drawImage(electron3,826,375,15,5)
    }) 
    
    var electron4=document.createElement("img")
    electron4.src="img/a6_electron4.png"
    electron4.addEventListener("load", function(){
        canvas.drawImage(electron4,320,316,15,5)
    }) 
    var electron5=document.createElement("img")
    electron5.src="img/a6_electron5.png"
    electron5.addEventListener("load", function(){
        canvas.drawImage(electron5,275,316,15,5)
    }) 
    var electron6=document.createElement("img")
    electron6.src="img/a6_electron6.png"
    electron6.addEventListener("load", function(){
        canvas.drawImage(electron6,216,316,15,5)
    })
    
    //CÓDIGO DE ANIMACIÓN
    posy1=posy1+factory1*2;
    if(posy1>474 ){
        factory1=0;
        posx1=posx1-factorx1*2;
        if(posx1<424){
            factorx1=0;
        }
    }
   /* posy1=posy1-factory1a*2
    if(posy1<200){
        factory1a=0
    }*/
    window.requestAnimationFrame(iniciar);

}
window.requestAnimationFrame(iniciar);


/*NOTAS
El electron 2 debe caer en X=275 Y=370
El electron 1 debe caer en X=330 Y=370
El electron 3 debe caer en X=216 Y=370*/