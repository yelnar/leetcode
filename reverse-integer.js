/**
 * https://leetcode.com/problems/reverse-integer
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x);
    x = Math.abs(x);
    let s = '';

    while (x > 0) {
        s += (x%10);
        x = Math.floor(x/10);
    }

    let n = s*sign;

    if ((n >> 0) !== n) {
        return 0;
    }

    return n;
};

console.log(reverse(6463847412));