/**
 * https://leetcode.com/problems/merge-sorted-array
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 * 
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /**
     * The input array's length might be different than n or m.
     */
    let l1 = nums1.length;
    let l2 = nums2.length;
    nums1.splice(m, l1 - m);
    nums2.splice(n, l2 - n);

    if (nums1[0] >= nums2[n - 1]) {
        nums1.unshift(...nums2);
        return;
    }

    if (nums1[m - 1] <= nums2[0]) {
        nums1.push(...nums2);
        return;
    }

    for (let i = 0; i < m; i++) {
        if (nums1[i] > nums2[0]) {
            swap(nums1, i, nums2, 0);

            for (let j = 1; j < n; j++) {
                if (nums2[j] < nums2[j - 1]) {
                    swap(nums2, j - 1, nums2, j);
                }
            }
        }
    }

    nums1.push(...nums2);
    
    function swap(arr1, i, arr2, j) {
        let temp = arr1[i];
        arr1[i] = arr2[j];
        arr2[j] = temp;
    }
};

/**
 * "Tricky" (read as dumb) inputs:
 * [0], 0, [1], 1
 * [1,0], 1, [2], 1
 * [1,2,3,0,0,0] 3 [2,5,6] 3
 */
let arr1 = [1,2,3,0,0,0];
let arr2 = [2, 5, 6];
merge(arr1, 3, arr2, 3);
console.log(arr1);