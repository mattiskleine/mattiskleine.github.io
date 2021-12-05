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

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  var sec1 = document.getElementById('section1');
  if(sec1.getBoundingClientRect().top < (window.innerHeight / 100 * 20)) {
    document.getElementById('paper_container').style.transform = "rotate(-10deg) scale(1)";
  }
}
