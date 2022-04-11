const readline = require('readline');
const {BingoBoard} = require('./bingoBoard');

(async () => {
    await main();
})()

async function main(): Promise<void> {
    let {inputBoard, calledNumbers} = await readBingoGameInput();
    const bingoBoard = new BingoBoard(inputBoard);
    console.log(bingoBoard.isBingo(calledNumbers));
}


function readBingoGameInput(): Promise<{ inputBoard: number[][], calledNumbers: number[] }> {
    var reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        let calledNumbers = [];
        let linesRead = 0;
        let inputBoard = Array(BingoBoard.rowsCount).fill(null)
        reader.on('line', (line) => {
            if (linesRead >= BingoBoard.rowsCount + 1) {
                reader.close();
                resolve({calledNumbers, inputBoard});
            }

            if (linesRead === 0) calledNumbers = parseNumberList(line, ',');
            else if (linesRead >= 2 && linesRead < BingoBoard.rowsCount + 2)
                inputBoard[linesRead - 2] = parseNumberList(line, ' ');
            linesRead++;
        });
    });
}


function parseNumberList(line: string, separator: string): number[] {
    const numbersList = [];
    for (const char of line.split(separator)) {
        const trimmed = char.trim();
        if (trimmed.length > 0) {
            numbersList.push(parseInt(trimmed));
        }
    }
    return numbersList;
}

function parseNumber(str: string): number {
    let number = parseInt(str);
    if (isNaN(number)) {
        throw new Error(`Invalid number: ${str}`);
    }
    return number;
}

