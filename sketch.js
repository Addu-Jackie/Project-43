var hour;
var time;
var minutes;
var clock;
function setup() {
  createCanvas(1200,1400);
  clock = createSprite(300,200,20,20);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255);
  //clock.display();  
  drawSprites();
}

function hour(){
let h = hour();
text('Current hour:\n' + h, 5, 50);
}

function minute() {
let m = minute();
text('Current minute: \n' + m, 5, 50);
}

function second() {
let s = second();
text('Current second: \n' + s, 5, 50);	
}