// const { assembleStructure } = require("./structure");
import { assembleStructure } from "./structure.js";
import changeDisplayEventHandler from "./eventListener.js";

window.onload = () => {
  // assemble the structure of the page
  assembleStructure();

  // add the required event listeners
  changeDisplayEventHandler();
};
