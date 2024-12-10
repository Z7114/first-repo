function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX, 50, mouseY);

  let c1 = fill(mouseY, 50, mouseX);
  noStroke();
  if (keyIsPressed == true) {
    ellipse(200, 200, random(10, 400));
  }

  let c2 = fill(0);
  textSize(20);
  textFont('Courier New');
  text("This Is A Circle", 100, 50);

}