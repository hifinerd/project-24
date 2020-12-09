var groundSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, height-20, width, 10 , {isStatic:true} );
	World.add(world, ground);
	paper = new Paper(100,50,25)
	bottombin = new Bin(650,665,200,20)
	leftbin = new Bin(550,600,20,150)
	rightbin = new Bin(750,600,20,150)
	//groundSprite=createSprite(width/2, height-20, width,10);


   Engine.run(engine);
  
}


function draw() {
//  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,10);
 paper.display();
 bottombin.display();
 leftbin.display();
 rightbin.display();
//drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//console.log(paper.body);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})
		//console.log(paper.body);
	}
}


