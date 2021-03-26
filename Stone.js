class Stone{
    constructor(x,y,w,h){
        var options={
            "restitution": 0.8,
            "friction":1.0,
            "density":1.0

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        var P = this.body.position;
        var angle = this.body.angle;
        push()
        translate(P.x, P.y);
        rotate(angle);
        rectMode(CENTER); 
        fill ("red");
        strokeWeight(4);
       
        rect(0, 0, this.w,this.h);
        pop()
    }
}
    


