class Paper{
constructor(x,y,r)
{
    var options={
        isStatic:false,
        restitution:0.8,
        friction:0.5,
	    density:1.2
    }

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
}
display()
{
    var paperpos=this.body.position;
    console.log(paperpos)
    push()
    translate(paperpos.x,paperpos.y);
   
    strokeWeight(3);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r, this.r)
    pop()
}
}
