function iniciar(){
    
    var elemento = document.getElementById("lienzo")
    var canvas=elemento.getContext("2d")
    
    //Dibujando Iman
    canvas.fillStyle = "#135188";   //Iman Azul
    canvas.fillRect(440,310,200,100);
    canvas.fillStyle = "#FB485A";   //Iman Rojo
    canvas.fillRect(640,310,200,100);
    
        // Texto
        canvas.fillStyle="White";
        canvas.font="bold 50px verdan, comic-sans";
        canvas.fillText("S",530,370);
        canvas.fillStyle="White";
        canvas.font="bold 50px verdan, comic-sans";
        canvas.fillText("N",720,370);
    
    
    }
    window.addEventListener("load", iniciar);