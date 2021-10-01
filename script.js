let flappy;
let img;
var jumpSound;
let pijp
let tijmenkast

function preload(){
  img = loadImage('background.jpg');
  flappy = loadImage('flappy bird.png');
  pijp = loadImage('pijp.png');
  jumpSound = loadSound('wing.mp3');
  tijmenkast = loadImage('tijmenkast.jpg')
}


class Ball {

  constructor(x, y, w, h, vy) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = vy;
    this.ay = 0.4;
  }
  drawBall() {
    image(flappy, this.x, this.y, this.w, this.h);
    // ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;

    if (this.y > 370) {
      this.vy = 0;
      this.ay = 0;
    }
    else {
    this.ay = 0.4;
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
    this.c = "green";
  }
  drawPijp() { 
    fill(this.c);
    //image(pijp, this.x, this.y, this.w, this.h, this.color)
    rect(this.x, this.y, this.w, this.h, this.color);
    this.x -= 4;
  }

  isColliding(){
    if(ball1.x > this.x && this.x + this.w < ball1.x){
      this.c = "red";
    }
    else{
    this.c = "green";
    }
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
  fill('white');
  text("0",250, 50);

  if(frameCount % 70 == 0 ){   
    let randomTopHeight = random(height / 2);  
  
    rect1 = new Pijp(700, 0, 50, randomTopHeight, 3);
    rect2 = new Pijp(700, randomTopHeight + 120, 50, height, 3);
    pipes.push(rect1, rect2);

    if(pipes.length > 6){
      pipes.splice(0,2);
    }
    
  }

  ball1.drawBall(); 
  pipes.forEach((p) => {
    p.drawPijp();
    p.isColliding();

});
}

function keyPressed() {
  if (keyCode == 32) {
    ball1.vy = -7;
    jumpSound.play()
  }
}