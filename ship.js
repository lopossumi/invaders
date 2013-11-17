var shipImage = new Image();
shipImage.src = "rocket.png";



var Ship = function()
{
	this.angle = 0;
	this.angleSpeed = 00;
  this.weaponEnergy = 100;
  this.hitpoints= 60;
  this.alive = true;
  this.canFire = true;
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
  if(this.weaponEnergy < 100) this.weaponEnergy += 1;
}


Ship.prototype.draw = function()
{
  drawPolarImage(shipImage, 150, this.angle, 1);
}

Ship.prototype.getCollisionElements = function()
{
  var x = cos(this.angle)*150; 
  var y = sin(this.angle)*150; 
  
  return [{x:x, y:y, radius:15}];
}
