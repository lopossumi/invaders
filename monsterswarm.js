

var MonsterSwarm = function(monsterType, swarmSize)
{	
	this.monsterType = monsterType;
	this.swarmSize = swarmSize;
	var monsters = [];

	for (var i = swarmSize; i>=0; i--) 
	{
		var monster = new Monster(monsterType);
		monsters.push(monster);
	}
}

MonsterSwarm.prototype.update = function(dt) {
	for (var i=0,len=cars.length; i<len; i++)
{ 
document.write(cars[i] + "<br>");
}
}


MonsterSwarm.prototype.draw = function() {
	monster.draw();
}