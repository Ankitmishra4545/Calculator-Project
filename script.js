// This function will clear the entire display
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function will delete the last entered character
function deleteNumber() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

// This function will append numbers or operators to the display
function append(value) {
  document.getElementById("result").value += value;
}

// This function will evaluate the expression and show the result
function calculate() {
  let expression = document.getElementById("result").value;
  try {
      document.getElementById("result").value = eval(expression);
  } catch (e) {
      document.getElementById("result").value = "Error";
  }
}
