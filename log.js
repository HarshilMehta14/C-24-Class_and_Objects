class Log
{
    constructor(x,y,h,angle)
    {
    
    var log_options = {
        restitution : 0.6,
        friction : 1,
        density : 1

    }
    this.body=Bodies.rectangle(x,y,20,h,log_options);
    
    World.add(myWorld,this.body);
    
    this.width = 20;
    this.height = h;
    
    Matter.Body.setAngle(this.body,angle);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("brown");
        rect (0,0,this.width,this.height);
        pop ();
    }
}