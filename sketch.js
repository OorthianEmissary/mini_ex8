var stars = [];
var button;
var speed;

function setup() {
    
  createCanvas(500, 500);
  for (var i = 0; i < 400; i++) {
    stars[i] = new Star();
  }
button = createButton('New Colors!');
button.position(0, 0);
button.mousePressed(newcolors);
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


function Star() {
    
this.starR = random(255);
this.starG = random(255);
this.starB = random(255);
    
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  } 

  this.show = function() {
    fill(this.starR, this.starG, this.starB);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}

function newcolors() {
    for (var i = 0; i < stars.length; i++) {
        
    stars[i].starR = random(255);
    stars[i].starG = random(255);
    stars[i].starB = random(255);
    }
}