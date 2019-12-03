class Pelotas{
    constructor(x3,y3){
        this.x3=x3;
        this.y3=y3;
    }

    moverP(){
        this.x3+=2;
    }
    moverPdiag(){
        this.x3+=3;
        this.y3-=2;
    }
    moverPizq(){
        this.x3-=2;
    }
}