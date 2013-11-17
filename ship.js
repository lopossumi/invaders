var shipImage = new Image();
shipImage.src = "rocket.png";



var Ship = function()
{
	this.angle = 0;
	this.angleSpeed = 00;
  this.weaponEnergy = 100;
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



Ship.prototype.update = function(dt)
{
  this.angle += this.angleSpeed * dt;
  this.angleSpeed = this.angleSpeed*0.7;
  if(this.weaponEnergy < 100) this.weaponEnergy += 1;
}


Ship.prototype.draw = function()
{
  drawPolarImage(shipImage, 150, this.angle, 1);
}
