// Nicholas Huaman
 function setup() {
   var canvas = createCanvas(window.innerWidth, window.innerHeight);
   angleMode(DEGREES);
 }

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var whirl = 0;

 function draw() {
   background(0,10,50);
   translate(window.innerWidth/2, window.innerHeight/2);

    whirl++;

   let hr = hour();
   let mn = minute();
   let sc = second();
   var joinTime= h+" : "+m+" : "+s;

    var ctx = canvas.getContext("2d");
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Hello World", canvas.width/2, 100); 
    rotate(-90);
    fill(50,50,80);
    arc(0, 0, 600, 600, 0, 360);
    strokeWeight(12);
    arc(0, 0, 600, 600, 0, whirl);
    fill(255);
    rotate(90);
    noStroke();
    ctx.font = "50px Skranji";
    text("NH Net Clock", -145,-320);
    text("1", 110,-180);
    text("2", 180,-100);
    text("3", 210,20);
    text("4", 180,130);
    text("5", 110,220);
    text("6", -10,250);
    text("7", -130,220);
    text("8", -210,140);
    text("9", -260,10);
    text("10", -230,-110);
    text("11", -150,-200);
    text("12", -20,-220);
    ctx.font = "20px Comic Sans MS";
    text("_________________________", -150,-320);
    text("Joined at "+joinTime, -100, -100);
    text(hr+" : "+mn+" : "+sc, -50, 150);
    rotate(-90);
    text("Made by Nicholas Huaman", -window.innerHeight/2.05, window.innerWidth/2.05);
   strokeWeight(8);
   stroke(1000, 50, 50);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 580, 580, 0, secondAngle);

   stroke(150, 100, 255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 560, 560, 0, minuteAngle);

   stroke(150, 255, 100);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 540, 540, 0, hourAngle);

    

   push();
   rotate(secondAngle);
   stroke(1000, 50, 50);
   line(0, 0, 230, 0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(150, 100, 255);
   line(0, 0, 220, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 120, 0);
   pop();

   stroke(255);
   point(0, 0);


    


 }
