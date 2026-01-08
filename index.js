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

const remove = removeDuplicates([1, 2, 2, 7, 7, 4, 4]);
console.log({ remove });

// problem-6

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const sum = sumArray([1, 2, 3, 4]);
console.log({ sum });

// problem-7
function findEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}
const evenNumbers = findEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log({ evenNumbers });

// problem-8

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return result.join(" ");
}
const capitalWord = capitalizeWords("hello developer");
console.log({ capitalWord });

// problem-9
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
const factorialValue = factorial(3);
console.log({ factorialValue });
