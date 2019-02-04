function setup() {
createCanvas(720, 400);    // Set line drawing color to white
  frameRate(60);
  makeBall();
}
var balls = [];
var bgcR = 1;
var bgcG = 1;
var bgcB = 1;

function draw() {
background(bgcR,bgcG,bgcB);

for(var i = 0; i < balls.length -1; i++){
  balls[i].move();
  balls[i].changeColor();
 balls[i].dirChange();
 balls[i].display();

}


}
function Circle (x,y,diameter,r,g,b,speedX,speedY) {
 this.x = x;
 this.y = y;
 this.diameter = diameter;
 this.r = r;
 this.g = g;
 this.b = b;
 this.speedX = speedX;
 this.speedY = speedY;
 this.display = function() {
   ellipse(this.x,this.y,this.diameter).fill(this.r,this.g,this.b).noStroke();
 };
  this.move = function() {
      this.x += this.speedX;
      this.y += this.speedY;
 };
 this.dirChange = function() {
    var rev = -1;
    if(this.x >= width){
    this.speedX *= rev;
    }else if(this.x <= 0){
     this.speedX *= rev; 
    }

  if(this.y >= 400 ){
   this.speedY *= rev;
  }else if(this.y <= 0){
   this.speedY *= rev;
  }
 };
 this.changeColor = function() {
      if(this.x >= width){
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255); 
  }else if(this.y > 400 ){
   bgcR = random(0,255);
   bgcG = random(0,255);
   bgcB = random(0,255);
  };
 }
}



function makeBall(){
  for(var i = 0; i< 3; i ++){
     balls[balls.length] = new Circle(random(0,width),random(0,height),random(10,100),random(0,255),random(0,255),random(0,255),random(1,10),random(1,10)); 
     console.log(balls[i]);
  }
}

function mouseClicked(){
  balls[balls.length] = new Circle(random(0,width),random(0,height),random(10,100),random(0,255),random(0,255),random(0,255),random(1,10),random(1,10)); 
  console.log(balls[balls.length]);
}




