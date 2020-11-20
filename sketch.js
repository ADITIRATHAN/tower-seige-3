const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var hexaImg;

var score = 0;

var gameState = "onSling";

var backgroundImg;
var bg = "000000.png";

function preload() {
  hexaImg = loadImage("hexagon (1).png");
  getTime();
}


function setup() {
  createCanvas(windowWidth,600);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);

  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);

  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);

  block13 = new Block(600,140,30,40);

  stand1 = new Ground(600,285,200,10);

  stand2 = new Ground(900,195,200,10);

  ground = new Ground(width/2, 600, width, 50)

  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world, ball);

  sling = new Chain(this.ball,{x:150, y:160});
}


function draw() {
  if (backgroundImg) {
  background(backgroundImg);
  }

  Engine.update(engine);

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("lime");
  block22.display();

  stand1.display();
  stand2.display();

  ground.display();

  imageMode(CENTER);
  image(hexaImg, ball.position.x, ball.position.y, 40, 40);

  sling.display();

  textSize(20);
  fill("Blue");
  text("Score : " +score, 750, 40);

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
}


function mouseDragged() {
  if(gameState !== "launched") {
    Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
  }
}


function mouseReleased() {
  sling.fly();
  gameState = "launched";
}


function keyPressed() {
	if(keyCode === 32 && gameState === "launched")
	{
		Matter.Body.setPosition(this.ball,{x:150, y:160})
    sling.attach(this.ball);
    gameState = "onSling";
	}
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  console.log(hour);

  if(hour >= 06 && hour <= 17) {
    bg = "Orange.jpg"
  }

  else {
    bg = "000000.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}