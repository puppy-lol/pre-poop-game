var bathroomBackground
var constipationButton
var fartButton
var overflowButton
var poopImage
var shartButton
var toiletImage

function preload(){
    bathroomBackground = loadImage("bathroomBG.png");
    constipationButton = loadImage("constipationButton.png");
    fartButton = loadImage("fartButton.png");
    overflowButton = loadImage("overflowButton.png");
    poopImage = loadImage("poopPNG.png");
    shartButton = loadImage("shartButton.png");
    toiletImage = loadImage("toiletPNG.png");
}

function setup(){
  createCanvas(960, 468)

  toilet = createSprite(300, 250, 20, 20);
  toilet.addImage(toiletImage);
  toilet.scale = 0.15;

  fart = createSprite(900, 400, 10, 10);
  fart.addImage(fartButton);
  fart.scale = 0.035;

  shart = createSprite(900, 275, 10, 10);
  shart.addImage(shartButton);
  shart.scale = 0.035;

  constipation = createSprite(900, 160, 10, 10);
  constipation.addImage(constipationButton);
  constipation.scale = 0.035;

  overflow = createSprite(900, 75, 10, 10);
  overflow.addImage(overflowButton);
  overflow.scale = 0.035;

  poop = createSprite(275, 250, 10, 10);
  poop.addImage(poopImage);
  poop.scale = 0.05;
}

function draw(){
  background(bathroomBackground);
  
drawSprites()
}
