
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3,crumpled,ground

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	side1 = new Ground(850,450,200,20)
	//side1.shapeColor = 'red'

    side2 = new Ground(750,410,20,100)
	//side2.shapeColor = 'red'
	
	side3 = new Ground(950,410,20,100)
	//side3.shapeColor = 'red'

	crumpled = new Crumpled(100,435,20)

	ground = new Ground(500,465,1000,10)

	Matter.Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('yellow');
  crumpled.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:100, y:-40})
	}
}