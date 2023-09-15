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
  //   button_container.style.border = "1px solid black";

  inner_container.appendChild(button_container);
  //   -------------------------------------------------

  var buttons_1 = document.createElement("div");

  button_container.appendChild(buttons_1);
  //   -------------------------------------------------

  var btn7 = document.createElement("button");
  btn7.id = "btn7";
  btn7.textContent = "7";
  btn7.style.padding = "20px";
  btn7.style.margin = "5px";
  btn7.style.width = "75px";
  btn7.style.backgroundColor = "white";
  btn7.style.border = "1px solid black";
  btn7.style.borderRadius = "3px";
  btn7.style.cursor = "pointer";
  btn7.addEventListener("click", () => {
    input_field.value += 7;
  });

  var btn8 = document.createElement("button");
  btn8.textContent = "8";
  btn8.style.padding = "20px";
  btn8.style.margin = "5px";
  btn8.style.width = "75px";
  btn8.style.backgroundColor = "white";
  btn8.style.border = "1px solid black";
  btn8.style.borderRadius = "3px";
  btn8.style.cursor = "pointer";
  btn8.addEventListener("click", () => {
    input_field.value += 8;
  });

  var btn9 = document.createElement("button");
  btn9.textContent = "9";
  btn9.style.padding = "20px";
  btn9.style.margin = "5px";
  btn9.style.width = "75px";
  btn9.style.backgroundColor = "white";
  btn9.style.border = "1px solid black";
  btn9.style.borderRadius = "3px";
  btn9.style.cursor = "pointer";
  btn9.addEventListener("click", () => {
    input_field.value += 9;
  });

  var btn_d = document.createElement("button");
  btn_d.textContent = "/";
  btn_d.style.padding = "20px";
  btn_d.style.margin = "5px";
  btn_d.style.width = "75px";
  btn_d.style.backgroundColor = "white";
  btn_d.style.border = "1px solid black";
  btn_d.style.borderRadius = "3px";
  btn_d.style.cursor = "pointer";
  btn_d.addEventListener("click", () => {
    input_field.value += "/";
  });

  buttons_1.appendChild(btn7);
  buttons_1.appendChild(btn8);
  buttons_1.appendChild(btn9);
  buttons_1.appendChild(btn_d);

  //   -------------------------------------------------

  var buttons_2 = document.createElement("div");

  button_container.appendChild(buttons_2);
  //   -------------------------------------------------

  var btn4 = document.createElement("button");
  btn4.textContent = "4";
  btn4.style.padding = "20px";
  btn4.style.margin = "5px";
  btn4.style.width = "75px";
  btn4.style.backgroundColor = "white";
  btn4.style.border = "1px solid black";
  btn4.style.borderRadius = "3px";
  btn4.style.cursor = "pointer";
  btn4.addEventListener("click", () => {
    input_field.value += 4;
  });

  var btn5 = document.createElement("button");
  btn5.textContent = "5";
  btn5.style.padding = "20px";
  btn5.style.margin = "5px";
  btn5.style.width = "75px";
  btn5.style.backgroundColor = "white";
  btn5.style.border = "1px solid black";
  btn5.style.borderRadius = "3px";
  btn5.style.cursor = "pointer";
  btn5.addEventListener("click", () => {
    input_field.value += 5;
  });

  var btn6 = document.createElement("button");
  btn6.textContent = "6";
  btn6.style.padding = "20px";
  btn6.style.margin = "5px";
  btn6.style.width = "75px";
  btn6.style.backgroundColor = "white";
  btn6.style.border = "1px solid black";
  btn6.style.borderRadius = "3px";
  btn6.style.cursor = "pointer";
  btn6.addEventListener("click", () => {
    input_field.value += 6;
  });

  var btn_m = document.createElement("button");
  btn_m.textContent = "*";
  btn_m.style.padding = "20px";
  btn_m.style.margin = "5px";
  btn_m.style.width = "75px";
  btn_m.style.backgroundColor = "white";
  btn_m.style.border = "1px solid black";
  btn_m.style.borderRadius = "3px";
  btn_m.style.cursor = "pointer";
  btn_m.addEventListener("click", () => {
    input_field.value += "*";
  });

  buttons_2.appendChild(btn4);
  buttons_2.appendChild(btn5);
  buttons_2.appendChild(btn6);
  buttons_2.appendChild(btn_m);

  //   -------------------------------------------------

  var buttons_3 = document.createElement("div");

  button_container.appendChild(buttons_3);
  //   -------------------------------------------------

  var btn1 = document.createElement("button");
  btn1.textContent = "1";
  btn1.style.padding = "20px";
  btn1.style.margin = "5px";
  btn1.style.width = "75px";
  btn1.style.backgroundColor = "white";
  btn1.style.border = "1px solid black";
  btn1.style.borderRadius = "3px";
  btn1.style.cursor = "pointer";
  btn1.addEventListener("click", () => {
    input_field.value += 1;
  });

  var btn2 = document.createElement("button");
  btn2.textContent = "2";
  btn2.style.padding = "20px";
  btn2.style.margin = "5px";
  btn2.style.width = "75px";
  btn2.style.backgroundColor = "white";
  btn2.style.border = "1px solid black";
  btn2.style.borderRadius = "3px";
  btn2.style.cursor = "pointer";
  btn2.addEventListener("click", () => {
    input_field.value += 2;
  });

  var btn3 = document.createElement("button");
  btn3.textContent = "3";
  btn3.style.padding = "20px";
  btn3.style.margin = "5px";
  btn3.style.width = "75px";
  btn3.style.backgroundColor = "white";
  btn3.style.border = "1px solid black";
  btn3.style.borderRadius = "3px";
  btn3.style.cursor = "pointer";
  btn3.addEventListener("click", () => {
    input_field.value += 3;
  });

  var btn_sub = document.createElement("button");
  btn_sub.textContent = "-";
  btn_sub.style.padding = "20px";
  btn_sub.style.margin = "5px";
  btn_sub.style.width = "75px";
  btn_sub.style.backgroundColor = "white";
  btn_sub.style.border = "1px solid black";
  btn_sub.style.borderRadius = "3px";
  btn_sub.style.cursor = "pointer";
  btn_sub.addEventListener("click", () => {
    input_field.value += "-";
  });

  buttons_3.appendChild(btn1);
  buttons_3.appendChild(btn2);
  buttons_3.appendChild(btn3);
  buttons_3.appendChild(btn_sub);

  //   -------------------------------------------------

  var buttons_4 = document.createElement("div");

  button_container.appendChild(buttons_4);
  //   -------------------------------------------------

  var btnAC = document.createElement("button");
  btnAC.textContent = "AC";
  btnAC.style.padding = "20px";
  btnAC.style.margin = "5px";
  btnAC.style.width = "75px";
  btnAC.style.backgroundColor = "white";
  btnAC.style.border = "1px solid black";
  btnAC.style.borderRadius = "3px";
  btnAC.style.cursor = "pointer";
  btnAC.addEventListener("click", () => {
    input_field.value = "";
  });

  var btn0 = document.createElement("button");
  btn0.textContent = "0";
  btn0.style.padding = "20px";
  btn0.style.margin = "5px";
  btn0.style.width = "75px";
  btn0.style.backgroundColor = "white";
  btn0.style.border = "1px solid black";
  btn0.style.borderRadius = "3px";
  btn0.style.cursor = "pointer";
  btn0.addEventListener("click", () => {
    input_field.value += 0;
  });

  var btnequals = document.createElement("button");
  btnequals.textContent = "=";
  btnequals.style.padding = "20px";
  btnequals.style.margin = "5px";
  btnequals.style.width = "75px";
  btnequals.style.backgroundColor = "white";
  btnequals.style.border = "1px solid black";
  btnequals.style.borderRadius = "3px";
  btnequals.style.cursor = "pointer";
  btnequals.addEventListener("click", () => {
    input_field.value = calculate(input_field.value);
  });

  var btn_sum = document.createElement("button");
  btn_sum.textContent = "+";
  btn_sum.style.padding = "20px";
  btn_sum.style.margin = "5px";
  btn_sum.style.width = "75px";
  btn_sum.style.backgroundColor = "white";
  btn_sum.style.border = "1px solid black";
  btn_sum.style.borderRadius = "3px";
  btn_sum.style.cursor = "pointer";
  btn_sum.addEventListener("click", () => {
    input_field.value += "+";
  });

  buttons_4.appendChild(btnAC);
  buttons_4.appendChild(btn0);
  buttons_4.appendChild(btnequals);
  buttons_4.appendChild(btn_sum);
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
  // for (i = 1; i <= len - 1; i++) {
  //   if (arr[i] == "-") {
  //     arr[i + 1] = subtract(arr[i - 1], arr[i + 1]);
  //   } else if (arr[i] == "+") {
  //     arr[i + 1] = sum(arr[i - 1], arr[i + 1]);
  //   } else if (arr[i] == "*") {
  //     arr[i + 1] = multiply(arr[i - 1], arr[i + 1]);
  //   } else if (arr[i] == "/") {
  //     arr[i + 1] = divide(arr[i - 1], arr[i + 1]);
  //   }
  // }
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

// 9 + 7 - 4 / 2 * 4

// 0 1 2 3 4 5 6 7 8

// 9 + 7 - 2 2 8 8 8
