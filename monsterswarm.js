

var MonsterSwarm = function(monsterType, swarmSize)
{	
	this.monsterType = monsterType;
	this.swarmSize = swarmSize;

	var monsters = [];
	monsterDistance=0;

	for (var i = swarmSize; i>0; i--) 
	{
		var monster = new Monster(monsterType);
		monster.distance =- monsterDistance;

		monsters.push(monster);

		monsterDistance =+ 30;
	}
}

MonsterSwarm.prototype.update = function(dt) {
	for (var i=0, len=monsters.length; i<len; i++)
	{ 
		var monster = monsters[i];
		monster.update();
	}
}


MonsterSwarm.prototype.draw = function() {
	for (var i=0; i<monsters.length; i++)
	{ 
		monsters[i].draw();
	}
}