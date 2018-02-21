/**
 * https://leetcode.com/problems/valid-anagram
 * 
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * 
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your solution to such case?
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    
    for (let ch of s) {
        if (!map[ch]) { map[ch] = 0; }
        map[ch]++;
    }

    for (let ch of t) {
        if (!map[ch]) { return false; }
        map[ch]--;
    }

    return Object.keys(map).every((key) => map[key] === 0);
};

console.log(isAnagram('asdfasdf', 'asdffqsa'));