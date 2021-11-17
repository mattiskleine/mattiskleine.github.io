function showAlert(x) {
  parent.document.getElementById('alerts').innerHTML = x;
  parent.document.getElementById('alerts').style.opacity = 1;
  setTimeout(function(){
    parent.document.getElementById('alerts').style.opacity = 0;
  }, 1500);
}

function copyToClipboard(x) {
  navigator.clipboard.writeText(x);
  showAlert('copied to clipboard!');
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
