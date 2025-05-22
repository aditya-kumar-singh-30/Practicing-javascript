// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let number = x;
    let reverse = 0;

    while(number>0){
        let remainder = number%10;
         reverse = reverse*10 +  remainder
         number = Math.floor(number/10);
    }
    return reverse == x;
};