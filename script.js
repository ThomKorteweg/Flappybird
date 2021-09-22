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
  }
}


function setup() {
  createCanvas(1000, 400);

  ball1 = new Ball(250, 50, 30, 30, 4)

}

function draw() {
  background(110, 0, 32);
  ball1.drawBall();
}
