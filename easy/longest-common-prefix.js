/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return '';
    if (strs.length === 1) return strs[0];

    let prefix = '';
    let length = strs.reduce((acc, cur) => Math.min(acc, cur.length), Infinity);

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] === strs[j + 1][i]) {
                if (j === strs.length - 2) prefix += strs[j][i];
            }
            else return prefix;
        }
    }

    return prefix;
};