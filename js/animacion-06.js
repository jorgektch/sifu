//PARTE BAJA
posx1=826;
posy1=375;
factorx1=2.5;
factorx1a=2.5;
factory1=2.5;
factory1a=2.5;
var contador1=0;

posx2=826;
posy2=375;
factorx2=2.5;
factorx2a=2.5;
factory2=2.5;
factory2a=2.5;
var contador2=0;

posx3=826;
posy3=375;
factorx3=2.5;
factorx3a=2.5;
factory3=2.5;
factory3a=2.5;
var contador3=0;

//PARTE ALTA
posx4=320;
posy4=316;
factorx4=2.5;
factorx4a=2.5;
factory4=2.5;
factory4a=2.5;
var contador4=0;
var contador5=0

posx5=275;
posy5=316;
factorx5=2.5;
factorx5a=2.5;
factory5=2.5;
factory5a=2.5;
var contador6=0;
var contador7=0

posx6=216;
posy6=316;
factorx6=2.5;
factorx6a=2.5;
factory6=2.5;
factory6a=2.5;
var contador8=0;
var contador9=0
function iniciar(){
    var elemento = document.getElementById("lienzo")
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
    
    var a9_curva = document.createElement("img")
    a9_curva.src="img/a9_curva.png"
    a9_curva.addEventListener("load", function(){
        canvas.drawImage(a9_curva,190,380 ,66.6 ,62)
    })

    canvas.fillStyle="#e39a1e"        
    canvas.font="bold 20px verdan, san-serif";
    canvas.fillText("Acumulación ",200,470)

    canvas.fillStyle="#e39a1e"        
    canvas.font="bold 20px verdan, san-serif";
    canvas.fillText("Acumulación ",200,470)

    canvas.fillStyle="#e39a1e"        
    canvas.font="bold 20px verdan, comic-sans-MS";
    canvas.fillText("electrones en un lado",180,490)

    canvas.fillStyle="#6464FD"        
    canvas.font="bold 20px verdan, comic-sans-MS";
    canvas.fillText("Esto significa que hemos",160,520)
    canvas.fillStyle="#6464FD"        
    canvas.font="bold 20px verdan, comic-sans-MS";
    canvas.fillText("almacenado energía",180,540)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Lado Positivo",550,150)

    canvas.fillStyle="#011B49"        
    canvas.font="bold 30px verdan, san-serif";
    canvas.fillText("Lado Negativo",550,550)

    canvas.fillStyle="#6464ad"        
    canvas.font="bold 40px verdan, san-serif";
    canvas.fillText("ΔV",600,350)
    
    
    // INICIANDO ANIMACION
    var electron1=document.createElement("img")
    electron1.src="img/a6_electron1.png"
    electron1.addEventListener("load", function(){
        canvas.drawImage(electron1,posx1,posy1,15,5)
    }) 
    var electron2=document.createElement("img")
    electron2.src="img/a6_electron2.png"
    electron2.addEventListener("load", function(){
        canvas.drawImage(electron2,posx2,posy2,15,5)
    }) 
    var electron3=document.createElement("img")
    electron3.src="img/a6_electron3.png"
    electron3.addEventListener("load", function(){
        canvas.drawImage(electron3,posx3,posy3,15,5)
    }) 
    
    var electron4=document.createElement("img")
    electron4.src="img/a6_electron4.png"
    electron4.addEventListener("load", function(){
        canvas.drawImage(electron4,posx4,posy4,15,5)
    }) 
    var electron5=document.createElement("img")
    electron5.src="img/a6_electron5.png"
    electron5.addEventListener("load", function(){
        canvas.drawImage(electron5,posx5,posy5,15,5)
    }) 
    var electron6=document.createElement("img")
    electron6.src="img/a6_electron6.png"
    electron6.addEventListener("load", function(){
        canvas.drawImage(electron6,posx6,posy6,15,5)
    })

 //CÓDIGO DE ANIMACIÓN PARA LA PARTE ALTA
 posx4=posx4+factorx4*2
 contador4++
 contador5++
 if(contador4>20){
     factorx4=0
     posy4=posy4-factory4*2; 
     if(contador5>42){
         factory4=0;
         posx4=posx4+factorx4a*2;
         if(posx4>820){
             factorx4a=0;
             posy4=posy4+factory4a*2;
             if(posy4>300){
                 factory4a=0;
                 posx5=posx5+factorx5*2
                 contador6++
                 contador7++
                 if(contador6>29){
                     factorx5=0
                     posy5=posy5-factory5*2; 
                     if(contador7>51){
                         factory5=0;
                         posx5=posx5+factorx5a*2;
                         if(posx5>820){
                             factorx5a=0;
                             posy5=posy5+factory5a*2;
                             if(posy5>300){
                                 factory5a=0;
                                 posx6=posx6+factorx6*2
                                 contador8++
                                 contador9++
                                 if(contador8>40.5){
                                     factorx6=0
                                     posy6=posy6-factory6*2; 
                                     if(contador9>62){
                                         factory6=0;
                                         posx6=posx6+factorx6a*2;
                                         if(posx6>822){
                                             factorx6a=0;
                                             posy6=posy6+factory6a*2;
                                             if(posy6>300){
                                                 factory6a=0;
                                             }
                                         }
                                     }
                                 }   
                             }
                         }
                     }
                 }  
             
             }
         }
     }
 }


 //CÓDIGO DE ANIMACIÓN PARA LA PARTE BAJA
    posy1=posy1+factory1*2;
    contador1++;
    if(contador1>19){
        factory1=0
        //posy1=474
        posx1=posx1-factorx1*2;
        if(posx1<424){
            factorx1=0
            posy1=posy1-factory1a*2
            if(posy1<364){
                factory1a=0
                posx1=posx1-factorx1a*2;
                if(posx1<220){
                    factorx1a=0
                    posy2=posy2+factory2*2;
                    contador2=contador2+1;
                    if(contador2>19){
                        factory2=0
                        //posy1=474
                        posx2=posx2-factorx2*2;
                        if(posx2<424){
                            factorx2=0
                            posy2=posy2-factory2a*2
                            if(posy2<364){
                                factory2a=0
                                posx2=posx2-factorx2a*2;
                                if(posx2<278){
                                    factorx2a=0
                                    posy3=posy3+factory3*2;
                                    contador3=contador3+1;
                                    if(contador3>19){
                                        factory3=0
                                        //posy1=474
                                        posx3=posx3-factorx3*2;
                                        if(posx3<424){
                                            factorx3=0
                                            posy3=posy3-factory3a*2
                                            if(posy3<364){
                                                factory3a=0
                                                posx3=posx3-factorx3a*2;
                                                if(posx3<326){
                                                    factorx3a=0
                                                }
                                            }
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    window.requestAnimationFrame(iniciar);

 
}
window.requestAnimationFrame(iniciar);


 //PRIMERA PARTE

   /* posx4=posx4+factorx4*2
    contador4++
    contador5++
    if(contador4>20){
        factorx4=0
        posy4=posy4-factory4*2; 
        if(contador5>42){
            factory4=0;
            posx4=posx4+factorx4a*2;
            if(posx4>820){
                factorx4a=0;
                posy4=posy4+factory4a*2;
                if(posy4>300){
                    factory4a=0;
                }
            }
        }
    }
    posx5=posx5+factorx5*2
    contador6++
    contador7++
    if(contador6>29){
        factorx5=0
        posy5=posy5-factory5*2; 
        if(contador7>51){
            factory5=0;
            posx5=posx5+factorx5a*2;
            if(posx5>820){
                factorx5a=0;
                posy5=posy5+factory5a*2;
                if(posy5>300){
                    factory5a=0;
                }
            }
        }
    }  

    posx6=posx6+factorx6*2
    contador8++
    contador9++
    if(contador8>40.5){
        factorx6=0
        posy6=posy6-factory6*2; 
        if(contador9>62){
            factory6=0;
            posx6=posx6+factorx6a*2;
            if(posx6>822){
                factorx6a=0;
                posy6=posy6+factory6a*2;
                if(posy6>300){
                    factory6a=0;
                }
            }
        }
    }   
*/
/*NOTAS
El electron 2 debe caer en X=275 Y=370
El electron 1 debe caer en X=330 Y=370
El electron 3 debe caer en X=216 Y=370*/



   
  /*  posx1=posx1-factorx1a*2;
    if(posx1<220){
        factorx1a=0;
    }
    window.requestAnimationFrame(iniciar);


  /*  
   posy1=posy1+factory1*2;
   contador1++
    if(posy1>474 ){
        factory1=0;
        posx1=posx1-factorx1*2;
        if(posx1<424){
            factorx1=0
        }
    }
    posy1=posy1-factory1a*2
    if(contador1>50){
        factory1a=0
    }
    window.requestAnimationFrame(iniciar);
*/
    
    /*
    posy1=posy1-factory1a*2
    if(posy1<203){
        factory1a=0
    }
    window.requestAnimationFrame(iniciar);
    */


    /*posy2=posy2+factory2*2;
    contador2=contador2+1;
    if(contador2>19){
        factory2=0
        //posy1=474
        posx2=posx2-factorx2*2;
        if(posx2<424){
            factorx2=0
            posy2=posy2-factory2a*2
            if(posy2<364){
                factory2a=0
                posx2=posx2-factorx2a*2;
                if(posx2<278){
                    factorx2a=0
                }
            }
        }
    }


 /*
    posx4=posx4+factorx4*2
    if(posx4>422){
        factorx4=0
        posy4=posy4-factory4*2;
        if(posy4<202){
            factory4=0;
        }
    }
//SEGUNDA PARTE
    posx4=posx4+factorx4a*2;
    if(posx4>760){
        factorx4a=0;
        posy4=posy4+factory4a*2;
        if(posy4>500){
            factory4a=0;
        }
    }


    
    /*posy2=posy2+factory2*2;
    contador2=contador2+1;
    if(contador2>19){
        factory2=0
        //posy1=474
        posx2=posx2-factorx2*2;
        if(posx2<424){
            factorx2=0
            posy2=posy2-factory2a*2
            if(posy2<364){
                factory2a=0
                posx2=posx2-factorx2a*2;
                if(posx2<278){
                    factorx2a=0
                }
            }
        }
    }
    posy3=posy3+factory3*2;
    contador3=contador3+1;
    if(contador3>19){
        factory3=0
        //posy1=474
        posx3=posx3-factorx3*2;
        if(posx3<424){
            factorx3=0
            posy3=posy3-factory3a*2
            if(posy3<364){
                factory3a=0
                posx3=posx3-factorx3a*2;
                if(posx3<326){
                    factorx3a=0
                }
            }
        }
    }
    window.requestAnimationFrame(iniciar);*/
    