const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImage;
var towerImage;
var tower;
var cannon;
var angle;
var cannonball;
var balls=[];

function preload() {
  backgroundImage=loadImage("assets/background.gif")
  towerImage=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle=15;
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 tower=Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower);


 cannon=new Cannon(180,110,130,100,angle);

 var mixed=[5,7,6,0]
 mixed.push(3)
 mixed.pop()
 console.log(mixed);
}

function draw() {
  image(backgroundImage,0,0,1200,600);

  Engine.update(engine);
 rectMode(CENTER);
 rect(ground.position.x, ground.position.y,width*2,1);
 push()
 imageMode(CENTER);
 image(towerImage,tower.position.x,tower.position.y,160,310)
 pop()
 
 for(var i=0;i<balls.length;i++){
  showCannonBalls(balls[i])
 }
 
   cannon.display()
   //cannonball.display()


}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}
function keyPressed(){
if(keyCode==DOWN_ARROW){
  cannonball=new CannonBall(cannon.x,cannon.y);
balls.push(cannonball)
}
}
function showCannonBalls(ball){
  if (ball){
    ball.display()
  }
}