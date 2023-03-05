posx1=526
posx2=650
var contador1=0;
var contador2=0;
var factor=0.2
function iniciar(){
    var elemento = document.getElementById("lienzo")
    var canvas = elemento.getContext("2d")

    //FIJO
    var dielectrico=document.createElement("img")
    dielectrico.src="img/a7_dielectrico.png"
    dielectrico.addEventListener("load",function(){
        canvas.drawImage(dielectrico, 446,160, 388,355) //388,355       446,160
    })
    var texto1=document.createElement("img")
    texto1.src="img/a7_texto1.png"
    texto1.addEventListener("load",function(){
        canvas.drawImage(texto1, 80,200,280,96)
    })
    var capacitancia=document.createElement("img")
    capacitancia.src="img/a7_capacitancia.png"
    capacitancia.addEventListener("load",function(){
        canvas.drawImage(capacitancia, 120,290,200,112)
    })
    var texto2=document.createElement("img")
    texto2.src="img/a7_texto2.png"
    texto2.addEventListener("load",function(){
        canvas.drawImage(texto2, 880,200,244,80)
    })
    var neto=document.createElement("img")
    neto.src="img/a7_neto.png"
    neto.addEventListener("load",function(){
        canvas.drawImage(neto, 900,290,252,72)
    })

    /*var a7_fondo=document.createElement("img")
    a7_fondo.src="img/a7_fondo.jpg"
    a7_fondo.addEventListener("load", function(){
        canvas.drawImage(a7_fondo,0,0,1280,720)
    })*/

    //FÓRMULA
    /*var capacitancia=document.createElement("img")
    capacitancia.src="img/a7_capacitancia.png"
    dielectrico.addEventListener("load",function(){
        canvas.drawImage(capacitancia, 0,170, 432,248) //388,355       446,160
    })*/



    canvas.fillSTYLE="Black"
    canvas.font="22px verdan, san-serif";
    canvas.fillText("+Q",460,150)

    canvas.fillSTYLE="Black"
    canvas.font="22px verdan, san-serif";
    canvas.fillText("-Q",790,150)
    //PARA ANIMAR

    var a7_campo_electrico=document.createElement("img")
    a7_campo_electrico.src="img/a7_campo_electrico.png"
    a7_campo_electrico.addEventListener("load",function(){
        canvas.drawImage(a7_campo_electrico,posx1,160,100,310)
    })
    var a7_campo_inducido=document.createElement("img")
    a7_campo_inducido.src="img/a7_campo_inducido.png"
    a7_campo_inducido.addEventListener("load",function(){
        canvas.drawImage(a7_campo_inducido,posx2,200,104,310)
    })
    contador1++
    posx1=posx1+factor*2
    if(contador1>=330){
        posx1=526;
        contador1=0;
    }
    
    contador2++
    posx2=posx2-factor*2
    if(contador2>=330){
        posx2=650
        contador2=0
    }
    window.requestAnimationFrame(iniciar);
    
    //ANIMANDO
   /* posx1=posx1+factor*2
    posx2=posx2-factor*2
    if(posx1>650 || posx2<526){
        factor=0;
    }
    window.requestAnimationFrame(iniciar);*/


    
}
window.requestAnimationFrame(iniciar);