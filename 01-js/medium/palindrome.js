/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  const skipCharacters = new Set("?.!,; ");
  while (left <= right) {
    if (skipCharacters.has(str[left])) {
      left += 1
      continue
    }
    if (skipCharacters.has(str[right])) {
      right -= 1
      continue
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase())
      return false;
    left += 1;
    right -= 1;
  }
  return true;
}

module.exports = isPalindrome;
