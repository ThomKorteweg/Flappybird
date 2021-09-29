let photo
// var jumpsound
let img

function preload(){
  img = loadImage('background.jpg');
  photo = loadImage('flappy.png')
  // jumpsound = loadSound('sounds/jump.mp3')
}


class Ball {

  constructor(x, y, w, h, vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = vy;
    this.ay = 0.5;
  }
  drawBall() {
    image(photo, this.x, this.y, this.w, this.h);
    // ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;

    if (this.y > 370) {
      this.vy = 0;
      this.ay = 0;
    }
    else {
    this.ay = 0.3;
    }
    if (this.y < 0) {
      this.y = 0
    }
  }
}

class Pijp {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;    
  }
  drawPijp() {  
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }


}

var ball1, rect1, rect2;
var pipes = [];

function setup() {
  createCanvas(600, 400); 
  ball1 = new Ball(250, 50, 40, 30, 3);    
}

function draw() {
  background(110, 0, 32);  
   image(img,0,0,600,520); 

  textSize(30);
  fill("white");
  text("0",250, 50);

  if(frameCount % 100 == 0 ){   
    let randomTopHeight = random(height / 2);
    console.log(randomTopHeight);
    rect1 = new Pijp(700, 0, 50, randomTopHeight, 3);
    rect2 = new Pijp(700, randomTopHeight + 100, 50, height, 3);
    pipes.push(rect1, rect2);

  }

  ball1.drawBall();
  pipes.forEach(p => p.drawPijp());
}



function keyPressed() {
  if (keyCode == 32) {
    ball1.vy = -6;
  }
}





