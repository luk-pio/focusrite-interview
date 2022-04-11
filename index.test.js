import {BingoBoard} from './index';

test.each([
    // Winning Rows
    {
        description: "first row is winning", board: [
            [1, 2, 3, 4, 5],
            [12, 22, 32, 42, 52],
            [13, 23, 33, 43, 53],
            [14, 24, 34, 44, 54],
            [15, 25, 35, 45, 55]

        ], calledNumbers: [1, 2, 3, 4, 5], expected: true
    },
    {
        description: "last row is winning", board: [
            [11, 21, 31, 41, 51],
            [12, 22, 32, 42, 52],
            [13, 23, 33, 43, 53],
            [14, 24, 34, 44, 54],
            [1, 2, 3, 4, 5],

        ], calledNumbers: [1, 2, 3, 4, 5], expected: true
    },
    // Winning Columns
    {
        description: "first column is winning", board: [
            [1, 12, 13, 14, 15],
            [2, 22, 23, 24, 25],
            [3, 32, 33, 34, 35],
            [4, 42, 43, 44, 45],
            [5, 52, 53, 54, 55]

        ], calledNumbers: [1, 2, 3, 4, 5], expected: true
    },
    {
        description: "last column is winning", board: [
            [11, 21, 31, 41, 1],
            [12, 22, 32, 42, 2],
            [13, 23, 33, 43, 3],
            [14, 24, 34, 44, 4],
            [15, 25, 35, 45, 5]

        ], calledNumbers: [1, 2, 3, 4, 5], expected: true
    },
    // Winning Row and Column
    {
        description: "row and column are winning", board: [
            [11, 21, 31, 41, 1],
            [12, 22, 32, 42, 2],
            [13, 23, 33, 43, 3],
            [14, 24, 34, 44, 4],
            [1, 2, 3, 4, 5],

        ], calledNumbers: [1, 2, 3, 4, 5], expected: true
    },
    // Losing Board
    {
        description: "last column has 4 called", board: [
            [11, 21, 31, 41, 1],
            [12, 22, 32, 42, 2],
            [13, 23, 33, 43, 3],
            [14, 24, 34, 44, 4],
            [15, 25, 35, 45, 55]

        ], calledNumbers: [1, 2, 3, 4, 5], expected: false
    },
    {
        description: "last column has 4 called", board: [
            [11, 21, 31, 41, 1],
            [12, 22, 32, 42, 2],
            [13, 23, 33, 43, 3],
            [14, 24, 34, 44, 4],
            [1, 2, 3, 4, 55],

        ], calledNumbers: [1, 2, 3, 4, 5], expected: false
    },
])('returns $expected when $description', ({description, board, calledNumbers, expected}) => {
    const bingoBoard = new BingoBoard(board)
    expect(bingoBoard.isBingo(calledNumbers)).toEqual(expected)
});

test.each([
    // Invalid input
    {
        description: "last column has 4 called", board: [
            [11, 21, 31, 41, 51],
            [12, 22, 32, 42, 52],
            [13, 23, 33, 43, 53],
            [14, 24, 34, 44, 54],

        ], calledNumbers: [1, 2, 3, 4, 5], expected: "Invalid rows count. Was: 4, expected: 5"
    },
    {
        description: "last column has 4 called", board: [
            [11, 21, 31, 41],
            [12, 22, 32, 42],
            [13, 23, 33, 43],
            [14, 24, 34, 44],
            [15, 25, 35, 45]

        ], calledNumbers: [1, 2, 3, 4, 5], expected: "Invalid columns count. Was: 4, expected: 5"
    }

])("throws $expected when $description", ({description, board, calledNumbers, expected}) => {
    const t = () => {
        const bingoBoard = new BingoBoard(board)
        return bingoBoard.isBingo(calledNumbers)
    }
    expect(t).toThrow(expected);
});
