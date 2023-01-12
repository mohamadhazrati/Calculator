function clearScreen() {
  document.getElementById("showUser").value = "";
  document.getElementById("result").value = "";
}

function clearone() {
  let res = document.getElementById("showUser").value;
  let final = res.split("");
  final.pop();
  final = final.join("");
  document.getElementById("showUser").value = final;
}

function display(value) {
  document.getElementById("showUser").value += value;
}

function calculate() {
  let x = document.getElementById("showUser").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
