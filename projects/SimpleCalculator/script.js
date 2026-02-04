"use strict";
// A very simple calculator that uses the eval function.

const display = document.getElementById("display");

// displays elements click on by the user
function addToDisplay(input) {
  display.value += input;
}
// clear the display
function clearDisplay() {
  display.value = "";
}
// calculates the input and catches impossible inputs
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
