// Nicholas Huaman
function Blob(r) {
    var x=0;
    var y=0;
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);

  this.update = function() {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.div(10);
    newvel.limit(40);
    this.vel.lerp(newvel, 0.1);
    this.pos.add(this.vel);
  };
  this.speed = function(speed) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(speed);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }
  
  this.constrain = function(){
      blob.pos.x = constrain(blob.pos.x,-width,width*10);
      blob.pos.y = constrain(blob.pos.y,-height,height*10);
  };

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  }

    this.gain = function(){
        var ctx = canvas.getContext("2d");
        ctx.font = blob.r/2+"px Arial";
        ctx.fillText("You gained mass!",blob.pos.x-blob.r-blob.r/2,blob.pos.y-blob.r-blob.r/2);
    };
    this.lose = function(){
        var ctx = canvas.getContext("2d");
        ctx.font = blob.r/2+"px Arial";
        fill(300,0,0)
        ctx.fillText("You lost mass!",blob.pos.x-blob.r-blob.r/2,blob.pos.y-blob.r-blob.r/2);
    };

  this.show = function() {
    fill(0,0,250);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
function blueBlob(x,y,r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);

  this.update = function(addslowly) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(addslowly);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }
  this.speed = function(speed) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(speed);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    fill(0,0,250);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
function redBlob(x,y,r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);

  this.update = function(addslowly) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(addslowly);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }
  this.speed = function(speed) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(speed);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    fill(250,0,0);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
function greenBlob(x,y,r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);

  this.update = function(addslowly) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(addslowly);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }
  this.speed = function(speed) {
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(speed);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.r) {
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    fill(0,250,0);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}