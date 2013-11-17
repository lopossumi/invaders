var monsterImage = new Image();
monsterImage.src = "images/monster.png";



var Monster = function(monsterType)
{
	this.monsterType = monsterType;

	this.angle = 8;
	this.angleSpeed = 10;
	this.descentSpeed = 20;
	this.distance = 450;
	this.timeToTurn = 1.0;
  this.hitpoints= 40;
  this.alive = true;
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

Monster.prototype.getCollisionElements = function()
{
  var x = cos(this.angle)*this.distance; 
  var y = sin(this.angle)*this.distance; 
  
  return [{x:x, y:y, radius:15}];
}

Monster.prototype.modifyHp = function(hit)
{
  
  this.hitpoints =- hit;
  if (this.hitpoints <= 0)
    this.alive = false;
  
}

Monster.prototype.isAlive = function()
{
  return alive;
}

Monster.prototype.draw = function()
{
  
  drawPolarImage(monsterImage, this.distance, this.angle, 1.0);
 
  
}