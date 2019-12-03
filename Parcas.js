class Parcas{
    constructor(x5,y5){
        this.x5=x5;
        this.y5=y5;
        this.mx5=3;
        this.my5=3;
    }
    moverParca(){
        this.x5+=this.mx5;
        if (this.x5>=450){
          this.mx5=0;
          this.y5-=this.my5;
          this.my5=3;
        } 
        if(this.y5<=382){
            this.my5=0;
            this.x5-=-this.mx5;
            this.mx5=-1;
        }
        if (this.x5==130 && this.y5<=382){
            this.mx5=0;
            this.y5+=this.my5;
            this.my5-=3;
            this.y5-=3;
          }
          if(this.y5<=140){
            this.my5=0;
            this.x5+=this.mx5;
            this.mx5=2;
        }
        if(this.x5<=460&& this.y5<=140){
            this.my5=0;
            this.x5+=this.mx5;
            this.mx5=2;7
          }
        if (this.x5>=800 ){
            this.mx5=0;
            this.y5+=this.my5;
            this.my5-=3;
          }
    }
}