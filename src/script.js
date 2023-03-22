export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}
export function reverseString(string) {
  const arr = string.split('')
  const result = []
  for(let i=arr.length; i >= 0; i--) {
    result.push(arr[i])
  }
  return result.join('')
}

export const calculator = {
  add(a,b){return a+ b},
  subtract(a,b){return a-b},
  divide(a,b){return a/b},
  multiply(a,b){return a*b}
}

export function caesarCipher(string, shift) {
  const charList = [{'a':0},{'b':1},{'c':2},{'d':3}]
}

