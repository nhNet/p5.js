// Nicholas Huaman

var vehicles = [];
var food = [];
var poison = [];

var debug;
var Kill;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight-40);
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    vehicles[i] = new Vehicle(x, y);
  }

  for (var i = 0; i < 40; i++) {
    var x = random(width);
    var y = random(height);
    food.push(createVector(x, y));
  }

  for (var i = 0; i < 20; i++) {
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x, y));
  }

debug = createCheckbox("Compass View");
Kill = createCheckbox("Remove all!");


  

let point = new p5.Vector(300, 200);

let current = new Segment(point, 1, 0);
for (let i = 0; i < 250; i++) {
  let next = new Segment(current, 0.5, i);
  current.child = next;
  current = next;
}
tentacle = current;

}

function mousePressed() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}

function draw() {
  background(51);
  
  if (Kill.checked()) {
    vehicles.splice(i, 100);
  }

    tentacle.follow(mouseX, mouseY);
    tentacle.update();
    tentacle.show();
  
    let next = tentacle.par;
    while (next) {
      next.follow();
      next.update();
      next.show();
      next = next.par;
    }


  if (random(1) < 0.1) {
    var x = random(width);
    var y = random(height);
    food.push(createVector(x, y));
  }

  if (random(1) < 0.01) {
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x, y));
  }


  for (var i = 0; i < food.length; i++) {
    fill(0, 255, 0);
    noStroke();
    ellipse(food[i].x, food[i].y, 4, 4);
  }

  for (var i = 0; i < poison.length; i++) {
    fill(255, 0, 0);
    noStroke();
    ellipse(poison[i].x, poison[i].y, 10, 10);
  }

  for (var i = vehicles.length - 1; i >= 0; i--) {
    vehicles[i].boundaries();
    vehicles[i].behaviors(food, poison);
    vehicles[i].update();
    vehicles[i].display();

    var newVehicle = vehicles[i].clone();
    if (newVehicle != null) {
      vehicles.push(newVehicle);
    }

    if (vehicles[i].dead()) {
      var x = vehicles[i].position.x;
      var y = vehicles[i].position.y;
      food.push(createVector(x, y));
      food.push(createVector(x, y));
      food.push(createVector(x, y));
      food.push(createVector(x, y));
      food.push(createVector(x, y));
      food.push(createVector(x, y));
      vehicles.splice(i, 1);
    }

  }
}
