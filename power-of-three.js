/**
 * https://leetcode.com/problems/power-of-three
 * 
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Follow up:
 * Could you do it without using any loop / recursion?
 * 
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    // 5559060566555523 is highest power of 3 less than Number.MAX_SAFE_INTEGER = 9007199254740991
    return n > 0 && 5559060566555523 % n === 0;

    /**
     * Using loop
     
    while (n > 1) {
        if (n % 3 !== 0) { return false; }
        n /= 3
    }
    return true;
    
     */
};

console.log(isPowerOfThree(81));