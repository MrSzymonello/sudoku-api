const { expect } = require('chai');
const request = require('supertest');

const { app } = require('./../server');

describe('GET /sudoku/board', () => {
  it('should get 81 numbers', (done) => {
    request(app)
      .get('/sudoku/board')
      .expect(200)
      .expect((res) => {
        expect(res.body.length).to.equal(81);        
      })
      .end(done);
  });
});

describe('GET /sudoku/board?value=3&index=12', () => {
  it('should get 81 numbers with 12th equal to 3', (done) => {
    request(app)
      .get('/sudoku/board?value=3&index=12')
      .expect(200)
      .expect((res) => {
        expect(res.body[12]).to.equal(3);
      })
      .end(done);
  });
});
