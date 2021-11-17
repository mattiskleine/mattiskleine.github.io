window.onload = function() {
  openPageProjects();
}

function openPageProjects() {
  document.getElementById('menu_bar_line').style.left = "calc(48% - 68px)";
  setTimeout(function(){
    document.getElementById('menu_bar_line').style.right = "calc(52% - 5px)";
  }, 200);
  document.getElementById('menu_bar_about').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_projects').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.left = '150%';
  document.getElementById('project1').style.left = '35vw';
  document.getElementById('project2').style.left = '65vw';
  document.getElementById('bottom_space').style.top = '500px';
}

function openPageAbout() {
  document.getElementById('menu_bar_line').style.right = "calc(48% - 80px)";
  setTimeout(function(){
    document.getElementById('menu_bar_line').style.left = "calc(52% - 5px)";
  }, 200);
  document.getElementById('menu_bar_projects').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_about').classList.add('menu_bar_item_active');
  document.getElementById('cv').style.left = '50%';
  document.getElementById('project1').style.left = '-12.5vw';
  document.getElementById('project2').style.left = '-12.5vw';
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
/*
write property of child
document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative').style.opacity = '0';
read property of child
var creativeActive = window.getComputedStyle(document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative')).getPropertyValue('opacity');
*/
