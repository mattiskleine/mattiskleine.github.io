var countriesActive = 0;
function expandCountries() {
  if(countriesActive == 0) {
    countriesActive = 1;
    document.getElementById("input_button_countries").style.width = "100%";
    document.getElementById("input_button_countries").style.height = "760%";
    document.getElementById("countries_placeholder").style.display = "none";
    var item = document.getElementsByClassName("item_countries");
    for(var i = 0; i < item.length; i++) {
      item[i].style.display = "block";
    }
  }
}

function selectCountry(x) {
  document.getElementById("input_button_countries").style.width = "7vw";
  document.getElementById("input_button_countries").style.height = "150%";
  document.getElementById("countries_placeholder").style.display = "block";
  document.getElementById("countries_placeholder").innerHTML = x;
  var item = document.getElementsByClassName("item_countries");
  for(var i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
  setTimeout(() => {
    countriesActive = 0;
  }, 100);
}

var kilometersActive = 0;
function expandKilometers() {
  if(kilometersActive == 0) {
    kilometersActive = 1;
    document.getElementById("input_button_kilometers").style.width = "100%";
    document.getElementById("input_button_kilometers").style.height = "950%";
    document.getElementById("kilometers_placeholder").style.display = "none";
    var item = document.getElementsByClassName("item_kilometers");
    for(var i = 0; i < item.length; i++) {
      item[i].style.display = "block";
    }
  }
}

function selectKilometers(x) {
  document.getElementById("input_button_kilometers").style.width = "8vw";
  document.getElementById("input_button_kilometers").style.height = "150%";
  document.getElementById("kilometers_placeholder").style.display = "block";
  document.getElementById("kilometers_placeholder").innerHTML = x;
  var item = document.getElementsByClassName("item_kilometers");
  for(var i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
  setTimeout(() => {
    kilometersActive = 0;
  }, 100);
}
