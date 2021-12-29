var adam = 1;
function toggleAdam() {
  if (adam == 1) {
    adam = 2;
    document.getElementById('toggle_container').style.backgroundColor = '#519E83';
    document.getElementById('toggle_button').style.transform = 'translateX(13.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 2';
    document.getElementById('adam2').style.transform = 'translateX(-50%)';
    document.getElementById('adam1').style.transform = 'translateX(-150%)';
    if(window.innerWidth <= 800) {
      document.getElementById('toggle_button').style.transform = 'translateX(16.6vw)';
    }
  } else {
    adam = 1;
    document.getElementById('toggle_container').style.backgroundColor = '#5EBD9C';
    document.getElementById('toggle_button').style.transform = 'translateX(0.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 1';
    document.getElementById('adam1').style.transform = 'translateX(-50%)';
    document.getElementById('adam2').style.transform = 'translateX(50%)';
  }
}

var featureLength = ['26vw', '24vw', '27vw'];
parent.window.addEventListener('scroll', handleScroll);

function handleScroll() {
  var sec2 = document.getElementById('section2');
  var sec2feat = document.getElementsByClassName('feature');
  var sec2featText = document.getElementsByClassName('feature_text');
  var paper = document.getElementById('paper_container');
  var paperPos = paper.getBoundingClientRect().top +  paper.getBoundingClientRect().height/2 - parent.window.scrollY;
  var vw = parent.window.innerWidth / 100 * 5;
  if(parent.window.innerWidth <= 800) {
    vw = 50 + parent.window.innerWidth / 100 * 2;
    featureLength = ['18vw', '35vw', '37vw'];
  }

  if (paperPos < (parent.window.innerHeight / 100 * 80) - vw) {
    document.getElementById('paper_container').style.transform = 'rotate(350deg) scale(1)';
  } else {
    document.getElementById('paper_container').style.transform = 'rotate(-10deg) scale(.2)';
  }

  for(var i = 0; i < sec2feat.length; i++) {
    var sec2featPos = sec2feat[i].offsetTop + sec2.offsetTop - parent.window.scrollY;
    if (sec2featPos < (parent.window.innerHeight / 100 * 70) - vw) {
      sec2featText[i].style.transition = 'opacity .5s .5s';
      sec2featText[i].style.opacity = '1';
      sec2feat[i].style.width = featureLength[i];
    } else {
      sec2featText[i].style.transition = 'opacity .5s 0s';
      sec2featText[i].style.opacity = '0';
      sec2feat[i].style.width = '0';
    }
  }
}

function initVP() {
  var resLi = document.getElementsByClassName('results_li');
  if(parent.window.innerWidth <= 800) {
    resLi[0].innerHTML = '4-bit binary to decimal number conversion success rate: 100%';
    resLi[1].innerHTML = '6-bit binary to decimal number conversion success rate: 92%';
    resLi[2].innerHTML = 'higher retention using paw joystick compared to regular mouse';
  }
}
