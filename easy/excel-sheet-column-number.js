/**
 * https://leetcode.com/problems/excel-sheet-column-number
 * 
 * Related to question Excel Sheet Column Title
 * 
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * 
 * For example:
 * 
 *  A -> 1
 *  B -> 2
 *  C -> 3
 *  ...
 *  Z -> 26
 *  AA -> 27
 *  AB -> 28 
 * 
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberOfLetter = {};
    let i = 1, n = 0, l = s.length;

    for (let letter of alphabet) {
        numberOfLetter[letter] = i++;
    }
    console.log(numberOfLetter);
    for (let i = l - 1; i >= 0; i--) {
        n += numberOfLetter[s[i]]*Math.pow(26, l - i - 1);
    }

    return n;
};

console.log(titleToNumber('BZ'));