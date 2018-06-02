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
