const width = 1000;
const height = 300;
const border = 20;
const circleRad = 40;
let color1, color2, color3, color4;

function setup() {
  createCanvas(width+border, 600);

  colorPicker = createColorPicker('orange');
  colorPicker.position(border, height + 5);

  colorPicker2 = createColorPicker('#ed225d');
  colorPicker2.position(border, height + 25);

  colorPicker3 = createColorPicker('#ed225d');
  colorPicker3.position(border, height + 45);

  colorPicker4 = createColorPicker('#ed225d');
  colorPicker4.position(border, height + 65);
}

function draw() {

  color1 = colorPicker.color();
  color2 = colorPicker2.color();
  color3 = colorPicker3.color();
  color4 = colorPicker4.color();

  setGradient(0, 0, width, height, color1, color2);

  strokeWeight(5);

  stroke(0);
  triangle(border+5, border+10, border, border, border, border+10);
  triangle(width-10, height-5, width, height, width-10, height);

  line(border, height, border, border);
  line(border, height, width, height);
  
  strokeWeight(0);
  fill(color1);
  ellipse(width/6, height/2, circleRad, circleRad);
  fill(color2);
  ellipse(2*width/6, height/2, circleRad, circleRad);
  fill(color3);
  ellipse(3*width/6, height/2, circleRad, circleRad);
  fill(color4);
  ellipse(4*width/6, height/2, circleRad, circleRad);
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }