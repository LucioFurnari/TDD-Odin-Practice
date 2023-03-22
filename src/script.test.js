import { capitalize, reverseString, calculator, caesarCipher } from "./script"
test('First character upper case', () => {
  expect(capitalize('hola')).toBe('Hola')
})

test('Reversed string', () => {
  expect(reverseString('hola')).toBe('aloh')
})

test('Testing calculator', () => {
  expect(calculator.add(2,3)).toBe(5)
  expect(calculator.subtract(5,2)).toBe(3)
  expect(calculator.divide(6,2)).toBe(3)
  expect(calculator.multiply(2,5)).toBe(10)
})

test('Testing caesar cipher', () => {
  expect(caesarCipher('abc',1)).toBe('bcd')
})