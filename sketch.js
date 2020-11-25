var h , m , s;
var sf,ticktock;
function preload(){
  ticktock = loadSound("tick tock sound.mp3");
}
function setup() {
  createCanvas(400,400);
  sf = loadImage("SF.jpg");
  ticktock.play();
  angleMode(DEGREES);
}

function draw() {
  background(sf); 
  translate(200,200); 
  //clock code
  h = hour();

  m = minute();

  s = second();

  //code for second
  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  sAngle = map(s,0,60,0,360);
  arc(0, 0,300,300,0,sAngle);
  
  push();
  rotate(sAngle);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  //code for minute
  stroke(rgb(34, 226, 88));
  mAngle= map(m,0,60,0,360);
  arc(0,0,280,280,0,mAngle);

  push();
  rotate(mAngle);
  stroke(rgb(34, 226, 88));
  line(0,0,70,0);
  pop();

  //code for hour
  stroke("blue");
  hAngle= map(h,0,60,0,360);
  arc(0,0,260,260,0,hAngle);

  push();
  rotate(hAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
  
  push();
  stroke("black");
  strokeWeight(1);
  text(h + ' : '+m + ' : '+ s , 100,-180);
  pop();
}