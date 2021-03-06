/*

var a=[];
var frame;
// All the paths
var paths = [];
// Are we painting?
var painting = false;
// How long until the next circle
var next = 0;
// Where are we now and where were we?
var current;
var previous;


function setup(){

   createCanvas(420,600);
   background(128, 0, 64);
   current = createVector(0,0);
   previous = createVector(0,0);
 
   frame = 0;

  createCanvas(720, 200);
  background(255,0,0);
}



function draw(){

  

   var time = (new Date()%3000)/3000;
   var time2 = (new Date()%3000)/3000;
  
   noStroke();

   fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
     var y;
     y=300;
     
     rect(20,180,1,1);
     rect(120,80,15,15);

}


function draw() {


   background(128, 0, 64);
  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    var force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( var i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}

// A Path is a list of particles
function Path() {
  this.particles = [];
  this.hue = random(100);
}

Path.prototype.add = function(position, force) {
  // Add a new particle with a position, force, and hue
  this.particles.push(new Particle(position, force, this.hue));
}

// Display plath
Path.prototype.update = function() {  
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
  }
}  

// Display plath
Path.prototype.display = function() {
  
  // Loop through backwards
  for (var i = this.particles.length - 1; i >= 0; i--) {
    // If we shold remove it
    if (this.particles[i].lifespan <= 0) {
      this.particles.splice(i, 1);
    // Otherwise, display it
    } else {
      this.particles[i].display(this.particles[i+1]);
    }
  }

}  

// Particles along the path
function Particle(position, force, hue) {
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(force.x, force.y);
  this.drag = 0.95;
  this.lifespan = 255;
}

Particle.prototype.update = function() {
  // Move it
  this.position.add(this.velocity);
  // Slow it down
  this.velocity.mult(this.drag);
  // Fade it out
  this.lifespan--;
}

// Draw particle and connect it with a line
// Draw a line to another
Particle.prototype.display = function(other) {
  stroke(0, this.lifespan);
  fill(0, this.lifespan/2);    
  ellipse(this.position.x,this.position.y, 8, 8);    
  // If we need to draw a line
  if (other) {
    line(this.position.x, this.position.y, other.position.x, other.position.y);
  }
}*/




var grow;
var growCount;

function setup(){

   createCanvas(420,600);
     background(128, 0, 64);
     operCount=0;
     growCount=0;

/*function anime(f){
   if(f<1){
      frame1();
   }else if(f<2){
      frame2();
   }else{

   }
}
*/
function draw(){


  drawPumkin2(255,215,0,grow);
  grow=grow-1;
  if(grow<-10){
    grow=-10;
}
  growCount=growCount+1;
  if(growCount>200){
    grow=0;
    growCount=0;
  }

/*function frame1(){
   fill(0);
   drawPumkin1(60,70,75,85);
}

function frame2(){
   fill(255,125,0);
   drawPumkin2(60,70,10,25);
}

}
*/




fill(0);
stoke(0);

triangle(260,475,275,480,270,480);
triangle(285,475,285,480,280,480);
rect(270,485,15,5);
triangle(300,470,300,475,305,475);
triangle(320,470,320,475,315,475);
rect(300,480,20,5);


}


function drawPumkin2(r,g,b,a){


triangle(260,475,275,480,270,480,r,g,b,a);
triangle(285,475,285,480,280,480,r,g,b,a);
rect(270,485,15,5,r,g,b,a);
triangle(300,470,300,475,305,475,r,g,b,a);
triangle(320,470,320,475,315,475,r,g,b,a);
rect(300,480,20,5,r,g,b,a);

}

