/**
 * https://leetcode.com/problems/plus-one
 * 
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * 
 * The digits are stored such that the most significant digit is at the head of the list.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let addOne = true;

    for (let i = digits.length - 1; i >= 0 && addOne; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            addOne = false;
        } else {
            digits[i] = 0;
            addOne = true;
        }
    }

    if (addOne) return [1].concat(digits);

    return digits;
};

console.log(plusOne([9,9,9,9]))