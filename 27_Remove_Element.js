/**
 * https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function (nums, val) {
    let out = 0

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            for (var j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1]
            }
            i--
            out++
        }
    }
    return nums.length - out
}
