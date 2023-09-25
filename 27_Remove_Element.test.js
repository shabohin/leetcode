import { describe, test, expect } from 'bun:test'
import { removeElement } from './27_Remove_Element'

describe('27_Remove_Element', () => {
    test('case 1', () => {
        const nums = [3, 2, 2, 3]
        const val = 3

        expect(removeElement(nums, val)).toEqual(2)
        expect(nums).toEqual([2, 2, ,])
    })
    test('case 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2]
        const val = 2

        expect(removeElement(nums, val)).toEqual(5)
        expect(nums).toEqual([0, 1, 3, 0, 4, , ,])
    })
})
