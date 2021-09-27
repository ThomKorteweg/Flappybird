class Ball {

  constructor(x, y, w, h, gravity) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.gravity = gravity;

  }
  drawBall() {
    ellipse(this.x, this.y, this.w, this.h)
    this.y = this.y + this.gravity;

    if (this.y > 380) {
      this.gravity = 0;
    }
    if (this.y < 0) {
      this.y = 20
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
    fill("green")  
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }


}

var ball1, rect1, rect2;
var pipes = [];

function setup() {
  createCanvas(600, 400);

  ball1 = new Ball(250, 50, 30, 30, 3);  
}

function draw() {
  background(110, 0, 32);
  
  if(frameCount % 100 == 0 ){
       
    rect1 = new Pijp(700, 300, 50, 100, 3);
    pipes.push(rect1);
  }

  ball1.drawBall();
  pipes.forEach(p => p.drawPijp());
}

function keyPressed() {
  if (keyCode == 32) {
    ball1.y -= 50;
  }
}



