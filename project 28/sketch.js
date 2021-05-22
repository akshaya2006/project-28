
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin,bin,binImg;
var paper,ground;
 var engine, world;
 var slingshot

function preload()
{
    binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

   ground = new Ground();
   paper = new Paper();

	bin = createSprite(902,505,10,120);
	bin.scale = 0.45;
	bin.addImage(binImg);
  
	//bin1 = new Dustbin(902,460,120,120);
	//bin2 = new Dustbin(902,565,120,10);
	//bin3 = new Dustbin(902,505,120,10);
    slingshot = new SlingShot(paper.body,{x:200, y:50});
}


function draw() {


  rectMode(CENTER);
  background(230);

  Engine.update(engine);

  ground.display();
  paper.display();

  bin.display();
 // bin2.display();
 // bin3.display();
  slingshot.display();
   
 
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if (keyCode === 32){
       slingshot.attach(slingShot.Body);
    }
  }
  



