class Zombie {
   
    constructor(x, y, vi){
        this.x = x;
        this.y = y;
        this.vi=vi;
        this.mx=1;
        this.my=1;
        this.vel=3;
    }
    mover(){
      this.x+=this.mx;
      if (this.x>=251){
        this.mx=0;
        this.y-=this.my;
      } 
      if(this.y<=358){
          this.my=0;
          this.x+=this.mx;
          this.mx=1;
      }
      if (this.x>=463){
        this.mx=0;
        this.y-=this.my;
        this.my=1;
      }
      if(this.y<=131){
        this.my=0;
        this.x+=this.mx;
        this.mx=1;
      }
      if (this.x>=810 ){
        this.mx=0;
        this.y+=this.my;
        this.my-=1;
      }
    }

    mover2(){
      this.y-=this.my*3;
      if(this.y<=136){
        this.my=0;
        this.x+=this.mx*3;
      }
      if(this.x>=812){
        this.mx=0;
        this.y+=this.vel;
      }
    }
}