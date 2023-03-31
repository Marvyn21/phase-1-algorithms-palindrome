function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    } 
  }
  return true;
}


/* 
  Add your pseudocode here
  step 1: First i convert the string to lowercase and remove any unwanted character
  step 2: Initialize a loop that iterates through the first half of the word
  step 3: Compare the characters at position i and its mirror opposite image
  step 4: If the word is not a palindrome, return false
  step 5: The word is a palindrome, so return true
*/

/*
  Add written explanation of your solution here
  Step 1:
The first step is to convert the input string to lowercase and remove any unwanted characters. This is done to ensure that the comparison process later on is not affected by any capitalization or special characters in the input.

Step 2:
Next, a loop is initialized that iterates through the first half of the word. This is because we only need to compare the characters in the first half of the word with their corresponding characters in the second half.

Step 3:
Inside the loop, the characters at position i and its mirror opposite image are compared. The mirror opposite image refers to the character that is equidistant from the end of the word as the character at position i is from the start. This comparison is done to check if the characters are the same or not.

Step 4:
If the characters at position i and its mirror opposite image are not the same, then the word is not a palindrome, and the function returns false.

Step 5:
If the loop completes without finding any mismatched characters, then the word is a palindrome, and the function returns true.
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
