const express = require('express');
const http = require('http');
var app = express();
var server = http.createServer(app);
const { get_solved } = require('./solved-sudoku');
const port = 8080;

app.get('/sudoku/board', (req, res) => {
    res.send(get_solved());
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
  
module.exports = {app};