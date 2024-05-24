function setup() {
  createCanvas(400, 400);
    background("lightgreen");
}

function draw() {

  fill ("orange");
  stroke("blue");
  if(mouseIsPressed) {
    
    rect(mouseX,mouseY,200,100);//retangulo(pos x, pos y, tam x, tam y)
  }
}
