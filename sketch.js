var bg,bg2,form,system,code,security;
var score=0;
//var song;
function preload() {
  bg = loadImage("bg12.jpeg");
  bg2 = loadImage("b1.jpg")
 // song = loadSound("dad.mp3");
}

function setup() {
  createCanvas(1100,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("blue");
  stroke(30)
  strokeWeight(10)
  text("Score: " + score, 700, 50);

  if(score === 3) {
    clear()
    background(bg2);
  //  song.stop();
  //  song.play();
    fill("blue")
    textSize(40);
    text("HAPPY BIRTHDAY PAPA",250, 50);
  }

  drawSprites()
}