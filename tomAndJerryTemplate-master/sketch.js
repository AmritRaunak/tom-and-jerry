var bgImage;
var tom,tomImg,tomRunImg,tomImg2;
var jerry,jerryImg,jerryImg2,jerryImg3;
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    jerryImg=loadImage("images/jerryTwo.png");
    tomImg=loadImage("images/tomOne.png");
    tomRunImg=loadAnimation("images/tomTwo.png","images/tomThree.png");
    jerryImg2=loadImage("images/jerryThree.png");
    jerryImg3=loadImage("images/jerryFour.png");
    tomImg2=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(70,750,20,20);
    jerry.addImage(jerryImg);
    jerry.scale=0.08;


    tom=createSprite(900,740,20,20);
    tom.addImage(tomImg);
    tom.scale=0.15;
    
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    
    console.log(tom.x);

    if(tom.x-jerry.x < (tom.width - jerry.width)/2){
      tom.changeAnimation("catStanding",tomImg2);
      tom.changeAnimation("catStanding");
      tom.velocityX=0;
      jerry.addImage(jerryImg3);
    }

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("catRunning",tomRunImg)
      tom.changeAnimation("catRunning");

      jerry.addImage(jerryImg2);
  }

}
