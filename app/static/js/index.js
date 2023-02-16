// const { assembleStructure } = require("./structure");

window.onload = () => {
  // assemble the structure of the page
  // assembleStructure();

  // add the required event listeners
  let valueArray = [];

  function isNumber(char) {
    return !isNaN(Number(char));
  }

  function updateValueArray(value) {
    if (isNumber(valueArray[valueArray.length - 1])) {
      if (value === "." || isNumber(value)) {
        valueArray[valueArray.length - 1] += value;
      } else if (value === "←") {
        const lastStr = valueArray[valueArray.length - 1];
        if (lastStr.length === 1) {
          valueArray.pop();
        } else {
          valueArray[valueArray.length - 1] = lastStr.slice(
            0,
            lastStr.length - 1
          );
        }
      } else {
        valueArray.push(value);
      }
    } else if (value === "←") {
      console.log(valueArray.pop());
    } else {
      valueArray.push(value);
    }
  }

  document
    .getElementById("button_container_ul")
    .addEventListener("click", (event) => {
      const displayElement = document.getElementById("display_container_input");
      updateValueArray(event.target.value);
      displayElement.value = valueArray.join(" ");
      event.stopPropagation();
    });
};
