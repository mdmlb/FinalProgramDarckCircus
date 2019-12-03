class Pociones{
    constructor(x4,y4){
        this.x4=x4;
        this.y4=y4;
    }

    movP(){
        this.x4+=2;
    }
    movPdiag(){
        this.x4+=3;
        this.y4-=2;
    }
    movPizq(){
        this.x4-=2;
    }
}