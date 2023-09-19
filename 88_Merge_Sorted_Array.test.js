import { describe, test, expect } from 'bun:test'
import { merge } from './88_Merge_Sorted_Array'

describe('88_Merge_Sorted_Array', () => {
    test('case 1', () => {
        let nums1 = [1, 2, 3, 0, 0, 0]
        let nums2 = [2, 5, 6]

        merge(nums1, 3, nums2, 3)

        expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6])
        console.log('nums1 :>> ', nums1);
    })
    test('case 2', () => {
        let nums1 = [1]
        let nums2 = []

        merge(nums1, 1, nums2, 0)

        expect(nums1).toStrictEqual([1])
    })
    test('case 3', () => {
        let nums1 = [0]
        let nums2 = [1]

        merge(nums1, 0, nums2, 1)

        expect(nums1).toStrictEqual([1])
    })
})
