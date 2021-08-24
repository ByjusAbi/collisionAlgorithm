var rectmover;
var rectfijo;

function setup(){
  rectmover = createSprite(100,50,20,50);
  rectmover.shapeColor = "purple";
  rectmover.debug =true;
  rectfijo = createSprite(500,300,20,50);
  rectfijo.shapeColor = "red";
  rectfijo.debug =true;
}

function draw (){
createCanvas(1000,600);
background(0,0,0);

//rectmover.x-rectfijo.x === rectmover.width/2 + rectfijo.width/2;
if(rectmover.x-rectfijo.x < rectmover.width/2 + rectfijo.width/2
  && rectfijo.x-rectmover.x < rectfijo.width/2 + rectmover.width/2 ){
  rectmover.shapeColor = "green";
  rectfijo.shapeColor = "green";
} else {
  rectmover.shapeColor = "purple";
  rectfijo.shapeColor = "red";
}
rectmover.x=World.mouseX;
rectmover.y=World.mouseY;
drawSprites();
}
