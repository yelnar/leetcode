/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * 
 * Note:
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 * Follow up:
 * What if the given array is already sorted? How would you optimize your algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is better?
 * What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let i = nums1.length - 1;
    let j = nums2.length - 1;

    quicksort(nums1, 0, i);
    quicksort(nums2, 0, j);

    let nums = [];
    while (i >= 0 && j >= 0) {
        if (nums1[i] === nums2[j]) {
            nums.unshift(nums1[i]);
            i--;
            j--;
        }
        else if (nums1[i] < nums2[j]) { j--; }
        else { i--; }
    }

    return nums;

    function quicksort(arr, left, right) {
        if (left < right) {
            let p = partition(arr, left, right);
            quicksort(arr, left, p);
            quicksort(arr, p + 1, right);
        }

        function partition(arr, left, right) {
            let pivot = arr[right];
            let i = left;
            let j = right;
        
            while (i <= j) {
                while (arr[i] < pivot) { i++; }
                while (arr[j] > pivot) { j--; }

                if (i <= j) {
                    swap(arr, i, j);
                    i++;
                    j--;
                }
            }

            return j;
        }

        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
};

console.log(intersect([1,2,2,1], [1,1,2]));