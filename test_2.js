// 1. Function to reverse a string without .reverse()
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 2. Second largest number in an array without .sort()
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

// 3. Remove duplicate values from an array
const removeDuplicates = (arr) => [...new Set(arr)];

// 4. Check whether a given string is a palindrome
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
};

// 5. Count the occurrence of each character in a string
function countChars(str) {
  const counts = {};
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

// 6. Find the missing number in an array from 1 to N
function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

// 7. .map() to convert numbers into squares
const squares = (arr) => arr.map(num => num * num);

// 8. .filter() to return only even numbers
const evens = (arr) => arr.filter(num => num % 2 === 0);

// 9. .reduce() to find the sum of all elements
const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// 10. Check if two strings are anagrams
function areAnagrams(str1, str2) {
  const normalize = (s) => s.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

// 11. Flatten a nested array
const flatten = (arr) => arr.flat(Infinity);

// 12. Custom version of .map() method
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// 13. Sort an array of objects based on a specific property (age)
const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

// 14. First non-repeating character in a string
function firstNonRepeating(str) {
  const charCount = countChars(str); 
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return null;
}

// 15. Difference between == and ===

  ==  (Abstract Equality): Performs type coercion before comparing.
  === (Strict Equality): Compares both value and type without coercion.

console.log(5 == "5");  // true (string "5" is coerced to number 5)
console.log(5 === "5"); // false (number vs string)
