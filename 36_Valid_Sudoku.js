/**
 * https://leetcode.com/problems/valid-sudoku/description/?source=submission-ac
 * @param {character[][]} board
 * @return {boolean}
 */
export const isValidSudoku = function (board) {
    const createArray = (length) => Array.from(Array(length).keys())

    const isPartValid = (part) => {
        return part.reduce(
            (acc, cur) => {
                if (cur === '.' || acc.result === false) {
                    return acc
                }
                if (acc.hash[cur]) {
                    return { hash: acc.hash, result: false }
                }
                acc.hash[cur] = true
                return acc
            },
            { hash: {}, result: true }
        ).result
    }

    const isValidArray = (func) => {
        return createArray(9)
            .map(func)
            .reduce((acc, cur) => {
                return acc && cur
            }, true)
    }

    const isRowsValid = (board) => {
        return isValidArray((row) => isPartValid(board[row]))
    }

    const isColumsValid = (board) => {
        return isValidArray((column) => isPartValid(createArray(9).map((row) => board[row][column])))
    }

    const isBoxesValid = (board) => {
        const positions = createArray(9).map((index) => [Math.floor(index / 3), index % 3])
        return isValidArray((index) =>
            isPartValid(
                positions.map(
                    (position) => board[position[0] + Math.floor(index / 3) * 3][position[1] + (index % 3) * 3]
                )
            )
        )
    }

    return isRowsValid(board) && isColumsValid(board) && isBoxesValid(board)
}
