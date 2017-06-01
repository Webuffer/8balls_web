function draw() {
  var canvas1 = document.getElementById('canvas1');
  if (canvas1 == null) {
    document.write('不支持canvas');
    return fasle;
  }
  var context = canvas1.getContext('2d');
  var height = 153 / 281 * (710 - 40);
  var yBag = 40 + height;

  // 6 ball bags
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(40, 40, 20, 0, Math.PI / 2, true);
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
  context.arc(40, yBag, 20, 0, Math.PI * 3 / 2, false);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(375, yBag, 20, 0, Math.PI, false);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(710, yBag, 20, - Math.PI / 2, Math.PI, false);
  context.stroke();

  // 6 borders
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
  context.moveTo(60, yBag);
  context.lineTo(355, yBag);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(395, yBag);
  context.lineTo(690, yBag);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(40, 60);
  context.lineTo(40, yBag - 20);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(710, 60);
  context.lineTo(710, yBag - 20);
  context.stroke();

  // 15 target balls
  var yBall = height / 2 + 40;
  var xDistance = Math.sqrt(30 * 30 - 15 * 15);
  var firstBallLineMargin = (710 - 40) / 8 * 6 + 40;

  // line0
  var xLength0 = firstBallLineMargin + 0 * xDistance;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength0, yBall, 15, 0, 2 * Math.PI);
  context.stroke();

  // line1
  var xLength1 = firstBallLineMargin + 1 * xDistance;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength1, yBall - 15, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength1, yBall + 15, 15, 0, 2 * Math.PI);
  context.stroke();

  // line2
  var xLength2 = firstBallLineMargin + 2 * xDistance;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength2, yBall - 30, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength2, yBall, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength2, yBall + 30, 15, 0, 2 * Math.PI);
  context.stroke();

  // line3
  var xLength3 = firstBallLineMargin + 3 * xDistance;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength3, yBall - 45, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength3, yBall - 15, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength3, yBall + 15, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength3, yBall + 45, 15, 0, 2 * Math.PI);
  context.stroke();

  // line4
  var xLength4 = firstBallLineMargin + 4 * xDistance;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength4, yBall - 60, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength4, yBall - 30, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength4, yBall, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength4, yBall + 30, 15, 0, 2 * Math.PI);
  context.stroke();

  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(xLength4, yBall + 60, 15, 0, 2 * Math.PI);
  context.stroke();

  // 开球线
  var startLineY = (710 - 40) / 8 * 2 + 40;
  context.beginPath();
  context.strokeStyle = 'gray';
  context.moveTo(startLineY, 40);
  context.lineTo(startLineY, yBag);
  context.stroke();

  // 1 parent balls
  context.beginPath();
  context.strokeStyle = 'gray';
  context.arc(startLineY, yBall, 15, 0, 2 * Math.PI);
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