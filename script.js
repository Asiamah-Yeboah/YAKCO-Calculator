const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        let expression = display.value
          .replace(/π/g, Math.PI)
          .replace(/e/g, Math.E)
          .replace(/√/g, "Math.sqrt")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log10")
          .replace(/ln/g, "Math.log")
          .replace(/\^/g, "**")
          .replace(/!/g, "factorial");

        display.value = evalExpression(expression);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function evalExpression(expr) {
  return Function('"use strict";return (' + expr + ')')();
}
