var character, backgroundimg, walking_animation;
var groundimg, ground;

function preload()
{
    walking_animation = loadAnimation("tile000.png","tile001.png","tile002.png","tile003.png");

    backgroundimg = loadImage("fundo.png");
    groundimg = loadImage("piso.png");
}

function setup()
{
    createCanvas(windowWidth,windowHeight);
    
    background=createSprite(width/2, height/3);
    background.addImage(backgroundimg);
    background.scale = 2.7;

    character=createSprite(width/2, height/2);
    character.addAnimation("walking", walking_animation);
    character.scale = 1.7;

    ground=createSprite(width/2,height/1.1);
    ground.addImage(groundimg);
    ground.velocityX = -5;
    ground.scale = 0.2;
}

function draw()
{
   if (keyDown("a"))
   {
character.x = character.x -5;
   }

   if (keyDown("d"))
   {
character.x = character.x +5;
   }


   if(ground.x < 0 )
   {
ground.x = width/3;
   }


drawSprites();

}

