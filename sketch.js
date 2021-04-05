// this is my batman begins project
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world, engine;

var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var lb, lb1, lb2, lb3, lb4;
var lbCreateFrame = 0;


function preload()
{
  lb1 = loadImage("1.png");
  lb2 = loadImage("2.png");
  lb3 = loadImage("3.png");
  lb4 = loadImage("4.png");
}


function setup()
{
  engine = Engine.create();
  world = engine.world;
  createCanvas(500,700);
  umbrella = new Umbrella (200,450);
  
  for(var i = 0; i<maxDrops;i++)
  {
    drops.push(new Drops (random(0,400), random(0,400)));
  }
}


function draw()
{
  Engine.update(engine);
  background(0);

  rand = Math.round(random(1.4));

  if(frameCount%80 === 0)
  {
    lbCreateFrame = frameCount;
    lb = createSprite(random(10,370), random(10,30),10,10);
    switch(rand)
    {
      case 1 : lb.addImage(lb1)
        break;
      case 2 : lb.addImage(lb2)
        break;
      case 3 : lb.addImage(lb3)
        break;
      case 4 : lb.addImage(lb4)
        break;
        default:break;
    }
    lb.scale = random(0.3, 0.6)


  }
   
  if(lbCreateFrame + 10 === frameCount && lb)
  {
    lb.destroy();
  }

  umbrella.display();
  for(var i = 0; i<maxDrops; i++)
  {
    drops[i].display();
    drops[i].update();
  }


  drawSprites();
}