
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var paper_ball
var ground
var left_side
var right_side

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	var paper_ball_options={
		isStatic:false,
	 	restitution:0.3,
	  	friction:0,
  }
	Engine.run(engine);
    
	ground = new groundObj(600,590,1200,25);
	left_side = new groundObj(1100,550,20,120)
	right_side = new groundObj(950,550,20,120)

	paper_ball = Bodies.circle(300,30,30,paper_ball_options);
    World.add(world,paper_ball);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  fill("yellow");

  ellipse(paper_ball.position.x,paper_ball.position.y,30,30);
  ground.display();
  left_side.display();
  right_side.display();
  ballUp();
}

function ballUp() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper_ball,{x:0, y:0}, {x:0.01, y:0.01});
	}
}



