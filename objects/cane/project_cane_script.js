var modelViewer;

function initCane() {
  modelViewer = document.getElementById('cane_model');
  modelViewer.addEventListener('load', panning);
}

function panning() {
  document.getElementById('loading_box').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('loading_box').style.display = 'none';
  }, 1020);
}
