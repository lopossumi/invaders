var FPS = 25;
var ctx = null;

window.onload = init;

var shipImage = new Image();
shipImage.src = "rocket.png";

var angle = 0;

function init()
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  setInterval(update, 1000 / FPS );
}

function update()
{
  if(input.isDown('d')) 
  {
    angle += 5;
  }

  draw();
}

function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height); 

  drawRotatedImage(shipImage, 100, 100, angle) 

}
