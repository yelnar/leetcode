/**
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x.
 * x is guaranteed to be a non-negative integer.
 * 
 * Example 1:
 * 
 * Input: 4
 * Output: 2
 * Example 2:
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.
 * 
 * Ugly looking solution, bad performance ;(
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let y = x/2;
    
    while (true) {
        if (Math.floor(y*y) > x) {
            if (Math.ceil(y) * Math.ceil(y) === x) return Math.ceil(y);
            else if (Math.ceil(y) * Math.ceil(y) > x) {
                y -= y/2;
            } else {
                return Math.floor(y);
            }
        } else if (Math.floor(y*y) < x) {
            if (Math.ceil(y) * Math.ceil(y) === x) return Math.ceil(y);
            else if (Math.ceil(y) * Math.ceil(y) < x) {
                y += y/2;
            } else {
                return Math.floor(y);
            }
        } else {
            return Math.floor(y);
        }
    }
};

console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(6));
console.log(mySqrt(7));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(200));