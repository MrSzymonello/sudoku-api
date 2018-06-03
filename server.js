const express = require('express');
const http = require('http');
var app = express();
var server = http.createServer(app);
const { get_solved, get_solved_with_one_element_fixed } = require('./solved-sudoku');
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/sudoku/board', (req, res) => {
    var value = req.query.value;
    var index = req.query.index;
    if (value !== undefined && index !== undefined) {
        res.send(get_solved_with_one_element_fixed(value, index));
    } else {
        res.send(get_solved());
    }    
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
  
module.exports = {app};