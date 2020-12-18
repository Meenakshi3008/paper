
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground,dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
ground = new Ground(600,height,1200,20)
dustbin1 = new Dustbin(740,600,20,100);
dustbin2 = new Dustbin(560,600,20,100);
dustbin3 = new Dustbin(650,680,200,20);
	paper = new Paper(200,350);


	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(paper.x,paper.y,20,20);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
{
  Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}



