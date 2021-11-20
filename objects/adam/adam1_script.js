window.onload = function() {
  newHoney();
}

var honeyPotStatus = {yellow: 0, red: 0, blue: 0, green: 0, counter: 0};
var honeyColors = ['yellow', 'red', 'blue', 'green'];
var counterHoneyColors = 0;
var honeyColorActive = [];
var score = 0;

function startHoney(x) {
  var pot = document.getElementById('honey_pot_' + x);
  var drop = document.getElementById('honey_drop_' + x);
  if (honeyPotStatus.counter == 0) {
    honeyPotStatus.counter = 1;
    if (honeyPotStatus[x] == 0) {
      honeyPotStatus[x] = 1;
      pot.style.transform = "rotate(90deg)";
      setTimeout(() => {
        drop.style.transform = "scale(1)";
      }, 200);
    } else {
      honeyPotStatus[x] = 0;
      pot.style.transform = "rotate(0deg)";
      drop.style.transformOrigin = "30% bottom";
      drop.style.transform = "scaleY(0)";
      setTimeout(() => {
        drop.style.transformOrigin = "30% top";
        drop.style.transform = "scale(0)";
      }, 500);
    }
    calculateHoney();
    setTimeout(() => {
      honeyPotStatus.counter = 0;
    }, 500);
  }
}

function calculateHoney() {
  var newColor = 'yellow';
  if (honeyPotStatus.yellow == 0 && honeyPotStatus.red == 0 && honeyPotStatus.blue == 0 && honeyPotStatus.green == 0) {
    setTimeout(() => {
      document.getElementById('honey').style.transformOrigin = '30% bottom';
      document.getElementById('honey').style.transform = 'scale(0)';
      setTimeout(() => {
        document.getElementById('honey').style.transformOrigin = '30% top';
      }, 500);
    }, 1000);
    return;
  } else if (honeyPotStatus.red == 1 && honeyPotStatus.blue == 0 && honeyPotStatus.green == 0) {
    newColor = 'red';
  } else if (honeyPotStatus.red == 0 && honeyPotStatus.blue == 1 && honeyPotStatus.green == 0) {
    newColor = 'blue';
  } else if (honeyPotStatus.red == 0 && honeyPotStatus.blue == 0 && honeyPotStatus.green == 1) {
    newColor = 'green';
  } else if (honeyPotStatus.red == 1 && honeyPotStatus.blue == 1 && honeyPotStatus.green == 0) {
    newColor = 'purple';
  } else if (honeyPotStatus.red == 1 && honeyPotStatus.blue == 0 && honeyPotStatus.green == 1) {
    newColor = 'brown';
  } else if (honeyPotStatus.red == 0 && honeyPotStatus.blue == 1 && honeyPotStatus.green == 1) {
    newColor = 'turkois';
  } else if (honeyPotStatus.red == 1 && honeyPotStatus.blue == 1 && honeyPotStatus.green == 1) {
    newColor = 'brown';
  }
  setTimeout(() => {
    document.getElementById('honey').src = 'honey_drop_' + newColor + '.svg';
    document.getElementById('honey').style.transform = 'scale(1)';
  }, 1000);
  checkHoney();
}

function newHoney() {
  var randomTasks = 0;
  if (counterHoneyColors > 2) {
    randomTasks = Math.floor(Math.random() * 4);
  }
  if (randomTasks == 0) {
    var i = 0;
    while (i == 0) {
      var randomColor = Math.floor(Math.random() * honeyColors.length);
      if (honeyColorActive[0] != honeyColors[randomColor]) {
        document.getElementById('speechbubble').innerHTML = '"I want ' + honeyColors[randomColor] + ' honey, please."';
        honeyColorActive.length = 0;
        honeyColorActive[0] = honeyColors[randomColor];
        i = 1;
      }
    }
  }
  if (randomTasks == 1) {
    var i = 0;
    while (i == 0) {
      var randomColor1 = Math.floor(Math.random() * honeyColors.length);
      var randomColor2 = Math.floor(Math.random() * honeyColors.length);
      if (randomColor1 != randomColor2) {
        document.getElementById('speechbubble').innerHTML = '"I want ' + honeyColors[randomColor1] + ' and ' + honeyColors[randomColor2] + ' honey, please."';
        honeyColorActive.length = 0;
        honeyColorActive[0] = honeyColors[randomColor1];
        honeyColorActive[1] = honeyColors[randomColor2];
        i = 1;
      }
    }
  }
  if (randomTasks == 2) {
    var i = 0;
    while (i == 0) {
      var randomColor1 = Math.floor(Math.random() * honeyColors.length);
      var randomColor2 = Math.floor(Math.random() * honeyColors.length);
      var randomColor3 = Math.floor(Math.random() * honeyColors.length);
      if (randomColor1 != randomColor2 && randomColor1 != randomColor3 && randomColor2 != randomColor3) {
        document.getElementById('speechbubble').innerHTML = '"I want ' + honeyColors[randomColor1] + ', ' + honeyColors[randomColor2] + ' and ' + honeyColors[randomColor3] + ' honey, please."';
        honeyColorActive.length = 0;
        honeyColorActive[0] = honeyColors[randomColor1];
        honeyColorActive[1] = honeyColors[randomColor2];
        honeyColorActive[2] = honeyColors[randomColor3];
        i = 1;
      }
    }
  }
  if (randomTasks == 3) {
    document.getElementById('speechbubble').innerHTML = '"I want honey of all colors, please."';
    honeyColorActive.length = 0;
    honeyColorActive[0] = 'yellow';
    honeyColorActive[1] = 'red';
    honeyColorActive[2] = 'blue';
    honeyColorActive[3] = 'green';
  }
  counterHoneyColors++;
}

function checkHoney() {
  var activePots = [honeyPotStatus.yellow, honeyPotStatus.red, honeyPotStatus.blue, honeyPotStatus.green];
  var activeColors = [0,0,0,0];
  var equal = 1;
  for (var i = 0; i < honeyColorActive.length; i++) {
    if (honeyColorActive[i] == 'yellow') {
      activeColors[0] = 1;
    }
    if (honeyColorActive[i] == 'red') {
      activeColors[1] = 1;
    }
    if (honeyColorActive[i] == 'blue') {
      activeColors[2] = 1;
    }
    if (honeyColorActive[i] == 'green') {
      activeColors[3] = 1;
    }
  }
  for (var j = 0; j < 4; j++) {
    if (activePots[j] != activeColors[j]) {
      equal = 0;
    }
  }
  if (equal == 1) {
    score++;
    document.getElementById('score').innerHTML = 'score: ' + score;
    document.getElementById('score').style.transform = 'scale(1.5)';
    setTimeout(() => {
      document.getElementById('score').style.transition = 'transform 1s';
      document.getElementById('score').style.transform = 'scale(1)';
      setTimeout(() => {
        document.getElementById('score').style.transition = 'transform 0s';
      }, 1000);
    }, 100);
    newHoney();
    checkHoney();
  }
}
