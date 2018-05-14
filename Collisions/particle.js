// Nicholas Huaman
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.highlight = false;
    this.wasHighlighted=false;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    this.x = this.x +0.1;
    this.y = this.y +0.1;
    return (d < this.r + other.r);
  }

  setHighlight(value) {
    this.highlight = value;
    this.wasHighlighted=true;
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  render() {
    noStroke();
    if (this.highlight) {
      fill(255,0,0);
    } else {
      fill(100,255,0);
    }
    ellipse(this.x, this.y, this.r * 3.5);
  }

}