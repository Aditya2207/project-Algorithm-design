var frect,mrect ;
var gob1,gob2,gob3,gob4 ;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(200, 200, 50, 80);
  mrect = createSprite(400,200,80,30);
  mrect.shapeColor = "green";
  frect.shapeColor = "green";
  
  gob1 = createSprite(100,100,50,50);
  gob2 = createSprite(200,100,50,50);
  gob3 = createSprite(300,100,50,50);
  gob4 = createSprite(400,100,50,50);

gob1.shapeColor = "yellow";
gob2.shapeColor = "yellow";
gob3.shapeColor = "yellow";
gob4.shapeColor = "yellow";

 // mrect.velocityY = -5;
  //mrect.velocitY = 5;
}

function draw() {
  background(0,0,0);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
  /*if(mrect.x-frect.x < frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2){
      mrect.velocityX = mrect.velocityX*(-1);
      frect.velocityX = frect.velocityX*(-1);
    }
   if( mrect.y-frect.y < frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2{
      mrect.velocityY = mrect.velocityY*(-1);
      frect.velocityY = frect.velocityY*(-1);
   mrect.shapeColor = "red";
  frect.shapeColor = "red";
  }
  else{
    frect.shapeColor = "green";
    mrect.shapeColor = "green";  
  }*/
 if(isTouching(mrect,gob3)){
  mrect.shapeColor = "blue";
  gob1.shapeColor = "blue";
  }
  else{
    gob1.shapeColor = "green";
    mrect.shapeColor = "green";
  }
  drawSprites();
}



