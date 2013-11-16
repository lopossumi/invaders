var globeImage = new Image();
globeImage.src = "images/globe.png";

var blockImage = new Image();
blockImage.src = "images/block.png";

var Globe = function()
{
	this.angle = 0;
	this.angleSpeed = 10;
}

Globe.prototype.update = function(dt)
{
  this.angle += this.angleSpeed * dt;
}


Globe.prototype.draw = function()
{
  drawRotatedImage(globeImage, 0, 0, this.angle, 0.3);
  drawPolarImage(blockImage, 95, this.angle, 0.1);
  drawPolarImage(blockImage, 90, 270+this.angle, 0.09);
  drawPolarImage(blockImage, 92, 120+this.angle, 0.08);
}
