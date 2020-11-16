var engine,world,body

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1
var polygon
var box1,box2,box3,box4,box5,box6,box7,box8,box9

var polygonObject
var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(470, 400, 200, 15);

  
  
  //first layer
  box1=new Box(400,350,35,35);
  box2=new Box(435,350,35,35);
  box3= new Box(470,350,35,35);
  box4= new Box(505,350,35,35);
  box5= new Box(540,350,35,35);
  //second layer
  box6= new Box(435,315,35,35);
  box7 = new Box(470,315,35,35);
  box8= new Box(505,315,35,35);
 
  //third layer
  box9= new Box(470,280,35,35);


  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);

  polygonObject = new SlingShot(polygon,{x: 100, y:350})


  

}

function draw() {
  Engine.update(engine)
  background(255,255,255);  

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20);
  polygonObject.display();
}


function mouseDragged(){
//  if (gameState!=="launched"){
     // Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
      Matter.Body.setPosition(polygon.body, {x:mouseX, y: mouseY});
  //}
}
