const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".action-btn");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (buttonValue) => {
  if (buttonValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (buttonValue === "AC") {
    output = "";
  } else if (buttonValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(buttonValue)) return;
    output += buttonValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});

const copyBtn = document.querySelector(".copy-btn");

copyBtn.addEventListener("click", function () {
  const text = display.value;
  navigator.clipboard
    .writeText(text)
    .catch((err) => {
      console.error(`Failed to copy text: ${err}`);
    });
});

