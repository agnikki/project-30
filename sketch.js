const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var block1, block2, block3, block4, block5,block6,block7,block8,block9;

function preload(){
  polygon_img=loadImage('hexagon.png'); 
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,395,800,10)
  //level 1
  block1=new Block(330,350,30,40,"lightblue");
  block2=new Block(360,350,30,40,"lightblue");
  block3=new Block(390,350,30,40,"lightblue");
  block4=new Block(420,350,30,40,"lightblue");
  block5=new Block(450,350,30,40,"lightblue");
  //level 2
  block6=new Block(360,310,30,40,"pink");
  block7=new Block(390,310,30,40,"pink");
  block8=new Block(420,310,30,40,"pink");
  //level 3
  block9=new Block(390,270,30,40,"aquamarine");
polygon=new Polygon(200,200,40,40);
  sling= new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {

  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
  }
}