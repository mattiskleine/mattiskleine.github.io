if(window.innerWidth <= 500) {
  document.getElementById('imac').src = 'files/iphone.svg';
}

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
  recalculate();
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
var kilometersNumber = [10000, 20000, 30000, 40000, 50000];
var currentKilometers = 0;
function selectKilometers(x) {
  currentKilometers = x;
  document.getElementById("option_button_kilometers").innerHTML = kilometers[x];
  document.getElementById("option_kilometers").style.display = "none";
  recalculate();
}

function editConsumption(x) {
  const input = document.getElementById("option_input_consumption_"+x);
  input.select();
}

function editEmissions(x) {
  const input = document.getElementById("option_input_emissions_"+x);
  input.select();
}

const backgroundColors = ['#64AFE7', '#E9516F', '#FFD473', '#7ECAA7', '#FFA774'];
var carBox = [true, true, true, true, true];
function setActive(x) {
  const item = document.getElementsByClassName("car_box");
  if(carBox[x] === true) {
    item[x].style.backgroundColor = '#ffffff';
    carBox[x] = false;
    data.datasets[x].hidden = true;
    chart.update();
  } else {
    item[x].style.backgroundColor = backgroundColors[x];
    carBox[x] = true;
    data.datasets[x].hidden = false;
    chart.update();
  }
}

function hoverCarBox(x) {
  const item = document.getElementsByClassName('car_box');
  item[x].style.backgroundColor = '#eeeeee';
}

const carBoxColors = ['#64AFE7', '#E9516F', '#FFD473', '#7ECAA7', '#FFA774']
function unhoverCarBox(x) {
  const item = document.getElementsByClassName('car_box');
  item[x].style.backgroundColor = carBoxColors[x];
}

const cicDenmark = 177;
const cicPoland = 817;
const cicNorway = 29;
const cicGermany = 454;

const wttDiesel = 640;
const wttGasoline = 720;
const wttLPG = 612;

const bevLife = 8887;
const icevLife = 4878;

var emissions = [0, 0, 0, 0, 0];
var electricYears = [0, 0, 0, 0, 0, 0];
var dieselYears = [0, 0, 0, 0, 0, 0];
var gasolineYears = [0, 0, 0, 0, 0, 0];
var lpgYears = [0, 0, 0, 0, 0, 0];
var hybridYears = [0, 0, 0, 0, 0, 0];

const labels = ['0', '1', '2', '3', '4', '5'];

var data = {
  labels: labels,
  datasets: [
    {
      label: 'Electric',
      backgroundColor: '#64AFE7',
      borderColor: '#64AFE7',
      borderWidth: '5',
      data: electricYears,
    },
    {
      label: 'Diesel',
      backgroundColor: '#E9516F',
      borderColor: '#E9516F',
      borderWidth: '5',
      data: dieselYears,
    },
    {
      label: 'Gasoline',
      backgroundColor: '#FFD473',
      borderColor: '#FFD473',
      borderWidth: '5',
      data: gasolineYears,
    },
    {
      label: 'LPG',
      backgroundColor: '#7ECAA7',
      borderColor: '#7ECAA7',
      borderWidth: '5',
      data: lpgYears,
    },
    {
      label: 'Hybrid',
      backgroundColor: '#FFA774',
      borderColor: '#FFA774',
      borderWidth: '5',
      data: hybridYears,
    }
  ]
};

var fontSize = window.innerWidth / 100 * 1.5;
var padding = window.innerWidth / 100 * 4.1;
const config = {
  type: 'line',
  data: data,
  options: {
    elements: {
      point:{
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'right',
        labels: {
          padding: padding,
          font: {
            family: 'Nunito',
            size: fontSize,
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          count: 5,
          font: {
            family: 'Nunito',
            size: fontSize,
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: fontSize,
          }
        }
      }
    }
  }
};

const chart = new Chart(document.getElementById('chart'), config);

function recalculate() {
  var cic = 0;
  if(countries[0] == 'Denmark') {
    cic = cicDenmark;
  } else if(countries[0] == 'Poland') {
    cic = cicPoland;
  } else if(countries[0] == 'Norway') {
    cic = cicNorway;
  } else if(countries[0] == 'Germany') {
    cic = cicGermany;
  }
  emissions[0] = cic * document.getElementById("option_input_consumption_electric").value / 100;
  emissions[1] = parseFloat(document.getElementById("option_input_emissions_diesel").value, 10) + wttDiesel * parseFloat(document.getElementById("option_input_consumption_diesel").value, 10) / 100;
  emissions[2] = parseFloat(document.getElementById("option_input_emissions_gasoline").value, 10) + wttGasoline * parseFloat(document.getElementById("option_input_consumption_gasoline").value, 10) / 100;
  emissions[3] = parseFloat(document.getElementById("option_input_emissions_lpg").value, 10) + wttLPG * parseFloat(document.getElementById("option_input_consumption_lpg").value, 10) / 100;
  emissions[4] = parseFloat(document.getElementById("option_input_emissions_hybrid_0").value, 10) + wttGasoline * parseFloat(document.getElementById("option_input_consumption_hybrid_0").value, 10) / 100 + cic * parseFloat(document.getElementById("option_input_consumption_hybrid_1").value, 10) / 100;
  for(var i = 0; i < electricYears.length; i++) {
    electricYears[i] = Math.round(bevLife + i * emissions[0] * kilometersNumber[currentKilometers] / 1000);
  }
  for(var i = 0; i < dieselYears.length; i++) {
    dieselYears[i] = Math.round(icevLife + i * emissions[1] * kilometersNumber[currentKilometers] / 1000);
  }
  for(var i = 0; i < gasolineYears.length; i++) {
    gasolineYears[i] = Math.round(icevLife + i * emissions[2] * kilometersNumber[currentKilometers] / 1000);
  }
  for(var i = 0; i < lpgYears.length; i++) {
    lpgYears[i] = Math.round(icevLife + i * emissions[3] * kilometersNumber[currentKilometers] / 1000);
  }
  for(var i = 0; i < hybridYears.length; i++) {
    hybridYears[i] = Math.round((bevLife + icevLife)/2 + i * emissions[4] * kilometersNumber[currentKilometers] / 1000);
  }
  chart.update();
}
