function generate_calculator() {
  generateCalculator_UI();
}
function generateCalculator_UI() {
  var heading = document.createElement("h1");
  heading.style.textAlign = "center";
  heading.style.marginTop = "100px";
  heading.innerHTML = "JavaScript Calculator";

  document.body.appendChild(heading);
  //   -------------------------------------------------

  var calculator_container = document.createElement("div");
  calculator_container.id = "outer";
  calculator_container.style.display = "flex";
  calculator_container.style.maxWidth = "450px";
  calculator_container.style.height = "400px";
  calculator_container.style.margin = "auto";
  calculator_container.style.marginTop = "150px";
  calculator_container.style.justifyContent = "center";
  calculator_container.style.border = "1px solid black";
  calculator_container.style.backgroundColor = "#f8f8f8";
  calculator_container.style.borderRadius = "3px";

  document.body.appendChild(calculator_container);
  //   -------------------------------------------------

  var inner_container = document.createElement("div");
  inner_container.id = "inner";
  inner_container.style.margin = "20px";
  //   inner_container.style.border = "1px solid black";
  //   inner_container.innerHTML = "hello";

  calculator_container.appendChild(inner_container);
  //   -------------------------------------------------

  var output_row = document.createElement("div");
  output_row.id = "output";
  output_row.style.display = "flex";
  output_row.style.justifyContent = "center";

  inner_container.appendChild(output_row);
  //   -------------------------------------------------

  var input_field = document.createElement("input");
  input_field.id = "display-output";
  input_field.type = "text";
  input_field.style.height = "50px";
  input_field.style.width = "350px";
  input_field.style.borderColor = "black";
  input_field.style.borderRadius = "3px";

  output_row.appendChild(input_field);
  //   -------------------------------------------------

  var button_container = document.createElement("div");
  button_container.id = "buttons";
  button_container.style.textAlign = "center";
  button_container.style.margin = "10px";
  inner_container.appendChild(button_container);

  var buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "AC",
    "0",
    "=",
    "+",
  ];

  for (var i = 0; i < buttons.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = buttons[i];
    btn.style.padding = "20px";
    btn.style.margin = "5px";
    btn.style.width = "75px";
    btn.style.backgroundColor = "white";
    btn.style.border = "1px solid black";
    btn.style.borderRadius = "3px";
    btn.style.cursor = "pointer";

    if (buttons[i] === "=") {
      btn.addEventListener("click", () => {
        input_field.value = calculate(input_field.value);
      });
    } else if (buttons[i] === "AC") {
      btn.addEventListener("click", () => {
        input_field.value = "";
      });
    } else {
      btn.addEventListener("click", (event) => {
        input_field.value += event.target.textContent;
      });
    }

    button_container.appendChild(btn);
  }
}

function calculate(value) {
  const arr = value.split(/([\+\-\*\/])/);
  const len = arr.length - 1;
  let i = 0;
  let ans = 0;
  for (i = 1; i <= len - 1; i++) {
    if (arr[i] == "/") {
      arr[i + 1] = divide(arr[i - 1], arr[i + 1]);
      arr[i] = arr[i + 1];
      arr[i - 1] = arr[i];
      ans = arr[i];
    }
  }
  for (i = 1; i <= len - 1; i++) {
    if (arr[i] == "*") {
      arr[i + 1] = multiply(arr[i - 1], arr[i + 1]);
      arr[i] = arr[i + 1];
      arr[i - 1] = arr[i];
      ans = arr[i];
    }
  }
  for (i = 1; i <= len - 1; i++) {
    if (arr[i] == "+") {
      arr[i + 1] = sum(arr[i - 1], arr[i + 1]);
      arr[i] = arr[i + 1];
      arr[i - 1] = arr[i];
      ans = arr[i];
    }
  }
  for (i = 1; i <= len - 1; i++) {
    if (arr[i] == "-") {
      arr[i + 1] = subtract(arr[i - 1], arr[i + 1]);
      arr[i] = arr[i + 1];
      arr[i - 1] = arr[i];
      ans = arr[i];
    }
  }
  return ans;
}
function sum(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
generate_calculator();
