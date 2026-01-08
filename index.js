// Problem-1

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
const outputString = reverseString("hello");
console.log({ outputString });

//  problem-2

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
const countValue = countVowels("programming");
console.log({ countValue });

// problem-3
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
const palindrome = isPalindrome("madam");
console.log({ palindrome });
