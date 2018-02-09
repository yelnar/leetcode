/**
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * Example 2:
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Using built-in fn
    // return haystack.indexOf(needle);

    if (!needle) return 0;
    const nL = needle.length;
    const hL = haystack.length;

    for (let i = 0, j = 0; i < hL; i++) {
        if (haystack[i] === needle[j]
            && i + nL - 1 < hL
            && haystack[i + nL - 1] === needle[nL - 1]) {
            while (j < nL && haystack[i] === needle[j]) {
                j++;
                i++;
            }

            if (j === nL) return i - j;

            i -= j;
            j = 0;
            continue;
        }
    }

    return -1;
};

console.log('result: ', strStr("hello", "ll"));
console.log('result: ', strStr("mississippi", "issip"));
console.log('result: ', strStr("mississippi", "pi"));
console.log('result: ', strStr("aaaaaaaaaa", "aaaaaaaaad"));