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
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
//	World.add(world, ground);
	//paper = new Paper(20,50,25)
	groundSprite=createSprite(width/2, height-300, width,10);


   Engine.run(engine);
  
}


function draw() {
//  rectMode(CENTER);
  background(0);
  //paper.display();
drawSprites();
}



