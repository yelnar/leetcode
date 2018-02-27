/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s || s === '') return true;

    let arr = [];
    let left ={
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let right = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let c of s) {
        if (left[c]) {
            arr.push(c);
            continue;
        }
        
        if (arr.length === 0 || arr[arr.length - 1] !== right[c]) return false;
        
        arr.pop();
    }

    return arr.length === 0;
};