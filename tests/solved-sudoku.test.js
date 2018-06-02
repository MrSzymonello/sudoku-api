const _ = require('lodash');
const { expect } = require('chai');
const { get_solved, get_solved_with_one_element_fixed } = require('./../solved-sudoku');

describe('solved-sudoku', () => {

    it('returns sudoku with 81 elements', function(done) {
        solved = get_solved();
        expect(solved.length).to.equal(81);
        done();
    });

    it('returns sudoku with numbers between 1 and 9 in each cell', function(done) {
        solved = get_solved();

        for(row = 0; row < 9; row++) {
            for(column = 0; column < 9; column++) {
                expect(solved[row * 9 + column]).to.be.within(1, 9);
            }
        }

        done();
    });

    it('returns sudoku (none fixed element) with distinct numbers in each row', function(done) {
        solved = get_solved();        
        test_in_row_uniqueness(solved);
        done();
    });

    it('returns sudoku (none fixed element) with distinct numbers in each column', function(done) {
        solved = get_solved();        
        test_in_column_uniqueness(solved);
        done();
    });

    it('returns sudoku (none fixed element) with distinct numbers in each 3x3 square', function(done) {
        solved = get_solved();        
        test_in_grid_uniqueness(solved);
        done();
    });

    it('returns sudoku (with one fixed element) with distinct numbers in each row', function(done) {
        solved = get_solved_with_one_element_fixed(2, 79);
        test_in_row_uniqueness(solved);
        done();
    });

    it('returns sudoku (with one fixed element) with distinct numbers in each column', function(done) {
        solved = get_solved_with_one_element_fixed(1, 7);
        test_in_column_uniqueness(solved);
        done();
    });

    it('returns sudoku (with one fixed element) with distinct numbers in each 3x3 square', function(done) {
        solved = get_solved_with_one_element_fixed(9, 57);
        test_in_grid_uniqueness(solved);
        done();
    });

    it('returns sudoku with one fixed element', function(done) {
        const requestedValue = 8;
        const requestedIndex = 43;        
        solved = get_solved_with_one_element_fixed(requestedValue, requestedIndex);        
        const resultValue = solved[requestedIndex];
        expect(resultValue).to.equal(requestedValue);
        done();
    })
});

function test_in_row_uniqueness(board) {
    for(row = 0; row < 9; row++) {
        var rowUnderTest = [];
        for(column = 0; column < 9; column++) {
            rowUnderTest.push(board[row * 9 + column]);
        }
        expect(_.uniq(rowUnderTest).length).to.equal(9);        
    }
}

function test_in_column_uniqueness(board) {
    for(column = 0; column < 9; column++) {
        var columnUnderTest = [];
        for(row = 0; row < 9; row++) {
            columnUnderTest.push(board[row * 9 + column])
        }               
        expect(_.uniq(columnUnderTest).length).to.equal(9);        
    }
}

function test_in_grid_uniqueness(board) {
    for(squareRow = 0; squareRow < 3; squareRow++) {            
        for(squareColumn = 0; squareColumn < 3; squareColumn++) {
            var squareUnderTest = [];
            var leftupperIndex = squareRow * 27 + squareColumn * 3;

            squareUnderTest.push(board[leftupperIndex + 0]);
            squareUnderTest.push(board[leftupperIndex + 1]);
            squareUnderTest.push(board[leftupperIndex + 2]);

            squareUnderTest.push(board[leftupperIndex + 9]);
            squareUnderTest.push(board[leftupperIndex + 10]);
            squareUnderTest.push(board[leftupperIndex + 11]);

            squareUnderTest.push(board[leftupperIndex + 18]);
            squareUnderTest.push(board[leftupperIndex + 19]);
            squareUnderTest.push(board[leftupperIndex + 20]);                
        }
        expect(_.uniq(squareUnderTest).length).to.equal(9);        
    }
}