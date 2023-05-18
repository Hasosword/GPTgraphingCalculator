// Function to parse and evaluate mathematical expressions
function evaluateExpression(expression) {
  return Function(`'use strict'; return (${expression});`)();
}

// Function to generate and display the graph
function generateGraph(expression) {
  const graphElement = document.getElementById('graph');
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 300;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let x = 0; x <= canvas.width; x++) {
    const xPos = x - canvas.width / 2;
    const yPos = evaluateExpression(expression.replace(/x/g, xPos));
    ctx.lineTo(x, canvas.height / 2 - yPos);
  }

  ctx.strokeStyle = '#000';
  ctx.stroke();

  graphElement.innerHTML = '';
  graphElement.appendChild(canvas);
}

// Event listener for the Graph button
document.getElementById('graphBtn').addEventListener('click', function() {
  const expression = document.getElementById('expression').value;
  generateGraph(expression);
});
