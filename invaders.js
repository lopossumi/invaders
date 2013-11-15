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

var mannerheimImage = new Image();
mannerheimImage.src = "images/mannerheim.png";


var angle = 0;
var angleSpeed = 0;
var globalTime = 0;
var frameTime = 1.0/FPS;

function init()
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  //ctx.translate(canvas.width/2, canvas.height/2);
  ctx.translate(0,canvas.height);

  setInterval(update, 1000 / FPS );
}

function update()
{
  if(input.isDown('d'))
  {
    angleSpeed += 0.5;
  }

  if(input.isDown('a'))
  {
    angleSpeed -= 0.5;
  }

  angle += angleSpeed;
  if(angleSpeed > 20) angleSpeed = 10;
  angleSpeed = angleSpeed*0.90;

  draw();
  globalTime += 1000/FPS;
}

function draw()
{
  //ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  drawRotatedImage(bgImage, 0, 0, -angle, 3);
  drawGrid();
  drawPolarImage(shipImage, 150, 315+angleSpeed*4, 1);
  drawPolarImage(blockImage, 95, globalTime/200-angle, 0.1);
  drawPolarImage(blockImage, 90, 270+globalTime/200-angle, 0.09);
  drawPolarImage(blockImage, 92, 120+globalTime/200-angle, 0.08);
  drawPolarImage(blockImage, 92, 90+globalTime/200-angle, 0.08);
  drawPolarImage(mannerheimImage, 92, 170+globalTime/200-angle, 0.3);
  drawRotatedImage(globeImage, 0, 0, globalTime/200-angle, 0.3);
}

function drawGrid()
{
  drawCircle(0,0,300,'rgba(0,255,0,0.3)');
  drawCircle(0,0,600,'rgba(0,255,0,0.2)');
  drawCircle(0,0,900,'rgba(0,255,0,0.15)');
  drawLine(0, 0, sin(angle)*1000, cos(angle)*1000, 'rgba(0,255,0,0.2)');
  drawLine(0, 0, sin(angle+60)*1000, cos(angle+60)*1000, 'rgba(0,255,0,0.2)');
  drawLine(0, 0, sin(angle+120)*1000, cos(angle+120)*1000, 'rgba(0,255,0,0.2)');
  drawLine(0, 0, sin(angle+180)*1000, cos(angle+180)*1000, 'rgba(0,255,0,0.2)');
  drawLine(0, 0, sin(angle+240)*1000, cos(angle+240)*1000, 'rgba(0,255,0,0.2)');
  drawLine(0, 0, sin(angle+300)*1000, cos(angle+300)*1000, 'rgba(0,255,0,0.2)');

}
