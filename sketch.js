var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score=0
var survivalTime=0
var PLAY=1
var END=0
gameState=PLAY

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png", "sprite_2.png","sprite_3.png",
                                            "sprite_4.png","sprite_5.png","sprite_6.png",
                                            "sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
 
  ground=createSprite(1,350,900,10)
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
   
  
  
  
  

  
}


function draw() {
  background("skyblue")
  stroke("white")
  textSize(20)
fill("white")
   text("Score: "+ score, 300,40)
  
  stroke("black")
  textSize(20)
  fill("black")
  
  text("Survival Time: "+survivalTime,100,50)
  if(gameState===PLAY)
    {
  if(keyDown("space")&monkey.y>=314) {
      monkey.velocityY = -12;
    
      
    }
      monkey.velocityY=monkey.velocityY+0.8
      survivalTime=Math.ceil(frameCount/frameRate())
       food()
  Obstacle();
 console.log(monkey.y)
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+2;
  }
   if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    }}
 
  if (gameState === END) {
    fill("lime")
  textSize(30)
  text("GAMEOVER",100,200)
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
     
  }
 
  drawSprites();
monkey.collide(ground)
  
}
function food(){
  if(frameCount%80===0){
     banana=createSprite(400,335,10,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
   
    banana.scale = 0.1;
    banana.velocityX = -3;
    FoodGroup.add(banana)
    
    
    
    
  }  
  }

  function Obstacle(){
  if(frameCount%80===0){
     obstacle=createSprite(400,335,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacleGroup.add(obstacle)
  
    
    
    
    
    
  }
}

  
  
  
  
  
  
  
  