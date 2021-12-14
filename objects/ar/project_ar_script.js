parent.window.addEventListener('scroll', handleScrollAR);

function handleScrollAR() {
  if (window.getComputedStyle(parent.document.getElementById('project2_content')).getPropertyValue('display') == 'block') {
    var top = document.getElementById('canvas_top_top');
    var sec2 = document.getElementById('section2');
    var topPos = top.offsetTop + sec2.offsetTop - parent.window.scrollY;
    var vw = parent.window.innerWidth / 100 * 5;

    if (topPos < (parent.window.innerHeight / 100 * 50) - vw) {
      document.getElementById('canvas_top_bottom').style.transform = 'translate(-50%, 0vw)';
      document.getElementById('canvas_top_middle').style.transform = 'translateX(-50%) scaleY(1)';
      document.getElementById('video_frame').style.transform = 'translateX(-50%) scaleY(1)';
    } else {
      document.getElementById('canvas_top_bottom').style.transform = 'translate(-50%, -26vw)';
      document.getElementById('canvas_top_middle').style.transform = 'translateX(-50%) scaleY(0.06)';
      document.getElementById('video_frame').style.transform = 'translateX(-50%) scaleY(0)';
    }
  }
}
