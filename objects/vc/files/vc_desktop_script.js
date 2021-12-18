var tBW = [];
var tBH = [];

function initDesktop() {
  rearrange();
  window.addEventListener('mousemove', toolbarMoveEvent);
}

function rearrange() {
  var tB = document.getElementsByClassName('toolbar_button');
  var tBT = document.getElementsByClassName('toolbar_button_text');
  var toolbar = document.getElementById('toolbar');
  var tW = document.getElementById('toolbar').getBoundingClientRect().width;
  for (var i = 0; i < tB.length; i++) {
    tBW[i] = tB[i].getBoundingClientRect().width;
  }
  tB[0].style.left = tW/2 - tBW[2]/2 - tBW[1] - tBW[0]/2 - tW/30*2 + 'px';
  tB[1].style.left = tW/2 - tBW[2]/2 - tBW[1]/2 - tW/30 + 'px';
  tB[3].style.left = tW/2 + tBW[2]/2 + tBW[3]/2 + tW/30 + 'px';
  tB[4].style.left = tW/2 + tBW[2]/2 + tBW[3] + tBW[4]/2 + tW/30*2 + 'px';

  tBT[0].style.left = tW/2 - tBW[2]/2 - tBW[1] - tBW[0]/2 - tW/30*2 + 'px';
  tBT[1].style.left = tW/2 - tBW[2]/2 - tBW[1]/2 - tW/30 + 'px';
  tBT[3].style.left = tW/2 + tBW[2]/2 + tBW[3]/2 + tW/30 + 'px';
  tBT[4].style.left = tW/2 + tBW[2]/2 + tBW[3] + tBW[4]/2 + tW/30*2 + 'px';

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

function showText(x) {
  var name = document.getElementsByClassName('toolbar_button_text');
  name[x].style.display = 'block';
}

function hideText(x) {
  var name = document.getElementsByClassName('toolbar_button_text');
  name[x].style.display = 'none';
}

function showChatWindow() {
  document.getElementById('chat_window').style.transform = 'translateX(0)';
  document.getElementById('chat_header').style.opacity = '0';
}

function hideChatWindow() {
  if(chatWindowActive == 0) {
    document.getElementById('chat_window').style.transform = 'translateX(90%)';
    document.getElementById('chat_header').style.opacity = '1';
  }
}

var chatWindowActive = 0;
function toggleChatWindow() {
  if(chatWindowActive == 0) {
    chatWindowActive = 1;
    document.getElementById('toggle_chat_button').style.transform = 'translateX(62%)';
    document.getElementById('toggle_chat_con').style.backgroundColor = '#41C38E';
  } else {
    chatWindowActive = 0;
    document.getElementById('toggle_chat_button').style.transform = 'translateX(0)';
    document.getElementById('toggle_chat_con').style.backgroundColor = '#cccccc';
  }
}

function showScreensWindow() {
  document.getElementById('screens_window').style.transform = 'translateX(0)';
  document.getElementById('screens_header').style.opacity = '0';
}

function hideScreensWindow() {
  if(screensWindowActive == 0) {
    document.getElementById('screens_window').style.transform = 'translateX(-90%)';
    document.getElementById('screens_header').style.opacity = '1';
  }
}

var screensWindowActive = 0;
function toggleScreenWindow() {
  if(screensWindowActive == 0) {
    screensWindowActive = 1;
    document.getElementById('toggle_screen_button').style.transform = 'translateX(62%)';
    document.getElementById('toggle_screen_con').style.backgroundColor = '#41C38E';
  } else {
    screensWindowActive = 0;
    document.getElementById('toggle_screen_button').style.transform = 'translateX(0)';
    document.getElementById('toggle_screen_con').style.backgroundColor = '#cccccc';
  }
}

var cam = 1;
function toggleCam() {
  buttons = document.getElementsByClassName("toolbar_button");
  if(cam == 1) {
    cam = 0;
    buttons[0].src = "icon_cameraoff.png";
  } else {
    cam = 1;
    buttons[0].src = "icon_camera.png";
  }
}

var mic = 1;
function toggleMic() {
  buttons = document.getElementsByClassName("toolbar_button");
  if(mic == 1) {
    mic = 0;
    buttons[1].src = "icon_micoff.png";
  } else {
    mic = 1;
    buttons[1].src = "icon_mic.png";
  }
}
