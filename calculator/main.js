const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "/", "*", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output.replace(/%/g, "/100")).toString();
    } catch {
      output = "SYNTAX ERROR";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});

const backgroundColorPicker = document.getElementById(
  "background-color-picker"
);
const calculator = document.querySelector(".calculator");

backgroundColorPicker.addEventListener("input", (e) => {
  calculator.style.backgroundColor = e.target.value;
});

const buttonColorPicker = document.getElementById("button-color-picker");

buttonColorPicker.addEventListener("input", (e) => {
  buttons.forEach((button) => {
    button.style.backgroundColor = e.target.value;
  });
});
