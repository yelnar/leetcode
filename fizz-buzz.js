/**
 * https://leetcode.com/problems/fizz-buzz
 * 
 * Write a program that outputs the string representation of numbers from 1 to n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
 * ]
 * 
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = Array(n);

    for (let i = 0, fizz = 0, buzz = 0; i < n; i++) {
        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            arr[i] = 'FizzBuzz';
            fizz = buzz = 0;
        } else if (fizz === 3) {
            arr[i] = 'Fizz';
            fizz = 0;
        } else if (buzz === 5) {
            arr[i] = 'Buzz';
            buzz = 0;
        } else {
            arr[i] = String(i + 1);
        }
    }

    return arr;
};

console.log(fizzBuzz(15));