var globeImage = new Image();
globeImage.src = "images/globe.png";

var blockImage = new Image();
blockImage.src = "images/block.png";

var mannerheimImage = new Image();
mannerheimImage.src = "images/mannerheim.png"

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
  drawPolarImage(blockImage, 100, this.angle, 0.15);
  drawPolarImage(blockImage, 115, 270+this.angle, 0.25);
  drawPolarImage(blockImage, 100, 120+this.angle, 0.18);
  drawPolarImage(mannerheimImage, 100, 150+this.angle, 0.30);
}

Globe.prototype.getCollisionElements = function()
{
  var x = cos(this.angle)*this.distance; 
  var y = sin(this.angle)*this.distance; 
  
  return [{x:x, y:y, radius:40}];
}
