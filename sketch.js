var fixedRect, movingRect;
var sprite1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1 = createSprite(200,200,100,100);
  sprite1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,sprite1)){
sprite1.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
sprite1.shapeColor = "green";
 movingRect.shapeColor = "green";
}
  
  drawSprites();
}
