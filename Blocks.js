class block extends BaseClass {
    constructor(x,y){
      super(x,y,33,50);
    } 
    display(){
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rectangle(this.body, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      
    }
  };
  