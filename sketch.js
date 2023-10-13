
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var ball
var ground
var right_wall
var left_wall
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,20)
	right_wall = new Ground(440,550,20,100)
	left_wall = new Ground(700,550,20,100)
	
  ball = new Ball(100,200,20)
  //ball.mouseClicked(hForce)
  //rectMode(CENTER)
  //ellipseMode(RADIUS)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  ground.display()
  right_wall.display()
  left_wall.display()
  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:0})
  }
	
  }



