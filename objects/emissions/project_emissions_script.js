function getInput(x, y) {
  if(inputActive[y] == 0) {
    document.getElementById("text_input_"+x).value = "";
  }
}

var inputActive = [0, 0, 0, 0, 0];
var inputTop = ["15%", "25%", "35%", "45%", "55%"];

function changeInput(x) {
  if(inputActive[x] == 0) {
    inputActive[x] = 1;
    var y = x+1;
    document.getElementById("option_"+x).style.left = "10%";
    document.getElementById("option_"+x).style.top = inputTop[x];
    document.getElementById("option_"+x).style.transform = "translateX(0) scale(1)";
    if(x < 4) {
      document.getElementById("option_"+y).style.transform = "translateX(-50%) scale(1)";
    }
  }
}
