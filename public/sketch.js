let socket;
function setup() {
  createCanvas(600, 480);
  background(51);
  socket = io.connect('http://10.0.0.53:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit('mouse', data);
  noStroke();
  ellipse(mouseX, mouseY, 36, 36);
}