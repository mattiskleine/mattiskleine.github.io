var tBW = [];

function initDesktop() {
  rearrange();
  document.getElementById('toolbar').addEventListener('mousemove', toolbarMoveEvent);
  document.getElementById('toolbar').addEventListener('mouseleave', toolbarLeaveEvent);
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
  var dist = [];
  var scale = [];
  var tBW = [];
  var bottom = [];
  for(var i = 0; i < tB.length; i++) {
    tBW[i] = tB[i].getBoundingClientRect().width;
    dist[i] = Math.abs((tB[i].getBoundingClientRect().left + tBW[i]/2) - event.clientX);
    scale[i] = map(dist[i], tBW[i] * 3, tBW[i]/8, 1, 1.5);
    bottom[i] = map(dist[i], tBW[i] * 3, tBW[i]/8, 10, 20);
    if (dist[i] < tBW[i]/8) {
      tB[i].style.transform = "translateX(-50%) scale(1.5)";
      tB[i].style.bottom = "20%";
    } else if (dist[i] > tBW[i]*3) {
      tB[i].style.transform = "translateX(-50%) scale(1)";
      tB[i].style.bottom = "10%";
    } else {
      tB[i].style.transform = "translateX(-50%) scale(" + scale[i] + ")";
      tB[i].style.bottom = bottom[i] + "%";
    }
  }
  rearrange();
}

function toolbarLeaveEvent() {
  var tB = document.getElementsByClassName('toolbar_button');
  for(var i = 0; i < tB.length; i++) {
    tB[i].style.transform = "translateX(-50%) scale(1)";
    tB[i].style.bottom = "10%";
  }
  document.getElementById("toolbar_visible").style.width = "40%";
  rearrange();
}

function map(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
