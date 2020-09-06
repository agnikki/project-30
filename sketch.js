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
  block1=new Block(330,235,30,40,"lightblue");
  block2=new Block(360,235,30,40,"lightblue");
  block3=new Block(390,235,30,40,"lightblue");
  block4=new Block(420,235,30,40,"lightblue");
  block5=new Block(450,235,30,40,"lightblue");
  //level 2
  block6=new Block(360,195,30,40,"pink");
  block7=new Block(390,195,30,40,"pink");
  block8=new Block(420,195,30,40,"pink");
  //level 3
  block9=new Block(390,155,30,40,"aquamarine");
 var options ={
   restitution:0.4,
  density:0.5,
  friction:1
 }
  polygon=Bodies.rectangle(200,200,20,20,options);
  World.add(world,polygon);
  sling= new SlingShot(polygon,{x:100,y:200});
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
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
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