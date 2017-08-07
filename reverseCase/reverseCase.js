/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseString = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      newString += str.charAt(i).toLowerCase();
    } else {
      newString += str.charAt(i).toUpperCase();
    }
  }
  return newString;
};
console.log(reverseString('Hello World'));
