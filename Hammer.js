class Hammer{
  constructor(x,y){
      var options={
          "restitution": 0.5,
          "friction":1.0,
          "density":2

      }
      this.body = Bodies.rectangle(x,y,150,30,options);
      this.w = 150;
      this.h = 30;
      World.add(world,this.body);
  }
  display(){
      var P = this.body.position;
      P.x = mouseX
      P.y = mouseY;
      var angle = this.body.angle;
      push()
      translate(P.x, P.y);
      rotate(angle);
      rectMode(CENTER); 
      fill ("yellow");
      strokeWeight(4);
      
      rect(0, 0, this.w,this.h);
      pop()
  }
}
