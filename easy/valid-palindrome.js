/**
 * https://leetcode.com/problems/valid-palindrome
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * 
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * 
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let isAlphanumeric = /^[0-9a-zA-Z]/;

    while (i < j) {
        if (!s[i].match(isAlphanumeric)) {
            i++;
            continue;
        }
        
        if (!s[j].match(isAlphanumeric)) {
            j--;
            continue;
        }
        
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));