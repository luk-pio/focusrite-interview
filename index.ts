export class BingoBoard {
    public static rowsCount = 5;
    public static columnsCount = 5;

    private numbers: number[][];

    constructor(numbers: number[][]) {
        this.validateNumbers(numbers);
        this.numbers = numbers;
    }

    validateNumbers(numbers: number[][]) {
        if (numbers.length !== BingoBoard.rowsCount) {
            throw new Error(`Invalid rows count. Was: ${numbers.length}, expected: ${BingoBoard.rowsCount}`);
        }

        numbers.forEach(row => {
            if (row.length !== BingoBoard.columnsCount) {
                throw new Error(`Invalid columns count. Was: ${row.length}, expected: ${BingoBoard.columnsCount}`);
                // Could also validate if there are no duplicate numbers in the board. 
                // Choosing not do do that since it's not a requirement and would cause significant overhead.
            }
        });
    }

    public numberAt(column: number, row: number): number {
        if (column < 0 || column >= BingoBoard.columnsCount) throw new Error("Column out of range");
        if (row < 0 || row >= BingoBoard.rowsCount) throw new Error("Row out of range");
        return this.numbers[row][column];
    }

    public isBingo(calledNumbers: number[]): boolean {
        let hits = new BingoBoardHits(BingoBoard.rowsCount, BingoBoard.columnsCount)
        let calledNumbersSet = new Set(calledNumbers);

        for (const [rowNumber, row] of this.numbers.entries()) {
            for (const [columnNumber, bingoNumber] of row.entries()) {
                if (calledNumbersSet.has(bingoNumber)) {
                    if (hits.markHit(rowNumber, columnNumber)) return true;
                }
            }
        }
        return false
    }
}

class BingoBoardHits {
    private rowHits: number[];
    private columnHits: number[];
    private winningRow: number | null = null;
    private winningColumn: number | null = null;

    constructor(rowsCount: number, columnsCount: number) {
        if (rowsCount < 0) throw new Error("rowsCount cannot be negative");
        if (columnsCount < 0) throw new Error("columnsCount cannot be negative");
        this.rowHits = Array(rowsCount).fill(0);
        this.columnHits = Array(columnsCount).fill(0);
    }

    public markHit(row: number, column: number): boolean {
        if (++this.rowHits[row] >= BingoBoard.rowsCount) {
            this.winningRow = row;
            return true;
        }

        if (++this.columnHits[column] >= BingoBoard.columnsCount) {
            this.winningColumn = column;
            return true;
        }

        return false;
    }

    public isBingo(): boolean {
        return this.winningRow !== null || this.winningColumn !== null;
    }
}
