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

// problem-4

function maxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const findMax = maxNumber([1, 5, 8, 3, 7]);
console.log({ findMax });

// problem -5

function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const remove = removeDuplicates([1, 2, 2, 7, 7, 5, 4, 4, 8, 8, 3, 4, 4]);
console.log({ remove });
