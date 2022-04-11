function initializeHits() {
    let hits = Array(5)
    Array(5).forEach((_, i) => {
        hits[i] = new Array(false, 5)
    })
    return hits;
}

 function isBingoBoardWinning(bingoBoard, calledNumbers) {
     let hits = initializeHits();
     calledNumbers.forEach(calledNumber => {
        bingoBoard.forEach((row, rowNumber) => {
            row.forEach((bingoNumber, colNumber) => {
                if (calledNumber === bingoNumber) {
                    hits[rowNumber][colNumber] = true
                    if (hits[rowNumber].every(value => Boolean(value))) {
                        return true
                    }
                }
            })
        })
    })
    return false;
}


module.exports = isBingoBoardWinning
