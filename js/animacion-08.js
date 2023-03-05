var posx=424;
var factor=1;
var contador=0;
function iniciar(){
    var elemento = document.getElementById("lienzo")
    var canvas = elemento.getContext("2d")
    
    //FIJO
    canvas.fillStyle="#6464FD"
    canvas.font="24px verdan, times-new-roman";
    canvas.fillText("El movimiento de electrones dentro de un conductor",368,630)


    canvas.fillStyle="#6464FD"
    canvas.font="24px verdan";
    canvas.fillText("produce el efecto de electricidad",460,655)

    canvas.fillStyle="Black"
    canvas.font="50px verdan";
    canvas.fillText("+",950,200)

    canvas.fillStyle="Black"
    canvas.font="22px anson";
    canvas.fillText("Extremo",990,180)

    canvas.fillStyle="Black"
    canvas.font="22px";
    canvas.fillText("Positivo",990,210)

    canvas.fillStyle="Black"
    canvas.font="50px verdan";
    canvas.fillText("-",280,200)

    canvas.fillStyle="Black"
    canvas.font="22px verdan";
    canvas.fillText("Extremo",180,180)

    canvas.fillStyle="Black"
    canvas.fillText("Negativo",180,210)



    var corriente=document.createElement("img")
    corriente.src="img/a8_corriente.png"
    corriente.addEventListener("load",function(){
        canvas.drawImage(corriente, 265,130,730,489)
    })

    var real=document.createElement("img")
    real.src="img/a8_sreal.png"
    real.addEventListener("load",function(){
        canvas.drawImage(real, 480,60,300,61)
    })

    var convencional=document.createElement("img")
    convencional.src="img/a8_sconvencional.png"
    convencional.addEventListener("load",function(){
        canvas.drawImage(convencional, 470,245,309,57)
    })

    var formula=document.createElement("img")
    formula.src="img/a8_formula.png"
    formula.addEventListener("load",function(){
        canvas.drawImage(formula, 950,455,220,100)
    })
    
    //PARA ANIMAR
    var flujo=document.createElement("img")
    flujo.src="img/a8_flujo.png"
    flujo.addEventListener("load",function(){
        canvas.drawImage(flujo,posx,156,297,64)
    })

    posx=posx+factor*2;
    contador++;
    if(contador>=62){
        posx=424;
        contador=0;
    }
    window.requestAnimationFrame(iniciar);
   /*posx=posx+factor*2
   if(posx>543){
        factor=0;}
    window.requestAnimationFrame(iniciar);*/
}
window.requestAnimationFrame(iniciar);