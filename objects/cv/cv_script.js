function showAlertParent(x,t) {
  parent.document.getElementById('alerts').style.display = 'block';
  parent.document.getElementById('alerts').innerHTML = x;
  setTimeout(() => {
    parent.document.getElementById('alerts').style.opacity = 1;
    setTimeout(() => {
      parent.document.getElementById('alerts').style.opacity = 0;
      setTimeout(() => {
        parent.document.getElementById('alerts').style.display = 'none';
      }, 500);
    }, t);
  }, 20);
}

function copyToClipboard(x) {
  navigator.clipboard.writeText(x);
  showAlertParent('copied to clipboard!', 1500);
}

function showTextBox(x) {
  if(counter == 0) {
    textBoxElement.name = x;
    textBoxElement.top = window.getComputedStyle(document.getElementById('skills_description_'+x)).getPropertyValue('top');
    textBoxElement.left = window.getComputedStyle(document.getElementById('skills_description_'+x)).getPropertyValue('left');
    document.getElementById('skills_description_' + x).style.opacity = "1";
    document.getElementById('skills_description_' + x).style.transform = "translateX(-50%) scale(1)";
    document.getElementById('skills_description_' + x).style.top = "0";
    document.getElementById('skills_description_' + x).style.left = "50%";
    window.addEventListener('click', startCloseListener);
    parent.window.addEventListener('click', startCloseListener);
    window.addEventListener('touchend', startCloseListener);
    parent.window.addEventListener('touchend', startCloseListener);
  }
}

var counter = 0;
var textBoxElement = {name:'name', top:'top', left:'left'};

function startCloseListener(e) {
  if (counter > 0) {
    if (document.getElementById('skills_description_' + textBoxElement.name).contains(e.target)) {
    } else {
      window.removeEventListener('click', startCloseListener);
      parent.window.removeEventListener('click', startCloseListener);
      window.removeEventListener('touchend', startCloseListener);
      parent.window.removeEventListener('touchend', startCloseListener);
      document.getElementById('skills_description_' + textBoxElement.name).style.opacity = "0";
      document.getElementById('skills_description_' + textBoxElement.name).style.transform = "translateX(-50%) scale(0)";
      document.getElementById('skills_description_' + textBoxElement.name).style.top = textBoxElement.top;
      document.getElementById('skills_description_' + textBoxElement.name).style.left = textBoxElement.left;
      counter = 0;
      return;
    }
  }
  counter++;
}
