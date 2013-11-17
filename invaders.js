var FPS = 25;
var ctx = null;

window.onload = init;


var globalTime = 0;
var frameTime = 1.0/FPS;

var playerShots = [];
var ship = new Ship();
var globe = new Globe();
var monster = new Monster("redMonster");

function init()
{
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.translate(canvas.width/2, canvas.height/2);
  setInterval(update, 1000 / FPS );
}

function update()
{
  handlePlayerInput();

  globe.update(frameTime);
  monster.update(frameTime);
  ship.update(frameTime);


  for (i=0; i<playerShots.length; i++)
  {
    if ( isCollision(playerShots[i], monster) )
      console.log("PUM!");
  }


  for (i=0; i<playerShots.length; i++)
  {
     playerShots[i].update(frameTime);

     // poistetaan ruudulta poistuneet ammukset arraysta
     if (playerShots[i].isAlive() == false)
     {
       playerShots.splice(i,1);
       i--;
     }
  }

  draw();

  globalTime += frameTime;
}


function handlePlayerInput()
{
  if(input.isDown('d'))
  {
    ship.steerRight();
  }

  if(input.isDown('a'))
  {
    ship.steerLeft();
  }

  if(input.isDown('SPACE'))
  {
    var shot = new Shot(180, ship.angle, 300 );
    playerShots.push(shot);
  }
}

function isCollision(thingA, thingB)
{
  var collElemsA = thingA.getCollisionElements();
  var collElemsB = thingB.getCollisionElements();
  
  for (var a in collElemsA)
  {
     for (var b in collElemsB)
     {
         if (distanceBetween(a.x, a.y, b.x, b.y) < a.radius+b.radius )
          return true;
     }
  }
  return false;
}

function draw()
{
  // tyhjennetään näyttö
  ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);


  globe.draw();
  monster.draw();
  ship.draw();

  for (i=0; i<playerShots.length; i++)
    playerShots[i].draw();

}
