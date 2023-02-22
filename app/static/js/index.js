window.onload = () => {
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
        if (value === "x²") {
          valueArray.push("^", "2");
        } else valueArray.push(value);
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
      if (event.target.value === "=") {
        const displayValue = "Calculating...";
        // send a request to server to evaluate the expression
        const body = JSON.stringify({ payload: valueArray });
        const method = "POST";
        const headers = {
          "Content-Type": "application/json",
        };
        const options = {
          method,
          headers,
          body,
        };
        fetch("/app", options)
          .then((res) => res.json())
          .then((value) => {
            valueArray = [`${value.value}`];
            displayElement.innerHTML = `<h2>${valueArray.join(" ")}</h2>`;
          })
          .catch((e) => console.error(e));

        valueArray = [];
        displayElement.innerHTML = `<h2>${displayValue}</h2>`;
      } else {
        updateValueArray(event.target.value);
        displayElement.innerHTML = `<h2>${valueArray.join(" ")}</h2>`;
      }
      event.stopPropagation();
    });
};
