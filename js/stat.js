'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура! Вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 48);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var columnWidth = 40;
  var columnIndent = 50;
  var initialX = 140;
  var initialY = 100;
  var textIndent = 6;

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(initialX + (columnWidth + columnIndent) * i, initialY + (histogramHeight - times[i] * step), columnWidth, times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], initialX + (columnWidth + columnIndent) * i, initialY + histogramHeight + textIndent);
    ctx.textBaseline = 'bottom';
    ctx.fillText(Math.round(times[i]), initialX + (columnWidth + columnIndent) * i, initialY + (histogramHeight - times[i] * step) - textIndent);
  }
};
