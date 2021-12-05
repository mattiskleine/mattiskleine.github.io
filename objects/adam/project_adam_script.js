window.onload = function() {

}

var adam = 1;
function toggleAdam() {
  if (adam == 1) {
    adam = 2;
    document.getElementById('toggle_container').style.backgroundColor = '#519E83';
    document.getElementById('toggle_button').style.transform = 'translateX(13.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 2';
    document.getElementById('adam2').style.transform = 'translateX(-50%)';
    document.getElementById('adam1').style.transform = 'translateX(-150%)';
  } else {
    adam = 1;
    document.getElementById('toggle_container').style.backgroundColor = '#5EBD9C';
    document.getElementById('toggle_button').style.transform = 'translateX(0.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 1';
    document.getElementById('adam1').style.transform = 'translateX(-50%)';
    document.getElementById('adam2').style.transform = 'translateX(50%)';
  }
}

var newspaperIn = 0;
var feature0 = 0;
var feature1 = 0;
var feature2 = 0;
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  var sec1 = document.getElementById('section1');
  var sec2 = document.getElementById('section2');

  if (sec1.getBoundingClientRect().top <= (window.innerHeight / 100 * 30) && newspaperIn == 0) {
    newspaperIn = 1;
    document.getElementById('paper_container').style.transform = 'rotate(350deg) scale(1)';
  } else if (sec1.getBoundingClientRect().top > (window.innerHeight / 100 * 30) && newspaperIn == 1) {
    newspaperIn = 0;
    document.getElementById('paper_container').style.transform = 'rotate(-10deg) scale(.2)';
  }

  if (sec2.getBoundingClientRect().top < (window.innerHeight / 100 * 60) && feature0 == 0) {
    feature0 = 1;
    document.getElementById('feature0_text').style.transition = 'opacity .5s .5s';
    document.getElementById('feature0_text').style.opacity = '1';
    document.getElementById('feature0').style.width = '26vw';
  } else if (sec2.getBoundingClientRect().top > (window.innerHeight / 100 * 60) && feature0 == 1) {
    feature0 = 0;
    document.getElementById('feature0_text').style.transition = 'opacity .5s 0s';
    document.getElementById('feature0_text').style.opacity = '0';
    document.getElementById('feature0').style.width = '0';
  }

  if (sec2.getBoundingClientRect().top < (window.innerHeight / 100 * 50) && feature1 == 0) {
    feature1 = 1;
    document.getElementById('feature1_text').style.transition = 'opacity .5s .5s';
    document.getElementById('feature1_text').style.opacity = '1';
    document.getElementById('feature1').style.width = '21vw';
  } else if (sec2.getBoundingClientRect().top > (window.innerHeight / 100 * 50) && feature1 == 1) {
    feature1 = 0;
    document.getElementById('feature1_text').style.transition = 'opacity .5s 0s';
    document.getElementById('feature1_text').style.opacity = '0';
    document.getElementById('feature1').style.width = '0';
  }
/*
  if (sec2.getBoundingClientRect().top <= (window.innerHeight / 100 * 30) && feature2 == 0) {
    feature2 = 1;
    document.getElementById('feature2_text').style.transition = 'opacity .5s .5s';
    document.getElementById('feature2_text').style.opacity = '1';
    document.getElementById('feature2').style.width = '27vw';
  } else if (sec2.getBoundingClientRect().top > (window.innerHeight / 100 * 30) && feature2 == 1) {
    feature1 = 0;
    document.getElementById('feature2_text').style.transition = 'opacity .5s 0s';
    document.getElementById('feature2_text').style.opacity = '0';
    document.getElementById('feature2').style.width = '0';
  }
  */
}
