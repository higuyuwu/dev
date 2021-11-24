var playerRunning
var playerStart,ded

var potato,badPotato,badCat

function preload(){
playerRunning = loadAnimation("playerrunnig1png.png","playerwalking1png.png")
potato = loadImage("potato.png")
badPotato = loadImage("badpotato.png")
playerStart = loadImage("playerstart.png")
ded = loadImage("dedpng.png")
badCat = loadImage("badcat.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  }
  
  
  drawSprites();


function spawnClouds() {
  
}

function spawnObstacles() {
  
}
