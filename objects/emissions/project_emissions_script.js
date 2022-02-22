function openCountries() {
  document.getElementById("option_kilometers").style.display = "none";
  document.getElementById("option_countries").style.display = "block";
  window.addEventListener('click', closeCountries);
}

var counterCountries = 0;
function closeCountries(e) {
  if (counterCountries > 0) {
    if (document.getElementById("option_countries").contains(e.target)) {
      window.removeEventListener('click', closeCountries);
      counterCountries = 0;
      return;
    } else {
      window.removeEventListener('click', closeCountries);
      selectCountry(0);
      counterCountries = 0;
      return;
    }
  }
  counterCountries++;
}

var countries = ['Denmark', 'Poland', 'Norway', 'Germany'];
function selectCountry(x) {
  var volatileCountry = countries[0];
  countries[0] = countries[x];
  countries[x] = volatileCountry;
  document.getElementById("option_button_countries").innerHTML = countries[0];
  document.getElementById("option_countries").style.display = "none";
  var country = document.getElementsByClassName("countries");
  for(var i = 0; i < country.length; i++) {
    country[i].innerHTML = countries[i];
  }
}

function openKilometers() {
  document.getElementById("option_countries").style.display = "none";
  document.getElementById("option_kilometers").style.display = "block";
  window.addEventListener('click', closeKilometers);
}

var counterKilometers = 0;
function closeKilometers(e) {
  if (counterKilometers > 0) {
    if (document.getElementById("option_countries").contains(e.target)) {
      window.removeEventListener('click', closeKilometers);
      counterKilometers = 0;
      return;
    } else {
      window.removeEventListener('click', closeKilometers);
      selectKilometers(currentKilometers);
      counterKilometers = 0;
      return;
    }
  }
  counterKilometers++;
}

var kilometers = ['10.000 km', '20.000 km', '30.000 km', '40.000 km', '50.000 km'];
var currentKilometers = 0;
function selectKilometers(x) {
  currentKilometers = x;
  document.getElementById("option_button_kilometers").innerHTML = kilometers[x];
  document.getElementById("option_kilometers").style.display = "none";
}

function editConsumption(x) {
  const input = document.getElementById("option_input_consumption_"+x);
  input.select();
}

function editEmissions(x) {
  const input = document.getElementById("option_input_emissions_"+x);
  input.select();
}


function setActive(x) {
  const item = document.getElementsByClassName("car_box");
  if(item[x].classList.contains("car_box_active") === true) {
    item[x].classList.remove("car_box_active");
  } else {
    item[x].classList.add("car_box_active");
  }
}

const cicDenmark = 164;
const cicPoland = 577;
const cicNorway = 29;
const cicGermany = 254;

const wttDiesel = 640;
const wttGasoline = 720;
const wttLPG = 612;

const bevLife = 8887;
const icevLife = 4878;
