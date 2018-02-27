/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    let n = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        if (i === length - 1 || map[s[i]] >= map[s[i + 1]]) {
            n += map[s[i]];
        } else {
            n -= map[s[i]];
        }
    }

    return n;
};

console.log(romanToInt("XVI"));