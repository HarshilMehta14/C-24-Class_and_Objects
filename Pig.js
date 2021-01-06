class Pig
{
    constructor(x,y)
    {
    
    var Pig_options = {
        restitution : 0.6,
        friction : 1,
        density : 1

    }
    this.body=Bodies.rectangle(x,y,50,50,Pig_options);
    
    World.add(myWorld,this.body);
    
    this.width = 50;
    this.height = 50;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("yellow");
        fill("green");
        rect (0,0,this.width,this.height);
        pop ();
    }
}