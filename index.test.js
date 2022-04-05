const isBingoBoardWinning = require("./index")

describe("Bingo Board", () => {
    test("isBingoBoardWinning returns true for a winning board", ()=> {
        let testWinningBingoBoard = [
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
        ]
        let testCalledNumbers = [1,2,3,4,5]
        const result = isBingoBoardWinning(testWinningBingoBoard, testCalledNumbers)
        const expected = true
        expect(result).toEqual(expected)
    })
})
