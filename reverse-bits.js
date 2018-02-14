/**
 * https://leetcode.com/problems/reverse-bits
 * 
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
 * 
 * Follow up:
 * If this function is called many times, how would you optimize it?
 * 
 * Related problem: Reverse Integer
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function(n) {
    let result = 0;
    let count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n >>= 1;
    }

    return result;
};

console.log(reverseBits(10));