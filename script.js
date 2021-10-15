let flappy;
let img;
var jumpSound;
let backgroundSong;
var gameState = 0;
var scoreboard = 0;

function preload() {
  img = loadImage('images/background.jpg');
  flappy = loadImage('images/flappy bird.png');
  jumpSound = loadSound('sounds/wing.mp3');
  backgroundSong = loadSound('sounds/buddy.mp3')
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

    if (this.y > 400) {
      //this.vy = 0;
      //this.ay = 0;
      gameState = 2
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

  isColliding() {
    if (ball1.x < this.x + this.w &&
      ball1.x + ball1.w > this.x &&
      ball1.y < this.y + this.h &&
      ball1.y + ball1.h > this.y) {
      gameState = 2;
      let highscore = getItem("highscore");
      if (scoreboard > highscore) {
        storeItem("highscore", scoreboard);
      }
    }
    else {
      this.c = 'green';
    }
  }
}

var ball1, rect1, rect2;
var pipes = [];

function setup() {
  createCanvas(600, 400);
  ball1 = new Ball(250, 50, 40, 30, 3);
  backgroundSong.play();
  backgroundSong.setVolume();
}


function draw() {
  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    image(img, 0, 0, 600, 520);
    textSize(100);
    textFont('optimus princeps');
    fill('red');
    text("YOU DIED", 210, 150);
    textSize
    textFont('times new roman')
    fill('black')
    text("Press ENTER to play again.", 120, 190)
    backgroundSong.stop();
    text("Score: " + round(scoreboard), 10, 25);
    text("Highscore: " + getItem("highscore"), 10, 55)
    ball1 = new Ball(250, 50, 40, 30, 3);
    pipes = [];
  }
}

function menu() {
  image(img, 0, 0, 600, 520);
  textSize(20)
  text("press ENTER to start", 230, 200);
}

function game() {
  background(110, 0, 32);
  image(img, 0, 0, 600, 520);
  textSize(30);
  fill('white');
  text(round(scoreboard), 250, 50);


  if (frameCount % 70 == 0) {
    let randomTopHeight = random(height / 2);
    rect1 = new Pijp(700, 0, 50, randomTopHeight, 3);
    rect2 = new Pijp(700, randomTopHeight + 120, 50, height, 3);
    pipes.push(rect1, rect2);

    if (pipes.length > 6) {
      pipes.splice(0, 2);
    }
  }
  ball1.drawBall();
  pipes.forEach((p) => {
    p.drawPijp();
    p.isColliding();

    if (abs(p.x - ball1.x) < 20) {
      scoreboard = scoreboard + 0.05;
    }
  });

}

function keyPressed() {
  if (keyCode == 13) {
    gameState = 1;
    scoreboard = 0;
  }

  if (keyCode == 32) {
    ball1.vy = -7;
    jumpSound.play();
  }
}