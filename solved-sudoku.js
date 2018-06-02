module.exports.get_solved = () => {
    
    solved_sudoku_seed = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                          4, 5, 6, 7, 8, 9, 1, 2, 3,
                          7, 8, 9, 1, 2, 3, 4, 5, 6,
                          2, 3, 4, 5, 6, 7, 8, 9, 1,
                          5, 6, 7, 8, 9, 1, 2, 3, 4,
                          8, 9, 1, 2, 3, 4, 5, 6, 7,
                          3, 4, 5, 6, 7, 8, 9, 1, 2,
                          6, 7, 8, 9, 1, 2, 3, 4, 5,
                          9, 1, 2, 3, 4, 5, 6, 7, 8];

    // shuffle rows and columns randomly    
    randomlySwapColumns(0, 7, solved_sudoku_seed);
    randomlySwapColumns(1, 7, solved_sudoku_seed);
    randomlySwapColumns(2, 7, solved_sudoku_seed);

    randomlySwapRows(0, 7, solved_sudoku_seed);
    randomlySwapRows(1, 7, solved_sudoku_seed);
    randomlySwapRows(2, 7, solved_sudoku_seed);

    return solved_sudoku_seed;
};

function randomlySwapColumns(columnGrid, iterations, board) {
    for(i = 0; i < iterations; i++) {
        var column1 = columnGrid * 3 + Math.floor(Math.random() * 3);
        var column2 = columnGrid * 3 + (column1 + Math.floor(Math.random() * 2) + 1) % 3;
        swapColumns(column1, column2, board);
    }
}

function randomlySwapRows(rowGrid, iterations, board) {
    for(i = 0; i < iterations; i++) {
        var row1 = rowGrid * 3 + Math.floor(Math.random() * 3);
        var row2 = rowGrid * 3 + (row1 + Math.floor(Math.random() * 2) + 1) % 3;
        swapRows(row1, row2, board);        
    }
}

function randomlySwapRowGrids(iterations, board) {
    for(i = 0; i < iterations; i++) {
        var rowGrid1 = Math.floor(Math.random() * 3);
        var rowGrid2 = (rowGrid1 + Math.floor(Math.random() * 2) + 1) % 3;
        swapRowGrids(rowGrid1, rowGrid2, board);        
    } 
}

function randomlySwapColumnGrids(iterations, board) {
    for(i = 0; i < iterations; i++) {
        var columnGrid1 = Math.floor(Math.random() * 3);
        var columnGrid2 = (columnGrid1 + Math.floor(Math.random() * 2) + 1) % 3;
        swapColumnGrids(columnGrid1, columnGrid2, board);        
    } 
}

function swapRows(row1, row2, board) {
    for(col = 0; col < 9; col++) {
        var index1 = row1 * 9 + col;
        var index2 = row2 * 9 + col;
        swapElements(index1, index2, board);
    }
}

function swapColumns(column1, column2, board) {
    for(row = 0; row < 9; row++) {
        var index1 = column1 + row * 9;
        var index2 = column2 + row * 9;
        swapElements(index1, index2, board);
    }
}

// row grid is set of 3 rows
// there are 3 row grids: 0-2, 3-5, 6-8
// this function swaps two grids
function swapRowGrids(rowGrid1, rowGrid2, board) {
    swapRows(rowGrid1 * 3, rowGrid2 * 3, board);
    swapRows(rowGrid1 * 3 + 1, rowGrid2 * 3 + 1, board);
    swapRows(rowGrid1 * 3 + 2, rowGrid2 * 3 + 2, board);
}

// column grid is set of 3 columns
// there are 3 column grids: 0-2, 3-5, 6-8
// this function swaps two grids
function swapColumnGrids(columnGrid1, columnGrid2, board) {
    swapColumns(columnGrid1 * 3, columnGrid2 * 3, board);
    swapColumns(columnGrid1 * 3 + 1, columnGrid2 * 3 + 1, board);
    swapColumns(columnGrid1 * 3 + 2, columnGrid2 * 3 + 2, board);
}

function swapElements(index1, index2, board) {
    var temp = board[index1];
    board[index1] = board[index2];
    board[index2] = temp;
}
