let pantalla;
let inicio;
let contexto,contexto1;
let instrucciones, juego, resumen;
let zombie, par, zombie2, par2;
let int, int2,int3,int4;
let monedas, vida;
let zombies, parcas, zombies2, parcas2;
let pelota, pelotas, pelota2,pelotas2,pelota3,pelotas3,pelota4,pelotas4,pelota5,pelotas5;
let p1,pociones,p2,pociones2,p3,pociones3,p4,pociones4,p5,pociones5;
let carp,carps,carp2,carps2,carp3,carps3,carp4,carps4,carp5,carps5;
let carpa, carpas, carrusel, carruseles;
let carpaCom, carruselCom;
let charCom, char2Com, charco1, charco2, charcos1,charcos2;
let numEnemigos=0;
let numEnemigos2=0;
let numEnemigos3=0;
let numEnemigos4=0;
let puntaje;

function setup(){
    createCanvas(981,696);
    pantalla = 0;
    monedas = 15;
    vida = 20;
    puntaje=0;
    c1=false;
    c2=false;
    c3=false;
    c4=false;
    n1=false;
    n2=false;
    activarEsp1=false;
    activarEsp2=false;
    activarEsp3=false;
    activarEsp4=false;
    activarEsp5=false;
    activar1=false;
    activar2=false;
    act1=false;
    act2=false;
    act3=false;
    act4=false;
    act5=false;
    // variables para No colocar carpas encima de las ya puestas
    noMas1=false;
    noMas2=false;
    noMas3=false;
    noMas4=false;
    noMas5=false;
    noChar=false;
    noChar2=false;
    //para cuando este ubicada la carpa1 se pase a true y comience a disparar
    bolas1=false;
    bolas2=false;
    bolas3=false;
    bolas4=false;
    bolas5=false;
    //carrusel1 pase a true comienza a disparar
    pocion1=false;
    pocion2=false;
    pocion3=false;
    pocion4=false;
    pocion5=false;
    //cuando pasa a true comienza a disparar carpa nivel2
    nivel1=false;
    nivel2=false;
    nivel3=false;
    nivel4=false;
    nivel5=false;
    //cuanod pasa a true comienza a disparar carrusel nivel2
    niv1=false;
    niv2=false;
    niv3=false;
    niv4=false;
    niv5=false;
    //imagenes 
    inicio = loadImage("imagenes/PRINCIPAL.jpg");
    perdiste = loadImage("imagenes/perdiste.png");
    contexto = loadImage("imagenes/CONTEXTO-1.jpg");
    contexto1 = loadImage("imagenes/CONTEXTO-3.png");
    instrucciones = loadImage("imagenes/CONTEXTO-2.png");
    resumen =loadImage("imagenes/FINAL.jpg");
    carpaCom= loadImage("imagenes/carpaCompra.png");
    carruselCom=loadImage("imagenes/carruselCompra.png");
    carpai=loadImage("imagenes/carpa.png");
    charcoi1=loadImage("imagenes/Charco1.png");
    charcoi2=loadImage("imagenes/charco2.png");
    charCom=loadImage("imagenes/compra1.jpg");
    char2Com=loadImage("imagenes/compra2.jpg");
    carruseli=loadImage("imagenes/carrusel.png");
    pelotai=loadImage("imagenes/pelota.png");
    pocioni=loadImage("imagenes/pocion.png");
    pli=loadImage("imagenes/bolaNivel2.png");
    int = loadImage("imagenes/int.png");
    int2=loadImage("imagenes/int2.png");
    int3=loadImage("imagenes/int3.png");
    int4=loadImage("imagenes/int4.png");
    juego = loadImage("imagenes/JUEGO.png");
    subii1= loadImage("imagenes/SubirNivel.png");
    subii2= loadImage("imagenes/SubirNivel2.png");
    zombie= loadImage("imagenes/zombie.png");
    parcai=loadImage("imagenes/parca.png");
    zombies = [];
    zombies2 = [];
    parcas = [];
    carpas = [];
    carruseles = [];
    pelotas =[];
    pelotas2=[];
    pelotas3=[];
    pelotas4=[];
    pelotas5=[];
    pociones=[];
    pociones2=[];
    pociones3=[];
    pociones4=[];
    pociones5=[];
    parcas2=[];
    carps=[];
    carps2=[];
    carps3=[];
    carps4=[];
    carps5=[];
    charcos1=[];
    charcos2=[];
}

function draw(){
    switch(pantalla){
        case 0:
        image( inicio, 0, 0,981,696);
        break;
        case 1:
        image (contexto,0,0,981,696);
        break;
        case 2:
        image (instrucciones,0,0,981,696);
        break;
        case 3:
        image (contexto1,0,0,981,696);
        break;
        case 4:
        image (juego,0,0,981,696);
        fill(0);
        textSize(30);
        text(+monedas,270,65);
        text(+vida,158,65);
        //arreglo charcos espacio1
        for(let p=0;p<charcos1.length;p++){
            charco1=charcos1[p];
            dibujarChC(charco1);
        }
        //mata una sola parca
        for(let j=0;j<parcas.length;j++){
            for(m=0; m<charcos2.length; m++){
                if(dist(parcas[j].x5,parcas[j].y5, charcos2[m].x7,charcos2[m].y7)<=60){
                    parcas.splice(j,1);
                    monedas+=20;
                    puntaje+=50;
                    charcos2.splice(m,1);
                    }
            }
        }
        for(let j=0;j<parcas2.length;j++){
            for(m=0; m<charcos2.length; m++){
                if(dist(parcas2[j].x5,parcas2[j].y5, charcos2[m].x7,charcos2[m].y7)<=60){
                    parcas2.splice(j,1);
                    monedas+=20;
                    puntaje+=50;
                    charcos2.splice(m,1);
                    }
            }
        }
        //arreglo charcos espacio2
        for(let p=0;p<charcos2.length;p++){
            charco2=charcos2[p];
            dibujarChR(charco2);
        }
        for(let j=0;j<zombies.length;j++){
            for(m=0; m<charcos1.length; m++){
                if(dist(zombies[j].x,zombies[j].y, charcos1[m].x6, charcos1[m].y6)<=60){
                    zombies.splice(j,1);
                    monedas+=10;
                    puntaje+=25;
                    charcos1.splice(m,1);
                    }
            }
        }
        for(let j=0;j<zombies2.length;j++){
            for(m=0; m<charcos1.length; m++){
                if(dist(zombies2[j].x,zombies2[j].y, charcos1[m].x6, charcos1[m].y6)<=60){
                    zombies2.splice(j,1);
                    monedas+=10;
                    puntaje+=25;
                    charcos1.splice(m,1);
                    }
            }
        }
        //arreglo zombies nivel1
        for(i=0; i<zombies.length; i++){
            zom= zombies[i];
            dibujarZombie(zom);
            zom.mover(zom);
        }
        if(frameCount %100===0 && numEnemigos<10){
            numEnemigos++;
            zom= new Zombie(-20,585,2);
            zombies.push(zom); 
    }
        for(let i = 0; i<zombies.length; i++){
            if(zombies[i].y>=660){
                zombies.splice(i,1);
                vida--;
            }
        }

        //arreglo zombies nivel2
        for(k=0;k<zombies2.length;k++){
            zombie2= zombies2 [k];
            dibujarZombie(zombie2);
            zombie2.mover2(zombie2);
        }
        if(frameCount>=3500){
            if(frameCount %50===0 &&numEnemigos3<8){
                numEnemigos3++;
                zombie2= new Zombie(466,642,2);
                zombies2.push(zombie2);
            }
        }
        for(let k=0;k<zombies2.length;k++){
            if(zombies2[k].y>=660){
                zombies2.splice(k,1);
                vida--;
            }
        }

        //arreglo parcas nivel1
        for(j=0; j<parcas.length; j++){
            par= parcas [j];
            dibujarParca(par);
            par.moverParca(par);
        }
        if(frameCount>=2500){
        if(frameCount %50===0 && numEnemigos2<6 ){
            numEnemigos2++;
            par= new Parcas(451,670);
            parcas.push(par);
        }
        }
        for(let j = 0; j<parcas.length; j++){
            if(parcas[j].y5>=700){
                parcas.splice(j,1);
                vida--;
            }
        }

        //arreglo parcas nivel2
        for(s=0; s<parcas2.length; s++){
            par2= parcas2 [s];
            dibujarParca(par2);
            par2.moverParca(par2);
        }
        if(frameCount>=4000){
            if(frameCount%50===0 && numEnemigos4<15){
                numEnemigos4++;
                par2= new Parcas(451,670);
                parcas2.push(par2);
            }
        }

        for(let s=0; s<parcas2.length; s++){
            if(parcas2[s].y5>=700){
                parcas2.splice(s,1);
                vida--;
            }
        }
        //arreglo pelotas1
        for(i=0;i<pelotas.length;i++){
            pelota=pelotas[i];
            dibujarPelota(pelota);
            pelota.moverP(pelota);
        }
        //espacio1 pelotas
        if(bolas1==true){
            if(frameCount%50==0){
                pelota= new Pelotas(177,473);
                pelotas.push(pelota);
            }
        
        for(i=0;i<pelotas.length;i++){
            if(pelotas[i].x3>=294){
                pelotas.splice(i,1);
            }
        }
    }
//carpa nivel2 espacio1
    if(nivel1==true){
        for(g=0;g<carps.length;g++){
            carp= carps[g];
            dibujarGrande(carp);
            carp.moverP(carp);
        }
        if(frameCount%50==0){
            carp= new Pelotas(177,473);
            carps.push(carp);
        }
        for(g=0;g<carps.length;g++){
            if(carps[g].x3>=330){
                carps.splice(g,1);
            }
        }
    }
    

    //arreglo pociones1
    for(t=0;t<pociones.length;t++){
        p1=pociones[t];
        dibujarPocion(p1);
        p1.movP(p1);
    }
    if(pocion1==true){
        if(frameCount%150==0){
            p1= new Pociones(176,480);
            pociones.push(p1);
        }
        for(t=0;t<pociones.length;t++){
            if(pociones[t].x4>=294){
                pociones.splice(t,1);
            }
        }
    }
    //nivel2
    if(pocion1==false && niv1==true){
        if(frameCount%50==0){
            p1=new Pociones(176,480);
            pociones.push(p1);
        }
        for(t=0;t<pociones.length;t++){
            if(pociones[t].x4>=294){
                pociones.splice(t,1);
            }
        }
    }

        //arreglo pelotas2
        for(q=0;q<pelotas2.length;q++){
            pelota2=pelotas2[q];
            dibujarPelota(pelota2);
            pelota2.moverPdiag(pelota2);
        }
        //espacio2 pelotas
        if(bolas2==true){
        if(frameCount%50==0){
            pelota2=new Pelotas(393,211);
            pelotas2.push(pelota2);
        }
        for(q=0;q<pelotas2.length;q++){
            if(pelotas2[q].y3<=144){
                pelotas2.splice(q,1);
            }
        }
    }

    //carpa nivel2 espacio2
    if(nivel2==true){
        for(g=0;g<carps2.length;g++){
            carp2= carps2[g];
            dibujarGrande(carp2);
            carp2.moverPdiag(carp2);
        }
        if(frameCount%50==0){
            carp2= new Pelotas(393,211);
            carps2.push(carp2);
        }
        for(g=0;g<carps2.length;g++){
            if(carps2[g].y3<=144){
                carps2.splice(g,1);
            }
        }
    }
    //arreglo pociones2
    for(o=0;o<pociones2.length;o++){
        p2=pociones2[o];
        dibujarPocion(p2);
        p2.movPdiag(p2);
    }
    if(pocion2==true){
        if(frameCount%150==0){
            p2=new Pociones(392,225);
            pociones2.push(p2);
        }
        for(o=0;o<pociones2.length;o++){
            if(pociones2[o].y4<=144){
                pociones2.splice(o,1);
            }
        }
    }
    //nivel2
   if(pocion2==false && niv2==true){
       if(frameCount%50==0){
           p2=new Pociones(392,225);
            pociones2.push(p2);
           }
           for(o=0;o<pociones2.length;o++){
               if(pociones2[o].y4<=144){
                   pociones2.splice(o,1);
               }
           }
       }
   
    //arreglo pelotas3
    for(e=0;e<pelotas3.length;e++){
        pelota3=pelotas3[e];
        dibujarPelota(pelota3);
        pelota3.moverPizq(pelota3);
    }
    //espacio3 pelotas
    if(bolas3==true){
        if(frameCount%50==0){
            pelota3=new Pelotas(576,473);
            pelotas3.push(pelota3);
        }
        for(e=0;e<pelotas3.length;e++){
            if(pelotas3[e].x3<=457){
                pelotas3.splice(e,1);
            }
        }
    }

    //carpa nivel2 espacio3
    if(nivel3==true){
        for(g=0;g<carps3.length;g++){
            carp3= carps3[g];
            dibujarGrande(carp3);
            carp3.moverPizq(carp3);
        }
        if(frameCount%50==0){
            carp3= new Pelotas(576,473);
            carps3.push(carp3);
        }
        for(g=0;g<carps3.length;g++){
            if(carps3[g].x3<=457){
                carps3.splice(g,1);
            }
        }
    }
    //arreglo pociones3
    for(m=0;m<pociones3.length;m++){
        p3=pociones3[m];
        dibujarPocion(p3);
        p3.movPizq(p3);
    }
    if(pocion3==true){
        if(frameCount%150==0){
            p3=new Pociones(578,479);
            pociones3.push(p3);
        }
        for(m=0;m<pociones3.length;m++){
            if(pociones3[m].x4<=457){
                pociones3.splice(m,1);
            }
        }
    }
    //nivel 2
    if(pocion3==false && niv3==true){
        if(frameCount%50==0){
            p3=new Pociones(578,479);
            pociones3.push(p3);
        }
        for(m=0;m<pociones3.length;m++){
            if(pociones3[m].x4<=457){
                pociones3.splice(m,1);
            }
        }
    }

    //arreglo pelotas4
    for(d=0;d<pelotas4.length;d++){
        pelota4=pelotas4[d];
        dibujarPelota(pelota4);
        pelota4.moverP(pelota4);
    }
    //espacio4 pelotas
    if(bolas4==true){
        if(frameCount%50==0){
            pelota4=new Pelotas(734,255);
            pelotas4.push(pelota4);
        }
        for(d=0;d<pelotas4.length;d++){
            if(pelotas4[d].x3>=850){
                pelotas4.splice(d,1);
            }
        }
    }

    //comprar carpa4 nivel2
    if(nivel4==true){
        for(g=0;g<carps4.length;g++){
            carp4= carps4[g];
            dibujarGrande(carp4);
            carp4.moverP(carp4);
        }
        if(frameCount%50==0){
            carp4= new Pelotas(734,255);
            carps4.push(carp4);
        }
        for(g=0;g<carps4.length;g++){
            if(carps4[g].x3>=850){
                carps4.splice(g,1);
            }
        }
    }
    //arreglo pociones4
    for(n=0;n<pociones4.length;n++){
        p4=pociones4[n];
        dibujarPocion(p4);
        p4.movP(p4);
    }
    if(pocion4==true){
        if(frameCount%150==0){
            p4=new Pociones(737,264);
            pociones4.push(p4);
        }
        for(n=0;n<pociones4.length;n++){
            if(pociones4[n].x4>=850){
                pociones4.splice(n,1);
            }
        }
    }
    //nivel2
    if(pocion4==false && niv4==true){
        if(frameCount%50==0){
            p4=new Pociones(737,264);
            pociones4.push(p4);
        }
        for(n=0;n<pociones4.length;n++){
            if(pociones4[n].x4>=850){
                pociones4.splice(n,1);
            }
        }
    }
    //arreglo pelotas5
    for(f=0;f<pelotas5.length;f++){
        pelota5=pelotas5[f];
        dibujarPelota(pelota5);
        pelota5.moverPizq(pelota5);
    }
    //espacio5 pelotas
    if(bolas5==true){
        if(frameCount%50==0){
            pelota5=new Pelotas(897,470);
            pelotas5.push(pelota5);
        }
        for(f=0;f<pelotas5.length;f++){
            if(pelotas5[f].x3<=797){
                pelotas5.splice(f,1);
            }
        }
    }
    if(nivel5==true){
        for(g=0;g<carps5.length;g++){
            carp5= carps5[g];
            dibujarGrande(carp5);
            carp5.moverPizq(carp5);
        }
        if(frameCount%50==0){
            carp5= new Pelotas(897,470);
            carps5.push(carp5);
        }
        for(g=0;g<carps5.length;g++){
            if(carps5[g].x3<=780){
                carps5.splice(g,1);
            }
        }
    }
    //arreglo pociones5
    for(b=0;b<pociones5.length;b++){
        p5=pociones5[b];
        dibujarPocion(p5);
        p5.movPizq(p5);
    }
    if(pocion5==true){
        if(frameCount%150==0){
            p5=new Pociones(897,479);
            pociones5.push(p5);
        }
        for(b=0;b<pociones5.length;b++){
            if(pociones5[b].x4<=797){
                pociones5.splice(b,1);
            }
        }
    }
    if(pocion5==false && niv5==true){
        if(frameCount%50==0){
            p5=new Pociones(897,479);
            pociones5.push(p5);
        }
        for(b=0;b<pociones5.length;b++){
            if(pociones5[b].x4<=797){
                pociones5.splice(b,1);
            }
        }
    }
        
    //muerte zombies1 por pelotas nivel1, espacio1
        for(let r = 0; r<pelotas.length; r++){
            for(let w = 0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,pelotas[r].x3,pelotas[r].y3)<=12){
                    zombies.splice(w,1);
                    monedas+=10;
                    puntaje+=25;
                }   
        }
    }
    //muerte zombies1 por pelotas nivel2, espacio1
    for(let r=0;r<carps.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,carps[r].x3,carps[r].y3)<=50){
                    zombies.splice(w,1);
                    monedas+=10;
                    puntaje+=25;
                }
        }
    }
    //muerte zombies1 por pociones, espacio1
    for(let r=0; r<pociones.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,pociones[r].x4,pociones[r].y4)<=30){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }
        }
    }
    //muerte zombies1 por pelotas nivel1, espacio2
    for(let r = 0; r<pelotas2.length; r++){
        for(let w = 0; w<zombies.length;w++){
        if(dist(zombies[w].x,zombies[w].y,pelotas2[r].x3,pelotas2[r].y3)<=20){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }   
    }
}
    //muerte zombies1 por pelotas nivel2, espacio2
    for(let r=0;r<carps2.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,carps2[r].x3,carps2[r].y3)<=50){
                    zombies.splice(w,1);
                    monedas+=10;
                    puntaje+=25;
                }
        }
    }
    //muerte zombies1 por pociones, espacio2
    for(let r=0; r<pociones2.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,pociones2[r].x4,pociones2[r].y4)<=30){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }
        }
    }
    //muerte zombies1 por pelotas nivel1, espacio4
    for(let r = 0; r<pelotas4.length; r++){
        for(let w = 0; w<zombies.length;w++){
        if(dist(zombies[w].x,zombies[w].y,pelotas4[r].x3,pelotas4[r].y3)<=20){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }   
    }
}
    //muerte zombies1 por pelotas nivel2, espacio4
    for(let r=0;r<carps4.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,carps4[r].x3,carps4[r].y3)<=50){
                    zombies.splice(w,1);
                    monedas+=10;
                    puntaje+=25;
                }
        }
    }
    //muerte zombies1 por pociones, espacio4
    for(let r=0; r<pociones4.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,pociones4[r].x4,pociones4[r].y4)<=30){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }
        }
    }
    //muerte zombies1 por pelotas nivel1, espacio5
    for(let r = 0; r<pelotas5.length; r++){
        for(let w = 0; w<zombies.length;w++){
        if(dist(zombies[w].x,zombies[w].y,pelotas5[r].x3,pelotas5[r].y3)<=40){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }   
    }
}
//muerte zombies1 por pelotas nivel2, espacio5
for(let r=0;r<carps5.length; r++){
    for(let w=0; w<zombies.length;w++){
        if(dist(zombies[w].x,zombies[w].y,carps5[r].x3,carps5[r].y3)<=60){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }
    }
}
        //muerte zombies1 por pociones, espacio5
    for(let r=0; r<pociones5.length; r++){
        for(let w=0; w<zombies.length;w++){
            if(dist(zombies[w].x,zombies[w].y,pociones5[r].x4,pociones5[r].y4)<=30){
                zombies.splice(w,1);
                monedas+=10;
                puntaje+=25;
            }
        }
    }
    //muerte parcas1 por pelotas nivel1, espacio2
    for(let d=0; d<pelotas2.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pelotas2[d].x3,pelotas2[d].y3)<=20){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel2, espacio2
    for(let d=0; d<carps2.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,carps2[d].x3,carps2[d].y3)<=55){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pociones, espacio2
    for(let d=0;d<pociones2.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pociones2[d].x4,pociones2[d].y4)<=30){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel1, espacio3
    for(let d=0; d<pelotas3.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pelotas3[d].x3,pelotas3[d].y3)<=25){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel2, espacio3
    for(let d=0; d<carps3.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,carps3[d].x3,carps3[d].y3)<=55){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pociones, espacio3
    for(let d=0;d<pociones3.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pociones3[d].x4,pociones3[d].y4)<=30){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel1, espacio4
    for(let d=0; d<pelotas4.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pelotas4[d].x3,pelotas4[d].y3)<=25){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel2, espacio4
    for(let d=0; d<carps4.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,carps4[d].x3,carps4[d].y3)<=55){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pociones, espacio4
    for(let d=0;d<pociones4.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pociones4[d].x4,pociones4[d].y4)<=30){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel1, espacio5
    for(let d=0; d<pelotas5.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pelotas5[d].x3,pelotas5[d].y3)<=25){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pelotas nivel2, espacio5
    for(let d=0; d<carps5.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,carps5[d].x3,carps5[d].y3)<=55){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte parcas1 por pociones, espacio5
    for(let d=0;d<pociones5.length;d++){
        for(let p=0;p<parcas.length;p++){
            if(dist(parcas[p].x5,parcas[p].y5,pociones5[d].x4,pociones5[d].y4)<=30){
                parcas.splice(p,1);
                monedas+=20;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel1, espacio2
    for(let k=0;k<pelotas2.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pelotas2[k].x3,pelotas2[k].y3)<=40){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel2, espacio2
    for(let k=0;k<carps2.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,carps2[k].x3,carps2[k].y3)<=55){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pociones, espacio2
    for(let k=0;k<pociones2.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pociones2[k].x4,pociones2[k].y4)<=30){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel1, espacio3
    for(let k=0;k<pelotas3.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pelotas3[k].x3,pelotas3[k].y3)<=40){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel2, espacio3
    for(let k=0;k<carps3.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,carps3[k].x3,carps3[k].y3)<=55){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pociones, espacio3
    for(let k=0;k<pociones3.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pociones3[k].x4,pociones3[k].y4)<=30){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel1, espacio4
    for(let k=0;k<pelotas4.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pelotas4[k].x3,pelotas4[k].y3)<=40){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel2, espacio4
    for(let k=0;k<carps4.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,carps4[k].x3,carps4[k].y3)<=55){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pociones, espacio4
    for(let k=0;k<pociones4.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pociones4[k].x4,pociones4[k].y4)<=30){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel1, espacio5
    for(let k=0;k<pelotas5.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pelotas5[k].x3,pelotas5[k].y3)<=40){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pelotas nivel2, espacio5
    for(let k=0;k<carps5.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,carps5[k].x3,carps5[k].y3)<=55){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte zombies2 por pociones, espacio5
    for(let k=0;k<pociones5.length;k++){
        for(let i=0;i<zombies2.length;i++){
            if(dist(zombies2[i].x,zombies2[i].y,pociones5[k].x4,pociones5[k].y4)<=30){
                zombies2.splice(i,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel1, espacio2
    for(let c=0;c<pelotas2.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pelotas2[c].x3,pelotas2[c].y3)<=40){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel2, espacio2
    for(let c=0;c<carps2.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,carps2[c].x3,carps2[c].y3)<=55){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pociones, espacio2
    for(let c=0;c<pociones2.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pociones2[c].x4,pociones2[c].y4)<=30){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel1, espacio3
    for(let c=0;c<pelotas3.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pelotas3[c].x3,pelotas3[c].y3)<=40){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel2, espacio3
    for(let c=0;c<carps3.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,carps3[c].x3,carps3[c].y3)<=55){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pociones, espacio3
    for(let c=0;c<pociones3.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pociones3[c].x4,pociones3[c].y4)<=30){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel1, espacio4
    for(let c=0;c<pelotas4.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pelotas4[c].x3,pelotas4[c].y3)<=40){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel2, espacio4
    for(let c=0;c<carps4.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,carps4[c].x3,carps4[c].y3)<=55){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pociones, espacio4
    for(let c=0;c<pociones4.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pociones4[c].x4,pociones4[c].y4)<=30){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel1, espacio5
    for(let c=0;c<pelotas5.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pelotas5[c].x3,pelotas5[c].y3)<=40){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pelotas nivel2, espacio5
    for(let c=0;c<carps5.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,carps5[c].x3,carps5[c].y3)<=55){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
    //muerte parca2 por pociones, espacio5
    for(let c=0;c<pociones5.length;c++){
        for(let u=0;u<parcas2.length;u++){
            if(dist(parcas2[u].x5,parcas2[u].y5,pociones5[c].x4,pociones5[c].y4)<=30){
                parcas2.splice(u,1);
                monedas+=10;
                puntaje+=50;
            }
        }
    }
        //arreglo carpas
        for(j=0;j<carpas.length;j++){
            carpa= carpas[j];
            dibujarCarpa(carpa);
        }
        //arreglo carruseles
        for(k=0;k<carruseles.length;k++){
            carrusel=carruseles[k];
            dibujarCarrusel(carrusel);
        }
        //imagenes de comprar charcos
        if(c3==true){
            image(charCom,700,22,109,66);
        }
        if(c4==true){
            image(char2Com,810,22,109,66);
        }
        
        //imagenes de comprar torres
        if(c1==true){
            image(carpaCom,453,22,109,66)
        }
        if(c2==true){
            image(carruselCom,575,22,109,66);
        }
        //imagenes de comprar niveles2
        if(n1==true){
            image(subii1,880,144,66,98);
        }
        if(n2==true){
            image(subii2,880,224,66,98);
        }

        //perder
        if(vida==0){
            pantalla=6;
        }
        //ganar
        if(frameCount>6000 && parcas2.length==0){
            pantalla=5;
        }
        break;
        case 5:
        image (resumen,0,0,981,696);
        textSize(60);
        text(+puntaje,432,335);
        text(+monedas,434,506);
        textSize(30);
        break;
        case 6:
            image(perdiste,0,0,981,696);
    }
    fill(255);
    text("X:"+mouseX+" Y:"+mouseY, mouseX, mouseY);
    //interacción
    switch (pantalla){
        case 0:
        if(mouseX>=380 && mouseX<=554 && mouseY>=594 && mouseY<=644)
        image(int, 387,585);
        break;
        case 1:
        if(mouseX>=390 && mouseX<= 585 && mouseY>=542 && mouseY<=596){
            image(int2, 386,540);
        }
        break;
        case 2:
        if(mouseX>=511 && mouseX<=766 && mouseY>=542 && mouseY<=587){
            image(int3, 518,530);  
        }
        if(mouseX>=218 && mouseX<=433 && mouseY>=535 && mouseY<=592){
            image(int2, 222,530);
        }
        break;
        case 3:
            if(mouseX> 525 && mouseX<777 && mouseY >542 && mouseY<595){
                image(int3, 535,533);
            }  
            if(mouseX> 240 && mouseX<400 && mouseY >535 && mouseY<594){
                image(int4, 240,532);
        }
    }
}
function mousePressed(){
    //paso de las pantallas
    switch(pantalla){
        case 0:
            if(mouseX> 380 && mouseX<554 && mouseY >594 && mouseY<644){
                pantalla= 1;
            }
        break;
        case 1:
            if(mouseX> 390 && mouseX<585 && mouseY >542 && mouseY<596){
                    pantalla= 2;
            }
        break;
        case 2:
             if(mouseX> 511 && mouseX<766 && mouseY >542 && mouseY<587){
                    pantalla= 4;
            }
            if(mouseX> 218 && mouseX<433 && mouseY >535 && mouseY<592){
                pantalla= 3;
        }
        break;
        case 3:
            if(mouseX> 525 && mouseX<777 && mouseY >542 && mouseY<595){
                    pantalla= 4;
            }  
            if(mouseX> 240 && mouseX<400 && mouseY >535 && mouseY<594){
                pantalla= 2;
        }
        break;
        case 4:
            //comprar charcos espacio1
            if(dist(130,244,mouseX,mouseY)<=37){
                activar1=true;
                espaciosCh();
            }
            if(dist(800,476,mouseX,mouseY)<=37){
                activar2=true;
                espaciosCh();
            }
            //dependiendo de las monedas aparecen para comprar ciertas torres, en el espacio1
            if(dist(177,547,mouseX,mouseY)<=37){
                activarEsp1=true;
                espacios();
            }
            //comprar torres espacio2
            if(dist(394,291,mouseX,mouseY)<=37){
                activarEsp2=true;
                espacios();
            }
            //comprar torres espacio3
            if(dist(579,549,mouseX,mouseY)<=37){
                activarEsp3=true;
                espacios();
            }
            //comprar torres espacio4
            if(dist(739,328,mouseX,mouseY)<=37){
                activarEsp4=true;
                espacios();
            }
            //comprar torres espacio5
            if(dist(899,549,mouseX,mouseY)<=37){
                activarEsp5=true;
                espacios();
            }

            //aparecer imagenes para comprar subida de nivel en la carpa1
            if(dist(177,473,mouseX,mouseY)<=10 &&monedas>=20 &&bolas1==true){
                n1=true;
                act1=true;
            }
            if(n1==true && dist(913,177,mouseX,mouseY)<=33 &&act1==true){
                n1=false;
                monedas-=20;
                bolas1=false;
                act1=false;
                nivel1=true;
        }
            //comprar subida de nivel en la carpa2
             if(dist(393,211,mouseX,mouseY)<=10 &&monedas>=20 &&bolas2==true){
                n1=true;
                act2=true;
            }
            if(n1==true && dist(913,177,mouseX,mouseY)<=33 &&act2==true){
                n1=false;
                monedas-=20;
                bolas2=false;
                act2=false;
                nivel2=true;
        }

        //comprar subida de nivel carpa3
            if(dist(576,473,mouseX,mouseY)<=10 &&monedas>=20 &&bolas3==true){
                n1=true;
                act3=true;
            }
            if(n1==true && dist(913,177,mouseX,mouseY)<=33 &&act3==true){
                n1=false;
                monedas-=20;
                bolas3=false;
                act3=false;
                nivel3=true;
        }
        //comprar subida de nivel carpa4
            if(dist(737,255,mouseX,mouseY)<=10 &&monedas>=20 &&bolas4==true){
                n1=true;
                act4=true;
            }
            if(n1==true && dist(913,177,mouseX,mouseY)<=33 &&act4==true){
                n1=false;
                monedas-=20;
                bolas4=false;
                act4=false;
                nivel4=true;
        }
        //comprar subida de nivel carpa5
            if(dist(897,470,mouseX,mouseY)<=10 &&monedas>=20 &&bolas5==true){
                n1=true;
                act5=true;
            }
            if(n1==true && dist(913,177,mouseX,mouseY)<=33 &&act5==true){
                n1=false;
                monedas-=20;
                bolas5=false;
                act5=false;
                nivel5=true;
        }

        //comprar subida de nivel carrusel1
        if(dist(176,480,mouseX,mouseY)<=33&&monedas>=60&& pocion1==true){
            n2=true;
            act1=true;
        }
        if(n2==true&&dist(913,257,mouseX,mouseY)<=33&&act1==true){
            n2=false;
            monedas-=60;
            pocion1=false;
            act1=false;
            niv1=true;
        }

        //comprar subida de nivel carrusel2
        if(dist(392,225,mouseX,mouseY)<=33&&monedas>=60&& pocion2==true){
            n2=true;
            act2=true;
        }
        if(n2==true&&dist(913,257,mouseX,mouseY)<=33&&act2==true){
            n2=false;
            monedas-=60;
            pocion2=false;
            act2=false;
            niv2=true;
        }
        //comprar subida de nivel carrusel3
        if(dist(578,479,mouseX,mouseY)<=33&&monedas>=60&& pocion3==true){
            n2=true;
            act3=true;
        }
        if(n2==true&& dist(913,257,mouseX,mouseY)<=33&&act3==true){
            n2=false;
            monedas-=60;
            pocion3=false;
            act3=false;
            niv3=true;
        }
        //comprar subida de nivel carrusel4
        if(dist(737,264,mouseX,mouseY)<=33&&monedas>=60 &&pocion4==true){
            n2=true;
            act4=true;
        }
        if(n2==true&& dist(913,257,mouseX,mouseY)<=33&& act4==true){
            n2=false;
            monedas-=60;
            pocion4=false;
            act4=false;
            niv4=true;
        }
        //comprar subida de nivel carrusel5
        if(dist(897,479,mouseX,mouseY)<=33&&monedas>=60 &&pocion5==true){
            n2=true;
            act5=true;
        }
        if(n2==true&& dist(913,257,mouseX,mouseY)<=33 &&act5==true){
            n2=false;
            monedas-=60;
            pocion5=false;
            act5=false;
            niv5=true;
        }
        

            //colocar carpa en el espacio 1
            if(c1==true && dist(468,55,mouseX,mouseY)<=33 &&activarEsp1==true &&noMas1==false){
                carpa= new Carpa(145,475);
                carpas.push(carpa);
                c1=false;
                c2=false;
                monedas-=15;
                bolas1=true;
                activarEsp1=false;
                noMas1=true;
        }
        //colocar carrusel espacio1
        if(c2==true &&dist(605,55,mouseX,mouseY)<=33 &&activarEsp1==true &&noMas1==false){
            carrusel= new Carrusel(144,480);
            carruseles.push(carrusel);
            c1=false;
            c2=false;
            monedas-=30;
            pocion1=true;
            activarEsp1=false;
            noMas1=true;
        }
        //colocar charcos en espacio1
        if(c3==true && dist(730,55,mouseX,mouseY)<=40 &&activar1==true &&noChar==false){
            charco1= new CharcoC(130,240);
            charcos1.push(charco1);
            c3=false;
            c4=false;
            monedas-=20;
            activar1=false;
            noChar=true;
        }
        if(c4==true &&dist(875,55,mouseX,mouseY)<=40&& activar1==true &&noChar2==false){
            charco2= new CharcoR(130,240);
            charcos2.push(charco2);
            c3=false;
            c4=false;
            monedas-=40;
            activar2=false;
            noChar2=true;
        }
        //colocar charcos en espacio2
        if(c3==true && dist(730,55,mouseX,mouseY)<=40 &&activar2==true &&noChar==false){
            charco1= new CharcoC(800,446);
            charcos1.push(charco1);
            c3=false;
            c4=false;
            monedas-=20;
            activar2=false;
            noChar=true;
        }
        if(c4==true &&dist(875,55,mouseX, mouseY)<=40&&activar2==true &&noChar==false){
            charco2= new CharcoR(800,446);
            charcos2.push(charco2);
            c3=false;
            c4=false;
            monedas-=40;
            activar2=false;
            noChar2=true;
        }
        //colocar carpa espacio2
        if(c1==true && dist(468,55,mouseX,mouseY)<=33 && activarEsp2==true &&noMas2==false){
            carpa= new Carpa(360,215);
            carpas.push(carpa);
            c1=false;
            c2=false;
            monedas-=15;
            bolas2=true;
            activarEsp2=false;
            noMas2=true;
        }
        //colocar carrusel espacio2
        if(c2==true &&dist(605,55,mouseX,mouseY)<=33 &&activarEsp2==true &&noMas2==false){
            carrusel=new Carrusel(359,224);
            carruseles.push(carrusel);
            c1=false;
            c2=false;
            monedas-=30;
            pocion2=true;
            activarEsp2=false;
            noMas2=true;
        }
        //colocar carpa espacio3
        if(c1==true && dist(468,55,mouseX,mouseY)<=33 && activarEsp3==true &&noMas3==false){
            carpa= new Carpa(545,474);
            carpas.push(carpa);
            c1=false;
            c2=false;
            monedas-=15;
            bolas3=true;
            activarEsp3=false;
            noMas3=true;
        }
        //colocar carrusel espacio3
        if(c2==true &&dist(605,55,mouseX,mouseY)<=33 &&activarEsp3==true &&noMas3==false){
            carrusel=new Carrusel(545,478);
            carruseles.push(carrusel);
            c1=false;
            c2=false;
            monedas-=30;
            pocion3=true;
            activarEsp3=false;
            noMas3=true;
        }
        //colocar carpa espacio4
        if(c1==true &&dist(468,55,mouseX,mouseY)<=33&& activarEsp4==true &&noMas4==false){
            carpa= new Carpa(705,257);
            carpas.push(carpa);
            c1=false;
            c2=false;
            monedas-=15;
            bolas4=true;
            activarEsp4=false;
            noMas4=true;
        }
        //colocar carrusel espacio4
        if(c2==true &&dist(605,55,mouseX,mouseY)<=33 &&activarEsp4==true &&noMas4==false){
            carrusel=new Carrusel(704,262);
            carruseles.push(carrusel);
            c1=false;
            c2=false;
            monedas-=30;
            pocion4=true;
            activarEsp4=false;
            noMas4=true;
        }
        //colocar carpa espacio5
        if(c1==true && dist(468,55,mouseX,mouseY)<=33&& activarEsp5==true &&noMas5==false){
            carpa=new Carpa(865,471);
            carpas.push(carpa);
            c1=false;
            c2=false;
            monedas-=15;
            bolas5=true;
            activarEsp5=false;
            noMas5=true;
        }
        //colocar carrusel espacio5
        if(c2==true &&dist(605,55,mouseX,mouseY)<=33 &&activarEsp5==true &&noMas5==false){
            carrusel=new Carrusel(864,478);
            carruseles.push(carrusel);
            c1=false;
            c2=false;
            monedas-=30;
            pocion5=true;
            activarEsp5=false;
            noMas5=true;
        }
    }
}
function dibujarZombie(elzombie){
    image (zombie,elzombie.x, elzombie.y,27,65);
}
function dibujarCarpa(lacarpa){
    image (carpai,lacarpa.x1,lacarpa.y1,67,90);
}
function dibujarCarrusel(elcar){
    image(carruseli,elcar.x2,elcar.y2,68,85);
}
function dibujarPelota(lap){
    imageMode(CENTER);
    image(pelotai,lap.x3,lap.y3,12,12);
    imageMode(CORNER);
}
function dibujarPelotaN2(la){
    imageMode(CENTER);
    image(pli,la.x3,la.y3,55,55);
    imageMode(CORNER);
}

function dibujarPocion(lapocion){
    imageMode(CENTER);
    image(pocioni,lapocion.x4,lapocion.y4,15,30);
    imageMode(CORNER);
}
function dibujarParca(laparca){
    image(parcai,laparca.x5,laparca.y5,58,51);
}

function espacios(){
    if(monedas>=30){
        c1=true;
        c2=true;
    }else if(monedas>=15){
        c1=true;
    }
}

function dibujarGrande(el){
    imageMode(CENTER);
    image(pli,el.x3,el.y3,55,55);
    imageMode(CORNER);
}
function espaciosCh(){
    if(monedas>=40){
        c3=true;
        c4=true;
    }else if(monedas>=20){
        c3=true;
    }
}
function dibujarChR(char){
    image(charcoi2,char.x7,char.y7,59,32);
}
function dibujarChC(charc){
    image(charcoi1,charc.x6,charc.y6,59,32);
}



