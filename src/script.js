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
  const charList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z']
  let result = ''
  let encrypted = 0
  let char;
  for(let i=0; i<string.length; i++) {
    for(let j=0; j < charList.length; j++) {
      if(charList[j] == string[i]) {
        char = j
      }
    }
    encrypted = char + shift;
    while(encrypted > 25) {
      encrypted -= 26
    }
    result += charList[encrypted]
  }
  return result
}