/**
 * https://leetcode.com/problems/count-and-say
 * 
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth term of the count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a string.
 * 
 * Example 1:
 * 
 *  Input: 1
 * Output: "1"
 * Example 2:
 * 
 * Input: 4
 * Output: "1211"
 * 
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = ['1'];
    let i = 0;

    while (i < n - 1) {
        for (let j = 0; j < s[i].length; j++) {
            let c = s[i][j];
            let k = 1;

            while (s[i][j + 1] === c) {
                j++;
                k++;
            }

            if (s[i + 1]) s[i + 1] += k + '' + c;
            else s[i + 1] = k + '' + c;
        }

        i++;
    }

    return s[n - 1];
};