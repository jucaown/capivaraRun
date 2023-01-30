var character, backgroundimg, walking_animation;
var groundimg, ground, lado1, lado2, lado3, lado4;

function preload()
{
    walking_animation = loadAnimation("tile000.png","tile001.png","tile002.png","tile003.png");

    backgroundimg = loadImage("fundo.png");
    groundimg = loadImage("piso.png");
}

function setup()
{
    createCanvas(windowWidth,windowHeight);
    //edges deitadas height*0.95 | height*0.05 0
    lado1=createSprite(width*0.01, height*0.01, width, height*0.01); //x,y,w,h
    lado2=createSprite(width*0.01, height*0.99, width, height*0.01);
    
    lado3=createSprite(width*0, height*0, width*0.01, height);
    lado4=createSprite(width,   height,   width*0.01, height);
    
    background=createSprite(width/2, height/3);
    background.addImage(backgroundimg);
    background.scale = 2.7;

    character=createSprite(width/2, height/2);
    character.addAnimation("walking", walking_animation);
    character.scale = 1.7;

    ground=createSprite(width/2,height/1.1);
    ground.addImage(groundimg);
    ground.velocityX = -5;
    ground.scale = 0.2  ;
}

function draw()
{


character.collide(ground);
character.collide(lado1);
character.collide(lado2);
character.collide(lado3);
character.collide(lado4);


   if (keyDown("a"))
   {
   character.x = character.x -19;
   }

   if (keyDown("d"))
   {
   character.x = character.x +19;
   }

  

   if(ground.x < width/2.65)
   {
   ground.x = width/2;
   }
   character.velocityY = 40;
   
   //character.y>=height*0.59

   

   if (keyDown("w") && character.y>=height*0.67)
   {
      character.velocityY = -30;
   }

   

   character.velocityY = character.velocityY + 0.00001;
   console.log(character.y)

drawSprites();

}