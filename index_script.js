window.onload = function() {
  var proCon = document.getElementsByClassName('project_content');
  for(var i = 0; i < proCon.length; i++) {
    proCon[i].style.opacity = '0';
    proCon[i].style.display = 'none';
  }
  if(window.innerWidth <= 800) {
    document.getElementById('menu_bar_mobile_header').appendChild(document.getElementById('menu_bar_projects'));
    document.getElementById('menu_bar_mobile_header').appendChild(document.getElementById('menu_bar_about'));
    document.getElementById('menu_bar_mobile_header').appendChild(document.getElementById('menu_bar_line'));
    document.getElementById('menu_bar_projects').style.display = 'block';
    document.getElementById('menu_bar_about').style.display = 'block';
    document.getElementById('menu_bar_line').style.display = 'block';
    var compList = document.getElementsByClassName('competence_li');
    compList[0].innerHTML = 'Innovative view on product and concept design';
    compList[1].innerHTML = 'Analysis of user interaction with concept/product';
    compList[2].innerHTML = 'Focus on user involvment (initial surveys & final tests)';
    compList[3].innerHTML = 'Centered on mechatronical products';
    compList[4].innerHTML = 'Assessment & application of research results';

    compList[5].innerHTML = 'Detailed knowledge of IT-related disciplines';
    compList[6].innerHTML = 'Planning, managing and implementing of projects';
    compList[7].innerHTML = 'Systematical familiarization with new subject areas';
    compList[8].innerHTML = 'Communication of IT concepts to audiences';
    compList[9].innerHTML = 'Link between IT and other subject areas, such as:';
    compList[10].innerHTML = 'Sustainability, healthcare, education, industry, etc.';

    compList[11].innerHTML = 'Frontend: HTML5, CSS, JavaScript + frameworks';
    //compList[12].innerHTML = 'Backend: Node.js, C, C++';
    compList[13].innerHTML = '2D Design: Illustrator, Photoshop, DaVinci Resolve';
    compList[14].innerHTML = '3D Design: Fusion360, Inventor, NX, Blender';
    compList[15].innerHTML = 'Prototyping: hardware workshop and electronics';
  }
}

window.addEventListener('unload', (e) => {
  window.scrollTo(0, 0)
});

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

var mobileMenu = 0;
function toggleMobileMenu() {
  if(mobileMenu == 0) {
    clearTimeout(mobileTimeout);
    openMobileMenu();
  } else if(mobileMenu == 1) {
    closeMobileMenu();
  }
}

function openMobileMenu() {
  mobileMenu = 1;
  document.getElementById('menu_bar_mobile_header').style.transform = 'scaleY(1)';
  document.getElementById('menu_bar_mobile_top').style.transform = 'rotate(35deg)';
  document.getElementById('menu_bar_mobile_top').style.top = 'calc(50% - 1px - 0.25vw)';
  document.getElementById('menu_bar_mobile_bottom').style.transform = 'rotate(-35deg)';
  document.getElementById('menu_bar_mobile_bottom').style.bottom = 'calc(50% - 1px - 0.25vw)';
  document.getElementById('menu_bar_mobile').style.bottom = '50%';
}

function closeMobileMenu() {
  mobileMenu = 0;
  document.getElementById('menu_bar_mobile_header').style.transform = 'scaleY(0)';
  document.getElementById('menu_bar_mobile_top').style.transform = 'rotate(0deg)';
  document.getElementById('menu_bar_mobile_top').style.top = '0';
  document.getElementById('menu_bar_mobile_bottom').style.transform = 'rotate(0deg)';
  document.getElementById('menu_bar_mobile_bottom').style.bottom = '0';
  document.getElementById('menu_bar_mobile').style.bottom = 'calc(50% - 6px)';
}

var projectActive = 0;
var latestScrollPos = 0;
var scrollPosBefore = 0;

function openPageProjects() {
  latestScrollPos = window.scrollY;
  if(projectActive == 1) {
    window.scrollTo(0,scrollPosBefore);
    hideProject();
  } else if (latestScrollPos > window.innerWidth / 100 * 33) {
    scrollDown();
  }

  document.getElementById('menu_bar_line').style.left = "4.8vw";
  setTimeout(() => {
    document.getElementById('menu_bar_line').style.right = "90.3vw";
    showProjectPreviews();
  }, 200);
  if(window.innerWidth <= 800) {
    document.getElementById('content').style.height = "400vw";
    document.getElementById('menu_bar_line').style.left = "20.3vw";
    setTimeout(() => {
      document.getElementById('menu_bar_line').style.right = "67.5vw";
    }, 200);
  }
  if(window.innerWidth <= 500) {
    setTimeout(() => {
      document.getElementById('menu_bar_line').style.right = "59.5vw";
    }, 200);
  }
  document.getElementById('menu_bar_about').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_projects').classList.add('menu_bar_item_active');

  document.getElementById('scroll_header_text_subsub').innerHTML = 'Scroll down to see my projects!';

  document.getElementById('cv').style.opacity = '0';
  document.getElementById('cv_pdf').style.opacity = '0';
  document.getElementById('cv_pdf_img').style.opacity = '0';
  document.getElementById('competence_profile').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('cv').style.display = 'none';
    document.getElementById('cv_pdf').style.display = 'none';
    document.getElementById('cv_pdf_img').style.display = 'none';
    document.getElementById('competence_profile').style.display = 'none';
  }, 320);
}

function openPageAbout() {
  latestScrollPos = window.scrollY;
  if(projectActive == 1) {
    scrollDown();
    hideProject();
  } else if (latestScrollPos > window.innerWidth / 100 * 33){
    scrollDown();
  }

  document.getElementById('menu_bar_line').style.right = "84.4vw";
  if(window.innerWidth <= 800) {
    document.getElementById('content').style.height = "559vw";
    document.getElementById('menu_bar_line').style.right = "41vw";
  }
  if(window.innerWidth <= 500) {
    document.getElementById('menu_bar_line').style.right = "35vw";
  }
  document.getElementById('cv').style.display = 'block';
  document.getElementById('cv_pdf').style.display = 'block';
  document.getElementById('cv_pdf_img').style.display = 'block';
  document.getElementById('competence_profile').style.display = 'block';
  setTimeout(function(){
    document.getElementById('menu_bar_line').style.left = "11.8vw";
    if(window.innerWidth <= 800) {
      document.getElementById('menu_bar_line').style.left = "50vw";
    }
    document.getElementById('cv').style.opacity = '1';
    document.getElementById('cv_pdf').style.opacity = '1';
    document.getElementById('cv_pdf_img').style.opacity = '1';
    document.getElementById('competence_profile').style.opacity = '1';
  }, 200);
  document.getElementById('menu_bar_projects').classList.remove('menu_bar_item_active');
  document.getElementById('menu_bar_about').classList.add('menu_bar_item_active');

  document.getElementById('scroll_header_text_subsub').innerHTML = 'Scroll down to see my CV!';

  hideProjectPreviews();
}

window.addEventListener('scroll', menuBarColor);

var scrollWindowActive = 1;
var scrollLast = 0;
var mobileTimeout;

function menuBarColor() {
  var item = document.getElementsByClassName('menu_bar_item');
  var icon = document.getElementsByClassName('menu_bar_icon');
  var mobileBar = document.getElementsByClassName('menu_bar_mobile_bar');
  if (window.scrollY > 0) {
    document.getElementById('menu_bar').style.boxShadow = '0 5px 10px -8px #666666';
    document.getElementById('menu_bar').style.backgroundColor = '#ffffff';
    document.getElementById('menu_bar_mobile_header').style.backgroundColor = '#eeeeee';
    mobileBar[0].style.backgroundColor = '#666666';
    mobileBar[1].style.backgroundColor = '#666666';
    document.getElementById('menu_bar_line').style.backgroundColor = '#666666';
    document.getElementById('menu_bar_logo').style.filter = 'none';
    for(var i = 0; i < icon.length; i++) {
      icon[i].style.filter = 'none';
    }
    for(var i = 0; i < item.length; i++) {
      item[i].style.color = '#444444';
    }
  } else {
    document.getElementById('menu_bar').style.boxShadow = 'none';
    document.getElementById('menu_bar').style.backgroundColor = '#1C1F22';
    document.getElementById('menu_bar_mobile_header').style.backgroundColor = '#434E59';
    mobileBar[0].style.backgroundColor = '#ffffff';
    mobileBar[1].style.backgroundColor = '#ffffff';
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
      document.getElementById('scroll_header_bg').style.opacity = opacity / 2;
    }
  }
  if(window.scrollY < window.innerWidth / 100 * 43 && scrollWindowActive == 1) {
    document.getElementById('scroll_header').style.display = 'block';
  } else {
    document.getElementById('scroll_header').style.display = 'sc';
  }

  if(window.innerWidth <= 800) {
    scrollHeightDesired = window.innerHeight / 100 * 50;
    opacity = 1 - (1 / scrollHeightDesired * window.scrollY);
    if(window.scrollY <= scrollHeightDesired) {
      for(var i = 0; i < texts.length; i++) {
        texts[i].style.opacity = opacity;
        document.getElementById('scroll_header_bg').style.opacity = opacity / 2;
      }
    }
    if(window.scrollY < window.innerHeight && scrollWindowActive == 1) {
      document.getElementById('scroll_header').style.display = 'block';
    } else {
      document.getElementById('scroll_header').style.display = 'none';
    }

    if(scrollLast > window.scrollY && projectActive == 0) {
      openMobileMenu();
      clearTimeout(mobileTimeout);
      mobileTimeout = setTimeout(closeMobileMenu, 2000);
    } else {
      closeMobileMenu();
    }
    scrollLast = window.scrollY;

  }
}

function scrollDown() {
  if(window.innerWidth <= 800) {
    window.scrollTo({
      top: window.innerHeight - 50 - window.innerWidth/100*2,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: window.innerWidth / 100 * 33,
      behavior: 'smooth'
    });
  }
}

function hoverProject(x) {
  document.getElementById('project' + x + '_hover').style.opacity = '.7';
  document.getElementById('project' + x).style.backgroundColor = '#222222';
  document.getElementById('project' + x + '_heading').style.color = '#eeeeee';
  document.getElementById('project' + x + '_keywords').style.opacity = '1';
  document.getElementById('project' + x + '_keywords').style.color = '#eeeeee';
}

function unhoverProject(x) {
  document.getElementById('project' + x + '_hover').style.opacity = '0';
  document.getElementById('project' + x).style.backgroundColor = '#eeeeee';
  document.getElementById('project' + x + '_heading').style.color = '#444444';
  document.getElementById('project' + x + '_keywords').style.opacity = '0';
  document.getElementById('project' + x + '_keywords').style.color = '#444444';
  if(window.innerWidth <= 800) {
    document.getElementById('project' + x + '_keywords').style.opacity = '1';
  }
}

var projectSource = ['objects/adam/project_adam.html', 'objects/cane/project_cane.html', 'objects/ar/project_ar.html', 'objects/vc/project_vc.html'];
function openProject(x) {
  scrollPosBefore = window.scrollY;
  scrollWindowActive = 0;
  hideProjectPreviews();
  projectActive = 1;
  document.getElementById('scroll_header').style.display = 'none';
  var project_content = document.getElementsByClassName('project_content');
  project_content[x].src = projectSource[x];
  project_content[x].style.display = 'block';
  setTimeout(() => {
    document.getElementById('content').style.display = 'none';
    project_content[x].style.opacity = '1';
    window.scrollTo({
      top: 0
    });
  }, 500);

}

function hideProject() {
  scrollWindowActive = 1;
  document.getElementById('content').style.display = 'block';
  var projects = document.getElementsByClassName('project_content');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.opacity = '0';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
    projectActive = 0;
  }, 500);
}

function hideProjectPreviews() {
  var projects = document.getElementsByClassName('project');
  for(var i = 0; i < projects.length; i++) {
    projects[i].style.opacity = '0';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
  }, 320);
}

function showProjectPreviews() {
  var projects = document.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'block';
  }
  setTimeout(() => {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.opacity = '1';
    }
  }, 20);
}

/*
write property of child
document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative').style.opacity = '0';
read property of child
var creativeActive = window.getComputedStyle(document.getElementById('cv').contentWindow.document.getElementById('skills_description_creative')).getPropertyValue('opacity');
*/
