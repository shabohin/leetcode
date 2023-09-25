import { describe, test, expect } from 'bun:test'
import { canConstruct } from './383_Ransom_Note'

describe('383_Ransom_Note', () => {
    test('case 1', () => {
        const ransomNote = 'a'
        const magazine = 'b'

        expect(canConstruct(ransomNote, magazine)).toEqual(false)
    })
    test('case 2', () => {
        const ransomNote = 'aa'
        const magazine = 'ab'

        expect(canConstruct(ransomNote, magazine)).toEqual(false)
    })
    test('case 3', () => {
        const ransomNote = 'aa'
        const magazine = 'aab'

        expect(canConstruct(ransomNote, magazine)).toEqual(true)
    })
})
