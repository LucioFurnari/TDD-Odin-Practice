"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caesarCipher = caesarCipher;
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
function caesarCipher(string, shift) {
  var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z'];
  var result = '';
  var encrypted = 0;
  var _char;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < charList.length; j++) {
      if (charList[j] == string[i]) {
        _char = j;
      }
    }
    encrypted = _char + shift;
    while (encrypted > 25) {
      encrypted -= 26;
    }
    result += charList[encrypted];
  }
  return result;
}