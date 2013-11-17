var shipImage = new Image();
shipImage.src = "rocket.png";



var Ship = function()
{
	this.angle = 0;
	this.angleSpeed = 00;

  this.hitpoints= 60;
  this.alive = true;
}

Ship.prototype.steerRight = function()
{
    this.angleSpeed += 25;
    if (this.angleSpeed > 250)
    	this.angleSpeed = 250;
}

Ship.prototype.steerLeft = function()
{
    this.angleSpeed -= 25;
    if (this.angleSpeed < -250)
    	this.angleSpeed = -250;
}

Ship.prototype.modifyHp = function(hit)
{
  
  this.hitpoints += hit;
  if (this.hitpoints <= 0)
    this.alive = false;
  
}

Ship.prototype.isAlive = function()
{
  return this.alive;
}

Ship.prototype.update = function(dt)
{
  this.angle += this.angleSpeed * dt;
  this.angleSpeed = this.angleSpeed*0.7;
}


Ship.prototype.draw = function()
{
  drawPolarImage(shipImage, 150, this.angle, 1);
}