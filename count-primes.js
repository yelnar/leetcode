/**
 * https://leetcode.com/problems/count-primes
 * 
 * Description:
 * 
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primes = Array(n);
    primes.fill(true);
    let result = 0;

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            result++;
            for (let j = 2; j*i < n; j++) {
                primes[j*i] = false;
            }
        }
    }

    return result;
};

console.log(countPrimes(6));