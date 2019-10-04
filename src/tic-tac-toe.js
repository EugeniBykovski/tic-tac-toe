class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.markStorage = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }
    getCurrentPlayerSymbol() {
        //console.log('PlayerSymbol: '+ this.playerSymbol);
        return this.playerSymbol;
    }
    nextTurn(rowIndex, columnIndex) {
        //console.log('PlayerSymbol: '+ this.playerSymbol);
        if (!this.markStorage[rowIndex][columnIndex]) {
            if (this.playerSymbol === 'x') {
                this.markStorage[rowIndex][columnIndex] = 'x';
            } else {
                this.markStorage[rowIndex][columnIndex] = 'o';
            }
            var player = this.getCurrentPlayerSymbol();

            if (player === 'x') {
                this.playerSymbol = 'o';
            }
            if (player === 'o') {
                this.playerSymbol = 'x';
            }
        }
        //console.log(this.markStorage);
    }
    isFinished() {

        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }
    getWinner() {

        for (var i = 0; i < 3; i++) {

            var x = this.getFieldValue(i, 0);
            var x1 = this.getFieldValue(i, 1);
            var x2 = this.getFieldValue(i, 2);

            if (x === x1 && x1 === x2 && x !== null) {
                return x;
            }

            var y = this.getFieldValue(0, i);
            var y1 = this.getFieldValue(1, i);
            var y2 = this.getFieldValue(2, i);

            if (y === y1 && y1 === y2 && y !== null) {
                return y;
            }
        }

        var diog = this.getFieldValue(0, 0);
        var diog1 = this.getFieldValue(1, 1);
        var diog2 = this.getFieldValue(2, 2);
        if (diog === diog1 && diog1 === diog2 && diog !== null) {
            return diog;
        }
        var diog = this.getFieldValue(0, 2);
        var diog1 = this.getFieldValue(1, 1);
        var diog2 = this.getFieldValue(2, 0);
        if (diog === diog1 && diog1 === diog2 && diog !== null) {
            return diog;
        }
        return null;

    }
    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.markStorage[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }
    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        }
        return false;
    }
    getFieldValue(rowIndex, colIndex) {
        return this.markStorage[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;