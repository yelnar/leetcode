/**
 * https://leetcode.com/problems/factorial-trailing-zeroes
 * 
 * Given an integer n, return the number of trailing zeroes in n!.
 * 
 * Note: Your solution should be in logarithmic time complexity.
 * 
 * 10 = 2 * 5;
 * 2, 4, 6, 8, ...
 * 5, 10 (5 * 2), 15 (5 * 3), 20 (5 * 4), 25 (5 * 5), ...
 * 
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fives = 0;
    let d = 5;

    while (n/d >= 1) {
        fives += Math.floor(n/d);
        d *= 5;
    }

    return fives;
};

console.log(trailingZeroes(25));