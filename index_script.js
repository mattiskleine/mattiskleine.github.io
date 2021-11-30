window.onload = function() {
  var projects = document.getElementsByClassName('project');
  for(var i = 0; i < projects.length; i++) {
    projects[i].style.transform = 'translateX(-100vw)';
  }
  document.getElementById('cv').style.transform = 'translateX(100%)';
  setTimeout(() => {
    document.getElementById('cv').style.transform = 'translateX(-50%)';
  }, 500);
}

function showAlert(x,t) {
  document.getElementById('alerts').style.display = 'block';
  document.getElementById('alerts').innerHTML = x;
  setTimeout(() => {
    document.getElementById('alerts').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('alerts').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('alerts').style.display = 'none';
      }, 500);
    }, t);
  }, 20);
}

function openPageProjects() {
  hideProject();
  document.getElementById('menu_bar_line').style.left = "4.8vw";
  setTimeout(() => {
    document.getElementById('menu_bar_line').style.right = "90.3vw";
  }, 200);
  document.getElementById('menu_bar_about').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_projects').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.transform = 'translateX(100%)';
  document.getElementById('scroll_header_text_subsub').innerHTML = 'Scroll down to see my work!';
  showProjectPreviews();
}

function openPageAbout() {
  hideProject();
  document.getElementById('menu_bar_line').style.right = "84.4vw";
  setTimeout(function(){
    document.getElementById('menu_bar_line').style.left = "11.8vw";
  }, 200);
  document.getElementById('menu_bar_projects').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_about').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.transform = 'translateX(-50%)';
  document.getElementById('scroll_header_text_subsub').innerHTML = 'Scroll down to see my CV!';
  hideProjectPreviews();
}

window.addEventListener('scroll', menuBarColor);

function menuBarColor() {
  var item = document.getElementsByClassName('menu_bar_item');
  var icon = document.getElementsByClassName('menu_bar_icon');
  if (window.scrollY > 0) {
    document.getElementById('menu_bar').style.boxShadow = '0 .7vw .9vw -1.2vw #666666';
    document.getElementById('menu_bar').style.backgroundColor = '#ffffff';
    document.getElementById('menu_bar_line').style.backgroundColor = '#4480AB';
    document.getElementById('menu_bar_logo').style.filter = 'none';
    for(var i = 0; i < icon.length; i++) {
      icon[i].style.filter = 'none';
    }
    for(var i = 0; i < item.length; i++) {
      item[i].style.color = '#4480AB';
    }
  } else {
    document.getElementById('menu_bar').style.boxShadow = 'none';
    document.getElementById('menu_bar').style.backgroundColor = '#4480AB';
    document.getElementById('menu_bar_line').style.backgroundColor = '#eeeeee';
    document.getElementById('menu_bar_logo').style.filter = 'brightness(100)';
    for(var i = 0; i < icon.length; i++) {
      icon[i].style.filter = 'brightness(100)';
    }
    for(var i = 0; i < item.length; i++) {
      item[i].style.color = '#ffffff';
    }
  }
  var scrollHeightDesired = window.innerWidth / 100 * 20;
  var opacity = 1 - (1 / scrollHeightDesired * window.scrollY);
  var texts = document.getElementsByClassName('scroll_header_text');
  if(window.scrollY <= scrollHeightDesired) {
    for(var i = 0; i < texts.length; i++) {
      texts[i].style.opacity = opacity;
    }
  }
}

function scrollDown() {
  window.scrollTo({
    top: window.innerWidth / 100 * 33,
    behavior: 'smooth'
  });
}

function hoverProject(x) {
  document.getElementById('project' + x + '_hover').style.display = 'block';
  setTimeout(() => {
    document.getElementById('project' + x + '_hover').style.opacity = '.7';
    document.getElementById('project' + x).style.backgroundColor = '#222222';
    document.getElementById('project' + x + '_heading').style.color = '#eeeeee';
  }, 20);
}

function unhoverProject(x) {
  document.getElementById('project' + x + '_hover').style.opacity = '0';
  document.getElementById('project' + x).style.backgroundColor = '#eeeeee';
  document.getElementById('project' + x + '_heading').style.color = '#444444';
  setTimeout(() => {
    document.getElementById('project' + x + '_hover').style.display = 'none';
  }, 300);
}

function openProject(x) {
  hideProjectPreviews();
  var project_content = document.getElementsByClassName('project_content');
  project_content[x].style.display = 'block';
  setTimeout(() => {
    project_content[x].style.opacity = '1';
  }, 500);
}

function hideProject() {
  var projects = document.getElementsByClassName('project_content');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.opacity = '0';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
  }, 500);
}

function hideProjectPreviews() {
  var projects = document.getElementsByClassName('project');
  for(var i = 0; i < projects.length; i++) {
    projects[i].style.transform = 'translateX(-100vw)';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
  }, 500);
}

function showProjectPreviews() {
  var projects = document.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'block';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.opacity = '1';
      projects[i].style.transform = 'translatex(0)';
    }
  }, 20);
}

var adam = 1;
function toggleAdam() {
  if (adam == 1) {
    adam = 2;
    document.getElementById('toggle_container').style.backgroundColor = '#519E83';
    document.getElementById('toggle_button').style.transform = 'translateX(13.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 2';
    document.getElementById('adam1').style.transform = 'translateX(-180%)';
    document.getElementById('adam2').style.transform = 'translateX(-50%)';
  } else {
    adam = 1;
    document.getElementById('toggle_container').style.backgroundColor = '#5EBD9C';
    document.getElementById('toggle_button').style.transform = 'translateX(0.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 1';
    document.getElementById('adam1').style.transform = 'translateX(-50%)';
    document.getElementById('adam2').style.transform = 'translateX(80%)';
  }
}

/*
write property of child
document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative').style.opacity = '0';
read property of child
var creativeActive = window.getComputedStyle(document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative')).getPropertyValue('opacity');
*/
