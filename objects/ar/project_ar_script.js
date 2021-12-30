
function initAR() {
  parent.window.addEventListener('scroll', handleScrollAR);
  var vpChanged = document.getElementsByClassName('vp_changed');
  vpChanged[0].innerHTML = 'Interior parts store with optional parts';
  vpChanged[1].innerHTML = 'The interactive mockup below conveys the general idea. Check it out!';
  vpChanged[2].innerHTML = 'A functional prototype was built to test the AR and electromagnetic mechanism.</br>See the video below!';
}

function handleScrollAR() {
  if (window.getComputedStyle(parent.document.getElementById('project2_content')).getPropertyValue('display') == 'block') {
    var top = document.getElementById('canvas_top_top');
    var sec2 = document.getElementById('section2');
    var topPos = top.offsetTop + sec2.offsetTop - parent.window.scrollY;
    var vw = parent.window.innerWidth / 100 * 5;
    if(parent.window.innerWidth <= 800) {
      vw = 50 + parent.window.innerWidth / 100 * 2;
    }

    if (topPos < (parent.window.innerHeight / 100 * 70) - vw) {
      document.getElementById('canvas_top_bottom').style.transform = 'translate(-50%, 0vw)';
      document.getElementById('canvas_top_middle').style.transform = 'translateX(-50%) scaleY(1)';
      document.getElementById('video_frame').style.transform = 'translateX(-50%) scaleY(1)';
    } else {
      if(parent.window.innerWidth <= 800) {
        document.getElementById('canvas_top_bottom').style.transform = 'translate(-50%, -38vw)';
      } else {
        document.getElementById('canvas_top_bottom').style.transform = 'translate(-50%, -26vw)';
      }
      document.getElementById('canvas_top_middle').style.transform = 'translateX(-50%) scaleY(0.06)';
      document.getElementById('video_frame').style.transform = 'translateX(-50%) scaleY(0)';
      document.getElementById('video_frame').pause();
    }
  }
}

var videoPlayState = 0;
function toggleVideoPlayState() {
  if(videoPlayState == 0) {
    videoPlayState = 1;
    document.getElementById('video_frame').play();
  } else {
    videoPlayState = 0;
    document.getElementById('video_frame').pause();
  }
}
