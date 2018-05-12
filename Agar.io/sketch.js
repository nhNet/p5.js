//Nicholas Huaman
var blob;
var blueblobs = [];
var redblobs = [];
var greenblobs = [];
var zoom = 1;
var gainedMass=false;
var lostMass=false;


function setup() {
  var canvas=createCanvas(window.innerWidth, window.innerHeight);
  blob = new Blob(64);
  for (var i = 0; i < 3000; i++) {
    var x = random(-width,width*15);
    var y = random(-height,height*15);
    var x1 = random(-width,width*15);
    var y1 = random(-height,height*15);
    var x2 = random(-width,width*15);
    var y2 = random(-height,height*15);
    blueblobs[i] = new blueBlob(x, y, 16);
    redblobs[i] = new redBlob(x1, y1, 16);
    greenblobs[i] = new greenBlob(x2, y2, 16);
  }
}

function draw() {
  background(0);

  translate(width/2, height/2);
  var newzoom = 70 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  

  for (var i = blueblobs.length-1; i >=0; i--) {
    blueblobs[i].show();
    if (blob.eats(blueblobs[i])) {
      blueblobs.splice(i, 1);
    }
  }
  for (var i = redblobs.length-1; i >=0; i--) {
    redblobs[i].show();
    if (blob.eats(redblobs[i])) {
      redblobs.splice(i, 1);
    }
  }
  for (var i = greenblobs.length-1; i >=0; i--) {
    greenblobs[i].show();
    if (blob.eats(greenblobs[i])) {
      greenblobs.splice(i, 1);
    }
  }

    if (gainedMass===true){
        blob.gain();
    }
    if (lostMass===true){
        blob.lose();
    }

  blob.show();
  blob.constrain();
  blob.update();

}
function keyPressed(){
    if (key = ' '){
        //blob.splitBall();
    }
    if (keyCode === HuamanKey_M){
        gainedMass=true;
        lostMass=false;
        blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;blob.r++;
        setTimeout(function(){gainedMass=false;},1000);
    }
    if (keyCode === HuamanKey_B){
        gainedMass=true;
        lostMass=false;
        blob.r=blob.r+1000;
        setTimeout(function(){gainedMass=false;},1000);
    }
    if (keyCode === HuamanKey_V){
        gainedMass=true;
        lostMass=false;
        blob.r=blob.r-1000;
        setTimeout(function(){gainedMass=false;},1000);
    }
    if (keyCode === HuamanKey_N){
        if(blob.r >+ 64){
            lostMass=true;
            gainedMass=false;
            blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;blob.r--;
            setTimeout(function(){lostMass=false;},1000);
        }
    }
}