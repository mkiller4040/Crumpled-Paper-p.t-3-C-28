var paperBall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	paperBall = new Paperball(200,300,35);

	ground = new Ground(150,395,1300,15);

	trashcanPart1 = new TrashcanPart(600,290,200,10);
	trashcanPart2 = new TrashcanPart(470,325,20,100);
	trashcanPart3 = new TrashcanPart(730,325,20,100);

	launcher = new Launcher(paperBall.body, {x : 100, y : 110})

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(255);
  
  paperBall.display();
  ground.display();
  trashcanPart1.display();
  launcher.display();
  //trashcanPart2.display();
  //trashcanPart3.display();

  drawSprites();
}

function keyPressed() 
{
 if (keyCode === UP_ARROW) 
  {
    Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:150,y:-150});
  }
}

function mouseDragged()
{
  Matter.Body.setPosition(paperBall.body, {x : mouseX, y : mouseY})
}

function mouseReleased()
{
  launcher.fly();
}
