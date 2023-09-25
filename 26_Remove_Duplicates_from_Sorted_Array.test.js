import { describe, test, expect } from 'bun:test'
import { removeDuplicates } from './26_Remove_Duplicates_from_Sorted_Array'

describe('26_Remove_Duplicates_from_Sorted_Array', () => {
    test('case 1', () => {
        let nums = [1, 1, 2]

        expect(removeDuplicates(nums)).toEqual(2)
        expect(nums).toEqual([1, 2, undefined])
    })
    test('case 2', () => {
        let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

        expect(removeDuplicates(nums)).toEqual(5)
        expect(nums).toEqual([0, 1, 2, 3, 4, undefined, undefined, undefined, undefined, undefined])
    })
})
