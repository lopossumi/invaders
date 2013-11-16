var monsterImage = new Image();
monsterImage.src = "images/monster.png";



var Monster = function(monsterType)
{
	this.monsterType = monsterType;

	this.angle = 0;
	this.angleSpeed = 20;
	this.descentSpeed = 30;
	this.distance = 450;
	this.timeToTurn = 2.0;
}

Monster.prototype.update = function(dt)
{
  this.timeToTurn -= dt;

  if (this.timeToTurn <= 0)
  {
  	this.angleSpeed = -this.angleSpeed;
  	this.timeToTurn = 2.0;
  }	

  this.angle += this.angleSpeed * dt;
  this.distance -= this.descentSpeed * dt;


}



Monster.prototype.draw = function()
{
  drawPolarImage(monsterImage, this.distance, this.angle, 1.0);
}