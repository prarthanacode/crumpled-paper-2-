const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600,690,1200,20);
	bin1 = new dustbin(700,670,200,20);
	bin2 = new dustbin(610,590,20,150);
	bin3 = new dustbin(790,590,20,150);
	circle = new Circle(200,650);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  circle.display();
	bin1.display();		
	//bin2.display();
	//bin3.display();
//	bin.display(850, 605, 150, 150);
	

	
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(circle.body,circle.body.position,{x:100,y:-100})
	}
}