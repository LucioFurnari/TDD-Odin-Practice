"use strict";

var _script = require("./script");
test('First character upper case', function () {
  expect((0, _script.capitalize)('hola')).toBe('Hola');
});
test('Reversed string', function () {
  expect((0, _script.reverseString)('hola')).toBe('aloh');
});
test('Testing calculator', function () {
  expect(_script.calculator.add(2, 3)).toBe(5);
  expect(_script.calculator.subtract(5, 2)).toBe(3);
  expect(_script.calculator.divide(6, 2)).toBe(3);
  expect(_script.calculator.multiply(2, 5)).toBe(10);
});