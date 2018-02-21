/**
 * https://leetcode.com/problems/reverse-string
 * 
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Given s = "hello", return "olleh".
 * 
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    /**
     * Seems like string concatenation is faster than array join in V8
     * https://stackoverflow.com/a/7299040
     */
    let reversed = '';
    for (let ch of s) {
        reversed = ch + reversed;
    }
    return reversed;
};

console.log(reverseString('striut'));