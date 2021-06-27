var ball 
function setup() {
  
  createCanvas(800,800);
ball=createSprite(400,400,100,100)
ball.shapeColor="green"
}

function draw() 
{
  
  background("blue");

drawSprites()

if(keyIsDown(UP_ARROW)){
ball.y=ball.y-10

}
if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+10
}
if(keyIsDown(LEFT_ARROW)){
  ball.x=ball.x-10
}
if(keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+10
}
}
