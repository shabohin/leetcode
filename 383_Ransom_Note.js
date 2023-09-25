/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = function (ransomNote, magazine) {
    const hash = {}
    let result = true
    magazine.split('').forEach((letter) => {
        if (hash[letter] === undefined) {
            hash[letter] = 1
        } else {
            hash[letter]++
        }
    })

    ransomNote.split('').forEach((letter) => {
        hash[letter]--
        if (hash[letter] === -1 || isNaN(hash[letter])) {
            result = false
        }
    })
    return result
}
