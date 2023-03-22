"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculator = void 0;
exports.capitalize = capitalize;
exports.reverseString = reverseString;
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
function reverseString(string) {
  var arr = string.split('');
  var result = [];
  for (var i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join('');
}
var calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    return a / b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  }
};
exports.calculator = calculator;
console.log(calculator);