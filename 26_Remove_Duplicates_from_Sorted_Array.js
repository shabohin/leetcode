/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function (nums) {

    for (var i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i+1, 1)
            i--
        }
    }
    return nums.length
}
