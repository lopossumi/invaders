
var playerShotImg = new Image();
playerShotImg.src = "images/playerShot.png";



var Shot = function(distance, angle, velocity)
{
	this.angle = angle;
	this.distance = distance;
	this.velocity = velocity; // pixels per second
  this.alive = true
}

Shot.prototype.update = function(dt)
{
   this.distance += this.velocity * dt;
   if (this.distance > 600)
     this.alive = false;
}

Shot.prototype.isAlive = function()
{
	return this.alive;
}

Shot.prototype.getCollisionElements = function()
{
	var x = cos(this.angle)*this.distance;
	var y = sin(this.angle)*this.distance;

	return [{x:x, y:y, radius:5}];
}


Shot.prototype.draw = function()
{
	drawPolarImage(playerShotImg, this.distance, this.angle, 1);
}
