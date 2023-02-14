const nameMapping = [
  ["backspace", "left bracket", "right bracket", "mod", "n"],
  ["7", "8", "9", "%", "√"],
  ["4", "5", "6", "x", "square(x)"],
  ["1", "2", "3", "-", "="],
  ["0", ".", "%", "+", "="],
];

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
  displayDiv.innerHTML = "<h1>I display here!</h1>";
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
      subDivEleButton.innerText = char;
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
