const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground
var rope



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,690,600,20);

  rope = new rope(6,{x:245,y:30})

  rectMode(CENTER);
  ellipseMode(RADIUS);


}

function draw() {
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,15,15)
  Engine.update(engine);

}
