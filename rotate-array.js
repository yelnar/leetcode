/**
 * Rotate an array of n elements to the right by k steps.
 * 
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * 
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * 
 * Hint:
 * Could you do it in-place with O(1) extra space?
 * 
 * Related problem: Reverse Words in a String II
 * 
 * [...a, ...b] => [...b, ...a] is equal to [reverse(reverse(...a), reverse(...b))]
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let l = nums.length;
    k %= l;

    reverse(nums, 0, l - k - 1);
    reverse(nums, l - k, l - 1);
    reverse(nums, 0, l - 1);

    function reverse(arr, from, to) {
        for (let i = 0; i < (to - from)/2; i++) {
            let tmp = arr[from + i];
            arr[from + i] = arr[to - i];
            arr[to - i] = tmp;
        }
    } 
}

let arr = [1,2,3,4,5,6,7];
rotate(arr, 4);