function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return word === word.split('').reverse().join('');
}



/* 
  Add your pseudocode here
  step 1: First i convert the string to lowercase.
  step 2: Remove any unwanted characters from the input string using the replace() method with a regular expression that matches all non-alphanumeric characters and replaces them with an empty string.
  step 3: Split the resulting string into an array of characters using the split('') method.
  step 4: Reverse the array using the reverse() method.
  step 5: Join the reversed array back into a string using the join('') method.
  Step 6: Compare the resulting reversed string with the original string.
  Step 7: If the two strings are equal, return true, else return false.
*/

/*
  Add written explanation of your solution here
The isPalindrome function checks if a given word is a palindrome or not. A palindrome is a word that reads the same backwards as forwards. To determine if a word is a palindrome, the function first converts the word to lowercase using the toLowerCase() method, and removes any unwanted characters from the word using the replace() method with a regular expression that matches all non-alphanumeric characters and replaces them with an empty string.

The function then splits the resulting string into an array of characters using the split('') method, reverses the array using the reverse() method, and joins the reversed array back into a string using the join('') method. This reversed string is then compared to the original string using the === operator.

If the two strings are equal, the function returns true, indicating that the input word is a palindrome. If they are not equal, the function returns false, indicating that the input word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
