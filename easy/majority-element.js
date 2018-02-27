/**
 * https://leetcode.com/problems/majority-element
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * O(n) time and O(1) space complexity solution.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            count++;
            major = num;
        } else if (major === num) {
            count++;
        } else count--;
    }

    return major;
}

 /**
  * O(n) time O(n) space complexity solution.
  
var majorityElement = function(nums) {
    let map = {};
    let frequency = Math.floor(nums.length/2);
    
    for (num of nums) {
        if (!map[num]) map[num] = 1;
        else map[num]++;
    }

    for (let num in map) {
        if (map[num] > frequency) return +num;
    }
};

 */

console.log(majorityElement([1,1,3,1]));