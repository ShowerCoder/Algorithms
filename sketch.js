var movingRect, fixedRect; 

function setup() {
  fixedRect=createSprite(300, 250, 50, 80);
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
 
  createCanvas(800,400);
  movingRect=createSprite(700, 200, 80, 30);
  movingRect.debug=true;
  movingRect.shapeColor="green";
 
}

function draw() {
  background(255,255,255);
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
     movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
     fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2
     ){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
  
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
  
}