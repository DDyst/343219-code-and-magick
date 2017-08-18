'use strict';

var shadow = {
  color: 'rgba(0, 0, 0, 0.7)',
  x: 110,
  y: 20,
  width: 420,
  height: 270
};

var cloud = {
  color: '#ffffff',
  x: 100,
  y: 10,
  width: 420,
  height: 270
};

var text = {
  indent: 6,
  color: '#000000',
  size: 16,
  font: 'PT Mono',
  wordsBaseline: 'hanging',
  numbersBaseline: 'bottom',
  headlineX: 120,
  headline1Y: 30,
  headline2Y: 48,
  headline1: 'Ура! Вы победили!',
  headline2: 'Список результатов:'
};

var histogram = {
  height: 150,
  x: 140,
  y: 100,
  barWidth: 40,
  barIndent: 50,
  yourBarColor: 'rgba(255, 0, 0, 1)',
  othersBarColor: 'rgba(0, 0, 255, ', // если сразу добавить в строку Math.random(), то прозрачность будет одинакова для всех колонок других игроков
  yourBarName: 'Вы'
};

var getMaxTime = function (times) {
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = shadow.color;
  ctx.fillRect(shadow.x, shadow.y, shadow.width, shadow.height);
  ctx.fillStyle = cloud.color;
  ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);

  ctx.font = text.size + ' ' + text.font;
  ctx.textBaseline = text.wordsBaseline;
  ctx.fillStyle = text.color;
  ctx.fillText(text.headline1, text.headlineX, text.headline1Y);
  ctx.fillText(text.headline2, text.headlineX, text.headline2Y);

  var step = histogram.height / getMaxTime(times);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === histogram.yourBarName) ? histogram.yourBarColor : histogram.othersBarColor + Math.random() + ')';
    ctx.fillRect(histogram.x + (histogram.barWidth + histogram.barIndent) * i, histogram.y + (histogram.height - times[i] * step), histogram.barWidth, times[i] * step);
    ctx.fillStyle = text.color;
    ctx.textBaseline = text.wordsBaseline;
    ctx.fillText(names[i], histogram.x + (histogram.barWidth + histogram.barIndent) * i, histogram.y + histogram.height + text.indent);
    ctx.textBaseline = text.numbersBaseline;
    ctx.fillText(Math.round(times[i]), histogram.x + (histogram.barWidth + histogram.barIndent) * i, histogram.y + (histogram.height - times[i] * step) - text.indent);
  }
};
