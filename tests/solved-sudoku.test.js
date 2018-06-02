const _ = require('lodash');
const { expect } = require('chai');
const { get_solved } = require('./../solved-sudoku');

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

    it('returns sudoku with distinct numbers in each row', function(done) {
        solved = get_solved();

        for(row = 0; row < 9; row++) {
            var rowUnderTest = [];
            for(column = 0; column < 9; column++) {
                rowUnderTest.push(solved[row * 9 + column]);
            }
            expect(_.uniq(rowUnderTest).length).to.equal(9);        
        }

        done();
    });

    it('returns sudoku with distinct numbers in each column', function(done) {
        solved = get_solved();

        for(column = 0; column < 9; column++) {
            var columnUnderTest = [];
            for(row = 0; row < 9; row++) {
                columnUnderTest.push(solved[row * 9 + column])
            }               
            expect(_.uniq(columnUnderTest).length).to.equal(9);        
        }
        
        done();
    });

    it('returns sudoku with distinct numbers in each 3x3 square', function(done) {
        solved = get_solved();

        for(squareRow = 0; squareRow < 3; squareRow++) {            
            for(squareColumn = 0; squareColumn < 3; squareColumn++) {
                var squareUnderTest = [];
                var leftupperIndex = squareRow * 27 + squareColumn * 3;

                squareUnderTest.push(solved[leftupperIndex + 0]);
                squareUnderTest.push(solved[leftupperIndex + 1]);
                squareUnderTest.push(solved[leftupperIndex + 2]);

                squareUnderTest.push(solved[leftupperIndex + 9]);
                squareUnderTest.push(solved[leftupperIndex + 10]);
                squareUnderTest.push(solved[leftupperIndex + 11]);

                squareUnderTest.push(solved[leftupperIndex + 18]);
                squareUnderTest.push(solved[leftupperIndex + 19]);
                squareUnderTest.push(solved[leftupperIndex + 20]);                
            }
            expect(_.uniq(squareUnderTest).length).to.equal(9);        
        }
        
        done();
    });
});
