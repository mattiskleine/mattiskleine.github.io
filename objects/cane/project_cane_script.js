var modelViewer;
var fieldOfViewLast;

function initCane() {
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
  button[x].style.transform = "translateX(1vw)";
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
    document.getElementById('cane_animation_force').pause();
    document.getElementById('cane_dynamic').style.animation = 'spring 2s linear infinite paused';
    toggleButtonOff(2);
  } else {
    document.getElementById('cane_animation_force').play();
    document.getElementById('cane_dynamic').style.animation = 'spring 2s linear infinite running';
    toggleButtonOn(2);
  }
}

parent.window.addEventListener('scroll', handleScrollCane);

function handleScrollCane() {
  var base = document.getElementById('canvas_base');
  var sec3 = document.getElementById('section3');
  var basePos = base.offsetTop + sec3.offsetTop - parent.window.scrollY;
  var vw = parent.window.innerWidth / 100 * 5;

  if (basePos < (parent.window.innerHeight / 100 * 80) - vw) {
    document.getElementById('canvas_top').style.transform = 'translateY(-18.3vw)';
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

function stopArrowAni() {
  document.getElementById('scroll_arrow').style.animationPlayState = 'paused';
}

function scrollDownAni() {
  window.scrollTo({
    top: 3000,
    behavior: 'smooth'
  });
}

/*
modelViewer.addEventListener('touchstart', (event) => {
  const {targetTouches, touches} = event;
  startX = targetTouches[0].clientX;
  startY = targetTouches[0].clientY;
  panning = targetTouches.length === 2 && targetTouches.length === touches.length;
  if (!panning)
    return;
  lastX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
  lastY = 0.5 * (targetTouches[0].clientY + targetTouches[1].clientY);
  startPan();
}, true);

modelViewer.addEventListener('touchmove', (event) => {
  if (!panning || event.targetTouches.length !== 2)
    return;
  const {targetTouches} = event;
  const thisX = 0.5 * (targetTouches[0].clientX + targetTouches[1].clientX);
  const thisY = 0.5 * (targetTouches[0].clientY + targetTouches[1].clientY);
  movePan(thisX, thisY);
}, true);

modelViewer.addEventListener('touchend', (event) => {
  if (event.targetTouches.length === 0) {
    recenter(event.changedTouches[0]);
    if (event.cancelable) {
      event.preventDefault();
    }
  }
}, true);
*/
