window.onload = function() {
  openPageProjects();
  showAlert('this site is still under construction...', 3000);
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
  document.getElementById('menu_bar_line').style.left = "calc(48% - 68px)";
  setTimeout(() => {
    document.getElementById('menu_bar_line').style.right = "calc(52% - 5px)";
  }, 200);
  document.getElementById('menu_bar_about').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_projects').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.left = '150%';
  var projects = document.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'block';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.opacity = '1';
    }
    projects[0].style.left = '35vw';
    projects[1].style.left = '65vw';
  }, 20);
  document.getElementById('bottom_space').style.top = '500px';
}

function openPageAbout() {
  hideProject();
  document.getElementById('menu_bar_line').style.right = "calc(48% - 80px)";
  setTimeout(function(){
    document.getElementById('menu_bar_line').style.left = "calc(52% - 5px)";
  }, 200);
  document.getElementById('menu_bar_projects').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_about').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.left = '50%';
  document.getElementById('project1').style.left = '-13vw';
  document.getElementById('project2').style.left = '-13vw';
  document.getElementById('bottom_space').style.top = 'var(--pageHeight)';
}

window.addEventListener('scroll', menuBarPosition);
var menuBarTop = 0;

function menuBarPosition() {
  if (window.scrollY > 20) {
    document.getElementById('menu_bar').style.position = 'fixed';
    document.getElementById('menu_bar').style.top = '0px';
  }
  else {
    document.getElementById('menu_bar').style.position = 'absolute';
    document.getElementById('menu_bar').style.top = '20px';
  }
}

function hoverProject(x) {
  document.getElementById('project' + x + '_hover').style.display = 'block';
}

function unhoverProject(x) {
  document.getElementById('project' + x + '_hover').style.display = 'none';
}

function openProject(x) {
  var projects = document.getElementsByClassName('project');
  var project_content = document.getElementsByClassName('project_content');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.opacity = '0';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
    project_content[x].style.display = 'block';
    setTimeout(() => {
      project_content[x].style.opacity = '1';
    }, 20);
  }, 500);

}

function hideProject() {
  var projects = document.getElementsByClassName('project_content');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.opacity = 0;
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
  }, 500);
}

var adam = 1;
function toggleAdam() {
  if (adam == 1) {
    adam = 2;
    document.getElementById('toggle_container').style.backgroundColor = '#519E83';
    document.getElementById('toggle_button').style.transform = 'translateX(13.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 2';
    document.getElementById('adam1').style.transform = 'translateX(-100%)';
  } else {
    adam = 1;
    document.getElementById('toggle_container').style.backgroundColor = '#5EBD9C';
    document.getElementById('toggle_button').style.transform = 'translateX(0.4vw)';
    document.getElementById('toggle_button').innerHTML = 'stage 1';
    document.getElementById('adam1').style.transform = 'translateX(0)';
  }
}
/*
write property of child
document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative').style.opacity = '0';
read property of child
var creativeActive = window.getComputedStyle(document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative')).getPropertyValue('opacity');
*/
