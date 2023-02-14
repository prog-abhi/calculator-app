const nameMapping = [
  ["←", "(", ")", "mod", "π"],
  ["7", "8", "9", "/", "√"],
  ["4", "5", "6", "x", "square(x)"],
  ["1", "2", "3", "-", "="],
  ["0", ".", "%", "+", "!="],
];

const buttonToIdMapping = {
  "←": "backspace_button",
  "(": "opening_bracket_button",
  ")": "closing_bracket_button",
  mod: "modulo_button",
  π: "pi_button",
  "/": "division_button",
  "√": "sqr_root_button",
  x: "multiply_button",
  "square(x)": "square_button",
  "-": "subtraction_button",
  "=": "equals_button",
  "+": "addition_button",
  "%": "percentage_button",
  ".": "decimal_button",
  "!=": "equal_temp_button",
  0: "zero_button",
  1: "one_button",
  2: "two_button",
  3: "three_button",
  4: "four_button",
  5: "five_button",
  6: "siz_button",
  7: "seven_button",
  8: "eight_button",
  9: "nine_button",
};

const value = "";

export function assembleStructure() {
  const rootDiv = document.getElementById("root");

  // the main div in which the calculator lives
  const calculatorDiv = createCalculator();

  rootDiv.append(calculatorDiv);
}

function createCalculator() {
  // create main container
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "calculator_main_container");

  // create subcontainer 1
  const subDiv1 = document.createElement("div");
  const displayDiv = document.createElement("div");
  displayDiv.setAttribute("id", "display_container");
  displayDiv.innerHTML = `<h1>${value}</h1>`;
  subDiv1.append(displayDiv);

  // create subcontainter 2
  const subDiv2 = document.createElement("div");
  subDiv2.setAttribute("id", "button_container");
  const subDiv2Ul = document.createElement("ul");
  subDiv2Ul.setAttribute("id", "button_container_ul");

  for (let r = 0; r < nameMapping.length; r++) {
    for (let c = 0; c < nameMapping[0].length; c++) {
      const subDivEle = document.createElement("li");
      const subDivEleButton = document.createElement("button");
      const char = nameMapping[r][c];
      subDivEleButton.setAttribute("type", "button");
      subDivEleButton.setAttribute("id", buttonToIdMapping[char]);
      subDivEleButton.innerText = char;
      subDivEleButton.value = char;
      subDivEle.append(subDivEleButton);
      subDiv2Ul.append(subDivEle);
    }
  }

  subDiv2.append(subDiv2Ul);

  // append to main container
  mainDiv.append(subDiv1, subDiv2);

  // return main contaienr
  return mainDiv;
}

// module.exports = {
//   assembleStructure,
// };
