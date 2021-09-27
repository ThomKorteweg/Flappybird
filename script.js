class Ball {

  constructor(x, y, w, h, vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = vy;
    this.ay = 0.15;
  }
  drawBall() {
    ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;

    if (this.y > 380) {
      this.vy = 0;
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
  r = random(height)
  if(frameCount % 100 == 0 ){   
    rect1 = new Pijp(700, 300, 50, r, 3);
    rect2 = new Pijp(700, 100, 50, r + 50, 3);
    pipes.push(rect1, rect2);
  }

  ball1.drawBall();
  pipes.forEach(p => p.drawPijp());
}

function keyPressed() {
  if (keyCode == 32) {
    ball1.vy = -5;
  }
}



