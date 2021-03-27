//let cup = arc(170, x1, 50, 50, 0, PI + QUARTER_PI, CHORD)
           
//let mySound = cup;
//function preload() {
  //soundFormats('mp3', 'ogg');
  //mySound = loadSound('sip.mp3');}

  let armRX = 100
  let armRY = 180
  let armLX = 190
  let armLY = 180
  
  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,255);
  
   if (mouseY < 180){
    background(201, 2, 2);
  } else if (mouseY >= 180){
    background(78,135,69);
  }
  
  
  textSize(20);
  fill(255)
  noStroke()
  text('seeing your siblings argue', 65, 40);

  fill(119, 233, 171)
   //ears
  triangle(78, 100, 140, 100, 140, 135);
  triangle(272, 100, 140, 100, 175, 155);
  
  //pink inside
  fill(255, 158, 234)
  noStroke()
  triangle(100, 105, 170, 110, 160, 135);
  triangle(250, 105, 170, 110, 195, 135);
  
  //head
  fill(119, 233, 171)
  ellipse(175, 120, 85, 75);
  
  //eyes
  fill(43, 43, 42)
  ellipse(195,115,20,10)
  ellipse(155,115,20,10)
  ellipse(180,125,3,2)
  ellipse(175,125,3,2)
  stroke(134, 252, 188)
 
  
  //body
  fill(225, 169, 121)
  rect(128,150,95,130,5,5)
  
  //arms
  fill(225, 169, 121)
  let x1 = map(mouseY, 0, width, 150,180);
  rect(100, x1, 60, 33,6,10);
  let x2 = map(mouseY, 0, width, 150, 180, true);
  rect(190, x2, 60, 33,6,10);
  //hands
  fill(119, 233, 171)
  rect(140,x1,10,20,5,4)
  rect(190,x2,10,20,5,4)
  //cup
  fill (50, 24, 8)
  arc(170, x1, 50, 50, 0, PI + QUARTER_PI, CHORD);


  //function mouseMoved() {
  //if (mouseY < 180 && !soundFile.isPlaying()) {
  //soundFile.play();} }
  
}