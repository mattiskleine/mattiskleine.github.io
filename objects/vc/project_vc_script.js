function scaleInnopad(x,s,z,r) {
  if(parent.window.innerWidth > 800) {
    var el = document.getElementsByClassName('inno_pad');
    el[x].style.zIndex = z;
    el[x].style.transform = 'scale('+s+') rotate('+r+'deg)';
  }
}
