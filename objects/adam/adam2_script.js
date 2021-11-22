window.onload = function() {
  newNumber();
}

var bitValues = [8,4,2,1];
var newNumberBinary = [0,0,0,0];
var newNumberDecimal = 0;
var currentNumberBinary = [0,0,0,0];
var currentNumberDecimal = 0;
var score = 0;
var correct = ['Great!', 'Amazing!', 'Good job!', 'Thanks!', 'Thank you!', 'I really appreciate it!', 'Thank you very much!'];

function newNumber() {
  var rnd = 0, i = 0;
  while(i == 0) {
    rnd = Math.floor(Math.random() * 16);
    if(currentNumberDecimal != rnd && rnd != 0) {
      i = 1;
    }
  }
  newNumberDecimal = rnd;
  if (rnd == 1) {
    document.getElementById('speechbubble').innerHTML = 'I need ' + newNumberDecimal + ' bee!';
  } else {
    document.getElementById('speechbubble').innerHTML = 'I need ' + newNumberDecimal + ' bees!';
  }
  for(var i = 0; i < 4; i++) {
    if(rnd >= bitValues[i]) {
      newNumberBinary[i] = 1;
      rnd -= bitValues[i];
    } else {
      newNumberBinary[i] = 0;
    }
  }
}

function setBit(x) {
  var printedBits = document.getElementsByClassName('bit');
  if(currentNumberBinary[x] == 0) {
    currentNumberBinary[x] = 1;
    currentNumberDecimal += bitValues[x];
    printedBits[x].innerHTML = '1';
  } else {
    currentNumberBinary[x] = 0;
    currentNumberDecimal -= bitValues[x];
    printedBits[x].innerHTML = '0';
  }
  animateBitBees(x);
  document.getElementById('hive_number').innerHTML = currentNumberDecimal;
  checkNumbers();
}

function checkNumbers() {
  if(currentNumberDecimal == newNumberDecimal) {
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
    var rnd = Math.floor(Math.random() * correct.length);
    document.getElementById('speechbubble').innerHTML = correct[rnd];
    setTimeout(() => {
      newNumber();
      resetBits();
    }, 1500);
  }
}

function resetBits() {
  currentNumberBinary = [0,0,0,0];
  currentNumberDecimal = 0;
  document.getElementById('hive_number').innerHTML = currentNumberDecimal;
  var printedBits = document.getElementsByClassName('bit');
  for(var i = 0; i < 4; i++) {
    printedBits[i].innerHTML = '0';
    animateBitBees(i);
  }
}

function animateBitBees(x) {
  var bees = document.getElementsByClassName('bee' + x);
  if(x == 3) {
    if(currentNumberBinary[3] == 1) {
      bees[0].style.transform = 'translate(4vw, 24vw) scale(0)';
    } else {
      bees[0].style.transform = 'translate(0, 0) scale(1)';
    }
  }
  if(x == 2) {
    if(currentNumberBinary[2] == 1) {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(25vw, 24vw) scale(0)';
      }
    } else {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(0, 0) scale(1)';
      }
    }
  }
  if(x == 1) {
    if(currentNumberBinary[1] == 1) {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(52vw, 24vw) scale(0)';
      }
    } else {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(0, 0) scale(1)';
      }
    }
  }
  if(x == 0) {
    if(currentNumberBinary[0] == 1) {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(71vw, 24vw) scale(0)';
      }
    } else {
      for(var i = 0; i < bees.length; i++) {
        bees[i].style.transform = 'translate(0, 0) scale(1)';
      }
    }
  }
}
