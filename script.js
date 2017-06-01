function draw() {
  var canvas1 = document.getElementById('canvas1');
  if (canvas1 == null) {
    document.write('不支持canvas');
    return fasle;
  }
  var context = canvas1.getContext('2d');
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(40, 40, 20, 0, Math.PI / 2, true);
  context.fillStyle = '#3fc00d';
  context.fill();
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(375, 40, 20, 0, - Math.PI, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(710, 40, 20, Math.PI / 2, - Math.PI, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(40, 300, 20, 0, Math.PI * 3 / 2, false);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(375, 300, 20, 0, Math.PI, false);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(710, 300, 20, - Math.PI / 2, Math.PI, false);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(60, 40);
  context.lineTo(355, 40);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(395, 40);
  context.lineTo(690, 40);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(60, 300);
  context.lineTo(355, 300);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(395, 300);
  context.lineTo(690, 300);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(40, 60);
  context.lineTo(40, 280);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(710, 60);
  context.lineTo(710, 280);
  context.stroke();
}

function resizeCanvas() {
  var canvas = $('canvas');
  canvas.attr("width", $(window).get(0).innerWidth);
  canvas.attr("height", $(window).get(0).innerHeight);
};

function init() {
  $(window).resize(resizeCanvas);
  resizeCanvas();

  draw();
}

window.onload = init;