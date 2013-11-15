var TO_RADIANS = Math.PI/180; 
var TO_DEGREES = 180/Math.PI;

function drawRotatedImage(image, x, y, angle) 
{ 
	ctx.save(); 
	ctx.translate(x, y);
	ctx.rotate(angle * TO_RADIANS);
	ctx.drawImage(image, -(image.width/2), -(image.height/2));
	ctx.restore(); 
}

function drawCircle(x,y,r,color)
{
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.stroke();
}


function drawArc(x,y,r,direction,angle,color)
{
	direction = direction*TO_RADIANS-Math.PI/2;
    ctx.strokeStyle = color;
  
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.arc(x, y, r, direction+angle*TO_RADIANS/2, direction-angle*TO_RADIANS/2, true); 
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.stroke();
}


function drawFilledCircle(x,y,r,color)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

function drawLine(x1, y1, x2, y2, color)
{
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.strokeStyle = color;
	ctx.stroke();
}

function drawRectangle(x1, y1, width, height, color)
{
	ctx.beginPath();
	ctx.rect(x1, y1, width, height );
	ctx.strokeStyle = color;
	ctx.stroke();
}

function drawFilledRectangle(x1, y1, width, height, color)
{
	ctx.beginPath();
	ctx.rect(x1, y1, width, height );
	ctx.fillStyle = color;
	ctx.fill();
}

function drawTriangle(x,y,length,color)
{
	ctx.moveTo(x, y);
	ctx.lineTo(x+20, y);
	ctx.lineTo(x, y+20);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawArrow(x,y,r,angle,color)
{
    drawLine(x,y, x+sin(angle)*r, y-cos(angle)*r, color );
}



function sin(angleInDeg)
{
   return Math.sin( angleInDeg * TO_RADIANS );
}

function cos(angleInDeg)
{
   return Math.cos( angleInDeg * TO_RADIANS );
}

function tan(angleInDeg)
{
   return Math.tan( angleInDeg * TO_RADIANS );
}


