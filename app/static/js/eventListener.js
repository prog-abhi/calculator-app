import calculate from "./calculations.js";

let value = [];
let valueString = value.join("");

export default function changeDisplayEventHandler() {
  const displayContainer = document.getElementById("display_container");

  // assign a event listener at ul list
  document
    .getElementById("button_container_ul")
    .addEventListener("click", (event) => {
      if (event.target.value === "←") {
        value.pop();
      } else if (event.target.value === "=") {
        const answer = calculate(valueString);
        value;
        displayContainer.innerHTML = `<h1>${answer}</h1>`;
        value = [];
        valueString = answer;
        return;
      } else {
        value.push(event.target.value);
      }
      valueString = value.join("");
      displayContainer.innerHTML = `<h1>${valueString}</h1>`;
    });
}
