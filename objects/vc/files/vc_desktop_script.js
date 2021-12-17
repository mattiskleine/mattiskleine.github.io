var tBW = [];
var tBH = [];

function initDesktop() {
  rearrange();
  window.addEventListener('mousemove', toolbarMoveEvent);
}

function rearrange() {
  var tB = document.getElementsByClassName('toolbar_button');
  var toolbar = document.getElementById('toolbar');
  var tW = document.getElementById('toolbar').getBoundingClientRect().width;
  for (var i = 0; i < tB.length; i++) {
    tBW[i] = tB[i].getBoundingClientRect().width;
  }
  tB[0].style.left = tW/2 - tBW[2]/2 - tBW[1] - tBW[0]/2 - tW/30*2 + 'px';
  tB[1].style.left = tW/2 - tBW[2]/2 - tBW[1]/2 - tW/30 + 'px';
  tB[3].style.left = tW/2 + tBW[2]/2 + tBW[3]/2 + tW/30 + 'px';
  tB[4].style.left = tW/2 + tBW[2]/2 + tBW[3] + tBW[4]/2 + tW/30*2 + 'px';
  var tVis = document.getElementById("toolbar_visible");
  var dW = document.getElementById("desktop").getBoundingClientRect().width;
  tVis.style.width = tBW[0] + tBW[1] + tBW[2] + tBW[3] + tBW[4] + tW/30*6 + 'px';
  tVis.style.left = dW/2 - tBW[2]/2 - tBW[1] - tBW[0] - tW/30*3 + 'px';
}

function toolbarMoveEvent() {
  var tB = document.getElementsByClassName('toolbar_button');
  var distX = [];
  var distY = [];
  var dist = [];
  var scale = [];
  var scaleX = [];
  var bottom = [];
  var bottomX = [];
  for(var i = 0; i < tB.length; i++) {
    tBW[i] = tB[i].getBoundingClientRect().width;
    tBH[i] = tB[i].getBoundingClientRect().height;
    distX[i] = Math.abs((tB[i].getBoundingClientRect().left + tBW[i]/2) - event.clientX);
    distY[i] = Math.abs((tB[i].getBoundingClientRect().top + tBH[i]/2) - event.clientY);
    dist[i] = distX[i] + distY[i];
    scale[i] = map(dist[i], tBW[i] * 2, tBW[i]/8, 1, 1.5);
    bottom[i] = map(dist[i], tBW[i] * 2, tBW[i]/8, 10, 20);
    if (dist[i] > tBW[i]*2) {
      tB[i].style.transform = "translateX(-50%) scale(1)";
      tB[i].style.bottom = "10%";
    } else if (dist[i] < tBW[i]/8) {
      tB[i].style.transform = "translateX(-50%) scale(1.5)";
      tB[i].style.bottom = "20%";
    } else {
      tB[i].style.transform = "translateX(-50%) scale(" + scale[i] + ")";
      tB[i].style.bottom = bottom[i] + "%";
    }
  }
  rearrange();
}

function map(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function showName(x) {
  var name = document.getElementsByClassName('user_name');
  name[x].style.opacity = 1;
}

function hideName(x) {
  var name = document.getElementsByClassName('user_name');
  name[x].style.opacity = 0;
}
