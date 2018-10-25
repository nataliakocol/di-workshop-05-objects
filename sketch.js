var ballCount = 5;
var balls = [];

function createBall(){
    return {
    x: Math.random() * width,
    y: Math.random() * height,
    sx: Math.random() * 3,
    sy: Math.random() * 3,
    gravity: 2
  }
}

function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < ballCount; i ++) {
    balls[i] = createBall();
  }
}


function draw() {
  background(200);

  if(mouseIsPressed){
    balls[ballCount] = createBall();
    balls[ballCount].x = mouseX;
    balls[ballCount].y = mouseY;
    ballCount ++;
  }

  for (var i = 0; i < ballCount; i ++) {
    balls[i].sy += balls[i].gravity;
    balls[i].x += balls[i].sx;
    balls[i].y += balls[i].sy;

    if(balls[i].y >= height - 10){
      balls[i].y = height - 10;
    }

    if (balls[i].x <= 0 || balls[i].x >= width - 10) {
      balls[i].sx *= -1;
    }
    if (balls[i].y <= 0 || balls[i].y >= height - 10) {
      balls[i].sy *= -1;
    }

    ellipse(balls[i].x - 5, balls[i].y - 5, 20, 20)
  }
}
