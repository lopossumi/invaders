var StatusBar = function(obj)
{
  this.obj = obj;
}

StatusBar.prototype.draw = function()
{
  var color;
  if(this.obj.weaponEnergy > 50) color = "#55FF55";
  else if(this.obj.weaponEnergy > 25) color = "#44CC44";
  else color = "AAAA22";
  drawFilledRectangle(-450,-350,200,15,"gray");
  drawFilledRectangle(-450, -350, this.obj.weaponEnergy*2, 15, color);
}
