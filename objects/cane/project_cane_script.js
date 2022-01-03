var modelViewer;
var fieldOfViewLast;

function initCane() {
  if(parent.window.innerWidth <= 1000) {
    document.getElementById('pan').innerHTML = 'Swipe left/right before up/down. For better interaction, use a mouse!';
    document.getElementById('section1_text').innerHTML = 'The scope of this 1st semster project led me to working closely together with a local Parkinson\'s club in order to address the problematic posture Parkinson\'s patients develop. Turns out their bodies are actually still capable of a good upright posture. It is the feedback about the body\'s current posture that goes missing, which then slowly but surely leads to the typical hunch.</br></br>Collaboration with various physiotherapists helped me to design a cane, which senses a bad posture and gives a gentle reminder to straighten up.';
  }
  toggleAnimationForce();
  modelViewer = document.getElementById('cane_model');
  modelViewer.addEventListener('load', () => {
    document.getElementById('loading_box').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading_box').style.display = 'none';
    }, 1020);
  });

  fieldOfViewLast = modelViewer.getFieldOfView();
  watchForChange();

  modelViewer.addEventListener('mousedown', (event) => {
    if (buttonStage[0] == 1) {
      toggleAutoRotate();
    }
    if (buttonStage[1] == 1) {
      toggleButton(1);
    }
    startX = event.clientX;
    startY = event.clientY;
    panning = event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey;
    if (!panning)
      return;
    lastX = startX;
    lastY = startY;
    startPan();
    event.stopPropagation();
  }, true);

  self.addEventListener('mousemove', (event) => {
    if (!panning)
      return;
    movePan(event.clientX, event.clientY);
    event.stopPropagation();
  }, true);

  self.addEventListener('mouseup', (event) => {
    recenter(event);
  }, true);

}

const tapDistance = 2;
let panning = false;
let panX, panY;
let startX, startY;
let lastX, lastY;
let metersPerPixel;

const startPan = () => {
  const orbit = modelViewer.getCameraOrbit();
  const {theta, phi, radius} = orbit;
  const psi = theta - modelViewer.turntableRotation;
  metersPerPixel = 0.75 * radius / modelViewer.getBoundingClientRect().height;
  panX = [-Math.cos(psi), 0, Math.sin(psi)];
  panY = [
    -Math.cos(phi) * Math.sin(psi),
    Math.sin(phi),
    -Math.cos(phi) * Math.cos(psi)
  ];
  modelViewer.interactionPrompt = 'none';
};

const movePan = (thisX, thisY) => {
  const dx = (thisX - lastX) * metersPerPixel;
  const dy = (thisY - lastY) * metersPerPixel;
  lastX = thisX;
  lastY = thisY;

  const target = modelViewer.getCameraTarget();
  target.x += dx * panX[0] + dy * panY[0];
  target.y += dx * panX[1] + dy * panY[1];
  target.z += dx * panX[2] + dy * panY[2];
  modelViewer.cameraTarget = `${target.x}m ${target.y}m ${target.z}m`;

  modelViewer.dispatchEvent(new CustomEvent('camera-change', {detail: {source: 'user-interaction'}}));
};

const recenter = (pointer) => {
  panning = false;
  if (Math.abs(pointer.clientX - startX) > tapDistance || Math.abs(pointer.clientY - startY) > tapDistance)
      return;
  const hit = modelViewer.positionAndNormalFromPoint(pointer.clientX, pointer.clientY);
  modelViewer.cameraTarget = hit == null ? '0% auto auto' : hit.position.toString();
};

var buttonStage = [1, 1, 1];

function toggleButtonOn(x) {
  var button = document.getElementsByClassName("toggle_button");
  var container = document.getElementsByClassName("toggle_container");
  buttonStage[x] = 1;
  button[x].style.transform = "translateX(0)";
  container[x].style.backgroundColor = "#5EBD9C";
}

function toggleButtonOff(x) {
  var button = document.getElementsByClassName("toggle_button");
  var container = document.getElementsByClassName("toggle_container");
  buttonStage[x] = 0;
  if(parent.window.innerWidth <= 1000) {
    button[x].style.transform = "translateX(4vw)";
  } else {
    button[x].style.transform = "translateX(1vw)";
  }
  container[x].style.backgroundColor = "#aaaaaa";
}

function toggleButton(x) {
  if (buttonStage[x] == 0) {
    toggleButtonOn(x);
  } else {
    toggleButtonOff(x);
  }
}

function toggleAutoRotate() {
  if (buttonStage[0] == 1) {
    modelViewer.autoRotate = false;
    toggleButtonOff(0);
  } else {
    modelViewer.autoRotate = true;
    toggleButtonOn(0);
  }
}

function toggleOriginalPos() {
  if (buttonStage[1] == 0) {
    modelViewer.cameraTarget = '0% auto auto';
    modelViewer.cameraOrbit = '0deg 90deg 100%';
    modelViewer.fieldOfView = 'auto';
    toggleButtonOn(1);
    setTimeout(() => {
      watchForChange();
    }, 1000);
  }
}

function watchForChange() {
  var fieldOfViewCurrent = modelViewer.getFieldOfView();
  if (fieldOfViewCurrent != fieldOfViewLast) {
    if (buttonStage[0] == 1) {
      toggleAutoRotate();
    }
    toggleButtonOff(1);
    return;
  }
  setTimeout(() => {
    watchForChange();
  }, 100);
}

function toggleAnimationForce() {
  if (buttonStage[2] == 1) {
    document.getElementById('cane_animation_force').removeEventListener('ended',videoPlay);
    toggleButtonOff(2);
  } else {
    document.getElementById('cane_animation_force').addEventListener('ended',videoPlay);
    videoPlay();
    toggleButtonOn(2);
  }
}

function videoPlay() {
  document.getElementById('cane_animation_force').play();
  document.getElementById('cane_dynamic').style.transform = 'translateY(0vw)';
  setTimeout(() => {
    document.getElementById('cane_dynamic').style.transform = 'translateY(-1vw)';
  }, 1000);
}

parent.window.addEventListener('scroll', handleScrollCane);

function handleScrollCane() {
  if (window.getComputedStyle(parent.document.getElementById('project1_content')).getPropertyValue('display') == 'block') {
    var base = document.getElementById('canvas_base');
    var sec3 = document.getElementById('section3');
    var basePos = base.offsetTop + sec3.offsetTop - parent.window.scrollY;
    var vw = parent.window.innerWidth / 100 * 5;

    if (basePos < (parent.window.innerHeight / 100 * 85) - vw) {
      if(parent.window.innerWidth <= 1000) {
        document.getElementById('canvas_top').style.transform = 'translateY(-40.3vw)';
      } else {
        document.getElementById('canvas_top').style.transform = 'translateY(-18.2vw)';
      }
      document.getElementById('canvas_screen').style.transform = 'scaleY(1)';
      document.getElementById('cane_animation_foot').style.transform = 'scaleY(1)';
      document.getElementById('scroll_arrow').style.display = 'none';
      setTimeout(() => {
        document.getElementById('cane_animation_foot').play();
      }, 1000);
    } else {
      document.getElementById('canvas_top').style.transform = 'translateY(0)';
      document.getElementById('canvas_screen').style.transform = 'scaleY(0.06)';
      document.getElementById('cane_animation_foot').style.transform = 'scaleY(0)';
      document.getElementById('cane_animation_foot').pause();
    }
  }
}

function stopArrowAni() {
  document.getElementById('scroll_arrow').style.animationPlayState = 'paused';
}

function scrollDownAni() {
  parent.window.scrollTo({
    top: 10000,
    behavior: 'smooth'
  });
}
