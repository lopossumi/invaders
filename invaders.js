var FPS = 25;
var ctx = null;

window.onload = init;

var shipImage = new Image();
shipImage.src = "rocket.png";

var globeImage = new Image();
globeImage.src = "images/globe.png";

var blockImage = new Image();
blockImage.src = "images/block.png";

var bgImage = new Image();
bgImage.src = "images/background.png";


var angle = 0;
var angleSpeed = 0;
var globalTime = 0;
var frameTime = 1.0/FPS;

function init()
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.translate(canvas.width/2, canvas.height/2);
  setInterval(update, 1000 / FPS );
}

function update()
{
  if(input.isDown('d'))
  {
    angleSpeed += 1;
  }

  if(input.isDown('a'))
  {
    angleSpeed -= 1;
  }

  angle += angleSpeed;
  if(angleSpeed > 20) angleSpeed = 10;
  angleSpeed = angleSpeed*0.8;

  draw();
  globalTime += 1000/FPS;
}

function draw()
{
  //ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  drawRotatedImage(bgImage, 0, 0, 0, 1);
  drawPolarImage(shipImage, 150, angle, 1);
  drawRotatedImage(globeImage, 0, 0, globalTime/200, 0.3);
  drawPolarImage(blockImage, 95, globalTime/200, 0.1);
  drawPolarImage(blockImage, 90, 270+globalTime/200, 0.09);
  drawPolarImage(blockImage, 92, 120+globalTime/200, 0.08);

}
