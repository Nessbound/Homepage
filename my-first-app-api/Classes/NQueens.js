class NQueens {
    // Constructor
    constructor() {
        this.board = [];
        this.boardString = "";
        this.rowTaken = [];
        this.leftToRightTaken = [];
        this.rightToLeftTaken = [];
    }

    // Function for building the header
    buildHeader(N) {
        let headerString = "";
        for(let i = 0; i < N; i++) {
            headerString += "~"
        }
        headerString += " Your answer :3 "
        for(let i = 0; i < N; i++) {
            headerString += "~"
        }
        headerString += "<br>";
        this.boardString += headerString;
        return Math.round((headerString.length - N * 2 - 4) / 2)
    }

    // Function for building the boardString
    buildBoardString(N) {
        // Set the boardString to empty
        this.boardString = "";

        let spacesForCenter = this.buildHeader(N)

        for(const YPOS of this.board) {
            this.boardString += "|";
            for(let i = 1; i < spacesForCenter; i++) {
                this.boardString += " ";
            }
            for(const XPOS of YPOS) {
                this.boardString += XPOS + " ";
            }
            for(let i = 1; i < spacesForCenter; i++) {
                this.boardString += " ";
            }
            this.boardString += "|<br>";
        }
        
        for(let i = 0; i < spacesForCenter * 2 + N * 2; i++) {
            this.boardString += "~";
        }
    }

    // Function to build the assets
    buildAssets(N) {
        // Set board and the other instance variables to empty arrays
        this.board = [];
        this.rowTake = [];
        this.leftToRightTaken = [];
        this.rightToLeftTaken = [];

        // Build board and rows and diagnols
        for(let i = 0; i < N; i++) {
            this.board.push([]);
            for(let k = 0; k < N; k++) {
                this.board[i].push("x");
            }
        }
        for(let i = 0; i < N; i++) {
            this.rowTaken.push(false);
        }
        for(let i = 0; i < N * 2 - 1; i++) {
            this.leftToRightTaken.push(false);
            this.rightToLeftTaken.push(false);
        }
    }

    // Function to find the safe positions
    findSafe(N, column) {
        if(column == N) {
            return true;
        }
        for(let row = 0; row < N; row++) {
            let leftToRightVal = row - column + N - 1;
            let rightToLeftVal = row + column - 1;
            if(!this.rowTaken[row]) {
                if(!this.leftToRightTaken[leftToRightVal] && !this.rightToLeftTaken[rightToLeftVal]) {
                    this.board[row][column] = "Q";
                    this.rowTaken[row] = true;
                    this.leftToRightTaken[leftToRightVal] = true;
                    this.rightToLeftTaken[rightToLeftVal] = true;
                    if(this.findSafe(N, column + 1)) {
                        return true;
                    }
                    else {
                        this.board[row][column] = "x";
                        this.rowTaken[row] = false;
                        this.leftToRightTaken[leftToRightVal] = false;
                        this.rightToLeftTaken[rightToLeftVal] = false;
                    }
                }
            }
        }
        return false;
    }

    solveNQueens(N) {
        // Build board and other assets needed
        this.buildAssets(N);

        // Find the safe positions on the board
        this.findSafe(N, 0);

        // Build the board string
        this.buildBoardString(N);

        // Return a string of the solved board
        return this.boardString;
    }
}

module.exports.default = NQueens;