//Nicholas Huaman

var a = 0;

var sponge = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  // An array of Box objects
  // Star with one
  var b = new Box(0, 0, 0, window.innerHeight/2.1);
  sponge.push(b);
}

function mousePressed() {
  // Generate the next set of boxes
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(50,0,100);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  // Show what you've got!
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
  a += 0.01;
}
