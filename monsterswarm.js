

var MonsterSwarm = function(monsterType, swarmSize)
{	
	this.monsterType = monsterType;
	this.swarmSize = swarmSize;

	this.monsters = [];
	var monsterDist=0;

	for (var i = this.swarmSize; i>=0; i--) 
	{
		var monster = new Monster(monsterType);
		monster.distance =+ monsterDist;

		this.monsters.push(monster);

		monsterDist =+ 30;
	}
}

MonsterSwarm.prototype.update = function(dt) {
	for (var i=0, len=this.monsters.length; i<len; i++)
	{ 
		var monster = this.monsters[i];
		monster.update(dt);
	}
}


MonsterSwarm.prototype.draw = function() {
	for (var i=0, len=this.monsters.length; i<len; i++)
	{ 
		this.monsters[i].draw();
	}
}