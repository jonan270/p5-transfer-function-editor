const width = 1000;
const height = 300;
const border = 20;
const circleRad = 40;
let color1, color2, color3, color4;

function setup() {
  createCanvas(width + border, 600);

  colorPicker = createColorPicker('red');
  colorPicker.position(border, height + 5);

  colorPicker2 = createColorPicker('red');
  colorPicker2.position(border, height + 25);

  colorPicker3 = createColorPicker('red');
  colorPicker3.position(border, height + 45);

  colorPicker4 = createColorPicker('red');
  colorPicker4.position(border, height + 65);

  tf_button = createButton("Generate");
  tf_button.position(border, height + 100);
}

function draw() {

  color1 = colorPicker.color();
  color2 = colorPicker2.color();
  color3 = colorPicker3.color();
  color4 = colorPicker4.color();

  strokeWeight(1);
  tf_button.mousePressed(function () { setGradient(width/6, height + 5, 3*width/6, 65, color1, color2, color3, color4) });

  //Draw diagram axes
  strokeWeight(5);

  stroke(0); // axes color is black
  triangle(border + 5, border + 10, border, border, border, border + 10);
  triangle(width - 10, height - 5, width, height, width - 10, height);

  line(border, height, border, border);
  line(border, height, width, height);

  strokeWeight(0);
  fill(color1);
  ellipse(width / 6, height / 2, circleRad, circleRad);
  fill(color2);
  ellipse(2 * width / 6, height / 2, circleRad, circleRad);
  fill(color3);
  ellipse(3 * width / 6, height / 2, circleRad, circleRad);
  fill(color4);
  ellipse(4 * width / 6, height / 2, circleRad, circleRad);
}

// This function is a bit dumb as it draws a lot of lines.
// Had trouble finding a better solution for linear interpolation in p5.
function setGradient(x, y, w, h, c1, c2, c3, c4) {
  strokeWeight(1);
  print("Generating gradient..")
  noFill();
  //Left to right gradient from 1st to 2nd color
  for (let i = x; i <= x + w / 3; i++) {
    let inter = map(i, x, x + w/3, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h);
  }

  //Left to right gradient from 2nd to 3rd color
  x += w / 3;
  for (let i = x; i <= x + w / 3; i++) {
    let inter = map(i, x, x + w / 3, 0, 1);
    let c = lerpColor(c2, c3, inter);
    stroke(c);
    line(i, y, i, y + h);
  }

  //Left to right gradient from 3rd to 4th color
  x += w / 3;
  for (let i = x; i <= x + w / 3; i++) {
    let inter = map(i, x, x + w / 3, 0, 1);
    let c = lerpColor(c3, c4, inter);
    stroke(c);
    line(i, y, i, y + h);
  }
}