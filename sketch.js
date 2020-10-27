var bullet, wall, speed, weight, damage, thickness;
function setup() {
  createCanvas(800,400);
 bullet = createSprite(70, 200, 20, 20);
 bullet.shapeColor = 255;
 weight = Math.round(random(30, 52));
 speed = Math.round(random(223,321));
 bullet.velocityX = speed;
 thickness = Math.round(random(22,83));
 wall = createSprite(700, 200, thickness, height/2);

}

function draw() {
background(0); 
  textSize(20);
  text("Speed:"+speed,350,100);
  text("Weight:"+weight,150,300);
  text("Thickness:"+thickness,500,300);

bullet.depth = wall.depth+1

  if(wall.isTouching(bullet)) { 
    damage = weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
  }

  if(damage<10){
    wall.shapeColor = "green";
    bullet.velocityX = 0;
    }
  
    if(damage>10){
      wall.shapeColor="red";
      bullet.velocityX = 0;
    }
  

  drawSprites();
}