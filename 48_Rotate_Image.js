/**
 * https://leetcode.com/problems/rotate-image/?source=submission-ac
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function (matrix) {
    const n = matrix.length
    const center = (n - 1) / 2
    const rotateFour = (x, y) => {
        const buffer = matrix[center + x][center + y]
        matrix[center + x][center + y] = matrix[center - y][center + x]
        matrix[center - y][center + x] = matrix[center - x][center - y]
        matrix[center - x][center - y] = matrix[center + y][center - x]
        matrix[center + y][center - x] = buffer
    }

    let additionalX = 1
    let additionalY = 0

    if (n % 2 === 0) {
        additionalX = 0.5
        additionalY = 0.5
    }

    for (var i = 0; i < center; i++) {
        for (var j = 0; j < n / 2; j++) {
            rotateFour(additionalX + i, additionalY + j)
        }
    }
}
